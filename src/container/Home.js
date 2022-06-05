import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_NOTES_WATCHER } from '../redux/ActionTypes';

export default function Home() {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const notesData = useSelector((state) => state.notes);
    // console.log(data);

    useEffect(() => {
        // axios
        //     .get('http://localhost:8000/getNotes')
        //     .then((actualData) => {
        //         setData(actualData.data.data);
        //         console.log(actualData.data.data)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        dispatch({type:GET_NOTES_WATCHER,payload:{}});
    },[])
    useEffect(()=>{
        setData({data:notesData});
    },notesData)

    const postData = ()=>{
        const note = {
            title:'hi',
            description:'hello'
        }
        axios
            .post('http://localhost:8000/addNote',note)
            .then((data)=>{
                // setData(data.data);
                console.log(data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteData = () => {
        const note = {
            title: 'hi',
            description: 'hello'
        }
        axios
            .delete('http://localhost:8000/deleteNote/:id',note)
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            }) 
    }

  return (
    <div>
      <h1>My notes</h1>
      <button onClick={postData}>+</button>
      <button onClick={deleteData}>-</button>
      <ul>
          {data &&
            data.map((item, i) => {
              return (
                  <div key={i}>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                  </div>
              )
          })}
      </ul>
    </div>
  )
}
