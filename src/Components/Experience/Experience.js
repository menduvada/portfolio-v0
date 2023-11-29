import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h3 className={styles.title}>Experience</h3>
      <div className={styles.content}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src="assets/skills/html.png" alt="html" />
            <p>HTML</p>
          </li>
          <li className={styles.link}>
            <img src="assets/skills/css.png" alt="css" />
            <p>CSS</p>
          </li>
          <li className={styles.link}>
            <img src="assets/skills/react.png" alt="react" />
            <p>React</p>
          </li>
          <li className={styles.link}>
            <img src="assets/skills/node.png" alt="node" />
            <p>Node</p>
          </li>
          <li className={styles.link}>
            <img src="assets/skills/figma.png" alt="figma" />
            <p>Figma</p>
          </li>
          <li className={styles.link}>
            <img src="assets/skills/sql.png" alt="sql" />
            <p>SQL</p>
          </li>
        </ul>
      </div>
      <div>
        <ul className={styles.history}>
          <li className={styles.expLink}>
            <img src="assets/history/google.png" alt="google" />
            <div className={styles.section}>
            <h3>Software Engineer, Google</h3>
            <p>Sept, 2022 - Present</p>
            </div>
          </li>
          <li className={styles.expLink}>
            <img src="assets/history/microsoft.png" alt="google" />
            <div className={styles.section}>
            <h3>Software Engineer, Microsoft</h3>
            <p>Jan 2020 - Sept, 2022</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
