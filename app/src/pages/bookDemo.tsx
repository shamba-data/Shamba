//use-client
import { Nav, Footer, HeadSeo } from "../components/landingPage";
import Script from "next/script";
import { useEffect } from "react";
import Head from "next/head";

export default function BookDemo() {
  //   useEffect(() => {
  //     window.Calendly.initInlineWidget({
  //       url: "https://calendly.com/my-calendar/30min?month=2022-05",
  //       parentElement: document.getElementById("calendly-inline-widget"),
  //     });
  //   }, []);
  return (
    <>
      <Nav />
      <HeadSeo title="Book Demo" />
      <Head>
        <script src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Head>
      {/* <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
        // strategy="beforeInteractive"
      /> */}

      <div
        className="calendly-inline-widget mt-[5rem]"
        data-url="https://calendly.com/shamba-data/shamba-data-demo"
        style={{ minWidth: "320px", height: "630px" }}
      ></div>

      <Footer />
    </>
  );
}
