import { Status, ActionType } from "../../interfaces";

export default function statusReducer(state: Status[] = [{ title: "", code: "" }], action: ActionType<Status[]>): Status[] {
    switch (action.type) {
        case "STATUS_RECEIVED":
            return action.payload!;
        default:
            return state;
    }
}