import { type ChangeEvent, useState } from "react";
import { Footer, HeadSeo, Nav } from "../../components/landingPage";
import BlurImage from "../../components/UI/BlurImage";
import { trpc as api } from "../../utils/trpc";
import Link from "next/link";

const Success = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const farmersRouter = api.farmer.byId.useQuery({ phoneNumber: phoneNumber });
  const [errorCount, setErrorCount] = useState<number>(0); // just to prevent showing the error message on the first render

  //   farmersRouter.isError && setErrorCount((prev) => prev + 1);
  const onSubmitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const farmer = await farmersRouter.refetch();
    console.log(farmer);
  };
  return (
    <>
      <HeadSeo title="Renew Payment" />
      <Nav />
      <main className="mt-[6rem] md:mt-[12rem] md:flex md:items-center md:justify-center">
        <>
          <section className="flex flex-col items-center md:flex-row  md:justify-center md:gap-[3rem] xl:gap-[6rem]">
            <div className="flex flex-col items-center md:w-[450px] md:items-start xl:w-[550px]">
              <h3 className="text-center text-2xl md:text-4xl">
                Renew Your{" "}
                <span className="font-medium text-gold">Shamba Data</span>{" "}
                subscription
              </h3>

              <p className="mt-5 text-center tracking-wide text-gray-900 md:text-left md:text-xl md:tracking-wider">
                Please Enter your Phone Number below
              </p>
              <form onSubmit={onSubmitHandler}>
                <div className="mt-5 flex flex-col md:items-center md:justify-between md:space-y-5">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={phoneNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setPhoneNumber(e.target.value);
                    }}
                    placeholder="+260780321731"
                    className="mt-3 w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-gold focus:outline-none md:mt-0 md:w-[300px]"
                  />

                  <Link href="https://secure.3gdirectpay.com/payv3.php?ID=09A1B806-229A-4AC6-8076-4E941308690B">
                    <button
                      type="submit"
                      className="mt-3 w-full rounded-md   bg-green px-4 py-3 text-white md:mt-0 md:w-[300px]"
                    >
                      Check Details
                    </button>
                  </Link>
                </div>
              </form>

              {farmersRouter.data && (
                <section>
                  <h1 className="mt-[2rem] text-lg">Below are your Details</h1>
                  <div className="flex items-center space-x-5">
                    <p className="text-xl">Full Name</p>

                    <p className="text-lg">{farmersRouter.data.fullName}</p>
                  </div>

                  <div className="flex items-center space-x-5">
                    <p className="text-xl">Phone Number</p>

                    <p className="text-lg">{farmersRouter.data.phoneNumber}</p>
                  </div>

                  <button
                    type="submit"
                    className="mt-3  w-full rounded-md border border-gold bg-gold px-4 py-3 text-white  md:w-[300px]"
                  >
                    Proceed to Payment
                  </button>
                </section>
              )}

              {farmersRouter.isError && (
                <p className="mt-5 text-center text-red-500">
                  {farmersRouter.error.message}
                </p>
              )}
            </div>
            <div className="relative mt-5 h-[500px] w-[350px] md:mt-0 md:w-[490px]">
              <BlurImage
                imageUrl="/contact.png"
                preload={true}
                rounded={false}
              />
            </div>
          </section>
        </>
      </main>
      <Footer />
    </>
  );
};

export default Success;
