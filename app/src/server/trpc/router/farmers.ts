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