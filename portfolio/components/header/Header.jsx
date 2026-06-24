"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import "animate.css";
//import translation from "@/components/translations/TranslationEN.json";

export default function Header({ translation }) {
  const [isClickedLang, setClicked] = useState(false);
  const [isClickedBurger, setClickedBurger] = useState(false);

  function checkClicked() {
    if (isClickedLang) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <>
      {/*Burger menu*/}
      {isClickedBurger && (
        <div className={`${styles.burger} introBig`}>
          {translation.header.hooks.map((hook, index) => (
            <a
              key={index}
              href={hook}
              className={`${styles.link_burger} ${styles.hover_underline_nav}`}
              onClick={() => {
                if (isClickedBurger) {
                  setClickedBurger(false);
                } else {
                  setClickedBurger(true);
                }
               }}
            >
              {translation.header.navigation[index]}
            </a>
          ))}
        </div>
      )}

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
            <div className={`${styles.hiddenLang} ${styles.fadeIn}`}>
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

        {/*Mobile version of navigation*/}
        <nav
          className={`${styles.navigation_mobile} introBig scroll_show_animate`}
        >
          <div
            onClick={() => {
              if (isClickedBurger) {
                setClickedBurger(false);
              } else {
                setClickedBurger(true);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        </nav>

        {/*Desktop version of navigation*/}
        <nav
          className={`${styles.navigation_desktop} introBig scroll_show_animate`}
        >
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
    </>
  );
}
