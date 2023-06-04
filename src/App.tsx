import React,{FC,useEffect,useState} from 'react';
import './App.css';
import Header from './components/header';
import Todoform from './components/todoform';
import Todo from './components/todo';
import { ITask } from './components/interface';
import { getAllTodo,updateToDo,addToDo,deleteToDo } from './utils/handleapi';

const App:FC = ()=>{
  const [toDo,setTodo]=useState<ITask[]>([])
  const [text,setText]=useState('')
  const[isUpdating,setUpdating]=useState(false)
    const [toDoId, setTodoId]=useState("")
  useEffect(()=>{
    getAllTodo(setTodo)
  })
  const updateMode=(_id:any,text:any)=>{
    setUpdating(true)
    setText(text)
    setTodoId(_id)

  }
  return (
    <div className="App">
      <Header/>
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
      <div className="list">
        {toDo.map((item)=> <Todo key={item._id} 
        text={item.text} 
        updateMode={()=>updateMode(item._id,item.text)}
        deleteToDo = {() => deleteToDo(item._id, setTodo)} 

        />)}

      </div>
      
    </div>
  );
}

export default App;
