import styles from "./NavbarMenu.module.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import menuIcon from "../../assets/menuIconWhite.svg";
import closeIcon from "../../assets/closeIconWhite.svg";
import * as Scroll from "react-scroll";

export default function NavbarMenu() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenuVisiblility = () => {
    setIsHidden(!isHidden);
  };

  const navMenuRef = useRef(null);

  //use react-scroller to scroll to different page sections
  // const scroll = Scroll.animateScroll();
  const scroller = Scroll.scroller;

  // scroll to about from within homepage
  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  // scroll to skills from within homepage
  const scrollToSkills = () => {
    scroller.scrollTo("skills", {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  // scroll to projects from within homepage
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

  // scroll to contact from within homepage
  const scrollToContact = () => {
    scroller.scrollTo("workWithMe", {
      duration: 200,
      delay: 0,
      smooth: true,
      offset: 0,
    });
  };

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
          <NavLink
            onClick={scrollToAbout}
            className={`navlink ${styles.navItem}`}
            role="menuitem"
          >
            About
          </NavLink>

          <NavLink
            onClick={scrollToSkills}
            className={`navlink ${styles.navItem}`}
            role="menuitem"
          >
            Skills
          </NavLink>
          <NavLink
            onClick={scrollToProjects}
            className={`navlink ${styles.navItem}`}
            role="menuitem"
          >
            Projects
          </NavLink>
          <NavLink
            onClick={scrollToContact}
            className={`navlink ${styles.navItem}`}
          >
            Contact
          </NavLink>
        </nav>
        <button id={styles.contactBtn}>Get in Touch</button>
      </div>
    </>
  );
}
