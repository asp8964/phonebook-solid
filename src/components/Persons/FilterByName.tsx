import useFilterContext from "~/hooks/useFilterContext";

const FilterByName = () => {
  const { filter, setFilter } = useFilterContext()

  return (
    <p>
      filter shown with <input onInput={(e) => setFilter(e.target.value)} value={filter()} />
    </p>
  );
};

export default FilterByName;
