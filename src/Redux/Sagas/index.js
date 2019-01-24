import { all } from 'redux-saga/effects';
import addKoala from './koalaSaga'

export default function* rootSaga() {
    yield all([
        addKoala(),
    ])
}

