import { Data, Status } from "../../interfaces/interfaces";
import {
    DATA_RECEIVED,
    SET_IS_ADD_NEW_UNIT,
    IS_DATA_UPDATED,
    FILTER_DATA,
    RESET_FILTER,
    DELETE_UNIT,
    ADD_NEW_UNIT,
    SWITCH_PAGE,
    FETCH_DATA
} from '../types'

export const getData = (title: string) => {
    return {
        type: FETCH_DATA,
        title
    }
}

export const switchPage = (title: string) => {
    return {
        type: SWITCH_PAGE,
        title
    }
}

export const addNewUnit = (title: string) => {
    return {
        type: ADD_NEW_UNIT,
        title
    }
}

export const removeUnit = (title: string, id: number) => {
    return {
        type: DELETE_UNIT,
        title,
        id
    }
}

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

export const updateIsAddNewUnit = (payload: string | null) => {
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
