import { Data, Status } from "../../interfaces/interfaces";

export const openAddNewUnit = () => {
    return {
        type: "ADD_NEW_TRUE"
    };
};

export const closeAddNewUnit = () => {
    return {
        type: "ADD_NEW_FALSE"
    };
};

export const dispatchStatuses = (statuses: Status[]) => {
    return {
        type: "STATUS_RECEIVED",
        payload: statuses
    };
};

export const dispatchData = (data: Data[]) => {
    return {
        type: "DATA_RECEIVED",
        payload: data
    };
};

export const dispatchFilteredData = (data: Data[]) => {
    return {
        type: "DATA_FILTERED",
        payload: data
    };
};

export const setIsFilteredData = (isFiltered: boolean) => {
    return {
        type: "IS_DATA_FILTERED",
        payload: isFiltered
    };
};
