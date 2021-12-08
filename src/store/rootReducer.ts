import { Data, ActionType, Status, Filter } from "../interfaces/interfaces";
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
    name: string,
    value: string,
}

interface InitialState {
    data: Data[];
    filteredData: Data[];
    filterValues: Filter;
    statuses: Status[];
    isAddNew: FilterData | boolean;
    isRerender: boolean;
    isDataUpdated: FilterData | boolean;
    isDataFiltered: boolean;
    resetFIlter: boolean;
}



interface Action {
    payload: FilterData;
    data: Data[],
    statuses: Status[],
    type: string,
}

const initialState: InitialState = {
    data: [],
    filteredData: [],
    filterValues: {},
    statuses: [],
    isAddNew: false,
    isRerender: false,
    isDataUpdated: false,
    isDataFiltered: false,
    resetFIlter: false,
}

export default function rootReducer(state: InitialState = initialState, action: Action): InitialState {
    switch (action.type) {
        case DATA_RECEIVED:
            return { ...state, data: action.data, statuses: action.statuses };

        case FILTER_DATA:
            const name = action.payload.name;
            const value = action.payload.value;
            const title = action.payload.title;
            const filterValues: Filter = state.filterValues;
            filterValues.title = title;
            filterValues[name as keyof Filter] = value;
            
            let result = state.data;
            for (let key in filterValues) {
                if (key === "title") {
                    continue;
                }
                result = (result as Data[]).filter((item: Data) => {
                    if (key === "status") {
                        return filterValues[key] ===
                            (item.status as Status).title
                            ? true
                            : false;
                    }
                    else {
                        return String(item[key as keyof Data]).toLocaleLowerCase()
                            .includes(filterValues[name as keyof Filter]!.toLocaleLowerCase())
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

        case UPDATE_IS_ADD_NEW:
            return { ...state, isAddNew: action.payload };

        case IS_DATA_UPDATED:
            return { ...state, isDataUpdated: action.payload };

        default:
            return state;
    }
}

export type RootState = ReturnType<typeof rootReducer>;
