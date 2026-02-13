"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import BackgroundFX from "./BackgroundFX";
import styles from "./Shell.module.css";

export default function Shell({ children }) {
  const pathname = usePathname();
  const wrapRef = useRef(null);
  const contentRef = useRef(null);

  // initial entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-anim="sidebar"]', {
        x: -18,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.from('[data-anim="topbar"]', {
        y: -10,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.05,
      });
      gsap.from('[data-anim="content"]', {
        y: 12,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.08,
      });
    }, wrapRef);
    return () => ctx.revert();
  }, []);

  // route transition animation
  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    }, wrapRef);
    return () => ctx.revert();
  }, [pathname]);

  return (
    <div className={styles.shell} ref={wrapRef}>
      <BackgroundFX />
      <aside className={styles.sidebar} data-anim="sidebar">
        <Sidebar />
      </aside>

      <div className={styles.main}>
        <div data-anim="topbar">
          <Topbar />
        </div>

        <main className={styles.content} ref={contentRef} data-anim="content">
          {children}
        </main>
      </div>
    </div>
  );
}
