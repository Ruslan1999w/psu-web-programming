import { combineReducers } from 'redux'
import userReducer from './userReducer'
import test_reducer from './test_reducer'
import bookReducer from "./bookReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  book: bookReducer,
  test: test_reducer,
})
