import styles from './App.module.css';
import {React,useEffect} from "react";
import Navbar from "./components/Navbar";
import Checklist from "./components/Checklist";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className={styles.app}>
      <Navbar className={styles.navbar}/>
      <Checklist className={styles.checklist}/>
      </div>
  );
}

export default App;
