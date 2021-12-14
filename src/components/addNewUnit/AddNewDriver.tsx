import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { DriverInfo } from "../../constants/addNewSection";
import FormikInput from "../formikComponents/FormikInput";
import FormikSelect from "../formikComponents/FormikSelect"
import Statuses from '../statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { addNewUnit, updateIsAddNewUnit } from "../../redux/actions/actions";
import { Status, Data } from '../../interfaces/interfaces';
import { RootState } from '../../redux/rootReducer';
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

interface Props {
    title: string;
}

const AddNewDriver = ({ title }: Props) => {
    const statuses = useSelector((state: RootState) => state.statuses);
    const dispatch = useDispatch();
    const initialValues: Driver = {
        first_name: "",
        last_name: "",
        date_birth: "",
        status: ""
    };
    const setLength = (length: string): string => `Must be ${length} characters or less`;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                first_name: Yup.string()
                    .max(15, setLength("3-20"))
                    .min(3, setLength("3-20"))
                    .required('Required'),
                last_name: Yup.string()
                    .max(15, setLength("3-15"))
                    .min(3, setLength("3-15"))
                    .required('Required'),
                date_birth: Yup.string()
                    .required('Required'),
                status: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values) => {
                const status = statuses.find((status: Status) => status.title === values.status)!;
                values.status = status;
                values.date_birth = new Date(values.date_birth).getTime();
                dispatch(addNewUnit(title, true, (values as Data)));
            }}
        >
            <div className="table_section_add">
                <Form className="search-table_section_add">
                    {DriverInfo.map(({ name, placeholder }) =>
                        <FormikInput key={name} {...{ name, placeholder, type: "text" }} />
                    )}
                    <FormikInput {...{ name: "date_birth", type: "date" }} />

                    <div className='table_section_add-select'>
                        <FormikSelect name="status">
                            <Statuses />
                        </FormikSelect>
                    </div>
                    <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
                </Form>
            </div>
        </Formik>
    );
};

export default AddNewDriver;