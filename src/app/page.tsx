'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";


export default function Home() {
  const [state,setState] = useState("Welcome to spotify app")
  function handleClick(){
    setState("hello");
  }
  return (
    <main className={styles.main}>
      <h1>{state}</h1>
      <button className={styles.btn} onClick={handleClick}>login</button>
    </main>
  );
}
