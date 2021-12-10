import { useField } from 'formik';

const MyTextInput = ({ ...props }: any) => {
    const [field, meta] = useField(props);
    return (
        <div className="table_section-block-input">
            {meta.touched && meta.error ? (
                <span className="table_section-error">{meta.error}</span>
            ) : null}
            <input className="table_section-input"
                {...field}
                {...props}
            />
        </div>

    );
}

export default MyTextInput;