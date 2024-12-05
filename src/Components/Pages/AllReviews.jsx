

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllReviews = () => {
  const allReviews = useLoaderData();
  const [sortedReviews, setSortedReviews] = useState(allReviews);
  const [selectedGenre, setSelectedGenre] = useState("");


  const handleSort = (key) => {
    const sorted = [...sortedReviews].sort((a, b) => b[key] - a[key]);
    setSortedReviews(sorted);
  };

  
  const handleFilterByGenre = (genre) => {
    setSelectedGenre(genre);
  };

  // Filtered reviews based on the selected genre
  const filteredReviews = selectedGenre
    ? sortedReviews.filter((review) => review.genre === selectedGenre)
    : sortedReviews;

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          All Reviews
        </h1>

       
        <div className="w-11/12 mx-auto mb-6 flex justify-between">
          <div className="flex">
            <details className="dropdown">
              <summary className="btn m-1">Sort By</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-28 p-2 shadow">
                <li>
                  <button
                    onClick={() => handleSort("rating")}
                    className="w-full text-left"
                  >
                    Rating
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSort("year")}
                    className="w-full text-left"
                  >
                    Year
                  </button>
                </li>
              </ul>
            </details>
          </div>

          
          <div className="flex">
            <details className="dropdown">
              <summary className="btn m-1">Filter By Genre</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-28 p-2 shadow">
                <li>
                  <button
                    onClick={() => handleFilterByGenre("Action")}
                    className="w-full text-left"
                  >
                    Action
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterByGenre("RPG")}
                    className="w-full text-left"
                  >
                    RPG
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterByGenre("Adventure")}
                    className="w-full text-left"
                  >
                    Adventure
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleFilterByGenre("Sports")}
                    className="w-full text-left"
                  >
                    Sports
                  </button>
                </li>
              </ul>
            </details>
          </div>
        </div>

      
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
           
              <img
                src={review.coverImage}
                alt={review.gameTitle}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {review.gameTitle}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  Genre: <span className="font-medium">{review.genre}</span>
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Rating:{" "}
                  <span className="font-medium text-yellow-600">
                    {"★".repeat(review.rating)}
                  </span>
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Year: <span className="font-medium">{review.year}</span>
                </p>
                {/* Explore Details Button */}
                <button className="block w-full bg-yellow-500 text-white text-center py-2 rounded hover:bg-yellow-600 transition duration-300">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;