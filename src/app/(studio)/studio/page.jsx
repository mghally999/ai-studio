"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./studio.module.css";

export default function StudioDashboard() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cards = el.querySelectorAll("[data-card]");
    const ctx = gsap.context(() => {
      gsap.from(cards, {
        y: 14,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      });
      gsap.to("[data-float]", {
        y: -6,
        duration: 2.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.page} ref={ref}>
      <div className={styles.hero} data-float>
        <div className={styles.heroLeft}>
          <div className={styles.kicker}>AI STUDIO</div>
          <h1 className={styles.h1}>
            Build content. Generate images. Produce videos.
          </h1>
          <p className={styles.p}>
            One dashboard. Templates + prompt packs + projects. APIs plugged in
            later.
          </p>
          <div className={styles.actions}>
            <button className={styles.primary}>Start a Generation</button>
            <button className={styles.secondary}>Open Prompt Library</button>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.orb} />
          <div className={styles.stat}>
            <div className={styles.statLabel}>This Week</div>
            <div className={styles.statValue}>128</div>
            <div className={styles.statSub}>Generations</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statLabel}>Remaining</div>
            <div className={styles.statValue}>940</div>
            <div className={styles.statSub}>Credits</div>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card} data-card>
          <div className={styles.cardTitle}>Content</div>
          <div className={styles.cardDesc}>
            Ad copy, scripts, blogs, emails.
          </div>
          <div className={styles.cardFoot}>Open →</div>
        </div>

        <div className={styles.card} data-card>
          <div className={styles.cardTitle}>Images</div>
          <div className={styles.cardDesc}>Styles, aspect ratios, batches.</div>
          <div className={styles.cardFoot}>Open →</div>
        </div>

        <div className={styles.card} data-card>
          <div className={styles.cardTitle}>Videos</div>
          <div className={styles.cardDesc}>Effects, duration, presets.</div>
          <div className={styles.cardFoot}>Open →</div>
        </div>

        <div className={styles.cardWide} data-card>
          <div className={styles.cardTitle}>Recent Activity</div>
          <div className={styles.list}>
            <div className={styles.row}>
              <span>Generated: “Luxury product ad copy”</span>
              <span className={styles.time}>2m</span>
            </div>
            <div className={styles.row}>
              <span>Generated: “Cyberpunk image prompt”</span>
              <span className={styles.time}>18m</span>
            </div>
            <div className={styles.row}>
              <span>Saved prompt pack: “E-commerce”</span>
              <span className={styles.time}>1h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
