import styles from "./page.module.css";

export default function Websites() {
  return (
    <>
      {/*Websites*/}
      <section>
        <h2 className={styles.h2_website}>Websites</h2>
        <div className={styles.pic_container}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </section>

      {/*Artworks*/}
      <section>
        <h2 className={styles.h2_website}>Art</h2>
        <div className={styles.pic_container}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </section>

      {/*Animations*/}
      <section>
        <h2 className={styles.h2_website}>Animations</h2>
        <div className={styles.pic_container}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </section>
    </>
  );
}
