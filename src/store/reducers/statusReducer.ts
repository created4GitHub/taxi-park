import { Status, ActionType } from "../../interfaces/interfaces";

function statusReducer(state: Status[] = [{ title: "", code: "" }], action: ActionType<Status[]>): Status[] {
    switch (action.type) {
        case "STATUS_RECEIVED":
            return action.payload!;
        default:
            return state;
    }
}

export default statusReducer;
