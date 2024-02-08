import Image from "next/image";
export default function Card({
  name,
  price,
  src,
}: {
  name: string;
  price: string;
  src: string;
}) {
  return (
    <>
      <div className=" group sm:flex my-3 max-w-sm mx-auto p-8 bg-white rounded-xl shadow-xl space-y-3 sm:space-y-0 sm:space-x-4 sm:items-center sm:p-4 hover:bg-blue-400">
        <div className=" h-3/5">
          <img
            src={src}
            alt="not shown"
            className=" h-24 mx-auto rounded-full ring-4 ring-lime-400 sm:mx-0 sm:flex-shrink-0 hover:scale-110 duration-500"
          />
        </div>
        <div className=" text-center sm:text-left ">
          <h1 className=" text-lg font-semibold text-black">{name}</h1>
          <p className=" text-gray-400 font-medium group-hover:text-white flex flex-row">
            <div>
              <Image src="/taka.svg" alt="taka" width={10} height={10} />
            </div>
            <div>{price}</div>
          </p>
          <button className=" btn-purple">Buy Now</button>
          <button className=" mx-2 btn-green">Wishlist</button>
        </div>
      </div>
    </>
  );
}
