
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ReviewDetails = () => {
  const review = useLoaderData(); 
  const { user } = useContext(AuthContext); 

  const handleAddToWatchlist = () => {
    if (!user) {
      Swal.fire({
        title: "Login Required",
        text: "Please log in to add to your watchlist.",
        icon: "info",
        confirmButtonColor: "#00ADB5",
        confirmButtonText: "OK",
        background: "#f8fafc",
        color: "#1f2937",
      });
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
          Swal.fire({ 
            title: "Success!",
            text: "Added to your watchlist!",
            icon: "success",
            confirmButtonColor: "#00ADB5",
            confirmButtonText: "Continue",
            background: "#f8fafc",
            color: "#1f2937",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong.",
            icon: "error",
            confirmButtonColor: "#ef4444",
            confirmButtonText: "OK",
            background: "#f8fafc",
            color: "#1f2937",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add to your watchlist.",
          icon: "error",
          confirmButtonColor: "#ef4444",
          confirmButtonText: "OK",
          background: "#f8fafc",
          color: "#1f2937",
        });
      });
  };

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 ">
        {/* Header Section */}
        <div className="text-center mb-8 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent">
            Game Review Details
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore the complete review and details of this amazing game. Get insights from our community.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          {/* Game Cover Image */}
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img
              src={review.coverImage}
              alt={review.gameTitle}
              className="w-full h-full object-contain bg-gray-100 dark:bg-gray-700"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x300/00ADB5/ffffff?text=Game+Cover";
              }}
            />
            
            {/* Overlay with game info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent">
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {review.gameTitle}
                </h2>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400 text-lg">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-400"}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-white font-semibold text-sm">
                      {review.rating}/5
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#00ADB5]/90 text-white border border-[#00ADB5]/20">
                    {review.genre || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Review Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Review
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {review.description}
              </p>
            </div>

            {/* Game Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Game Information
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Genre:</span>
                    <span className="text-gray-800 dark:text-white font-semibold">{review.genre || "N/A"}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Rating:</span>
                    <div className="flex items-center gap-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold">
                        {review.rating}/5
                      </span>
                    </div>
                  </div>
                  {review.year && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">Year:</span>
                      <span className="text-gray-800 dark:text-white font-semibold">{review.year}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Reviewer Information
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Name:</span>
                    <span className="text-gray-800 dark:text-white font-semibold">{review.userName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Email:</span>
                    <span className="text-gray-800 dark:text-white font-semibold">{review.userEmail}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <button
                onClick={handleAddToWatchlist}
                className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#00ADB5]/25 dark:hover:shadow-[#00ADB5]/40 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-lg inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;