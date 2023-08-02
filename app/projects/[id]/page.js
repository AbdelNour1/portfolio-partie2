import "./projectDetails.css";

const ProjectDetails = ({ params: { id } }) => {
  // Récupérer les détails spécifiques du projet en fonction de l'ID
  const project = getProjectDetails(id);

  // Fonction pour récupérer les détails du projet en fonction de l'ID
  function getProjectDetails(id) {
    // Effectuez ici votre logique de récupération des détails du projet
    // par exemple, en utilisant une API, une base de données ou un tableau de projets

    // Retournez les détails du projet correspondant à l'ID
    if (id === "1") {
      return {
        id: 1,
        title: "Portfolio Photography",
        description:
          "site web réactif, élégant et interactif. Galeries photo, animations fluides. Développé en HTML, CSS, JavaScript. Met en valeur le talent artistique des photographes.",
        image: "/project2.jpg",
        github: "https://github.com/projet1",
        technologies: ["HTML", "CSS", "JavaScript"],
      };
    } else if (id === "2") {
      return {
        id: 2,
        title: "Site web fitness",
        description:
          "réactif, élégant et interactif. Programme d entraînement  conseils de nutrition. Développé en HTML  CSS  JavaScript React. Favorise une vie saine et active.",
        image: "/project3.jpg",
        github: "https://github.com/projet2",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
      };
    } else {
      // Retournez un objet vide ou un message d'erreur si l'ID n'est pas valide
      return {};
    }
  }

  return (
    <div className="project-details-container full-height">
      <h2>Détails du projet</h2>
      <div className="project-details">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>
          Technologies utilisées :{" "}
          {project.technologies.map((technology, index) => (
            <span key={index} className="technology">
              {" "}
              {technology}
            </span>
          ))}
        </p>
        <a href={project.github}>GitHub</a>
      </div>
      <div className="project-space" />
    </div>
  );
};

export default ProjectDetails;
