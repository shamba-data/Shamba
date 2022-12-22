import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Agriculture, data, agribusiness, food, food security, food availability, african impact initiative"
        />

        <meta
          property="og:description"
          content="An Agriculture Data Hub that tracks food security Across Africa"
        />
        <meta property="og:title" content="Shamba Data" />
        <meta property="og:image" content="/seo.png" />

        <meta property="og:url" content="https://shamba-data.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shamba Data" />
        <meta
          property="og:description"
          content="An Agriculture Data Hub that tracks food security Across Africa"
        />
        <meta
          property="og:image"
          content="https://shamba-data.vercel.app/seo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="shamba-data.vercel.app" />
        <meta
          property="twitter:url"
          content="https://shamba-data.vercel.app/"
        />
        <meta name="twitter:title" content="Shamba Data" />
        <meta
          name="twitter:description"
          content="An Agriculture Data Hub that tracks food security Across Africa"
        />
        <meta
          name="twitter:image"
          content="https://shamba-data.vercel.app/seo.png"
        />
        <meta
          name="description"
          content="Providing Market prices to Farmers in Zambia"
        />
      </Head>
      <Nav />

      <div className="flex max-w-[200ch] flex-col items-center justify-center font-montserrat">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
