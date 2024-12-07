import { Link, useLoaderData } from "react-router-dom";

const GameWatchlist = () => {
  const watchLists = useLoaderData();


  return (
<div className="bg-[#e3ebeb] dark:bg-gradient-to-r from-gray-800 via-[#013b3b] to-gray-800 max-w-screen-2xl mx-auto">

<div className="w-4/5 mx-auto pb-16">
      <div className="p-8">
        <h1 className=" text-2xl md:text-3xl font-bold mb-10 mt-5  text-gray-800 dark:text-gray-300 animate__animated animate__backInLeft">
          Your Game Watchlist
        </h1>

        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="table w-full text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className=" text-left border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base">Game Name</th>
                <th className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base text-left ">Rating</th>
                <th className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base text-left">Genre</th>
                <th className="border border-gray-300 dark:border-gray-200 px-4 py-2 text-sm md:text-base"></th>
              </tr>
            </thead>

            <tbody>
              {watchLists.map((game, index) => (
                <tr key={index} className="border-t hover:bg-gray-100 dark:bg-gradient-to-r from-gray-900 via-gray-800 to-black cursor-pointer">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-16 w-16">
                          <img src={game.coverImage} alt={game.name} />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm md:text-lg text-gray-800 dark:text-gray-400 font-semibold">{game.title}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4"><span className="text-yellow-500 text-lg">{"★".repeat(game.rating)}</span></td>
                  <td className="py-2 px-4 text-sm md:text-lg text-gray-800 dark:text-gray-400 font-semibold">{game.genre}</td>
                  <td className="py-2 px-4 ">
                    <Link to={`/reviews/${game.reviewId}`}>
                      <button className="btn btn-ghost btn-xs text-gray-800 dark:text-gray-400 dark:hover:bg-[#008C8C] dark:hover:text-gray-50 font-semibold">Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
  );
};

export default GameWatchlist;
