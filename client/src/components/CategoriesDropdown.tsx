// import { Link } from "react-router-dom";

interface Props {
    show: boolean
}

interface Category {
    id: number,
    name: string,
    value: string
}

const categories: Category[] = [
    { name: "Jackets", value: "Jacket", id: 1 },
    { name: "Jeans", value: "Jeans", id: 2 },
    { name: "Shirts", value: "Shirt", id: 3 },
    { name: "Coats", value: "Coat", id: 4 }
];

const CategoriesDropdown = (props: Props) => {
    return (
        <div className={`absolute top-full left-0 border border-t-0 border-dark-blue bg-white z-50 ${props.show ? "" : "hidden"}`} style={{ width: "200%" }}>
            <div className="menu flex flex-col">
                {categories.map((i: Category) =>
                    <a className="menu-item border-t px-5 py-2 hover:bg-very-light-blue" href={`/shop?sort=createdAt&category=${i.value}`}>{i.name}</a>
                )}
            </div>
        </div>
    );
}

export default CategoriesDropdown;