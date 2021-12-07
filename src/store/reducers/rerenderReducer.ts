import { ActionType } from "../../interfaces/interfaces";

export default function rerenderReducer(state: boolean = false, action: ActionType<boolean>): boolean {
    switch (action.type) {
        case "RERENDER":
            return action.payload!;
        default:
            return state;
    }
}
