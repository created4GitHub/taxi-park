import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader";
import FormSection from "./FormSection";
import UnitsTitles from "./UnitsTitles";
import { getData } from "../../redux/actions";
import { Data } from "../../interfaces";
import { stateSelector } from "../../redux/selectors";

import "./formUnits.style.scss";

interface Props {
  pageName: string;
}

const uuid = require("react-uuid");

const FormUnits = ({ pageName }: Props) => {
  const { receivedData, filteredData, isDataFiltered,
    isDataUpdated, isDataFetching, isDataFetchError } = useSelector(stateSelector);
  const data = (isDataFiltered && filteredData) || receivedData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(pageName));
  }, [isDataUpdated]);

  const mapItems = (item: Data) => {
    return (
      <FormSection
        key={uuid()}
        pageName={pageName}
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
        <UnitsTitles />
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
