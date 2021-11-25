import React, { useContext, useEffect } from "react";

import Input from "../../input";

import { receivedDataContext, filteredDataContext } from "../../../context";

import YearSelect from "../../yearSelect/YearSelect";

export default function DriverFilter() {
  const [receivedData, setReceivedData] = useContext(receivedDataContext);

  const [isFiltered, setIsFiltered] = useContext(filteredDataContext).filter;

  const { data, isDataEmpty } = useContext(filteredDataContext);

  const search = (event: any) => {
    data.current = receivedData.info.filter((item: any) => {
      if (event.target.name === "status") {
        return event.target.value === item.status.title ? true : false;
      } else {
        return String(item[event.target.name]).includes(event.target.value)
          ? true
          : false;
      }
    });
    isDataEmpty.current = true;
    setIsFiltered(!isFiltered);
  };

  return (
    <>
      <div className='filter_element-inputs'>
        <Input onChange={search} name="id" placeholder="Search by ID" />
        <Input onChange={search} name="mark" placeholder="Search by mark" />
        <Input onChange={search} name="model" placeholder="Search by model" />
        <Input onChange={search} name="number" placeholder="Search by number" />
        <Input onChange={search} name="number" placeholder="Search by number" />
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
                />
                <label htmlFor={"status" + index}>{item.title}</label>
              </div>
            );
          })}
      </div>
      <div className="filter_element-yearSelect">
        <YearSelect onChange={search} name="year" />
      </div>
      <button className="reset-filter-button">
        Reset
      </button>
    </>
  );
}
