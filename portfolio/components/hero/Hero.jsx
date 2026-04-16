"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Hero({ translation }) {
  const [clickedMore, setClickedMore] = useState(false);
  useEffect(() => {
    const elements = document.querySelectorAll(`.scroll_show_animate`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    elements.forEach((el) => {
      observer.observe(el);

      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("show");
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/*Hero section*/}
      <section className={styles.hero_section}>
        <div className={styles.fireflies}>
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={styles.firefly} />
          ))}
        </div>
        {/*
        <div className={styles.carousel}>
          <div className={styles.images_carousel_1}></div>
          <div className={styles.images_carousel_2}></div>
        </div>
        */}
        <img
          src={translation.images.hero_image_src}
          alt={`${translation.hero_image_alt}`}
          className={`${styles.hero_image} scroll_show_animate`}
        />
        <h1 className={`${styles.h1} introBig scroll_show_animate`}>
          {translation.hero.h1_1}
          <br />
          {translation.hero.h1_2}
        </h1>
        <p className={`${styles.hero_p} introBig scroll_show_animate`}>
          {translation.hero.p1}
          <br />
          {translation.hero.p2}
        </p>
      </section>

      {/*About me section*/}
      <section className={styles.about_sec} id="about_me">
        <div className={styles.about_div}>
          <div className={styles.flex_column_div}>
            <h2 className={`${styles.h2} introBig scroll_show_animate`}>
              {translation.about_me_section.about_me.h2}
            </h2>
            <p className={`${styles.p} introMain scroll_show_animate`}>
              {translation.about_me_section.about_me.p1}
              <br />
              <br />
              {translation.about_me_section.about_me.p2}
            </p>
            <img
              src={translation.animations.about_anim}
              className={`${styles.about_me_anim} scroll_show_animate`}
            />
          </div>

          {/*Skills*/}
          <div className={styles.flex_column_div}>
            <h2 className={`${styles.h2} introBig scroll_show_animate`}>
              Skills
            </h2>

            {/*Design and multimedia*/}
            <div className={styles.flex_column_div}>
              <h3 className={`${styles.h3} introBig scroll_show_animate`}>
                Design and multimedia
              </h3>
              {/*Icons*/}
              <div className={styles.icons}>
                <div className={styles.icon_div}>
                  <img
                    src="/images/design_icons/clip_studio_paint_icon.png"
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    80%
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src="/images/design_icons/adobe_photoshop_icon.png"
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    75%
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src="/images/design_icons/adobe_illustrator_icon.png"
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    60%
                  </p>
                </div>
              </div>
            </div>

            {/*Programming*/}
            <div className={styles.flex_column_div}>
              <h3 className={`${styles.h3} introBig scroll_show_animate`}>
                Frontend-development
              </h3>

              {/*Icons*/}
              <div className={styles.icons}>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    100%
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    100%
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    100%
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    100%
                  </p>
                </div>
              </div>
            </div>

            {/*Languages*/}
            <div className={styles.flex_column_div}>
              <h3 className={`${styles.h3} introBig scroll_show_animate`}>
                Languages
              </h3>

              {/*Icons*/}
              <div className={styles.icons}>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    C1
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    C1
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    C1
                  </p>
                </div>
                <div className={styles.icon_div}>
                  <img
                    src=""
                    alt=""
                    className={`${styles.icon} scroll_show_animate`}
                  />
                  <p
                    className={`${styles.p_icon} introMain scroll_show_animate`}
                  >
                    C1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Hidden container with info about education or experience*/}
      {clickedMore && (
        <section className={styles.hiddenSection}>
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
        </section>
      )}
      <div className={styles.btn_div}>
        {!clickedMore ? (
          <button
            className={`${styles.btn} introBig`}
            onClick={() => setClickedMore(true)}
          >
            More
          </button>
        ) : (
          <button
            className={`${styles.btn} introBig`}
            onClick={() => setClickedMore(false)}
          >
            Less
          </button>
        )}
      </div>
    </>
  );
}
