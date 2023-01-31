import Image from "next/legacy/image";

export interface Props {
  image: string;
  caption: string;
  buttonColor: string;
}

const Card = ({ image, caption, buttonColor }: Props) => {
  return (
    <div className="flex items-center gap-5 sm:flex-col">
      <div
        className={`border-${buttonColor} flex h-[130px] w-[130px] items-center justify-center rounded-full border-[2px] md:h-[160px] md:w-[160px] `}
      >
        <div className="relative h-[120px] w-[120px] rounded-full md:h-[150px] md:w-[150px]">
          <Image
            src={image}
            alt="hero"
            layout="fill"
            className="rounded-full"
          />
        </div>
      </div>
      <div
        className={`bg-${buttonColor} rounded-md px-4 py-2 text-lg font-medium tracking-widest text-white`}
      >
        {caption}
      </div>
    </div>
  );
};

export default Card;
