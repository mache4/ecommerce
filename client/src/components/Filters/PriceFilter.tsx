import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

const PriceFilter = () => {
    const [search, setSearch] = useSearchParams();
    const value = useMemo(() => search.get("maxPrice")?.toLowerCase() ?? 0, [search]);
    const [maxPrice, setMaxPrice] = useState(value);

    useEffect(() => {
        setMaxPrice(value);
    }, [value]);

    const setValue = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "0")
            search.delete("maxPrice");
        else
            search.set("maxPrice", e.target.value);

        setMaxPrice(e.target.value);
        setSearch(search);
    }, 350);

    return (
        <div className="w-full py-8 border-t border-t-dark-grey">
            <h1 className="text-xl text-left mb-4">MAX PRICE</h1>
            <p className="text-xl">{maxPrice ? `$${maxPrice}` : "$0"}</p>
            <input className="w-full" type="range" min={0} max={350} defaultValue={0} onChange={setValue}/* onChange={setPriceRange} staviti ovde min i max iz databaze*/ />
        </div>
    );
}

export default PriceFilter;