import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import { GetStaticProps } from "next";
import PostList from "../components/PostList";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { postquery, configQuery, HomeQuery } from "../utils/groq";
import Auth from "../components/Auth";

export interface PostProps {
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

const Home: NextPage = ({ postdata, siteconfig, preview }: PostProps) => {
  const router = useRouter();
  // const { postdata, siteconfig, preview } = props;

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined,
  });

  const { data: sessionData, status } = useSession();
  // console.log(sessionData.user.image);

  return (
    <>
      <Head>
        <title>Shamba Data</title>
        <meta
          name="description"
          content="Import/Export Information of Agriculture Products"
        />
      </Head>

      {/* {sessionData ? ( */}
      <main className="max-w-screen container mx-auto px-8 py-5 font-montserrat lg:py-8 xl:max-w-screen-xl xl:px-5 ">
        <nav className="">
          <h3 className="text-green-400 text-lg font-medium">Shamba Data</h3>
        </nav>
        <div>
          <article className="max-w-3xl">
            Agriculture Company profiles that are exporting goods to external
            market. This data is compiled from the company sources and is close
            to accurate as possible
          </article>
          {/* <div className="flex items-center space-x-2">
              {sessionData.user && (
                <>
                  <div className="relative h-[50px] w-[50px] rounded-full border-[0.5px]">
                    <Image
                      src={sessionData.user?.image}
                      alt="profile"
                      layout="fill"
                      className="rounded-full"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="font-medium">{sessionData.user?.name}</h3>
                  <button
                    onClick={() => signOut()}
                    className="cursor-pointer rounded-md bg-slate-200 px-4 py-1"
                  >
                    Logout
                  </button>
                </>
              )}
            </div> */}
        </div>
        {/* {posts.map((post) => (
          <h3>{post.title}</h3>
        ))} */}
        <section className="">
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts.map((post) => (
              <PostList
                key={post._id}
                post={post}
                aspect="square"
                preloadImage={true}
              />
            ))}
          </div>
        </section>
      </main>
      {/* ) : (
        <Auth />
      )} */}
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const post = await getClient(preview).fetch(HomeQuery);
  // const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      postdata: post,
      // siteconfig: { ...config },
      preview,
    },
    revalidate: 10,
  };
};
