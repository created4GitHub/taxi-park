import React from 'react';
import { useField } from 'formik';
import { FormattedMessage } from 'react-intl';

interface Props {
    name: string;
    children: React.ReactNode | any;
}

const FormikSelect = ({ name, children }: Props) => {
    const [field, meta] = useField({ name, children });

    const element = React.cloneElement(
        children,
        field,
        children.props.children
    )

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
