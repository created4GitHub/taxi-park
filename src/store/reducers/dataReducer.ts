import { Data, ActionType } from "../../interfaces/interfaces";
import { DATA_FILTERED, DATA_RECEIVED } from "../types";

const initialState = {
    item: [],
    data: [],
}

export default function dataReducer(state: any = initialState, action: ActionType<Data[]>): Data[] {
    switch (action.type) {
        case DATA_FILTERED:
            return { ...state, data: [...action.payload!] }
            
        case DATA_RECEIVED:
            return { ...state, item: [...action.payload!] }
            
        default:
            return state;
    }
}
