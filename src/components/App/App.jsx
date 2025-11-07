import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";

function App() {
  //use react-scroller to scroll to different page sections
  const scroll = Scroll.animateScroll;
  const navigate = useNavigate();
  const path = useLocation().pathname;

  // scroll to home
  const scrollToHome = () => {
    scroll.scrollToTop({
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  const goToHome = () => {
    navigate("/");
    scrollToHome();
  };
  return (
    <div className={styles.appContainer}>
      <Header
        path={path}
        scrollToHome={scrollToHome}
        goToHome={goToHome}
        navigate={navigate}
      />
      <Outlet
        path={path}
        scrollToHome={scrollToHome}
        goToHome={goToHome}
        navigate={navigate}
      />
      <Footer />
    </div>
  );
}

export default App;
