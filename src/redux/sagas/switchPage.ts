import { put, takeLatest, call } from 'redux-saga/effects';

import { fetchData } from './fetchData';
import { FETCH_DATA, RESET_FILTER, SET_IS_ADD_NEW_UNIT, SWITCH_PAGE } from '../types';

interface Params {
    type: typeof SWITCH_PAGE;
    pageName: string;
}

function* switchPage({ pageName }: Params) {
    yield call(fetchData, { type: FETCH_DATA, pageName });
    yield put({ type: RESET_FILTER });
    yield put({ type: SET_IS_ADD_NEW_UNIT, payload: null });
}

export function* switchPageWatcher() {
    yield takeLatest(SWITCH_PAGE, switchPage);
}
