import { Data, Status } from "../../interfaces/interfaces";
import {
    DATA_RECEIVED,
    SET_IS_OPEN,
    IS_DATA_UPDATED,
    FILTER_DATA,
    RESET_FILTER
} from '../types'

export const dispatchData = ({ data, statuses }: { data: Data[], statuses: Status[] }) => {
    return {
        type: DATA_RECEIVED,
        data,
        statuses
    };
};

export const filterData = (payload: { [key: string]: string }) => {
    return {
        type: FILTER_DATA,
        payload,
    }
}

export const resetFilter = () => {
    return {
        type: RESET_FILTER,
    }
}

export const updateIsAddNewUnit = (payload: boolean) => {
    return {
        type: SET_IS_OPEN,
        payload
    };
};

export const dispatchIsDataUpdated = (isUpdated: boolean) => {
    return {
        type: IS_DATA_UPDATED,
        payload: isUpdated
    };
};
