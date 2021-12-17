import { useField } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';

interface Props {
    name: string;
    placeholder?: string;
    type: string;
}

const FormikInput = ({ name, placeholder, type }: Props) => {
    const [field, meta] = useField({ name, placeholder, type });
    const intl = useIntl();

    return (
        <div className="table_section-block-input">
            {meta.touched && meta.error ? (
                <span className="table_section-error">
                    {<FormattedMessage id={meta.error} />}
                </span>
            ) : null}
            <input className="table_section-input"
                placeholder={placeholder && intl.formatMessage({ id: placeholder })}
                type={type}
                {...field}
            />
        </div>

    );
}

export default FormikInput;
