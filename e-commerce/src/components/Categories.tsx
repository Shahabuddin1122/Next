import Button from "./button";
import Image from "next/image";
const Categories = () => {
  return (
    <>
      <div className=" w-full h-auto">
        <div className=" flex justify-between mx-3">
          <h1 className=" text-xl font-semibold">Categories</h1>
        </div>
        <div className=" w-full border-b-2 flex flex-wrap p-1">
          <div className=" w-full flex ">
            <span className=" w-10 h-10 relative ">
              <Image
                src="/nextlogo.svg"
                alt="next"
                fill
                objectFit="cover"
                className=" text-red-500"
              />
            </span>
            <a href="">Dry Fruit,Nut & Seed</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Categories;
