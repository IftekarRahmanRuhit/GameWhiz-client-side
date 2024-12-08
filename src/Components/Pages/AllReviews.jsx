import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

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

  const filteredReviews = selectedGenre
    ? sortedReviews.filter((review) => review.genre === selectedGenre)
    : sortedReviews;

  return (
    <div className="bg-[#e3ebeb] dark:bg-gradient-to-r from-gray-800 via-[#013b3b] to-gray-800 p-7 max-w-screen-2xl mx-auto">
      <div className=" min-h-screen py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-300 animate__animated animate__backInDown">
            <Typewriter
              words={["Explore All Reviews"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h1>
          <p className="text-gray-800 font-medium dark:text-gray-300 text-center mb-10 animate__animated animate__backInDown ">
            Dive into our comprehensive collection of game reviews! From
            action-packed adventures to
            <br /> thrilling RPGs, explore ratings, genres, and insights to find
            your next favorite game
          </p>

          <div className="w-11/12 mx-auto mb-6 flex justify-between">
            <div className="flex">
              <details className="dropdown">
                <summary className="btn m-1 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white hover:bg-gradient-to-l hover:bg-[#008C8C] transition-all duration-300 border-none">
                  Sort By
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-28 p-2 shadow bg-gradient-to-r from-white via-[#E0F7F9] to-[#F0FCFC]">
                  <li>
                    <button
                      onClick={() => handleSort("rating")}
                      className="w-full text-left text-[#008C8C] font-bold"
                    >
                      Rating
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSort("year")}
                      className="w-full text-left text-[#008C8C] font-bold"
                    >
                      Year
                    </button>
                  </li>
                </ul>
              </details>
            </div>

            <div className="flex">
              <details className="dropdown">
                <summary className=" btn m-1 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white hover:bg-gradient-to-l hover:bg-[#008C8C] transition-all duration-300 border-none font">
                  Filter By Genre
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-28 p-2 shadow bg-gradient-to-r from-white via-[#E0F7F9] to-[#F0FCFC]">
                  <li>
                    <button
                      onClick={() => handleFilterByGenre("Action")}
                      className="w-full text-left text-[#008C8C] font-bold"
                    >
                      Action
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFilterByGenre("RPG")}
                      className="w-full text-left text-[#008C8C] font-bold"
                    >
                      RPG
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFilterByGenre("Adventure")}
                      className="w-full text-left text-[#008C8C] font-bold"
                    >
                      Adventure
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleFilterByGenre("Sports")}
                      className="w-full text-left text-[#008C8C] font-bold"
                    >
                      Sports
                    </button>
                  </li>
                </ul>
              </details>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="card relative bg-base-100 dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={review.coverImage}
                    alt={review.gameTitle}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {review.gameTitle}
                  </h2>
                  <p className="text-lg text-gray-800 dark:text-gray-400 mt-1 font-semibold">
                    Genre: {review.genre}
                  </p>
                  <div className="flex items-center mt-2">
                    <div className="flex text-gray-800 dark:text-gray-400 font-semibold text-lg">
                      Rating:{" "}
                      <span className="text-yellow-500 text-xl ml-1">
                        {"★".repeat(review.rating)}
                      </span>
                    </div>
                  </div>
                  <p className="text-lg text-gray-800 dark:text-gray-400 mt-2 font-semibold">
                    Publishing year: {review.year}
                  </p>
                </div>

                <Link to={`/reviews/${review._id}`}>
                  <button className="btn mt-4 w-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white hover:bg-gradient-to-l hover:bg-[#008C8C] transition-all duration-300 border-none">
                    Explore Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
