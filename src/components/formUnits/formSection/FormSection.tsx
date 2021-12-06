import { useState } from "react";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { Button } from "../../regularComponents/button/Button";
import TableSection from "./additionalInfo/additionalInfo";

import { Data } from "../../../interfaces/interfaces";
import { GET, REMOVE, GET_CARS_BY_DRIVER } from "../../../requests/requests";

import "./formSection.style.scss";

type Props = {
  data: Data;
  title: string;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormSection = ({ data, title, setIsDeleted }: Props) => {
  const [isOpen, setIsopen] = useState<boolean>();
  const [additionalData, setadditionalData] = useState<Data[]>([]);
  
  const search = () => {
    if (title === "driver") {
      GET_CARS_BY_DRIVER(String(data.id)).then((data) => {
        setadditionalData(data.data);
      });
    } else {
      GET("driver", data.driver_id).then((resp) => {
        setadditionalData([resp] as Data[]);
      });
    }
  };

  const deleteEl = () => {
    REMOVE(title, data.id!).then(() => {
      setIsDeleted((isDeleted) => !isDeleted);
    });
  };

  const handleClick = () => {
    setIsopen((prevState) => !prevState);
    search();
  }

  return (
    <>
      <div className="table_section">
        {Object.keys(data).map((property: string) =>
          <FormSectionTab
            key={property}
            property={property}
            value={data[property as keyof Data]!}
            title={title}
            data={data}
          />
        )}
        <Button
          onClick={handleClick}
          className="table_section-showButton"
          btnText={isOpen ? "Hide" : "Show"}
        />
        <Button
          onClick={deleteEl}
          className="table_section-deleteButton"
          btnText="delete"
        />
      </div>
      {isOpen && <TableSection additionalData={additionalData} title={title} />}
    </>
  );
};

export default FormSection;
