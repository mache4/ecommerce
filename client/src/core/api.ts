import axios from "axios";
import { ProductType, QueryType, HomeImageType } from "./types";

const API = axios.create({ baseURL: "http://localhost:8080" }); // https://ecommerce-server-mu-nine.vercel.app
export const getCategories = () => API.get("/categories");

export const addProduct = (data: ProductType) => API.post("/products", data);
export const getProducts = (query: QueryType) => {
    let queryString = "/products?";
    const { categories, sort, maxPrice } = query;
    if (sort)
        queryString = queryString.concat(`sort=${sort}`);
    if (categories)
        queryString = queryString.concat(`${categories.map(
            (category: string) => `&categories=${category}`
        ).join("")}`);
    if (maxPrice)
        queryString = queryString.concat(`&maxPrice=${maxPrice}`);

    return API.get(queryString);
}
export const getFeaturedProducts = () => API.get("/products?type=featured");
export const getProduct = (id: string | undefined) => API.get(`/products/${id}`);

export const addHomeImage = (data: HomeImageType) => API.post("/home-images", data);
export const getHomeImages = () => API.get("/home-images");

export const checkout = (data: any) => API.post("/checkout", data);