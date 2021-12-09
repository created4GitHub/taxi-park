import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';

import AddNewButton from "./addNewButton/AddNewButton";
import Statuses from "../statuses/Statuses";
import { updateIsAddNewUnit } from "../../store/actions/actions";
import { POST } from "../../requests/requests";
import { RootState } from "../../store/rootReducer";
import { DriverInfo } from "../../constants/addNewSection";

import "./addNewUnit.style.scss";

const AddNewDriver = () => {
    const statuses = useSelector((state: RootState) => state.statuses);
    const dispatch = useDispatch();

    const initialValues: { [key: string]: string } = { date_birth: "", status: "" };
    const validationSchema: any = {
        status: Yup.string().required('Required'),
        date_birth: Yup.string().required('Required')
    }
    DriverInfo.forEach(({ name, length }: { name: string, length: number }) => {
        initialValues[name] = "";
        validationSchema[name] = Yup.string()
            .max(length, `Must be ${length} characters or less`)
            .required('Required');
    });
    console.log(initialValues)
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object(validationSchema)}
            onSubmit={(values) => { console.log(values) }}
        >
            {formik => (
                <div className="table_section_add">
                    <Form className="search-table_section_add">
                        {DriverInfo.map(({ name, placeholder }: { name: string, placeholder: string }) => {
                            return (
                                <div key={name} className="table_section-block-input">
                                    <ErrorMessage
                                        component="span"
                                        name={name}
                                        className="table_section-error" />
                                    <Field
                                        name={name}
                                        placeholder={placeholder}
                                        className="table_section-input"
                                        type="text"
                                    />
                                </div >
                            )
                        })}
                        <ErrorMessage
                            component="span"
                            name="date"
                            className="table_section-error" />
                        <Field
                            type="date"
                            className='table_section-input-date'
                            name="date_birth"
                        />
                        <ErrorMessage
                            component="span"
                            name="status"
                            className="table_section-error" />
                        <Field as="select" name="status" className="table_section-tab-select">
                            <option value="none" hidden>Select</option>
                            <Statuses />
                        </Field>
                        <AddNewButton updateIsAddNewUnit={updateIsAddNewUnit} />
                    </Form >
                </div >
            )
            }
        </Formik >
    );
};

export default AddNewDriver;
