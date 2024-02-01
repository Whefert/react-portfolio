import "./EducationItem.css";

export default function EducationItem({
  program,
  school,
  completionDate,
  GPA,
}) {
  return (
    <div className="educationItem">
      <h4>{program}</h4>
      <p>{school}</p>
      <p>{completionDate}</p>
      <p>
        <strong>{GPA}</strong>
      </p>
    </div>
  );
}
