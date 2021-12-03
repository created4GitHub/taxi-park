import { combineReducers } from "redux";

import addNewReducer from "./addNewReducer";
import statusReducer from "./statusReducer";

const rootReducer = combineReducers({ addNewReducer, statusReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;