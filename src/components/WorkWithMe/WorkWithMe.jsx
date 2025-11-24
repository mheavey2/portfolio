import { NavLink } from "react-router-dom";
import styles from "./WorkWithMe.module.css";
import githubLogo from "../../assets/githubLogoWhite.svg";
import linkedInLogo from "../../assets/linkedInLogoWhite.svg";
import { useAnalytics } from "@keiko-app/react-google-analytics";

export default function WorkWithMe() {
  const { tracker } = useAnalytics();

  const handleLetsDiscussClick = () => {
    tracker.trackEvent("lets_discuss", { button_name: "Lets Discuss" });
  };
  const handleContactGithubClick = () => {
    tracker.trackEvent("get_in_touch", { button_name: "github" });
  };
  const handleContactLinkedInClick = () => {
    tracker.trackEvent("get_in_touch", { button_name: "linkedIn" });
  };

  return (
    <div
      className={styles.workWithMeContainer}
      name="workWithMe"
      aria-label="Work with Me Section"
    >
      <div className={styles.workWithMeCallout}>
        <h2>
          Work With <span>Me</span>
        </h2>
        <p className="text">
          I create tailored strategies that align with your unique business
          goals and technical requirements
        </p>
        <NavLink
          to="contact"
          id={styles.workWithMeBtn}
          aria-label="Contact Button"
          onClick={handleLetsDiscussClick}
        >
          Let's Discuss
        </NavLink>
      </div>
      <div className={styles.getInTouchContainer}>
        <h3>
          Get in <span>Touch</span>
        </h3>
        <div
          className={styles.contactLogosContainer}
          role="group"
          aria-label="Contact Information"
        >
          <a
            href="https://github.com/mheavey2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            onClick={handleContactGithubClick}
          >
            <img
              className={styles.contactLogoImg}
              src={githubLogo}
              alt="white github logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/margaret-heavey-26096b121/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            onClick={handleContactLinkedInClick}
          >
            <img
              className={styles.contactLogoImg}
              src={linkedInLogo}
              alt="linkedIn logo in white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
