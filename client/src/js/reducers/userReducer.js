const initialState = {

};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_USER':
      return { ...state, userData: action.payload };
    case 'GET_ALL_USERS_SUCCESS':
      return { ...state, userList: action.payload };
  }
  return state;
}
