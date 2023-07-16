import "./project-detail.css"

const ProjectDetails = ({title,description, projectUrl}) => {

  return (
    <article className="project-detail">
    <h2 className="project-title">
      {title}
    </h2>
    <p className="project-desc">
    {description}
    </p>
    <a href={projectUrl} title={`View demo site of ${projectUrl}`} target="_blank" rel="noreffer" className="project-button">
      Explore
    </a>
  </article>
  )
}

export default ProjectDetails
