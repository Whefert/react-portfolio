import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
export default function SkillGroup({ skills }) {
  console.log(skills);
  return (
    <div className="container">
      <div className="row d-flex flex-row ">
        <div className="col-6">
          <ul className="list-group list-group-flush">
            {skills.slice(0, 3).map((skill) => (
              <li className="list-group-item">
                {skill.skill} <FontAwesomeIcon icon={skill.icon} />
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <ul class="list-group list-group-flush">
            {skills.slice(3, 6).map((skill) => (
              <li className="list-group-item">
                {skill.skill} <FontAwesomeIcon icon={skill.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
