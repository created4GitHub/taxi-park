import { combineReducers } from "redux";

import addNewReducer from "./reducers/addNewReducer";
import statusReducer from "./reducers/statusReducer";
import dataReducer from "./reducers/dataReducer"
import filteredDataReducer from "./reducers/filteredDataReducer";

const rootReducer = combineReducers({ addNewReducer, statusReducer, dataReducer, filteredDataReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;