import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../loader/loader";
import FormSection from "./formSection/FormSection";
import UnitsTitles from "./unitsTitles/UnitsTitles";

import { dispatchStatuses, dispatchData } from "../../store/actions/actions";
import { GET, GETSTATUS } from "../../requests/requests";
import { RootState } from "../../store/rootReducer";

import { Data } from "../../interfaces/interfaces";

import "./form.style.scss";

interface Props {
  title: string;
}

const FormUnits = ({ title }: Props) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(true);
  const receivedData = useSelector((state: RootState) => state.dataReducer);
  const filteredData = useSelector((state: RootState) => state.filteredDataReducer);
  const isFilteredData = useSelector((state: RootState) => state.isFilteredReducer);
  const isData = useSelector((state: RootState) => state.IsUpdatedReducer);

  const data = (isFilteredData && filteredData) || receivedData;
  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchData() {
      const response = await GET(title);
      const statuses = await GETSTATUS(title);
      dispatch(dispatchStatuses(statuses.data));
      dispatch(dispatchData(response as Data[]));
    })();
  }, [isDeleted, title, isData]);

  return (
    <>
      <UnitsTitles title={title} />
      {data.length ?
        data.map((item: any) => {
          return (
            <FormSection
              key={item.id}
              title={title}
              data={item}
              setIsDeleted={setIsDeleted}
            />
          );
        })
        : <>{!isFilteredData && <div><Loader /></div>}</>
      }
    </>
  );
};

export default FormUnits;
