import { router, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import z from "zod";
const axios = require('axios');



const farmerInfoSelect = Prisma.validator<Prisma.FarmersSelect>()({
    id: true,
    fullName: true,
    phoneNumber: true,
    subscribed: true,
    expiresAt: true,
    createdAt: true
});

export const farmersRouter = router({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                fullName: z.string(),
                phoneNumber: z.string(),
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
            const farmers = await ctx.prisma.farmers.findMany({
                select: farmerInfoSelect,
            })
            farmers.forEach(farmer => {
                // phoneNumbers.push(farmer.phoneNumber)
                sendInfo(farmer.phoneNumber, input.info)
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
                        console.log(JSON.stringify(response.data));
                    })
                    .catch((error) => {
                        console.error(error);
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
        })
})