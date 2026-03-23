"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Header() {
  const [isClickedLang, setClicked] = useState(false);

  function checkClicked() {
    if (isClickedLang) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <header className={styles.header}>
      {/*language container*/}
      <div className={`${styles.language} introBig`}>
        <a href="/en" className={styles.link}>
          EN
        </a>
        {/*hidden languages*/}
        {isClickedLang && (
          <div className={styles.hiddenLang}>
            <a href="/ua" className={styles.link}>
              UA
            </a>
            <a href="/dk" className={styles.link}>
              DK
            </a>
          </div>
        )}
        {/*This should have animation of rotation*/}
        {isClickedLang ? (
          <span
            className={`${styles.symbol} introBig`}
            onClick={() => checkClicked()}
          >
            {"<"}
          </span>
        ) : (
          <span
            className={`${styles.symbol} introBig`}
            onClick={() => checkClicked()}
          >
            {">"}
          </span>
        )}
      </div>

      <nav className={`${styles.navigation} introBig`}>
        <a href="#about_me" className={styles.link}>
          About me
        </a>
        <a href="#websites" className={styles.link}>
          Websites
        </a>
        <a href="#art" className={styles.link}>
          Art
        </a>
        <a href="#animation" className={styles.link}>
          Animation
        </a>
        <a href="#contact" className={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}
