import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ImagesSection({ translation, links }) {
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
    <section className={styles.image_section}>
      {translation.section.map((section, id) => (
        <div key={id}>
          <h2 className={`${styles.h2} introBig scroll_show_animate`}>
            {section.h2}
          </h2>
          <div className={`${styles.images_container} scroll_show_animate`}>
            {links.images_section[id].images.map((src, imgId) => (
              <a href={section.links[imgId]} key={imgId}>
                <img
                  src={src}
                  className={styles.image}
                  alt={section.alt[imgId]}
                />
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
