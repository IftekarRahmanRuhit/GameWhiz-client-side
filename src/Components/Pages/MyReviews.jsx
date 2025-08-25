import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const reviews = useLoaderData();
  const [myReviews, setMyReviews] = useState(reviews);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#008C8C",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://game-whiz-server-side.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })

          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success",
                text: "Your review has been deleted.",
                icon: "success",
                confirmButtonColor: "#008C8C",
                confirmButtonText: "Close",
              });

              const remainingReviews = myReviews.filter(
                (review) => review._id !== id
              );
              setMyReviews(remainingReviews);
            }
          });
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {/* Header Section */}
        <div className="text-center mb-8 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent">
            My Reviews
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Manage and organize your personal collection of game reviews. Edit, delete, or view your contributions to our gaming community.
          </p>
        </div>
        {myReviews.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">No Reviews Yet</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">You haven't added any reviews yet.</p>
              <Link
                to="/addreview"
                className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add Your First Review
              </Link>
            </div>
          </div>
                 ) : (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {myReviews.map((review, index) => (
               <div
                 key={review._id}
                 className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                 style={{ animationDelay: `${index * 50}ms` }}
               >
                 {/* Image Section */}
                 <div className="relative h-48 overflow-hidden">
                   <img
                     src={review.coverImage}
                     alt={review.gameTitle}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                     onError={(e) => {
                       e.target.src = "https://via.placeholder.com/400x300/00ADB5/ffffff?text=Game+Cover";
                     }}
                   />
                   
                   {/* Rating Badge */}
                   <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                     <span className="text-yellow-400">★</span>
                     {review.rating}/5
                   </div>

                   {/* Genre Badge */}
                   <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-white px-3 py-1 rounded-full text-sm font-semibold border border-gray-200/50 dark:border-gray-700/50">
                     {review.genre}
                   </div>

                   {/* Year Badge */}
                   <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                     {review.year}
                   </div>
                 </div>

                 {/* Content Section */}
                 <div className="p-4">
                   <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-1">
                     {review.gameTitle}
                   </h3>
                   
                   <div className="flex items-center gap-2 mb-3">
                     <div className="flex text-yellow-400">
                       {[...Array(5)].map((_, i) => (
                         <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                           ★
                         </span>
                       ))}
                     </div>
                     <span className="text-sm text-gray-600 dark:text-gray-400">
                       {review.rating}/5
                     </span>
                   </div>

                   <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                     {review.description}
                   </p>

                   {/* Action Buttons */}
                   <div className="flex gap-2">
                     <Link
                       to={`/updatereview/${review._id}`}
                       className="flex-1 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white py-2 rounded-lg hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center text-sm font-medium"
                     >
                       Edit
                     </Link>
                     <button
                       onClick={() => handleDelete(review._id)}
                       className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium"
                     >
                       Delete
                     </button>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         )}
      </div>
    </div>
  );
};

export default MyReviews;
