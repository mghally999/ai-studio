"use client";

import Button from "../ui/Button";
import styles from "./ResultsGrid.module.css";

export default function ResultsGrid({ items = [], kind = "image" }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div>
          <div className={styles.title}>Results</div>
          <div className={styles.sub}>
            Placeholder cards now — later these will render actual API outputs.
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {items.map((it) => (
          <div key={it.id} className={styles.card}>
            <div className={styles.preview}>
              <div className={styles.badge}>{kind.toUpperCase()}</div>
              <div className={styles.previewInner} />
            </div>

            <div className={styles.meta}>
              <div className={styles.name}>{it.title}</div>
              <div className={styles.desc}>{it.subtitle}</div>
            </div>

            <div className={styles.actions}>
              <Button variant="outline" size="sm">
                Remix
              </Button>
              <Button variant="secondary" size="sm">
                Export
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
