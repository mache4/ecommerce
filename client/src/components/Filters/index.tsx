import CategoryFilters from "./CategoryFilters";
import PriceFilter from "./PriceFilter";
import SelectSorting from "./SelectSorting";

const Filters = () => {
    return (
        <div className="w-1/5 py-8 px-8 text-center h-screen">
            <h1 className="text-2xl">FILTERS</h1>
            <SelectSorting />
            <PriceFilter />
            <CategoryFilters />
        </div>
    );
}

export default Filters;