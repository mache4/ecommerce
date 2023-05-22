import { useMemo } from "react";
import { useCategories } from "../core/hooks";
import type { Category } from "../core/types";
import { Link } from "react-router-dom";

interface Props {
    show: boolean
}

const CategoriesDropdown = (props: Props) => {
    const getCategories = useCategories();
    const items = useMemo(() => getCategories?.data?.data ?? [], [getCategories.data]);

    return (
        <div className={`absolute top-full left-0 border border-t-0 border-dark-blue bg-white z-50 ${props.show ? "" : "hidden"}`} style={{ width: "200%" }}>
            <div className="menu flex flex-col">
                {items.map((i: { id: number, attributes: Category }) => {
                    const { value, name } = i.attributes;
                    return <Link
                        key={i.id}
                        className="menu-item border-t px-5 py-2 hover:bg-very-light-blue"
                        to={`/shop?sort=createdAt&categories=${value}`}>{name}</Link>;
                })}
            </div>
        </div>
    );
}

export default CategoriesDropdown;