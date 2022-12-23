import {
  HeroSection,
  Card,
  Nav,
  Footer,
  HeadSeo,
} from "../components/landingPage";
import Image from "next/image";

const Zambia = () => {
  return (
    <>
      <HeadSeo title="Market Information" />
      <Nav />
      <main className="container mt-[5rem] flex flex-col items-center  justify-center font-montserrat md:max-w-[200ch]">
        <HeroSection />

        <section className="mt-[2rem] pl-5 sm:mt-[5rem] sm:flex sm:items-start sm:justify-between md:ml-[2rem]">
          <div className="flex gap-2">
            <div>
              <div className="h-[70px] w-[23px] bg-gold"></div>
              <div className="h-[40px] w-[23px] bg-green"></div>
            </div>

            <div className="flex flex-col">
              <h3 className=" w-[250px] text-xl text-green">
                Get the most accurate Data with
              </h3>
              <strong className="text-xl text-gold">Shamba Data</strong>
              <strong className="text-2xl font-medium text-green">
                We are here for you!
              </strong>
            </div>
          </div>

          <div className="">
            <div className="relative h-[350px] w-[350px] sm:mt-0">
              <Image src="/phoneLady.webp" alt="Lady" layout="fill" />
            </div>
          </div>
        </section>

        <section className="mt-[5rem] flex flex-col items-center justify-center">
          <div className="text-center text-green">
            <h1 className="font-regular text-xl">We cover these</h1>
            <h3 className="text-2xl font-medium tracking-wide">
              4 Zambian <span className="text-gold">markets.</span>
            </h3>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:grid sm:grid-cols-4 md:grid-cols-4">
            <Card
              caption="Chisokoni"
              image="/chisokoni.webp"
              buttonColor="gold"
            />
            <Card
              caption="Kalusambesa"
              image="/kalusambesa.webp"
              buttonColor="green"
            />
            <Card caption="Soweto" image="/soweto.webp" buttonColor="gold" />
            <Card caption="Ndola" image="/ndola.webp" buttonColor="green" />
          </div>
        </section>

        <div
          className="mt-[3rem] flex flex-col items-center justify-center sm:mt-[5rem]"
          id="signUp"
        >
          <h3 className="text-2xl text-green">
            Sign Up for <span className="text-gold"> Shamba Data</span>
          </h3>
          <p className="mx-3 mt-4 text-center text-lg ">
            Our Service is priced at{" "}
            <span className="font-medium text-green">K70/ month</span>. We will
            notify you once we launch
          </p>
        </div>

        <section className="relative mt-[2rem] mb-[3rem] flex justify-center md:max-w-[700px]">
          <div className="md:flex">
            <div className="relative hidden h-[400px] w-[300px] md:block">
              <Image src="/bottom.webp" alt="Lady" layout="fill" />
            </div>
            <form className="flex flex-col justify-center md:mt-[2rem] md:ml-[7rem]">
              <div className="flex flex-col">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  id="userName"
                  className="w-[250px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none"
                />
              </div>

              <div className="mt-5 flex flex-col">
                <label>Whatsapp Number</label>
                <input
                  type="text"
                  required
                  id="whatsappNumber"
                  className="w-[250px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-[250px] cursor-pointer items-start rounded-md bg-green px-4 py-2 text-lg font-medium text-white"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Zambia;
