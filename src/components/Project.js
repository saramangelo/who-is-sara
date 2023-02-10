import { generateKey } from "../../src/utils/helpers";

const Project = (props) => {
  const { projects = [] } = props;

  return (
    <>

   <div className="container-fluid row justify-content-center mt-5">
      {projects.map((project, index) => (
        <div className="project-card col-sm-6" key={generateKey(project.name)}>
          <img
            className="img-fluid shadow-2-strong rounded-4"
            src={require(`../assets/images/${project.image}`)}
            alt={project.description}
          ></img>
          <h2 className="card-title">{project.name}</h2>
          <div className="row icon-wrapper justify-content-end">
            <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a>

            <a href={project.githubLink} target="_blank" rel="noreferrer">{project.githubLink}</a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Project;
