import { createStore, applyMiddleware, combineReducers } from 'redux';
import { INITITAL_STATE, noteReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { GET_NOTES } from './ActionTypes';
import { all, call, takeLatest } from '@redux-saga/core/effects';
import { watcherSaga } from './saga';
const sagaMiddleware = createSagaMiddleware();


 function* rootSaga(){
   yield all ([call([...watcherSaga]));
}

const rootReducer = combineReducers({
    notes:noteReducer
})

const middleware = [sagaMiddleware];
 export const store = createStore(rootReducer,INITITAL_STATE,
    applyMiddleware(...middleware)
    );

 sagaMiddleware.run(rootSaga);