import NavbarMenu from "../NavbarMenu/NavbarMenu";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header({ path, scrollToHome, goToHome, navigate }) {
  return (
    <header id={styles.header}>
      <div className={styles.nameContainer} aria-label="Personal Branding">
        {path === "/" ? (
          <NavLink
            onClick={scrollToHome}
            className={`navlink ${styles.title}`}
            aria-label="Navigate to Home"
          >
            <span>Margaret</span>Heavey
          </NavLink>
        ) : (
          <NavLink
            onClick={goToHome}
            className={`navlink ${styles.title}`}
            aria-label="Navigate to Home Page"
          >
            <span>Margaret</span>Heavey
          </NavLink>
        )}
      </div>
      <NavbarMenu
        path={path}
        navigate={navigate}
        goToHome={goToHome}
        scrollToHome={scrollToHome}
        aria-label="Main Navigation Menu"
      />
    </header>
  );
}
