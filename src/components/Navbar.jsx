import React from "react";
import { CiLight } from "react-icons/ci";
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.top}>
      <div className={styles.darkmode}>
        <p>
          <CiLight />
        </p>
      </div>
      <div className={styles.btn}>
        <button className={styles.btn1}>All</button>
        <button className={styles.btn2}>Active</button>
        <button className={styles.btn3}>Complete</button>
      </div>
    </div>
  );
}
