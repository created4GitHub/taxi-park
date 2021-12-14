import { put, takeLatest, call } from 'redux-saga/effects';

import { RESET_FILTER, SET_IS_ADD_NEW_UNIT } from '../types';
import { fetchData } from './fetchData';

function* switchPage({ type, title }: { type: 'SWITCH_PAGE', title: string }) {
    yield call(fetchData, { type: 'FETCH_DATA', title });
    yield put({ type: RESET_FILTER });
    yield put({ type: SET_IS_ADD_NEW_UNIT, payload: null });
}

export function* switchPageWatcher() {
    yield takeLatest('SWITCH_PAGE', switchPage);
}