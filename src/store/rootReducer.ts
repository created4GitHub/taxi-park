import { combineReducers } from "redux";

import conditionalReducer from "./reducers/conditionalReducer";
import dataReducer from "./reducers/dataReducer"
import statucesReducer from "./reducers/statucesReducer";

const rootReducer = combineReducers({
    conditionalReducer, 
    dataReducer,
    statucesReducer
});

export type RootState = ReturnType<typeof rootReducer> | any;

export default rootReducer;
