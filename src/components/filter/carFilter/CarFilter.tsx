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
      <div className="filter-element">
        <Input onInput={search} 
        name="id" 
        placeholder="Search by ID" 
        value={(filtersValues.current as {[key: string] : string}).id|| ""}/>
      </div>
      <div className="filter-element">
        <Input onInput={search} 
        name="driver_id" 
        placeholder="Search by driver's ID" 
        value={(filtersValues.current as {[key: string] : string})["driver_id"]|| ""}/>
      </div>
      <div className="filter-element">
        <Input onInput={search} 
        name="mark" 
        placeholder="Search by mark" 
        value={(filtersValues.current as {[key: string] : string}).mark|| ""}/>
      </div>
      <div className="filter-element">
        <Input onInput={search} 
        name="model" 
        placeholder="Search by model" 
        value={(filtersValues.current as {[key: string] : string}).model|| ""}/>
      </div>
      <div className="filter-element">
        <Input onInput={search} 
        name="number" 
        placeholder="Search by number" 
        value={(filtersValues.current as {[key: string] : string}).number|| ""}/>
      </div>
      <div className="filter-element">
        <YearSelect onChange={search} name="year" value={"2018"}/>
      </div>
      {receivedData.statuses &&
          receivedData.statuses.map((item: any, index: number) => {
            return (
              <div className="filter-element" key={index}>
                <Input
                  type="radio"
                  name="status"
                  id={"status"+index}
                  onChange={search}
                  value={item.title}
                  checked={(filtersValues.current as {[key: string] : string}).status === item.title}
                />
                <label htmlFor={"status"+index}>{item.title}</label>
              </div>
            );
          })}
      <button 
      className="reset-filter"
      onClick={resetFilters}>
        Reset
      </button>
    </>
  );
}
