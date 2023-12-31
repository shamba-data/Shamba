import { router, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import z from "zod";
import axios from 'axios';

const farmerInfoSelect = Prisma.validator<Prisma.FarmersSelect>()({
    id: true,
    fullName: true,
    phoneNumber: true,
    subscribed: true,
    expiresAt: true,
    createdAt: true
});

const preSignupInfoSelect = Prisma.validator<Prisma.PreSignupsSelect>()({
    id: true,
    fullName: true,
    whatsappNumber: true,

})

export const farmersRouter = router({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                fullName: z.string(),
                phoneNumber: z.string().regex(/^260\d{9}$/),
                subscribed: z.boolean().optional(),
                expiresAt: z.string(),
                createdAt: z.string(),
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
    marketInfo: publicProcedure
        .input(
            z.object({
                info: z.string(),

            }))
        .mutation(async ({ input, ctx }) => {
            let phoneNumbers = [];
            const farmers = await ctx.prisma.preSignups.findMany({
                select: preSignupInfoSelect,
            })
            // const farmers = await ctx.prisma.farmers.findMany({
            //     select: farmerInfoSelect,
            // })
            farmers.forEach(farmer => {
                // phoneNumbers.push(farmer.phoneNumber)
                sendInfo(farmer.whatsappNumber, input.info)
                // sendInfo(farmer.phoneNumber, input.info)
            })
            function sendInfo(phoneNumber: string, info: string) {
                let whatsappData = JSON.stringify({
                    "messaging_product": "whatsapp",
                    "recipient_type": "individual",
                    "to": phoneNumber,
                    "type": "template",
                    "template": {
                        "name": "market_update",
                        "language": {
                            "code": "en_GB"
                        },
                        "components": [
                            {
                                "type": "body",
                                "parameters": [
                                    {
                                        "type": "text",
                                        "text": info
                                    }
                                ]
                            }
                        ]
                    }
                })
                let config = {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `https://graph.facebook.com/${process.env.Version}/${process.env.NEXT_PUBLIC_phone_number_id}/messages`,
                    headers: {
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_access_token}`,
                        'Content-Type': 'application/json'
                    },
                    data: whatsappData,
                };
                axios.request(config)
                    .then((response) => {
                        console.log("I am not the error")
                    })
                    .catch((error) => {
                        console.log("I got an error")

                        console.log(error.response.data.error.error_data, "sth is wrong with the request")
                    });
            }

        }),


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
        }),

    updatePrice: publicProcedure
        .input(
            z.object({
                price: z.number(),
                crop: z.string(),
                Date: z.string(),
                market: z.enum([
                    "Ndola",
                    "Kasumbalesa",
                    "Lusaka",
                    "Kitwe"])
            })
        )
        .mutation(async ({ input, ctx }) => {
            const newPrice = await ctx.prisma.prices.create({
                data: input,
            });
            return newPrice;
        }),
    deleteFarmer: publicProcedure
        .input(
            z.object({
                phoneNumber: z.string(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const deletedFarmer = await ctx.prisma.farmers.delete({
                where: {
                    phoneNumber: input.phoneNumber,
                },
                select: farmerInfoSelect,
            });
            return deletedFarmer;
        })
})