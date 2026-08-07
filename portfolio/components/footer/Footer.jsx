"use client";

import styles from "./page.module.css";

export default function Footer({ translation, links }) {
  return (
    <footer className={`${styles.footer} scroll_show_animate`}>
      <div className={styles.rel}>
        <a href={translation.footer.link} className={styles.link}>
        <h2 className={`${styles.h2_footer} introBig`}>
          {translation.footer.h2}
          </h2>
          </a>
        <img src="/images/Nddd_hello.png" className={styles.Nddd_hi} />
      </div>
    </footer>
  );
}
