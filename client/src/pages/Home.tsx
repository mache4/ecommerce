import Main from "../components/Main";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
import { useHomePhotos } from "../core/hooks";
import { HomeImageType } from "../core/types";
import { ClipLoader } from "react-spinners";

const Home = () => {
    const { data, loading } = useHomePhotos();

    if (loading) {
        return <div className="fixed top-0 left-0 bg-dark-blue h-screen w-full flex justify-center items-center z-40">
            <ClipLoader color="#fff" size={60} />
        </div>
    }

    return (
        <div className="pt-20">
            <Slider
                data={data && data.filter((i: HomeImageType) => i.type === "slider")}
                loading={loading}
            />
            <Main
                data={data && data.filter((i: HomeImageType) => i.type === "clothing")}
                loading={loading}
            />
            <FeaturedProducts
                data={data && data.filter((i: HomeImageType) => i.name === "featured-products")}
                loading={loading}
            />
        </div>
    );
}

export default Home;