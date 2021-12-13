import { compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import { sagaMiddleware } from './saga'

import RootReducer from "./rootReducer";


const store = createStore(
    RootReducer, 
    composeWithDevTools()
)

export default store;
