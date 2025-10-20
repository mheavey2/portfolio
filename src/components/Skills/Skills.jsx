import styles from "./Skills.module.css";

export default function Skills() {
  const frontEndSkills = [
    "CSS",
    "HTML",
    "Javascript",
    "React",
    "Typescript",
    "Redux",
  ];

  const backendSkills = ["NodeJS", "PostgreSQL", "SQL", "Express", "Rest APIs"];

  const otherSkills = ["Git", "Github", "Figma", "Jest"];

  return (
    <div className={styles.skillsContainerOuter} name="skills">
      <h2>
        Skills & <span>Technologies</span>
      </h2>
      <p>
        A comprehensive toolkit for building modern web applications from
        frontend to backend.
      </p>
      <div className={styles.skillsContainer}>
        <div
          id={styles.frontendContainer}
          className={styles.skillsContainerItem}
        >
          <h3>Frontend</h3>
          <div className={styles.skillCards}>
            {frontEndSkills.map((item, index) => {
              return (
                <div key={`frontend-${index}`} className={styles.skill}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div
          id={styles.backendContainer}
          className={styles.skillsContainerItem}
        >
          <h3>Backend</h3>
          <div className={styles.skillCards}>
            {backendSkills.map((item, index) => {
              return (
                <div key={`backend-${index}`} className={styles.skill}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div
          id={styles.otherSkillsContainer}
          className={styles.skillsContainerItem}
        >
          <h3>Tools & Others</h3>
          <div className={styles.skillCards}>
            {otherSkills.map((item, index) => {
              return (
                <div key={`other-${index}`} className={styles.skill}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
