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
      <div className={styles.contactDiv}>
        <div className={styles.container}>
          <h2 className={`${styles.h2} introBig`}>Contacts</h2>
          <p className={`${styles.p} introMain`}>
            Feel free to get in touch if you'd like to discuss a project,
            collaboration, or have any questions about my work. I'm most active
            on:
          </p>
          <ul className={styles.ul}>
            <a href="" className={styles.link}>
              <li className={styles.list}>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
            <a href="" className={styles.link}>
              <li className={styles.list}>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
          </ul>
        </div>
        <div className={styles.container}>
          <h2 className={`${styles.h2} introBig`}>Social media</h2>
          <p className={`${styles.p} introMain`}>
            Here you can see more my works, sketches, animations etc.
          </p>
          <ul className={styles.ul}>
            <a href="" className={styles.link}>
              <li className={styles.list}>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
            <a href="" className={styles.link}>
              <li className={styles.list}>
                <img src="" />
                <p>zhihnadya2002@gmail.com</p>
              </li>
            </a>
          </ul>
        </div>
      </div>
    );
}