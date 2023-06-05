import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import styles from './Navbar.module.css';

export default function Navbar() {
  const [btn1,setBtn1]=useState(0);
  const [btn2,setBtn2]=useState(0);
  const [btn3,setBtn3]=useState(0);

  const all=()=>{
    setBtn1(1);
    setBtn2(0);
    setBtn3(0);
    console.log(btn1,btn2,btn3);
  };
  const actives=()=>{
    setBtn1(0);
    setBtn2(1);
    setBtn3(0);
    console.log(btn1,btn2,btn3);

  };
  const complete=()=>{
    setBtn1(0);
    setBtn2(0);
    setBtn3(1);
    console.log(btn1,btn2,btn3);

  };
  
  return (    
    <div className={styles.top}>
      <div className={styles.darkmode}>
        <button className={styles.darkmodebtn}>
          <CiLight />
        </button>
      </div>
      <div className={styles.btn}>
        <button className={btn1===1?`${styles.btn_select}`:`${styles.btn1}`} onClick={all}>All</button>
        <button className={btn2===1?`${styles.btn_select}`:`${styles.btn2}`} onClick={actives}>Active</button>
        <button className={btn3===1?`${styles.btn_select}`:`${styles.btn3}`} onClick={complete}>Complete</button>
      </div>
    </div>
  );
}
