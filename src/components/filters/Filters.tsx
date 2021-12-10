import { useDispatch, useSelector } from "react-redux";

import FilterStatuses from "./filterStatuses/FilterStatuses";
import FilterInputs from "./filterInputs/FilterInputs";
import ResetButton from "./resetButton/ResetButton";
import YearSelect from "../yearSelect/YearSelect";
import { filterData, resetFilter } from "../../redux/actions/actions";
import { filterValuesSelector } from "../../constants/selectors/selector";
import { RootState } from "../../redux/rootReducer";

import "./filters.style.scss";

interface Props {
  title: string;
  isDataUpdated: boolean;
}

const Filters = ({ title, isDataUpdated }: Props) => {
  const filterValues = useSelector(filterValuesSelector);
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
        <YearSelect onChange={filter} name="year" defaultValue={"2018"} />
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
