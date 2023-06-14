import { React, useEffect, useState } from "react";
import styles from "./Checklist2.module.css";
import AddTodo from "./AddTodo.jsx";
import Todo from "./Todo";

export default function Checkllist({filter}) {
  const [todos, setTodos] = useState(()=>readTdoosFromLocalStorage());

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  const filtered=getFilteredItems(todos,filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
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

function readTdoosFromLocalStorage(){
  const todos = localStorage.getItem('todos');
  return todos?JSON.parse(todos):[];
  
}
function getFilteredItems(todos,filter){
  if(filter==='all'){
    return todos;
  }
  return todos.filter((todo)=>todo.status===filter);
}