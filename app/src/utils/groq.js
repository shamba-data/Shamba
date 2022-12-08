import { groq } from "next-sanity";

export const postquery = groq`
*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
    ...,
    author ->,
    categories[]->,
    country[]->
}
`;
export const HomeQuery = groq`
*[_type == "post"] {
  mainImage,
  _createdAt,
  excerpt,
  title,
  slug,
  categories[],
}
`;

export const configQuery = groq`
*[_type == "siteconfig"][0] {
  ...,
}
`;
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ...,
  author->,
  categories[]->,
  country[]->,
 
}
`;

export const pathquery = groq`
*[_type == "post"] {
  'slug': slug.current,
}
`;
