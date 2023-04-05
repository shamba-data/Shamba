import { router } from "../trpc";
import { authRouter } from "./auth";
import { sanityRouter } from "./sanity";
import { farmersRouter } from "./farmers";
import { subscriberRouter } from "./subscribers";
import { payments } from "./payments";


export const appRouter = router({
  auth: authRouter,
  sanity: sanityRouter,
  farmer: farmersRouter,
  subscriber: subscriberRouter,
  payments

});



// export type definition of API
export type AppRouter = typeof appRouter;


