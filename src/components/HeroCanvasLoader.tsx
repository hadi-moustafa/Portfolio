"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

/** The wireframe only renders at lg+, so three.js is only downloaded on those screens. */
export default function HeroCanvasLoader() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setShow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  if (!show) return null;
  return (
    <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
      <HeroCanvas />
    </div>
  );
}
