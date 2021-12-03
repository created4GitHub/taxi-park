import { Status } from "../../interfaces";

export const openNewModal = () => {
    return {
        type: "ADD_NEW_TRUE"
    };
};

export const closeNewModal = () => {
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
