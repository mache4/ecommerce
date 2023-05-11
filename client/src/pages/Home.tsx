import Main from "../components/Main";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
    return (
        <div className="home pt-20">
            <Slider />
            <Main />
            <FeaturedProducts />
        </div>
    );
}

export default Home;