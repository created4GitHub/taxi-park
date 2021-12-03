import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import AddNewSection from "./addNewSection/AddNewSection";
import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";

import { closeAddNewModal } from "../../store/actions/action";

import { POST } from "../../requests";
import { Info, Status } from "../../interfaces";

import "./addNewUnit.style.scss";
import { RootState } from "../../store/reducers/rootReducer";

const AddNewUnit = ({ title }: { title: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const statuses = useSelector((state: RootState) => state.statusReducer);

  const dispatch = useDispatch();

  const checkForm = () => {
    type Unit = { [key: string]: string | number | Status };
    type Value = HTMLInputElement;

    let formValues: HTMLFormControlsCollection = (formRef.current as HTMLFormElement).elements;
    let unit: Unit = {};
    let isFilled: boolean = true;

    for (let item of Object.values(formValues)) {
      if (item.nodeName === "BUTTON") {
        break;
      }

      else if ((item as Value).value === "") {
        (item as Value).placeholder = `Fill it in`;
        item.classList.add("warning");
        isFilled = false;
        continue;
      }

      else if ((item as Value).name === "status") {
        unit.status = statuses.find((status: Status) => status.title === (item as Value).value)!;
        continue;
      }
      unit[(item as Value).name as keyof Info] = (item as Value).value;
    }

    if (isFilled) {
      POST(title, (unit as unknown as Info));
      dispatch(closeAddNewModal());
    }
  };

  return (
    <div className="table_section_add">
      <form ref={formRef}>
        <AddNewSection title={title} />
        <Statuses />
        <AddNewButton checkForm={checkForm} closeAddNewModal={closeAddNewModal} />
      </form>
    </div>

  );
};

export default AddNewUnit;
