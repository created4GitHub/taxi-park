import { takeLatest, call, put } from 'redux-saga/effects';

import { BodyType } from '../../interfaces';
import { PATCH } from "../../requests/requests";
import { IS_DATA_UPDATED, PATCH_DATA } from '../types';

interface Params {
    type: typeof PATCH_DATA;
    pageName: string;
    id: string;
    data: BodyType
}

export function* patchData({ pageName, id, data }: Params) {

    try {
        yield call(PATCH, pageName, id, data);
        yield put({ type: IS_DATA_UPDATED });

    }
    catch (e) {
        console.log(e);
    }
}

export function* patchDataWatcher() {
    yield takeLatest(PATCH_DATA, patchData);
}
