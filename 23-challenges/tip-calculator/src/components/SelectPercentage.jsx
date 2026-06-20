import { serviceOptions } from "../data/serviceOptions.js";

export function SelectPercentage({ label, value, onChange }) {
  return (
    <div className="field">
      <label>{label}</label>

      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {serviceOptions.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label} ({option.value}%)
          </option>
        ))}
      </select>
    </div>
  );
}
