import React from "react";

import { ErrorMessage, Field } from "formik";
import { Years } from "../../../constants/years";
import DriverIDList from "../../driverListById/DriverListById";

interface Props {
    isCar: boolean;
}

const OptionalInfo = ({ isCar }: Props) => {

    return (
        isCar ?
            <>
                <ErrorMessage
                    component="span"
                    name="year"
                    className="table_section-error" />
                <Field as="select" name="year" className="filter_element-yearSelect">
                    <option value="none" hidden>Select</option>
                    {Years.map((item: number) => {
                        return (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        )
                    })}
                </Field>
                <DriverIDList />
            </>
            : <Field
                type="date"
                className='table_section-input-date'
                name="date_birth"
            />
    )
}

export default OptionalInfo;