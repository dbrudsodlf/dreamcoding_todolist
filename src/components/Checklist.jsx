import { React, useState } from "react";
import { CiTrash } from "react-icons/ci";

export default function Checkllist() {
  const [checked, setChecked] = useState(false);
  const [todo, setTodo] = useState(['거거','아아']);
  const handleChange = () => setChecked((prev) => !prev);
  return (
    <div className="list">
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <input
              id="checkbox"
              type="checkbox"
              value={checked}
              onChange={handleChange}
            />
            <p>{todo}</p>
            <button>
              <CiTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
