"use client";

import { useEffect, useState } from "react";
import GeneratePanel from "../../components/studio/GeneratePanel";
import PromptComposer from "../../components/studio/PromptComposer";
import styles from "./images.module.css";

export default function ImagesPage() {
  const [mounted, setMounted] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  async function onGenerate() {
    try {
      setLoading(true);
      setError("");
      setResults([]);

      const res = await fetch("/api/images/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      const arr = data?.result?.data;

      if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("No images returned");
      }

      setResults(
        arr.map((item, i) => ({
          id: i,
          url: item.imageURL,
          title: `Image ${i + 1}`,
          subtitle: "Runware AI",
        }))
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <GeneratePanel
        title="Image Generator"
        subtitle="Generate AI images"
        onGenerate={onGenerate}
        primaryLabel="Generate Images"
      >
        <PromptComposer value={prompt} onChange={setPrompt} />
      </GeneratePanel>

      {loading && <p>Generating...</p>}
      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid}>
        {results.map((img) => (
          <img key={img.id} src={img.url} className={styles.image} />
        ))}
      </div>
    </div>
  );
}
