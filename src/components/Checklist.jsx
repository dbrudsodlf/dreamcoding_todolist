import { React, useState } from "react";
import { CiTrash } from "react-icons/ci";
import styles from "./Checklist.module.css";

export default function Checkllist() {
  const [checked, setChecked] = useState(false);
  const [todo, setTodo] = useState(["거거", "아아"]);
  const handleChange = () => setChecked((prev) => !prev);
  return (
    <div className={styles.todolist}>
      <ul className={styles.list}>
        {todo.map((todo) => (
          <li key={todo.id} className={styles.todo}>
            <div className={styles.divforspace}>
            <div className={styles.div1}>
              <input
                id="checkbox"
                type="checkbox"
                value={checked}
                onChange={handleChange}
              />
              <p>{todo}</p>
            </div>
            <div className={styles.btndiv}>
              <button className={styles.deletebtn}>
                <CiTrash />
              </button>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
