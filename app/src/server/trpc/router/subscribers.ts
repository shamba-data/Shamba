import { router, publicProcedure } from "../trpc";
import { Prisma } from "@prisma/client";
import z from 'zod';

const subscriberSelect = Prisma.validator<Prisma.EmailSubsribersSelect>()({
    id: true,
    email: true,
})

export const subscriberRouter = router({
    add: publicProcedure
        .input(
            z.object({
                id: z.string().cuid().optional(),
                email: z.string().email(),
            })
        )
        .mutation(async ({ input, ctx }) => {
            const subsriber = await ctx.prisma.emailSubsribers.create({
                data: input,
                select: subscriberSelect,
            });
            return subsriber;
        }),

})