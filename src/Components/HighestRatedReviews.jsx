import { Link, useLoaderData } from "react-router-dom";


const HighestRatedReviews = () => {

    const reviews = useLoaderData()


    return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review) => (
        <div key={review._id} className="card bg-gray-100 p-4 shadow-lg">
          <img
            src={review.coverImage}
            alt={review.title}
            className="w-full h-40 object-cover rounded"
          />
          <h2 className="text-xl font-bold mt-2">{review.title}</h2>
          <p className="text-sm text-gray-600">{review.genre}</p>
          <p className="mt-1">Rating: {review.rating}</p>
          <Link to={`/reviews/${review._id}`}><button className="btn btn-warning mt-3 w-full">Explore Details</button></Link>
        </div>
      ))}
    </div>
    );
};

export default HighestRatedReviews;