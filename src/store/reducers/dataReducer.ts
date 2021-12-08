import { stat } from "fs";
import { Data, ActionType, Status } from "../../interfaces/interfaces";
import {
    ADD_NEW_TRUE,
    ADD_NEW_FALSE,
    STATUS_RECEIVED,
    DATA_RECEIVED,
    DATA_FILTERED,
    IS_DATA_FILTERED,
    IS_DATA_UPDATED,
    RERENDER,
    FILTER_DATA,
    RESET_FILTER
} from '../types'


interface FilterData {
    filterValues: string;
    title: string;
}
const initialState = {
    data: [],
    filteredData: [],
    filterValues: {},
    isAddedNew: false,
    isRerender: false,
    isDataUpdated: false,
    isDataFiltered: false,
    resetFIlter: false,
}

export default function dataReducer(state: any = initialState, action: any): any {
    switch (action.type) {
        case DATA_RECEIVED:
            return { ...state, data: [...(action.payload as Data[])] };

        case FILTER_DATA:
            const name = action.payload.name;
            const value = action.payload.value;
            const title = (action.payload as FilterData).title;
            const filterValues = state.filterValues;
            filterValues.title = title;
            filterValues[name] = value;
            let result = state.data;
            for (let key in filterValues) {
                if (key === "title") {
                    continue;
                }
                result = result.filter((item: Data) => {
                    if (key === "status") {
                        return filterValues[key] ===
                            (item.status as Status).title
                            ? true
                            : false;
                    }
                    else {
                        return String(item[key as keyof Data]).toLocaleLowerCase()
                            .includes(filterValues[key].toLocaleLowerCase())
                            ? true : false;
                    }
                });
            }
            return { ...state, filteredData: result, isRerender: !state.isRerender, isDataFiltered: true };

        case RESET_FILTER:
            return {
                ...state, filteredData: state.data, isDataFiltered: false,
                isRerender: !state.isRerender, resetFIlter: true, filterValues: {}
            };

        case ADD_NEW_FALSE:
            return { ...state, isOpen: false };

        case ADD_NEW_TRUE:
            return { ...state, isOpen: true };

        case RERENDER:
            return { ...state, rerender: action.payload! };

        case IS_DATA_UPDATED:
            return { ...state, isDataUpdated: action.payload! };

        case IS_DATA_FILTERED:
            return { ...state, isDataFiltered: action.payload! };

        case DATA_FILTERED:
            return { ...state, filteredData: [...(action.payload as Data[])] };

        default:
            return state;
    }
}
