import React, {useEffect, useState, useContext} from "react";

import massObj from "./testMass";
import FormSection from "../formSection/FormSection";
import "./form.scss";

export const Context = React.createContext(null);


const getStatuses = fetch("https://edu.evgeniychvertkov.com/v1/driver-status/", {
    method: "GET",
    headers: {
      "Accept" : "application/json",
      "X-Authorization": "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
      "Content-Type": "application/json"
    }})
    .then(resp => resp.json());

const getInfo = fetch("https://edu.evgeniychvertkov.com/v1/driver/", {
  method: "GET",
  headers: {
    "Accept" : "application/json",
    "X-Authorization": "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
    "Content-Type": "application/json"
  }})
  .then(resp => resp.json());
    
    
    export const Statuses = React.createContext(null);

const Form = () => {

  const [statuses, setStatuses] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getStatuses.then(resp => {
      setStatuses(resp.data);
    });
    getInfo.then(resp => {
      setInfo(resp.data);
    })
}, [])

  return (
    <div className="table">
      {massObj.map((item, index) => {
        return (
          <Context.Provider value={item} key={index}>
              <FormSection {...{statuses: statuses, info: info}} />
          </Context.Provider>
        );
      })}
    </div>
  );
};

export default Form;
