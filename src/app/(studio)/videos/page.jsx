"use client";

import { useEffect, useState } from "react";
import GeneratePanel from "../../components/studio/GeneratePanel";
import PromptComposer from "../../components/studio/PromptComposer";
import styles from "./videos.module.css";

export default function VideosPage() {
  const [mounted, setMounted] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
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
      setVideoUrl("");

      const res = await fetch("/api/videos/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      const arr = Array.isArray(data.result?.data)
        ? data.result.data
        : Array.isArray(data.result)
        ? data.result
        : [];

      const url = arr?.[0]?.output?.videoURL;

      if (!url) {
        throw new Error(
          data.result?.errors?.[0]?.message || "No video returned."
        );
      }

      setVideoUrl(url);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <GeneratePanel
        title="Video Generator"
        subtitle="Generate AI video"
        onGenerate={onGenerate}
        primaryLabel="Generate Video"
      >
        <PromptComposer value={prompt} onChange={setPrompt} />
      </GeneratePanel>

      {loading && <p>Generating...</p>}
      {error && <p className={styles.error}>{error}</p>}

      {videoUrl && <video src={videoUrl} controls className={styles.video} />}
    </div>
  );
}

/* Comment */
