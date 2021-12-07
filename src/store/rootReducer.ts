import { combineReducers } from "redux";

import isAddNewReducer from "./reducers/isAddNewReducer";
import statusReducer from "./reducers/statusReducer";
import dataReducer from "./reducers/dataReducer"
import filteredDataReducer from "./reducers/filteredDataReducer";
import isFilteredReducer from "./reducers/isFilteredReducer";
import IsUpdatedReducer from "./reducers/isUpdatedReducer";

const rootReducer = combineReducers({
    isAddNewReducer, statusReducer,
    dataReducer, filteredDataReducer,
    isFilteredReducer, IsUpdatedReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;