import { useDispatch, useSelector } from "react-redux";

import FilterStatuses from "./filterStatuses/FilterStatuses";
import FilterInputs from "./filterInputs/FilterInputs";
import ResetButton from "./resetButton/ResetButton";
import YearSelect from "../YearsSelect/YearsSelect";
import { filterData, resetFilter } from "../../redux/actions/actions";

import "./filters.style.scss";
import { isDataFilteredSelector } from "../../redux/selectors/selector";
import { RootState } from "../../redux/rootReducer";

interface Props {
  title: string;
  isDataUpdated: boolean;
}

const Filters = ({ title, isDataUpdated }: Props) => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(resetFilter());
  };
  const filterValues = useSelector((state: RootState) => state.filterValues);

  const filter = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(filterData({ name, value, title }));
  };

  const optionalElement = title === "car" &&
    (
      <div className="filter_element-yearSelect">
        <select name="year" onChange={filter}>
          <YearSelect />
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
