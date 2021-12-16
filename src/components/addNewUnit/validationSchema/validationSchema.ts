import * as Yup from 'yup';

const setLength = (length: string): string => `Must be ${length} characters`;

export const CAR_VALIDATION_SCHEMA = Yup.object({
    mark: Yup.string()
        .max(10, setLength("2-10"))
        .min(2, setLength("2-10"))
        .required('Required'),
    model: Yup.string()
        .max(10, setLength("2-15"))
        .min(2, setLength("2-15"))
        .required('Required'),
    number: Yup.string()
        .max(8, 'Must be 8 characters')
        .min(8, 'Must be 8 characters')
        .required('Required'),
    year: Yup.string()
        .required('Required'),
    driver_id: Yup.string()
        .required('Required'),
    status: Yup.string()
        .required('Required'),
});

export const DRIVER_VALIDATION_SCHEMA = Yup.object({
    first_name: Yup.string()
        .max(15, setLength("3-20"))
        .min(3, setLength("3-20"))
        .required('Required'),
    last_name: Yup.string()
        .max(15, setLength("3-15"))
        .min(3, setLength("3-15"))
        .required('Required'),
    date_birth: Yup.string()
        .required('Required'),
    status: Yup.string()
        .required('Required'),
});
