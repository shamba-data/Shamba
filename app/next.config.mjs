// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));
// import withMDX from "@next/mdx";
// const mdxConfig = withMDX({
//   extension: "/.mdx?$/",
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//   },
// });

/** @type {import("next").NextConfig} */

const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: ["cdn.sanity.io", "cdn.discordapp.com", "images.unsplash.com"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};
export default config;
