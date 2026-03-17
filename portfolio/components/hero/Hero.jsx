import styles from "./page.module.css";

export default function Hero() {
  return (
    <>
      {/*Hero section*/}
      <section className={styles.hero_section}>
        <img src="" alt="" className={styles.hero_image} />
        <h1 className={styles.h1}>
          Hello!
          <br />
          I'm Nadiia
        </h1>
        <p className={styles.hero_p}>
          Multimedia designer,
          <br />
          frontend-developer and
          <br />
          digital artist
        </p>
      </section>

      {/*About me section*/}
      <section className={styles.about_sec}>
        <div className={styles.about_div}>
          <div className={styles.flex_column_div}>
            <h2>About me</h2>
            <p></p>
            <img src="" />
          </div>

          {/*Skills*/}
          <div className={styles.flex_column_div}>
            <h2>Skills</h2>

            {/*Design and multimedia*/}
            <div className={styles.flex_column_div}>
              <h3>Design and multimedia</h3>
              {/*Icons*/}
              <div className={styles.icons}>
                <img src="" alt="" className={styles.icon} />
                <img src="" alt="" className={styles.icon} />
                <img src="" alt="" className={styles.icon} />
                <img src="" alt="" className={styles.icon} />
              </div>
            </div>

            {/*Programming*/}
            <div className={styles.flex_column_div}>
              <h3>Frontend-development</h3>

              {/*Icons*/}
              <div className={styles.icons}>
                <img src="" alt="" className={styles.icon} />
                <img src="" alt="" className={styles.icon} />
                <img src="" alt="" className={styles.icon} />
                <img src="" alt="" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
        <button className={styles.btn}>More</button>

        {/*Hidden container with info about education or experience*/}
        <div className="hidden">
          {/*Experience*/}
          <div className={styles.flex_column_div}>
            <h2>Experience</h2>
            <dl>
              <dt></dt>
              <dd></dd>
            </dl>
          </div>

          {/*Education*/}
          <div className={styles.flex_column_div}>
            <h2>Education</h2>
            <dl>
              <dt></dt>
              <dd></dd>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
