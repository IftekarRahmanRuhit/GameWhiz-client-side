
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
            title: "Success",
            text: "Review updated successfully!",
            icon: "success",
            confirmButtonColor: "#008C8C",
            confirmButtonText: "Close",
          });
          navigate("/allreviews"); 
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (

    <div className="bg-white dark:bg-gray-800 p-8 max-w-3xl mx-auto rounded-xl shadow-lg mt-5 mb-5 border-2 border-[#008C8C] animate__animated animate__fadeInUp">
    <h2 className="text-3xl font-bold text-center mb-10 text-[#008C8C]">
      Update Your Game Review
    </h2>
    <form className="space-y-6" onSubmit={handleUpdateReview}>
      <div>
        <label  className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Game Cover Image (URL)
        </label>
        <input
          type="text"
          name="coverImage"
          required
          placeholder="Enter game cover image URL"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#008C8C] dark:bg-gray-700 dark:text-white dark:focus:ring-[#008C8C]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Game Title
        </label>
        <input
          type="text"
          name="gameTitle"
          required
          placeholder="Enter game title"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#008C8C] dark:bg-gray-700 dark:text-white dark:focus:ring-[#008C8C]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Review Description
        </label>
        <textarea
          name="description"
          placeholder="Enter your review"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#008C8C] dark:bg-gray-700 dark:text-white dark:focus:ring-[#008C8C]"
          rows="4"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Rating (1-5)
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating"
            required
            min="1"
            max="5"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#008C8C] dark:bg-gray-700 dark:text-white dark:focus:ring-[#008C8C]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Publishing Year
          </label>
          <input
            type="number"
            name="year"
            min="1990"
            max="3000"
            placeholder="Enter publishing year"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#008C8C] dark:bg-gray-700 dark:text-white dark:focus:ring-[#008C8C]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Genre
          </label>
          <select
            name="genre"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-[#008C8C] dark:bg-gray-700 dark:text-white dark:focus:ring-[#008C8C]"
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
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          User Email
        </label>
        <input
          type="email"
          name="userEmail"
          value={user?.email || ""}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-600 dark:text-white shadow-sm focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          User Name
        </label>
        <input
          type="text"
          name="userName"
          value={user?.displayName || ""}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-600 dark:text-white shadow-sm focus:outline-none"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full btn bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white hover:bg-gradient-to-l hover:bg-[#008C8C] transition-all duration-300 font-semibold dark:bg-gradient-to-r dark:from-[#00ADB5] dark:to-[#008C8C] dark:hover:bg-gradient-to-l dark:hover:bg-[#008C8C] border-none font-medium"
        >
          Update Review
        </button>
      </div>
    </form>
  </div>
  
  
  );
};

export default UpdateReview;