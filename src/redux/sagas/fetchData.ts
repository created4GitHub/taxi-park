import { put, takeLatest, call } from 'redux-saga/effects';

import { Data, Status } from '../../interfaces/interfaces';
import { GET, GET_STATUS } from "../../requests/requests";
import { DATA_RECEIVED, FETCH_DATA, IS_DATA_FETCHING, IS_DATA_FETCH_ERROR } from '../types';

export function* fetchData({ type, title }: { type: "FETCH_DATA", title: string }) {
    try {
        yield put({ type: IS_DATA_FETCHING, payload: true });
        const data: { data: Data[] } = yield call(GET, title);
        const statuses: { statuses: Status[] } = yield call(GET_STATUS, title);
        yield put({ type: IS_DATA_FETCHING, payload: false });
        yield put({ type: DATA_RECEIVED, data, statuses });
    }
    catch (e) {
        yield put({ type: IS_DATA_FETCH_ERROR });
    }
}

export function* fetchDataWatcher() {
    yield takeLatest(FETCH_DATA, fetchData);
}
