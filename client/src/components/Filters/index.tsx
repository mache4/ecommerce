import CategoryFilters from "./CategoryFilters";
import PriceFilter from "./PriceFilter";
import SelectSorting from "./SelectSorting";

// interface Props {
//     show: boolean
// }

const Filters = () => {
    return (
        <div className={`w-full py-8 px-8 text-center h-screen lg:w-1/5`}>
            <h1 className="text-2xl">FILTERS</h1>
            <SelectSorting />
            <PriceFilter />
            <CategoryFilters />
        </div>
    );
}

export default Filters;