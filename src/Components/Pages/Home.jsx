import Banner from "../Banner";
import HighestRatedReviews from "../HighestRatedReviews";
import LatestNews from "../LatestNews";
import UpcomingGame from "../UpcomingGame";
import Video from "../Video";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HighestRatedReviews></HighestRatedReviews>
            <Video></Video>
            <UpcomingGame></UpcomingGame>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;