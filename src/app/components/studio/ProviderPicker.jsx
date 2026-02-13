"use client";
import Select from "../ui/Select";
import styles from "./ProviderPicker.module.css";

export default function ProviderPicker({ value, onChange, options }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.label}>Provider</div>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </Select>
      <div className={styles.hint}>
        (APIs later) — UI now uses provider as a “mode”.
      </div>
    </div>
  );
}
