import Image from "next/image";
const IgCard = ({
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
      <div className=" w-2/5 h-[250px] bg-slate-200 border-2 m-3  box-border p-1">
        <div className=" w-full h-3/4 border-2 relative">
          <Image src={img} alt="Camera" objectFit="cover" fill />
        </div>
        <div className=" text-left">
          <h1 className=" text-2xl font-semibold">{head}</h1>
          <p className=" text-green-600 font-bold">{des}</p>
        </div>
      </div>
    </>
  );
};

export default IgCard;
