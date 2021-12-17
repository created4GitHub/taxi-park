import { put, takeLatest, call } from 'redux-saga/effects';

import { fetchData } from './fetchData';
import { Data } from "../../interfaces";
import { POST } from '../../requests/requests';
import { ADD_NEW_UNIT, FETCH_DATA, IS_DATA_UPDATED, RESET_FILTER, SET_IS_ADD_NEW_UNIT } from '../types';

interface Params {
    type: typeof ADD_NEW_UNIT;
    pageName: string;
    isPost: boolean;
    data?: Data;
}

function* addNewUnit({ pageName, isPost, data }: Params) {
    yield call(fetchData, { type: FETCH_DATA, pageName });
    yield put({ type: SET_IS_ADD_NEW_UNIT, payload: pageName });
    if (isPost) {
        POST(pageName, data!);
        yield put({ type: IS_DATA_UPDATED });
        yield put({ type: RESET_FILTER });
        yield put({ type: SET_IS_ADD_NEW_UNIT, payload: null });
    }
}

export function* addNewUnitWatcher() {
    yield takeLatest(ADD_NEW_UNIT, addNewUnit);
}
