import { Nav, Footer } from "../../components/landingPage";
import BlurImage from "../../components/UI/BlurImage";
import Link from "next/link";
export default function Index() {
  return (
    <>
      <Nav />
      <section className="flex min-h-screen flex-col items-center justify-center font-montserrat">
        <div className="relative h-[200px] w-[300px]">
          <BlurImage
            imageUrl="/construction.png"
            preload={false}
            rounded={true}
          />
        </div>
        <p className="mt-[2rem] text-center">
          This page is under construction Come back to the home page
        </p>
        <Link href="/">
          <button className="mt-[14px] cursor-pointer rounded-md bg-green px-4 py-2 font-medium text-white md:py-4 lg:mt-[18px]">
            Go to Home Page
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
}
