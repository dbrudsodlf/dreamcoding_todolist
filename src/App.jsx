import styles from './App.module.css';
import {React,useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Checklist from "./components/Checklist";


const filters=['all','active','completed'];
function App() {
  const[filter,setFilter]=useState(filters[0]);
    return (    
    <>
      <Navbar className={styles.navbar} filters={filters} filter={filter} onFilterChange={setFilter} />
      <Checklist className={styles.checklist} filter={filter}/>
      </>
  );
}

export default App;
