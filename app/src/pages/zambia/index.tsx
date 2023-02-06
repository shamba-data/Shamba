import {
  HeroSection,
  Nav,
  Footer,
  HeadSeo,
  About,
  MarketCards,
} from "../../components/landingPage";
import Image from "next/legacy/image";
import { trpc } from "../../utils/trpc";
import { useState, ChangeEvent } from "react";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";
import { useRouter } from "next/router";

const Zambia = () => {
  const formStates = {
    phoneNumber: "",
    fullName: "",
    password: "",
  };

  const [formData, setFormData] = useState(formStates);
  const farmersRouter = trpc.farmer.add.useMutation();
  const router = useRouter();
  const TOSclass = "w-4 h-4 text-gray-900 bg-gray-100 border-slate-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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

                try {
                  await farmersRouter.mutateAsync(input);
                  setFormData(formStates);
                  if (farmersRouter.isSuccess) {
                    router.push("/zambia/success");
                  }
                } catch (cause) {
                  console.error({ cause }, "Failed to add the new Users");
                }
              }}
            >
              <div className="flex flex-col ">
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
                  className="w-[520px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:bg-white focus:outline-none"
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
                className="w-[520px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none"
                />
              </div>
              <div className="mt-5 flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  required
                  id="password"
                  value={formData.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    });
                  }}
                  className="w-[520px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none"
                />
              </div>
              <div className="mt-5 flex">
                <input id="terms and conditions" type="checkbox" required value="" className={TOSclass} />
                <label className=" -mt-.1 ml-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                  By registering, you agree to our 
                  <a
                    target="_blank" rel="noopener noreferrer"
                    className="ml-1 font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                    href="https://drive.google.com/file/d/1jtE0kkYDu6c4t0pUQC_s6IEBk0nrT_rY/view?usp=sharing" 
                    
                  >
                    Terms
                  </a>.
                  You may receive sms/whatsapp notifications from us and can opt out any time
                </label>

              </div>
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
