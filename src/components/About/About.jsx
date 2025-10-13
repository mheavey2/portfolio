import styles from "./About.module.css";
import downloadIcon from "../../assets/downloadIconWhite.svg";
import cv from "../../assets/margaret_heavey_CV.pdf";

export default function About() {
  return (
    <div className={styles.aboutContainer} name="about">
      <h2>
        About <span>Me</span>
      </h2>
      <p>
        I'm a passionate full-stack developer, creating digital solutions that
        make a difference. I specialise in building scalable web applications
        using modern technologies like React, Node.js, and TypeScript.
      </p>
      <div className={styles.btnContainer}>
        <a href={cv} download="margaret_heavey_CV">
          <button id={styles.cvBtn}>
            Download CV <img src={downloadIcon} alt="download" />
          </button>
        </a>
      </div>
    </div>
  );
}
