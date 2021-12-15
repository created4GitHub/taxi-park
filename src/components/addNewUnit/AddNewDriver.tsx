import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';

import FormikInput from "../formik/FormikInput";
import FormikSelect from "../formik/FormikSelect"
import Statuses from '../statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { addNewUnit, updateIsAddNewUnit } from "../../redux/actions/actions";
import { Status, Data } from '../../interfaces/interfaces';
import { RootState } from '../../redux/rootReducer';
import { DRIVER_VALIDATION_SCHEMA } from './validationSchema/validationSchema';
import { DRIVER_VALUES } from './initialValues/initialValues';
import { DRIVER_INFO, Info } from '../../constants/addNewSection';

import "./addNewUnit.style.scss";
import { statusesSelector } from '../../redux/selectors/selector';

interface Props {
    title: string;
}

const uuid = require("react-uuid");

const AddNewDriver = ({ title }: Props) => {
    const dispatch = useDispatch();
    const statuses = useSelector(statusesSelector);
    const initialValues = useMemo(() => DRIVER_VALUES, []);;
    const validationSchema = useMemo(() => DRIVER_VALIDATION_SCHEMA, []);

    const onSubmit = useCallback((values) => {
        const status = statuses.find((status: Status) => status.title === values.status)!;
        values.status = status;
        values.date_birth = new Date(values.date_birth).getTime();
        dispatch(addNewUnit(title, true, (values as Data)));
    }, [statuses]);

    const mapItems = (({ name, placeholder }: Info) =>
        <FormikInput key={uuid()} {...{ name, placeholder, type: "text" }} />)

    const mapedCarItems = useMemo(() => DRIVER_INFO.map(mapItems), [DRIVER_INFO]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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