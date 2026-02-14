"use client";

import Button from "../ui/Button";
import styles from "./ResultsGrid.module.css";

export default function ResultsGrid({ items = [], kind = "image" }) {
  if (!items.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div className={styles.title}>Results</div>
        <div className={styles.sub}>Click media to view full size.</div>
      </div>

      <div className={styles.grid}>
        {items.map((it) => (
          <div key={it.id} className={styles.card}>
            <div className={styles.preview}>
              <div className={styles.badge}>{kind}</div>

              {kind === "image" && (
                <a href={it.url} target="_blank">
                  <img src={it.url} className={styles.media} />
                </a>
              )}

              {kind === "video" && (
                <video src={it.url} controls className={styles.media} />
              )}

              {kind === "text" && (
                <div className={styles.textBox}>{it.content}</div>
              )}
            </div>

            <div className={styles.actions}>
              {it.url && (
                <a href={it.url} download>
                  <Button size="sm">Download</Button>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
