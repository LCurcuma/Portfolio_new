"use client";

import styles from "./page.module.css";
import { useState } from "react";
import "animate.css";

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
        <a href="/en" className={`${styles.link} ${styles.hover_underline}`}>
          EN
        </a>
        {/*hidden languages*/}
        {isClickedLang && (
          <div className={`${styles.hiddenLang} ${styles.fadeIn}`}>
            <a
              href="/ua"
              className={`${styles.link} ${styles.hover_underline}`}
            >
              UA
            </a>
            <a
              href="/dk"
              className={`${styles.link} ${styles.hover_underline}`}
            >
              DK
            </a>
          </div>
        )}
        {/*This should have animation of rotation*/}
        {isClickedLang ? (
          <span
            className={`${styles.symbol} introBig ${styles.fadeInRide}`}
            onClick={() => checkClicked()}
          >
            {"<"}
          </span>
        ) : (
          <span
            className={`${styles.symbol} introBig ${styles.fadeInRideRight}`}
            onClick={() => checkClicked()}
          >
            {">"}
          </span>
        )}
      </div>

      <nav className={`${styles.navigation} introBig`}>
        <a
          href="#about_me"
          className={`${styles.link} ${styles.hover_underline_nav}`}
        >
          About me
        </a>
        <a
          href="#websites"
          className={`${styles.link} ${styles.hover_underline_nav}`}
        >
          Websites
        </a>
        <a href="#art" className={`${styles.link} ${styles.hover_underline_nav}`}>
          Art
        </a>
        <a
          href="#animation"
          className={`${styles.link} ${styles.hover_underline_nav}`}
        >
          Animation
        </a>
        <a
          href="#contact"
          className={`${styles.link} ${styles.hover_underline_nav}`}
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
