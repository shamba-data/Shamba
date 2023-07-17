import { Nav, Footer, HeadSeo } from "./landingPage/index";
import * as React from "react";
export default function Layout({ children, pageTitle }: any) {
  return (
    <>
      <HeadSeo title={pageTitle} />
      <Nav />
      <main className="mb-[100px]">{children}</main>
      <Footer />
    </>
  );
}
