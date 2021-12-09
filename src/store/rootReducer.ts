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
}

const RootReducer = (state: InitialState = initialState, { type, payload, data, statuses }: Action): InitialState => {
    switch (type) {
        case DATA_RECEIVED:
            return { ...state, data: data, statuses: statuses };

        case FILTER_DATA:
            const { name, value } = payload;
            const filterValues: Filter = state.filterValues;
            filterValues[name as keyof Filter] = value;

            let result = state.data;
            for (let key in filterValues) {
                result = result.filter(item => {
                    if (key === "status") {
                        return filterValues[key] === (item.status as Status).title;
                    } else {
                        return String(item[key as keyof Data]).toLocaleLowerCase()
                            .includes(filterValues[name as keyof Filter]!.toLocaleLowerCase());
                    }
                });
            }
            return { ...state, filteredData: result, isDataFiltered: true, isDataUpdated: !state.isDataUpdated };

        case RESET_FILTER:
            return {
                ...state, filteredData: state.data, isDataFiltered: false, filterValues: {}
            };

        case SET_IS_ADD_NEW_UNIT:
            return { ...state, isAddNewUnit: payload };

        case IS_DATA_UPDATED:
            return { ...state, isDataUpdated: !state.isDataUpdated };

        default:
            return state;
    }
}

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
