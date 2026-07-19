"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function ProjectSection({ translation, links, id }) {
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
    <section className={`${styles.project_section} scroll_show_animate`}>
      {translation.sections_project.map((section, sectionId) => {
        if (
          section.type === "image_text" &&
          sectionId % 2 === 0 &&
          sectionId !== 0
        )
          return (
            <div
              key={sectionId}
              className={`${styles.section} scroll_show_animate`}
            >
              <div className={`${styles.text} ${styles.inverted_order2}`}>
                {section.href ? (
                  <div className={styles.h}>
                    <a
                      href={section.href}
                      className={`${styles.link} ${styles.hover_underline}`}
                      target="_blank"
                    >
                      <h2 className={`${styles.h1} introBig`}>
                        {section.text.h}
                      </h2>
                    </a>
                    {section.icons &&
                      section.icons.map((icon, iconId) => (
                        <a
                          key={iconId}
                          href={section.hrefs[iconId]}
                          target="_blank"
                        >
                          <img src={icon} className={styles.icon} />
                        </a>
                      ))}
                  </div>
                ) : (
                  <h2
                    className={`${styles.h1} ${styles.h_without_anim} introBig`}
                  >
                    {section.text.h}
                  </h2>
                )}
                {section.text.p.map((text, textId) => (
                  <p key={textId} className={`${styles.p} introMain`}>
                    {text}
                  </p>
                ))}
              </div>
              <div
                className={`${styles.image_container} ${styles.inverted_order}`}
              >
                {section.images.map((image, imageId) => (
                  <img
                    key={imageId}
                    src={image}
                    className={`${styles.image}`}
                    alt={section.alts[imageId]}
                  />
                ))}
              </div>
            </div>
          );
        else if (section.type === "image_text" && sectionId === 0)
          return (
            <div
              key={sectionId}
              className={`${styles.section} scroll_show_animate`}
            >
              <div className={`${styles.text} ${styles.inverted_order2}`}>
                {section.href ? (
                  <div className={styles.h}>
                    <a
                      href={section.href}
                      className={`${styles.link} ${styles.hover_underline}`}
                      target="_blank"
                    >
                      <h1 className={`${styles.h1} introBig`}>
                        {section.text.h}
                      </h1>
                    </a>
                    {section.icons &&
                      section.icons.map((icon, iconId) => (
                        <a
                          key={iconId}
                          href={section.hrefs[iconId]}
                          target="_blank"
                        >
                          <img src={icon} className={styles.icon} />
                        </a>
                      ))}
                  </div>
                ) : (
                  <h1
                    className={`${styles.h1} ${styles.h_without_anim} introBig`}
                  >
                    {section.text.h}
                  </h1>
                )}
                <div className={styles.description}>
                  {section.description.map((desc, descId) => (
                    <p key={descId} className={`${styles.desc} introMain`}>
                      <span
                        style={{
                          color: "rgb(244, 193, 210)",
                          fontSize: 16,
                          lineHeight: 2,
                        }}
                      >
                        <i>
                          <b>{desc.head}</b>
                        </i>
                      </span>
                      <br />
                      {desc.text}
                    </p>
                  ))}
                </div>
                {section.text.p.map((text, textId) => (
                  <p key={textId} className={`${styles.p} introMain`}>
                    {text}
                  </p>
                ))}
              </div>
              <div
                className={`${styles.image_container} ${styles.inverted_order}`}
              >
                {section.images.map((image, imageId) => (
                  <img
                    key={imageId}
                    src={image}
                    className={styles.image}
                    alt={section.alts[imageId]}
                  />
                ))}
              </div>
            </div>
          );
        else if (section.type === "image_text" && sectionId % 2 !== 0)
          return (
            <div
              key={sectionId}
              className={`${styles.section} scroll_show_animate`}
            >
              <div className={styles.image_container}>
                {section.images.map((image, imageId) => (
                  <img
                    key={imageId}
                    src={image}
                    className={styles.image}
                    alt={section.alts[imageId]}
                  />
                ))}
              </div>
              <div className={styles.text}>
                {section.href ? (
                  <div className={styles.h}>
                    <a
                      href={section.href}
                      className={`${styles.link} ${styles.hover_underline}`}
                      target="_blank"
                    >
                      <h2 className={`${styles.h1} introBig`}>
                        {section.text.h}
                      </h2>
                    </a>
                    {section.icons &&
                      section.icons.map((icon, iconId) => (
                        <a
                          key={iconId}
                          href={section.hrefs[iconId]}
                          target="_blank"
                        >
                          <img src={icon} className={styles.icon} />
                        </a>
                      ))}
                  </div>
                ) : (
                  <h2
                    className={`${styles.h1} ${styles.h_without_anim} introBig`}
                  >
                    {section.text.h}
                  </h2>
                )}
                {section.text.p.map((text, textId) => (
                  <p key={textId} className={`${styles.p} introMain`}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          );
        else if (section.type === "text")
          return (
            <div
              key={sectionId}
              className={`${styles.section} scroll_show_animate`}
            >
              {section.text.map((text, textId) => (
                <div key={textId} className={styles.text}>
                  <h2
                    className={`${styles.h1} ${styles.h_without_anim} introBig`}
                  >
                    {text.h}
                  </h2>
                  {text.p.map((p, pId) => (
                    <p key={pId} className={`${styles.p} introMain`}>
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          );
      })}
    </section>
  );
}
