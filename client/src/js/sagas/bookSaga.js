import axios from "axios";
import { takeEvery, put, select } from 'redux-saga/effects';
import {putBookList} from "../actions/bookActions";

export function* loadBooks() {
    console.log('load_books');
    const response = yield axios.get('/catalog/book/');
    console.log(response);
    yield put(putBookList(response.data));
}

export const book = [
    takeEvery('LOAD_BOOK_LIST', loadBooks)
];
