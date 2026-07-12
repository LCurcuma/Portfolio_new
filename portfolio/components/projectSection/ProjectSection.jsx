"use client";
import styles from "./page.module.css";

export default function ProjectSection({ translation, links, id }) {
  return (
    <section className={styles.project_section}>
      <div className={`${styles.section}`}>
        <div>
          <h1 className={`${styles.h1} introBig`}>Name of project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            molestias ipsam accusantium doloremque, ipsum odit aliquid tempora
            voluptas soluta officia pariatur dignissimos totam consequatur omnis
            repellat eos! Tempore, iste modi!
          </p>
        </div>
        <img src="/images/projects/animations/manya_fail_f.gif" className={styles.image} />
      </div>
      <div>
        <img src="/images/projects/animations/manya_fail_f.gif" />
        <div>
          <h2>Process section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit laudantium libero perferendis accusamus facilis ab id,
            odio inventore animi esse. Corrupti eaque quasi veritatis recusandae
            consectetur nemo iure dolor magni.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h2>Process section</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus iure quisquam porro ducimus perferendis nemo, autem
            eos inventore dolore fugit esse ratione iusto. Tenetur autem quam
            soluta iusto temporibus error.
          </p>
        </div>
        <div>
          <h2>Process section</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A vero
            ducimus, tempora magnam blanditiis iusto pariatur porro, incidunt
            libero non ullam asperiores aliquam velit modi culpa ipsum eveniet
            voluptatibus consequatur?
          </p>
        </div>
      </div>
    </section>
  );
}
