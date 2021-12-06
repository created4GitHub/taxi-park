import { combineReducers } from "redux";

import addNewReducer from "./reducers/addNewReducer";
import statusReducer from "./reducers/statusReducer";
import dataReducer from "./reducers/dataReducer"

const rootReducer = combineReducers({ addNewReducer, statusReducer, dataReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;