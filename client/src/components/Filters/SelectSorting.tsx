import { useState, useEffect } from "react";
import { SortingType } from "../../core/types";
import { useSearchParams } from "react-router-dom";

const sortings: SortingType[] = [
    { id: 1, name: "Newest", value: "createdAt" },
    { id: 2, name: "Price Lowest", value: "price" },
    { id: 3, name: "Price Highest", value: "-price" }
];

const SelectSorting = () => {
    const [search, setSearch] = useSearchParams();
    const filteredSort = search.get("sort")?.toLowerCase() ?? "";
    const [sort, setSort] = useState(filteredSort);

    const setSortValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
        search.set("sort", e.target.value);
        setSort(e.target.value);
        setSearch(search);
    }

    useEffect(() => {
        setSort(filteredSort);
    }, [filteredSort]);

    return (
        <div className="py-8">
            <h1 className="text-xl text-left mb-4">SORT</h1>
            <select onChange={setSortValue} value={sort} className="border px-4 py-2 outline-none w-full text-dark-blue">
                {sortings.map((field: SortingType) => {
                    const { id, name, value } = field;
                    return <option
                        key={id}
                        value={value}
                        className="w-4 h-4 mr-5 text-dark-blue">
                        {name}
                    </option>
                })}
            </select>
        </div>
    );
}

export default SelectSorting;