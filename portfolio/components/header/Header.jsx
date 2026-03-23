"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

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
        <a href="" className={styles.link}>
          EN
        </a>
        {/*hidden languages*/}
        {isClickedLang && (
          <div className={styles.hiddenLang}>
            <a href="" className={styles.link}>
              UA
            </a>
            <a href="" className={styles.link}>
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
        <a href="" className={styles.link}>
          About me
        </a>
        <a href="" className={styles.link}>
          Websites
        </a>
        <a href="" className={styles.link}>
          Art
        </a>
        <a href="" className={styles.link}>
          Animation
        </a>
        <a href="" className={styles.link}>
          Contact
        </a>
      </nav>
    </header>
  );
}
