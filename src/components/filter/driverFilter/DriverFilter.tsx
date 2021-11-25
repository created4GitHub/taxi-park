import React, { useContext } from "react";

import Input from "../../input";

import { receivedDataContext, filteredDataContext } from "../../../context";

export default function DriverFilter() {
  const [receivedData, setReceivedData] = useContext(receivedDataContext);

  const [isFiltered, setIsFiltered] = useContext(filteredDataContext).filter;

  const { data, isDataEmpty } = useContext(filteredDataContext);

  const search = (event: any) => {
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
        <Input
          onChange={search}
          name="first_name"
          placeholder="Search by name"
        />
      </div>
      <div className="filter-element">
        <Input
          onChange={search}
          name="last_name"
          placeholder="Search by surname"
        />
      </div>
      <div className="filter-element">
        {receivedData.statuses &&
          receivedData.statuses.map((item: any, index: number) => {
            return (
              <div key={index}>
                <Input
                  type="radio"
                  name="status"
                  id="status"
                  onChange={search}
                  value={item.title}
                />
                <label htmlFor="status">{item.title}</label>
              </div>
            );
          })}
      </div>
    </>
  );
}
