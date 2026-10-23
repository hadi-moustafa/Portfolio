import Zoomable from "../Zoomable";

/** An Instagram carousel (1080×1350 slides), shown as a zoomable grid. */
export default function Slides({ slides }: { slides: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
      {slides.map((s) => (
        <Zoomable key={s.src} src={s.src} alt={s.alt} width={1080} height={1350} sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw" />
      ))}
    </div>
  );
}
