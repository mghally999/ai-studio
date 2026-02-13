"use client";

import styles from "./Tabs.module.css";

export default function Tabs({ value, onChange, tabs = [] }) {
  return (
    <div className={styles.tabs}>
      {tabs.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            className={`${styles.tab} ${active ? styles.active : ""}`}
            onClick={() => onChange(t.value)}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
