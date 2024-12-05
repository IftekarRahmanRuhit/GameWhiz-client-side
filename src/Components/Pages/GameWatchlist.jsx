import { Link, useLoaderData } from "react-router-dom";

const GameWatchlist = () => {
  const watchLists = useLoaderData();
  console.log(watchLists);

  return (
    <div className="w-4/5 mx-auto">
      <div className="p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Your Game Watchlist
        </h1>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="table w-full text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 text-left">Game Name</th>
                <th className="py-2 px-4 text-left">Rating</th>
                <th className="py-2 px-4 text-left">Genre</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>

            <tbody>
              {watchLists.map((game, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                          <img src={game.coverImage} alt={game.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">{game.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{"★".repeat(game.rating)}</td>
                  <td className="py-2 px-4">{game.genre}</td>
                  <td className="py-2 px-4">
                    <Link to={`/reviews/${game.reviewId}`}>
                      <button className="btn btn-ghost btn-xs">Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GameWatchlist;
