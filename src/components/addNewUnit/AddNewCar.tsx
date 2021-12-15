import { useCallback, useMemo } from 'react';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { CARINFO, Info } from "../../constants/addNewSection";
import FormikInput from "../formik/FormikInput";
import FormikSelect from "../formik/FormikSelect"
import YearsSelect from "../YearsSelect/YearsSelect";
import DriverListById from '../DriverById/DriverById';
import Statuses from '../statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { addNewUnit, updateIsAddNewUnit } from "../../redux/actions/actions";
import { Status, Data } from '../../interfaces/interfaces';
import { CAR_VALUES } from './initialValues/initialValues';
import { CAR_VALIDATION_SCHEMA } from './validationSchema/validationSchema';
import { statusesSelector } from '../../redux/selectors/selector';

import "./addNewUnit.style.scss";

interface Props {
    title: string;
}

const uuid = require("react-uuid");

const AddNewCar = ({ title }: Props) => {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);
    const initialValues = useMemo(() => CAR_VALUES, []);;
    const validationSchema = useMemo(() => CAR_VALIDATION_SCHEMA, []);

    const onSubmit = useCallback((values) => {
        const status = statuses.find((status: Status) => status.title === values.status)!;
        values.status = status;
        dispatch(addNewUnit(title, true, (values as Data)));
    }, [statuses]);

    const mapItems = (({ name, placeholder }: Info) =>
        <FormikInput key={uuid()} {...{ name, placeholder, type: "text" }} />)

    const mapedCarItems = useMemo(() => CARINFO.map(mapItems), [CARINFO]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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
