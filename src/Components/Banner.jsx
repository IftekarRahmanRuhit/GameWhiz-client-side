
import React, { useState, useEffect } from "react";
import banner1 from "../../public/banner-1.jpg";
import banner2 from "../../public/banner-2.jpg";
import banner3 from "../../public/banner-3.jpg";
import banner4 from "../../public/banner-4.jpg";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className=" w-full">
        <div
          className={`carousel-item relative w-full ${
            activeSlide === 1 ? "block" : "hidden"
          }`}
        >
          <img
            src={banner3}
            alt="Banner 3"
            className="w-full lg:h-[500px] h-[250px] object-fill"
          />
        </div>
        <div
          className={`carousel-item relative w-full ${
            activeSlide === 2 ? "block" : "hidden"
          }`}
        >
          <img
            src={banner1}
            alt="Banner 1"
            className="w-full lg:h-[500px] h-[250px] object-fill"
          />
        </div>
        <div
          className={`carousel-item relative w-full ${
            activeSlide === 3 ? "block" : "hidden"
          }`}
        >
          <img
            src={banner2}
            alt="Banner 2"
            className="w-full lg:h-[450px] h-[250px] object-fill"
          />
        </div>
        <div
          className={`carousel-item relative w-full ${
            activeSlide === 4 ? "block" : "hidden"
          }`}
        >
          <img
            src={banner4}
            alt="Banner 4"
            className="w-full lg:h-[500px] h-[250px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;