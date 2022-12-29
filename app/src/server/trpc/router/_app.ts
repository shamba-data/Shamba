import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { sanityRouter } from "./sanity";


export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  sanity: sanityRouter
});



// export type definition of API
export type AppRouter = typeof appRouter;


