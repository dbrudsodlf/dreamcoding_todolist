import React from "react";
import { CiLight } from "react-icons/ci";
import styles from './Navbar2.module.css';

export default function Navbar({filter,filters,onFilterChange}) {
  return (    
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value,index)=>(
        <li key={index} >
          <button className={`${styles.filter} ${filter===value && styles.selected}`} onClick={()=>onFilterChange(value)} >{value}</button>
        </li>))}
      </ul>
    </header>
  );
}
