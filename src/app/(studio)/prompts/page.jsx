/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Tabs from "../../components/ui/Tabs";

import styles from "./prompts.module.css";

const PACKS = [
  {
    id: "ads",
    title: "Ads & Performance",
    tags: ["hooks", "cta", "benefits"],
    prompts: [
      {
        id: "p1",
        title: "3 Hooks + 5 Benefits + 3 CTAs",
        text: "Write an ad for {offer}. Audience: {audience}. Goal: {goal}. Tone: {tone}. Include 3 hooks, 5 benefits, 3 CTAs.",
      },
      {
        id: "p2",
        title: "A/B Variations",
        text: "Generate 6 ad variations for {offer} with different angles (price, speed, trust, lifestyle, scarcity, authority). Keep each under 2 lines.",
      },
    ],
  },
  {
    id: "social",
    title: "Social Content",
    tags: ["reels", "posts", "captions"],
    prompts: [
      {
        id: "p3",
        title: "Reels Script",
        text: "Write a 20s reels script about {topic}. Hook (0–3s), 3 beats, CTA. Output as timed lines.",
      },
      {
        id: "p4",
        title: "Carousel Post",
        text: "Create a 7-slide carousel outline about {topic}. Each slide: title + 2 bullet points. End with CTA.",
      },
    ],
  },
  {
    id: "images",
    title: "Image Prompts",
    tags: ["photoreal", "cinematic", "minimal"],
    prompts: [
      {
        id: "p5",
        title: "Premium product photo",
        text: "A premium product photo of {product}, clean background, studio lighting, sharp focus, ultra-detailed, commercial photography.",
      },
      {
        id: "p6",
        title: "Cinematic poster",
        text: "A cinematic poster of {subject}, dramatic lighting, volumetric fog, film grain, shallow depth of field, 35mm look, award-winning composition.",
      },
    ],
  },
];

export default function PromptsPage() {
  const ref = useRef(null);

  const [tab, setTab] = useState("All");
  const [q, setQ] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-anim='pack']", {
        y: 12,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const packs = useMemo(() => {
    const search = q.trim().toLowerCase();
    const filtered = PACKS.map((pack) => ({
      ...pack,
      prompts: pack.prompts.filter((p) => {
        const hay =
          `${pack.title} ${p.title} ${p.text} ${pack.tags.join(" ")}`.toLowerCase();
        const okSearch = !search || hay.includes(search);
        const okTab =
          tab === "All" ||
          pack.title.includes(tab) ||
          pack.tags.includes(tab.toLowerCase());
        return okSearch && okTab;
      }),
    })).filter((p) => p.prompts.length > 0);

    return filtered;
  }, [q, tab]);

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setToast("Copied ✓");
      setTimeout(() => setToast(""), 900);
    } catch {
      setToast("Copy failed");
      setTimeout(() => setToast(""), 900);
    }
  }

  function useInStudio(text) {
    // small bridge: store draft for now
    try {
      localStorage.setItem("ai_studio_draft_prompt", text);
      setToast("Saved to draft ✓ (open Images/Content/Videos)");
      setTimeout(() => setToast(""), 1100);
    } catch {}
  }

  return (
    <div className={styles.page} ref={ref}>
      <Card className={styles.top} data-anim="pack">
        <div className={styles.head}>
          <div>
            <div className={styles.title}>Prompt Library</div>
            <div className={styles.sub}>
              Prompt packs you can copy or “send to draft”.
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.toast}>{toast}</div>
          </div>
        </div>

        <div className={styles.filters}>
          <Tabs
            value={tab}
            onChange={setTab}
            tabs={[
              { value: "All", label: "All" },
              { value: "Ads", label: "Ads" },
              { value: "Social", label: "Social" },
              { value: "Images", label: "Images" },
            ]}
          />
          <div className={styles.search}>
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search prompts…"
            />
          </div>
        </div>
      </Card>

      <div className={styles.packs}>
        {packs.map((pack) => (
          <Card key={pack.id} className={styles.pack} data-anim="pack">
            <div className={styles.packTop}>
              <div>
                <div className={styles.packTitle}>{pack.title}</div>
                <div className={styles.tags}>
                  {pack.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.items}>
              {pack.prompts.map((p) => (
                <div key={p.id} className={styles.item}>
                  <div className={styles.itemMeta}>
                    <div className={styles.itemTitle}>{p.title}</div>
                    <div className={styles.itemText}>{p.text}</div>
                  </div>
                  <div className={styles.itemActions}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copy(p.text)}
                    >
                      Copy
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => useInStudio(p.text)}
                    >
                      Use
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
