"use client";

import styles from "./page.module.css";
import { useState } from "react";
import "animate.css";
//import translation from "@/components/translations/TranslationEN.json";

export default function Header({ translation }) {
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
          {translation.header.languages[0]}
        </a>
        {/*hidden languages*/}
        {isClickedLang && (
          <div className={`${styles.hiddenLang} ${styles.fadeIn}`}>
            <a
              href="/ua"
              className={`${styles.link} ${styles.hover_underline}`}
            >
              {translation.header.languages[1]}
            </a>
            <a
              href="/dk"
              className={`${styles.link} ${styles.hover_underline}`}
            >
              {translation.header.languages[2]}
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
        {translation.header.hooks.map((hook, index) => (
          <a
            key={index}
            href={hook}
            className={`${styles.link} ${styles.hover_underline_nav}`}
          >
            {translation.header.navigation[index]}
          </a>
        ))}
      </nav>
    </header>
  );
}
