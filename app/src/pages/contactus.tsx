import { Footer, HeadSeo, Nav } from "../components/landingPage";
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";

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
        <section className="mt-[2rem] overflow-hidden pl-5 lg:flex lg:gap-[3rem] xl:mt-[4rem] xl:gap-[6rem]">
          <div className=" flex max-h-[56rem] w-full max-w-4xl flex-col rounded-xl p-8 lg:flex-row">
            <div className="flex flex-col justify-around">
              <div>
                <h3 className="text-2xl font-medium tracking-wide xl:text-3xl">
                  Contact us
                </h3>
                <p className="pt-2 text-gray-900">
                  Have a question? Reach out to our team using the details
                  provided below
                </p>
              </div>
              {/*company contact info*/}
              <div className="mt-5 flex flex-col space-y-4 text-gray-900">
                <div className="flex items-center space-x-2">
                  <BsTelephone className="text-green" size={24} />
                  <span className="tracking-wider">+260978964998</span>
                </div>
                <div className="flex  items-center space-x-2">
                  <HiOutlineMail className="text-green" size={24} />
                  <span className="tracking-wider">b.mboya@alustudent.com</span>
                </div>
                <div className="inline-flex items-center space-x-2">
                  <GoLocation className="text-green" size={24} />
                  <span className="tracking-wider">
                    Plot 3870 Kafue Drive, Riverside, Kitwe
                  </span>
                </div>
              </div>
              {/*social media*/}
              <div className=" mt-5 flex space-x-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://web.facebook.com/profile.php?id=100090255693537"
                >
                  <GrFacebook className="text-blue-800" size={31} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/shamba-data/?viewAsMember=false"
                >
                  <BsLinkedin className="text-blue-700" size={32} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/shambaData"
                >
                  <AiOutlineTwitter className="text-cyan-500" size={36} />
                </a>
              </div>
            </div>
            {/*contact us form */}

            <form className="mt-[2.5rem] flex flex-col gap-5">
              <div className={divClasses}>
                <label className={labelClasses}>Your Email</label>
                <input
                  type="email"
                  placeholder="aimebah@gmail.com"
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
