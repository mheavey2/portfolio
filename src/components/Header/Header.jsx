import NavbarMenu from "../../NavbarMenu/NavbarMenu";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id={styles.header}>
      <div className={styles.nameContainer}>
        <NavLink to="/" id={styles.title} className="navlink">
          <span>Margaret</span>Heavey
        </NavLink>
      </div>
      <NavbarMenu />
    </header>
  );
}
