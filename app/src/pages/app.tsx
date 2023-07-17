import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import PostList from "../components/PostList";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { postquery, configQuery, HomeQuery } from "../utils/groq";
import { ChangeEvent, useState } from "react";
import Layout from "../components/Layout";

export interface PostProps {
  postdata: [
    _createdAt: string,
    _id: any,
    _rev: string,
    _type: string,
    _updatedAt: string,
    mainImage: any,
    slug: {
      _type: string;
      current: string;
    },
    body: []
  ];
  siteconfig: any;
  preview: any;
}

const Home = ({ postdata, siteconfig, preview }: PostProps) => {
  const router = useRouter();

  const { data: posts } = usePreviewSubscription(postquery, {
    initialData: postdata,
    enabled: preview || router.query.preview !== undefined,
  });

  const { data: siteConfig } = usePreviewSubscription(configQuery, {
    initialData: siteconfig,
    enabled: preview || router.query.preview !== undefined,
  });

  const [searchedCompany, setSearchedCompany] = useState("");

  return (
    <Layout pageTitle="Import Info">
      <main className="max-w-screen container mx-auto mt-[5rem] px-8 py-5  lg:py-8 xl:max-w-screen-xl xl:px-5 ">
        <nav className="">
          <h3 className="text-green-400 text-lg font-medium">Shamba Data</h3>
        </nav>
        <div>
          <article className="max-w-3xl">
            Agriculture Company profiles that are exporting goods to external
            market. This data is compiled from the company sources and is close
            to accurate as possible
          </article>
          <div>
            <input
              type="search"
              value={searchedCompany}
              className="mt-5 border-b-[2px] px-4 py-1 focus:outline-none "
              placeholder="Search"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setSearchedCompany(e.target.value);
                console.log(searchedCompany);
              }}
            />
          </div>
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

        <section className="">
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
            {posts
              .filter((data) => {
                if (searchedCompany === "") {
                  return data;
                } else if (
                  data.title
                    .toLowerCase()
                    .includes(searchedCompany.toLowerCase())
                ) {
                  return data;
                }
              })
              .map((post) => (
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
    </Layout>
  );
};

export default Home;

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
