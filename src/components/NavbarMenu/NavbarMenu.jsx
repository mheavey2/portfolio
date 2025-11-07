import styles from "./NavbarMenu.module.css";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import menuIcon from "../../assets/menuIconWhite.svg";
import closeIcon from "../../assets/closeIconWhite.svg";
import * as Scroll from "react-scroll";

export default function NavbarMenu({ path, navigate }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenuVisiblility = () => {
    setIsHidden(!isHidden);
  };

  const navMenuRef = useRef(null);
  //use react-scroller to scroll to different page sections

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

  // scroll to about from page other than homepage
  const goToHomeAndScrollToABout = async () => {
    await navigate("/");
    await scrollToAbout();
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
  // scroll to skills from page other than homepage
  const goToHomeAndScrollToSkills = async () => {
    await navigate("/");
    await scrollToSkills();
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
  // scroll to projects from page other than homepage
  const goToHomeAndScrollToProjects = async () => {
    await navigate("/");
    await scrollToProjects();
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
  // scroll to contact from page other than homepage
  const goToHomeAndScrollToContact = async () => {
    await navigate("/");
    await scrollToContact();
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
          {path === "/" ? (
            <NavLink
              onClick={scrollToAbout}
              className={`navlink ${styles.navItem}`}
              role="menuitem"
            >
              About
            </NavLink>
          ) : (
            <NavLink
              onClick={goToHomeAndScrollToABout}
              className={`navlink ${styles.navItem}`}
              role="menuitem"
            >
              About
            </NavLink>
          )}
          {path === "/" ? (
            <NavLink
              onClick={scrollToSkills}
              className={`navlink ${styles.navItem}`}
              role="menuitem"
            >
              Skills
            </NavLink>
          ) : (
            <NavLink
              onClick={goToHomeAndScrollToSkills}
              className={`navlink ${styles.navItem}`}
              role="menuitem"
            >
              Skills
            </NavLink>
          )}
          {path === "/" ? (
            <NavLink
              onClick={scrollToProjects}
              className={`navlink ${styles.navItem}`}
              role="menuitem"
            >
              Projects
            </NavLink>
          ) : (
            <NavLink
              onClick={goToHomeAndScrollToProjects}
              className={`navlink ${styles.navItem}`}
              role="menuitem"
            >
              Projects
            </NavLink>
          )}
          {path === "/" ? (
            <NavLink
              onClick={scrollToContact}
              className={`navlink ${styles.navItem} ${styles.navContact}`}
              role="menuitem"
            >
              Contact
            </NavLink>
          ) : (
            <NavLink
              onClick={goToHomeAndScrollToContact}
              className={`navlink ${styles.navItem} ${styles.navContact}`}
              role="menuitem"
            >
              Contact
            </NavLink>
          )}
        </nav>
        <NavLink
          to="contact"
          id={styles.contactBtn}
          className={styles.contactBtn}
        >
          Get in Touch
        </NavLink>
      </div>
    </>
  );
}
