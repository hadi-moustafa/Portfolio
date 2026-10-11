/** Clean redraw of the original Governor sketch: App → Governor (cost + cap check) → providers. */
export default function GovernorDiagram() {
  const box = { fill: "#FFFFFF", stroke: "#0D1B2A", strokeOpacity: 0.25, strokeWidth: 2 };
  const text = { fontFamily: "var(--font-poppins), sans-serif", fill: "#0D1B2A" } as const;
  const small = { fontFamily: "var(--font-inter), sans-serif", fill: "#2B2B2B", fontSize: 15 } as const;
  const providers = ["OpenAI", "Anthropic", "Mock provider"];
  return (
    <figure className="overflow-x-auto rounded-xl border border-line bg-surface p-4">
      <svg viewBox="0 0 760 300" role="img" aria-labelledby="gov-diagram-title" className="h-auto w-full min-w-[34rem]">
        <title id="gov-diagram-title">
          Architecture: your app sends requests to Governor, which reserves estimated cost against the cap, then forwards to OpenAI, Anthropic or a
          mock provider and meters each streamed chunk against the cap.
        </title>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="#00767C" />
          </marker>
        </defs>
        <rect x="20" y="115" width="140" height="70" rx="12" {...box} />
        <text x="90" y="157" textAnchor="middle" fontSize="20" fontWeight="600" {...text}>Your app</text>

        <rect x="250" y="70" width="220" height="160" rx="16" fill="#0D1B2A" />
        <text x="360" y="112" textAnchor="middle" fontSize="22" fontWeight="700" fill="#F5F5F0" fontFamily="var(--font-poppins), sans-serif">Governor</text>
        <text x="360" y="145" textAnchor="middle" fontSize="15" fill="#00C2CB" fontFamily="var(--font-inter), sans-serif">1. reserve cost vs cap</text>
        <text x="360" y="170" textAnchor="middle" fontSize="15" fill="#00C2CB" fontFamily="var(--font-inter), sans-serif">2. meter every chunk</text>
        <text x="360" y="195" textAnchor="middle" fontSize="15" fill="#00C2CB" fontFamily="var(--font-inter), sans-serif">3. cut off + refund</text>

        <line x1="160" y1="140" x2="246" y2="140" stroke="#00767C" strokeWidth="2.5" markerEnd="url(#arrow)" />
        <line x1="248" y1="162" x2="164" y2="162" stroke="#00767C" strokeWidth="2.5" strokeDasharray="5 4" markerEnd="url(#arrow)" />
        <text x="203" y="128" textAnchor="middle" {...small}>request</text>
        <text x="203" y="185" textAnchor="middle" {...small}>stream</text>

        {providers.map((p, i) => {
          const y = 40 + i * 90;
          return (
            <g key={p}>
              <rect x="580" y={y} width="160" height="60" rx="12" {...box} />
              <text x="660" y={y + 37} textAnchor="middle" fontSize="18" fontWeight="600" {...text}>{p}</text>
              <line x1="470" y1="150" x2="576" y2={y + 30} stroke="#00767C" strokeWidth="2" markerEnd="url(#arrow)" />
            </g>
          );
        })}
        <text x="360" y="270" textAnchor="middle" {...small}>budget store: in-memory (default) or Redis (opt-in)</text>
      </svg>
    </figure>
  );
}
