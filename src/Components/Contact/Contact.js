import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
          <div className={styles.text}>
            <h2>Get in touch</h2>
            <p>Feel free to reach out!</p>
          </div>
          <ul className={styles.links}>
            <li className={styles.link}>
            <img src="/assets/contact/emailIcon.png" alt="email" />
            <a href="mailto:myemail@email.com">myemail@email.com</a>
           </li>
           <li className={styles.link}>
            <img src="/assets/contact/linkedinIcon.png" alt="linkedin" />
            <a href="https://www.linkedin.com/myname">linkedin.com/myname</a>
           </li>
           <li className={styles.link}>
            <img src="/assets/contact/githubIcon.png" alt="github" />
            <a href="mailto:myemail@email.com">github.com/myname</a>
           </li>
          </ul>
        </footer>
    );
}