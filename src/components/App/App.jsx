import styles from "./App.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <Hero />
      </div>
    </div>
  );
}

export default App;
