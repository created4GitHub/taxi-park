import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

import OptionalInfo from "./optionalInfo/OptionalInfo";
import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";
import { updateIsAddNewUnit } from "../../store/actions/actions";
import { POST } from "../../requests/requests";
import { Data, Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";
import { CarInfo, DriverInfo } from "../../constants/AddNewSection"
import Input from "../regularComponents/input/Input";

import "./addNewUnit.style.scss";

const AddNewUnit = ({ title }: { title: string }) => {
  // const formRef = useRef<HTMLFormElement>(null);
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
    // const formValues: HTMLFormControlsCollection = (formRef.current as HTMLFormElement).elements;
    const unit: Data = {};

    let isFilled: boolean = true;

    // for (const item of Object.values(formValues)) {
    //   const value = (item as HTMLInputElement).value;
    //   const name = (item as HTMLInputElement).name;
    //   if (item.nodeName === "BUTTON") {
    //     break;
    //   }
    //   else if (value === "") {
    //     // item.classList.add("warning");
    //     isFilled = false;
    //     continue;
    //   }
    //   else if (value !== "") {
    // item.classList.remove("warning");
    //     continue;
    //   }
    //   else if (name === "status") {
    // unit.status = statuses.find((status: Status) => status.title === value)!;
    // continue;
    //   }
    //   (unit[name as keyof Data] as string) = value;
    // }
    if (isFilled) {
      POST(title, (unit as unknown as Data));
    }
  };

  console.log(1234);


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object(validationSchema)}
      onSubmit={(values) => { console.log(values) }}
    >
      {formik => (
        <div className="table_section_add">
          <Form className="search-table_section_add">
            {info.map(({ name, placeholder }: { name: string, placeholder: string }) => {
              return (
                <div key={name} className="table_section-block-input">
                  <ErrorMessage
                    component="span"
                    name={name}
                    className="table_section-error" />
                  <Field
                    name={name}
                    placeholder={placeholder}
                    className="table_section-input"
                    type="text"
                  />
                </div >
              )
            })}
            <Field as="select" name="color" />
            <OptionalInfo title={title} />
            <Statuses />
            <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
          </Form >
        </div >
      )
      }
    </Formik >
  );
};

export default AddNewUnit;
function closeAddNewUnit(): any {
  throw new Error("Function not implemented.");
}

