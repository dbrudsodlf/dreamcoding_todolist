import styles from './App.module.css';
import {React,useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Checklist from "./components/Checklist";
import { DarkModeProvider } from './context/DarkModeContext';


const filters=['all','active','completed'];
function App() {
  const[filter,setFilter]=useState(filters[0]);
    return (    
    <DarkModeProvider>
      <Navbar className={styles.navbar} filters={filters} filter={filter} onFilterChange={setFilter} />
      <Checklist className={styles.checklist} filter={filter}/>
      </DarkModeProvider>
  );
}

export default App;
