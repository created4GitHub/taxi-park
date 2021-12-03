import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import AddNewSection from "./addNewSection/AddNewSection";
import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";

import { closeNewModal } from "../../store/actions/action";

import { POST } from "../../requests";
import { Information, Status } from "../../interfaces";

import { RootState } from "../../store/reducers/rootReducer";
import "./addNewUnit.style.scss";

const AddNewUnit = ({ title }: { title: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const statuses = useSelector((state: RootState) => state.statusReducer);

  const dispatch = useDispatch();

  const checkForm = () => {
    type Unit = { [key: string]: string | number | Status };
    type InputValue = HTMLInputElement;

    let formValues: HTMLFormControlsCollection = (formRef.current as HTMLFormElement).elements;
    let unit: Unit = {};
    let isFilled: boolean = true;

    for (let item of Object.values(formValues)) {
      if (item.nodeName === "BUTTON") {
        break;
      }

      else if ((item as InputValue).value === "") {
        (item as InputValue).placeholder = `Fill it in`;
        item.classList.add("warning");
        isFilled = false;
        continue;
      }

      else if ((item as InputValue).name === "status") {
        unit.status = statuses.find((status: Status) => status.title === (item as InputValue).value)!;
        continue;
      }
      unit[(item as InputValue).name as keyof Information] = (item as InputValue).value;
    }

    if (isFilled) {
      POST(title, (unit as unknown as Information));
      dispatch(closeNewModal());
    }
  };

  return (
    <div className="table_section_add">
      <form ref={formRef}>
        <AddNewSection title={title} />
        <Statuses />
        <AddNewButton checkForm={checkForm} closeModal={closeNewModal} />
      </form>
    </div>

  );
};

export default AddNewUnit;
