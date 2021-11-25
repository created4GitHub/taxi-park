import React, { useContext } from "react";

import Input from "../../input";

import { receivedDataContext, filteredDataContext } from "../../../context";

import YearSelect from "../../yearSelect/YearSelect";

export default function DriverFilter() {
  const [receivedData, setReceivedData] = useContext(receivedDataContext);

  const [isFiltered, setIsFiltered] = useContext(filteredDataContext).filter;

  const { data, isDataEmpty } = useContext(filteredDataContext);

  const search = (event: any) => {
    console.log(event)
      data.current = receivedData.info.filter((item: any) => {
        if (event.target.id === "status") {
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
      <div className="filter-element">
        <Input onChange={search} name="id" placeholder="Search by ID" />
      </div>
      <div className="filter-element">
        <Input onChange={search} name="mark" placeholder="Search by mark" />
      </div>
      <div className="filter-element">
        <Input onChange={search} name="model" placeholder="Search by model" />
      </div>
      <div className="filter-element">
        <Input onChange={search} name="number" placeholder="Search by number" />
      </div>
      <div className="filter-element">
        <YearSelect onChange={search} name="year"/>
      </div>
      <div className="filter-element">
        {receivedData.statuses &&
          receivedData.statuses.map((item: any, index: number) => {
            return (
              <div className="filter-element-inputRadio" key={index}>
                <Input
                  type="radio"
                  name="status"
                  id={"status"+index}
                  onChange={search}
                  value={item.title}
                />
                <label htmlFor={"status"+index}>{item.title}</label>
              </div>
            );
          })}
      </div>
    </>
  );
}
