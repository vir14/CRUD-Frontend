import { FC } from "react";
import React,{useState,useEffect} from 'react';
import { addToDo, getAllTodo,updateToDo} from '../utils/handleapi';
import { ITask } from '../components/interface';



const Todoform:FC = ()=>{
    const [text,setText]=useState('')
    const [toDo,setTodo]=useState<ITask[]>([])
    const[isUpdating,setUpdating]=useState(false)
    const [toDoId, setTodoId]=useState("")
    useEffect(()=>{
        getAllTodo(setTodo)
      })
    return (
        <form className="form">
            <input
            placeholder="Enter new todo "
            className="input"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            <div className="add" onClick={isUpdating?
                ()=>updateToDo(toDoId,text,setTodo,setText,setUpdating):()=> addToDo(text,setText,setTodo)}>
                {isUpdating?"Update":"ADD"}</div> 
        </form>
      
    );
  }
  
  export default Todoform;
  