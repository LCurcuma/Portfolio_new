import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ProjectSection({ translation, links }) {
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
    <section className={`${styles.projects_section} scroll_show_animate`}>
      <h1 className={`${styles.h1} introBig`}>Websites</h1>
      <div className={styles.projects_container}>
        {translation.projects.h2.map((project, id) => (
          <div
            key={id}
            className={`${styles.project_tile} ${id % 2 === 0 ? styles.row_reverse : styles.row} scroll_show_animate`}
          >
            <img
              src={links.projects[id]}
              className={styles.project_image}
              alt={translation.projects.alt[id]}
            />
            <div>
              <h2 className={`${styles.h2} introBig`}>
                {project}
                <span className={styles.date}>
                  {translation.projects.dato[id]}
                </span>
              </h2>
              <p className={`${styles.text} introMain`}>
                {translation.projects.p[id]}
              </p>
              <p className={`${styles.text} ${styles.last_text} introMain`}>
                {translation.projects.p2[id]}
              </p>
              <a
                href={translation.projects.href[id]}
                className={`${styles.more} introMain`}
              >
                More about project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
