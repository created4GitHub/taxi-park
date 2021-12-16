import React, { useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";

import { GET } from "../../requests/requests";
import { Data } from "../../interfaces/interfaces";

import "./driverById.style.scss";

const uuid = require("react-uuid");

const Driversist: React.FC = () => {
  const [drivers, setDrivers] = useState(Array<Data>());
  const intl = useIntl();

  const fetchData = async () => {
    const drivers = await GET("driver");
    setDrivers(drivers as Data[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapItems = (item: Data) => {
    return (
      <option key={uuid()} 
      value={item.id}>
        {item.first_name + " " + item.last_name}
      </option>
    )
  }

  const mappedItems = useMemo(() => drivers?.map(mapItems), [drivers])

  return (
    <>
      <option value="" hidden>{intl.formatMessage({ id: "Driver" })}</option>
      {mappedItems}
    </>
  )
};

export default Driversist;
