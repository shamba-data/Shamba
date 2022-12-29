import client, { previewClient } from "../utils/sanity"

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

const postFields = `
 author->{slug{current}},
  categories[]->{title},
  country[]->{title},
  body,
  title,
  mainImage{asset{_ref}},
`;
const getClient = (preview) => (preview ? previewClient : client);

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview)
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug]  {
        ${postFields}
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug]{
        ${postFields}
      }`,
      { slug }
    ),
  ])
  return { post, morePosts: getUniquePosts(morePosts) }
}

const getUniquePosts = (posts) => {
  const slugs = new Set()
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false
    } else {
      slugs.add(post.slug)
      return true
    }
  })
}





// export async function getPreviewPostBySlug(slug) {
//   const data = await getClient(true).fetch(
//     `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
//       ${postFields}
//       body
//     }`,
//     { slug }
//   )
//   return data[0]
// }



export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedAt desc){
      ${postFields}
    }`)
  return getUniquePosts(results)
}

