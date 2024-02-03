import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { skills, projects } from "../../assets/data";
import Project from "../Project/Project";
import SectionHeading from "../SectionHeading/SectionHeading";

const technologies = skills.map((skill) => skill.skill);

export default function Projects() {
  return (
    <>
      <Header />
      <main className="container mt-4">
        <div className="row">
          <div className="col-3">
            <Filter technologies={technologies} />
          </div>
          <div className="col">
            <div className="container">
              <div className="row flex-column">
                <div className="col">
                  <SectionHeading text={"Featured Projects"} />
                  <Project
                    isFeatured={projects[0].isFeatured}
                    image={projects[0].image}
                    name={projects[0].name}
                    technologies={projects[0].technologies}
                    description={projects[0].description}
                    deployedURL={projects[0].deployedURL}
                    gitHubURL={projects[0].gitHubURL}
                  />
                </div>
                <div className="col mt-4">
                  <div className="container ">
                    <SectionHeading text={"Technologies Used"} />
                    <p>MongoDB, Express, Angular, Node, Cloudinary</p>
                    <div className="row gx-2 gy-3">
                      {projects.map((project) => (
                        <div className="col-6">
                          <Project
                            isFeatured={project.isFeatured}
                            image={project.image}
                            name={project.name}
                            technologies={project.technologies}
                            description={project.description}
                            deployedURL={project.deployedURL}
                            gitHubURL={project.gitHubURL}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
