import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { skills, projects } from "../../assets/data";
import Project from "../Project/Project";
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from "react";

const technologies = [...skills.map((skill) => skill.skill)];
let searchTerms = [];

function deriveProjects(terms) {
  let filteredProjects = [];
  terms.forEach((term) => {
    //search the projects array for projects that use the technology

    filteredProjects.push(
      ...projects.filter((project) => {
        return project.technologies.includes(term);
      })
    );
  });

  filteredProjects = [...new Set(filteredProjects)];

  return filteredProjects;
}

export default function Projects() {
  const [filterTerms, setFilterTerms] = useState([...technologies]);

  const filteredProjects = deriveProjects(filterTerms);

  function handleFilterSelect(technology) {
    searchTerms.push(technology);
    console.log("Search terms: " + searchTerms);
    setFilterTerms([...searchTerms]);
    console.log("Filter terms: " + filterTerms);
  }
  function handleFilterDeSelect(technology) {
    searchTerms = [
      ...searchTerms.filter((term) => {
        return term !== technology;
      }),
    ];
    setFilterTerms([...searchTerms]);
    console.log("Filter terms: " + filterTerms);
  }

  return (
    <>
      <Header />
      <main className="container mt-4">
        <div className="row">
          <div className="col-3 ">
            <Filter
              onItemSelect={handleFilterSelect}
              onItemDeSelect={handleFilterDeSelect}
              technologies={technologies}
            />
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
                    <p>{filterTerms.toString()}</p>
                    <div className="row gx-2 gy-3">
                      {filteredProjects.map((project) => (
                        <div className="col-12 col-lg-6">
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
