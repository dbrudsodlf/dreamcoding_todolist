import { React, useState } from "react";
import styles from "./Checklist.module.css";
import AddTodo from "./AddTodo.jsx";
import Todo from "./Todo";

export default function Checkllist() {
  const [todos, setTodos] = useState([
    { id: "123", text: "짐싸기", status: 'completed' },
    { id: "345", text: "짐풀기", status: 'active' },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));
  return (
    <section className={styles.todolist}>
      <ul className={styles.list}>
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
