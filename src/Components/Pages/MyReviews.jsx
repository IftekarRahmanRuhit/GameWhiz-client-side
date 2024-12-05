
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const reviews = useLoaderData();
  console.log(reviews)

  const[myReviews , setMyReviews] = useState(reviews)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5010/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");

              const remainingReviews = myReviews.filter((review) => review._id !== id);
              setMyReviews(remainingReviews); 
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
      {myReviews.length === 0 ? (
        <p className="text-gray-600">You haven't added any reviews yet.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200 rounded-md shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Game Title</th>
              <th className="border border-gray-200 px-4 py-2">Rating</th>
              <th className="border border-gray-200 px-4 py-2">Genre</th>
              <th className="border border-gray-200 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myReviews.map((review) => (
              <tr key={review._id} className="text-center">
                <td className="border border-gray-200 px-4 py-2">{review.gameTitle}</td>
                <td className="border border-gray-200 px-4 py-2">{review.rating}</td>
                <td className="border border-gray-200 px-4 py-2">{review.genre}</td>
                <td className="border border-gray-200 px-4 py-2 flex justify-center gap-4">
                    <Link to={`/updatereview/${review._id}`}><button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Update
                  </button></Link>
                  <button
                    onClick={() => handleDelete(review._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyReviews;