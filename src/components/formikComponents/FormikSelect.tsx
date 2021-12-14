import { useField } from 'formik';

const MySelect = ({ ...props }: any) => {
    const [field, meta] = useField(props);
    
    return (
        <div>
            {meta.touched && meta.error ? (
                <span className="table_section-error">{meta.error}</span>
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
