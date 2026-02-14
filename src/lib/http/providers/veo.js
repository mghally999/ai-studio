import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateVideo(prompt) {
  let operation = await ai.models.generateVideos({
    model: "veo-3.1-generate-preview",
    prompt,
    config: {
      resolution: "720p",
      aspectRatio: "16:9",
      durationSeconds: 8,
    },
  });

  while (!operation.done) {
    await new Promise((r) => setTimeout(r, 5000));
    operation = await ai.operations.getVideosOperation({ operation });
  }

  const videoFile = operation.response.generatedVideos[0].video;

  return videoFile.uri; // this is downloadable URL
}
