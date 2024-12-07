
import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const HighestRatedReviews = () => {
  const reviews = useLoaderData();

  const [text] = useTypewriter({
    words: [
      'Explore The Highest Rated Game',
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });

  return (
    <div className="bg-slate-200 dark:bg-gradient-to-r from-gray-800 via-[#013b3b] to-gray-800 p-10 max-w-screen-2xl mx-auto">

      <div>
        <p className="text-2xl md:text-4xl text-center text-gray-800 dark:text-gray-300 font-bold mb-4 mt-16">
          {text}
        </p>
        <p className="text-gray-800 font-medium dark:text-gray-300 text-center mb-10">
          Discover top-rated games with stunning visuals, thrilling gameplay, captivating stories, and
          <br />
          ultimate entertainment. Dive into unforgettable gaming adventures today!
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="card relative bg-base-100 dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg animate__animated animate__fadeInUp cursor-pointer"
          >
 
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={review.coverImage}
                alt={review.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>


            <div className="mt-4">
              <h2 className="text-2xl font-bold">{review.gameTitle}</h2>
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
  );
};

export default HighestRatedReviews;