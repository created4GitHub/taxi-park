import { Data, ActionType, Status } from "../interfaces/interfaces";
import {
    DATA_RECEIVED,
    FILTER_DATA,
    RESET_FILTER,
    UPDATE_IS_ADD_NEW,
    IS_DATA_UPDATED
} from './types'

interface FilterData {
    filterValues: string;
    title: string;
}

interface InitialState {
    data: never[];
    filteredData: never[];
    filterValues: {};
    statuses: never[];
    isAddNew: boolean;
    isRerender: boolean;
    isDataUpdated: boolean;
    isDataFiltered: boolean;
    resetFIlter: boolean;
}

const initialState: InitialState = {
    data: [],
    filteredData: [],
    filterValues: {},
    statuses: [],
    isAddNew: false,
    isDataUpdated: false,
    isDataFiltered: false,
    resetFIlter: false,
}

// interface 

export default function rootReducer(state: any = initialState, { payload, data, statuses, type }: { [key: string]: any }): any {
    switch (type) {
        case DATA_RECEIVED:
            return { ...state, data: data, statuses: statuses };

        case FILTER_DATA:
            const name = payload.name;
            const value = payload.value;
            const title = (payload as FilterData).title;
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
                        return filterValues[key] === (item.status as Status).title;
                    } else {
                        return String(item[key as keyof Data]).toLocaleLowerCase()
                            .includes(filterValues[key].toLocaleLowerCase());
                    }
                });
            }
            return { ...state, filteredData: result, isDataFiltered: true };

        case RESET_FILTER:
            return {
                ...state, filteredData: state.data, isDataFiltered: false,
                resetFIlter: true, filterValues: {}
            };

        case UPDATE_IS_ADD_NEW:
            return { ...state, isAddNew: payload };

        case IS_DATA_UPDATED:
            return { ...state, isDataUpdated: payload };

        default:
            return state;
    }
}

export type RootState = ReturnType<typeof rootReducer>;