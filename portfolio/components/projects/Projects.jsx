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
        <div className={styles.websites}>
          <h2 className={`${styles.h3} ${styles.pink} introBig`}>
            {translation.projects_section.websites.h3}
          </h2>
          <div className={styles.imageContainer}>
            {links.images.projects.websites.map((link, index) => (
              <a className={styles.imgCont} key={index}>
                <p className={`${styles.orange} introMain ${styles.p}`}>
                  {translation.projects_section.websites.ps[index]}
                </p>
                <img
                  src={link}
                  className={`${styles.projectImage} ${styles.withBR} ${styles.zoom}`}
                  alt={translation.projects_section.websites.alts[index]}
                />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.logos}>
          <h2 className={`${styles.h3} ${styles.pink} introBig`}>
            {translation.projects_section.logos.h3}
          </h2>
          <div className={styles.imageContainer}>
            {links.images.projects.logos.map((link, index) => (
              <a className={styles.imgCont} key={index}>
                <p className={`${styles.orange} introMain ${styles.p}`}>
                  {translation.projects_section.logos.ps[index]}
                </p>
                <img
                  src={link}
                  className={`${styles.projectImage} ${styles.zoom}`}
                  alt={translation.projects_section.logos.alts[index]}
                />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.artworks}>
          <h2 className={`${styles.h3} ${styles.pink} introBig`}>
            {translation.projects_section.artworks.h3}
          </h2>
          <div className={styles.imageContainer}>
            {links.images.projects.artworks.map((link, index) => (
              <a className={styles.imgCont} key={index}>
                <p className={`${styles.orange} introMain ${styles.p}`}>
                  {translation.projects_section.artworks.ps[index]}
                </p>
                <img
                  src={link}
                  className={`${styles.projectImage} ${styles.withBR} ${styles.zoom}`}
                  alt={translation.projects_section.artworks.alts[index]}
                />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.animations}>
          <h2 className={`${styles.h3} ${styles.pink} introBig`}>
            {translation.projects_section.animations.h3}
          </h2>
          <div className={styles.imageContainer}>
            {links.images.projects.animations.map((link, index) => (
              <a className={styles.imgCont} key={index}>
                <p className={`${styles.orange} introMain ${styles.p}`}>
                  {translation.projects_section.animations.ps[index]}
                </p>
                <img
                  src={link}
                  className={`${styles.projectImage} ${styles.withBR} ${styles.zoom}`}
                  alt={translation.projects_section.animations.alts[index]}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className={`${styles.projectsCarousel}`}>
        <div className={`${styles.image}`}>
            <img
            src={projectURL}
              className={`${styles.projectBigImg}`}
            />
        </div>
        <div className={`${styles.buttons}`}>
          <div
            className={`${styles.button}`}
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
            <p
              className={`${styles.button_text}`}
              styles={{ display: "none" }}
            ></p>
          </div>
          <div
            className={`${styles.button}`}
            onClick={() => {
              setProjectURL("/images/projects/websites/waybly_screenshot.png");
            }}
          >
            <img
              src="/images/projects/websites/waybly_screenshot.png"
              className={styles.projectImg}
            />
            <p
              className={`${styles.button_text}`}
              styles={{ display: "none" }}
            ></p>
          </div>
        </div>
      </div>
    </>
  );
}
