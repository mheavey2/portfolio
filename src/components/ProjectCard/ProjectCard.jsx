import styles from "./ProjectCard.module.css";
import externalLink from "../../assets/externalLinkWhite.svg";
import githubLogo from "../../assets/githubLogoWhite.svg";
import { useAnalytics } from "@keiko-app/react-google-analytics";

export default function ProjectCard({ projects }) {
  const { tracker } = useAnalytics();

  const handleDemoClick = (project) => {
    tracker.trackEvent("demo_click", {
      button_name: project.name,
      project_url: project.demo,
    });
  };

  const handleRepoClick = (project) => {
    tracker.trackEvent("repo_click", {
      button_name: project.name,
      project_url: project.code,
    });
  };

  return (
    <ul className={styles.projectCard} aria-label="Project Showcase">
      {projects.map((project, index) => {
        return (
          <li key={index} className={styles.projectItem}>
            <img
              src={project.img}
              alt={project.alt}
              className={styles.projectImg}
            />
            <div className={styles.projectInfo}>
              <h3>{project.name}</h3>
              <p className="text">{project.tagline}</p>
            </div>
            <div className={styles.technologyContainerOuter}>
              <div className={styles.technologyContainer}>
                {project.technologies.map((technology, index) => (
                  <div key={index} className={styles.technology}>
                    {technology}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.projectLinksContainer}>
              {project.demo && (
                <a
                  href={project.demo}
                  className={styles.projectLink}
                  onClick={() => handleDemoClick(project)}
                >
                  <img src={externalLink} alt="open demo link in new window" />
                </a>
              )}
              <a
                href={project.code}
                className={styles.projectLink}
                onClick={() => handleRepoClick(project)}
              >
                <img
                  src={githubLogo}
                  alt="open source code link in new window"
                />
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
