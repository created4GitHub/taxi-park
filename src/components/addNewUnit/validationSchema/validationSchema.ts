import * as Yup from 'yup';

const setLength = (length: string): string => `Must be ${length} characters or less`;

export const CAR_VALIDATION_SCHEMA = Yup.object({
    mark: Yup.string()
        .max(10, setLength("1-10"))
        .min(2, setLength("1-10"))
        .required('Required'),
    model: Yup.string()
        .max(10, setLength("1-15"))
        .min(2, setLength("1-15"))
        .required('Required'),
    number: Yup.string()
        .max(8, 'Must be 8 characters or less')
        .required('Required'),
    year: Yup.string()
        .required('Required'),
    driver_id: Yup.string()
        .required('Required'),
    status: Yup.string()
        .required('Required'),
})
