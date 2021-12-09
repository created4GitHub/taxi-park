import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import OptionalInfo from "./optionalInfo/OptionalInfo";
import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";
import { updateIsAddNewUnit } from "../../store/actions/actions";
import { POST } from "../../requests/requests";
import { Data, Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";
import { CarInfo, DriverInfo } from "../../constants/AddNewSection"

import "./addNewUnit.style.scss";
import Input from "../regularComponents/input/Input";

const AddNewUnit = ({ title }: { title: string }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const statuses = useSelector((state: RootState) => state.statuses);
  const dispatch = useDispatch();
  const info = (title === "car" && CarInfo) || DriverInfo;
  const initialValues: { [key: string]: string } = {};
  const validationSchema: any = {}
  info.forEach(({ name, length }: { name: string, length: number }) => {
    initialValues[name] = "";
    validationSchema[name] = Yup.string()
      .max(length, `Must be ${length} characters or less`)
      .required('Required');
  });

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
    }
  };

console.log(1234);


  return (
    <div className="table_section_add">
      <form className="search-table_section_add" ref={formRef}>
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

