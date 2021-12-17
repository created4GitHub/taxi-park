import { put, takeLatest, call } from 'redux-saga/effects';

import { REMOVE } from "../../requests/requests";
import { DELETE_UNIT, IS_DATA_UPDATED } from '../types';

interface Params {
    type: typeof DELETE_UNIT;
    pageName: string;
    id: number;
}

function* deleteUnit({ pageName, id }: Params) {
    yield call(REMOVE, pageName, id);
    yield put({ type: IS_DATA_UPDATED });
}

export function* deleteUnitWatcher() {
    yield takeLatest(DELETE_UNIT, deleteUnit);
}
