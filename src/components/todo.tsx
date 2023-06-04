import React from 'react'

import {BiEdit} from "react-icons/bi" 
import {AiFillDelete} from "react-icons/ai" 
interface Props{
  text:string;
  updateMode:()=>void;
  deleteToDo:()=>void;

}
const Todo= (props:Props) => {
  return (
    <div className='todo'>
      <div className="tex">{props.text}</div>
      <div className="icons">
         <BiEdit className="icon" onClick={props.updateMode} />
        <AiFillDelete className="icon" onClick={props.deleteToDo} /> 

      </div>
      
    </div>
  )
}

export default Todo
 
