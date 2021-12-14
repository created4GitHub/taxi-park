import { useEffect } from "react";
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
  isAddNewUnitSelector,
  isDataFetchingSelector,
  isDataFetchErrorSelector
} from "../../constants/selectors/selector";

import "./formUnits.style.scss";

interface Props {
  title: string;
}

const FormUnits = ({ title }: Props) => {
  const receivedData = useSelector(dataSelector);
  const filteredData = useSelector(filteredDataSelector);
  const isFilteredData = useSelector(isDataFilteredSelector);
  const isDataUpdated = useSelector(isDataUpdatedSelector);
  const isAddNewUnit = useSelector(isAddNewUnitSelector);
  const isDataFetching = useSelector(isDataFetchingSelector);
  const isDataFetchError = useSelector(isDataFetchErrorSelector);
  const data = (isFilteredData && filteredData) || receivedData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(title));
  }, []);

  const mapItems = (item: Data) => {
    return (
      <FormSection
        key={item.id}
        title={title}
        data={item}

      />
    );
  }

  const mappedItems = data.map(mapItems);

  return (
    isDataFetchError ? <div>Error</div> :
      isDataFetching ? <div><Loader /></div>
        : <>
          <UnitsTitles title={title} />
          {mappedItems}
        </>
  );
};

export default FormUnits;
