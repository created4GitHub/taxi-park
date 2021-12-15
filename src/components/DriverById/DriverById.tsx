import React, { useEffect, useMemo, useState } from "react";
import { useIntl } from "react-intl";

import { GET } from "../../requests/requests";
import { Data } from "../../interfaces/interfaces";

import "./driverById.style.scss";

const DriverIDList: React.FC = () => {
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
      <option key={item.id} value={item.id}>
        {item.first_name + " " + item.last_name}
      </option>
    )
  }

  const mappedItems = useMemo(() => drivers?.map(mapItems), [drivers])

  return (
    <>
      <option value="" hidden>{intl.formatMessage({ id: "Select" })}</option>
      {mappedItems}
    </>
  )
};

export default DriverIDList;
