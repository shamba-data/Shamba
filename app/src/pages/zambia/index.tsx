import { HeroSection, About, MarketCards } from "../../components/landingPage";
import Image from "next/legacy/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Toaster } from "../../components/UI/Toaster";

import RegistrationForm from "../../components/landingPage/RegistrationForm";

const Zambia = () => {
  return (
    <Layout pageTitle="Zambia">
      <Toaster />
      <main className="container mt-[5rem] flex flex-col items-center  justify-center md:max-w-[200ch]">
        <>
          <HeroSection />
          <About />
          <MarketCards />

          <div
            className="mt-[3rem] flex flex-col items-center justify-center sm:mt-[5rem]"
            id="signUp"
          >
            <h3 className="mt-[2rem] text-2xl font-medium text-green">
              Sign Up for <span className="text-gold"> Shamba Data</span>
            </h3>
            <p className="mx-3 mt-1 text-center text-lg ">
              Our market update Service is priced at{" "}
              <span className="font-medium text-green">K80/ month</span>.
              {/* We will notify you once we launch */}
            </p>

            <p className="mt-5  text-lg">
              Renewing your Payment?
              <Link href="/zambia/renewPayment">
                <span className="cursor-pointer pl-3 font-medium text-gold">
                  Renew Here
                </span>
              </Link>
            </p>
          </div>
        </>

        <section className="relative mt-[2rem] mb-[3rem] flex justify-center md:max-w-[700px]">
          <div className="md:flex">
            <div className="relative hidden h-[400px] w-[300px] md:block">
              <Image src="/bottom.webp" alt="Lady" layout="fill" />
            </div>
          </div>
          <RegistrationForm />
        </section>
      </main>
    </Layout>
  );
};

export default Zambia;
