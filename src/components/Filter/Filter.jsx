import FilterItem from "../FilterItem/FilterItem";

export default function Filter({ technologies, onItemSelect, onItemDeSelect }) {
  return (
    <>
      <p>
        <strong>View Project By Technology Used</strong>
      </p>
      {technologies.map((technology) => (
        <FilterItem
          onItemSelect={onItemSelect}
          onItemDeselect={onItemDeSelect}
          technology={technology}
        />
      ))}
    </>
  );
}
