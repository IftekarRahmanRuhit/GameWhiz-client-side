import Banner from "../Banner";
import HighestRatedReviews from "../HighestRatedReviews";
import LatestNews from "../LatestNews";
import Video from "../Video";


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HighestRatedReviews></HighestRatedReviews>
            <Video></Video>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;