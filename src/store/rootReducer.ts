import { combineReducers } from "redux";

import dataReducer from "./reducers/dataReducer"
import statucesReducer from "./reducers/statucesReducer";

const rootReducer = combineReducers({ dataReducer, statucesReducer });

export type RootState = ReturnType<typeof rootReducer> | any;

export default rootReducer;
