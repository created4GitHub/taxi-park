import { useDispatch, useSelector } from "react-redux";

import FilterStatuses from "./FilterStatuses";
import FilterInputs from "./FilterInputs";
import ResetButton from "./ResetButton";
import { YEARS } from "../../constants/years";
import { filterData, resetFilter } from "../../redux/actions/actions";
import { filterValuesSelector } from "../../redux/selectors/selector";

import "./filters.style.scss";


interface Props {
  title: string;
}

const Filters = ({ title }: Props) => {
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

  const optionalElement = title === "car" && (
    <div className="filter_element-yearSelect">
      <select name="year"
        onChange={filter}>
        {YEARS.map((item: number) => {
          return (
            <option key={item}
              value={item}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  );

  return (
    <form className="content__options-filter">
      <FilterInputs filter={filter}
        title={title}
        filterValues={filterValues}
      />
      {optionalElement}
      <FilterStatuses filter={filter}
        filterValues={filterValues}
      />
      <ResetButton resetFilters={reset} />
    </form>
  );
};

export default Filters;