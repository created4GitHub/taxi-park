import { Formik, Form } from 'formik';
import { useMemo } from 'react';

import FormikInput from "../formik/FormikInput";
import FormikSelect from "../formik/FormikSelect"
import Statuses from '../Statuses';
import AddNewButton from './AddNewButton';
import { DRIVER_INFO, Info } from '../../constants/addNewSection';
import { DRIVER_VALIDATION_SCHEMA } from './validationSchema';
import { Car, Driver, DRIVER_VALUES } from './initialValues';
import { updateIsAddNewUnit } from "../../redux/actions";

import "./addNewUnit.style.scss";

interface Props {
    submit: (values: Car | Driver) => void
}

const uuid = require("react-uuid");

const AddNewDriver = ({ submit }: Props) => {
    const initialValues = useMemo(() => DRIVER_VALUES, []);
    const validationSchema = useMemo(() => DRIVER_VALIDATION_SCHEMA, []);

    const mapItems = (({ name, placeholder }: Info) =>
        <FormikInput
            key={uuid()}
            {...{ name, placeholder, type: "text" }}
        />)

    const mappedDriverItems = useMemo(() => DRIVER_INFO.map(mapItems), [DRIVER_INFO]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            <div className="table_section_add">
                <Form className="search-table_section_add">
                    {mappedDriverItems}
                    <FormikInput name="date_birth" type="date" />
                    <div className='table_section_add-select'>
                        <FormikSelect name="status">
                            {Statuses()}
                        </FormikSelect>
                    </div>
                    <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
                </Form>
            </div>
        </Formik>
    );
};

export default AddNewDriver;