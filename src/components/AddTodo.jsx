import { React, useState } from "react";
import styles from './AddTodo.module.css';

export default function AddTodo({onAdd}) {
  const [text, setText] = useState('');
  const handleChange=(e)=>setText(e.target.value);
  const handleSubmit=(e)=>{
    e.preventDefault();
    onAdd({id:'246',text,checked:'false'});
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
