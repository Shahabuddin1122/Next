"use client";
import Card from "@/components/card";
import { useState, useEffect } from "react";

const SportsCard = () => {
  const [NumCards, setNumCards] = useState(3);
  const electronicsData = [
    { img: "/food.jpg", head: "Food Spreads", des: "Upto 75% off" },
    { img: "/puzzles.jpg", head: "Puzzles & Cubes", des: "From ₤5" },
    { img: "/book.jpg", head: "Self Help Books", des: "Min 20% off" },
    { img: "/toy.jpg", head: "Musical Toys", des: "Under 199" },
    { img: "/honey.jpg", head: "Honey", des: "Upto 75% off" },
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
      <div className=" relative">
        <div className=" w-11/12 pt-5 mx-auto flex justify-center items-center border-t-2 flex-nowrap overflow-hidden">
          {electronicsData.slice(0, NumCards).map((data, index) => (
            <Card key={index} img={data.img} head={data.head} des={data.des} />
          ))}
        </div>
      </div>
    </>
  );
};
export default SportsCard;
