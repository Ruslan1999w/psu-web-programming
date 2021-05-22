import store from '../store/store';
export const LOAD_BOOK_LIST = 'LOAD_BOOK_LIST';
export const PUT_BOOK_LIST = 'PUT_BOOK_LIST';

export function putBookList(data) {
    return {
        type: PUT_BOOK_LIST,
        payload: data,
    }
}

export function bookList() {
    return {
        type: LOAD_BOOK_LIST,
    };
}
