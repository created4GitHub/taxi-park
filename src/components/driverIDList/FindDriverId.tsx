import React, { ChangeEventHandler, useEffect, useState } from "react";

import { GET } from "../../requests";
import { Info } from "../../interfaces";

import "./findDriverId.style.scss";

type Props = {
  name?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const DriverIDList: React.FC<Props> = ({ name, onChange }: Props) => {
  const [drivers, setDrivers] = useState(Array<Info>());

  useEffect(() => {
    GET("driver").then((data) => {
      setDrivers(data.data as Info[]);
    });
  }, []);

  return (
    <select name={name} onChange={onChange}>
      {drivers.length && drivers.map((item: Info, index: number) =>
        <option key={index} value={item.id}>
          {item.first_name + " " + item.last_name}
        </option>
      )}
    </select>
  );
};

export default DriverIDList;
