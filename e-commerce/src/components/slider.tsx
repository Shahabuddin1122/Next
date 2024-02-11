"use client";

import { useState, useEffect } from "react";

const images = [
  "/mauro-lima-ZsP_spoY_dI-unsplash.jpg",
  "/neom-_TFgiFZyH6M-unsplash.jpg",
  "/bravingbird-MLN_ZwWQneU-unsplash.jpg",
];

const textData = [
  { heading: "Fly to bliss", description: "Akasha Air Flight ₤3000" },
  {
    heading: "Zebronics Monitor days lives",
    description: "Gaming,Home & Office Product",
  },
  { heading: "Introducing Epson", description: "Multifunction | Wifi | color" },
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <img
        src={images[currentIndex]}
        alt="Slide"
        className="w-full h-96 transition-opacity duration-500 opacity-100"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white transition-opacity duration-500 opacity-100">
        <h2 className="text-3xl font-bold">{textData[currentIndex].heading}</h2>
        <p className="text-lg">{textData[currentIndex].description}</p>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 transition-opacity duration-500 opacity-100"
        onClick={prevImage}
      >
        <img src="/prevlogo.svg" alt="previous" className=" w-7 h-7 " />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2  p-2 transition-opacity duration-500 opacity-100"
        onClick={nextImage}
      >
        <img src="/nextlogo.svg" alt="previous" className=" w-7 h-7" />
      </button>
    </div>
  );
};

export default ImageSlider;
