import { put, takeLatest, call } from 'redux-saga/effects';

import { REMOVE } from "../../requests/requests";
import { DELETE_UNIT, IS_DATA_UPDATED } from '../types';

function* deleteUnit({ type, title, id }: { type: typeof DELETE_UNIT, title: string, id: number }) {
    try {
        yield call(REMOVE, title, id);
        yield put({ type: DELETE_UNIT });
        yield put({ type: IS_DATA_UPDATED })
    }
    catch (e) {
        console.log(e);
    }
}

export function* deleteUnitWatcher() {
    yield takeLatest('DELETE_UNIT', deleteUnit);
}