import Card from "@/components/card";
import Nav from "@/components/nav";
import Image from "next/image";
import Footer from "@/components/footer";
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const fruits = [
    { name: "Apple", price: "280", src: "apple.jpg" },
    { name: "Orange", price: "234", src: "orange.jpg" },
    { name: "Mango", price: "120", src: "mango.jpg" },
    { name: "Guava", price: "400", src: "guava.jpg" },
    { name: "Grapes", price: "160", src: "grapes.jpg" },
  ];
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
      <div className=" w-11/12 my-2 border-t-2 mx-auto py-4 flex flex-wrap">
        <Card name="Apple" price="280" src="apple.jpg" />
        <Card name="Orange" price="234" src="orange.jpg" />
        <Card name="Mango" price="120" src="mango.jpg" />
        <Card name="Guava" price="400" src="guava.jpg" />
        <Card name="Grapes" price="160" src="grapes.jpg" />
      </div>
      <div className=" w-11/12 h-1 border-t-2 mx-auto"></div>
      <div className=" w-11/12 border-2 mx-auto flex ">
        <div className=" w-2/6 h-[400px] bg-green-400 text-center flex items-center justify-center font-bold text-2xl ">
          Sales by <br />
          Category
        </div>
        <div className=" h-[400px] flex items-center justify-center px-4">
          <Image src="/left.svg" alt="fresh fruit" width={40} height={40} />
        </div>
        <div className=" w-2/6 h-[400px] flex items-center justify-center text-center relative">
          <Image
            src="/fresh.jpg"
            alt="fresh fruit"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform hover:filter hover:blur-sm"
          />
          <p className=" text-white font-semibold text-3xl z-20">
            Fresh Fruits
          </p>
        </div>
        <div className=" w-2/6 h-[400px] flex items-center justify-center text-center ml-1 relative">
          <Image
            src="/dry.jpg"
            alt="fresh fruit"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform hover:filter hover:blur-sm"
          />
          <p className=" text-white font-semibold text-3xl z-20">Dry Fruits</p>
        </div>
        <div className=" w-2/6 h-[400px] flex items-center justify-center text-center ml-1 relative">
          <Image
            src="/masala.jpg"
            alt="fresh fruit"
            layout="fill"
            objectFit="cover"
            className="transition-transform transform hover:filter hover:blur-sm"
          />
          <p className=" text-white font-semibold text-3xl z-20">Masala</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
