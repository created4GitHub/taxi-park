import { useField } from 'formik';
import { FormattedMessage } from 'react-intl';

interface Props {
    name: string;
    children: React.ReactNode;
}

const FormikSelect = ({ name, children }: Props) => {
    const [field, meta] = useField({ name, children });



    return (
        <div>
            {meta.touched && meta.error ? (
                <span className="table_section-error">
                    {<FormattedMessage id={meta.error} />}
                </span>
            ) : null}
            <select
                {...field}
                {...{ name, children }}
                className="table_section-tab-select"
            />
        </div>
    );
};

export default FormikSelect;
