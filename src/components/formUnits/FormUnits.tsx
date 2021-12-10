import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../loader/loader";
import FormSection from "./formSection/FormSection";
import UnitsTitles from "./unitsTitles/UnitsTitles";
import { dispatchData } from "../../redux/actions/actions";
import { GET, GET_STATUS } from "../../requests/requests";
import { Data } from "../../interfaces/interfaces";

import "./formUnits.style.scss";
import {
  filteredDataSelector,
  isDataUpdatedSelector,
  isDataFilteredSelector,
  dataSelector,
  isAddNewUnitSelector
} from "../../constants/selectors/selector";

interface Props {
  title: string;
}

const FormUnits = ({ title }: Props) => {
  const receivedData = useSelector(dataSelector);
  const filteredData = useSelector(filteredDataSelector);
  const isFilteredData = useSelector(isDataFilteredSelector);
  const isDataUpdated = useSelector(isDataUpdatedSelector);
  const isAddNewUnit = useSelector(isAddNewUnitSelector);
  const data = (isFilteredData && filteredData) || receivedData;
  const dispatch = useDispatch();

  async function fetchData() {
    const data = await GET(title) as Data[];
    const statuses = await GET_STATUS(title);
    dispatch(dispatchData({ data, statuses }));
  }

  useEffect(() => {
    fetchData();
  }, [isDataUpdated, isAddNewUnit]);

  const mapItems = (item: Data) => {
    return (
      <FormSection
        key={item.id}
        title={title}
        data={item}

      />
    );
  }

  const mappedItems = data.map(mapItems)

  return (
    <>
      <UnitsTitles title={title} />
      {data.length ?
        mappedItems
        : <>{!isFilteredData && <div><Loader /></div>}</>
      }
    </>
  );
};

export default FormUnits;
