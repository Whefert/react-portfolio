import Hobbies from "../Hobbies/Hobbies";
import SectionHeading from "../SectionHeading/SectionHeading";
export default function AboutMe() {
  return (
    <div className="col">
      <SectionHeading text={"About Me"} />
      <p>
        I am a full-stack software developer experienced in building web,
        desktop and mobile applications. I am in the final year of studies for a
        BSc. in Information Technology. I also have advanced qualifications and
        experience in Digital Marketing.
      </p>

      <SectionHeading text={"My Hobbies"} />
      <Hobbies />
    </div>
  );
}
