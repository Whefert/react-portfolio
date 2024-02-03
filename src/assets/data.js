import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faMobile,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

export const EducationData = [
  {
    program: "Certificate, Front-End Web Development",
    school: "edX | UK Gov Skills For Life Bootcamp",
    completionDate: "Feb 2024",
    GPA: "",
  },
  {
    program: "BSc. Information Technology",
    school: "University of the Commonwealth Caribbean (UCC)",
    completionDate: "(Pending Dec 2024)",
    GPA: "3.84/4.0",
  },
  {
    program: "MPS Integrated Marketing Communication",
    school: "Georgetown University",
    completionDate: "Dec 2017",
    GPA: "magna cum laude",
  },
  {
    program: "BA Mass Communication & Media Studies, Minor Marketng",
    school: "edX | UK Gov SkiCaldwell University",
    completionDate: "Dec 2016",
    GPA: "magna cum laude",
  },
];

export const skills = [
  { skill: "HTML5", icon: faHtml5, isFrontend: true, isBackend: false },
  { skill: "CSS", icon: faCss3Alt, isFrontend: true, isBackend: false },
  { skill: "JavaScript ES6", icon: faJs, isFrontend: true, isBackend: false },
  { skill: "React", icon: faReact, isFrontend: true, isBackend: false },
  { skill: "JQuery", icon: faCode, isFrontend: true, isBackend: false },
  { skill: "Bootstrap", icon: faCode, isFrontend: true, isBackend: false },
  { skill: "Node.js", icon: faNode, isFrontend: true, isBackend: true },
  { skill: "Kotlin", icon: faMobile, isFrontend: true, isBackend: true },
  { skill: "PHP", icon: faPhp, isFrontend: true, isBackend: true },
  { skill: "SQL", icon: faDatabase, isFrontend: true, isBackend: true },
  { skill: "MongoDB", icon: faDatabase, isFrontend: true, isBackend: true },
  { skill: "Firebase", icon: faDatabase, isFrontend: true, isBackend: true },
];
