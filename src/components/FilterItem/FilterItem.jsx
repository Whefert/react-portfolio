export default function FilterItem({ technology }) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        value={technology}
        id={technology}
      />
      <label class="form-check-label" for={technology}>
        {technology}
      </label>
    </div>
  );
}
