import ProjectDetails from "../project-details/ProjectDetails"
import "./project.css"

const Project = ({size = 'phone', ...props}) => {
 
  return (
    <>
     {/* <svg
          className={`ham hamRotate ham1 ${showSidebar ? "active" : ""}`}
          viewBox="0 0 100 100"
          width="50"
          onClick={handleToggle}
        >
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
      </svg> */}
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
