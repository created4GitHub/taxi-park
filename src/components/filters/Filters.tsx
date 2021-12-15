import { useDispatch, useSelector } from "react-redux";

import FilterStatuses from "./filterStatuses/FilterStatuses";
import FilterInputs from "./filterInputs/FilterInputs";
import ResetButton from "./resetButton/ResetButton";
import YearSelect from "../YearsSelect/YearsSelect";
import { filterData, resetFilter } from "../../redux/actions/actions";
import { filterValuesSelector } from "../../redux/selectors/selector";

import "./filters.style.scss";
import { isDataFilteredSelector } from "../../redux/selectors/selector";

interface Props {
  title: string;
}

const Filters = ({ title }: Props) => {
  const filterValues = useSelector(filterValuesSelector);
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(resetFilter());
  };
  const isDataFiltered = useSelector(isDataFilteredSelector);

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
      <FilterInputs filter={filter} title={title} />
      {optionalElement}
      <FilterStatuses filter={filter} />
      <ResetButton resetFilters={reset} />
    </form>
  );
};

export default Filters;
