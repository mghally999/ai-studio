import { v4 as uuidv4 } from "uuid";

const URL = "https://api.runware.ai/v1";

export async function generateImage(prompt) {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RUNWARE_API_KEY}`,
    },
    body: JSON.stringify([
      {
        taskUUID: uuidv4(),
        taskType: "imageInference",
        model: "runware:100@1",
        positivePrompt: prompt,
        width: 512,
        height: 512,
        numberResults: 2,
      },
    ]),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text);
  }

  return JSON.parse(text);
}

export async function generateVideo(prompt) {
  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RUNWARE_API_KEY}`,
    },
    body: JSON.stringify([
      {
        taskUUID: uuidv4(),
        taskType: "videoInference",
        model: "runware:100@1",
        positivePrompt: prompt,
        width: 512,
        height: 512,
        duration: 3,
      },
    ]),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text);
  }

  return JSON.parse(text);
}
