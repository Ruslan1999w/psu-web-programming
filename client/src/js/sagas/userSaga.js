import axios from 'axios';
import {takeEvery, put} from "redux-saga/effects";
import {getAllUsersSuccess, setUser} from '../actions/userActions';

export function* authUser(info) {
    console.log('auth saga');
}

export function* login(info) {
    try {
        const response = yield axios.post('/login', info.payload );
        yield put(setUser(response.data))
    } catch (e) {
        console.log(e);
    }
}

export function* logoutFetch(info) {
    try {
        const response = yield axios.post('/logout');
        if (response.data === 'OK') {
            yield put(setUser(undefined))
        }
    } catch (e) {
        console.log(e);
    }
}

export function* registerFetch(info) {
    try {
        const response = yield axios.post('/register', info.payload );
        console.log('registerFetch response');
        yield put(setUser(response.data))
    } catch (e) {
        console.log(e);
    }
}

export function* userCredentialsFetch() {
    const response = yield axios.get('/authInfo');
    yield put(setUser(response.data));
}

export function* getAllUsersFetch() {
    const response = yield axios.get('/user-list');
    console.log('getAllUsersFetch', response.data);
    yield put(getAllUsersSuccess(response.data));
}

export const auth = [
    takeEvery('LOGIN', login),
    takeEvery('LOGOUT', logoutFetch),
    takeEvery('REGISTER_USER', registerFetch),
    takeEvery('GET_AUTH_CREDENTIALS', userCredentialsFetch),
    takeEvery('GET_ALL_USERS', getAllUsersFetch),
];










//fetch('/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify(user),
//     })
//       .then((response) => {
//         if (response.status === 201) {
//             console.log('response.status', response.status)
//             // setSuccesModalVisibility(true);
//             history.push('/')
//         } else alert('Пользователь уже существует', response.status);
//         return response.json();
//       });