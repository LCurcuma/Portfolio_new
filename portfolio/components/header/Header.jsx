import styles from "./page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/*language container*/}
      <div className={styles.language}>
        <a href="">EN</a>
        {/*hidden languages*/}
        <div className="hidden">
          <a href="">UA</a>
          <a href="">DK</a>
        </div>
        {/*This should have animation of rotation*/}
        <span>{">"}</span>
      </div>

      <nav className={styles.navigation}>
        <a href="">About me</a>
        <a href="">Websites</a>
        <a href="">Art</a>
        <a href="">Animation</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}
