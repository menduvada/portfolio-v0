import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>PROJECTS</h3>
            <div className={styles.content}>
            <div className={styles.projects}>
                <img src='assets/projects/project.png' alt='p1'/>
                <h4>Project1</h4>
                <p>description</p>
                <a href="link">Link</a>
            </div>
            <div className={styles.projects}>
            <img src='assets/projects/project.png' alt='p1'/>
                <h4>Project2</h4>
                <p>description</p>
                <a href="link">Link</a>
            </div>
            </div>
        </section>
    );
}