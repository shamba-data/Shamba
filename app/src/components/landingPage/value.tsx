import ImageCard from "./ImageCard";
import Image from "next/image";

const Value = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[214px] w-[350px] rounded-t-md md:h-[300px] md:w-[700px] lg:h-[320px] lg:w-[900px]">
        <div className="h-[144px] rounded-t-md bg-green text-center text-white lg:h-[200px] lg:w-[900px]">
          <h3 className="pt-[20px] text-lg font-medium lg:pt-[30px] lg:text-xl">
            Transforming Economic Value Chain
          </h3>
          <div className="lg:flex lg:items-center lg:justify-center">
            <article className="pt-[20px] lg:max-w-2xl lg:text-lg">
              With our accurate & up to date data, companies and businesses can
              supplement their current supply chains, plan accordingly and make
              data-informed decisions.
            </article>
          </div>
        </div>
        <div className="md:flex lg:-translate-y-[1rem] lg:items-center lg:justify-center">
          <div className="relative hidden h-[70px] w-[350px] md:block md:h-[100px] md:w-[380px]">
            <Image
              src="/econ1.png"
              alt="hero"
              layout="fill"
              className="lg:rounded-sm"
            />
          </div>
          <div className="relative h-[70px] w-[350px] md:h-[100px] md:w-[380px]">
            <Image
              src="/tomat.webp"
              alt="hero"
              layout="fill"
              className="lg:rounded-sm"
            />
          </div>
          <div className="relative hidden h-[70px] w-[350px] md:block md:h-[100px] md:w-[380px]">
            <Image
              src="/econ2.png"
              alt="hero"
              layout="fill"
              className="lg:rounded-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-[45px]">
        <h3 className="text-center text-lg font-medium text-green md:text-xl lg:text-[1.4rem]">
          We are Working with Customers to
        </h3>
        <div className="flex flex-col items-center justify-center md:mt-[2rem] md:flex-row md:items-start md:gap-5">
          <ImageCard
            color="green"
            caption="Plan Accordingly"
            imageUrl="/plan.webp"
            description="Optimize the supply chains by comparing on different suppliers of their specific needs."
          />
          <ImageCard
            color="gold"
            caption="Forecast Accordingly"
            imageUrl="/forecast.webp"
            description="use our data to forecast the risk in supply chains and crop production."
          />
          <ImageCard
            color="green"
            caption="Monitor Accordingly"
            imageUrl="/monitor.webp"
            description="Use data to monitor food security in your region."
          />
        </div>
      </div>
    </div>
  );
};

export default Value;
