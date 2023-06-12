import React from "react";
import styles from "./Todo2.module.css";
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
      <input
        id="checkbox"
        type="checkbox"
        checked={status === "completed"}
        className={styles.checkbox}
        onChange={handleChange}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
