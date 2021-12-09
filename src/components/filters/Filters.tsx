import { useDispatch, useSelector } from "react-redux";

import FilterStatuses from "./filterStatuses/FilterStatuses";
import FilterInputs from "./filterInputs/FilterInputs";
import ResetButton from "./resetButton/ResetButton";
import { years } from "../../constants/years";
import { filterData, resetFilter } from "../../store/actions/actions";
import { RootState } from "../../store/rootReducer";

import "./filters.style.scss";

interface Props {
  title: string;
  isDataUpdated: boolean;
}

const Filters = ({ title, isDataUpdated }: Props) => {
  const filterValues = useSelector((state: RootState) => state.filterValues);
  const dispatch = useDispatch();

  const reset = () => {
    dispatch(resetFilter());
  };

  const filter = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(filterData({ name, value, title }));
  };

  const optionalElement = title === "car" &&
    (
      <div className="filter_element-yearSelect">
        <select name="year" onChange={filter}>
          {years.map((item: number) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
    );

  return (
    <form className="content__options-filter">
      <FilterInputs filter={filter} title={title} filterValues={filterValues} />
      {optionalElement}
      <FilterStatuses filter={filter} filterValues={filterValues} />
      <ResetButton resetFilters={reset} />
    </form>
  );
};

export default Filters;
