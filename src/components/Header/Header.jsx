import Nav from "../Nav/Nav";
import "./Header.css";
import ContactItem from "../ContactItem/ContactItem";
import headshot from "../../assets/jefferson_daley.jpg";

export default function Header() {
  return (
    <>
      <header className="container-fluid gx-0">
        <Nav></Nav>
        <div className="row py-5">
          <div className="col d-flex flex-column flex-md-row align-items-center justify-content-center mb-">
            <img
              src={headshot}
              className="rounded-circle mb-2 mb-lg-0"
              alt=""
            />
            <div className="row flex-column mx-3">
              <div className="col nameAndTitle">
                <h1>Jefferson Daley</h1>
                <p>Full Stack Software Developer | Digital Marketing Expert </p>
              </div>
              <div className="col contact d-flex justify-content-between pt-2 flex-column flex-md-row py-2">
                <p className="text-white my-auto">Connect with me:</p>
                <ContactItem
                  icon="bi bi-github"
                  url="https://github.com/Whefert"
                  text="Whefert"
                />
                <ContactItem
                  icon="bi bi-linkedin"
                  url="https://www.linkedin.com/in/jefferson-daley-208755b3/"
                  text="jefferson-daley-208755b3"
                />
                <ContactItem
                  icon="bi bi-envelope"
                  url="mailto:daleydesignja@gmail.com"
                  text="daleydesignja@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
