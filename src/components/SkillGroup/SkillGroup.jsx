import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
export default function SkillGroup() {
  return (
    <div className="col-6">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                HTML <FontAwesomeIcon icon={faHtml5} />
              </li>
              <li class="list-group-item">
                CSS <FontAwesomeIcon icon={faCss3Alt} />
              </li>
              <li class="list-group-item">
                JavaScript <FontAwesomeIcon icon={faJs} />
              </li>
            </ul>
          </div>
          <div className="col">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                React <FontAwesomeIcon icon={faReact} />
              </li>

              <li class="list-group-item">JQuery</li>
              <li class="list-group-item">Bootsrap</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
