import { combineReducers } from "redux";

import addNewReducer from "./addNewReducer";

const rootReducer = combineReducers({ addNewReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;