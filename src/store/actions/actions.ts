import { Data, Status } from "../../interfaces/interfaces";
import {
    DATA_RECEIVED,
    SET_IS_ADD_NEW_UNIT,
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
        type: SET_IS_ADD_NEW_UNIT,
        payload
    };
};

export const dispatchIsDataUpdated = () => {
    return {
        type: IS_DATA_UPDATED
    };
};
