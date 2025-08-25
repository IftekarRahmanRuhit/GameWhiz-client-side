import { Link, useLoaderData } from "react-router-dom";

const GameWatchlist = () => {
  const watchLists = useLoaderData();

  return (
    <div className="bg-gradient-to-br from-[#e3ebeb] via-[#f0f6f6] to-[#e3ebeb] dark:bg-gradient-to-br dark:from-[#071523] dark:via-[#0a1a2a] dark:to-[#071523] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 ">
        {/* Header Section */}
        <div className="text-center mb-8 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ADB5] to-[#008C8C] bg-clip-text text-transparent">
            Your Game Watchlist
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Keep track of games you're interested in. Your personalized collection of titles to watch and explore.
          </p>
        </div>

        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse">
              <thead className="bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                    Game Name
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                    Genre
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {watchLists.map((game, index) => (
                  <tr key={index} className={`hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/50 dark:bg-gray-800/50'}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <img 
                            src={game.coverImage} 
                            alt={game.title} 
                            className="h-16 w-16 rounded-lg object-cover shadow-sm"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/64x64/00ADB5/ffffff?text=Game";
                            }}
                          />
                        </div>
                        <div>
                          <div className="text-sm md:text-lg text-gray-800 dark:text-gray-300 font-semibold">{game.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className={i < game.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          ({game.rating}/5)
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00ADB5]/10 text-[#00ADB5] border border-[#00ADB5]/20">
                        {game.genre}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Link to={`/reviews/${game.reviewId}`}>
                        <button className="font-medium rounded-lg bg-gradient-to-r from-[#00ADB5] to-[#008C8C] text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border-none px-4 py-2 text-sm">
                          View Details
                        </button>
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
