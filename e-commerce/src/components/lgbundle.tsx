import Image from "next/image";
import IgCard from "./lgCard";

export default function LgBundle({
  Data,
  text,
}: {
  Data: { img: string; head: string; des: string }[];
  text: string;
}) {
  return (
    <>
      <div className=" flex justify-between mx-4 border-b-2">
        <h2 className=" text-2xl font-bold">{text}</h2>
        <Image src="/arrowright.svg" alt="left" width={30} height={30} />
      </div>
      <div className=" flex flex-wrap justify-center items-center">
        {Data.map((data, index) => (
          <IgCard key={index} img={data.img} head={data.head} des={data.des} />
        ))}
      </div>
    </>
  );
}
