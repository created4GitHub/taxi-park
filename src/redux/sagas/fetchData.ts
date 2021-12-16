import { put, takeLatest, call, delay } from 'redux-saga/effects';

import { Data, Status } from '../../interfaces/interfaces';
import { GET, GET_STATUS } from "../../requests/requests";
import { DATA_RECEIVED, FETCH_DATA, IS_DATA_FETCHING, IS_DATA_FETCH_ERROR } from '../types';

interface Params {
    type: typeof FETCH_DATA;
    title: string;
}

export function* fetchData({ title }: Params) {
    try {
        yield delay(10);
        yield put({ type: IS_DATA_FETCHING, payload: true });
        const data: { data: Data[] } = yield call(GET, title);
        const statuses: { statuses: Status[] } = yield call(GET_STATUS, title);
        yield put({ type: DATA_RECEIVED, data, statuses });
    }
    catch (e) {
        yield put({ type: IS_DATA_FETCH_ERROR });
    }
    finally {
        yield put({ type: IS_DATA_FETCHING, payload: false });
    }
}

export function* fetchDataWatcher() {
    yield takeLatest(FETCH_DATA, fetchData);
}
