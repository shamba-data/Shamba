import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Montserrat } from "@next/font/google";
import { trpc } from "../utils/trpc";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps, AppType } from "next/app";
import "../styles/globals.css";
import "../components/BookDemo/styles.scss";
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

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${montserrat.variable} font-montserrat`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

// const MyApp: AppType<{ session: Session | null }> = ({
//   Component,
//   pageProps: { session, ...pageProps },
// }: AppPropsWithLayout) => {
//   const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
//   return getLayout(
//     <SessionProvider session={session}>
//       <main className={`${montserrat.variable} font-montserrat`}>
//         <Component {...pageProps} />
//       </main>
//     </SessionProvider>
//   );
// };

export default trpc.withTRPC(MyApp);
