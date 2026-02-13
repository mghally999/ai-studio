"use client";

import Button from "../ui/Button";
import Card from "../ui/Card";
import styles from "./GeneratePanel.module.css";

export default function GeneratePanel({
  title,
  subtitle,
  children,
  onGenerate,
  primaryLabel = "Generate",
  secondaryLabel = "Save as Prompt",
  onSecondary,
}) {
  return (
    <Card className={styles.card}>
      <div className={styles.head}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.sub}>{subtitle}</div>
        </div>
        <div className={styles.buttons}>
          <Button variant="secondary" size="sm" onClick={onSecondary}>
            {secondaryLabel}
          </Button>
          <Button variant="primary" size="sm" glow onClick={onGenerate}>
            {primaryLabel}
          </Button>
        </div>
      </div>

      <div className={styles.body}>{children}</div>
    </Card>
  );
}
