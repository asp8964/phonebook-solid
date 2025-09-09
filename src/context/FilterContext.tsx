import { createContext, createSignal, JSX } from "solid-js";
import { IFilterContext } from "~/types";

const FilterContext = createContext<IFilterContext>()

export const FilterProvider = (props: { children: JSX.Element }) => {
    const [filter, setFilter] = createSignal("")
    return < FilterContext.Provider value={{ filter, setFilter }} > {props.children}</FilterContext.Provider>
};

export default FilterContext