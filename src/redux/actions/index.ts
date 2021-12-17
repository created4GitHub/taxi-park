import { BodyType, Data } from "../../interfaces";
import {
    SET_IS_ADD_NEW_UNIT,
    FILTER_DATA,
    RESET_FILTER,
    DELETE_UNIT,
    ADD_NEW_UNIT,
    SWITCH_PAGE,
    FETCH_DATA,
    PATCH_DATA,
    SET_IS_PAGE_CAR
} from '../types'

export const getData = (pageName: string) => {
    return {
        type: FETCH_DATA,
        pageName
    }
}

export const switchPage = (pageName: string) => {
    return {
        type: SWITCH_PAGE,
        pageName
    }
}

export const addNewUnit = (pageName: string, isPost: boolean, data?: Data) => {
    return {
        type: ADD_NEW_UNIT,
        pageName,
        isPost,
        data
    }
}

export const removeUnit = (pageName: string, id: number) => {
    return {
        type: DELETE_UNIT,
        pageName,
        id
    }
}

export const patchData = (pageName: string, id: string, data: BodyType) => {
    return {
        type: PATCH_DATA,
        pageName,
        id,
        data
    }
}

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

export const setIsPageCar = (pageName: string) => {
    return {
        type: SET_IS_PAGE_CAR,
        payload: pageName === "car"
    }
}