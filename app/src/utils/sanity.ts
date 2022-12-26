import { createClient, createPreviewSubscriptionHook } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";


if (!config.projectId) {
  throw Error("The Project ID is not set. Check the damn env variables");
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = (source) =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const client = createClient(config);
export const previewClient = createClient({
  ...config,
  useCdn: false,
});



export const getClient = (usePreview) => (usePreview ? previewClient : client);
export default client;
