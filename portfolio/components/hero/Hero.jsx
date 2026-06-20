"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Hero({ translation, links }) {
  const [clickedMore, setClickedMore] = useState(false);
  const [clickedIcon, setClickedIcon] = useState({
    id: null,
    isClicked: false,
  });
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
  }, [clickedMore]);

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
          src={links.images.hero_image_src}
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
              src={links.animations.about_anim}
              className={`${styles.about_me_anim} scroll_show_animate`}
            />
          </div>

          {/*Skills*/}
          <div className={styles.flex_column_div}>
            <h2 className={`${styles.h2} introBig scroll_show_animate`}>
              {translation.about_me_section.skills.h2}
            </h2>

            {/*Design and multimedia*/}
            <div className={styles.flex_column_div}>
              <h3 className={`${styles.h3} introBig scroll_show_animate`}>
                {translation.about_me_section.skills.h3_1}
              </h3>

              {/*Icons*/}
              <div className={styles.icons}>
                {links.images.icons.design_multimedia.map((link, index) => (
                  <div
                    className={styles.icon_div}
                    key={index}
                    onClick={() => {
                      if (index + "_design" === clickedIcon.id) {
                        setClickedIcon({ id: null, isClicked: false });
                      } else {
                        setClickedIcon({
                          id: index + "_design",
                          isClicked: "design_true",
                        });
                      }
                    }}
                  >
                    <img
                      src={link}
                      alt={
                        translation.about_me_section.skills.icons_alt
                          .design_multimedia[index]
                      }
                      className={`${styles.icon} scroll_show_animate`}
                    />
                    <p
                      className={`${styles.p_icon} introMain scroll_show_animate`}
                    >
                      {
                        translation.about_me_section.skills.percents
                          .design_multimedia[index]
                      }
                    </p>
                  </div>
                ))}
              </div>
              {/*When you click the icon */}
              {clickedIcon.isClicked === "design_true" && (
                <div
                  className={`${styles.added_cont} ${styles.fadeInRideDown}`}
                >
                  <h2 className={`${styles.h2_added} introBig`}>
                    {
                      translation.about_me_section.skills.hidden_design.h2[
                        clickedIcon.id.split("_")[0]
                      ]
                    }
                  </h2>
                  <p className={`${styles.p_added} introMain`}>
                    {
                      translation.about_me_section.skills.hidden_design.p[
                        clickedIcon.id.split("_")[0]
                      ]
                    }
                  </p>
                  <ul>
                    {translation.about_me_section.skills.hidden_design.ul[
                      clickedIcon.id.split("_")[0]
                    ].map((li, index) => (
                      <li key={index} className={`${styles.p_added} introMain`}>
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/*Programming*/}
            <div className={styles.flex_column_div}>
              <h3 className={`${styles.h3} introBig scroll_show_animate`}>
                {translation.about_me_section.skills.h3_2}
              </h3>

              {/*Icons*/}
              <div className={styles.icons}>
                {links.images.icons.programming.map((link, index) => (
                  <div
                    className={styles.icon_div}
                    key={index}
                    onClick={() => {
                      if (index + "_programming" === clickedIcon.id) {
                        setClickedIcon({ id: null, isClicked: false });
                      } else {
                        setClickedIcon({
                          id: index + "_programming",
                          isClicked: "programming_true",
                        });
                      }
                    }}
                  >
                    <img
                      src={link}
                      alt={
                        translation.about_me_section.skills.icons_alt
                          .programming[index]
                      }
                      className={`${styles.icon} scroll_show_animate`}
                    />
                    <p
                      className={`${styles.p_icon} introMain scroll_show_animate`}
                    >
                      {
                        translation.about_me_section.skills.percents
                          .programming[index]
                      }
                    </p>
                  </div>
                ))}
              </div>
              {/*When you click the icon */}
              {clickedIcon.isClicked === "programming_true" && (
                <div
                  className={`${styles.added_cont} ${styles.fadeInRideDown}`}
                >
                  <h2 className={`${styles.h2_added} introBig`}>
                    {
                      translation.about_me_section.skills.hidden_programming.h2[
                        clickedIcon.id.split("_")[0]
                      ]
                    }
                  </h2>
                  <p className={`${styles.p_added} introMain`}>
                    {
                      translation.about_me_section.skills.hidden_programming.p[
                        clickedIcon.id.split("_")[0]
                      ]
                    }
                  </p>
                  <ul>
                    {translation.about_me_section.skills.hidden_programming.ul[
                      clickedIcon.id.split("_")[0]
                    ].map((li, index) => (
                      <li key={index} className={`${styles.p_added} introMain`}>
                        <a href={li.href} className={styles.link}>
                          {li.a}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/*Hidden container with info about education or experience*/}
      {clickedMore && (
        <section className={`${styles.hiddenSection}`}>
          {/*Experience*/}
          <div className={`${styles.flex_row_div}`}>
            <div>
              <h2 className={`introBig ${styles.expH2}`}>
                {translation.about_me_section.hidden_skills.experience.h2}
              </h2>
              <p className={`introMain ${styles.p} ${styles.marginP}`}>
                {translation.about_me_section.hidden_skills.experience.p1}
              </p>
              <p className={`introMain ${styles.p}`}>
                {translation.about_me_section.hidden_skills.experience.p2}
              </p>
            </div>
            <div>
              {translation.about_me_section.hidden_skills.experience.dl.map(
                (dl, index) => (
                  <dl key={index}>
                    <dt className={`${styles.orange} introBig ${styles.dt}`}>
                      {dl.dt}
                    </dt>
                    <dd className={`${styles.pink} introMain ${styles.p}`}>
                      {dl.dd}
                    </dd>
                  </dl>
                ),
              )}
            </div>
          </div>

          {/*Education*/}
          <div className={`${styles.flex_row_div}`}>
            <div>
              <h2 className={`introBig ${styles.expH2}`}>
                {translation.about_me_section.hidden_skills.education.h2}
              </h2>
              <p className={`introMain ${styles.p} ${styles.marginP}`}>
                {translation.about_me_section.hidden_skills.education.p1}
              </p>
              <p className={`introMain ${styles.p}`}>
                {translation.about_me_section.hidden_skills.education.p2}
              </p>
              <p className={`introMain ${styles.p}`}>
                {translation.about_me_section.hidden_skills.education.p3}
              </p>
            </div>
            <div>
              {translation.about_me_section.hidden_skills.education.dl.map(
                (dl, index) => (
                  <dl key={index}>
                    <dt className={`${styles.orange} introBig ${styles.dt}`}>
                      {dl.dt}
                    </dt>
                    <dd className={`${styles.pink} introMain ${styles.p}`}>
                      {dl.dd}
                    </dd>
                  </dl>
                ),
              )}
            </div>
          </div>
        </section>
      )}
      <div className={styles.btn_div}>
        {!clickedMore ? (
          <button
            className={`${styles.btn} introBig scroll_show_animate`}
            onClick={() => setClickedMore(true)}
          >
            {translation.about_me_section.btn.more}
          </button>
        ) : (
          <button
            className={`${styles.btn} introBig scroll_show_animate`}
            onClick={() => setClickedMore(false)}
          >
            {translation.about_me_section.btn.less}
          </button>
        )}
      </div>
    </>
  );
}
