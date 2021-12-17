import React from 'react';
import { useField } from 'formik';
import { FormattedMessage } from 'react-intl';

interface Props {
    name: string;
    children: React.ReactNode | any;
}

const FormikSelect = ({ name, children }: Props) => {
    const [field, meta] = useField({ name, children });


    const check = <select
        className="table_section-tab-select">
        <option value="" hidden>check</option>
        <option>one more</option>
    </select>
    // console.log(children, check)
    const element = React.cloneElement(
        children,
        [{ ...field }, { ...{ name, children } }],
        children.props.children
    )
    // console.log(element)
    console.log(children, check.props.children)

    return (
        <div>
            {meta.touched && meta.error ? (
                <span className="table_section-error">
                    {<FormattedMessage id={meta.error} />}
                </span>
            ) : null}
            {element}
        </div>
    );
};

export default FormikSelect;
