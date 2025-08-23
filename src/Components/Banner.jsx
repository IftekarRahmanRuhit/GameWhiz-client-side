
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaArrowLeft, FaArrowRight, FaGamepad, FaStar, FaEye } from "react-icons/fa";
import { MdOutlineTrendingUp } from "react-icons/md";
import { BsController } from "react-icons/bs";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const bannerData = [
    {
      id: 1,
      title: "Call of Duty: Warzone",
      subtitle: "Epic Battle Royale",
      description: "Experience intense combat in the ultimate battle royale with stunning graphics and tactical gameplay.",
      rating: 4.8,
      genre: "FPS",
      image: "/call-of-duty-warzone-.jpg",
      buttonText: "Read Review",
      buttonLink: "/allreviews"
    },
    {
      id: 2,
      title: "Grand Theft Auto VI",
      subtitle: "Next-Gen Crime Saga",
      description: "The most anticipated open-world action game with revolutionary graphics and immersive storytelling.",
      rating: 4.9,
      genre: "Action",
      image: "/GTA-6.jpg",
      buttonText: "Read Review",
      buttonLink: "/allreviews"
    },
    {
      id: 3,
      title: "Red Dead Redemption 2",
      subtitle: "Wild West Epic",
      description: "An epic tale of life in America's unforgiving heartland with stunning visuals and deep storytelling.",
      rating: 4.7,
      genre: "Action Adventure",
      image: "/RED-DEAD.jpg",
      buttonText: "Read Review",
      buttonLink: "/allreviews"
    },
    {
      id: 4,
      title: "Assassin's Creed Valhalla",
      subtitle: "Viking Conquest",
      description: "Lead epic Viking raids against Saxon troops and fortresses throughout ninth-century England.",
      rating: 4.6,
      genre: "Action RPG",
      image: "/valhalla-assassin-s-creed.jpg",
      buttonText: "Read Review",
      buttonLink: "/allreviews"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-8 md:mt-16 lg:mt-20 overflow-hidden">
      {/* Main Banner Container */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        {bannerData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center bg-gradient-to-br from-gray-800 to-black"
                style={{ objectPosition: 'center center' }}
                onError={(e) => {
                  console.error('Image failed to load:', slide.image);
                  e.target.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('Image loaded successfully:', slide.image);
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              
                             {/* Content Overlay */}
               <div className="absolute inset-0 flex items-center">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                   <div className="max-w-2xl ml-4 md:ml-8 lg:ml-12">
                    {/* Genre Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-lg">
                      <BsController className="text-sm" />
                      <span>{slide.genre}</span>
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <h2 className="text-xl md:text-2xl text-[#00ADB5] font-semibold mb-4">
                      {slide.subtitle}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                    
                    {/* Rating and Action */}
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <FaStar className="text-yellow-400 text-lg" />
                        <span className="text-white font-bold text-lg">{slide.rating}</span>
                        <span className="text-gray-300 text-sm">/5.0</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-300">
                        <FaEye className="text-[#00ADB5]" />
                        <span className="text-sm">Expert Review</span>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={slide.buttonLink}>
                        <button className="group bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
                          <FaGamepad className="text-lg group-hover:animate-pulse" />
                          <span>{slide.buttonText}</span>
                          <FaPlay className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                      
                      <button className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 border border-white/20 flex items-center gap-3">
                        <MdOutlineTrendingUp className="text-lg" />
                        <span>Watch Trailer</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        ))}
        
                 {/* Navigation Arrows */}
         <button
           onClick={prevSlide}
           className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 z-10"
         >
           <FaArrowLeft className="text-xl" />
         </button>
        
                 <button
           onClick={nextSlide}
           className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 z-10"
         >
           <FaArrowRight className="text-xl" />
         </button>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-[#00ADB5] scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] transition-all duration-1000 ease-linear"
            style={{ width: `${((activeSlide + 1) / bannerData.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Bottom Stats */}
      <div className="bg-gradient-to-r from-[#00ADB5]/10 to-[#008C8C]/10 backdrop-blur-sm border-t border-[#00ADB5]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-[#00ADB5]">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Game Reviews</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-[#00ADB5]">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-[#00ADB5]">4.9</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-[#00ADB5]">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;