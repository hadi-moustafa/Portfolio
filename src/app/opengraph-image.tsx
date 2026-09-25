import { ogCard, ogSize } from "@/lib/og";

export const alt = "se.hadi — Hadi Moustafa, software engineer & digital marketer in Lebanon";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Hadi Moustafa · Lebanon",
    title: "I build it. I market it.\nI fix it. I grow it.",
    subtitle: "Software engineer & digital marketer — from the backend that holds under load to the audience that finds it.",
  });
}
