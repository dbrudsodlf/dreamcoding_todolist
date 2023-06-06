import { React, useState } from "react";
import styles from './AddTodo.module.css';

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  return (
    <div className={styles.addtodo}>
      <input  className={styles.todo} type="text" value={todo} placeholder="Add Todo" />
      <button  className={styles.todosubmit}type="submit">Add</button>
    </div>
  );
}
