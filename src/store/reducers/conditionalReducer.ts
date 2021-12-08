import { 
    ADD_NEW_FALSE, 
    ADD_NEW_TRUE, 
    IS_DATA_FILTERED, 
    IS_DATA_UPDATED, 
    RERENDER 
} from "../types";

const initialState = {
    isOpen: false,
    rerender: false,
    isDataUpdated: false,
    isDataFiltered: false
}

export default function conditionalReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case ADD_NEW_FALSE:
            return { ...state, isOpen: false }

        case ADD_NEW_TRUE:
            return { ...state, isOpen: true }

        case RERENDER:
            return { ...state, rerender: action.payload! };

        case IS_DATA_UPDATED:
            return { ...state, isDataUpdated: action.payload! };

        case IS_DATA_FILTERED:
            return { ...state, isDataFiltered: action.payload! };

        default:
            return state;
    }
}
