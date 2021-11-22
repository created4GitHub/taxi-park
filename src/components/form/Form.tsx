import React, { useEffect, useState, useRef } from "react";

import FormSection from "../formSection/FormSection";
import "./form.scss";

import { GET } from "../../requests/requests"; 

const getStatuses = GET("driver-status");

const getInfo = GET("driver");

export const Statuses = React.createContext(null);

type infoType = {
  id: number;
  first_name: string;
  last_name: string;
  date_birth: number;
  date_created: number;
  status: {
    title: string;
    code: string;
  };
};

const Form = () => {
  const statuses = useRef([]);
  const info = useRef([]);
  const [isInfoReceived, setisInfoReceived] = useState(false);
  const [isStatusesReceived, setisStatusesReceived] = useState(false);

  useEffect(() => {
    getStatuses.then((resp) => {
      statuses.current = resp.data;
      setisStatusesReceived(!isStatusesReceived);
    });
    getInfo.then((resp) => {
      info.current = resp.data;
      setisInfoReceived(!isInfoReceived);
    });
  }, []);
  return (
    <>
      {isInfoReceived &&  isStatusesReceived ? (
        <div className="table">
          {info.current.map((item, index) => {
            return (
              <FormSection key={index} {...{ info: item, statuses: statuses.current }} />
            );
          })}
        </div>
      ) : (
        <div>Загрузка</div>
      )}
    </>
  );
};

export default Form;
