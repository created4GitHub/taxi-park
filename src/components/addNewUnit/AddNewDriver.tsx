import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { DriverInfo } from "../../constants/addNewSection";
import FormikInput from "../formikComponents/FormikInput";
import FormikSelect from "../formikComponents/FormikSelect"
import Statuses from '../statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { updateIsAddNewUnit } from "../../store/actions/actions";
import { Status, Data } from '../../interfaces/interfaces';
import { RootState } from '../../store/rootReducer';
import { POST } from '../../requests/requests';

import "./addNewUnit.style.scss";

export interface Driver {
    first_name: string;
    last_name: string;
    date_birth: number | string;
    status: {
        title: string;
        code: string;
    } | string;
}


const AddNewDriver: React.FC = () => {
    const statuses = useSelector((state: RootState) => state.statuses);
    const dispatch = useDispatch();
    const initialValues: Driver = {
        first_name: "",
        last_name: "",
        date_birth: "",
        status: ""
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                first_name: Yup.string()
                    .max(15, 'Must be 20 characters or less')
                    .required('Required'),
                last_name: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required'),
                date_birth: Yup.string()
                    .required('Required'),
                status: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                const status = statuses.find((status: Status) => status.title === values.status)!;
                values.status = status;
                POST("driver", (values as Data));
                dispatch(updateIsAddNewUnit(null));
            }}
        >
            <div className="table_section_add">
                <Form className="search-table_section_add">
                    {DriverInfo.map(({ name, placeholder }) =>
                        <FormikInput {...{ name, placeholder, type: "text" }} />
                    )}
                    <FormikInput {...{ name: "date_birth", type: "date" }} />
                    <FormikSelect name="status">
                        <Statuses />
                    </FormikSelect>
                    <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
                </Form>
            </div>
        </Formik>
    );
};

export default AddNewDriver;