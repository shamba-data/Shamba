import Link from "next/link";

const Footer = () => {
  // const date = new Date();
  const autoResponse =
    "Thank you for Contacting Shamba Data, a member of our team will contact you soon and schedule a meeting to further discuss this";
  return (
    <footer className="mt-[150px] w-full bg-green font-montserrat">
      <div className="md:flex md:flex-row-reverse md:items-start md:justify-center md:gap-[2rem]">
        <div className="mt-[30px] flex flex-col items-center justify-center">
          <h3 className="text-xl font-medium tracking-wide text-white">
            Shamba Data
          </h3>
          <p className="mt-[15px] text-center text-lg text-white">
            Subsribe to our News Letter
          </p>
          <form
            action="https://formsubmit.co/b.mboya@alustudent.com"
            method="POST"
          >
            <div className="relative mt-[10px]">
              <label className="hidden">Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Enter your Email"
                className="h-[44px] w-[194px] rounded-md bg-gold px-2 text-white placeholder:text-white focus:outline-none"
              />
              <button className="absolute -right-[35%] top-[10px] h-[30px] w-[100px] rounded-md bg-white">
                Submit
              </button>
            </div>
            <input type="hidden" name="_next" value="https://shamba-data.com" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_autoresponse" value={autoResponse} />
            <input
              type="hidden"
              name="_cc"
              value="k.ngulube@alumni.alueducation.com"
            />
          </form>
        </div>
        <div className="mt-[37px] flex flex-col items-start justify-start pl-[30px] sm:pb-[2rem] md:flex-row md:gap-[3rem] md:pl-0">
          <div>
            <h3 className="text-lg font-medium text-white">Company</h3>
            <ul className="flex flex-col space-y-3 text-[#B5C9B2]">
              <Link href="/contactus">
                <li>Contact Us</li>
              </Link>
              {/*
              <Link href="/construction">
                <li>Why Choose Us</li>
              </Link>

              <Link href="/construction">
                <li>Pricing</li>
              </Link>

              <Link href="/construction">
                <li>Testimonial</li>
              </Link>
              */}
              
            </ul>
          </div>
          <div>
            <h3 className="mt-5 text-lg font-medium text-white md:mt-0">
              Resources
            </h3>

            <ul className="flex flex-col space-y-3 text-[#B5C9B2]">
              {/*
              <Link href="/construction">
                <li className="mt-5">Privacy Policy</li>
              </Link>
              */}
              <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1jtE0kkYDu6c4t0pUQC_s6IEBk0nrT_rY/view?usp=sharing">
                <li>Terms and Conditions</li>
              </Link>
              {/*
              <Link href="/construction">
                <li>Blog</li>
              </Link>
               */}
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="mt-[72px] mb-[40px] md:flex md:items-center md:justify-center md:gap-[2rem]">
        <h3 className="text-center text-lg text-white">
          Copyright @ <span>{date}</span>
        </h3>
      </div> */}
    </footer>
  );
};

export default Footer;
