import { combineReducers } from "redux";

import isAddNewReducer from "./reducers/isAddNewReducer";
import statusReducer from "./reducers/statusReducer";
import dataReducer from "./reducers/dataReducer"
import isFilteredReducer from "./reducers/isFilteredReducer";
import IsUpdatedReducer from "./reducers/isUpdatedReducer";
import rerenderReducer from "./reducers/rerenderReducer";

const rootReducer = combineReducers({
    isAddNewReducer, statusReducer,
    dataReducer, 
    isFilteredReducer, IsUpdatedReducer,
    rerenderReducer
});

export type RootState = ReturnType<typeof rootReducer> | any;

export default rootReducer;