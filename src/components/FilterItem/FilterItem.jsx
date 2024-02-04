export default function FilterItem({
  technology,
  onItemSelect,
  onItemDeselect,
}) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value={technology}
        id={technology}
        onChange={({ target }) => {
          if (target.checked) {
            onItemSelect(target.value);
          } else {
            onItemDeselect(target.value);
          }
        }}
      />
      <label class="form-check-label" for={technology}>
        {technology}
      </label>
    </div>
  );
}
