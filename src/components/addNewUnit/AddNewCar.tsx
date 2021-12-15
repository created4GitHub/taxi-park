import { useCallback, useMemo } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { CARINFO } from "../../constants/addNewSection";
import FormikInput from "../formikComponents/FormikInput";
import FormikSelect from "../formikComponents/FormikSelect"
import YearsSelect from "../YearsSelect/YearsSelect";
import DriverListById from '../DriverById/DriverById';
import Statuses from '../statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { addNewUnit, updateIsAddNewUnit } from "../../redux/actions/actions";
import { Status, Data, CarFormik } from '../../interfaces/interfaces';
import { validationCar } from './validationForm/validation'
import { statusesSelector } from '../../redux/selectors/selector';
import { initialValuesCar } from './initialValues/initial';

import "./addNewUnit.style.scss";

interface Props {
    title: string;
}

const AddNewCar = ({ title }: Props) => {
    const statuses = useSelector((statusesSelector));
    const dispatch = useDispatch();
    const initialValues = initialValuesCar;
    
    const mapedCarItems = useMemo(() => CARINFO.map(({ name, placeholder }) => {
        return <FormikInput key={name} {...{ name, placeholder, type: "text" }} />
    }), [CARINFO])

    const submit = (values: CarFormik) => {
        const status = statuses.find((status: Status) => status.title === values.status)!;
        values.status = status;
        dispatch(addNewUnit(title, true, (values as Data)));
    }

    const callbackSubmit = useCallback((values) => submit(values), [statuses])

    const memoValid = useMemo(() => validationCar(), [])

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={memoValid}
            onSubmit={callbackSubmit}
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
                        <FormikSelect name="driver_id">
                            <DriverListById />
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
