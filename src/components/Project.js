import { generateKey } from "../../src/utils/helpers";

const Project = (props) => {
  const { projects = [] } = props;

  return (
    <>
      {projects.map((project, index) => (
        <div className="project-card" key={generateKey(project.name)}>
          <img
            src={require(`../../assets/images/${project.image}`).default}
            alt={project.description}
          ></img>
          <h2 className="card-title">{project.name}</h2>
          <div className="row icon-wrapper justify-content-end">
            {project.link !== null ? (
              <div className="card-icon">
                <a href={project.link} target="_blank" rel="noreferrer"></a>
              </div>
            ) : (
              <></>
            )}
            {project.githubLink !== null ? (
              <div className="card-icon">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
