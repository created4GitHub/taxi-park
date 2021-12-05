import { Data, ActionType } from "../../interfaces/interfaces";

const defaultState = [{ status: { title: "", code: "" } }];
export default function dataReducer(state: Data[] = [], action: ActionType<Data[]>): Data[] {
    switch (action.type) {
        case "DATA_RECEIVED":
            return action.payload!;
        default:
            return state;
    }
}