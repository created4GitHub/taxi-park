import { useDispatch } from "react-redux";
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
    FILTER_DATA
} from '../types'

interface FilterData {
    filterValues: string;
    title: string;
}
const initialState = {
    data: [],
    filteredData: [],
    filterValues: {},
}

export default function dataReducer(state: any = initialState, action: any): any {
    switch (action.type) {
        case DATA_FILTERED:
            return { ...state, filteredData: [...(action.payload as Data[])] };
        case DATA_RECEIVED:
            return { ...state, data: [...(action.payload as Data[])] };
        case FILTER_DATA:
            const filterValues = state.filterValues;
            const name = action.payload.name;
            const value = action.payload.value;
            const title = (action.payload as FilterData).title;
            filterValues.title = title;
            filterValues[name] = value;
            let result = state.data;

            for (let key in filterValues) {
                if (key === "title") {
                    continue;
                }
                result = result.filter((item: Data) => {
                    if (key === "status") {
                        return (filterValues.current)[key] ===
                            (item.status as Status).title
                            ? true
                            : false;
                    }
                    else {
                        return String(item[key as keyof Data]).toLocaleLowerCase()
                            .includes(filterValues.current[key].toLocaleLowerCase())
                            ? true : false;
                    }
                });
            }
            return null;
            dispatch(dispatchIsDataFiltered(true));
            dispatch(dispatchFilteredData(result));
            dispatch(dispatchRerender(!isRerender));
        default:
            return state;
    }
}
