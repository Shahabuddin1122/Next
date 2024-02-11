"use client";
import Card from "@/components/card";
import { useState, useEffect } from "react";

const cardSlider = () => {
  const [NumCards, setNumCards] = useState(3);
  const electronicsData = [
    { img: "/dslr.jpg", head: "Top DSLR", des: "Shop now!" },
    { img: "/router.jpg", head: "Routers", des: "From ₤50" },
    { img: "/keyboard.jpg", head: "Keyboard", des: "From ₤10" },
    { img: "/monitor.jpg", head: "Monitors", des: "From ₤140" },
    { img: "/mouse.jpg", head: "Mouse", des: "From ₤10" },
  ];
  const updateNumCards = () => {
    if (window.innerWidth >= 1000) {
      setNumCards(5);
    } else if (window.innerWidth >= 600) {
      setNumCards(3);
    }
  };
  useEffect(() => {
    updateNumCards(); // Initial update
    window.addEventListener("resize", updateNumCards); // Listen for window resize
    return () => window.removeEventListener("resize", updateNumCards); // Cleanup
  }, []);
  return (
    <>
      <div className="w-11/12 mx-auto flex border-t-2 flex-nowrap overflow-hidden">
        {electronicsData.slice(0, NumCards).map((data, index) => (
          <Card key={index} img={data.img} head={data.head} des={data.des} />
        ))}
      </div>
    </>
  );
};
export default cardSlider;
