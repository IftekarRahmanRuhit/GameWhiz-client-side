
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../../public/news-1.jpg";
import img2 from "../../public/news-2.jpg";
import img3 from "../../public/news-3.jpg";

const LatestNews = () => {
  return (
    <div className="bg-[#e3ebeb] dark:bg-gray-900 text-white py-20 max-w-screen-2xl mx-auto">

      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-300 text-center mb-8">
        <Typewriter
          words={["Latest news & article"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 w-11/12 mx-auto cursor-pointer">

        <div className="bg-base-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src={img1}
            alt="Mastering Game Development"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <span className="bg-[#008C8C] text-white font-semibold text-xs px-2 py-1 rounded inline-block mb-2">
              Tips and Tutorials
            </span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
              Mastering Game Development: A Comprehensive Guide for Beginners
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Learn the basics of game development with this comprehensive guide.
            </p>
            <span className="text-gray-500 text-xs">08/12/2024</span>
          </div>
        </div>

        <div className="bg-base-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src={img2}
            alt="Optimizing Multi-Platform Game Development"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <span className="bg-[#008C8C] text-white font-semibold text-xs px-2 py-1 rounded inline-block mb-2">
              Game Development
            </span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
              Optimizing for Success: Strategies for Multi-Platform Game Development
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Explore strategies for optimizing multi-platform games.
            </p>
            <span className="text-gray-500 text-xs">08/12/2024</span>
          </div>
        </div>


        <div className="bg-base-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <img
            src={img3}
            alt="Soundtrack of Success"
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <span className="bg-[#008C8C] text-white font-semibold text-xs px-2 py-1 rounded inline-block mb-2">
              Sound Design
            </span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
              The Soundtrack of Success: Importance of Audio in Game Design
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Discover how sound design impacts game experiences.
            </p>
            <span className="text-gray-500 text-xs">08/12/2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
