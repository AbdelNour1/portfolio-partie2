import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const codeSnippet = `Je suis Hamadache Abdel Nour et je suis un développeur Full Stack spécialisé 
dans React.
J'ai 4 ans d'expérience dans le développement web, en particulier avec 
les technologies front-end telles que React, HTML, CSS et JavaScript.
Je suis passionné par la création d'applications web interactives 
et conviviales.`;

const skills = [
  { name: "React", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "HTML", level: "80%" },
  { name: "CSS", level: "80%" },
  { name: "Redux", level: "75%" },
  { name: "Mangodb", level: "70%" },
  { name: "Git", level: "80%" },
];

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <div className="row">
        <div className="col-md-12">
          <div className={styles.imageWrapper}>
            <img
              src="profile.png"
              alt="Ma photo"
              className="profile-image img-fluid"
              style={{ width: "400px", height: "400px" }}
            />
          </div>
        </div>
      </div>
      <div className={styles.rowAbout}>
        <div className={styles.propos}>
          <div className={styles.card}>
            <div className="card-body">
              <h2 className="card-title display-4">À propos de moi</h2>
              <p className="card-text lead">{codeSnippet}</p>
            </div>
          </div>
        </div>
        <div className={styles.skillCont}>
          <div className={styles.skillsDiv}>
            <h2>Compétences</h2>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillName}>{skill.name}</div>
                <div className={styles.skillBar}>
                  <div
                    className={styles.skillLevel}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
