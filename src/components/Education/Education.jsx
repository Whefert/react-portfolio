import EducationItem from "../EducationItem/EducationItem";
import SectionHeading from "../SectionHeading/SectionHeading";
import { EducationData } from "../../assets/data";
import "./Education.css";

export default function Education({ col }) {
  return (
    <div id="education" className={col}>
      <SectionHeading text="Education" />
      {EducationData.map((education) => (
        <EducationItem
          program={education.program}
          school={education.school}
          completionDate={education.completionDate}
          GPA={education.GPA}
        />
      ))}
      <i class="fa-brands fa-react"></i>
    </div>
  );
}
