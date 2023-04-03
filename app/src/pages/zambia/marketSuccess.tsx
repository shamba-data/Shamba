import { Footer, HeadSeo, Nav } from "../../components/landingPage";
import BlurImage from "../../components/UI/BlurImage";

// This page when the user signs up, they will get redirected after succesful signing Up.
const Success = () => {
  return (
    <>
      <HeadSeo title="Success" />
      <Nav />
      <main className="mt-[6rem] font-montserrat md:mt-[12rem] md:flex md:items-center md:justify-center">
        <>
          <section className="flex flex-col items-center md:flex-row  md:justify-center md:gap-[3rem] xl:gap-[6rem]">
            <div className="flex flex-col items-center md:w-[450px] md:items-start xl:w-[550px]">
              <h3 className="text-2xl md:text-4xl">
                Hooray, It&apos;s a{" "}
                <span className="font-medium tracking-wider text-green">
                  Sucess
                </span>
              </h3>

              <article className="mt-5 text-center tracking-wide text-gray-900 md:text-left md:text-xl md:tracking-wider">
                You have succesfully sent today's market prices
              </article>
            </div>
            <div className="relative mt-5 h-[500px] w-[350px] md:mt-0 md:w-[490px]">
              <BlurImage imageUrl="/Lady.webp" preload={true} rounded={false} />
            </div>
          </section>
        </>
      </main>
      <Footer />
    </>
  );
};

export default Success;
