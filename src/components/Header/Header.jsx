import NavbarMenu from "../NavbarMenu/NavbarMenu";
import styles from "./Header.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";

export default function Header() {
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
    <header id={styles.header}>
      <div className={styles.nameContainer}>
        {path === "/" ? (
          <NavLink onClick={scrollToHome} className={`navlink ${styles.title}`}>
            <span>Margaret</span>Heavey
          </NavLink>
        ) : (
          <NavLink onClick={goToHome} className={`navlink ${styles.title}`}>
            <span>Margaret</span>Heavey
          </NavLink>
        )}
      </div>
      <NavbarMenu
        scroll={scroll}
        path={path}
        navigate={navigate}
        goToHome={goToHome}
        scrollToHome={scrollToHome}
      />
    </header>
  );
}
