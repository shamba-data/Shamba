import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";

import { getServerAuthSession } from "../common/get-server-auth-session";
import { prisma } from "../db/client";
import client from "../../utils/sanity"
import * as trpc from "@trpc/server";

type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
    client,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/


export const createContext = async (opts?: CreateNextContextOptions) => {
  // const { req, res } = opts;
  const req = opts?.req;
  const res = opts?.res;

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  return await createContextInner({
    session,
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;


// This is the context I added while messing with sanity

export const createRouter = () => trpc.router<Context>();
