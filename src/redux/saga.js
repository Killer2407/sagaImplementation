import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { requestAddNote, requestGetNotes } from "../service";
import { ADD_NOTE_WATCHER, DELETE_NOTE_WATCHER, GET_NOTES, GET_NOTES_WATCHER } from "./ActionTypes";



export function* handleGetNotes (){
    console.log('hi');
    const {data} = yield call (requestGetNotes);
    yield put({type:GET_NOTES,notes:data});
    console.log('data',data)

}


export function* handleAddNote (){
    const {data} = yield call (requestAddNote);
    yield put(GET_NOTES,data);

}


export function* handleDeleteNote (){
    const {data} = yield call (requestGetNotes);
    yield put(GET_NOTES,data);

}





// export const watcherSaga = () => 
//     [
//         takeLatest(GET_NOTES_WATCHER, handleGetNotes),
//         takeLatest(ADD_NOTE_WATCHER, handleAddNote),
//         takeLatest(DELETE_NOTE_WATCHER, handleDeleteNote)
//     ]
    


export function* watcherSaga  () { 

   yield takeLatest(GET_NOTES_WATCHER, handleGetNotes)

}
