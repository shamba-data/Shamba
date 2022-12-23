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
  mainImage{asset{_ref}},
  _createdAt,
  excerpt,
  title,
  slug{current},
  categories[]->{title},
}
`;

export const configQuery = groq`
*[_type == "siteconfig"][0] {
  ...,
}
`;
export const singlequery = groq`
*[_type == "post" && slug.current == $slug][0] {
 author->{slug{current}},
  categories[]->{title},
  country[]->{title},
  body,
  title,
 
}
`;

export const pathquery = groq`
*[_type == "post"] {
  'slug': slug.current,
}
`;
