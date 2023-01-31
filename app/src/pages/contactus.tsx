import { Footer, HeadSeo, Nav } from "../components/landingPage";
import BlurImage from "../components/UI/BlurImage";

const Contact = () => {
  const labelClasses = "font-medium text-lg text-green tracking-wide";
  const inputClasses =
    "border-[1px] rounded-md px-2 py-2 w-[300px] focus:outline-none bg-white mt-2";
  const divClasses = "flex flex-col";
  return (
    <>
      <HeadSeo title="Contact Us" />
      <Nav />
      <main className="mt-[5rem] md:mt-[7rem] md:flex md:items-center md:justify-center">
        <section className="mt-[2rem] overflow-hidden pl-5 md:flex md:gap-[3rem] xl:mt-[4rem] xl:gap-[6rem]">
          <div>
            <h3 className="text-2xl font-medium tracking-wide xl:text-3xl">
              Contact us
            </h3>
            <form className="mt-5 flex flex-col gap-5">
              <div className={divClasses}>
                <label className={labelClasses}>Your Email</label>
                <input
                  type="email"
                  placeholder="aimebah@gogle.com"
                  className={inputClasses}
                  name="email"
                  required
                />
              </div>
              <div className={divClasses}>
                <label className={labelClasses}>Your Topic</label>
                <input
                  type="text"
                  placeholder="E.g cancel my subscription"
                  className={inputClasses}
                  name="topic"
                  required
                />
              </div>

              <div className={divClasses}>
                <label className={labelClasses}>Your Message</label>
                <textarea
                  className="m-0 block w-[300px] rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  rows={3}
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[90px] rounded-md bg-green py-3 font-medium tracking-wide text-white xl:w-[100px] xl:text-lg"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="relative hidden h-[600px] w-[490px] md:block">
            <BlurImage
              imageUrl="/contact.png"
              preload={false}
              rounded={false}
            />
          </div>

          <div className="h-[300px] w-[300px] translate-x-[10rem]  overflow-x-hidden rounded-full border-2 border-green md:hidden">
            <div className="absolute z-[10] h-[100px] w-[100px] translate-y-[10rem] -translate-x-2 rounded-full border-2 border-gold"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
