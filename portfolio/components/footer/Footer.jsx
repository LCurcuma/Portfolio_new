"use client";

import styles from "./page.module.css";

export default function Footer({ translation, links }) {
  return (
    <footer>
      <div className={styles.rel}>
        <h2 className={`${styles.h2_footer} introBig`}>
          {translation.footer.h2}
        </h2>
        <img src="/images/Nddd_hello.png" className={styles.Nddd_hi} />
        <div className={styles.links}>
          <a href="https://mail.google.com/mail/u/0/?fs=1&to=lumilicurcuma@gmail.com&tf=cm">
            <img src=""/>
          </a>
        </div>
      </div>
    </footer>
  );
}
