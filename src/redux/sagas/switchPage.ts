import { put, takeLatest, call } from 'redux-saga/effects';

import { IS_DATA_UPDATED, RESET_FILTER, SET_IS_ADD_NEW_UNIT } from '../types';
import { fetchData } from './fetchData';

function* switchPage({ type, title }: { type: 'SWITCH_PAGE', title: string }) {
    yield call(fetchData, { type: 'FETCH_DATA', title });
    yield put({ type: RESET_FILTER });
    yield put({ type: SET_IS_ADD_NEW_UNIT, payload: null });
    yield put({ type: IS_DATA_UPDATED, });
}

export function* switchPageWatcher() {
    yield takeLatest('SWITCH_PAGE', switchPage);
}
