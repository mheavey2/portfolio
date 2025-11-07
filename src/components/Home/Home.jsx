import styles from "./Home.module.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import About from "../About/About.jsx";
import Skills from "../Skills/Skills.jsx";
import Projects from "../Projects/Projects.jsx";
import WorkWithMe from "../WorkWithMe/WorkWithMe.jsx";
import Footer from "../Footer/Footer.jsx";

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
