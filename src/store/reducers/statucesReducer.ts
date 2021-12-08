import { ActionType } from "../../interfaces/interfaces";
import { STATUS_RECEIVED } from "../types";

const initialState = {
    statusReceived: [{ title: "", code: "" }],
}

export default function statucesReducer(state: any = initialState, action: ActionType<boolean>): boolean {
    switch (action.type) {
        case STATUS_RECEIVED:
            return { ...state, statusReceived: action.payload!};

        default:
            return state;
    }
}
