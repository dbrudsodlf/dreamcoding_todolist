import "./Todolist.module.css";
import Navbar from "./components/Navbar";
import Checklist from "./components/Checklist";
import AddTodo from "./components/AddTodo";

function Todolist() {
  return (
    <>
      <Navbar />
      <Checklist />
      <AddTodo/>
    </>
  );
}

export default Todolist;
