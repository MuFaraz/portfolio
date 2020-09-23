import React, { useContext } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { ScrollContext } from "../../Context/scroll";
import projectImg from "../../assets/imgs/dummy-project.png";
function ProjectCard({ project }) {
  const { scrollChange } = useContext(ScrollContext);
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        if (isVisible) {
          scrollChange("projects");
        }
      }}
    >
      <div className="project-card">
        <div className="content-wrapper">
          <div className="card-content">
            <img src={project.image} alt="" className="project-card-img" />
            <div className="project-name">{project.projectName}</div>
            <div className="card-bio">{project.projectBio}</div>
            <div className="card-bio" >  Url:  <a style={{color:"#94a1b2",textDecoration:"underline"}}
              className="btn btn-1"
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
             {project.projectUrl}
            </a></div>

          </div>
        </div>
        <div className="languages">
          <div className="languages-profile">
            <div className="languages-name">
              {project.stackList.map((stack, i) => {
                return <span key={i}>{stack}</span>;
              })}
            </div>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default ProjectCard;
