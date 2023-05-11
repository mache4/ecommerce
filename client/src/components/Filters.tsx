import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../redux/actions/products";
import { useAppDispatch } from "../hooks";

interface Sorting {
    name: string,
    value: string,
    checked: boolean,
    id: number
}

interface Category {
    name: string,
    id: number,
    value: string,
    checked: boolean
}

let productSorting: Sorting[] = [
    { name: "Newest", value: "createdAt", checked: true, id: 1 },
    { name: "Price Lowest", value: "price", checked: false, id: 2 },
    { name: "Price Highest", value: "price%3Adesc", checked: false, id: 3 }
];

let productCategories: Category[] = [
    { name: "Jackets", value: "Jacket", checked: false, id: 1 },
    { name: "Jeans", value: "Jeans", checked: false, id: 2 },
    { name: "Shirts", value: "Shirt", checked: false, id: 3 },
    { name: "Coats", value: "Coat", checked: false, id: 4 }
];

const Filters = () => {
    const [sortValue, setSortValue]: any = useState("createdAt");
    const [categoriesValue, setCategoriesValue]: any = useState([]);
    // const [maxValue, setMaxValue]: any = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts({ categories: searchParams.getAll("category"), sort: searchParams.get("sort"), maxPrice: null }));
    }, [dispatch, searchParams]);

    const setCheckValue = (e: any, value: string) => {
        let updatedList = [...categoriesValue];
        if (e.target.checked)
            updatedList = [...categoriesValue, value];
        else
            updatedList.splice(categoriesValue.indexOf(value), 1);

        setCategoriesValue(updatedList);
    }

    const applyClicked = () => {
        if (sortValue.length === 0)
            searchParams.delete("sort");
        else
            searchParams.set("sort", sortValue);
        if (categoriesValue.length === 0)
            searchParams.delete("category")
        else
            searchParams.set("category", categoriesValue);

        setSearchParams(searchParams);
        dispatch(getProducts({ categories: categoriesValue, sort: sortValue, maxPrice: null }));
    }

    return (
        <div className="w-1/5 h-screen pt-20 bg-white text-black flex justify-center">
            <div className="mx-5 px-8 flex w-full flex-col items-center">
                <h1 className="text-3xl mt-8 mb-4">FILTERS</h1>
                <div className="w-full pt-8 border-t border-t-dark-grey">
                    <h1 className="text-xl mb-4">SORT</h1>
                    {productSorting.map((i: Sorting) =>
                        <div className="flex justify-between items-center my-2" key={i.id}>
                            <label>{i.name}</label>
                            <input className="w-4 h-4 mr-5" type="radio" name="sort" value={i.value} onChange={() => setSortValue(i.value)} defaultChecked={i.checked} />
                        </div>
                    )}
                </div>
                <div className="w-full mt-10 pt-8 border-t border-t-dark-grey">
                    <h1 className="text-xl mb-4">PRICE</h1>
                    <input className="w-full" type="range" min={0} max={1000} /* onChange={setPriceRange} staviti ovde min i max iz databaze*/ />

                </div>
                <div className="w-full mt-10 pt-8 border-t border-t-dark-grey">
                    <h1 className="text-xl mb-4">CATEGORIES</h1>
                    {productCategories.map((i: Category) =>
                        <div className="flex justify-between my-2" key={i.id}>
                            <label>{i.name}</label>
                            <div className="flex items-center">
                                {/* <label className="mr-2">(2)</label> */}
                                <input className="w-4 h-4 mr-5" type="checkbox" value={i.value} onChange={(e: any) => setCheckValue(e, i.value)} />
                            </div>
                        </div>
                    )}
                </div>
                <button className={`border px-4 py-2 mt-10`} onClick={applyClicked}>Apply Filters</button>
            </div>
        </div>
    );
}

export default Filters;