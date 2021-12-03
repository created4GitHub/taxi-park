import {
  useContext,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";

import {
  receivedDataContext,
  filteredDataContext,
  filteredValuesContext,
} from "../../context";

import DriverFilter from "./driverFilter/DriverFilter";
import CarFilter from "./carFilter/CarFilter";

import { Information, Status } from "../../interfaces";

import "./filters.style.scss";

type Data = {
  info: Information[];
  statuses: Status[];
};

const Filter = ({ title }: { title: string }) => {
  const [receivedData]: [Data] = useContext(receivedDataContext);
  const [isFiltered, setIsFiltered]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(filteredDataContext).filter;
  const { data, isDataEmpty } = useContext(filteredDataContext);
  const filtersValues: MutableRefObject<{ [key: string]: string }> = useRef({});

  if (filtersValues.current.title && filtersValues.current.title !== title) {
    resetFilters();
  }

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    filtersValues.current.title = title;
    filtersValues.current[event.target.name] = event.target.value;
    let result = receivedData.info;

    for (let key in filtersValues.current) {
      if (key === "title") {
        continue;
      }
      result = result.filter((item: Information | any) => {
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

    data.current = result;
    isDataEmpty.current = false;
    setIsFiltered(!isFiltered);
  };

  function resetFilters() {
    isDataEmpty.current = true;
    filtersValues.current = {};
    setIsFiltered(!isFiltered);
  };

  return (
    <div className="content__options-filter">
      <filteredValuesContext.Provider value={filtersValues}>
        {title === "driver" ? (
          <DriverFilter {...{ searchDriver: search, resetFilters: resetFilters }} />
        ) : (
          <CarFilter {...{ searchCar: search, resetFilters: resetFilters }} />
        )}
      </filteredValuesContext.Provider>
    </div>
  );
};

export default Filter;
