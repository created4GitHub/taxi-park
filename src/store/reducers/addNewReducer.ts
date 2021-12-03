export default function addNewReducer(state: boolean = false, action: { type: string }) {
    switch (action.type) {
        case "ADD_NEW_TRUE":
            return true;
        case "ADD_NEW_FALSE":
            return false;
        default:
            return state;
    }
}