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
      <div className={`${styles.language} introBig scroll_show_animate`}>
        <a
          href={`${translation.header.lang_link[0]}`}
          className={`${styles.link} ${styles.hover_underline} scroll_show_animate`}
        >
          {translation.header.languages[0]}
        </a>
        {/*hidden languages*/}
        {isClickedLang && (
          <div
            className={`${styles.hiddenLang} ${styles.fadeIn}`}
          >
            <a
              href={`${translation.header.lang_link[1]}`}
              className={`${styles.link} ${styles.hover_underline}`}
            >
              {translation.header.languages[1]}
            </a>
            <a
              href={`${translation.header.lang_link[2]}`}
              className={`${styles.link} ${styles.hover_underline}`}
            >
              {translation.header.languages[2]}
            </a>
          </div>
        )}
        {/*This should have animation of rotation*/}
        {isClickedLang ? (
          <span
            className={`${styles.symbol} ${styles.fadeInRide}`}
            onClick={() => checkClicked()}
          >
            {"<"}
          </span>
        ) : (
          <span
            className={`${styles.symbol} ${styles.fadeInRideRight}`}
            onClick={() => checkClicked()}
          >
            {">"}
          </span>
        )}
      </div>

      <nav className={`${styles.navigation} introBig scroll_show_animate`}>
        {translation.header.hooks.map((hook, index) => (
          <a
            key={index}
            href={hook}
            className={`${styles.link} ${styles.hover_underline_nav} scroll_show_animate`}
          >
            {translation.header.navigation[index]}
          </a>
        ))}
      </nav>
    </header>
  );
}
