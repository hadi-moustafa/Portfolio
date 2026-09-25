/** The se.hadi/ brand mark, set in Poppins so it matches the logo files. */
export default function Wordmark({
  className = "",
  light = false,
}: {
  className?: string;
  /** Off-white letters for use on navy backgrounds. */
  light?: boolean;
}) {
  return (
    <span
      className={`font-display font-medium tracking-tight whitespace-nowrap ${
        light ? "text-offwhite" : "text-navy"
      } ${className}`}
    >
      se.hadi<span className="text-teal">/</span>
    </span>
  );
}
