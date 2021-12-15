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
import { Status, Data } from '../../interfaces/interfaces';
import { RootState } from '../../redux/rootReducer';
import { statusesSelector } from '../../redux/selectors/selector'
import { CAR_VALUES } from './initValues/initValues';
import { CAR_VALIDATION_SCHEMA } from './validationSchema/validationSchema';

import "./addNewUnit.style.scss";



interface Props {
    title: string;
}

const uuid = require("react-uuid");

const AddNewCar = ({ title }: Props) => {
    const statuses = useSelector((statusesSelector));
    const dispatch = useDispatch();
    const initialValues = useMemo(() => CAR_VALUES, []);;
    const validationSchema = useMemo(() => CAR_VALIDATION_SCHEMA, []);
    const onSubmit = useCallback((values) => {
        const status = statuses.find((status: Status) => status.title === values.status)!;
        values.status = status;
        dispatch(addNewUnit(title, true, (values as Data)));
    }, [statuses]);

    const memoizedCarInfo = useMemo(() => CARINFO.map(({ name, placeholder }) =>
    <FormikInput key={uuid()} {...{ name, placeholder, type: "text" }} />
    ), []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className="table_section_add">
                <Form className="search-table_section_add">
                    {memoizedCarInfo}
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
