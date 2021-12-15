import { CarFormik, DriverFormik } from '../../../interfaces/interfaces';

export const initialValuesCar: CarFormik = {
    mark: '',
    model: '',
    year: '',
    number: '',
    driver_id: '',
    status: '',
};

export const initialValuesDriver: DriverFormik = {
    first_name: '',
    last_name: '',
    date_birth: '',
    status: '',
}
