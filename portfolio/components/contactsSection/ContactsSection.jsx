"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function ContactsSection({ translation, links }) {
  const [clickedMore, setClickedMore] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(`.scroll_show_animate`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    elements.forEach((el) => {
      observer.observe(el);

      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("show");
      }
    });

    return () => observer.disconnect();
  }, [clickedMore]);

  return (
    <div className={`${styles.contactDiv} scroll_show_animate`}>
      {translation.contacts.sections.map((section, sectionId) => (
        <div key={sectionId} className={styles.container}>
          <h2 className={`${styles.h2} introBig`}>{section.h2}</h2>
          <p className={`${styles.p} introMain`}>{section.p}</p>
          <ul className={styles.ul}>
            {section.ul.map((item, itemId) => {
              return item.a ? (
                <a key={itemId} href={item.a} className={styles.link}>
                  <li className={styles.list}>
                    <img src={item.img} className={`${styles.img}`} />
                    <p className={`introMain ${styles.links}`}>{item.p}</p>
                  </li>
                </a>
              ) : (
                <li key={itemId} className={styles.list}>
                  <img src={item.img} className={`${styles.img}`} />
                  <p className={`introMain ${styles.links}`}>{item.p}</p>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
