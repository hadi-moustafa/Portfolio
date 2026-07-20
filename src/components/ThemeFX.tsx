"use client";

import dynamic from "next/dynamic";
import { useTheme } from "./ThemeProvider";

const FallingLeaves = dynamic(() => import("./fx/FallingLeaves"), { ssr: false });
const Snowflakes = dynamic(() => import("./fx/Snowflakes"), { ssr: false });
const CozyFloaties = dynamic(() => import("./fx/CozyFloaties"), { ssr: false });
const MatrixRain = dynamic(() => import("./fx/MatrixRain"), { ssr: false });

export default function ThemeFX() {
  const { theme } = useTheme();

  if (theme === "autumn") return <FallingLeaves />;
  if (theme === "winter") return <Snowflakes />;
  if (theme === "cozy") return <CozyFloaties />;
  if (theme === "retro") return <MatrixRain />;
  return null;
}
