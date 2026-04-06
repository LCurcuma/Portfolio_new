import styles from "./page.module.css";
import Image from "next/image";

export default function Hero({ translation }) {
  return (
    <>
      {/*Hero section*/}
      <section className={styles.hero_section}>
        <img
          src="/images/nadiia.png"
          alt={`${translation.hero_image_alt}`}
          className={styles.hero_image}
        />
        <h1 className={`${styles.h1} introBig`}>
          {translation.hero.h1_1}
          <br />
          {translation.hero.h1_2}
        </h1>
        <p className={`${styles.hero_p} introBig`}>
          {translation.hero.p1}
          <br />
          {translation.hero.p2}
          <br />
          {translation.hero.p3}
        </p>
      </section>

      {/*About me section*/}
      <section className={styles.about_sec} id="about_me">
        <div className={styles.about_div}>
          <div className={styles.flex_column_div}>
            <h2 className={`${styles.h2} introBig`}>About me</h2>
            <p className={`${styles.p} introMain`}>
              I'm a person, who enjoys combining art with code to create cute
              interactive websites. I draw components for websites, stickers,
              animations and illustrations. <br />
              <br />
              Currently I'm studying at Zealand Academy as multimedia designer
              and drawing and making websites, when I have free time.
            </p>
            <img src="" />
          </div>

          {/*Skills*/}
          <div className={styles.flex_column_div}>
            <h2 className={`${styles.h2} introBig`}>Skills</h2>

            {/*Design and multimedia*/}
            <div className={styles.flex_column_div}>
              <h3 className={`${styles.h3} introBig`}>Design and multimedia</h3>
              {/*Icons*/}
              <div className={styles.icons}>
                <img
                  src="/images/design_icons/clip_studio_paint_icon.png"
                  alt="Clip Studio Paint icon"
                  className={styles.icon}
                />
                <img
                  src="/images/design_icons/adobe_photoshop_icon.png"
                  alt=""
                  className={styles.icon}
                />
                <img
                  src="/images/design_icons/adobe_illustrator_icon.png"
                  alt=""
                  className={styles.icon}
                />
                <img src="" alt="" className={styles.icon} />
              </div>
            </div>

            {/*Programming*/}
            <div className={styles.flex_column_div}>
              <h3 className={`${styles.h3} introBig`}>Frontend-development</h3>

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
