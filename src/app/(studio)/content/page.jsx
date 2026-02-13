"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import Card from "../../components/ui/Card";
import Tabs from "../../components/ui/Tabs";
import Input from "../../components/ui/Input";
import Select from "../../components/ui/Select";
import GeneratePanel from "../../components/studio/GeneratePanel";
import PromptComposer from "../../components/studio/PromptComposer";
import ResultsGrid from "../../components/studio/ResultsGrid";

import styles from "./content.module.css";

const TEMPLATES = [
  {
    id: "ad",
    title: "High-converting ad copy",
    subtitle: "Hook + benefits + CTA (performance style)",
    prompt:
      "Write a high-converting ad for: {product/service}. Audience: {audience}. Goal: {goal}. Tone: {tone}. Include 3 hooks, 5 benefits, and 3 CTAs. Keep it {length}.",
  },
  {
    id: "script",
    title: "Short video script (TikTok/Reels)",
    subtitle: "0–3s hook → story → CTA",
    prompt:
      "Write a short video script (15–30s) about: {topic}. Target: {audience}. Tone: {tone}. Include hook (0–3s), 3 beats, and CTA. Output as timed lines.",
  },
  {
    id: "email",
    title: "Cold outreach email",
    subtitle: "Personalized + value + next step",
    prompt:
      "Write a cold email to {persona} about {offer}. Pain: {pain}. Value: {value}. Tone: {tone}. Keep it {length}. Add a subject line + 2 follow-ups.",
  },
  {
    id: "blog",
    title: "Blog outline + SEO structure",
    subtitle: "H1/H2 + FAQs + meta description",
    prompt:
      "Create a blog outline for keyword: {keyword}. Audience: {audience}. Tone: {tone}. Include H1, 6 H2s, FAQs, and a meta description. Provide bullet points under each section.",
  },
];

export default function ContentPage() {
  const rootRef = useRef(null);

  const [activeTemplateId, setActiveTemplateId] = useState("ad");
  const [tone, setTone] = useState("Premium");
  const [length, setLength] = useState("Medium");
  const [language, setLanguage] = useState("English");
  const [brief, setBrief] = useState("");

  const [prompt, setPrompt] = useState(TEMPLATES[0].prompt);

  const tpl = useMemo(
    () => TEMPLATES.find((t) => t.id === activeTemplateId) || TEMPLATES[0],
    [activeTemplateId],
  );

  useEffect(() => {
    setPrompt(tpl.prompt);
  }, [tpl]);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-anim='card']", {
        y: 14,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const results = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: `c-${i}`,
        title: `Output Draft ${i + 1}`,
        subtitle: `${language} • ${tone} • ${length}`,
      })),
    [tone, length, language],
  );

  function onGenerate() {
    // UI-only now
    // later: call /api/content/generate
    // for now just pulse animation
    const el = rootRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelector("[data-anim='results']"),
      { opacity: 0.5, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
    );
  }

  return (
    <div className={styles.page} ref={rootRef}>
      <div className={styles.grid}>
        <Card className={styles.left} data-anim="card">
          <div className={styles.header}>
            <div>
              <div className={styles.title}>Content Generation</div>
              <div className={styles.sub}>
                Choose a template → refine → generate outputs (API later).
              </div>
            </div>
          </div>

          <div className={styles.tplList}>
            {TEMPLATES.map((t) => {
              const active = t.id === activeTemplateId;
              return (
                <button
                  key={t.id}
                  type="button"
                  className={`${styles.tpl} ${active ? styles.tplActive : ""}`}
                  onClick={() => setActiveTemplateId(t.id)}
                >
                  <div className={styles.tplTop}>
                    <div className={styles.tplTitle}>{t.title}</div>
                    <div className={styles.tplDot} />
                  </div>
                  <div className={styles.tplSub}>{t.subtitle}</div>
                </button>
              );
            })}
          </div>

          <div className={styles.controls}>
            <div className={styles.row}>
              <div>
                <div className={styles.label}>Tone</div>
                <Select value={tone} onChange={(e) => setTone(e.target.value)}>
                  <option>Premium</option>
                  <option>Direct</option>
                  <option>Friendly</option>
                  <option>Luxury</option>
                  <option>Minimal</option>
                  <option>Bold</option>
                </Select>
              </div>
              <div>
                <div className={styles.label}>Length</div>
                <Select
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                >
                  <option>Short</option>
                  <option>Medium</option>
                  <option>Long</option>
                </Select>
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <div className={styles.label}>Language</div>
                <Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option>English</option>
                  <option>Arabic</option>
                </Select>
              </div>
              <div>
                <div className={styles.label}>Brief (optional)</div>
                <Input
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="e.g., New product launch, target busy professionals…"
                />
              </div>
            </div>
          </div>
        </Card>

        <div className={styles.right}>
          <GeneratePanel
            title="Composer"
            subtitle="Templates + prompt builder + future provider execution."
            onGenerate={onGenerate}
            onSecondary={() => {
              // later: save to prompts store / api
              gsap.fromTo(
                rootRef.current,
                { opacity: 0.92 },
                { opacity: 1, duration: 0.2 },
              );
            }}
            primaryLabel="Generate Content"
            secondaryLabel="Save Template"
          >
            <PromptComposer
              title="Prompt"
              value={prompt}
              onChange={setPrompt}
              placeholder="Write your content prompt…"
              quickChips={[
                "Make it more persuasive.",
                "Add strong hooks.",
                "Use bullet points.",
                "Add 3 CTAs.",
                "Make it shorter.",
              ]}
            />
          </GeneratePanel>

          <div data-anim="results">
            <ResultsGrid items={results} kind="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
