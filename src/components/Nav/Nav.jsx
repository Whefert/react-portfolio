import "./Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-sm-auto m-lg-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  className="nav-link active text-uppercase text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link text-uppercase text-white"
                  to="https://drive.google.com/file/d/13wpdOCk41BoDJpbnzqvcDt9kIx3AW46T/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View my resume
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
