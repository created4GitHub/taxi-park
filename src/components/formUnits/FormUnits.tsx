import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../loader/loader";
import FormSection from "./formSection/FormSection";
import UnitsTitles from "./unitsTitles/UnitsTitles";
import { getData } from "../../redux/actions/actions";
import { Data } from "../../interfaces/interfaces";
import {
  filteredDataSelector,
  isDataUpdatedSelector,
  isDataFilteredSelector,
  dataSelector,
  isDataFetchingSelector,
  isDataFetchErrorSelector,
} from "../../redux/selectors/selector";

import "./formUnits.style.scss";

interface Props {
  title: string;
}

const uuid = require("react-uuid");

const FormUnits = ({ title }: Props) => {
  const receivedData = useSelector(dataSelector);
  const filteredData = useSelector(filteredDataSelector);
  const isDataFiltered = useSelector(isDataFilteredSelector);
  const isDataUpdated = useSelector(isDataUpdatedSelector);
  const isDataFetching = useSelector(isDataFetchingSelector);
  const isDataFetchError = useSelector(isDataFetchErrorSelector);
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
