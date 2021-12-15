interface Car {
    mark: string;
    model: string;
    number: string;
    driver_id: string | number;
    year: string | number;
    status: {
        title: string;
        code: string;
    } | string;
}

export const CAR_VALUES: Car = {
    mark: '',
    model: '',
    year: '',
    number: '',
    driver_id: '',
    status: '',
};