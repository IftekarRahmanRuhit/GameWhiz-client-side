
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../../public/IMG.png";

const UpcomingGame = () => {
  return (
    <div className="bg-[#e3ebeba4] dark:bg-[#071523] text-white p-20 max-w-screen-2xl mx-auto">
      {/* Heading with Typewriter Effect */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-300 text-center mb-20">
        <Typewriter
          words={["Upcoming Game"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left Section */}
        <div className="flex flex-col">
          <h3 className="text-[#00ADB5] text-xl font-semibold">NEVER BE</h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800 dark:text-gray-300">THE SAME</h1>
          <p className="text-gray-800 dark:text-gray-300 mt-4">
            Step into a world of chaos and rebellion, where danger lurks in
            every shadow. Unleash your skills as a fearless outlaw and battle
            against the odds in a fight for survival and freedom.
          </p>
          <p className="text-gray-800 dark:text-gray-300 mt-4">
            In a land torn apart by betrayal and war, only the strong survive.
            Sharpen your weapons, trust no one, and embrace the darkness as you
            embark on a journey that will challenge your every instinct. Will
            you rise above or fall to the shadows?
          </p>
          <div className="flex items-center gap-6 mt-6 text-gray-800 dark:text-gray-300 text-sm">
            <span className="flex items-center gap-2">
              ✖ <span>Red Desert</span>
            </span>
            <span className="flex items-center gap-2">
              ▲ <span>Alpha Rog</span>
            </span>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex justify-center items-center">
          <div className="bg-gradient-to-b from-[#C8404E] to-black">
            <img
              src={img}
              alt="Game Character"
              className="rounded-lg max-w-full hover:scale-105 transition transform duration-700 cursor-pointer"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center flex flex-col justify-center items-center">
          <h4 className="text-lg uppercase text-gray-800 dark:text-gray-300">Play First On</h4>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-gray-300">
            19 January <span className="text-[#00ADB5] ">2025</span>
          </h2>
          <p className="text-[#00ADB5]  italic mt-2">"Come To All Platforms"</p>
          <div className="grid grid-cols-2 gap-4 mt-6 w-full md:w-2/3">
            <span className="bg-gray-800 py-2 rounded-md">XBOX</span>
            <span className="bg-gray-800 py-2 rounded-md">PS-5</span>
            <span className="bg-gray-800 py-2 rounded-md">UPLAY</span>
            <span className="bg-gray-800 py-2 rounded-md">PC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingGame;
