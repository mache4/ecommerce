import React, { useMemo, useState, useEffect } from "react";
import { useCategories } from "../../core/hooks";
import type { CategoryType } from "../../core/types";
import { useSearchParams } from "react-router-dom";

const CategoryFilters = () => {
    const getCategories = useCategories();
    const items = useMemo(() => getCategories?.data?.data ?? [], [getCategories.data]);

    const [search, setSearch] = useSearchParams();
    let filteredCategories = useMemo(() => search.get("categories")?.toLowerCase().split(",") ?? [], [search]);
    const [categories, setCategories] = useState(filteredCategories);

    useEffect(() => {
        setCategories(filteredCategories);
    }, [filteredCategories]);

    const setCheckValue = (e: React.ChangeEvent<HTMLInputElement>, value: string) => {
        let _categories = categories;
        if (e.target.checked) {
            _categories.push(value);
            search.set("categories", _categories.join(","));
        } else {
            _categories = _categories.filter(i => i !== value);
            search.set("categories", _categories.join(","));
        }
        if (_categories.length === 0)
            search.delete("categories");

        setCategories(_categories);
        setSearch(search);
    }

    return (
        <div className="py-8 border-t border-dark-grey">
            <h1 className="text-xl text-left mb-4">CATEGORIES</h1>
            {items.map((field: { attributes: CategoryType }) => {
                const { id, name, value } = field.attributes;
                return <div className="flex justify-between my-2" key={id}>
                    <label>{name}</label>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={categories.includes(value)}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckValue(e, value)}
                            className="w-4 h-4 mr-5" />
                    </div>
                </div>;
            })}
        </div>
    );
}

export default CategoryFilters;