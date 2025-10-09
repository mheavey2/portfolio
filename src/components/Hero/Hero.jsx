import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1>Web Developer</h1>
      <h2>Crafting Digital Experiences</h2>
      <p>
        I create modern, responsive web applications using React, Javascript,
        TypeScript, and Node.js. Passionate about clean code, user experience,
        and solving complex problems.
      </p>
      <div className={styles.btnContainer}>
        <button id={styles.workBtn} className={styles.heroBtn}>
          <NavLink to="projects" className="navlink">
            View My Work
          </NavLink>
        </button>
        <button id={styles.collabBtn} className={styles.heroBtn}>
          <NavLink to="contact" className="navlink">
            Lets Collaborate
          </NavLink>
        </button>
      </div>
    </div>
  );
}
