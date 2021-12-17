import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader";
import FormSection from "./FormSection";
import UnitsTitles from "./UnitsTitles";
import { getData } from "../../redux/actions";
import { Data } from "../../interfaces";
import { state } from "../../redux/selectors";

import "./formUnits.style.scss";

interface Props {
  title: string;
}

const uuid = require("react-uuid");

const FormUnits = ({ title }: Props) => {
  const { receivedData, filteredData, isDataFiltered,
    isDataUpdated, isDataFetching, isDataFetchError } = useSelector(state);
  const data = (isDataFiltered && filteredData) || receivedData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(title));
  }, [isDataUpdated]);

  const mapItems = (item: Data) => {
    return (
      <FormSection
        key={uuid()}
        title={title}
        data={item}

      />
    );
  }
  const mappedItems = useMemo(() => data.map(mapItems), [data]);

  const element: JSX.Element = isDataFetching ?
    <div className='block_loader'>
      <Loader />
    </div>
    : (
      <>
        <UnitsTitles title={title} />
        {mappedItems}
      </>
    );

  return (
    isDataFetchError ?
      <div>Error</div>
      : element
  );
};

export default FormUnits;
