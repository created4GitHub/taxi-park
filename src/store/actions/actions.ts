import { Data, Status } from "../../interfaces/interfaces";
import {
    ADD_NEW_TRUE,
    ADD_NEW_FALSE,
    DATA_RECEIVED,
    DATA_FILTERED,
    IS_DATA_FILTERED,
    IS_DATA_UPDATED,
    FILTER_DATA,
    STATUS_RECEIVED,
    RERENDER,
    RESET_FILTER
} from '../types'

export const openAddNewUnit = () => {
    return {
        type: ADD_NEW_TRUE
    };
};

export const closeAddNewUnit = () => {
    return {
        type: ADD_NEW_FALSE
    };
};

export const dispatchStatuses = (statuses: Status[]) => {
    return {
        type: STATUS_RECEIVED,
        payload: statuses
    };
};

export const dispatchData = (data: Data[]) => {
    return {
        type: DATA_RECEIVED,
        payload: data
    };
};

export const dispatchFilteredData = (data: Data[]) => {
    return {
        type: DATA_FILTERED,
        payload: data
    };
};

export const dispatchIsDataFiltered = (isFiltered: boolean) => {
    return {
        type: IS_DATA_FILTERED,
        payload: isFiltered
    };
};

export const dispatchIsDataUpdated = (isUpdated: boolean) => {
    return {
        type: IS_DATA_UPDATED,
        payload: isUpdated
    };
};

export const dispatchRerender = (isRerender: boolean) => {
    return {
        type: RERENDER,
        payload: isRerender
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