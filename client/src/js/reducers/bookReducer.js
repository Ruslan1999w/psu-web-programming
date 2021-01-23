const initialState = {

};

export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_BOOK_LIST':
            return { ...state, list: action.payload };
    }
    return state;
}