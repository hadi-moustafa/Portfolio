"use client";

import Image from "next/image";
import { useRef } from "react";

/**
 * An image that opens full size in a lightbox. The full-size view scrolls,
 * and pinch-zooms on touch screens.
 */
export default function Zoomable({
  src,
  alt,
  width,
  height,
  sizes = "(min-width: 1024px) 720px, 100vw",
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  caption?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <figure className={className}>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-line bg-surface"
      >
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} className="h-auto w-full transition duration-200 group-hover:scale-[1.01]" />
        <span className="absolute right-3 bottom-3 rounded-md bg-navy/85 px-2 py-1 text-xs font-semibold text-offwhite">
          Tap to zoom
        </span>
      </button>
      {caption && <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>}
      <dialog
        ref={ref}
        onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
        className="m-auto max-h-[95dvh] max-w-[95vw] overflow-auto rounded-xl bg-surface p-0 backdrop:bg-navy/80"
      >
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="sticky top-2 left-full z-10 mr-2 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-offwhite"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution original, opened on demand */}
        <img src={src} alt={alt} width={width} height={height} loading="lazy" className="-mt-11 block h-auto max-w-none" style={{ width: Math.max(width, 0) }} />
      </dialog>
    </figure>
  );
}
