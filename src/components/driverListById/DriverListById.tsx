import React, { ChangeEventHandler, useEffect, useState } from "react";

import { GET } from "../../requests/requests";
import { Data } from "../../interfaces/interfaces";

import "./driverListById.style.scss";

type Props = {
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const DriverIDList: React.FC<Props> = ({ name, onChange }: Props) => {
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
    <select name={name} onChange={onChange}>
      {mappedItems}
    </select>
  );
};

export default DriverIDList;
