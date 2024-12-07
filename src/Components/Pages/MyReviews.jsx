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
        // Deleted!", "Your review has been deleted.", "success"
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
    <div className="p-14 bg-[#e3ebeb] dark:bg-gradient-to-r from-gray-800 via-[#013b3b] to-gray-800 max-w-screen-2xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold  w-11/12 mx-auto text-gray-800 dark:text-gray-300 animate__animated animate__backInLeft mb-8">
        My Reviews
      </h1>
      {myReviews.length === 0 ? (
        <p className="text-gray-600 text-center text-lg font-semibold dark:text-gray-300">
          You haven't added any reviews yet.
        </p>
      ) : (
        <div className="overflow-x-auto w-11/12 mx-auto">
          <table className="table-auto w-full border-collapse border border-gray-200 rounded-md shadow-sm">
            <thead className="bg-gray-300">
              <tr>
                <th className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base">
                  Game Title
                </th>
                <th className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base">
                  Rating
                </th>
                <th className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base">
                  Genre
                </th>
                <th className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {myReviews.map((review) => (
                <tr key={review._id} className="text-center dark:bg-gradient-to-r from-gray-900 via-gray-800 to-black">
                  <td className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-lg text-gray-800 dark:text-gray-400 font-semibold ">
                    {review.gameTitle}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-lg text-gray-800 dark:text-gray-400 font-semibold">
                    <span className="text-yellow-500">
                      {"★".repeat(review.rating)}
                    </span>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-lg text-gray-800 dark:text-gray-400 font-semibold">
                    {review.genre}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-200 px-4 py-2 flex flex-col md:flex-row justify-center gap-4">
                    <Link to={`/updatereview/${review._id}`}>
                      <button className="font-medium rounded-md bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white hover:bg-gradient-to-l hover:bg-[#008C8C] transition-all duration-300 border-none px-3 py-1">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="bg-red-500 font-medium rounded-md text-white px-3 py-1 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
