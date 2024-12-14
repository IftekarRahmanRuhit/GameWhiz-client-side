
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ReviewDetails = () => {
  const review = useLoaderData(); 

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

    fetch("https://game-whiz-server-side.vercel.app/gamewatchlist",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(watchListItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({ title: "Success",
            text: "Added to your watchlist!",
            icon: "success",
            confirmButtonColor: "#008C8C",
            confirmButtonText: "Close",});
        } else {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to add to your watchlist.", "error");
      });
  };

  return (
<div className="p-16 bg-[#e3ebeb] dark:bg-gradient-to-r from-gray-800 via-[#013b3b] to-gray-800 ">
<div className="max-w-3xl mx-auto p-6 bg-base-100 dark:bg-gray-900 shadow-lg rounded-lg animate__animated animate__fadeInUp cursor-pointer">
      <img
        src={review.coverImage}
        alt={review.title}
        className="w-full h-64 object-fill rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4  text-gray-800 dark:text-white">{review.gameTitle}</h1>
      <p className=" mt-2  text-gray-800 dark:text-gray-400 font-semibold">{review.description}</p>
      <p className="mt-2">
        <span className="font-semibold text-lg text-gray-800 dark:text-gray-400 mt-1 ">Genre:</span> <span className="font-semibold text-lg text-gray-800 dark:text-gray-400">{review.genre || "N/A"}</span>
      </p>
      <p className="mt-2">
        <span className="font-semibold ext-gray-800 dark:text-gray-400 text-lg">Rating: <span className="text-yellow-500">{"★".repeat(review.rating)}</span></span> 
      </p>
      <p className="mt-2">
        <span className="text-lg text-gray-800 dark:text-gray-400 mt-2 font-semibold">Reviewer:</span> <span className="text-lg text-gray-800 dark:text-gray-400 mt-2 font-semibold">{review.userName}</span>
      </p>
      <p className="mt-2">
        <span className="text-lg text-gray-800 dark:text-gray-400 mt-2 font-semibold">Email:</span> <span className="text-lg text-gray-800 dark:text-gray-400 mt-2 font-semibold">{review.userEmail}</span>
      </p>
      <button
        onClick={handleAddToWatchlist}
        className="btn-sm md:btn-md mt-6 px-6 py-2 font-bold bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white hover:bg-gradient-to-l hover:bg-[#008C8C] transition-all duration-300 border-none rounded-lg"
      >
        Add to WatchList
      </button>
    </div>
</div>
  );
};

export default ReviewDetails;