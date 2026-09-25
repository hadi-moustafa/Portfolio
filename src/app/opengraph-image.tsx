import { ogCard, ogSize } from "@/lib/og";

export const alt = "Hadi Moustafa — Backend Engineer";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "SYSTEMS ONLINE",
    title: "HADI MOUSTAFA",
    subtitle: "Backend engineer. I build for the moments when the system is under real load — not the demo.",
  });
}
