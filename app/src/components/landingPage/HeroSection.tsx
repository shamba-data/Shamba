import Image from "next/legacy/image";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="relative z-[10] overflow-x-hidden">
      <section className="flex flex-col items-center sm:mt-5 sm:flex-row sm:items-start md:justify-between lg:space-x-[4rem]">
        <div className="flex flex-col items-center justify-center sm:max-w-[350px] md:max-w-[400px] md:items-start lg:max-w-[900px]">
          <div className="mt-[3.25rem]">
            <h3 className="text-center text-5xl font-medium text-green md:text-left">
              Get accurate
            </h3>
            <div className="flex items-center justify-center">
              <p className="mt-4 w-[300px] text-center text-2xl font-medium md:w-full md:text-left">
                daily market prices for your crops in your Whatsapp.
              </p>
            </div>
            <p className="mt-5 max-w-[350px] text-center text-xl font-light md:mt-3 md:max-w-[500px] md:text-left">
              Sign up your <span className="text-green">Whatsapp Number</span>{" "}
              to get the daily price notifications from 4 Zambian markets
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-y-3 sm:space-x-[20px] md:flex-row">
            <Link href="#signUp">
              <button className="h-[45px] w-[160px] cursor-pointer rounded-md bg-green text-lg font-medium text-white">
                Sign Up
              </button>
            </Link>

            <Link href="#about">
              <button className="h-[45px] w-[160px] cursor-pointer rounded-md border-[1px] border-green text-lg font-medium">
                What we build
              </button>
            </Link>
          </div>
        </div>
        <div className="relative z-10 mt-[2rem] h-[359px] w-[311px] sm:h-[400px] sm:w-[300px] lg:h-[500px] lg:w-[500px]">
          <Image src="/Lady.webp" alt="lady" layout="fill" priority={true} />
        </div>
        <div className="mb-[11rem] sm:mb-0 sm:hidden">
          <div className="absolute -right-[10%] h-[180px] w-[180px] -translate-y-[60%] rounded-full border-2 border-gold"></div>
          <div className="absolute h-[120px] w-[120px] translate-y-[20%] translate-x-[90%] rounded-full border-[1px] border-green"></div>

          <div className="absolute left-[2%]  translate-y-[20%] sm:hidden ">
            <div className="relative h-[150px] w-[150px]">
              <Image src="/Tomatoes.webp" layout="fill" alt="tomatoes" />
            </div>
          </div>
        </div>
      </section>

      <section className="sm:mt-[4rem] sm:flex sm:items-start md:gap-[5rem] lg:gap-[10rem]">
        <div className="relative hidden h-[340px] w-[300px] sm:block lg:h-[440px] lg:w-[400px]">
          <Image src="/about.webp" alt="Lady" layout="fill" priority={true} />
        </div>
        <div className="mt-9 flex flex-col items-center justify-center sm:mt-0 sm:max-w-[300px] md:max-w-[350px] md:items-start lg:max-w-[900px]">
          <div
            className="flex flex-col items-center gap-0 font-medium text-green md:items-start"
            id="about"
          >
            <h3 className="text-[1.8rem] font-medium">About</h3>
            <span className="text-[2.2rem]">Shamba Data</span>
          </div>
          <article className="mx-1 mt-3 text-center text-xl font-light  md:text-left lg:max-w-[463px] lg:tracking-wider">
            We understand that you struggle to get the market information you
            want.
          </article>
          <article className="mt-[1rem] text-center text-xl font-light md:text-left lg:max-w-[463px] lg:tracking-wider">
            Therefore, farmer come join{" "}
            <span className="font-medium text-gold">Shamba data.</span>
            We provide you with accurate and up-to-date market information that
            helps you maximize profits from farming.
          </article>
        </div>

        <div className="relative mb-[21rem] mt-6 sm:hidden">
          <div className="absolute -left-[20%] h-[200px] w-[200px] rounded-full border-[0.5px] border-gold"></div>
          <div className="absolute h-[100px] w-[100px] translate-y-[120%] translate-x-[20%] rounded-full border-[0.5px] border-green"></div>

          <div>
            <div className="absolute -right-0 z-[2] h-[220px] w-[180px]">
              <Image src="/babu .webp" alt="babu" layout="fill" />
            </div>

            <div className="z-1 absolute -right-[20%] h-[200px] w-[200px] translate-y-[50%] rounded-full border-[0.5px] border-green"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
