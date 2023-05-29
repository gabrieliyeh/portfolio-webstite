import "./project-detail.css"

const ProjectDetails = ({title,description, projectUrl}) => {

  return (
    <div className="project-detail">
    <h2 className="project-title">
      {title}
    </h2>
    <p className="project-desc">
    {description}
    </p>
    <a href={projectUrl} target="_blank" rel="noreffer" className="project-button">
      Learn More
    </a>
  </div>
  )
}

export default ProjectDetails
