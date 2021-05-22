import store from '../store/store';
export const AUTH_USER = 'AUTH_USER';

export function setUser(user) {
  return {
    type: AUTH_USER,
    payload: user,
  }
}

export function login(user) {
  return {
    type: 'LOGIN',
    payload: user,
  };
}

export function logout() {
  return {
    type: 'LOGOUT',
    payload: {},
  }
}

export function register(user) {
  return {
    type: 'REGISTER_USER',
    payload: user,
  }
}

export function deleteUser(user) {
  return {
    type: 'DELETE_USER',
    payload: user,
  };
}

export function getUser() {
  return {
    type: 'GET_AUTH_CREDENTIALS'
  }
}

export function getAllUsers() {
  return {
    type: 'GET_ALL_USERS',
  }
}

export function getAllUsersSuccess(usersList) {
  return {
    type: 'GET_ALL_USERS_SUCCESS',
    payload: usersList,
  }
}
