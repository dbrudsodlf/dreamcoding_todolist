import { React, useState } from "react";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  return (
    <div className="addtodo">
      <input type="text" value={todo} placeholder="Add Todo" />
      <button type="submit">Add</button>
    </div>
  );
}
