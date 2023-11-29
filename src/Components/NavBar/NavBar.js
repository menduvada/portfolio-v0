import styles from "./NavBar.module.css";
// import { useState } from "react";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div>
                <ul className={styles.menuItem}>
                   <li>
                        <a className={styles.active} href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#about">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}