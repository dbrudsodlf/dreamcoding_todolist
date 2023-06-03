import {React,useState} from "react";
import { CiTrash } from "react-icons/ci";

export default function Checkllist(){
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);
    return (
      <div className="list">
        <input
          id="checkbox"
          type="checkbox"
          value={checked}
          onChange={handleChange}
        />
        <label>공부하기</label>
        <button><CiTrash/></button>
      </div>
    );
    
}