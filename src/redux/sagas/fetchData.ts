import { put, takeLatest, call } from 'redux-saga/effects';

import { Data, Status } from '../../interfaces/interfaces';
import { GET, GET_STATUS } from "../../requests/requests";
import { DATA_RECEIVED, FETCH_DATA } from '../types';

export function* fetchData({ type, title }: { type: "FETCH_DATA", title: string }) {
    try {
        const data: { data: Data[] } = yield call(GET, title);
        const statuses: { statuses: Status[] } = yield call(GET_STATUS, title);
        yield put({ type: DATA_RECEIVED, data, statuses });
    }
    catch (e) {
        console.log(e);
    }
}

export function* fetchDataWatcher() {
    yield takeLatest(FETCH_DATA, fetchData);
}