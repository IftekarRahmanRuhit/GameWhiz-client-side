
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const loadedReview = useLoaderData();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRating, setSelectedRating] = useState(loadedReview.rating || 5);

  const genres = [
    "Action", "Adventure", "RPG", "Strategy", "Simulation", "Sports", 
    "Racing", "Puzzle", "Horror", "Fighting", "Shooter", "Platformer",
    "Stealth", "Survival", "Roguelike", "Visual Novel", "Educational"
  ];

  const handleUpdateReview = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const coverImage = form.coverImage.value;
    const gameTitle = form.gameTitle.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;

    const updatedReview = {
      coverImage,
      gameTitle,
      description,
      rating: parseInt(rating),
      year: parseInt(year),
      genre,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch(`https://game-whiz-server-side.vercel.app/reviews/${loadedReview._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Review updated successfully!",
            icon: "success",
            confirmButtonColor: "#00ADB5",
            confirmButtonText: "Continue",
            background: "#f8fafc",
            color: "#1f2937",
          });
          navigate("/allreviews"); 
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update review. Please try again.",
          icon: "error",
          confirmButtonColor: "#ef4444",
          confirmButtonText: "OK",
          background: "#f8fafc",
          color: "#1f2937",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 md:mt-16">
        {/* Header Section */}
        <div className="text-center mb-8 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent">
            <Typewriter
              words={['Update Your Game Review']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={70}
            />
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Refine and enhance your game review with updated information and insights.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Edit Review Details</h2>
                <p className="text-white/80">Update your game review information</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form className="space-y-6" onSubmit={handleUpdateReview}>
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Game Cover Image */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Game Cover Image URL
                    </label>
                    <input
                      type="text"
                      name="coverImage"
                      defaultValue={loadedReview.coverImage}
                      required
                      placeholder="Enter game cover image URL"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    />
                  </div>

                  {/* Game Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      Game Title
                    </label>
                    <input
                      type="text"
                      name="gameTitle"
                      defaultValue={loadedReview.gameTitle}
                      required
                      placeholder="Enter game title"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Rating
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setSelectedRating(star)}
                            className={`text-2xl transition-colors duration-200 ${
                              star <= selectedRating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                            }`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                      <input
                        type="number"
                        name="rating"
                        value={selectedRating}
                        onChange={(e) => setSelectedRating(parseInt(e.target.value))}
                        required
                        min="1"
                        max="5"
                        className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white text-center"
                      />
                    </div>
                  </div>

                  {/* Year */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Publishing Year
                    </label>
                    <input
                      type="number"
                      name="year"
                      defaultValue={loadedReview.year}
                      min="1990"
                      max="3000"
                      placeholder="Enter publishing year"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    />
                  </div>

                  {/* Genre */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      Genre
                    </label>
                    <select
                      name="genre"
                      defaultValue={loadedReview.genre}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    >
                      <option value="">Select Genre</option>
                      {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Review Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Review Description
                    </label>
                    <textarea
                      name="description"
                      defaultValue={loadedReview.description}
                      placeholder="Share your thoughts about the game..."
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
                    ></textarea>
                  </div>

                  {/* User Information (Read-only) */}
                  <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Your Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="userEmail"
                          value={user?.email || ""}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 dark:text-white text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name="userName"
                          value={user?.displayName || ""}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-600 dark:text-white text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-8 py-4 rounded-xl hover:shadow-xl hover:shadow-[#00ADB5]/25 dark:hover:shadow-[#00ADB5]/40 transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-lg inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Updating...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Update Review
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  );
};

export default UpdateReview;