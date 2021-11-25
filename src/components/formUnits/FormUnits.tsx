import { useEffect, useState, useContext } from "react";
import {
  Context,
  deletedContext,
  receivedDataContext,
  filteredDataContext,
} from "../../context";

import { GET } from "../../requests";

import FormSection from "./formSection/FormSection";

import "./form.style.scss";

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

const FormUnits = (props: any) => {
  const [context, setContext] = useContext(Context);
  const [receivedData, setReceivedData] = useContext(receivedDataContext);
  const [isDeleted, setIsDeleted] = useState(true);

  const { data, isDataEmpty } = useContext(filteredDataContext);

  useEffect(() => {
    GET(props.title).then((resp) => {
      if (props.title === "driver") {
        resp.data = resp.data.map((item: any) => {
          item.date_birth = new Date(item.date_birth).toLocaleDateString();
          item.date_created = new Date(item.date_created).toLocaleDateString();
          return item;
        });
      }
      GET(props.status).then((statuses) => {
        setReceivedData({ info: resp.data, statuses: statuses.data });
      });
    });
  }, [context, isDeleted]);

  let currentData = (isDataEmpty.current && data.current) || receivedData.info;

  return (
    <>
      {receivedData.statuses && currentData ? (
        currentData.map((item: any, index: any) => {
          return (
            <deletedContext.Provider
              key={index}
              value={[isDeleted, setIsDeleted]}
            >
              <FormSection
                key={index}
                title={props.title}
                info={item}
                statuses={receivedData.statuses}
              />
            </deletedContext.Provider>
          );
        })
      ) : (
        <div>Загрузка</div>
      )}
    </>
  );
};

export default FormUnits;
