import { Value, Nav, Footer, HeadSeo } from "../components/landingPage";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <HeadSeo title="Shamba Data" />
      <Nav />

      <main className="container mt-[4rem] flex flex-col  items-center justify-center font-montserrat md:max-w-[200ch]  ">
        <section className="pt-[100px] text-center md:w-[700px] lg:w-[900px]">
          <div className="mx-[1rem] flex justify-between">
            <div className="relative h-[100px] w-[100px]">
              <Image src="/tomat1.webp" alt="tomatoes" layout="fill" />
            </div>
            <div className="relative mt-[1.5rem] h-[100px] w-[100px]">
              <Image src="/Tomatoes.webp" alt="tomatoes" layout="fill" />
            </div>
          </div>

          <div className="flex items-end justify-center">
            <div className="relative hidden h-[90px] w-[90px] md:block lg:h-[120px] lg:w-[120px]">
              <Image src="/chilli.webp" alt="tomatoes" layout="fill" />
            </div>

            <div className="lg:flex lg:items-center lg:justify-center">
              <h3 className="max-w-lg text-center text-[2.5rem] font-medium md:-translate-y-[2rem] md:text-[3rem] lg:max-w-none lg:text-[4rem]">
                Intellig<span className="text-green">en</span>ce in{" "}
                <span className="text-green">Food</span> Systems
              </h3>
            </div>

            <div className="relative hidden h-[90px] w-[90px] md:block lg:h-[120px] lg:w-[120px]">
              <Image src="/tomat1.webp" alt="tomatoes" layout="fill" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <article className="font-regular mt-[25px] max-w-lg text-lg md:-translate-y-[3rem] md:text-xl">
              We collect, aggregate, and process data that feeds the African
              Continent
            </article>
            <button className="mt-[14px] cursor-pointer rounded-md bg-green px-4 py-2 font-medium text-white md:-translate-y-[3rem] md:py-4 lg:mt-[18px]">
              Book An Enterprise Demo
            </button>
          </div>
        </section>

        <section
          className="mt-[73px] flex flex-col text-center md:mt-[40px] md:w-[700px] lg:w-[900px]"
          id="about"
        >
          <div className="md:flex md:space-x-7 md:text-left lg:space-x-10">
            <div className="mx-1 md:w-[400px]">
              <h3 className="font-semi-bold text-2xl text-green">
                We are here to solve the world&apos;s fundamental challenge,
              </h3>
              <p className="mt-[10px] text-[1.1rem]">
                With the global population increasing, we need to find new
                solutions that are scalable, and sustainable to the planet.
              </p>
              <p className="mt-[10px] text-[1.1rem]">
                To work on this, we start with providing agriculture data of the
                African continent so that we can increase food production,
                monitor food security and mitigate the effect of climate change
                in the continent.
              </p>
            </div>

            <div className="relative mx-auto mt-[50px] h-[336px] w-[294px] md:mt-0 md:h-[400px] md:w-[350px]">
              <Image src="/hero.svg" alt="hero" layout="fill" />
            </div>
          </div>

          <div className="md:mt-[170px] md:flex md:space-x-[1rem] md:text-left lg:space-x-[2rem]">
            <div>
              <h3 className="mt-[50px] text-2xl font-medium text-gold">
                Providing Market Information to Farmers in Zambia
              </h3>
              <p className="mt-[20px] text-lg">
                We aim to provide accurate and reliable data to our clients. We
                provide over 100 Zambian farmers
              </p>
              <p className="mt-[15px] text-lg">
                with market information so that they can know which market has
                the best prices and return have more financial returns
              </p>
              <button className="mt-[27px] cursor-pointer rounded-md bg-gold px-4 py-2 font-medium text-white">
                Learn More
              </button>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative z-10 mt-[2rem] h-[359px] w-[311px] sm:h-[400px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
                <Image src="/Lady.webp" alt="hero" layout="fill" />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[91px]">
          <Value />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Index;
