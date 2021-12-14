import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import FormSectionTab from "./formSectionTab/FormSectionTab";
import { Button } from "../../regularComponents/button/Button";
import AdditionalData from "./additionalInfo/AdditionalInfo";
import { Data } from "../../../interfaces/interfaces";
import { GET, REMOVE, GET_CARS_BY_DRIVER } from "../../../requests/requests";
import { dispatchIsDataUpdated } from "../../../redux/actions/actions";

import "./formSection.style.scss";
import { FormattedMessage } from "react-intl";

type Props = {
  data: Data;
  title: string;
};

const FormSection = ({ data, title }: Props) => {
  const [isAdditionalData, setIsAdditionalData] = useState<boolean>(false);
  const [additionalData, setAdditionalData] = useState<Data[]>([]);
  const dispatch = useDispatch();

  const search = async () => {
    if (title === "driver") {
      const cars = await GET_CARS_BY_DRIVER(String(data.id));
      setAdditionalData(cars.data);
    } else {
      const driver = await GET("driver", data.driver_id);
      setAdditionalData([driver] as Data[]);
    }
  };


  const deleteEl = async () => {
    await REMOVE(title, data.id!);
    dispatch(dispatchIsDataUpdated());
  };

  const showClick = () => {
    // if(additionalData.length !== 0){
    setIsAdditionalData((prevState) => !prevState);
    search()
    // }
  }

  const mapItems = (property: string) => {
    return (
      <FormSectionTab
        key={property}
        property={property}
        value={data[property as keyof Data]!}
        id={String(data.id)}
        title={title}
        data={data}
      />
    )
  }

  const mappedItems = Object.keys(data).map(mapItems)

  const btnText = () => {
    if (isAdditionalData) {
      return <FormattedMessage id='Hide' />
    }
    return <FormattedMessage id='Show' />
  }

  const checkBtntext = btnText()

  return (
    <>
      <div className="table_section">
        {mappedItems}
        <Button
          onClick={showClick}
          className={'table_section-showButton'}
          btnText={checkBtntext}
        />
        <Button
          onClick={deleteEl}
          className="table_section-deleteButton"
          btnText={<FormattedMessage id='Delete' />}
        />
      </div>
      {isAdditionalData && <AdditionalData additionalData={additionalData} title={title} />}
    </>
  );
};

export default FormSection;
