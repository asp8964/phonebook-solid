import { useContext } from "solid-js";
import FilterContext from "~/context/FilterContext";

const useFilterContext = () => {
    const value = useContext(FilterContext);

    if (!value) {
        throw new Error("Missing context Provider");
    }

    return value;
}

export default useFilterContext