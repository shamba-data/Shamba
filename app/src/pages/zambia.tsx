import {
  HeroSection,
  Nav,
  Footer,
  HeadSeo,
  About,
  MarketCards,
} from "../components/landingPage";
import Image from "next/legacy/image";
import { trpc } from "../utils/trpc";
import { useState, ChangeEvent } from "react";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../server/trpc/router/_app";
import { useRouter } from "next/router";

const Zambia = () => {
  const formStates = {
    phoneNumber: "",
    fullName: "",
  };

  const [formData, setFormData] = useState(formStates);
  const farmersRouter = trpc.farmer.add.useMutation();
  const router = useRouter();
  return (
    <>
      <HeadSeo title="Market Information" />
      <Nav />
      <main className="container mt-[5rem] flex flex-col items-center  justify-center font-montserrat md:max-w-[200ch]">
        <HeroSection />

        <About />

        <MarketCards />

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
            <form
              className="flex flex-col justify-center md:mt-[2rem] md:ml-[7rem]"
              // action="https://formsubmit.co/b.mboya@alustudent.com"
              // method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                console.log(formData);
                type Input = inferProcedureInput<AppRouter["farmer"]["add"]>;
                const input: Input = {
                  phoneNumber: formData.phoneNumber,
                  fullName: formData.fullName,
                };
                if (farmersRouter.isSuccess) {
                  router.push("/");
                }
                try {
                  await farmersRouter.mutateAsync(input);
                  setFormData(formStates);
                } catch (cause) {
                  console.error({ cause }, "Failed to add the new Users");
                }
              }}
            >
              <div className="flex flex-col">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  id="userName"
                  value={formData.fullName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    });
                  }}
                  className="w-[250px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none"
                />
              </div>

              <div className="mt-5 flex flex-col">
                <label>Whatsapp Number</label>
                <input
                  type="text"
                  required
                  id="whatsappNumber"
                  value={formData.phoneNumber}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFormData({
                      ...formData,
                      phoneNumber: e.target.value,
                    });
                  }}
                  className="w-[250px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none"
                />
              </div>

              <input
                type="hidden"
                name="_next"
                value="https://shamba-data.com"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_cc"
                value="k.ngulube@alumni.alueducation.com"
              />

              <button
                disabled={farmersRouter.isLoading}
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
