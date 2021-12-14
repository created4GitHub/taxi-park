import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { CarInfo } from "../../constants/addNewSection";
import FormikInput from "../formikComponents/FormikInput";
import FormikSelect from "../formikComponents/FormikSelect"
import YearsSelect from "../YearsSelect/YearsSelect";
import DriverListById from '../DriverById/DriverById';
import Statuses from '../statuses/Statuses';
import AddNewButton from './addNewButton/AddNewButton';
import { addNewUnit, updateIsAddNewUnit } from "../../redux/actions/actions";
import { Status, Data } from '../../interfaces/interfaces';
import { RootState } from '../../redux/rootReducer';

import "./addNewUnit.style.scss";

export interface Car {
    mark: string;
    model: string;
    number: string;
    driver_id: string | number;
    year: string | number;
    status: {
        title: string;
        code: string;
    } | string;
}

interface Props {
    title: string;
}

const AddNewCar = ({ title }: Props) => {
    const statuses = useSelector((state: RootState) => state.statuses);
    const dispatch = useDispatch();
    const initialValues: Car = {
        mark: '',
        model: '',
        year: '',
        number: '',
        driver_id: '',
        status: '',
    };
    const setLength = (length: string): string => `Must be ${length} characters or less`;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                mark: Yup.string()
                    .max(10, setLength("1-10"))
                    .min(2, setLength("1-10"))
                    .required('Required'),
                model: Yup.string()
                    .max(10, setLength("1-15"))
                    .min(2, setLength("1-15"))
                    .required('Required'),
                number: Yup.string()
                    .max(8, 'Must be 8 characters or less')
                    .required('Required'),
                year: Yup.string()
                    .required('Required'),
                driver_id: Yup.string()
                    .required('Required'),
                status: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values) => {
                const status = statuses.find((status: Status) => status.title === values.status)!;
                values.status = status;
                dispatch(addNewUnit(title, true, (values as Data)));
            }}
        >
            <div className="table_section_add">
                <Form className="search-table_section_add">
                    {CarInfo.map(({ name, placeholder }) =>
                        <FormikInput key={name} {...{ name, placeholder, type: "text" }} />
                    )}
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