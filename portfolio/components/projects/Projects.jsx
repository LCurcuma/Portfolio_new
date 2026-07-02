import styles from "./page.module.css";
import { useState } from "react";

export default function Project({ translation, links }) {
  const [projectURL, setProjectURL] = useState(
    "/images/projects/websites/first_help_experts_screenshot.png",
  );

  const [projectAlt, setProjectAlt] = useState(translation.projects_section.alts[0])

  return (
    <>
      <h2
        className={`${styles.h2} ${styles.orange} ${styles.centered} introBig scroll_show_animate`}
      >
        {translation.projects_section.h2}
      </h2>
      <section className={`${styles.projects} scroll_show_animate`}>
        <div className={`${styles.projectsCarousel}`}>
          <div className={`${styles.image}`}>
            <img src={projectURL} className={`${styles.projectBigImg}`} alt={projectAlt} />
          </div>
          <img src="/images/Nddd_staying.png" className={styles.projectNddd} />
        </div>
        <div className={`${styles.buttons}`}>
          {links.images.projects.map((item, id) => (
            <div
              key={id}
              className={`${styles.button} ${projectURL !== item && styles.unchecked}`}
              onClick={() => {
                setProjectURL(item);
                setProjectAlt(translation.projects_section.alts[id]);
              }}
            >
              <img src={links.images.project_button[id]} className={styles.projectImg} alt={translation.projects_section.alts[id]} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
