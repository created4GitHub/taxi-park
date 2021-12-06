import { ActionType } from "../../interfaces/interfaces";

export default function isFilteredReducer(state: boolean = false, action: ActionType<boolean>): boolean {
    switch (action.type) {
        case "IS_DATA_FILTERED":
            return action.payload!;
        default:
            return state;
    }
}