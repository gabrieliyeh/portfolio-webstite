import ProjectDetails from "../project-details/ProjectDetails"
import "./project.css"

const Project = ({size = 'phone', ...props}) => {
 
  return (
    <>
    {
      size === 'phone' ?(
        <section className="project">
        <div className="phone">
          <div className="phoneWrapper">
          <img src="/static/phone.png" alt="phone-image" loading="lazy" />
          </div>
          <div className="phone-screen">
            <img src={props.imgUrl} alt="main work" loading="lazy"  className="phoneApp" />
          </div>
        </div>
        <ProjectDetails title={props.title} description={props.description} projectUrl={props.projectUrl} />
      </section>
      ): (
        <section className="project">
        <div className="laptop">
          <div className="laptopWrapper">
            <img src="/static/laptop.png" alt="laptop-image" loading="lazy" />
          </div>
            <div className="laptop-screen">
              <img src={props.imgUrl} alt="laptop view lading page screenshot of a web page" className="laptopApp" loading="lazy" />
            </div>
          </div>
          <div className="phone-sm">
            <div className="phoneWrapper">
            <img src="/static/phone.png" alt="phone-image" loading="lazy" />
            </div>
            <div className="phone-screen">
              <img src={props.imgUrlSm} alt="main work" className="phoneApp" loading="lazy" />
            </div>
          </div>
          <ProjectDetails title={props.title} description={props.description} projectUrl={props.projectUrl} />
      </section>
      )
    } 
    </>
  )
}

export default Project
