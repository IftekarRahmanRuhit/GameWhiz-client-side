
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaNewspaper, FaCalendarAlt, FaUser, FaEye, FaArrowRight, FaBookmark, FaShare } from "react-icons/fa";
import { MdOutlineTrendingUp, MdOutlineAccessTime } from "react-icons/md";
import { BsController } from "react-icons/bs";
import img1 from "../../public/news-1.jpg";
import img2 from "../../public/news-2.jpg";
import img3 from "../../public/news-3.jpg";

const LatestNews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const newsData = [
    {
      id: 1,
      image: img1,
      category: "Tips & Tutorials",
      title: "Mastering Game Development: A Comprehensive Guide for Beginners",
      excerpt: "Learn the fundamentals of game development with our comprehensive guide designed specifically for beginners. From concept to launch, master every aspect of creating engaging games.",
      author: "GameWhiz Team",
      date: "December 8, 2024",
      readTime: "8 min read",
      views: "2.4k",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      image: img2,
      category: "Game Development",
      title: "Optimizing for Success: Strategies for Multi-Platform Game Development",
      excerpt: "Discover proven strategies for optimizing your games across multiple platforms. Learn how to maximize performance and user experience on every device.",
      author: "Sarah Chen",
      date: "December 7, 2024",
      readTime: "12 min read",
      views: "1.8k",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      image: img3,
      category: "Sound Design",
      title: "The Soundtrack of Success: Importance of Audio in Game Design",
      excerpt: "Explore how sound design can make or break your game experience. From ambient sounds to epic soundtracks, learn the secrets of immersive audio.",
      author: "Mike Rodriguez",
      date: "December 6, 2024",
      readTime: "10 min read",
      views: "3.1k",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
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
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] rounded-xl flex items-center justify-center shadow-lg">
              <FaNewspaper className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent min-h-[1.2em] flex items-center justify-center">
        <Typewriter
                words={["Latest News & Articles"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
        />
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the gaming curve with our latest insights, tutorials, and industry updates. 
            From <span className="font-semibold text-[#00ADB5]">development tips</span> to 
            <span className="font-semibold text-[#00ADB5]"> industry trends</span>, discover what's shaping the future of gaming.
          </p>
          
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <FaNewspaper className="text-[#00ADB5]" />
              <span className="font-medium">Latest Updates</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <BsController className="text-[#00ADB5]" />
              <span className="font-medium">Expert Insights</span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MdOutlineTrendingUp className="text-[#00ADB5]" />
              <span className="font-medium">Trending Topics</span>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsData.map((news, index) => (
            <div
              key={news.id}
              className={`group relative transform transition-all duration-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(news.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 group-hover:scale-105">
                
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`bg-gradient-to-r ${news.color} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                      {news.category}
            </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 hover:bg-white/30 transition-colors duration-300">
                      <FaBookmark className="text-white text-sm" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 hover:bg-white/30 transition-colors duration-300">
                      <FaShare className="text-white text-sm" />
                    </button>
                  </div>
                  
                  {/* Read More Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                      <FaArrowRight className="text-white text-2xl" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-[#00ADB5] transition-colors duration-300 line-clamp-2 leading-tight">
                      {news.title}
            </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {news.excerpt}
                    </p>
                    
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <FaUser className="text-[#00ADB5]" />
                          <span>{news.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaEye className="text-[#00ADB5]" />
                          <span>{news.views}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <MdOutlineAccessTime className="text-[#00ADB5]" />
                        <span>{news.readTime}</span>
          </div>
        </div>

                    {/* Date and Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="text-[#00ADB5] text-sm" />
                        <span className="text-sm">{getTimeAgo(news.date)}</span>
                      </div>
                      <button className="group/btn flex items-center gap-2 text-[#00ADB5] font-semibold text-sm hover:text-[#008C8C] transition-colors duration-300">
                        <span>Read More</span>
                        <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
          </div>
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
              Never Miss an Update
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest gaming news, tutorials, and industry insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] hover:from-[#008C8C] hover:to-[#00ADB5] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2">
                <FaNewspaper className="text-sm" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
