import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { type NextPage } from "next";
import client from "../../../client";
import { singlequery, pathquery } from "../../utils/groq";
import PortableText from "react-portable-text";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
import CategoryLabel from "../../components/blog/category";

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

  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <>
      <main className="mx-auto max-w-screen-lg  py-5 font-montserrat ">
        <h3 className="text-lg font-medium">
          Market Information for{" "}
          <span className="text-green">{post?.title}</span>
        </h3>
        <h3 className="mt-1">Countries {post?.title} exports to</h3>
        <div className="mt-1">
          <CategoryLabel categories={post?.country} />
        </div>

        <article className="mt-5 text-justify">
          {post.body && (
            <PortableText
              content={post?.body}
              serializers={{
                // h2: (props) => (
                //   <h2
                //     style={{ fontWeight: 400 }}
                //     className="mt-[2rem] text-lg font-normal text-gray-700 "
                //     {...props}
                //   />
                // ),
                strong: (props) => (
                  <h3
                    className="mt-[3rem] text-lg font-medium text-gold"
                    {...props}
                  />
                ),
              }}
            />
          )}
        </article>
      </main>
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const allPosts = await client.fetch(pathquery);
  return {
    paths:
      allPosts?.map((page) => ({
        params: { slug: page.slug },
      })) || [],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const post = await client.fetch(singlequery, { slug: params.slug });
  // const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      postdata: { ...post },
      // siteConfig: { ...config },
      preview,
    },
    revalidate: 10,
  };
};
