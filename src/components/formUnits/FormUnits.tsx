import { useEffect, useState, useContext, Dispatch, SetStateAction, MutableRefObject } from "react";
import { Context, deletedContext, receivedDataContext, filteredDataContext, } from "../../context";

import { GET } from "../../requests";

import FormSection from "./formSection/FormSection";

import "./form.style.scss";

type PropsStatus = {
  title: string;
  status: string
};

type InfoType = {
  id?: number;
  first_name?: string;
  last_name?: string;
  date_birth?: number;
  date_created?: number;
  status?: {
    title?: string;
    code?: string;
  };
};

type Received = {
  info: InfoType;
  statuses: PropsStatus[];
}

const FormUnits: React.FC<PropsStatus> = (props: PropsStatus) => {
  const [context, setContext]: [false, Dispatch<SetStateAction<false>>] = useContext(Context);
  const [receivedData, setReceivedData]: [Received, Dispatch<SetStateAction<Received>>] = useContext(receivedDataContext);
  const [isDeleted, setIsDeleted]: [true, Dispatch<SetStateAction<true>>] = useState(true);

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

  let currentData: string[] = (isDataEmpty.current && data.current) || receivedData.info;

  return (
    <>
      {receivedData.statuses && currentData ? (
        currentData.map((item: any, index: number) => {
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
