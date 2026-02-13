"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useTheme } from "@/app/providers";
import styles from "./Topbar.module.css";
import Button from "../ui/Button";

function titleFromPath(path) {
  const p = (path || "").split("?")[0];
  if (p === "/studio") return "Dashboard";
  if (p.startsWith("/content")) return "Content Generation";
  if (p.startsWith("/images")) return "Image Generation";
  if (p.startsWith("/videos")) return "Video Generation";
  if (p.startsWith("/prompts")) return "Prompt Library";
  if (p.startsWith("/projects")) return "Projects";
  if (p.startsWith("/billing")) return "Billing";
  return "Studio";
}

export default function Topbar() {
  const pathname = usePathname();
  const title = titleFromPath(pathname);

  const { themes, themeId, setThemeId } = useTheme();
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    gsap.fromTo(
      titleRef.current,
      { y: 6, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" },
    );
  }, [title]);

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.titleWrap}>
          <div className={styles.title} ref={titleRef}>
            {title}
          </div>
          <div className={styles.sub}>
            Black/white base • Blue/Purple accents • GSAP motion
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.themeGroup}>
          {themes.map((t) => {
            const active = themeId === t.id;
            return (
              <button
                key={t.id}
                type="button"
                data-chip={t.id}
                className={`${styles.themeChip} ${active ? styles.themeChipActive : ""}`}
                onClick={() => setThemeId(t.id)}
                title={t.label}
              >
                <span className={styles.themeSwatch} />
                <span className={styles.themeLabel}>{t.label}</span>
              </button>
            );
          })}
        </div>

        <Button variant="primary" size="sm" glow>
          New Project
        </Button>
      </div>
    </header>
  );
}
