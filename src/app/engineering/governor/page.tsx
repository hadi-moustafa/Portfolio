import type { Metadata } from "next";
import Image from "next/image";
import { engineeringProjects } from "@/lib/content";
import { ph } from "@/lib/placeholder";
import { absoluteUrl, SITE_URL } from "@/lib/site";
import CtaBox from "@/components/CtaBox";
import GovernorDiagram from "@/components/GovernorDiagram";
import JsonLd from "@/components/JsonLd";
import PageShell from "@/components/PageShell";
import Zoomable from "@/components/Zoomable";
import { Ph, T, textLink } from "@/components/ui";

const p = engineeringProjects[0];
const h2 = "font-display text-2xl font-bold text-navy sm:text-3xl";

export const metadata: Metadata = {
  title: "Governor: a hard spending cap for LLM calls",
  description: p.metaDescription,
  alternates: { canonical: "/engineering/governor" },
  openGraph: { title: "Governor: a hard spending cap for LLM calls", description: p.metaDescription, url: "/engineering/governor", type: "article" },
};

const bullet = (x: string) => (
  <li key={x} className="flex gap-3">
    <span aria-hidden="true" className="font-display font-bold text-teal-ink">/</span>
    <span>{x}</span>
  </li>
);

export default function GovernorPage() {
  return (
    <PageShell crumbs={[{ name: "Engineering notes", path: "/engineering" }, { name: "Governor", path: "/engineering/governor" }]}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareSourceCode",
          name: "Governor",
          description: p.metaDescription,
          codeRepository: p.github,
          programmingLanguage: "Go",
          license: "https://opensource.org/licenses/MIT",
          url: absoluteUrl("/engineering/governor"),
          author: { "@id": `${SITE_URL}/#person` },
        }}
      />
      <p className="eyebrow mb-3">Open source · Go · MIT</p>
      <h1 className="font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">Governor: a hard spending cap for LLM calls</h1>
      <p className="mt-5 text-lg">
        A lightweight Go gateway between your app and the model provider. It reserves cost before a request goes out, meters every
        streamed chunk, and cancels the upstream request the moment the cap would be crossed.
      </p>
      <div className="mt-5 rounded-lg bg-navy px-4 py-3 text-offwhite">
        <p className="text-sm text-offwhite/75">Try it against the mock provider, no API keys needed:</p>
        {["go run ./cmd/mockprovider &", "go run ./cmd/governor", `curl -X POST localhost:8080 -d '{"model":"fake","messages":[{"role":"user","content":"hi"}]}'`].map((l) => (
          <p key={l} className="mt-1 font-semibold break-all">
            {l}
          </p>
        ))}
      </div>
      <div className="mt-5">
        <Ph block>governor/demo.gif: 20–30 s demo of a stream cut off at budget_exceeded</Ph>
      </div>

      <section className="mt-14">
        <h2 className={h2}>The problem</h2>
        <p className="mt-4">
          LLM spend is invisible until the invoice arrives. Most tools report cost after the fact, and the ones that enforce limits are
          heavyweight proxies to run. Governor answers one question in one binary: can this request afford to run, and should this stream
          keep going?
        </p>
        <div className="mt-6">
          <GovernorDiagram />
        </div>
        <figure className="mt-5 flex items-center gap-4">
          <Image src="/images/governor/sketch.webp" alt="The original hand sketch: App, Governor gateway with cost and cap, and the providers" width={800} height={410} sizes="160px" className="h-auto w-40 rounded-lg border border-line" />
          <figcaption className="text-sm text-charcoal">Where it started: the first sketch, with the question &ldquo;cap check without added latency?&rdquo;</figcaption>
        </figure>
      </section>

      <section className="mt-14">
        <h2 className={h2}>How it works</h2>
        <ul className="mt-4 space-y-3">
          {[
            "Pre-flight: an estimated cost is atomically reserved against the cap before the provider is called. If that alone would exceed it, the request gets a 429 and no tokens are bought.",
            "Per-chunk metering: each streamed chunk's real cost is reserved against the same cap as soon as it's known.",
            "Upstream cancellation: when a reservation is denied, Governor tears down the provider request itself, not just the stream to the client, so generation actually stops.",
            "Reconciliation: when a stream ends, estimated and actual cost are compared and any unused reservation is refunded.",
            "Storage: an in-memory store by default (a mutex-guarded counter, zero infrastructure); Redis is opt-in for multiple replicas or a cap that survives restarts.",
          ].map(bullet)}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Proof</h2>
        <h3 className="mt-6 font-display text-xl font-semibold text-navy">Benchmark: reserving budget</h3>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[22rem] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-navy/20 text-sm text-charcoal">
                <th className="py-2 pr-4 font-semibold">Store</th>
                <th className="py-2 pr-4 font-semibold">Time per reserve</th>
              </tr>
            </thead>
            <tbody className="tabular-nums">
              <tr className="border-b border-line">
                <td className="py-2 pr-4">In-memory (default)</td>
                <td className="py-2 pr-4 font-semibold text-navy">≈ 25 ns/op</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-2 pr-4">Redis (opt-in)</td>
                <td className="py-2 pr-4 font-semibold text-navy">≈ 96 µs/op</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-charcoal">
          An in-process mutex vs a network round trip to a local Redis, on an 11th Gen Intel i7-1165G7. Reproduce with{" "}
          <span className="font-semibold">go test ./internal/budget/... -bench=BenchmarkReserve -run=^$</span>.
        </p>

        <h3 className="mt-8 font-display text-xl font-semibold text-navy">Concurrency: no double spend</h3>
        <p className="mt-2">
          200 goroutines race for a cap that fits exactly 20 reservations, under Go&apos;s race detector. Exactly 20 get through, on both the
          in-memory and the Redis store.
        </p>
        <Zoomable
          src="/images/governor/tests-and-benchmark.webp"
          alt="Terminal: go test with -race passing TestReserve_AllowsUnderCap, DeniesOverCap and ConcurrentNoDoubleSpend for memory and Redis, then the benchmark at 25.28 ns/op in memory and 95,577 ns/op on Redis"
          width={800}
          height={447}
          className="mt-4"
          caption="Tests under -race, then the benchmark."
        />

        <h3 className="mt-8 font-display text-xl font-semibold text-navy">Mid-stream cutoff</h3>
        <p className="mt-2">
          A mock provider streams 30 chunks with a $0.06 cap. Governor forwards 7, then sends <strong>budget_exceeded</strong> and tears down the
          upstream connection: the result is Completed: false, CanceledByClient: true, and no connection is left open to the provider.
        </p>
        <Zoomable
          src="/images/governor/cutoff.webp"
          alt="Terminal: the mock provider streams chunk-0 to chunk-6, then Governor returns finish_reason budget_exceeded, and a check shows no connection left to the mock provider"
          width={1280}
          height={530}
          className="mt-4"
          caption="Chunks 0–6 go through; the 8th would cross the cap."
        />
      </section>

      <section className="mt-14">
        <h2 className={h2}>Honest limits</h2>
        <ul className="mt-4 space-y-3">
          {[
            "A provider that only reports usage on its final chunk (exactly how OpenAI's stream_options.include_usage behaves) makes true mid-stream cutoff impossible in principle: cost isn't knowable until the stream is already over. There, the cap is enforced by the pre-flight reservation, not live.",
            "Anthropic's message_delta events report output tokens incrementally, so live cutoff works as designed there.",
            "Restarts: the default in-memory store keeps spend in the process, so a restart resets it to zero. Use the Redis store for a cap that survives restarts or is shared by several replicas.",
            "No time windows yet: a cap is a running total, with no daily or monthly reset.",
            "Budgets are per key (an X-Governor-Key header), but every key gets the same cap value from GOVERNOR_CAP_DOLLARS.",
          ].map(bullet)}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Compared with LiteLLM, Helicone and Portkey</h2>
        <T as="p" className="mt-4">{ph("fair comparison with LiteLLM / Helicone / Portkey; verify against their current docs before publishing")}</T>
      </section>

      <section className="mt-14">
        <h2 className={h2}>Links</h2>
        <ul className="mt-4 flex flex-wrap gap-x-6">
          <li>
            <a href={p.github} className={textLink}>GitHub&nbsp;→</a>
          </li>
          <li>
            <a href={`${p.github}/actions/workflows/ci.yml`} className={textLink}>CI status&nbsp;→</a>
          </li>
          <li><T>{ph("pkg.go.dev link (live after the v0.1.0 release)")}</T></li>
          <li><T>{ph("GitHub releases link (after v0.1.0)")}</T></li>
          <li><T>{ph("LinkedIn series URL")}</T></li>
        </ul>
      </section>

      <CtaBox title="Need cost controls or a backend built for your product? Message me." />
    </PageShell>
  );
}
