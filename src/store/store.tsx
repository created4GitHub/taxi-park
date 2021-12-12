import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'

import RootReducer from "./rootReducer";
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga)

export default store;
