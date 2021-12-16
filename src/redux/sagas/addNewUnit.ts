import { put, takeLatest, call } from 'redux-saga/effects';

import { ADD_NEW_UNIT, FETCH_DATA, IS_DATA_UPDATED, RESET_FILTER, SET_IS_ADD_NEW_UNIT } from '../types';
import { fetchData } from './fetchData';
import { Data } from "../../interfaces";
import { POST } from '../../requests/requests';

interface Params {
    type: typeof ADD_NEW_UNIT;
    title: string;
    isPost: boolean;
    data?: Data;
}

function* addNewUnit({ title, isPost, data }: Params) {
    console.log("s")
    yield call(fetchData, { type: FETCH_DATA, title });
    yield put({ type: SET_IS_ADD_NEW_UNIT, payload: title });
    if (isPost) {
        POST(title, data!);
        yield put({ type: IS_DATA_UPDATED });
        yield put({ type: RESET_FILTER });
        yield put({ type: SET_IS_ADD_NEW_UNIT, payload: null });
    }
}

export function* addNewUnitWatcher() {
    yield takeLatest(ADD_NEW_UNIT, addNewUnit);
}
