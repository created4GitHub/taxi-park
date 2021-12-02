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
  const filtersValues: MutableRefObject<{[key: string] : string}> = useRef({});

  if(filtersValues.current.title && filtersValues.current.title !== props.title){
    resetFilters();
  }

  const search = (event: React.ChangeEvent<HTMLInputElement>) => {
    filtersValues.current.title = props.title;
    filtersValues.current[event.target.name] = event.target.value;
    let result = receivedData.info;

    for (let key in filtersValues.current) {
      if(key === "title"){
        continue;
      }
      result = result.filter((item: Info | any) => {
        if (key === "status") {
          return (filtersValues.current)[key] ===
            item.status.title
            ? true
            : false;  
        } else {
          return String(item[key]).includes(filtersValues.current[key])
            ? true
            : false;
        }
      });
    }
    data.current = result;
    isDataEmpty.current = false;
    setIsFiltered(!isFiltered);
  };

  function resetFilters(){
    isDataEmpty.current = true;
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
