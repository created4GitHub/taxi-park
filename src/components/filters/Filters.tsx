import { useRef, MutableRefObject } from "react";
import { useDispatch, useSelector } from "react-redux";

import FilterStatuses from "./filterStatuses/FilterStatuses";
import FilterInputs from "./filterInputs/FilterInputs";
import ResetButton from "./resetButton/ResetButton";
import YearSelect from "../yearSelect/YearSelect";
import { dispatchFilteredData, dispatchIsDataFiltered, dispatchRerender } from "../../store/actions/actions";
import { RootState } from "../../store/rootReducer";
import { Data, Status } from "../../interfaces/interfaces";

import "./filters.style.scss";

interface Props {
  title: string;
}

const Filters = ({ title }: Props) => {
  const data = useSelector((state: any) => state.dataReducer.item);
  const filterValues: MutableRefObject<{ [key: string]: string }> = useRef({});
  const isRerender = useSelector((state: RootState) => state.conditionalReducer.rerender);
  const dispatch = useDispatch();

  const resetFilters = () => {
    filterValues.current = {};
    dispatch(dispatchIsDataFiltered(false));
    dispatch(dispatchFilteredData(data));
    dispatch(dispatchRerender(!isRerender));
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
      result = result.filter((item: Data) => {
        if (key === "status") {
          return (filterValues.current)[key] ===
            (item.status as Status).title
            ? true
            : false;
        }
        else {
          return String(item[key as keyof Data]).toLocaleLowerCase()
            .includes(filterValues.current[key].toLocaleLowerCase())
            ? true : false;
        }
      });
    }
    dispatch(dispatchIsDataFiltered(true));
    dispatch(dispatchFilteredData(result));
    dispatch(dispatchRerender(!isRerender));
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
