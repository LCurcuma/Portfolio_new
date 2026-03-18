import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer>
      <h2 className={`${styles.h2_footer} introBig`}>Contact me</h2>
      <div className={styles.icon_container}>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
        <div className={styles.icon}></div>
      </div>
    </footer>
  );
}
