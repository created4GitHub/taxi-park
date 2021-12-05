import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../loader/loader";
import FormSection from "./formSection/FormSection";
import UnitsTitles from "./unitsTitles/UnitsTitles";

import { dispatchStatuses, dispatchData } from "../../store/actions/actions";
import { GET, GETSTATUS } from "../../requests/requests";
import { RootState } from "../../store/rootReducer";

import "./form.style.scss";

const FormUnits: React.FC<{ title: string }> = ({ title }) => {
  const [isDeleted, setIsDeleted] = useState<boolean>(true);
  const data = useSelector((state: RootState) => state.dataReducer);
  const statuses = useSelector((state: RootState) => state.statusReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    GET(title).then((resp) => {
      if (title === "driver") {
        resp.data = resp.data.map((item) => {
          item.date_birth =
            item.date_birth && new Date(item.date_birth).toLocaleDateString();
          item.date_created =
            item.date_created &&
            new Date(item.date_created).toLocaleDateString();
          return item;
        });
      }
      GETSTATUS(title).then((statuses) => {
        dispatch(dispatchStatuses(statuses.data));
        dispatch(dispatchData(resp.data));
      });
    });
  }, [isDeleted]);


  return (
    <>
      <UnitsTitles title={title} />
      {statuses && data.length ? (
        data.map((item: any, index: number) => {
          return (
            <FormSection
              title={title}
              info={item}
              statuses={statuses}
              key={index}
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
