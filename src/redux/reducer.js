import { ADD_NOTE, DELETE_NOTE, GET_NOTES } from "./ActionTypes"
import {call} from 'redux-saga/effects'
import { requestDeleteNoteId, requestGetNotes , requestAddNote } from "../service";

export const INITITAL_STATE = {
    notes:{}
}

export const getNotes = (notes) =>({
    type:GET_NOTES,
    notes
})

export const addNote = (note) =>({
    type:ADD_NOTE,
    note
})

export const deleteNote = (noteId) =>({
    type:DELETE_NOTE,
    noteId
})



export const noteReducer = (state = INITITAL_STATE,action) => {
    switch(action.type) {
        case GET_NOTES:
            // const {data} = yield call (requestGetNotes);
            const {notes} = action
            return {...state,notes}
        case ADD_NOTE:
            const {note} = action;
            // const {data} = yield call(requestAddNote,note);
            return {...state,notes:{...state.notes,note}};
        case DELETE_NOTE:  
            const {noteId} = action;
            // const {data} = yield call(requestDeleteNoteId,noteId);
            const filteredNotes = state.notes.filter(id=>id!==noteId)
            return {...state,notes:filteredNotes}
        default:
            return state  
    }};
