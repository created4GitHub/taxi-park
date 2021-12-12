
import { put, takeLatest } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions/actions'


export default function* rootSaga() {
    yield takeLatest(types.DATA_RECEIVED, sagaWorker);
}

function* sagaWorker () {
    yield put(actions.dispatchData());
    yield put(actions.filterData())
}

function* requests () {
    const headers: HeadersInit = {
        Accept: "application/json",
        "X-Authorization":
            "api13ea3305989c1bbf4aa08d52b09fb239dbd0c27bd13daa1227861f55af160b34",
        "Content-Type": "application/json",
    };
}