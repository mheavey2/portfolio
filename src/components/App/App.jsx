import styles from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAnalytics } from "@keiko-app/react-google-analytics";

import { useLayoutEffect } from "react";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const { tracker } = useAnalytics();

  //track page views
  useEffect(() => {
    tracker.trackPageView({});
  }, [location, tracker]);

  // scroll to top of page after a page transition
  useLayoutEffect(() => {
    document.documentElement.scrollTo(
      { top: 0, left: 0, behaviour: "instant" },
      [location.pathname]
    );
  });

  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.appContainer}>
      <Header path={path} goToHome={goToHome} navigate={navigate} />
      <Outlet path={path} goToHome={goToHome} navigate={navigate} />
      <Footer />
    </div>
  );
}

export default App;
