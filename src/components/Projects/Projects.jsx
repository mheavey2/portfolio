import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import jamminApp from "../../assets/jamminAppLoginScreen.png";
import recipeApp from "../../assets/recipeAppLandingPage.png";
import ticTacToe from "../../assets/ticTacToe.png";
import githubLogo from "../../assets/githubLogoWhite.svg";
import fitFusion from "../../assets/fitFusionHome.png";

export default function Projects() {
  const projects = [
    {
      name: "FitFusion Studio Gym",
      tagline:
        "A responsive website for a gym business showcasing its services, team members, membership packages and class schedules.",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "React Router"],
      demo: "https://fitfusionstudios.netlify.app/",
      code: "https://github.com/mheavey2/fit-fusion-gym",
      img: fitFusion,
      alt: "fitFusion Studio Gym landing page",
    },
    {
      name: "Recipe App",
      tagline:
        "A fullstack app that allows users to search for recipes using a recipe database API and view, add and manage their favourites.",
      technologies: [
        "HTML",
        "CSS",
        "TypeScript",
        "ReactJS",
        "NodeJS",
        "Prisma",
      ],
      demo: "",
      code: "https://github.com/mheavey2/recipe-app",
      img: recipeApp,
      alt: "recipe app landing page",
    },
    {
      name: "Jammin App",
      tagline:
        "A simple music app created using ReactJS that allows users to create and save custom playlists to their Spotify account.",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
      demo: "https://jammin-music-app.netlify.app",
      code: "https://github.com/mheavey2/jammingApp",
      img: jamminApp,
      alt: "Jammin App Login Screen",
    },
    {
      name: "Tic Tac Toe",
      tagline:
        "A simple two player Tic-Tac-Toe (X's and O's) game created using CSS, HTML, Javascript and ReactJS.",
      technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
      demo: "https://tic-tac-toe-x-and-o.netlify.app",
      code: "https://github.com/mheavey2/ticTacToe",
      img: ticTacToe,
      alt: "ticTacToe game landing page",
    },
  ];

  return (
    <div
      className={styles.projectsContainerOuter}
      name="projects"
      aria-label="Projects"
    >
      <h2>
        Featured <span>Projects</span>
      </h2>
      <p>
        A selection of projects that showcase my skills in full-stack
        development, UI/UX design, and problem-solving skills.
      </p>

      <ProjectCard projects={projects} />
      <button id={styles.projectsBtn}>
        <img src={githubLogo} alt="white github logo" />
        <span>View All Projects</span>
      </button>
    </div>
  );
}
