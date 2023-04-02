import { router, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import z from "zod";


// const sendgrid = require('@sendgrid/mail');
const farmerInfoSelect = Prisma.validator<Prisma.FarmersSelect>()({
    id: true,
    fullName: true,
    phoneNumber: true,
    subscribed: true,
});



export const farmersRouter = router({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                fullName: z.string(),
                phoneNumber: z.string(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const newFarmer = await ctx.prisma.farmers.create({
                data: input,
                select: farmerInfoSelect
            });

            return newFarmer;

        }),
    preSignups: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                fullName: z.string(),
                whatsappNumber: z.string(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            // stuff for sending the email
            // const SENDGRID_API_KEY = "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";
            // sendgrid.setApiKey(SENDGRID_API_KEY);
            // const msg = {
            //     to: input.email,
            //     from: "b.mboya@alustudent.com",
            //     subject: "Welcome to Shamba Data",
            //     text: "Welcome to Shamba Data",
            //     html: "<p>Thank you for Signing Up for Shamba Data services. You will be receiving Market Information via your Whatsapp Inbox every morning.</p>",
            // };
            // sendgrid
            //     .send(msg)
            //     .then((resp) => {
            //         console.log('Email sent \n', resp)
            //     })
            //     .catch((err) => {
            //         console.error(err, "I am the error")
            //     })

            const newPreSignup = await ctx.prisma.preSignups.create({
                data: input,
            });
            return newPreSignup;
        }),
    byId: publicProcedure
        .input(
            z.object({
                phoneNumber: z.string(),
            })
        )
        .query(async ({ input, ctx }) => {
            const farmer = await ctx.prisma.farmers.findFirst({
                where: {
                    phoneNumber: input.phoneNumber,
                },
                select: farmerInfoSelect,
            });

            if (!farmer) {
                throw new TRPCError({
                    code: "NOT_FOUND",
                    message: "Farmer not found",
                });
            }

            return farmer;
        }
        ),
    byPhoneNumber: publicProcedure
        .query(async ({ ctx }) => {
            const data: { phoneNumber: string, fullName: string }[] = []
            const farmers = await ctx.prisma.farmers.findMany({
                select: farmerInfoSelect,
            });
            farmers.forEach(farmer => {
                data.push({ phoneNumber: farmer.phoneNumber, fullName: farmer.fullName })
            })

            return data;
        })
})