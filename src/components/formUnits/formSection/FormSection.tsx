import { useState } from "react";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { Button } from "../../regularComponents/button/Button";
import AdditionalData from "./additionalInfo/additionalInfo";
import { Data } from "../../../interfaces/interfaces";
import { GET, REMOVE, GET_CARS_BY_DRIVER } from "../../../requests/requests";

import "./formSection.style.scss";

type Props = {
  data: Data;
  title: string;
  setIsDeleted: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormSection = ({ data, title, setIsDeleted }: Props) => {
  const [isAdditionalData, setIsAdditionalData] = useState<boolean>(false);
  const [additionalData, setadditionalData] = useState<Data[]>([]);

  const search = async () => {
    if (title === "driver") {
      const cars = await GET_CARS_BY_DRIVER(String(data.id));
      setadditionalData(cars.data);
    } else {
      const driver = await GET("driver", data.driver_id);
      setadditionalData([driver] as Data[]);
    }
  };

  const deleteEl = async () => {
    await REMOVE(title, data.id!);
    setIsDeleted((isDeleted) => !isDeleted);
  };

  const showClick = () => {
    setIsAdditionalData((prevState) => !prevState);
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
            id={String(data.id)}
            title={title}
            data={data}
          />
        )}
        <Button
          onClick={showClick}
          className="table_section-showButton"
          btnText={isAdditionalData ? "Hide" : "Show"}
        />
        <Button
          onClick={deleteEl}
          className="table_section-deleteButton"
          btnText="delete"
        />
      </div>
      {isAdditionalData && <AdditionalData additionalData={additionalData} title={title} />}
    </>
  );
};

export default FormSection;
