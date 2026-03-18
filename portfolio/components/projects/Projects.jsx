import styles from "./page.module.css";

export default function Project(data) {
  return (
    <>
      <section>
        <h2 className={styles.h2_website}></h2>
        <div className={styles.pic_container}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </section>
    </>
  );
}
