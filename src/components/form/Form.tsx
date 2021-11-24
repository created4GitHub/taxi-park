import React, { useEffect, useState, useContext } from 'react';
import { Context, deletedContext } from "../../context";

import { GET } from "../../requests"; 

import FormSection from "./formSection/FormSection";

import "./form.scss";

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

const infoContext = React.createContext(null);

const Form = (props : any) => {
  const [context, setContext] = useContext(Context);
  const [statuses, setStatuses] = useState([]);
  const [info, setInfo] = useState([]);
  const [isDeleted, setIsDeleted] = useState(true);

  useEffect(() => {
    GET(props.status).then((resp) => {
      setStatuses(resp.data);
    });
    GET(props.title).then((resp) => {
      if(props.title === "driver"){
        resp.data = resp.data.map((item : any) => {
          item.date_birth = new Date(item.date_birth).toLocaleDateString();
          item.date_created = new Date(item.date_created).toLocaleDateString();
          return item;
        });
      }      
      setInfo(resp.data); 
    })
  }, [context, isDeleted]);

console.log("check", isDeleted)
  return (
    <>
      {statuses.length &&  info.length ? info.map((item : any, index : any) => {
        return (
          <deletedContext.Provider key={index} value={[isDeleted, setIsDeleted]}>
          <FormSection key={index} title={props.title} info={item}  statuses={statuses}/>
          </deletedContext.Provider>
        );
      }) : <div>Загрузка</div>}
    </>
  );
};

export default Form;

function debounce(arg0: Promise<void>) {
  throw new Error('Function not implemented.');
}

