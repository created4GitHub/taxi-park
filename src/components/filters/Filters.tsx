import { useRef, MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterStatuses from "./filterStatuses/FilterStatuses";
import FilterInputs from "./filterInputs/FilterInputs";
import ResetButton from "./resetButton/ResetButton";
import YearSelect from "../yearSelect/YearSelect";
import { dispatchFilteredData, setIsFilteredData } from "../../store/actions/actions";
import { RootState } from "../../store/rootReducer";
import { Data } from "../../interfaces/interfaces";

import "./filters.style.scss";

interface Props {
  title: string;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filters = ({ title, setIsFiltered }: Props) => {
  const data = useSelector((state: RootState) => state.dataReducer);
  const filterValues: MutableRefObject<{ [key: string]: string }> = useRef({});
  const dispatch = useDispatch();

  const resetFilters = () => {
    filterValues.current = {};
    dispatch(setIsFilteredData(false));
    dispatch(dispatchFilteredData(data));
    setIsFiltered(isFiltered => !isFiltered);
  };

  if (filterValues.current.title && filterValues.current.title !== title) {
    resetFilters();
  }

  const filter = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    filterValues.current.title = title;
    filterValues.current[event.target.name] = event.target.value;
    let result = data;

    for (let key in filterValues.current) {
      if (key === "title") {
        continue;
      }
      result = result.filter((item: Data | any) => {
        if (key === "status") {
          return (filterValues.current)[key] ===
            item.status.title
            ? true
            : false;
        }
        else {
          return String(item[key]).toLocaleLowerCase()
            .includes(filterValues.current[key].toLocaleLowerCase())
            ? true : false;
        }
      });
    }
    dispatch(setIsFilteredData(true));
    dispatch(dispatchFilteredData(result));
    setIsFiltered(isFiltered => !isFiltered);
  };

  const optionElement = title === "car" && (
    <div className="filter_element-yearSelect">
      <YearSelect onChange={filter} name="year" defaultValue={"2018"} />
    </div>
  );

  return (
    <form className="content__options-filter">
      <FilterInputs filter={filter} title={title} filterValues={filterValues} />
      {optionElement}
      <FilterStatuses filter={filter} filterValues={filterValues} />
      <ResetButton resetFilters={resetFilters} />
    </form>
  );
};

export default Filters;
