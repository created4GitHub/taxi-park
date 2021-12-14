import { put, takeLatest, call, fork } from 'redux-saga/effects';

import { ADD_NEW_UNIT, IS_DATA_UPDATED, RESET_FILTER, SET_IS_ADD_NEW_UNIT } from '../types';
import { fetchData } from './fetchData';
import { updateIsAddNewUnit } from "../actions/actions";

function* addNewUnit({ type, title }: { type: typeof ADD_NEW_UNIT, title: string }) {
    yield call(fetchData, { type: "FETCH_DATA", title });
    yield fork(updateIsAddNewUnit, title);
    yield put({ type: SET_IS_ADD_NEW_UNIT, payload: title });
    yield put({ type: IS_DATA_UPDATED, });
    yield put({ type: RESET_FILTER });
}

export function* addNewUnitWatcher() {
    yield takeLatest(ADD_NEW_UNIT, addNewUnit);
}

