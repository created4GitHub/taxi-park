import { all } from 'redux-saga/effects';

import { fetchDataWatcher } from './sagas/fetchData';
import { switchPageWatcher } from './sagas/switchPage';
import { addNewUnitWatcher } from './sagas/addNewUnit';
import { deleteUnitWatcher } from './sagas/deleteUnit';

export default function* rootSaga() {
    yield all([
        fetchDataWatcher(), switchPageWatcher(), addNewUnitWatcher(), deleteUnitWatcher()
    ]);
}