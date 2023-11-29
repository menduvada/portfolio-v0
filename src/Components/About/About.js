import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                src="assets/about/aboutImage.png" 
                alt="img"
                className={styles.image}
                />
            
            <ul className={styles.items}>
                <li className={styles.item}>
                <img src="assets/about/cursorIcon.png" alt="img" />
                <div className={styles.itemText}>
                    <h3>Frontend developer</h3>
                    <p>I can do good frontend.</p>
                </div>
                </li>
                <li className={styles.item}>
                <img src="assets/about/serverIcon.png" alt="img" />
                <div className={styles.itemText}>
                    <h3>Backend developer</h3>
                    <p>I am  good at backend.</p>
                </div>
                </li>
                <li className={styles.item}>
                <img src="assets/about/cursorIcon.png" alt="img" />
                <div className={styles.itemText}>
                    <h3>UI Designer</h3>
                    <p>I can make good designs.</p>
                </div>
                </li>
            </ul>
            </div>
        </section>
    );
}
