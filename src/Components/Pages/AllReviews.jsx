

import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AllReviews = () => {
  const allReviews = useLoaderData();
  const [sortedReviews, setSortedReviews] = useState(allReviews);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSort = (key) => {
    const sorted = [...sortedReviews].sort((a, b) => b[key] - a[key]);
    setSortedReviews(sorted);
    setSortBy(key);
  };

  const handleFilterByGenre = (genre) => {
    if (selectedGenre === genre) {
      setSelectedGenre(""); // Clear filter if same genre clicked
    } else {
      setSelectedGenre(genre);
    }
  };

  const clearFilters = () => {
    setSelectedGenre("");
    setSortBy("");
    setSortedReviews(allReviews);
  };

  const filteredReviews = selectedGenre
    ? sortedReviews.filter((review) => review.genre === selectedGenre)
    : sortedReviews;

  const genres = ["Action", "RPG", "Adventure", "Sports", "Strategy", "Racing", "Puzzle"];

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 pt-16 md:mt-16">

          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
            <Typewriter
              words={["Explore All Reviews"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive into our comprehensive collection of game reviews! From action-packed adventures to 
            thrilling RPGs, explore ratings, genres, and insights to find your next favorite game.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Sort Controls */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Sort by:
              </span>
              <button
                onClick={() => handleSort("rating")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  sortBy === "rating"
                    ? "bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Rating
              </button>
              <button
                onClick={() => handleSort("year")}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  sortBy === "year"
                    ? "bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Year
              </button>
            </div>

            {/* Clear Filters */}
            {(selectedGenre || sortBy) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all duration-300"
              >
                Clear All Filters
              </button>
            )}
          </div>

          {/* Genre Filters */}
          <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 block">
              Filter by Genre:
            </span>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => handleFilterByGenre(genre)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedGenre === genre
                      ? "bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white shadow-lg scale-105"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>
        </div>



        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((review, index) => (
                         <div
               key={review.id}
               className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-[#00ADB5]/30 dark:hover:border-[#00ADB5]/50 cursor-pointer"
              style={{ 
                animationDelay: `${index * 50}ms`,
                animation: `fadeInUp 0.4s ease-out ${index * 0.05}s both`
              }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={review.coverImage}
                  alt={review.gameTitle}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                                 {/* Verification Badge */}
                 <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white p-1.5 rounded-lg border border-white/20">
                   <svg className="w-3 h-3 text-[#00ADB5]" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                   </svg>
                 </div>

                                 {/* Favorite Button */}
                 <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200 cursor-pointer">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Rating Badge */}
                <div className="absolute bottom-3 right-3 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
                  {review.rating}★
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                {/* Title and Rating */}
                <div className="flex items-start justify-between mb-2">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-[#00ADB5] transition-colors duration-200 line-clamp-1">
                    {review.gameTitle}
                  </h2>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                </div>

                {/* Genre and Year */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {review.genre} • {review.year}
                  </span>
                  <div className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {review.rating}/5
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                      ★
                    </span>
                  ))}
                </div>

                                 {/* Action Button */}
                 <Link to={`/reviews/${review._id}`} className="block">
                   <button className="w-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white font-semibold py-2.5 rounded-lg hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer">
                    <span className="flex items-center justify-center text-sm">
                      View Details
                      <svg 
                        className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Empty State */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              No reviews found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllReviews;