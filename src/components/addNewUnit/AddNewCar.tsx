import { SyntheticEvent, useMemo } from 'react';
import { Formik, Form } from 'formik';

import { CAR_INFO, Info } from "../../constants/addNewSection";
import FormikInput from "../formik/FormikInput";
import FormikSelect from "../formik/FormikSelect"
import YearsSelect from "../YearsSelect/YearsSelect";
import DriversOptions from '../DriverOptions/DriversOptions';
import Statuses from '../Statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { updateIsAddNewUnit } from "../../redux/actions/actions";
import { CAR_VALUES } from './initialValues';
import { CAR_VALIDATION_SCHEMA } from './validationSchema';

import "./addNewUnit.style.scss";
import { TypeOf } from 'yup';

interface Props {
    submit: SyntheticEvent<Element, Event>
}

const uuid = require("react-uuid");

const AddNewCar = ({ submit }: any) => {
    // console.log(submit);
    
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
                            <YearsSelect />
                        </FormikSelect>
                    </div>
                    <div className='table_section_add-select'>
                        <FormikSelect name="driver_id" >
                            <DriversOptions />
                        </FormikSelect>
                    </div>
                    <div className='table_section_add-select'>
                        <FormikSelect name="status">
                            <Statuses />
                        </FormikSelect>
                    </div>
                    <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
                </Form>
            </div >
        </Formik >
    );
};

export default AddNewCar;
