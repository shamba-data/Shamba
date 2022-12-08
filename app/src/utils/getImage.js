import client from "../../client";
// import { imageUrlBuilder } from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";

import { useNextSanityImage } from "next-sanity-image";

const builder = imageUrlBuilder(client);
export default function GetImage(source) {
  return builder.image(source);
}
// export default function GetImage(image, CustomImageBuilder = null) {
//   const imageProps = useNextSanityImage(client, image, {
//     imageBuilder: CustomImageBuilder,
//   });
//   if (!image || !image.asset) {
//     return null;
//   }
//   return imageProps;
// }
