import Link from "next/link";
import GetImage from "../utils/getImage";
import CategoryLabel from "./blog/category";
import { parseISO, format } from "date-fns";
import BlurImage from "./UI/BlurImage";

export const cx = (...classNames) => classNames.filter(Boolean).join(" ");

export default function PostList({ post, aspect, preloadImage }) {
  const imageProps = post?.mainImage ? GetImage(post.mainImage) : null;

  return (
    <>
      <Link href="/reports/[slug]" as={`/reports/${post.slug.current}`}>
        <div className="group w-[350px] cursor-pointer rounded-md shadow-md  ">
          <div
            className={cx(
              "relative h-[200px] w-[350px] overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105",
              aspect === "landscape" ? "aspect-video" : "aspect-square"
            )}
          >
            {/* <Link href={`/reports/${post.slug.current}`}> */}
            {imageProps ? (
              <BlurImage imageUrl={imageProps["src"]} preload rounded={false} />
            ) : (
              ""
            )}
            {/* </Link> */}
          </div>
          <div className="px-3">
            <CategoryLabel categories={post.categories} />
            <h2 className="text-brand-primary mt-0 text-lg font-medium tracking-normal">
              <Link href={`/reports/${post.slug.current}`}>
                <span className="from-green-200 to-green-100 bg-gradient-to-r bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                  {post.title}
                </span>
              </Link>
            </h2>

            {post.excerpt && (
              <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link href={`/reports/${post.slug.current}`}>
                  {post.excerpt}
                </Link>
              </p>
            )}
            <div className="mb-3 mt-2">
              <time
                dateTime={post?.publishedAt || post._createdAt}
                className="text-sm text-gray-700"
              >
                {format(
                  parseISO(post?.publishedAt || post._createdAt),
                  "MMMM dd, yyyy"
                )}
              </time>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
