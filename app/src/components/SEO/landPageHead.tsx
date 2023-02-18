import Head from "next/head";
interface Props {
  title: string;
}

const HeadSeo = ({ title }: Props) => {
  return (
    <Head>
      <link rel="icon" type="image/x-icon" href="/icon.ico"></link>
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

      <meta property="og:url" content="https://shamba-data.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Shamba Data" />
      <meta
        property="og:description"
        content="An Agriculture Data Hub that tracks food security Across Africa"
      />
      <meta
        property="description"
        content="An Agriculture Data Hub that tracks food security Across Africa"
      />
      <meta content="@vercel" name="twitter:site" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dhhcantbj/image/upload/v1672495614/shamba-data/Screenshot_from_2022-12-31_16-05-47_hfog1w.png"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content="shamba-data.com" />
      <meta name="twitter:url" content="https://shamba-data.com" />
      <meta name="twitter:title" content="Shamba Data" />
      <meta
        name="twitter:description"
        content="An Agriculture Data Hub that tracks food security Across Africa"
      />

      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dhhcantbj/image/upload/v1672425601/shamba-data/seo_agkwsp.png"
      />

      <meta
        name="description"
        content="Providing Market prices to Farmers in Zambia"
      />
      <title>{title}</title>
    </Head>
  );
};

export default HeadSeo;
