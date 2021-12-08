import { Data, ActionType } from "../../interfaces/interfaces";

const initialState = {
    item: [],
    data: [],
}

export default function dataReducer(state: any = initialState, action: ActionType<Data[]>): Data[] {
    console.log(state);
    
    switch (action.type) {
        case "DATA_FILTERED":
            return { ...state, data: state.data = [...action.payload!] }
        //     // return action.payload!;
        case "DATA_RECEIVED":
            return { ...state, item: state.item = [...action.payload!] }
            // return action.payload!;
        default:
            return state;
    }
}

