import NavbarMenu from "../NavbarMenu/NavbarMenu";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header({ path, scrollToHome, goToHome, navigate }) {
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
        path={path}
        navigate={navigate}
        goToHome={goToHome}
        scrollToHome={scrollToHome}
      />
    </header>
  );
}
