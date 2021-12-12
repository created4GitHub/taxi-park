import { Data, Status } from "../../interfaces/interfaces";
// import {
//     DATA_RECEIVED,
//     SET_IS_ADD_NEW_UNIT,
//     IS_DATA_UPDATED,
//     FILTER_DATA,
//     RESET_FILTER
// } from '../types'
import * as types from '../types'

export const dispatchData = ({ data, statuses }: { data: Data[], statuses: Status[] }) => {
    return {
        type: types.DATA_RECEIVED,
        data,
        statuses
    };
};

export const filterData = (payload: { [key: string]: string }) => {
    return {
        type: types.FILTER_DATA,
        payload,
    }
}

export const resetFilter = () => {
    return {
        type: types.RESET_FILTER,
    }
}

export const updateIsAddNewUnit = (payload: string | null) => {
    return {
        type: types.SET_IS_ADD_NEW_UNIT,
        payload
    };
};

export const dispatchIsDataUpdated = () => {
    return {
        type: types.IS_DATA_UPDATED
    };
};