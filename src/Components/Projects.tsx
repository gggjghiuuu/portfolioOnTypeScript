import type { Project } from "../data";
import "../App.css";
interface IProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: IProjectsProps) {
  return (
    <div>
      <h2>Моё портфолио</h2>
      <div className="project-card">
        {projects.map((project, i) => (
          <a key={i} href={project.link} className="project-link">
            <img src={project.image} className="project-image"></img>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div>
              {project.langs.map((lang, i) => (
                <span className="project-langs" key={i}>
                  {lang}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
