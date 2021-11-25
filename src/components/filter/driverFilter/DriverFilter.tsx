import React, { useContext, useRef } from "react";

import Input from "../../input";

import { receivedDataContext, filteredDataContext } from "../../../context";

export default function DriverFilter() {
  const [receivedData, setReceivedData] = useContext(receivedDataContext);

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
    <>
      <div className='filter_element-inputs'>
        <Input onChange={search}
          name="id"
          placeholder="Search by ID"
          value={(filtersValues.current as { [key: string]: string }).id || ""} />
        <Input
          onChange={search}
          name="first_name"
          placeholder="Search by name"
          value={(filtersValues.current as { [key: string]: string })["first_name"] || ""}
        />
        <Input
          onChange={search}
          name="last_name"
          placeholder="Search by surname"
          value={(filtersValues.current as { [key: string]: string })["last_name"] || ""}
        />
      </div>
      <div className='filter_element-inputRadio'>
        {receivedData.statuses &&
          receivedData.statuses.map((item: any, index: number) => {
            return (
              <div className="filter-element" key={index}>
                <Input
                  type="radio"
                  name="status"
                  id={"status" + index}
                  onChange={search}
                  value={item.title}
                  checked={(filtersValues.current as { [key: string]: string }).status === item.title}
                />
                <label htmlFor={"status" + index}>{item.title}</label>
              </div>
            );
          })}
      </div>
      <button
        className="reset-filter-button"
        onClick={resetFilters}>
        Reset
      </button>
    </>
  );
}
