import { React, useState } from "react";
import { CiTrash } from "react-icons/ci";
import styles from "./Checklist.module.css";
import AddTodo from "./AddTodo.jsx";

export default function Checkllist() {
    const [todos, setTodos] = useState([
    {id:'123',text:'짐싸기',checked:'true'},
    {id:'345',text:'짐풀기',checked:'false'},
  ]);
  const handleChange = () => {
    todos.checked((prev) => !prev);
  };
  const handleAdd=(todo)=>{
    console.log(todo);
    console.log(todos);
    setTodos([...todos,todo]);
  };
    return (
    <section className={styles.todolist}>
      <ul className={styles.list}>
        {todos.map((todos) => (
          <li key={todos.id} className={styles.todo}>
            <div className={styles.divforspace}>
            <div className={styles.div1}>
              <input
                id="checkbox"
                type="checkbox"
                value={todos.checked}
                className={styles.checkbox}
                onChange={handleChange}
              />

              <p className={todos.checked===true?`${styles.do}`:``}>{todos.text}</p>
            </div>
            <div className={styles.btndiv}>
              <button className={styles.deletebtn}>
                <CiTrash size={24}/>
              </button>
            </div>
            </div>
          </li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}
