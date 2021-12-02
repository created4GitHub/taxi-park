export default function addNewReducer(state = false, action: { type: any; }) {
    switch (action.type) {
        case "ADD_NEW_TRUE":
            return true;
        case "ADD_NEW_FALSE":
            return false;
        default:
            return state;
    }
}