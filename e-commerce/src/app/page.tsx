import Image from "next/image";
import ImageSlider from "@/components/slider";
import CardSlider from "@/components/cardSlider";
import SportsCard from "@/components/sportsCard";
import LgBundle from "@/components/lgbundle";
import Footer from "@/components/footer";

export default function Home() {
  const BestSeller = [
    { img: "/men.jpg", head: "Men's Fashion", des: "Bestsellers" },
    { img: "/walet.jpg", head: "walets", des: "min 70% off" },
    { img: "/bag.jpg", head: "Ladies Bag", des: "min 70% off" },
    { img: "/casual.jpg", head: "Casual Shirts", des: "Special offer" },
  ];
  const winter = [
    { img: "/flask.jpg", head: "Flask", des: "Special offer" },
    { img: "/blanket.jpg", head: "Blanket", des: "min 50% off" },
    { img: "/bedsheet.jpg", head: "Bedsheet", des: "min 30% off" },
    { img: "/heater.jpg", head: "Heater", des: "Special offer" },
  ];
  const electronics = [
    { img: "/tv.jpg", head: "Smart Devices", des: "Special offer" },
    { img: "/cc.jpg", head: "Surveillance", des: "min 50% off" },
    { img: "/watch.jpg", head: "Smart Brands", des: "min 30% off" },
    {
      img: "/trimmer.jpg",
      head: "Personal Care",
      des: "Special offer",
    },
  ];

  return (
    <>
      <div className=" w-screen overflow-x-hidden bg-slate-200 box-border">
        <ImageSlider />

        <div className=" w-screen border-2 bg-slate-50  box-border overflow-hidden">
          <div className=" flex justify-between mx-4">
            <h2 className=" text-2xl font-bold"> Best of Electronics</h2>
            <Image src="/arrowright.svg" alt="left" width={30} height={30} />
          </div>
          <CardSlider />
        </div>
        <div className=" w-screen h-auto border-2 bg-slate-50 mt-3">
          <div className=" flex justify-between mx-4">
            <h2 className=" text-2xl font-bold"> Sports, HealthCare & more</h2>
            <Image src="/arrowright.svg" alt="left" width={30} height={30} />
          </div>
          <SportsCard />
        </div>

        <div className=" w-screen h-[600px] flex overflow-hidden">
          <div className=" w-1/3 h-full bg-white m-3 p-2 rounded-md">
            <LgBundle Data={BestSeller} text="End Of Season Bestsellers" />
          </div>
          <div className=" w-2/3 h-full border-2 relative">
            <Image src="/mobile2.jpg" alt="mobile" objectFit="cover" fill />
          </div>
        </div>
        <div className=" w-screen h-[600px] flex overflow-hidden border-2">
          <div className=" w-1/3 h-full bg-white m-3 p-2 rounded-md">
            <LgBundle Data={BestSeller} text="Shop for Your Love" />
          </div>
          <div className=" w-1/3 h-full bg-white m-3 p-2 rounded-md">
            <LgBundle
              Data={electronics}
              text="Must-have Electronics & Appliances"
            />
          </div>
          <div className=" w-1/3 h-full bg-white m-3 p-2 rounded-md">
            <LgBundle Data={winter} text="Winter Best Buys" />
          </div>
        </div>
        <div className=" w-screen h-auto border-2 bg-slate-50 mt-3">
          <div className=" flex justify-between mx-4">
            <h2 className=" text-2xl font-bold"> Sports, HealthCare & more</h2>
            <Image src="/arrowright.svg" alt="left" width={30} height={30} />
          </div>
          <SportsCard />
        </div>
        <div className=" w-screen h-[600px] flex overflow-hidden border-2">
          <div className=" w-1/3 h-full bg-white m-3 p-2 rounded-md">
            <LgBundle Data={BestSeller} text="Shop for Your Love" />
          </div>
          <div className=" w-1/3 h-full bg-white m-3 p-2 rounded-md">
            <LgBundle
              Data={electronics}
              text="Must-have Electronics & Appliances"
            />
          </div>
          <div className=" w-1/3 h-full bg-white m-3 p-2 relative">
            <Image src="/sale.jpg" alt="mobile" objectFit="cover" fill />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
