import { useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import { useStateIfMounted } from "use-state-if-mounted";

import FormSectionTab from "./FormSectionTab";
import { Button } from "../../commons/Button";
import AdditionalData from "./AdditionalInfo";
import { Data } from "../../../interfaces";
import { GET, REMOVE, GET_CARS_BY_DRIVER } from "../../../requests/requests";
import { removeUnit } from "../../../redux/actions/actions";
import Ellipsis from "../../Loader/Ellipsis";

import "./formSection.style.scss";

type Props = {
  data: Data;
  title: string;
};
const uuid = require("react-uuid");

const FormSection = ({ data, title }: Props) => {
  const [isAdditionalData, setIsAdditionalData] = useState<boolean>(false);
  const [additionalData, setAdditionalData] = useStateIfMounted<Data[]>([]);
  const [isModal, setIsModal] = useStateIfMounted<boolean>(true);

  const className = additionalData.length !== 0 ?
    'table_section-showButton'
    : 'table_section-showButton isActive';
  const dispatch = useDispatch();

  const search = async () => {
    if (title === "driver") {
      const cars = await GET_CARS_BY_DRIVER(String(data.id));
      setAdditionalData(cars as Data[]);
    } else {
      const driver = await GET("driver", data.driver_id);
      setAdditionalData([driver] as Data[]);
    }
    setIsModal(false);
  };

  useEffect(() => {
    search();
    setIsModal(true);
  }, [])

  const deleteEl = async () => {
    dispatch(removeUnit(title, data.id!));
  };

  const showAditionalSection = () => {
    if (additionalData.length !== 0) {
      setIsAdditionalData((prevState) => !prevState);
    }
  }

  const mapItems = (property: string) => {
    return (
      <FormSectionTab
        key={uuid()}
        property={property}
        value={data[property as keyof Data]!}
        id={String(data.id)}
        title={title}
        data={data}
      />
    )
  }
  const mappedItems = useMemo(() => Object.keys(data).map(mapItems), [data]);

  const checkBtntext = additionalData.length ?
    (isAdditionalData && <FormattedMessage id='Hide' />)
    || <FormattedMessage id='Show' />
    : <FormattedMessage id='No cars' />;

  const additElement = isModal ?
    <div className='table_section__loader'>
      <Ellipsis />
    </div>
    :
    <Button
      onClick={showAditionalSection}
      className={className}
      btnText={checkBtntext}
    />;

  return (
    <>
      <div className="table_section">
        {mappedItems}
        {additElement}
        <Button
          onClick={deleteEl}
          className="table_section-deleteButton"
          btnText={<FormattedMessage id='Delete' />}
        />
      </div>
      {isAdditionalData && <AdditionalData
        additionalData={additionalData}
        title={title}
      />}
    </>
  );
};

export default FormSection;
