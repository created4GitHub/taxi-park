import React, { useEffect, useState, useRef, useContext } from "react";
import { Context } from "../../context";

import AddForm from '../addformComponent/addForm'
import FormSection from "../formSection/FormSection";

import "./form.scss";

const getStatuses = fetch(
  "https://edu.evgeniychvertkov.com/v1/driver-status/",
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Authorization":
        "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
      "Content-Type": "application/json",
    },
  }
).then((resp) => resp.json());

const getInfo = fetch("https://edu.evgeniychvertkov.com/v1/driver/", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "X-Authorization":
      "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
    "Content-Type": "application/json",
  },
}).then((resp) => resp.json());

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
  const [isReceived, setIsReceived] = useState(false);
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    getStatuses.then((resp) => {
      statuses.current = resp.data;
    });
    getInfo.then((resp) => {
      info.current = resp.data;
      setIsReceived(!isReceived);
    });
  }, []);
  return (
    <>
      {isReceived ? (
        <div className="table">
          {context ? <AddForm /> : ''}
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