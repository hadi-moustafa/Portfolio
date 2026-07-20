"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("cursor-none-desktop");
    if (wrapperRef.current) wrapperRef.current.style.opacity = "1";

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let hovering = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate(${targetX}px, ${targetY}px)`;
    };

    const interactiveSelector = "a, button, input, textarea, [role='button']";
    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest(interactiveSelector);
      hovering = Boolean(target);
      ring.style.width = hovering ? "44px" : "28px";
      ring.style.height = hovering ? "44px" : "28px";
      ring.style.borderColor = hovering ? "var(--amber)" : "rgba(245,158,11,0.5)";
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-desktop");
    };
  }, []);

  return (
    <div ref={wrapperRef} className="opacity-0">
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[300] w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-amber"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[300] w-7 h-7 -ml-3.5 -mt-3.5 rounded-full border transition-[width,height,border-color] duration-150"
        style={{ borderColor: "rgba(245,158,11,0.5)" }}
      />
    </div>
  );
}
