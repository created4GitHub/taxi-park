import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../loader/loader";
import FormSection from "./formSection/FormSection";
import UnitsTitles from "./unitsTitles/UnitsTitles";
import { dispatchData } from "../../store/actions/actions";
import { GET, GET_STATUS } from "../../requests/requests";
import { RootState } from "../../store/rootReducer";
import { Data } from "../../interfaces/interfaces";

import "./formUnits.style.scss";

const selector = (state: RootState) => state.filteredData
interface Props {
  title: string;
}

const FormUnits = ({ title }: Props) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(true);
  const receivedData = useSelector((state: RootState) => state.data);
  const filteredData = useSelector(selector);
  const isFilteredData = useSelector((state: RootState) => state.isDataFiltered);
  const isDataUpdated = useSelector((state: RootState) => state.isDataUpdated);
  const isAddNewUnit = useSelector((state: RootState) => state.isAddNewUnit);
  const data = (isFilteredData && filteredData) || receivedData;
  const dispatch = useDispatch();

  async function fetchData() {
    const data = await GET(title) as Data[];
    const statuses = await GET_STATUS(title);
    dispatch(dispatchData({ data, statuses }));
  }

  useEffect(() => {
    fetchData();
  }, [isDeleted, title, isDataUpdated, isAddNewUnit]);

  const mapItems = (item: Data) => {
    return (
      <FormSection
        key={item.id}
        title={title}
        data={item}
        setIsDeleted={setIsDeleted}
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
