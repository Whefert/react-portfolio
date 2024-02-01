import "./Nav.css";

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
            <ul class="navbar-nav  me-sm-auto m-lg-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-uppercase text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase text-white" href="#">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase text-white">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase text-white">View my resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
