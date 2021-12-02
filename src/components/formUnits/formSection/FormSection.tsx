import { useContext, useState, Dispatch, SetStateAction, useRef } from "react";
import { deletedContext } from "../../../context";
import FormSectionTab from "./formSectionTab/FormSectionTab";
import { Button } from "../../regularComponents/button/Button";

import TableSection from './additionalInfo/tableSection'

import { GET, REMOVE, GETDRIVERBYCAR } from "../../../requests";

import { Info, Status } from "../../../interfaces";


import "./formSection.style.scss";

type Props = {
  info: Info;
  title: string;
  statuses: Status[];
};

const FormSection = (props: Props) => {
  const [isOpen, setIsopen] = useState<boolean>();
  const [cars, setCars] = useState<Info[]>();
  const [driver, setDriver] = useState<Info>();
  const [isDelete, setIsDeleted]: [boolean, Dispatch<SetStateAction<boolean>>] = useContext(deletedContext);

  let itemInfo = props.info;
  let infoEntries = Object.entries(itemInfo);

  const deleteEl = () => {
    itemInfo.id && REMOVE(props.title, itemInfo.id).then(() => {
      setIsDeleted((isDeleted) => !isDeleted);
    });
  };

  const search = () => {
    if (props.title === "driver") {
      GETDRIVERBYCAR(String(props.info.id)).then((data) =>{
        setCars(data.data as Info[])
      }
      );
    }
    if (props.title === "car" && props.info.driver_id) {
      GET(`driver/${props.info.driver_id}`).then((resp) =>{
        setDriver([resp.data] as unknown as Info);
      }
      );
    }
  };

  return (
    <>
      <div className="table_section">
        { infoEntries.map((item: [string, unknown], index: number) => 
          <FormSectionTab key={index} {...{ ...props, item: item }} 
        />) }
        <Button
          onClick={() => {
            setIsopen((prevState) => !prevState);
            search();
          }}
          className="table_section-showButton"
          btnText={isOpen ? "hide" : "show"}
        />
        <Button
          onClick={deleteEl}
          className="table_section-deleteButton"
          btnText="delete"
        />
      </div>
      { isOpen ? <TableSection cars={cars} driver={driver} title={props.title}/> : '' }
    </>
  );
};

export default FormSection;
