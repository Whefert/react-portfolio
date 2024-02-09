import hospital from "../assets/hospital.jpg";
import team from "../assets/team.jpg";
import it_mobile_app from "../assets/it_department_mobile_app.jpg";
import daily_planner from "../assets/daily_planner.gif";
import beach_search_engine from "../assets/beach_search_engine.gif";
import biblio from "../assets/biblio.gif";
import react_portfolio from "../assets/react-portfolio.gif";
import bookkeeping_app from "../assets/bookkeeping_app.png";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faNode,
  faPhp,
  faPython,
  faGithub,
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
    school: "Caldwell University",
    completionDate: "Dec 2016",
    GPA: "magna cum laude",
  },
];

export const skills = [
  { skill: "HTML5", icon: faHtml5, isFrontend: true, isBackend: false },
  { skill: "CSS", icon: faCss3Alt, isFrontend: true, isBackend: false },
  { skill: "JavaScript", icon: faJs, isFrontend: true, isBackend: false },
  { skill: "React", icon: faReact, isFrontend: true, isBackend: false },
  { skill: "jQuery", icon: faCode, isFrontend: true, isBackend: false },
  { skill: "Bootstrap", icon: faCode, isFrontend: true, isBackend: false },
  { skill: "Node.js", icon: faNode, isFrontend: true, isBackend: true },
  { skill: "Kotlin", icon: faMobile, isFrontend: true, isBackend: true },
  { skill: "PHP", icon: faPhp, isFrontend: true, isBackend: true },
  { skill: "SQL", icon: faDatabase, isFrontend: true, isBackend: true },
  { skill: "MongoDB", icon: faDatabase, isFrontend: true, isBackend: true },
  { skill: "Firebase", icon: faDatabase, isFrontend: true, isBackend: true },
  { skill: "Python", icon: faPython, isFrontend: true, isBackend: true },
  { skill: "C#", icon: faCode, isFrontend: true, isBackend: true },
  { skill: "GitHub", icon: faGithub, isFrontend: false, isBackend: true },
];

export const projects = [
  {
    isFeatured: false,
    name: "Hospital-Management-WPF-App",
    image: hospital,
    technologies: ["C#", ".NET", "XAML", "MSSQL", "SQL"],
    description:
      "Hospital Management System that allows patients to be checked into the hospital. A full description of the patient is captured by the system whenever they are being checked into the hospital. The app allows a hospital staff member to log in, manage patients and manage doctor records.",
    deployedURL: "",
    gitHubURL: "https://github.com/Whefert/hospital-management-wpf-app",
  },
  {
    isFeatured: false,
    name: "Work Day Scheduler",
    image: daily_planner,
    technologies: ["jQuery", "Bootstrap", "HTML5", "CSS"],
    description:
      "A simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The Day.js library is used to work with dates and times.",
    deployedURL: "https://whefert.github.io/daily-planner/",
    gitHubURL: "https://github.com/Whefert/daily-planner",
  },
  {
    isFeatured: false,
    name: "Team Profile Generator",
    image: team,
    technologies: ["Node.js", "Jest", "Inquirer.js"],
    description:
      "Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person.",
    deployedURL: "",
    gitHubURL: "https://github.com/Whefert/team-profile-generator",
  },
  {
    isFeatured: false,
    name: "UCC IT Department App",
    image: it_mobile_app,
    technologies: ["Kotlin", "XAML", "Firebase"],
    description:
      "A mobile app which provides students with access to departmental information, resources, and functions. The app provides users with access to",
    deployedURL: "",
    gitHubURL: "https://github.com/Whefert/team-profile-generator",
  },
  {
    isFeatured: false,
    name: "Jamaica Beach Search Engine",
    image: beach_search_engine,
    technologies: ["PHP", "XAMP", "HTML5", "CSS", "JavaScript", "SQL"],
    description:
      "A search engine allowing users to find Jamaican beaches via searching for their names or the name of the parish in which they are located. On finding the beach, users are presented with additional information about the beach such as the cost of admission, whether it is licensed or not, opening/closing hours and a button to get directions.",
    deployedURL: "",
    gitHubURL: "https://github.com/Whefert/jamaica-beach-search-engine",
  },
  {
    isFeatured: true,
    name: "Biblio",
    image: biblio,
    technologies: [
      "APIs",
      "Bootstrap",
      "Figma",
      "GitHub",
      "HTML5",
      "CSS",
      "JavaScript",
    ],
    description:
      "Web app created to allow users to find the definition, pronunciation and usage examples of a word",
    deployedURL: "https://hillarym17.github.io/Biblio/",
    gitHubURL: "https://github.com/Whefert/Biblio",
  },
  {
    isFeatured: false,
    name: "React Portfolio",
    image: react_portfolio,
    technologies: [
      "React",
      "Bootstrap",
      "Figma",
      "GitHub",
      "HTML5",
      "CSS",
      "JavaScript",
    ],
    description:
      "Web app created to allow users to find the definition, pronunciation and usage examples of a word",
    deployedURL: "https://whefert.github.io/react-portfolio/",
    gitHubURL: "https://github.com/Whefert/react-portfolio",
  },
  {
    isFeatured: false,
    name: "Tkinter Bookkeeping App",
    image: bookkeeping_app,
    technologies: ["Tkinter", "Python", "SQL", "SQLLite"],
    description:
      "Desktop GUI Bookkeeping application that allows users to register, login, add new clients as well as receivable and payable records for those clients.",
    deployedURL: "",
    gitHubURL: "https://github.com/Whefert/bookkeeping-app",
  },
];
