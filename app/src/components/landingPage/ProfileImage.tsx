import Image from "next/image";

const ProfileImage = ({ ringColor, position, name }) => {
  return (
    <div className="font-semi-bold flex flex-col items-center text-lg">
      <div className="mt-[2rem] text-center">
        <div
          className={`absolute h-[200px] w-[200px] rounded-full border-2 border-${ringColor} translate-x-[0.3rem] translate-y-[0.7rem]`}
        ></div>
        <div className="relative h-[200px] w-[200px]">
          <Image
            src="/tony.jpeg"
            alt="profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-md"
          />
        </div>
      </div>
      <h3 className="mt-5">{name}</h3>
      <h3>{position}</h3>
    </div>
  );
};

export default ProfileImage;
