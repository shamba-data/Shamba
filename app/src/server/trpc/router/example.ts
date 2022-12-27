import { z } from "zod";
import client from "../../../../client";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getReports: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    const reports = client.fetch(input)
    return reports;
    
  })
});
