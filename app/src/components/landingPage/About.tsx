import Image from "next/legacy/image";

const About = () => {
  return (
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
          <Image
            src="/phoneLady.webp"
            alt="Lady"
            layout="fill"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
