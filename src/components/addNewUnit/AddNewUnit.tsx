import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import AddNewSection from "./addNewSection/AddNewSection";
import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";
import { closeAddNewUnit } from "../../store/actions/actions";
import { POST } from "../../requests/requests";
import { Data, Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";

import "./addNewUnit.style.scss";

const AddNewUnit = ({ title }: { title: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const statuses = useSelector((state: RootState) => state.statusReducer);
  const dispatch = useDispatch();

  const checkFormValues = () => {
    type Unit = { [key: string]: string | number | Status };
    const formValues: HTMLFormControlsCollection = (formRef.current as HTMLFormElement).elements;
    const unit: Unit = {};
    let isFilled: boolean = true;

    for (const item of Object.values(formValues)) {
      const value = (item as HTMLInputElement).value;
      const name = (item as HTMLInputElement).name;
      if (item.nodeName === "BUTTON") {
        break;
      }
      else if (value === "") {
        item.classList.add("warning");
        isFilled = false;
        continue;
      }
      else if (name === "status") {
        unit.status = statuses.find((status: Status) => status.title === value)!;
        continue;
      }
      unit[name as keyof Data] = value;
    }
    if (isFilled) {
      POST(title, (unit as Data));
      dispatch(closeAddNewUnit());
    }
  };

  return (
    <div className="table_section_add">
      <form className="search-table_section_add" ref={formRef}>
        <AddNewSection title={title} />
        <Statuses />
        <AddNewButton checkFormValues={checkFormValues} closeAddNewUnit={closeAddNewUnit} />
      </form>
    </div>

  );
};

export default AddNewUnit;
