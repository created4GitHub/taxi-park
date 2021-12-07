import { ActionType } from "../../interfaces/interfaces";

export default function IsUpdatedReducer(state: boolean = false, action: ActionType<boolean>): boolean {
    switch (action.type) {
        case "IS_DATA_UPDATED":
            return action.payload!;
        default:
            return state;
    }
}