import Button from "./button";
const Filter = () => {
  return (
    <>
      <div className=" w-full h-auto">
        <div className=" flex justify-between mx-3">
          <h1 className=" text-xl font-semibold">Filter</h1>
          <h3 className=" text-blue-600 text-lg">CLEAR ALL</h3>
        </div>
        <div className=" w-full border-b-2 flex flex-wrap p-1">
          <Button data="4⭐ & above" />
          <Button data="Buy More,Save More" />
          <Button data="Special Price" />
        </div>
      </div>
    </>
  );
};
export default Filter;
