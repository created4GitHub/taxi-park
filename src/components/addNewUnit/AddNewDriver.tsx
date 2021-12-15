import { useCallback, useMemo } from 'react';

import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { DRIVERINFO } from "../../constants/addNewSection";
import FormikInput from "../formikComponents/FormikInput";
import FormikSelect from "../formikComponents/FormikSelect"
import Statuses from '../statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { addNewUnit, updateIsAddNewUnit } from "../../redux/actions/actions";
import { Status, Data, DriverFormik } from '../../interfaces/interfaces';
import { statusesSelector } from '../../redux/selectors/selector';
import { CAR_VALIDATION_SCHEMA } from './validationSchema/validationSchema';
import { initialValuesDriver } from './initialValues/initial';

import "./addNewUnit.style.scss";
// import { useIntl } from 'react-intl';

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

const uuid = require("react-uuid");

const AddNewDriver = ({ title }: Props) => {
    const statuses = useSelector(statusesSelector);
    const dispatch = useDispatch();
    const initialValues = initialValuesDriver;
    const validationSchema = useMemo(() => CAR_VALIDATION_SCHEMA, []);


    const mapedCarItems = useMemo(() => DRIVERINFO.map(({ name, placeholder }) => {
        return <FormikInput key={uuid()} {...{ name, placeholder, type: "text" }} />
    }), [DRIVERINFO])

    const submit = (values: DriverFormik) => {
        console.log(values);
        
        const status = statuses.find((status: Status) => status.title === values.status)!;
        values.status = status;
        values.date_birth = new Date(values.date_birth).getTime();
        dispatch(addNewUnit(title, true, (values as Data)));
    }

    const submitCallback = useCallback((values) => submit(values), [statuses])
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitCallback}
        >
            <div className="table_section_add">
                <Form className="search-table_section_add">
                    {mapedCarItems}
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