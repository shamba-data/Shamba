import { router, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from 'zod';

export const subscriberRouter = router({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                email: z.string().email(),
            })
        )
        .mutation(async ({ input, ctx }) => { })
})