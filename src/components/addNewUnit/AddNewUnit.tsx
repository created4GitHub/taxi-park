import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";
import { updateIsAddNewUnit } from "../../store/actions/actions";
import { POST } from "../../requests/requests";
import { Data, Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";
import { CarInfo, DriverInfo } from "../../constants/addNewSection"
import OptionalInfo from "./optionalInfo/OptionalInfo";

import "./addNewUnit.style.scss";

const AddNewUnit = ({ title }: { title: string }) => {
  const statuses = useSelector((state: RootState) => state.statuses);
  const dispatch = useDispatch();
  const isCar = title === "car";
  const info = isCar ? CarInfo : DriverInfo;

  const initialValues: { [key: string]: string } = {};
  const validationSchema: any = {}
  info.forEach(({ name, length }: { name: string, length: number }) => {
    initialValues[name] = "";
    validationSchema[name] = Yup.string()
      .max(length, `Must be ${length} characters or less`)
      .required('Required');
  });
  const check = {
    model: Yup.string().required('Required'), year: Yup.string().required('Required')
  }

  return (
    <Formik
      initialValues={{ ...initialValues, year: "" }}
      validationSchema={Yup.object(check)}
      onSubmit={(values) => { console.log(values) }}
    >
      {formik => (
        <div className="table_section_add">
          {console.log(formik.errors)}
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
            <OptionalInfo isCar={isCar} />
            <Field as="select" name="status" className="table_section-tab-select">
              <Statuses />
            </Field>
            <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
          </Form >
        </div >
      )
      }
    </Formik >
  );
};

export default AddNewUnit;
