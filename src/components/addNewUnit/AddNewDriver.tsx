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
import { validationDriver } from './validationForm/validation';
import { initialValuesDriver } from './initialValues/initial';

import "./addNewUnit.style.scss";

interface Props {
    title: string;
}

const AddNewDriver = ({ title }: Props) => {
    const statuses = useSelector(statusesSelector);
    const dispatch = useDispatch();
    const initialValues = initialValuesDriver;

    const mapedCarItems = useMemo(() => DRIVERINFO.map(({ name, placeholder }) => {
        return <FormikInput key={name} {...{ name, placeholder, type: "text" }} />
    }), [DRIVERINFO])

    const submit = (values: DriverFormik) => {
        const status = statuses.find((status: Status) => status.title === values.status)!;
        values.status = status;
        values.date_birth = new Date(values.date_birth).getTime();
        dispatch(addNewUnit(title, true, (values as Data)));
    }

    const submitCallback = useCallback((values) => submit(values), [statuses])
    
    const memoValid = useMemo(() => validationDriver(), [])
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={memoValid}
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