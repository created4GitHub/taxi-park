import React, { useEffect, useState } from "react";

import { GET } from "../../requests/requests";
import { Data } from "../../interfaces/interfaces";

import "./driverById.style.scss";

const DriverIDList: React.FC = () => {
  const [drivers, setDrivers] = useState(Array<Data>());

  const fetchData = async () => {
    const drivers = await GET("driver");
    setDrivers(drivers as Data[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapItems = (item: Data) => {
    return (
      <option key={item.id} value={item.id}>
        {item.first_name + " " + item.last_name}
      </option>
    )
  }

  const mappedItems = drivers?.map(mapItems)

  return (
    <>
      <option value="" hidden>Select</option>
      {drivers?.map(item => {
        return (
          <option key={item.id} value={item.id}>
            {item.first_name + " " + item.last_name}
          </option>
        )
      })}
    </>
  )
};

export default DriverIDList;
