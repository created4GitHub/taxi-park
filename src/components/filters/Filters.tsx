import { useContext, useRef, Dispatch, SetStateAction } from "react";

import { receivedDataContext, filteredDataContext, filteredValuesContext } from "../../context";

import DriverFilter from "./driverFilter/DriverFilter";
import CarFilter from "./carFilter/CarFilter";

import "./filters.style.scss";

const Filter = (props: any) => {

    const [receivedData, setReceivedData]: any = useContext(receivedDataContext);
    const [isFiltered, setIsFiltered] = useContext(filteredDataContext).filter;
    const { data, isDataEmpty } = useContext(filteredDataContext);
    const filtersValues = useRef({});
  
    const search = (event: any) => {
      (filtersValues.current as { [key: string]: string })[event.target.name] = event.target.value;
      let result = receivedData.info;
      for (let key in filtersValues.current) {
        result = result.filter((item: any) => {
          if (key === "status") {
            return (filtersValues.current as { [key: string]: string })[key] === item.status.title ? true : false;
          } else {
            return String(item[key]).includes((filtersValues.current as { [key: string]: string })[key])
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
      }

    return (
        <div className="content__options-filter">
            <filteredValuesContext.Provider value={filtersValues}>
            {props.title === "driver" ? 
            <DriverFilter {...{search: search, resetFilters: resetFilters}}/> 
            : <CarFilter {...{search: search, resetFilters: resetFilters}} />}
            </filteredValuesContext.Provider>
        </div>
    );
};

export default Filter;
