"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import Card from "../../components/ui/Card";
import Select from "../../components/ui/Select";
import GeneratePanel from "../../components/studio/GeneratePanel";
import PromptComposer from "../../components/studio/PromptComposer";

import styles from "./content.module.css";

const TEMPLATES = [
  {
    id: "ad",
    title: "High-Converting Ad Copy",
    subtitle: "Hooks + Benefits + CTA",
    prompt:
      "Write a high-converting ad for {product}. Target audience: {audience}. Pain points: {pain}. Tone: {tone}. Include 3 strong hooks, 5 persuasive benefits, social proof, urgency trigger, and 3 CTAs.",
  },
  {
    id: "script",
    title: "Short Viral Script",
    subtitle: "Hook → Pattern Interrupt → CTA",
    prompt:
      "Write a viral 20-second short-form video script about {topic}. Include a 2-second hook, a pattern interrupt, emotional trigger, and a strong CTA. Make it optimized for TikTok/Reels.",
  },
  {
    id: "landing",
    title: "Landing Page Copy",
    subtitle: "Hero → Features → Objections → CTA",
    prompt:
      "Write a high-converting landing page for {product}. Include headline, subheadline, value proposition, benefits, objection handling, testimonials, and CTA.",
  },
  {
    id: "email",
    title: "Cold Email Sequence",
    subtitle: "Initial + 2 Follow-ups",
    prompt:
      "Write a cold outreach email to {persona} offering {service}. Include subject line and 2 follow-up emails spaced 3 days apart. Make it concise and personalized.",
  },
  {
    id: "thread",
    title: "Twitter/X Thread",
    subtitle: "Hook + Story + Takeaways",
    prompt:
      "Write a viral Twitter thread about {topic}. Include a strong hook, storytelling structure, valuable insights, and a powerful closing tweet.",
  },
  {
    id: "seo",
    title: "SEO Blog Article",
    subtitle: "Structured + Optimized",
    prompt:
      "Write a 1200-word SEO optimized blog article for keyword: {keyword}. Include H1, H2s, FAQs, meta description, and internal linking suggestions.",
  },
  {
    id: "sales",
    title: "Sales Script",
    subtitle: "Consultative selling format",
    prompt:
      "Write a sales call script for selling {product}. Include rapport building, discovery questions, objection handling, and closing technique.",
  },
];

export default function ContentPage() {
  const rootRef = useRef(null);

  // MOUNT STATE (must be declared with other hooks)
  const [mounted, setMounted] = useState(false);

  const [tplId, setTplId] = useState("ad");
  const [tone, setTone] = useState("Premium");
  const [length, setLength] = useState("Medium");
  const [prompt, setPrompt] = useState(TEMPLATES[0].prompt);

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const tpl = useMemo(() => TEMPLATES.find((t) => t.id === tplId), [tplId]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (tpl) setPrompt(tpl.prompt);
  }, [tpl]);

  useEffect(() => {
    if (!mounted) return;

    const el = rootRef.current;
    if (!el) return;

    const targets = el.querySelectorAll("[data-anim='card']");
    if (!targets.length) return;

    gsap.from(targets, {
      y: 12,
      opacity: 0,
      duration: 0.4,
    });
  }, [mounted]);

  async function onGenerate() {
    try {
      setLoading(true);
      setError("");
      setResults([]);

      const finalPrompt = `${prompt}
Tone: ${tone}
Length: ${length}`;

      const res = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Content generation failed");
      }

      setResults([
        {
          id: "1",
          content: data.result,
        },
      ]);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page} ref={rootRef}>
      {mounted && (
        <div className={styles.grid}>
          <Card className={styles.left} data-anim="card">
            <div className={styles.tplList}>
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  className={`${styles.tpl} ${
                    tplId === t.id ? styles.active : ""
                  }`}
                  onClick={() => setTplId(t.id)}
                >
                  <div className={styles.tplTitle}>{t.title}</div>
                  <div className={styles.tplSub}>{t.subtitle}</div>
                </button>
              ))}
            </div>

            <div className={styles.controls}>
              <Select value={tone} onChange={(e) => setTone(e.target.value)}>
                <option>Premium</option>
                <option>Bold</option>
                <option>Minimal</option>
              </Select>

              <Select
                value={length}
                onChange={(e) => setLength(e.target.value)}
              >
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
              </Select>
            </div>
          </Card>

          <div className={styles.right}>
            <GeneratePanel
              title="Composer"
              subtitle="Generate AI content"
              onGenerate={onGenerate}
              primaryLabel="Generate Content"
            >
              <PromptComposer
                title="Prompt"
                value={prompt}
                onChange={setPrompt}
              />
            </GeneratePanel>

            <div className={styles.results}>
              {loading && <div>Generating...</div>}
              {error && <div className={styles.error}>{error}</div>}

              {results.map((r) => (
                <Card key={r.id} className={styles.resultCard}>
                  <pre>{r.content}</pre>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
