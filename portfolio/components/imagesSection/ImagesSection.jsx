import styles from "./page.module.css";

export default function ImagesSection({ translation, links }) {
  return (
    <section className={styles.image_section}>
      <h2 className={`${styles.h2} introBig`}>Illustrations</h2>
      <div className={styles.images_container}>
        <img
          src="/images/projects/illustrations/fmb.png"
          className={styles.image}
        />
        <img
          src="/images/projects/illustrations/ynyn.png"
          className={styles.image}
        />
        <img
          src="/images/projects/illustrations/mhndfornyunderthechristmastree.png"
          className={styles.image}
        />
      </div>
      <h2>Animations</h2>
      <div>
        <img src="/images/projects/animations/manya_fail_f.gif" />
        <img src="/images/projects/animations/manya_sit_f.gif" />
        <img src="/images/projects/animations/manya_stand_а.gif" />
      </div>
      <h2>Logos</h2>
      <div>
        <img src="/images/projects/logos/first_help_experts_full_logo.png" />
        <img src="/images/projects/logos/no_limitation_logo_redesign.png" />
        <img src="/images/projects/logos/waybly_logo.png" />
      </div>
    </section>
  );
}
