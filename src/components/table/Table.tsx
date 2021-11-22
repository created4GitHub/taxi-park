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

  const statuses = useRef([]);
  const info = useRef([]);
  const [isInfoReceived, setisInfoReceived] = useState(false);
  const [isStatusesReceived, setisStatusesReceived] = useState(false);

  useEffect(() => {
    GET(props.status).then((resp) => {
      statuses.current = resp.data;
      
      setisStatusesReceived(!isStatusesReceived);
    });
    GET(props.title).then((resp) => {
      info.current = resp.data;
      setisInfoReceived(!isInfoReceived);
    });
  }, []);

  return (
    <>
      {isInfoReceived &&  isStatusesReceived ? <Form {...{statuses : statuses.current, info: info.current}} /> : (
        <div>Загрузка</div>
      )}
    </>
  );
};

export default Table;
