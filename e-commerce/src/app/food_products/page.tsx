import Categories from "@/components/Categories";
import Filter from "@/components/Filter";
const food_product = () => {
  return (
    <>
      <div className=" w-screen h-[1000px] flex box-border overflow-hidden">
        <div className=" w-1/4 h-full border-2 m-3">
          <Filter />
          <Categories />
        </div>
        <div className=" w-3/4 h-full border-2 m-3"></div>
      </div>
    </>
  );
};
export default food_product;
