import { Data, ActionType } from "../../interfaces/interfaces";

export default function filteredDataReducer(state: Data[] = [], action: ActionType<Data[]>): Data[] {
    switch (action.type) {
        case "DATA_FILTERED":
            return action.payload!;
        default:
            return state;
    }
}