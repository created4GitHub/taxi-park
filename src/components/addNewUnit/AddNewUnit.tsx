import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import AddNewSection from "./addNewSection/AddNewSection";
import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";
import { updateIsAddNewUnit } from "../../store/actions/actions";
import { POST } from "../../requests/requests";
import { Data, Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";

import "./addNewUnit.style.scss";

const AddNewUnit = ({ title }: { title: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const statuses = useSelector((state: RootState) => state.statuses);
  const dispatch = useDispatch();

  const checkForm = () => {
    type Unit = { [key: string]: string | number | Status };
    type InputValue = HTMLInputElement;

    const formValues: HTMLFormControlsCollection = (formRef.current as HTMLFormElement).elements;
    const unit: Unit = {};
    let isFilled: boolean = true;

    for (const item of Object.values(formValues)) {
      if (item.nodeName === "BUTTON") {
        break;
      } else if ((item as InputValue).value === "") {
        item.classList.add("warning");
        isFilled = false;
        continue;
      } else if ((item as InputValue).name === "status") {
        unit.status = statuses.find((status: Status) => status.title === (item as InputValue).value)!;
        continue;
      }
      
      unit[(item as InputValue).name as keyof Data] = (item as InputValue).value;
    }

    if (isFilled) {
      POST(title, (unit as unknown as Data));
      console.log(unit);
      
    }
  };

  return (
    <div className="table_section_add">
      <form className="search-table_section_add" ref={formRef}>
        <AddNewSection title={title} />
        <Statuses />
        <AddNewButton checkFormValues={checkForm} updateIsAddNewUnit={updateIsAddNewUnit} />
      </form>
    </div>

  );
};

export default AddNewUnit;
function closeAddNewUnit(): any {
  throw new Error("Function not implemented.");
}

