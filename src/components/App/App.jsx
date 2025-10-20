import styles from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import WorkWithMe from "../WorkWithMe/WorkWithMe";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WorkWithMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
