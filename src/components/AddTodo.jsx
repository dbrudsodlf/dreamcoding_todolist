import { React, useState } from "react";
import styles from './AddTodo.module.css';
import {v4 as uuidv4} from 'uuid';

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');
  const handleChange=(e)=>setText(e.target.value);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(text.trim().length===0){
      return;
    }//trim이란 text의 여백을 없애버림
    onAdd({id:uuidv4(),text,checked:'false'});
    setText('');
  }
  return (
    <form onSubmit={handleSubmit} className={styles.addtodo}>
      <input  
      className={styles.todo} 
      type="text" 
      value={text} 
      onChange={handleChange}
      placeholder="Add Todo" />
      <button  className={styles.todosubmit}>Add</button>
    </form>
  );
  
}
