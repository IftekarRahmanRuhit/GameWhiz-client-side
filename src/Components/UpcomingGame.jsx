
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaPlay, FaCalendarAlt, FaGamepad, FaSteam, FaXbox, FaPlaystation } from "react-icons/fa";
import { SiEpicgames, SiUbisoft } from "react-icons/si";
import { MdOutlineTimer, MdOutlineTrendingUp } from "react-icons/md";
import { BsController } from "react-icons/bs";
import img from "../../public/IMG.png";

const UpcomingGame = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  // Target date: January 19, 2025
  const targetDate = new Date('2025-01-19T00:00:00').getTime();

  useEffect(() => {
    setIsVisible(true);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const platforms = [
    { name: "PC", icon: FaGamepad, color: "from-blue-500 to-blue-600" },
    { name: "PS5", icon: FaPlaystation, color: "from-blue-600 to-blue-700" },
    { name: "XBOX", icon: FaXbox, color: "from-green-500 to-green-600" },
    { name: "STEAM", icon: FaSteam, color: "from-gray-700 to-gray-800" },
    { name: "EPIC", icon: SiEpicgames, color: "from-purple-500 to-purple-600" },
    { name: "UPLAY", icon: SiUbisoft, color: "from-blue-400 to-blue-500" }
  ];

  return (
    <div className="relative bg-gradient-to-r from-white via-[#E0F7F9] to-[#F0FCFC] dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#00ADB5]/5 to-[#008C8C]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#00ADB5]/5 to-[#008C8C]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#C8404E]/5 to-[#00ADB5]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#C8404E] to-[#00ADB5] rounded-xl flex items-center justify-center shadow-lg">
              <MdOutlineTrendingUp className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#C8404E] to-[#00ADB5] bg-clip-text text-transparent min-h-[1.2em] flex items-center justify-center">
              <Typewriter
                words={["Upcoming Game"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get ready for the most anticipated gaming experience of 2025. A world where 
            <span className="font-semibold text-[#C8404E]"> chaos meets strategy</span>, 
            <span className="font-semibold text-[#00ADB5]"> rebellion meets redemption</span>, and 
            <span className="font-semibold text-[#C8404E]"> survival meets glory</span>.
          </p>
        </div>

        {/* Main Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-center transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Left Section - Game Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-r from-[#C8404E] to-[#00ADB5] rounded-full"></div>
                <h3 className="text-[#C8404E] text-xl font-bold tracking-wider">NEVER BE</h3>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-gray-800 dark:text-gray-100 leading-tight">
                THE SAME
              </h2>
            </div>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Step into a world of chaos and rebellion, where danger lurks in every shadow. 
                Unleash your skills as a fearless outlaw and battle against the odds in a fight 
                for survival and freedom.
              </p>
              <p className="text-lg leading-relaxed">
                In a land torn apart by betrayal and war, only the strong survive. Sharpen your 
                weapons, trust no one, and embrace the darkness as you embark on a journey that 
                will challenge your every instinct.
              </p>
            </div>

            {/* Game Features */}
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-[#C8404E] text-lg">✖</span>
                <span className="font-medium">Red Desert</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full">
                <span className="text-[#00ADB5] text-lg">▲</span>
                <span className="font-medium">Alpha Rog</span>
              </div>
            </div>

            {/* Pre-order Button */}
            <button className="group relative bg-gradient-to-r from-[#C8404E] to-[#00ADB5] hover:from-[#00ADB5] hover:to-[#C8404E] text-white font-bold py-4 px-8 rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3">
              <FaPlay className="text-lg group-hover:animate-pulse" />
              <span>Pre-Order Now</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Middle Section - Game Image */}
          <div className="flex justify-center items-center">
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#C8404E]/20 to-[#00ADB5]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-b from-[#C8404E] to-black rounded-2xl p-2 overflow-hidden">
                <img
                  src={img}
                  alt="Game Character"
                  className="rounded-xl max-w-full transform group-hover:scale-105 transition-all duration-700 cursor-pointer"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30">
                    <FaPlay className="text-white text-3xl ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Release Info */}
          <div className="space-y-8">
            {/* Release Date */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
                <FaCalendarAlt className="text-[#C8404E]" />
                <span className="font-medium">Release Date</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
                19 January <span className="bg-gradient-to-r from-[#C8404E] to-[#00ADB5] bg-clip-text text-transparent">2025</span>
              </h3>
              <p className="text-[#00ADB5] italic font-medium">"Coming To All Platforms"</p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                  <MdOutlineTimer className="text-[#C8404E]" />
                  <span className="font-medium">Time Until Release</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Seconds</div>
                </div>
              </div>
            </div>

            {/* Platforms */}
            <div className="space-y-4">
              <h4 className="text-center text-lg font-semibold text-gray-800 dark:text-gray-200">
                Available Platforms
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    className={`group bg-gradient-to-r ${platform.color} hover:scale-105 transition-all duration-300 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <platform.icon className="text-lg" />
                    <span>{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wishlist Button */}
            <button className="w-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3">
              <BsController className="text-lg" />
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#C8404E]/10 to-[#00ADB5]/10 dark:from-[#C8404E]/20 dark:to-[#00ADB5]/20 rounded-2xl p-8 border border-[#C8404E]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Ready for the Revolution?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Join millions of players worldwide in the most anticipated gaming experience of 2025. 
              Pre-order now and get exclusive early access content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#C8404E] to-[#00ADB5] hover:from-[#00ADB5] hover:to-[#C8404E] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                <FaPlay className="text-lg" />
                <span>Pre-Order Now</span>
              </button>
              <button className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3">
                <BsController className="text-lg" />
                <span>Watch Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingGame;
