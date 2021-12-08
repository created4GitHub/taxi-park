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


  const checkFormValues = () => {
    const formValues: HTMLFormControlsCollection = (formRef.current as HTMLFormElement).elements;
    const unit: Data = {};

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
      else if (value !== "") {
        item.classList.remove("warning");
        continue;
      }
      else if (name === "status") {
        unit.status = statuses.find((status: Status) => status.title === value)!;
        continue;
      }
      (unit[name as keyof Data] as string) = value;
    }
    if (isFilled) {
      POST(title, (unit as Data));
      dispatch(updateIsAddNewUnit(false));
    }
  };
  console.log(initialValues)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}>
      <div className="table_section_add">
        <form className="search-table_section_add" ref={formRef}>
          {info?.map(({ name, length, placeholder }: { name: string, length: number, placeholder: string }) => {
            return (
              <div key={name} className="table_section-block-input">
                < Input
                  className="table_section-input"
                  placeholder={placeholder}
                  id={name}
                  {...formik.getFieldProps('lastName')}
                />
              </div >
            )
          })}
          <OptionalInfo title={title} />
          <Statuses />
          <AddNewButton checkFormValues={checkFormValues} updateIsAddNewUnit={updateIsAddNewUnit} />
        </form>
      </div>
    </Formik>
  );
};

export default AddNewUnit;
