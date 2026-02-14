import { NextResponse } from "next/server";
import { generateVideo } from "@/lib/http/providers/veo";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const videoUrl = await generateVideo(prompt);

    return NextResponse.json({ result: { videoUrl } });
  } catch (err) {
    return NextResponse.json(
      { error: err.message || "Video generation failed" },
      { status: 500 }
    );
  }
}
