import styles from "./page.module.css";
import { useState } from "react";

export default function Project({ translation, links }) {
  const [projectURL, setProjectURL] = useState(
    "/images/projects/websites/first_help_experts_screenshot.png",
  );

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
          <img src={projectURL} className={`${styles.projectBigImg}`} />
        </div>
      </div>
      <div className={`${styles.buttons}`}>
        <div
          className={`${styles.button} ${projectURL !== "/images/projects/websites/first_help_experts_screenshot.png" && styles.unchecked}`}
          onClick={() => {
            setProjectURL(
              "/images/projects/websites/first_help_experts_screenshot.png",
            );
          }}
        >
          <img
            src="/images/projects/websites/first_help_experts_screenshot.png"
            className={styles.projectImg}
          />
        </div>
        <div
          className={`${styles.button} ${projectURL !== "/images/projects/websites/waybly_screenshot.png" && styles.unchecked}`}
          onClick={() => {
            setProjectURL("/images/projects/websites/waybly_screenshot.png");
          }}
        >
          <img
            src="/images/projects/websites/waybly_screenshot.png"
            className={styles.projectImg}
          />
        </div>
      </div>
      </section>
    </>
  );
}
