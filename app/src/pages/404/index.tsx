import Nav from "../../components/landingPage/Nav";
import BlurImage from "../../components/UI/BlurImage";
import Link from "next/link";
export default function Index() {
  return (
    <>
      <Nav />
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div className="relative h-[200px] w-[300px]">
          <BlurImage imageUrl="/404.png" preload={false} rounded={true} />
        </div>
        <p className="mt-[2rem] text-center">
          The page you are looking for is not found Come back to the home page
        </p>
        <Link href="/">
          <button className="mt-[14px] cursor-pointer rounded-md bg-green px-4 py-2 font-medium text-white md:py-4 lg:mt-[18px]">
            Book An Enterprise Demo
          </button>
        </Link>
      </section>
    </>
  );
}
