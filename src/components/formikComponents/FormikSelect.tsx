import { useField } from 'formik';
import { FormattedMessage } from 'react-intl';

const MySelect = ({ ...props }: any) => {
    const [field, meta] = useField(props);
    
    return (
        <div>
            {meta.touched && meta.error ? (
                <span className="table_section-error">{<FormattedMessage id={meta.error} /> }</span>
            ) : null}
            <select
                {...field}
                {...props}
                className="table_section-tab-select"
            />
        </div>
    );
};

export default MySelect;
