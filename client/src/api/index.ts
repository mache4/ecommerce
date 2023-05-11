import axios from "axios";

const token = "4cc74b7f4c958fc55561177fdebb860cd1c2f47d031a648ea16acfe90aebdb6fcb701097a7d8e688900b2589535ddbf49dc61388ce4b1b1af4db823b242a0c19a3f46544e166005bcfbc3865316d40fabb17ab4b2ba1bef707071b300e0a6fd3f2ecbee3a09e4cef304301e146a215ad2c3b8d65319a92c8fd98c5ac82e8e85c";

const API = axios.create({ baseURL: "http://localhost:1337/api" });

API.interceptors.request.use((req: any) => {
    // console.log("URL: ", process.env.REACT_APP_API_URL)
    // console.log("TOKEN: ", process.env.REACT_APP_API_TOKEN)
    req.headers.Authorization = `bearer ${token}`;
    return req;
});

export const getProducts = (query: any) => {
    let queryString = "/products?populate=*";
    const { categories, sort, maxPrice } = query;
    if (categories)
        queryString = queryString.concat(`${categories.map(
            (category: string) => `&filters[category][value][$eq]=${category}`
        )}`)
    if (sort)
        queryString = queryString.concat(`&sort=${sort}`)
    if (maxPrice)
        queryString = queryString.concat(`&filters[price][$lte]=${maxPrice}`);

    queryString = queryString.replace(',', '');
    return API.get(queryString);
}
export const getFeaturedProducts = () => API.get(`/products?filters[type][$eq]=featured&populate=*`);
export const getProduct = (id: any) => API.get(`/products/${id}?populate=*`);
export const signIn = (formData: any) => API.post('/user/signin', formData);
export const signUp = (formData: any) => API.post('/user/signup', formData);