
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const loadedReview = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateReview = (event) => {
    event.preventDefault();

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

    fetch(`http://localhost:5010/reviews/${loadedReview._id}`, {
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
            title: "Success",
            text: "Review updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/allreviews"); 
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="bg-[#F4F3F0] p-8 max-w-3xl mx-auto rounded shadow-lg mt-5 mb-5">
      <h2 className="text-3xl font-bold text-center mb-4 text-yellow-800">
        Update Review
      </h2>
      <form className="space-y-6" onSubmit={handleUpdateReview}>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Game Cover Image (URL)
          </label>
          <input
            type="text"
            name="coverImage"
            placeholder="Enter game cover image URL"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Game Title
          </label>
          <input
            type="text"
            name="gameTitle"
            placeholder="Enter game title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Review Description
          </label>
          <textarea
            name="description"
            placeholder="Enter your review"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
            rows="4"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating (1-5)
            </label>
            <input
              type="number"
              name="rating"
              placeholder="Enter rating"
              min="1"
              max="5"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Publishing Year
            </label>
            <input
              type="number"
              name="year"
              min="1990"
              max="3000"
              placeholder="Enter publishing year"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Genre
            </label>
            <select
              name="genre"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#D2B48C]"
            >
              <option value="">Select Genre</option>
              <option value="Action">Action</option>
              <option value="RPG">RPG</option>
              <option value="Adventure">Adventure</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={user?.email || ""}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={user?.displayName || ""}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 shadow-sm focus:outline-none"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full btn bg-[#D2B48C] hover:bg-yellow-800 hover:text-white text-black font-medium py-2 px-6 rounded"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;