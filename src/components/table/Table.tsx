import React, { useEffect, useState, useRef } from 'react';

import Form from '../form/Form';

import { GET } from "../../requests/requests"; 

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

const Table = (props : any) => {

  const [statuses, setStatuses] = useState([]);
  const [info, setInfo] = useState([]);

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
        })
        setInfo(resp.data); 
      }
      setInfo(resp.data); 
    });
  }, []);

  return (
    <>
      {statuses.length &&  info.length ? <Form {...{statuses : statuses, info: info}} /> : (
        <div>Загрузка</div>
      )}
    </>
  );
};

export default Table;
