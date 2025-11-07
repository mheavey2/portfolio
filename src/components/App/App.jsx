import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
