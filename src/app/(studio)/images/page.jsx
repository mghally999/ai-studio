/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import Card from "../../components/ui/Card";
import Select from "../../components/ui/Select";
import Tabs from "../../components/ui/Tabs";
import GeneratePanel from "../../components/studio/GeneratePanel";
import PromptComposer from "../../components/studio/PromptComposer";
import ProviderPicker from "../../components/studio/ProviderPicker";
import ResultsGrid from "../../components/studio/ResultsGrid";

import styles from "./images.module.css";

const IMAGE_TEMPLATES = [
  {
    id: "product",
    title: "E-commerce product hero",
    subtitle: "Clean studio lighting + premium look",
    prompt:
      "A premium product photo of {product} on a clean background, studio lighting, sharp focus, ultra-detailed, commercial photography, subtle shadows, high-end brand aesthetic.",
  },
  {
    id: "poster",
    title: "Cinematic poster",
    subtitle: "Moody lighting + film grain",
    prompt:
      "A cinematic poster of {subject}, dramatic lighting, volumetric fog, film grain, shallow depth of field, high contrast, ultra-detailed, 35mm look, award-winning composition.",
  },
  {
    id: "banner",
    title: "Social banner",
    subtitle: "High contrast + modern composition",
    prompt:
      "A modern social media banner featuring {topic}, clean typography space, bold composition, minimal background, premium gradients, high contrast, crisp details, brand-ready.",
  },
];

export default function ImagesPage() {
  const ref = useRef(null);

  const [tplId, setTplId] = useState("product");
  const [provider, setProvider] = useState("local");
  const [ratio, setRatio] = useState("1:1");
  const [style, setStyle] = useState("Photoreal");
  const [quality, setQuality] = useState("High");
  const [mode, setMode] = useState("Generate");

  const tpl = useMemo(
    () => IMAGE_TEMPLATES.find((t) => t.id === tplId) || IMAGE_TEMPLATES[0],
    [tplId],
  );
  const [prompt, setPrompt] = useState(IMAGE_TEMPLATES[0].prompt);

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
      Array.from({ length: 9 }).map((_, i) => ({
        id: `img-${i}`,
        title: `Image ${i + 1}`,
        subtitle: `${provider} • ${ratio} • ${style}`,
      })),
    [provider, ratio, style],
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
            <div className={styles.title}>Image Studio</div>
            <div className={styles.sub}>
              Templates + settings + results grid (API later).
            </div>
          </div>

          <div className={styles.tplList}>
            {IMAGE_TEMPLATES.map((t) => {
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
                    { value: "Upscale", label: "Upscale" },
                    { value: "Edit", label: "Edit" },
                  ]}
                />
              </div>
            </div>

            <div className={styles.row2}>
              <div>
                <div className={styles.label}>Aspect Ratio</div>
                <Select
                  value={ratio}
                  onChange={(e) => setRatio(e.target.value)}
                >
                  <option>1:1</option>
                  <option>4:5</option>
                  <option>16:9</option>
                  <option>9:16</option>
                  <option>3:2</option>
                </Select>
              </div>
              <div>
                <div className={styles.label}>Style</div>
                <Select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option>Photoreal</option>
                  <option>Cinematic</option>
                  <option>3D</option>
                  <option>Minimal</option>
                  <option>Illustration</option>
                </Select>
              </div>
              <div>
                <div className={styles.label}>Quality</div>
                <Select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                >
                  <option>Standard</option>
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
            subtitle={`Provider: ${provider} • Mode: ${mode} • Quality: ${quality}`}
            onGenerate={onGenerate}
            primaryLabel="Generate Images"
            secondaryLabel="Save as Prompt"
            onSecondary={() => {}}
          >
            <ProviderPicker
              value={provider}
              onChange={setProvider}
              options={[
                { value: "local", label: "Local (UI mock)" },
                { value: "hf", label: "HuggingFace (later)" },
                { value: "openai", label: "OpenAI (later)" },
                { value: "runway", label: "Runway (later)" },
              ]}
            />

            <PromptComposer
              title="Image Prompt"
              value={prompt}
              onChange={setPrompt}
              placeholder="Describe the image…"
              quickChips={[
                "ultra-detailed",
                "cinematic lighting",
                "shallow depth of field",
                "clean background",
                "high contrast",
              ]}
            />
          </GeneratePanel>

          <div data-anim="results">
            <ResultsGrid items={results} kind="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
