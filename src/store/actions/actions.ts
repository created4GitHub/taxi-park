import { title } from "process";
import { Data, Status } from "../../interfaces/interfaces";
import * as types from '../types'

export const dispatchData = ({ data, statuses }: { data: Data[], statuses: Status[] }) => {
    return {
        type: types.DATA_RECEIVED,
        data,
        statuses
    };
};

// export const dispatchDataFail = ({ data, statuses }: { data: Data[], statuses: Status[] }) => {
//     return {
//         type: types.DATA_FAIL,
//         data,
//         statuses
//     };
// };

// export const dispatchDataSuccess = ({ data, statuses }: { data: Data[], statuses: Status[] }) => {
//     return {
//         type: types.DATA_SUCCESS,
//         data,
//         statuses
//     };
// };

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

export const dispatchIsDataUpdatedSuccess = () => {
    return {
        type: types.IS_DATA_SUCCESS
    };
};

export const dispatchIsDataFailed= () => {
    return {
        type: types.IS_DATA_FAILED
    };
};