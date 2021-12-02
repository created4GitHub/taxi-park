import {
  useEffect,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import {
  Context,
  deletedContext,
  receivedDataContext,
  filteredDataContext,
} from "../../context";


import Loader from "../loader/loader";
import FormSection from "./formSection/FormSection";
import { GET, GETSTATUS } from "../../requests";
import { Info, Status } from "../../interfaces";

import "./form.style.scss";

interface Received {
  info: Info[];
  statuses: Status[];
}

const FormUnits: React.FC<{ title: string }> = (props: { title: string }) => {
  const [addNew, setAddNew]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(Context);

  const [receivedData, setReceivedData]: [
    Received,
    Dispatch<SetStateAction<Received>>
  ] = useContext(receivedDataContext);
  const [isDeleted, setIsDeleted]: [true, Dispatch<SetStateAction<true>>] =
    useState(true);

  const { data, isDataEmpty } = useContext(filteredDataContext);

  useEffect(() => {
    GET(props.title).then((resp) => {
      if (props.title === "driver") {
        resp.data = resp.data.map((item) => {
          item.date_birth =
            item.date_birth && new Date(item.date_birth).toLocaleDateString();
          item.date_created =
            item.date_created &&
            new Date(item.date_created).toLocaleDateString();
          return item;
        });
      }
      GETSTATUS(props.title).then((statuses) => {
        setReceivedData({
          info: resp.data,
          statuses: statuses.data,
        } as Received);
      });
    });
  }, [addNew, isDeleted]);

  let currentData: string[] =
    (!isDataEmpty.current && data.current) || receivedData.info;

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
                title={props.title}
                info={item}
                statuses={receivedData.statuses}
              />
            </deletedContext.Provider>
          );
        })
      ) : (
        <div><Loader/></div>
      )}
    </>
  );
};

export default FormUnits;
