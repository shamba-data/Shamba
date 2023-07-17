import { HeroSection, About, MarketCards } from "../../components/landingPage";
import Image from "next/legacy/image";
import { trpc } from "../../utils/trpc";
import { useState, type ChangeEvent } from "react";
import { inferProcedureInput } from "@trpc/server";
import { AppRouter } from "../../server/trpc/router/_app";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useToast } from "../../hooks/useToast";
import { ToastAction } from "../../components/UI/Toast";
import { Toaster } from "../../components/UI/Toaster";

// function to add a month to a date for the expiresAt field
// function addMonth(dateObj: Date, num: number) {
//   dateObj.setMonth(dateObj.getMonth() + num);
//   return dateObj?.toISOString()?.split("T")[0].replaceAll("-", "/");
// }
function addMonth(dateObj: Date, num: number) {
  dateObj.setMonth(dateObj.getMonth() + num);
  const dateString = dateObj?.toISOString()?.split("T")[0];
  if (dateString) {
    return dateString.replace(/-/g, "/");
  }
  return "";
}

const Zambia = () => {
  const { toast } = useToast();
  const newFormStates = {
    fullName: "",
    whatsappNumber: "",
  };
  const [formData, setFormData] = useState(newFormStates);
  // const preSignupsRouter = trpc.farmer.preSignups.useMutation();
  const farmersRouter = trpc.farmer.add.useMutation({});
  const tokenXml = trpc.payments.getToken.useQuery().data;
  const paymentRouter = trpc.payments.sendMobileToken.useMutation({
    onSuccess: () => {
      router.push("/zambia/success");
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: ` ${error.message}`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 1500,
      });
    },
  });

  function sendMobileMoney(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      formData.whatsappNumber === "" ||
      formData.fullName === "" ||
      formData.whatsappNumber.startsWith("0") ||
      formData.whatsappNumber.length !== 12 ||
      !formData.whatsappNumber.startsWith("260")
    ) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please enter a whatsapp number in form of 260XXXXXXXXX",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 2500,
      });
      return;
    }
    type Input = inferProcedureInput<AppRouter["payments"]["sendMobileToken"]>;
    const input: Input = {
      phoneNumber: formData.whatsappNumber,
      transactionToken: tokenXml,
    };
    type newFarmerInput = inferProcedureInput<AppRouter["farmer"]["add"]>;
    // some fancy ass stuff for the dates
    const createdAtDate = new Date()
      ?.toISOString()
      ?.split("T")[0]
      ?.replaceAll("-", "/") as string;
    const expiresAtDate = addMonth(new Date(), 1);
    const newFarmerInput: newFarmerInput = {
      fullName: formData.fullName,
      phoneNumber: formData.whatsappNumber,
      expiresAt: expiresAtDate,
      createdAt: createdAtDate,
    };
    try {
      paymentRouter.mutateAsync(input);
      farmersRouter.mutateAsync(newFarmerInput);
      setFormData(newFormStates);
    } catch (cause) {
      console.error({ cause }, "Failed to add the new Users");
    }
  }

  const router = useRouter();
  const inputFieldClasses =
    "w-[350px] rounded-md border-[1px] border-slate-300 bg-transparent py-2 px-2 text-gray-900 outline-none focus:outline-none mt-2 focus:ring-green focus:ring-2";
  const TOSclass =
    "w-4 h-4 text-gray-900 bg-gray-100 border-slate-300 rounded accent-green ";

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
            <h3 className="mt-[2rem] text-2xl text-green">
              Sign Up for <span className="text-gold"> Shamba Data</span>
            </h3>
            <p className="mx-3 mt-5 text-center text-lg ">
              Our Service is priced at{" "}
              <span className="font-medium text-green">K80/ month</span>. We
              will notify you once we launch
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
            <form
              className="flex flex-col justify-center space-y-5 pl-5 md:mt-[2rem] md:ml-[7rem]"
              onSubmit={sendMobileMoney}
            >
              <div className="flex flex-col ">
                <label className="relative">
                  Full Name
                  <sup className="text-medium absolute top-0 text-lg text-red-600">
                    *
                  </sup>
                  <sup className="text-medium absolute top-0 text-lg text-red-600">
                    *
                  </sup>
                </label>
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
                  className={inputFieldClasses}
                  placeholder="Hariet Ngulube"
                />
              </div>

              <div className="mt-5 flex flex-col">
                <label className="relative">
                  Whatsapp Number{" "}
                  <sup className="text-medium absolute top-0 text-lg text-red-600">
                    *
                  </sup>
                </label>
                <input
                  type="number"
                  required
                  id="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setFormData({
                      ...formData,
                      whatsappNumber: e.target.value,
                    });
                  }}
                  pattern="^\260\d{9}$"
                  placeholder="260XXXXXXXXX"
                  inputMode="numeric"
                  className={inputFieldClasses}
                />
              </div>

              <div className="mt-5 flex items-center gap-3">
                <input
                  id="terms and conditions"
                  type="checkbox"
                  required
                  value=""
                  className={TOSclass}
                />
                <label className="text-left text-sm font-medium text-gray-800">
                  By registering, you agree to our
                  <Link
                    href="https://drive.google.com/file/d/1jtE0kkYDu6c4t0pUQC_s6IEBk0nrT_rY/view?usp=sharing"
                    replace
                  >
                    <p className="ml-1 font-medium text-gold hover:underline ">
                      Terms and Conditions.
                    </p>
                  </Link>
                  You may receive sms/whatsapp notifications from us and can opt
                  out any time.
                </label>
              </div>

              {farmersRouter.error && (
                <div className="text-sm text-red-500">
                  <h3>Something went wrong, try again</h3>
                </div>
              )}

              <button
                disabled={farmersRouter.isLoading}
                type="submit"
                className="mt-7 w-[250px] cursor-pointer items-start rounded-md bg-green px-4 py-2 text-lg font-medium text-white"
              >
                {farmersRouter.isLoading ? "Loading..." : " Sign Up"}
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Zambia;
