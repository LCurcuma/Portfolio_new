import styles from "./page.module.css";

export default function ImagesSection({ translation, links }) {
  return (
    <section className={styles.image_section}>
      {translation.section.map((section, id) => (
        <div key={id}>
          <h2 className={`${styles.h2} introBig`}>{section.h2}</h2>
          <div className={styles.images_container}>
            {links.images_section[id].images.map((src, imgId) => (
              <a href={section.links[imgId]} key={imgId}>
              <img
                src={src}
                className={styles.image}
                alt={section.alt[imgId]}
                />
                </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
