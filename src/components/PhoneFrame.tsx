import Image from "next/image";

/** Consistent phone frame around a real app screenshot. */
export default function PhoneFrame({
  src,
  alt,
  width,
  height,
  className = "",
  sizes = "(min-width: 1024px) 240px, 45vw",
  preload = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  return (
    <div className={`overflow-hidden rounded-[1.75rem] border-[6px] border-navy bg-navy shadow-[0_20px_45px_-20px_rgba(13,27,42,0.55)] ${className}`}>
      <Image src={src} alt={alt} width={width} height={height} sizes={sizes} preload={preload} className="block h-auto w-full rounded-[1.3rem]" />
    </div>
  );
}
