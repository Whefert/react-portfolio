import Nav from "../Nav/Nav";
import "./Header.css";
import ContactItem from "../ContactItem/ContactItem";
import headshot from "../../assets/jefferson_daley.jpg";

export default function Header() {
  return (
    <>
      <header className="container-fluid">
        <Nav></Nav>
        <div className="row py-5">
          <div className="col d-flex flex-row align-items-center justify-content-center">
            <img src={headshot} className="rounded-circle" alt="" />
            <div className="row flex-column ms-3">
              <div className="col nameAndTitle">
                <h1>Jefferson Daley</h1>
                <p>Full Stack Software Developer | Digital Marketing Expert</p>
              </div>
              <div className="col contact d-flex justify-content-between pt-2">
                <p className="text-white">Connect with me:</p>
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
                  url="mailto:whefertcode@gmail.com"
                  text="whefertcode@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
