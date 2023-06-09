import React from "react";
import styles from "./Checklist.module.css";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onDelete, onUpdate }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <div className={styles.divforspace}>
        <div className={styles.div1}>
          <input
            id="checkbox"
            type="checkbox"
            checked={status === "completed"}
            className={styles.checkbox}
            onChange={handleChange}
          />
          <label
            htmlFor="checkbox"
            className={todo.status === "completed" ? `${styles.do}` : ``}
          >
            {text}
          </label>
        </div>
        <div className={styles.btndiv}>
          <button className={styles.deletebtn} onClick={handleDelete}>
            <FaTrashAlt size={16} />
          </button>
        </div>
      </div>
    </li>
  );
}
