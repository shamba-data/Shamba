import { router, publicProcedure } from "../trpc";
import { prisma } from "../../db/client";
import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import z from "zod";

// const farmerInfoSelect = Prisma.validator<Prisma.FarmersSelect>()({
//     id: true,
//     fullName: true,
//     phoneNumber: true,
// })






export const farmersRouter = router({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                fullName: z.string().min(1),
                phoneNumber: z.string().min(1)
            })
        )
        .mutation(async ({ input }) => {

            const newFarmer = await prisma.farmers.create({
                data: input,
                // select: farmerInfoSelect
            });

            return newFarmer;

        })
})