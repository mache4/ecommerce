import Main from "../components/Main";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import { useHomePhotos } from "../core/hooks";

const Home = () => {
    const { data, loading } = useHomePhotos();

    return (
        <div className="pt-20">
            <Slider
                data={data}
                loading={loading} />
            <Main
                data={data}
                loading={loading} />
            <FeaturedProducts
                data={data}
                loading={loading} />
        </div>
    );
}

export default Home;