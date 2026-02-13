"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Tabs from "../../components/ui/Tabs";
import Button from "../../components/ui/Button";

import styles from "./projects.module.css";

const MOCK = [
  {
    id: "a1",
    type: "image",
    title: "Product hero batch",
    meta: "9 images • 1:1 • Photoreal",
    when: "Today",
  },
  {
    id: "a2",
    type: "content",
    title: "Ad copy variations",
    meta: "6 drafts • Premium tone",
    when: "Today",
  },
  {
    id: "a3",
    type: "video",
    title: "Cinematic reel test",
    meta: "8s • 16:9 • Medium motion",
    when: "Yesterday",
  },
  {
    id: "a4",
    type: "prompt",
    title: "Saved prompt pack",
    meta: "Ads & Performance",
    when: "2 days ago",
  },
];

export default function ProjectsPage() {
  const ref = useRef(null);
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("All");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-anim='p']", {
        y: 12,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const items = useMemo(() => {
    const s = q.trim().toLowerCase();
    return MOCK.filter((x) => {
      const okTab = tab === "All" || x.type === tab.toLowerCase();
      const okSearch =
        !s || `${x.title} ${x.meta} ${x.when}`.toLowerCase().includes(s);
      return okTab && okSearch;
    });
  }, [q, tab]);

  return (
    <div className={styles.page} ref={ref}>
      <Card className={styles.top} data-anim="p">
        <div className={styles.head}>
          <div>
            <div className={styles.title}>Projects</div>
            <div className={styles.sub}>
              History, folders, exports — UI only now.
            </div>
          </div>
          <Button variant="primary" size="sm" glow>
            New Project
          </Button>
        </div>

        <div className={styles.filters}>
          <Tabs
            value={tab}
            onChange={setTab}
            tabs={[
              { value: "All", label: "All" },
              { value: "Image", label: "Images" },
              { value: "Video", label: "Videos" },
              { value: "Content", label: "Content" },
              { value: "Prompt", label: "Prompts" },
            ]}
          />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects…"
          />
        </div>
      </Card>

      <div className={styles.grid}>
        {items.map((x) => (
          <Card key={x.id} className={styles.card} data-anim="p">
            <div className={styles.cardTop}>
              <div className={styles.pill}>{x.type.toUpperCase()}</div>
              <div className={styles.when}>{x.when}</div>
            </div>
            <div className={styles.name}>{x.title}</div>
            <div className={styles.meta}>{x.meta}</div>

            <div className={styles.actions}>
              <Button variant="outline" size="sm">
                Open
              </Button>
              <Button variant="secondary" size="sm">
                Export
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
