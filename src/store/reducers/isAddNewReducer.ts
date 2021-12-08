export default function isAddNewReducer(state: boolean = false, action: { type: string }) {
    switch (action.type) {
        case "ADD_NEW_FALSE":
            return false;
        default:
            return state;
    }
}