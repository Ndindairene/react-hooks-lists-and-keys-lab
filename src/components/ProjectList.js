import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div index="projects">
      <h2>My Projects</h2>
      <div index="project-list">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
