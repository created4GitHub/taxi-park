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

  useEffect(() => {
    GET("driver").then((data) => {
      setDrivers(data as Data[]);
    });
  }, []);

  return (
    <select name={name} onChange={onChange}>
      {drivers.length && drivers.map((item: Data, index: number) =>
        <option key={index} value={item.id}>
          {item.first_name + " " + item.last_name}
        </option>
      )}
    </select>
  );
};

export default DriverIDList;
