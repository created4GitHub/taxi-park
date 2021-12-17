import { useMemo } from 'react';
import { Formik, Form } from 'formik';

import { CAR_INFO, Info } from "../../constants/addNewSection";
import FormikInput from "../formik/FormikInput";
import FormikSelect from "../formik/FormikSelect"
import YearsSelect from "../YearsSelect";
import DriversOptions from '../DriverOptions';
import Statuses from '../Statuses';
import AddNewButton from './AddNewButton';
import { updateIsAddNewUnit } from "../../redux/actions/";
import { Car, CAR_VALUES, Driver } from './initialValues';
import { CAR_VALIDATION_SCHEMA } from './validationSchema';

import "./addNewUnit.style.scss";

interface Props {
    submit: (values: Car | Driver) => void
}

const uuid = require("react-uuid");

const AddNewCar = ({ submit }: Props) => {
    const initialValues = CAR_VALUES;
    const validationSchema = CAR_VALIDATION_SCHEMA;

    const mapItems = (({ name, placeholder }: Info) => {
        return <FormikInput
            key={uuid()}
            {...{ name, placeholder, type: "text" }}
        />
    })

    const mapedCarItems = useMemo(() => CAR_INFO.map(mapItems), [CAR_INFO]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
        >
            <div className="table_section_add">
                <Form className="search-table_section_add">
                    {mapedCarItems}
                    <div className='table_section_add-select'>
                        <FormikSelect name="year">
                            {YearsSelect()}
                        </FormikSelect>
                    </div>
                    <div className='table_section_add-select'>
                        <FormikSelect name="driver_id" >
                            {DriversOptions()}
                        </FormikSelect>
                    </div>
                    <div className='table_section_add-select'>
                        <FormikSelect name="status">
                            {Statuses()}
                        </FormikSelect>
                    </div>
                    <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
                </Form>
            </div >
        </Formik >
    );
};

export default AddNewCar;
