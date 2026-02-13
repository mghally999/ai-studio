"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/providers";
import styles from "./Sidebar.module.css";

const NAV = [
  { href: "/studio", label: "Dashboard", sub: "Metrics & overview" },
  { href: "/content", label: "Content", sub: "Ads, scripts, copy" },
  { href: "/images", label: "Images", sub: "Generate & styles" },
  { href: "/videos", label: "Videos", sub: "Prompts & effects" },
  { href: "/prompts", label: "Prompts", sub: "Packs & templates" },
  { href: "/projects", label: "Projects", sub: "History & exports" },
  { href: "/billing", label: "Billing", sub: "Plans & usage" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { active } = useTheme();

  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.logo} />
        <div>
          <div className={styles.brandName}>{active.brandName}</div>
          <div className={styles.brandSub}>{active.tagline}</div>
        </div>
      </div>

      <div className={styles.sectionTitle}>Workspace</div>

      <nav className={styles.nav}>
        {NAV.map((item) => {
          const isActive =
            pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.item} ${isActive ? styles.active : ""}`}
            >
              <div className={styles.itemTop}>
                <span className={styles.itemLabel}>{item.label}</span>
                <span className={styles.pip} />
              </div>
              <div className={styles.itemSub}>{item.sub}</div>
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <div className={styles.footerCard}>
          <div className={styles.footerTop}>
            <span className={styles.footerTitle}>Phase 1</span>
            <span className={styles.badge}>UI</span>
          </div>
          <div className={styles.footerSub}>
            We polish UX, then wire APIs last.
          </div>
        </div>
      </div>
    </div>
  );
}
