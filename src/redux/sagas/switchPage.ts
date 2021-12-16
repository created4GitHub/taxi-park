import { put, takeLatest, call } from 'redux-saga/effects';

import { FETCH_DATA, RESET_FILTER, SET_IS_ADD_NEW_UNIT, SWITCH_PAGE } from '../types';
import { fetchData } from './fetchData';

interface Params {
    type: typeof SWITCH_PAGE;
    title: string;
}

function* switchPage({ title }: Params) {
    yield call(fetchData, { type: FETCH_DATA, title });
    yield put({ type: RESET_FILTER });
    yield put({ type: SET_IS_ADD_NEW_UNIT, payload: null });
}

export function* switchPageWatcher() {
    yield takeLatest(SWITCH_PAGE, switchPage);
}
