const Footer = () => {
  const date = new Date();
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
          <form>
            <div className="relative mt-[10px]">
              <input
                type="email"
                placeholder="Enter your Email"
                className="h-[44px] w-[194px] rounded-md bg-gold px-2 text-white placeholder:text-white focus:outline-none"
              />
              <button className="absolute -right-[35%] top-[10px] h-[30px] w-[100px] rounded-md bg-white">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="mt-[37px] flex flex-col items-start justify-start pl-[30px] md:flex-row md:gap-[3rem] md:pl-0">
          <div>
            <h3 className="text-lg font-medium text-white">Company</h3>
            <ul className="space-y-2 text-[#B5C9B2]">
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Pricing</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div>
            <h3 className="mt-5 text-lg font-medium text-white md:mt-0">
              Resources
            </h3>

            <ul className="space-y-2 text-[#B5C9B2]">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-[72px] mb-[40px] md:flex md:items-center md:justify-center md:gap-[2rem]">
        {/* <h3 className="text-center text-lg text-white">
          Copyright @ <span>{date}</span>
        </h3> */}
      </div>
    </footer>
  );
};

export default Footer;
