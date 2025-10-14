import styles from "./ProjectCard.module.css";
import externalLink from "../../assets/externalLinkWhite.svg";
import githubLogo from "../../assets/githubLogoWhite.svg";

export default function ProjectCard({ projects }) {
  return (
    <div className={styles.projectCard}>
      {projects.map((project, index) => {
        return (
          <div key={index} className={styles.projectItem}>
            <img
              src={project.img}
              alt={project.alt}
              className={styles.projectImg}
            />
            <div className={styles.projectInfo}>
              <h3>{project.name}</h3>
              <p>{project.tagline}</p>
            </div>
            <div className={styles.technologyContainerOuter}>
              <div className={styles.technologyContainer}>
                {project.technologies.map((technology) => (
                  <div className={styles.technology}>{technology}</div>
                ))}
              </div>
            </div>
            <div className={styles.projectLinksContainer}>
              <a href={project.demo} className={styles.projectLink}>
                <img src={externalLink} alt="open demo link in new window" />
              </a>
              <a href={project.code} className={styles.projectLink}>
                <img
                  src={githubLogo}
                  alt="open source code link in new window"
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
