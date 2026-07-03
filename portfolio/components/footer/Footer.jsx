"use client";

import styles from "./page.module.css";

export default function Footer({ translation, links }) {
  return (
    <footer className={`${styles.footer} scroll_show_animate`}>
      <div className={styles.rel}>
        <h2 className={`${styles.h2_footer} introBig`}>
          {translation.footer.h2}
        </h2>
        <img src="/images/Nddd_hello.png" className={styles.Nddd_hi} />
        <div className={styles.links}>
          {links.images.icons.footer.map((icon, id) => (
            <a
              key={id}
              href={links.links.contact[id]}
              className={styles.contact_link}
            >
              <img src={icon} className={styles.contact_img} />
              <p className={`${styles.link_text} introMain`}>
                {links.links.contact_text[id]}
              </p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
