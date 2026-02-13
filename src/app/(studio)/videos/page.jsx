/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import Card from "../../components/ui/Card";
import Select from "../../components/ui/Select";
import Tabs from "../../components/ui/Tabs";
import ProviderPicker from "../../components/studio/ProviderPicker";
import GeneratePanel from "../../components/studio/GeneratePanel";
import PromptComposer from "../../components/studio/PromptComposer";
import ResultsGrid from "../../components/studio/ResultsGrid";

import styles from "./videos.module.css";

const VIDEO_TEMPLATES = [
  {
    id: "reel",
    title: "Cinematic Reel (5–10s)",
    subtitle: "Camera motion + mood + beat",
    prompt:
      "A cinematic 8-second video of {subject}. Smooth camera movement, dramatic lighting, film grain, shallow depth of field, high contrast, premium commercial look.",
  },
  {
    id: "product",
    title: "Product teaser (10–15s)",
    subtitle: "Hero shots + transitions",
    prompt:
      "A 12-second product teaser video for {product}. Clean studio lighting, elegant camera orbits, quick cuts, premium brand vibe, modern transitions, crisp details.",
  },
  {
    id: "logo",
    title: "Animated logo sting",
    subtitle: "Minimal motion design",
    prompt:
      "A minimal 6-second logo animation for {brand}. Clean background, modern motion design, smooth easing, subtle glow, premium studio finish.",
  },
];

export default function VideosPage() {
  const ref = useRef(null);

  const [tplId, setTplId] = useState("reel");
  const [provider, setProvider] = useState("hf-video");
  const [ratio, setRatio] = useState("16:9");
  const [duration, setDuration] = useState("8s");
  const [motion, setMotion] = useState("Medium");
  const [mode, setMode] = useState("Generate");

  const tpl = useMemo(
    () => VIDEO_TEMPLATES.find((t) => t.id === tplId) || VIDEO_TEMPLATES[0],
    [tplId],
  );
  const [prompt, setPrompt] = useState(VIDEO_TEMPLATES[0].prompt);

  useEffect(() => setPrompt(tpl.prompt), [tpl]);

  useEffect(() => {
    const el = ref.current;
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
        id: `vid-${i}`,
        title: `Clip ${i + 1}`,
        subtitle: `${duration} • ${ratio} • Motion: ${motion}`,
      })),
    [duration, ratio, motion],
  );

  function onGenerate() {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelector("[data-anim='results']"),
      { opacity: 0.55, y: 10 },
      { opacity: 1, y: 0, duration: 0.35 },
    );
  }

  return (
    <div className={styles.page} ref={ref}>
      <div className={styles.grid}>
        <Card className={styles.left} data-anim="card">
          <div className={styles.header}>
            <div className={styles.title}>Video Studio</div>
            <div className={styles.sub}>
              Templates + effects controls + results (API later).
            </div>
          </div>

          <div className={styles.tplList}>
            {VIDEO_TEMPLATES.map((t) => {
              const active = t.id === tplId;
              return (
                <button
                  key={t.id}
                  type="button"
                  className={`${styles.tpl} ${active ? styles.tplActive : ""}`}
                  onClick={() => setTplId(t.id)}
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
                <div className={styles.label}>Mode</div>
                <Tabs
                  value={mode}
                  onChange={setMode}
                  tabs={[
                    { value: "Generate", label: "Generate" },
                    { value: "Extend", label: "Extend" },
                    { value: "Enhance", label: "Enhance" },
                  ]}
                />
              </div>
            </div>

            <div className={styles.row3}>
              <div>
                <div className={styles.label}>Aspect</div>
                <Select
                  value={ratio}
                  onChange={(e) => setRatio(e.target.value)}
                >
                  <option>16:9</option>
                  <option>9:16</option>
                  <option>1:1</option>
                  <option>4:5</option>
                </Select>
              </div>
              <div>
                <div className={styles.label}>Duration</div>
                <Select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option>5s</option>
                  <option>8s</option>
                  <option>10s</option>
                  <option>12s</option>
                  <option>15s</option>
                </Select>
              </div>
              <div>
                <div className={styles.label}>Motion</div>
                <Select
                  value={motion}
                  onChange={(e) => setMotion(e.target.value)}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Ultra</option>
                </Select>
              </div>
            </div>
          </div>
        </Card>

        <div className={styles.right}>
          <GeneratePanel
            title="Generator"
            subtitle={`Provider: ${provider} • Mode: ${mode}`}
            onGenerate={onGenerate}
            primaryLabel="Generate Video"
            secondaryLabel="Save as Prompt"
            onSecondary={() => {}}
          >
            <ProviderPicker
              value={provider}
              onChange={setProvider}
              options={[
                { value: "hf-video", label: "HuggingFace Video (later)" },
                { value: "runway", label: "Runway (later)" },
                { value: "pika", label: "Pika (later)" },
                { value: "luma", label: "Luma (later)" },
              ]}
            />

            <PromptComposer
              title="Video Prompt"
              value={prompt}
              onChange={setPrompt}
              placeholder="Describe the video…"
              quickChips={[
                "smooth camera move",
                "film grain",
                "dramatic lighting",
                "slow motion",
                "high contrast",
              ]}
            />
          </GeneratePanel>

          <div data-anim="results">
            <ResultsGrid items={results} kind="video" />
          </div>
        </div>
      </div>
    </div>
  );
}
