"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./BackgroundFX.module.css";

export default function BackgroundFX() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const blobs = el.querySelectorAll("[data-blob]");
    const ctx = gsap.context(() => {
      blobs.forEach((b, i) => {
        gsap.to(b, {
          x: () => (i % 2 === 0 ? 26 : -24),
          y: () => (i % 2 === 0 ? -18 : 20),
          duration: 6 + i * 1.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.fx} ref={ref} aria-hidden="true">
      <div className={styles.blobA} data-blob />
      <div className={styles.blobB} data-blob />
      <div className={styles.blobC} data-blob />
      <div className={styles.grain} />
      <div className={styles.vignette} />
    </div>
  );
}
