import {
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
  MouseEventHandler,
} from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/rootReducer";
import { Data, Status } from "../../interfaces/interfaces";
import Input from "../regularComponents/input/Input";
import FilterStatuses from "./filterStatuses/FilterStatuses";
import FilterInputs from "./filterInputs/FilterInputs";

import "./filters.style.scss";

interface Props {
  title: string;
  setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Info {
  name: string;
  placeholder: string;
};

const Filters = ({ title, setIsFiltered }: Props) => {
  const data = useSelector((state: RootState) => state.dataReducer);
  // const { datas, isDataEmpty } = useContext(filteredDataContext);
  const filtersValues: MutableRefObject<{ [key: string]: string }> = useRef({});


  const resetFilters = () => {
    filtersValues.current = {};
    setIsFiltered(isFiltered => !isFiltered);
  };

  if (filtersValues.current.title && filtersValues.current.title !== title) {
    resetFilters();
  }

  const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
    filtersValues.current.title = title;
    filtersValues.current[event.target.name] = event.target.value;
    let result = data;

    for (let key in filtersValues.current) {
      if (key === "title") {
        continue;
      }
      result = result.filter((item: Data | any) => {
        if (key === "status") {
          return (filtersValues.current)[key] ===
            item.status.title
            ? true
            : false;
        } else {
          return String(item[key]).toLocaleLowerCase()
            .includes(filtersValues.current[key].toLocaleLowerCase())
            ? true : false;
        }
      });
    }

    // datas.current = result;
    // isDataEmpty.current = false;
    setIsFiltered(isFiltered => !isFiltered);
  };

  return (
    <form className="content__options-filter">
      <FilterInputs filter={filter} title={title} />
      <FilterStatuses filter={filter} />
      <div className="reset-filter-button">
        <button
          onClick={resetFilters}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Filters;
