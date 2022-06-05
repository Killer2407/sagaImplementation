import axios from "axios"

const BASE_API = "http://localhost:8000";

export const requestGetNotes = ()=>{
   return axios.get( `${BASE_API}/getNotes`);
}

export const requestAddNote =(note)=>{

}


export const requestDeleteNoteId =(noteId)=>{
    
}