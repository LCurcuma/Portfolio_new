"use client";
import styles from "./page.module.css";

export default function ProjectSection({ translation, links, id }) {
  return (
    <section className={styles.project_section}>
      {translation.sections_project.map((section, sectionId) => {
        if (section.type === "image_text" && sectionId % 2 === 0)
          return (
            <div key={sectionId} className={`${styles.section}`}>
              <div className={styles.text}>
                <h1 className={`${styles.h1} introBig`}>{section.text.h}</h1>
                {section.text.p.map((text, textId) => (
                  <p key={textId} className={`${styles.p} introMain`}>
                    {text}
                  </p>
                ))}
              </div>
              <img
                src={section.image}
                className={styles.image}
                alt={section.alt}
              />
            </div>
          );
        else if (section.type === "image_text" && sectionId % 2 !== 0)
          return (
            <div key={sectionId} className={`${styles.section}`}>
              <img
                src={section.image}
                className={styles.image}
                alt={section.alt}
              />
              <div className={styles.text}>
                <h1 className={`${styles.h1} introBig`}>{section.text.h}</h1>
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
            <div key={sectionId} className={`${styles.section}`}>
              {section.text.map((text, textId) => (
                <div key={textId} className={styles.text}>
                  <h2 className={`${styles.h1} introBig`}>{text.h}</h2>
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
