import Card from "@/components/card";
import Nav from "@/components/nav";
export default function Home() {
  return (
    <>
      <Nav />
      <div className=" md:w-11/12 md:mx-auto md:h-img relative">
        <img src="/flower4.png" alt="" className=" w-full h-full absolute" />
        <h1 className=" absolute text-5xl text-teal-600 font-extrabold right-2 pad-text px-16">
          Heritage Craft connect
        </h1>
        <p className=" absolute text-white inset-text ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
          consequuntur nemo. Laborum nam dolorum esse, veritatis saepe expedita
          dolores? Facilis rem optio labore.
        </p>
      </div>
      <div className=" w-11/12 h-4 mx-auto my-8">
        <p className=" text-center text-4xl font-bold">Our top Product</p>
      </div>
      <div className=" w-11/12 h-60 border-t-2 mx-auto py-4 flex">
        <Card name="Apple" />
        <Card name="Orange" />
        <Card name="Mango" />
      </div>
      <div className=" w-11/12 h-80 border-t-2 mx-auto"></div>
    </>
  );
}
