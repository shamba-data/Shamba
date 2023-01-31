import { router, publicProcedure } from "../trpc";
import { prisma } from "../../db/client";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import z from "zod";

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

        })
})