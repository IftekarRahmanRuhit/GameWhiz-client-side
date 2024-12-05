

import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ReviewDetails = () => {
  const review = useLoaderData(); 
  console.log(review)
  const { user } = useContext(AuthContext); 

  const handleAddToWatchlist = () => {
    if (!user) {
      Swal.fire("Oops!", "Please log in to add to your watchlist.", "error");
      return;
    }

    const watchListItem = {
      reviewId: review._id,
      title: review.gameTitle,
      coverImage: review.coverImage,
      genre: review.genre,
      rating: review.rating,
      userName: user.displayName, 
      userEmail: user.email,     
    };

    fetch("http://localhost:5010/gamewatchlist",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success!", "Added to your watchlist.", "success");
        } else {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to add to your watchlist.", "error");
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <img
        src={review.coverImage}
        alt={review.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{review.gameTitle}</h1>
      <p className="text-gray-700 mt-2">{review.description}</p>
      <p className="mt-2">
        <span className="font-semibold">Genre:</span> {review.genre || "N/A"}
      </p>
      <p className="mt-2">
        <span className="font-semibold">Rating: <span className="text-yellow-500">{"★".repeat(review.rating)}</span></span> 
      </p>
      <p className="mt-2">
        <span className="font-semibold">Reviewer:</span> {review.userName}
      </p>
      <p className="mt-2">
        <span className="font-semibold">Email:</span> {review.userEmail}
      </p>
      <button
        onClick={handleAddToWatchlist}
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
      >
        Add to WatchList
      </button>
    </div>
  );
};

export default ReviewDetails;