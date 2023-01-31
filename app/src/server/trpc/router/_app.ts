import { router } from "../trpc";
import { authRouter } from "./auth";
import { sanityRouter } from "./sanity";
import { farmersRouter } from "./farmers";


export const appRouter = router({
  auth: authRouter,
  sanity: sanityRouter,
  farmer: farmersRouter

});



// export type definition of API
export type AppRouter = typeof appRouter;


