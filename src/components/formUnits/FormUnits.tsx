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

const FormUnits: React.FC<{ title: string }> = ({ title }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(true);
  const data = useSelector((state: RootState) => state.dataReducer);
  const statuses = useSelector((state: RootState) => state.statusReducer);
  const dispatch = useDispatch();

  const get = async () => {
    await GET(title).then((resp) => {
      GETSTATUS(title).then((statuses) => {
        dispatch(dispatchStatuses(statuses.data));
        dispatch(dispatchData(resp as Data[]));
      });
    });
  }

  useEffect(() => {
    get()
  }, [isDeleted, title]);


  return (
    <>
      <UnitsTitles title={title} />
      {statuses && data.length ? (
        data.map((item: any, index: number) => {
          return (
            <FormSection
            key={index}
              title={title}
              data={item}
              setIsDeleted={setIsDeleted}
            />
          );
        })
      ) : (
        <div><Loader /></div>
      )}
    </>
  );
};

export default FormUnits;
