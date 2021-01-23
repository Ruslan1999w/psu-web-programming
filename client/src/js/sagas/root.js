import { all } from 'redux-saga/effects';
import { auth } from './userSaga';
import { book } from './bookSaga'


export default function* rootSaga() {
    yield all([
        ...auth,
        ...book,
    ]);
}
