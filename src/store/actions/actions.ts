import { Info, Status } from "../../interfaces";

export const openAddNewModal = () => {
    return {
        type: "ADD_NEW_TRUE"
    };
};

export const closeAddNewModal = () => {
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

export const dispatchData = (data: Info[]) => {
    return {
        type: "DATA_RECEIVED",
        payload: data
    };
};
