
import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaStar, FaPlay, FaEye, FaHeart, FaGamepad } from "react-icons/fa";
import { MdOutlineTrendingUp, MdOutlineAccessTime } from "react-icons/md";
import { IoMdTrendingUp } from "react-icons/io";
import { BsController } from "react-icons/bs";

const HighestRatedReviews = () => {
  const reviews = useLoaderData();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Sort reviews by rating (highest first) and take top 6
  const topReviews = reviews
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "text-yellow-400";
    if (rating >= 4.0) return "text-yellow-500";
    if (rating >= 3.5) return "text-orange-400";
    return "text-gray-400";
  };

  const getRatingText = (rating) => {
    if (rating >= 4.5) return "Exceptional";
    if (rating >= 4.0) return "Excellent";
    if (rating >= 3.5) return "Very Good";
    return "Good";
  };

  return (
         <div className="relative bg-gradient-to-r from-white via-[#E0F7F9] to-[#F0FCFC] dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 overflow-hidden">
       {/* Background Decorative Elements */}
       <div className="absolute inset-0 overflow-hidden">
         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#00ADB5]/5 to-[#008C8C]/5 rounded-full blur-3xl"></div>
         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#00ADB5]/5 to-[#008C8C]/5 rounded-full blur-3xl"></div>
       </div>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                 {/* Header Section */}
         <div className="text-center mb-16">
           <div className="text-center mb-6">
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent min-h-[1.2em] flex items-center justify-center">
        <Typewriter
                 words={["Highest Rated Games"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
             </h1>
           </div>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the crème de la crème of gaming excellence. These top-rated titles represent the pinnacle of 
            <span className="font-semibold text-[#00ADB5]"> storytelling</span>, 
            <span className="font-semibold text-[#00ADB5]"> gameplay innovation</span>, and 
            <span className="font-semibold text-[#00ADB5]"> visual mastery</span>.
          </p>
          
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FaStar className="text-yellow-400" />
              <span className="font-medium">Top Rated</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <BsController className="text-[#00ADB5]" />
              <span className="font-medium">Expert Reviews</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FaEye className="text-[#00ADB5]" />
              <span className="font-medium">Verified Quality</span>
            </div>
          </div>
      </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {topReviews.map((review, index) => (
          <div
            key={review._id}
              className={`group relative transform transition-all duration-500 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(review._id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 group-hover:scale-105">
                
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
              <img
                src={review.coverImage}
                    alt={review.gameTitle}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <FaStar className={`text-sm ${getRatingColor(review.rating)}`} />
                    <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                      {review.rating}
                    </span>
            </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                  </div>
                  
                  {/* Genre Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {review.genre}
                  </span>
                </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-[#00ADB5] transition-colors duration-300 line-clamp-2">
                      {review.gameTitle}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < Math.floor(review.rating)
                              ? getRatingColor(review.rating)
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
              </div>
            </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {review.description || `Experience the ultimate ${review.genre.toLowerCase()} adventure with stunning graphics and immersive gameplay.`}
                  </p>
                  
                  {/* Rating Details */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-semibold ${getRatingColor(review.rating)}`}>
                        {getRatingText(review.rating)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      <MdOutlineAccessTime className="text-sm" />
                      <span className="text-xs">5 min read</span>
                    </div>
                  </div>
                  
                  {/* Action Button */}
            <Link to={`/reviews/${review._id}`}>
                    <button className="w-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                      <span>Explore Details</span>
                      <FaEye className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#00ADB5]/30 transition-all duration-500 pointer-events-none"></div>
              </div>
          </div>
        ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#00ADB5]/10 to-[#008C8C]/10 dark:from-[#00ADB5]/20 dark:to-[#008C8C]/20 rounded-2xl p-8 border border-[#00ADB5]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Ready to Discover More?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our complete collection of game reviews, ratings, and recommendations to find your next gaming adventure.
            </p>
            <Link to="/allreviews">
              <button className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 mx-auto">
                <FaGamepad className="text-lg" />
                <span>Browse All Reviews</span>
                <MdOutlineTrendingUp className="text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedReviews;