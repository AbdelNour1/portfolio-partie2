import React from "react";
import "./project.css";

const Project = ({ project }) => {
  return (
    <div className="project-item">
      <img src={project.image} alt={project.title} />
      <div className="project-info">
        <h3>{project.title}</h3>
        <div className="project-buttons">
          <a href={project.github}>GitHub</a>
          <a href={project.link}>Description</a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Photography",
      image: "project2.jpg",
      github: "https://github.com/projet1",
      link: "/projects/1",
    },
    {
      id: 2,
      title: "Site web fitness",
      image: "project3.jpg",
      github: "https://github.com/AbdelNour1",
      link: "/projects/2",
    },
  ];

  return (
    <div>
      <h1>Projets</h1>
      <div className="project-grid">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
