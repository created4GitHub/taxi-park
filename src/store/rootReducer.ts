import { Data, Status, Filter } from "../interfaces/interfaces";
import {
    DATA_RECEIVED,
    FILTER_DATA,
    RESET_FILTER,
    SET_IS_ADD_NEW_UNIT,
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
    isAddNewUnit: FilterData | boolean;
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
    isAddNewUnit: false,
    isDataUpdated: false,
    isDataFiltered: false,
    resetFIlter: false,
}

const RootReducer = (state: InitialState = initialState, action: Action): InitialState => {
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
                result = result.filter(item => {
                    if (key === "status") {
                        return filterValues[key] === (item.status as Status).title;
                    } else {
                        return String(item[key as keyof Data]).toLocaleLowerCase()
                            .includes(filterValues[name as keyof Filter]!.toLocaleLowerCase())
                    }
                });
            }
            return { ...state, filteredData: result, isDataUpdated: !state.isDataUpdated , isDataFiltered: true };

        case RESET_FILTER:
            return {
                ...state, filteredData: state.data, isDataFiltered: false,
                isDataUpdated: !state.isDataUpdated, resetFIlter: true, filterValues: {}
            };

        case SET_IS_ADD_NEW_UNIT:
            return { ...state, isAddNewUnit: action.payload };

        case IS_DATA_UPDATED:
            return { ...state, isDataUpdated: !state.isDataUpdated };

        default:
            return state;
    }
}

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
