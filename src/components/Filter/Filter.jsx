import FilterItem from "../FilterItem/FilterItem";

export default function Filter({ technologies }) {
  return (
    <>
      <p>
        <strong>View Project By Technology Used</strong>
      </p>
      {technologies.map((technology) => (
        <FilterItem technology={technology} />
      ))}
    </>
  );
}
