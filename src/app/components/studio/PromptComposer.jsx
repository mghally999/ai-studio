"use client";

import { useMemo, useState } from "react";
import Button from "../ui/Button";
import styles from "./PromptComposer.module.css";

export default function PromptComposer({
  title = "Prompt",
  value,
  onChange,
  quickChips = [],
  placeholder = "Write a prompt…",
}) {
  const [copied, setCopied] = useState(false);

  const canCopy = useMemo(() => String(value || "").trim().length > 0, [value]);

  async function copy() {
    if (!canCopy) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch {}
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.sub}>
            Click a template → auto-fill → refine.
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            variant="outline"
            size="sm"
            onClick={copy}
            disabled={!canCopy}
          >
            {copied ? "Copied ✓" : "Copy"}
          </Button>
        </div>
      </div>

      {quickChips?.length > 0 && (
        <div className={styles.chips}>
          {quickChips.map((c) => (
            <button
              key={c}
              type="button"
              className={styles.chip}
              onClick={() =>
                onChange((prev) => `${(prev || "").trim()} ${c}`.trim())
              }
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        spellCheck={false}
      />
    </div>
  );
}
