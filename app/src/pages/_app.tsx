import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "@next/font/google";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <main className={`${montserrat.variable} font-montserrat`}>
          {/* <Hydrate state={pageProps.dehydratedState}> */}
          <Component {...pageProps} />
          {/* </Hydrate> */}
        </main>
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(MyApp);
