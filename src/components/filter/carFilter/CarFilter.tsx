import React, { useContext, useRef } from "react";

import Input from "../../input";

import { receivedDataContext, filteredDataContext } from "../../../context";

import YearSelect from "../../yearSelect/YearSelect";

export default function DriverFilter() {
  const [receivedData, setReceivedData] = useContext(receivedDataContext);

  const [isFiltered, setIsFiltered] = useContext(filteredDataContext).filter;

  const { data, isDataEmpty } = useContext(filteredDataContext);

  const filtersValues = useRef({});

  const search = (event: any) => {
    console.log(event.target.value);
    (filtersValues.current as {[key: string] : string})[event.target.name] = event.target.value;
    let result = receivedData.info;
    for(let key in filtersValues.current){
      result = result.filter((item: any) => {
        if (key === "status") {
          return (filtersValues.current as {[key: string] : string})[key] === item.status.title ? true : false;
        } else {
          return String(item[key]).includes((filtersValues.current as {[key: string] : string})[key])
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
    <>
      <div className='filter_element-inputs'>
          <Input onInput={search} 
          name="id" 
          placeholder="Search by ID" 
          value={(filtersValues.current as {[key: string] : string}).id|| ""}/>
          <Input onInput={search} 
          name="driver_id" 
          placeholder="Search by driver ID" 
          value={(filtersValues.current as {[key: string] : string})["driver_id"]|| ""}/>
          <Input onInput={search} 
          name="mark" 
          placeholder="Search by mark" 
          value={(filtersValues.current as {[key: string] : string}).mark|| ""}/>
          <Input onInput={search} 
          name="model" 
          placeholder="Search by model" 
          value={(filtersValues.current as {[key: string] : string}).model|| ""}/>
          <Input onInput={search} 
          name="number" 
          placeholder="Search by number" 
          value={(filtersValues.current as {[key: string] : string}).number|| ""}/>
      </div>
      <div className='filter_element-inputRadio'>
        {receivedData.statuses &&
            receivedData.statuses.map((item: any, index: number) => {
              return (
                <div className="filter_element-radio" key={index}>
                  <Input
                    type="radio"
                    name="status"
                    id={"status" + index}
                    onChange={search}
                    value={item.title}
                    checked={(filtersValues.current as {[key: string] : string}).status === item.title}
                  />
                  <label htmlFor={"status" + index}>{item.title}</label>
                </div>
              );
            })}
      </div>
      <div className="filter_element-yearSelect">
        <YearSelect onChange={search} name="year" value={"2018"}/>
      </div>
      <button  
        className="reset-filter-button"
        onClick={resetFilters}>
        Reset
      </button>
    </>
  );
}
