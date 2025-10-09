import styles from "./NavbarMenu.module.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import menuIcon from "../assets/menuIconWhite.svg";
import closeIcon from "../assets/closeIconWhite.svg";

export default function NavbarMenu() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenuVisiblility = () => {
    setIsHidden(!isHidden);
  };

  const navMenuRef = useRef(null);

  useEffect(() => {
    //method to handle closing menu when you click elsewhere on the page
    const handleClickOutside = (event) => {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        console.log("Closing Menu - click outside detected");
        setIsHidden(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={styles.navMenuContainer}
        ref={navMenuRef}
        role="menu"
        aria-expanded={!isHidden}
      >
        <button
          id={styles.navMenuBtn}
          onClick={toggleMenuVisiblility}
          aria-controls="navbar-menu"
          aria-expanded={!isHidden}
          aria-label={isHidden ? "Open menu" : "Close menu"}
        >
          <img
            src={isHidden ? menuIcon : closeIcon}
            alt={isHidden ? "Open menu icon" : "close menu icon"}
          />
        </button>

        <nav
          className={`${
            isHidden ? `${styles.hidden}` : `${styles.navbarMenu}`
          }`}
          role="menu"
        >
          <NavLink to="/" className={`navlink ${styles.navItem}`}>
            About
          </NavLink>
          <NavLink to="skills" className={`navlink ${styles.navItem}`}>
            Skills
          </NavLink>
          <NavLink to="projects" className={`navlink ${styles.navItem}`}>
            Projects
          </NavLink>
          <NavLink to="contact" className={`navlink ${styles.navItem}`}>
            Contact
          </NavLink>
        </nav>
        <button id={styles.contactBtn}>Get in Touch</button>
      </div>
    </>
  );
}
