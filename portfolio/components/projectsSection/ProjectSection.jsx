import styles from "./page.module.css";

export default function ProjectSection({translation, links}) {
  return (
    <section className={styles.projects_section}>
      <h1 className={`${styles.h1} introBig`}>Websites</h1>
      <div className={styles.projects_container}>
        {}
        <div className={`${styles.project_tile} ${styles.row}`}>
          <img
            src="/images/projects/websites/first_help_experts_screenshot.png"
            className={styles.project_image}
          />
          <div>
            <h2 className={`${styles.h2} introBig`}>First Help Experts</h2>
            <p className={`${styles.text} introMain`}>
              Do you want to learn how to do first help engaging and playful
              way? The app "Førstehjælpseksperten" is made for those, who need
              to go through first help courses or to refresh the knowledge.
            </p>
            <a href="" className={styles.more}>
              More about project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
