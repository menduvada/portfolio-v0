import styles from './Home.module.css';

export const Home = () => {
    return (
        <section className={styles.container} id="home" >
          <div className={styles.content}>
            <h1 className={styles.title}>
              Hii, Myself XYZ   
            </h1>
            <p className={styles.description}>
                I'm a Full Stack Developer with 3+ years of experience in building web applications and services using JavaScript/TypeScript, NodeJS.
            </p>
            <a href='mailto:myemail@email.com'className={styles.contactBtn}>
                Contact Me
                </a>
          </div>
         <img src='assets/hero/heroImage.png' 
         alt='image of me'
         className={styles.heroImg}
         />
        </section>
    );
}