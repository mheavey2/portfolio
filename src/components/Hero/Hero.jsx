import { NavLink } from "react-router-dom";
import styles from "./Hero.module.css";
import * as Scroll from "react-scroll";
import { useAnalytics } from "@keiko-app/react-google-analytics";

export default function Hero() {
  const { tracker } = useAnalytics();
  const scroller = Scroll.scroller;
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
    tracker.trackEvent("button_click", { button_name: "View My Work" });
  };

  const handleClick = () => {
    tracker.trackEvent("button_click", { button_name: "Lets Collaborate" });
  };

  return (
    <div className={styles.heroContainer}>
      <h1>Web Developer</h1>
      <h2>Crafting Digital Experiences</h2>
      <p className="text">
        I create modern, responsive web applications using React, Javascript,
        TypeScript, and Node.js. Passionate about clean code, user experience,
        and solving complex problems.
      </p>
      <div className={styles.btnContainer}>
        <button id={styles.workBtn} className={styles.heroBtn}>
          <NavLink
            onClick={scrollToProjects}
            className="navlink"
            aria-label="View Projects"
          >
            View My Work
          </NavLink>
        </button>
        <button
          id={styles.collabBtn}
          className={styles.heroBtn}
          onClick={handleClick}
        >
          <NavLink
            to="contact"
            className="navlink"
            aria-label="Go to Contact Page"
          >
            Lets Collaborate
          </NavLink>
        </button>
      </div>
    </div>
  );
}
