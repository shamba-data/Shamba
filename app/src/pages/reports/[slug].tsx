import { useRouter } from "next/router";
import { type NextPage } from "next";
import { singlequery } from "../../utils/groq";
import PortableText from "react-portable-text";
import { usePreviewSubscription } from "../../utils/sanity";
import CategoryLabel from "../../components/blog/category";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import GetImage from "../../utils/getImage";
import { Footer, Nav } from "../../components/landingPage";
import ErrorPage from "next/error";

interface PostProps {
  postdata: [
    _createdAt: string,
    _id: any,
    _rev: string,
    _type: string,
    _updatedAt: string,
    slug: {
      _type: string;
      current: string;
    },
    body: []
  ];
  siteconfig: any;
  preview: any;
}
const Post: NextPage = (props: any) => {
  const { postdata, preview } = props;
  const router = useRouter();
  const { slug } = router.query;

  const { data: post } = usePreviewSubscription(singlequery, {
    params: { slug: slug },
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const imageProps = postdata?.mainImage ? GetImage(postdata?.mainImage) : null;

  return (
    <>
      <Nav />

      <main className="container mx-auto mt-[3rem] max-w-xs  py-5 font-montserrat  sm:mt-[7rem] sm:max-w-screen-md ">
        <div>
          <h3 className="text-lg font-medium">
            Market Information for{" "}
            <span className="text-green">{post?.title}</span>
          </h3>
          <h3 className="mt-1">Countries {post?.title} exports to</h3>
          <div className="mt-1">
            <CategoryLabel categories={post?.country} />
          </div>

          <article className=" mx-auto mt-5 text-justify">
            {post?.body && (
              <PortableText
                content={post?.body}
                serializers={{
                  strong: (props) => (
                    <h3
                      className="mt-[3rem] text-lg font-medium text-gold"
                      {...props}
                    />
                  ),
                  li: ({ children }) => (
                    <li className="ml-5 list-disc">{children}</li>
                  ),
                }}
              />
            )}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((page) => ({
        params: { slug: page.slug },
      })) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  // const data = await client.fetch(singlequery, { slug: params.slug });
  return {
    props: {
      preview,
      postdata: data?.post || null,
    },
    revalidate: 10,
  };
}
