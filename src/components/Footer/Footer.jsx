import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer className="text-center py-1 mt-4">
        Powered by React
        <span>
          <FontAwesomeIcon className="ps-2" icon={faReact} />
        </span>
      </footer>
    </>
  );
}
