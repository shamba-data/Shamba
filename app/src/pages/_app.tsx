import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "@next/font/google";
import { trpc } from "../utils/trpc";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps, AppType } from "next/app";
import "../styles/globals.css";
import "../components/BookDemo/styles.scss";
import { Analytics } from "@vercel/analytics/react";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     // <ClerkProvider {...pageProps}>
//     <Component {...pageProps} />
//     // {/* </ClerkProvider> */}
//   );
// };

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    // <ClerkProvider {...pageProps}>
    <SessionProvider session={session}>
      <main className={`${montserrat.variable} font-montserrat`}>
        {/* <main className={`font-montserrat`}> */}
        <Component {...pageProps} />
        <Analytics />
      </main>
    </SessionProvider>
    // </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
