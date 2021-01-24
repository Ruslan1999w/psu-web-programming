const initialState = {

};

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case 'PUT_BOOK_LIST':
            return { ...state, bookList: action.payload };
    }
    return state;
}