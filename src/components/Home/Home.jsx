import styles from "./Home.module.css";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import WorkWithMe from "../WorkWithMe/WorkWithMe.jsx";

export default function Home() {
  return (
    <div className={styles.contentContainer}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <WorkWithMe />
    </div>
  );
}
