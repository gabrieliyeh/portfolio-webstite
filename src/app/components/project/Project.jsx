import ProjectDetails from "../project-details/ProjectDetails"
import "./project.css"

const Project = ({size = 'phone', ...props}) => {
 
  return (
    <>
    {
      size === 'phone' ?(
        <div className="project">
        <div className="phone">
          <img src="/static/phone.png" alt="phone-image" />
          <div className="phone-screen">
            <img src={props.imgUrl} alt="main work" className="phoneApp" />
          </div>
        </div>
        <ProjectDetails title={props.title} description={props.description} projectUrl={props.projectUrl} />
      </div>
      ): (
        <div className="project">
        <div className="laptop">
            <img src="/static/laptop.png" alt="laptop-image" />
            <div className="laptop-screen">
              <img src={props.imgUrl} alt="laptop view lading page screenshot of a web page" className="laptopApp" />
            </div>
          </div>
          <div className="phone-sm">
            <img src="/static/phone.png" alt="phone-image" />
            <div className="phone-screen">
              <img src={props.imgUrlSm} alt="main work" className="phoneApp" />
            </div>
          </div>
          <ProjectDetails title={props.title} description={props.description} projectUrl={props.projectUrl} />
      </div>
      )
    } 
    </>
  )
}

export default Project
