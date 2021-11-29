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

import { Info, Status } from "../../interfaces";

import "./filters.style.scss";

type Data = {
  info: Info[];
  statuses: Status[];
};

const Filter = (props: { title: string }) => {
  const [receivedData]: [Data] = useContext(receivedDataContext);
  const [isFiltered, setIsFiltered]: [ boolean, Dispatch<SetStateAction<boolean>> ] = useContext(filteredDataContext).filter;
  const { data, isDataEmpty } = useContext(filteredDataContext);
  const filtersValues: MutableRefObject<{}> = useRef({});

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    (filtersValues.current as { [key: string]: string })[
      (event.target as HTMLInputElement).name
    ] = event.target.value;
    let result = receivedData.info;
    for (let key in filtersValues.current) {
      result = result.filter((item: Info | any) => {
        if (key === "status") {
          return (filtersValues.current as { [key: string]: string })[key] ===
            item.status.title
            ? true
            : false;
        } else {
          return String(item[key]).includes(
            (filtersValues.current as { [key: string]: string })[key]
          )
            ? true
            : false;
        }
      });
    }

    data.current = result;
    isDataEmpty.current = true;
    setIsFiltered(!isFiltered);
  };

  const resetFilters = () => {
    isDataEmpty.current = false;
    filtersValues.current = {};
    setIsFiltered(!isFiltered);
  };

  return (
    <div className="content__options-filter">
      <filteredValuesContext.Provider value={filtersValues}>
        {props.title === "driver" ? (
          <DriverFilter {...{ search: search, resetFilters: resetFilters }} />
        ) : (
          <CarFilter {...{ search: search, resetFilters: resetFilters }} />
        )}
      </filteredValuesContext.Provider>
    </div>
  );
};

export default Filter;
