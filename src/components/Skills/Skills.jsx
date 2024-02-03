import SectionHeading from "../SectionHeading/SectionHeading";
import SkillGroup from "../SkillGroup/SkillGroup";
import { skills } from "../../assets/data";

const frontEndSkills = skills.filter((skill) => skill.isFrontend === true);

const backEndSkills = skills.filter((skill) => skill.isBackend === true);

export default function Skills() {
  return (
    <>
      <SectionHeading text={"Skills"} />
      <div className="container">
        <div className="row">
          <div className="col">
            <SkillGroup skills={frontEndSkills} />
          </div>
          <div className="col">
            <SkillGroup skills={backEndSkills} />
          </div>
        </div>
      </div>
    </>
  );
}
