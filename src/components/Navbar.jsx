import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import styles from './Navbar2.module.css';
import { useDarkMode } from "../context/DarkModeContext";

export default function Navbar({filter,filters,onFilterChange}) {
  const {darkMode,toggleDarkMode}=useDarkMode();
  return (    
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode &&<HiMoon/>}
        {darkMode && <HiSun/>}
        </button>
      <ul className={styles.filters}>
        {filters.map((value,index)=>(
        <li key={index} >
          <button className={`${styles.filter} ${filter===value && styles.selected}`} onClick={()=>onFilterChange(value)} >{value}</button>
        </li>))}
      </ul>
    </header>
  );
}
