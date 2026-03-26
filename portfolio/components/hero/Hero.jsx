import styles from "./page.module.css";

export default function Hero() {
  return (
    <>
      {/*Hero section*/}
      <section className={styles.hero_section}>
        <img src="" alt="" className={styles.hero_image} />
        <h1 className={`${styles.h1} introBig`}>
          Hello!
          <br />
          I'm Nadiia
        </h1>
        <p className={`${styles.hero_p} introMain`}>
          Multimedia designer,
          <br />
          frontend-developer and
          <br />
          digital artist
        </p>
      </section>

      {/*About me section*/}
      <section className={styles.about_sec} id="about_me">
        <div className={styles.about_div}>
          <div className={styles.flex_column_div}>
            <h2 className="introBig">About me</h2>
            <p></p>
            <img src="" />
          </div>

          {/*Skills*/}
          <div className={styles.flex_column_div}>
            <h2 className="introBig">Skills</h2>

            {/*Design and multimedia*/}
            <div className={styles.flex_column_div}>
              <h3 className="introBig">Design and multimedia</h3>
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
              <h3 className="introBig">Frontend-development</h3>

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
        <button className={`${styles.btn} introMain`}>More</button>

        {/*Hidden container with info about education or experience*/}
        <div className="hidden">
          {/*Experience*/}
          <div className={styles.flex_column_div}>
            <h2 className="introBig">Experience</h2>
            <dl>
              <dt></dt>
              <dd></dd>
            </dl>
          </div>

          {/*Education*/}
          <div className={styles.flex_column_div}>
            <h2 className="introBig">Education</h2>
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
