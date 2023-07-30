import Main from "../components/Main";
import Slider from "../components/Slider";
import FeaturedProducts from "../components/FeaturedProducts";
// import ProductCreator from "../components/ProductCreator";
import { useHomePhotos } from "../core/hooks";
import { HomeImageType } from "../core/types";

const Home = () => {
    const { data, loading } = useHomePhotos();
    console.log(data)

    return (
        <div className="pt-20">
            {/* <ProductCreator /> */}
            <Slider
                data={data && data.filter((i: HomeImageType) => i.type === "slider")}
                loading={loading} />
            <Main
                data={data && data.filter((i: HomeImageType) => i.type === "clothing")}
                loading={loading} />
            <FeaturedProducts
                data={data && data.filter((i: HomeImageType) => i.name === "featured-products")}
                loading={loading} />
        </div>
    );
}

export default Home;