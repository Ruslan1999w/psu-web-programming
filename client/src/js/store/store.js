import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import rootSaga from "../sagas/root";
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
    );

sagaMiddleware.run(rootSaga);

// store.subscribe(() => {
//   console.log('subscribe', store.getState());
// });
export default store;
