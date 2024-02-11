import Image from "next/image";
const card = ({
  img,
  head,
  des,
}: {
  img: string;
  head: string;
  des: string;
}) => {
  return (
    <>
      <div className=" w-1/5 h-72 bg-slate-200 border-2 m-5">
        <div className=" w-full h-3/4 border-2 relative">
          <Image src={img} alt="Camera" objectFit="cover" fill />
        </div>
        <div className=" text-center">
          <h1 className=" text-2xl font-bold">{head}</h1>
          <p>{des}</p>
        </div>
      </div>
    </>
  );
};

export default card;
