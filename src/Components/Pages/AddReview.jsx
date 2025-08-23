import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleAddReview = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const coverImage = form.coverImage.value;
    const gameTitle = form.gameTitle.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;

    const newReview = {
      coverImage,
      gameTitle,
      description,
      rating: parseInt(rating),
      year: parseInt(year),
      genre,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch("https://game-whiz-server-side.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Your review has been added successfully!",
            icon: "success",
            confirmButtonText: "Continue",
            confirmButtonColor: "#00ADB5",
            background: "#f8fafc",
            color: "#1f2937",
          });
          form.reset();
          setSelectedRating(0);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          confirmButtonColor: "#ef4444",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  const genres = [
    "Action", "RPG", "Adventure", "Sports", "Strategy", 
    "Racing", "Puzzle", "Shooter", "Simulation", "Horror", 
    "Fighting", "Platformer"
  ];

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 md:mt-16">
        {/* Header Section */}
        <div className="text-center mb-8 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent">
            <Typewriter
              words={["Share Your Gaming Experience", "Add Your Review", "Tell Your Story"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Help fellow gamers discover amazing titles! Share your honest thoughts, ratings, and insights 
            to contribute to our growing community of game enthusiasts.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden max-w-4xl mx-auto">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-1">Create Your Review</h2>
                <p className="text-[#e3ebeb] text-sm">Fill in the details below to share your gaming experience</p>
              </div>
              <div className="hidden md:block">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6">
            <form className="space-y-6" onSubmit={handleAddReview}>
              {/* Game Information Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                  {/* Game Cover Image */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Game Cover Image URL
                    </label>
                    <input
                      type="url"
                      name="coverImage"
                      required
                      placeholder="https://example.com/game-cover.jpg"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] dark:bg-gray-700 dark:text-white transition-all duration-300"
                    />
                  </div>

                  {/* Game Title */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                      </svg>
                      Game Title
                    </label>
                    <input
                      type="text"
                      name="gameTitle"
                      required
                      placeholder="Enter the game title"
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] dark:bg-gray-700 dark:text-white transition-all duration-300"
                    />
                  </div>

                  {/* Genre and Year */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Genre
                      </label>
                      <select
                        name="genre"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] dark:bg-gray-700 dark:text-white transition-all duration-300"
                      >
                        <option value="">Select a genre</option>
                        {genres.map((genre) => (
                          <option key={genre} value={genre}>{genre}</option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Release Year
                      </label>
                      <input
                        type="number"
                        name="year"
                        min="1990"
                        max="2024"
                        placeholder="2024"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] dark:bg-gray-700 dark:text-white transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {/* Rating Section */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00ADB5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      Your Rating
                    </label>
                    
                    {/* Star Rating Display */}
                    <div className="flex items-center gap-2 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className={`text-3xl transition-all duration-200 hover:scale-110 ${
                            star <= selectedRating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                          }`}
                        >
                          ★
                        </button>
                      ))}
                      <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                        {selectedRating > 0 ? `${selectedRating}/5` : "Click to rate"}
                      </span>
                    </div>
                    
                    <input
                      type="number"
                      name="rating"
                      required
                      min="1"
                      max="5"
                      value={selectedRating}
                      onChange={(e) => setSelectedRating(parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] dark:bg-gray-700 dark:text-white transition-all duration-300"
                      placeholder="Select rating above or enter 1-5"
                    />
                  </div>

                                     {/* User Information */}
                   <div className="space-y-3">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="userName"
                        value={user?.displayName || ""}
                        readOnly
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-600 dark:text-white shadow-sm cursor-not-allowed"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="userEmail"
                        value={user?.email || ""}
                        readOnly
                        className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-600 dark:text-white shadow-sm cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Description */}
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Your Review
                </label>
                                 <textarea
                   name="description"
                   placeholder="Share your thoughts about the game... What did you like? What could be improved? Would you recommend it to others?"
                   required
                   rows="4"
                   className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-[#00ADB5]/20 focus:border-[#00ADB5] dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                 ></textarea>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Be honest and detailed in your review to help other gamers make informed decisions.
                </p>
              </div>

                             {/* Submit Button */}
               <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white font-semibold py-4 rounded-xl hover:shadow-xl hover:shadow-[#00ADB5]/25 dark:hover:shadow-[#00ADB5]/40 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="flex items-center justify-center relative z-10">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Publishing Review...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Publish Review
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

                 {/* Tips Section */}
         <div className="mt-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50 dark:border-gray-700/50 max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#00ADB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Writing Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-start gap-2">
              <span className="text-[#00ADB5] font-bold">•</span>
              <span>Be specific about what you liked or disliked</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00ADB5] font-bold">•</span>
              <span>Consider gameplay, graphics, story, and performance</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#00ADB5] font-bold">•</span>
              <span>Mention if you'd recommend it to others</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
