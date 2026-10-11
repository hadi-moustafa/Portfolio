import { ogCard, ogSize } from "@/lib/og";
import { positioning } from "@/lib/positioning";

export const alt = "se.hadi: websites and systems that bring you customers, by Hadi Moustafa in Lebanon";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogCard({
    eyebrow: "Hadi Moustafa · Lebanon",
    title: "Websites and systems that\nbring you customers.",
    subtitle: `Billing systems, websites and ads, built, run and marketed by one person. ${positioning.tagline}`,
  });
}
