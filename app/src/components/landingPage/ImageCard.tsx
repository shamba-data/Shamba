import Image from "next/image";

const ImageCard = ({ color, imageUrl, caption, description }) => {
  return (
    <div className="mt-[35px] flex w-[244px] flex-col items-center justify-center md:mt-0 lg:w-[300px]">
      <div className={`w-[244px] rounded-md lg:w-[300px] bg-${color} `}>
        <div className="relative h-[180px] w-[244px] lg:h-[200px] lg:w-[300px]">
          <Image
            src={imageUrl}
            alt="image-hero"
            layout="fill"
            className="block rounded-t-md object-cover lg:rounded-sm"
          />
        </div>

        <h3 className="text-center text-lg text-white md:py-3">{caption}</h3>
      </div>
      <article className="md:text-md mt-5 text-center md:mt-2">
        {description}
      </article>
    </div>
  );
};

export default ImageCard;
