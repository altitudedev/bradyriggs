import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Mountain, Wine, Plane, Sun } from "lucide-react"
import { SITE, siteUrl } from "@/lib/site"
import { SimpleHero } from "@/components/pages/simple-hero"

export const metadata: Metadata = {
  title: "Adventures — Brady Riggs",
  description:
    "Curated, coached, small-group trips. Iconic courses, luxury lodging, on-course coaching with Brady — Napa, St Andrews, Hawaii.",
  alternates: { canonical: siteUrl("/adventures") },
  openGraph: {
    title: `Adventures — ${SITE.name}`,
    description:
      "Coached, small-group golf trips to iconic destinations — Napa, St Andrews, Hawaii.",
    url: siteUrl("/adventures"),
    siteName: SITE.name,
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const PILLARS = [
  {
    icon: Mountain,
    title: "Performance",
    body: "Coached from the first range session to the last back nine. Daily training. Video. On-course strategy.",
  },
  {
    icon: Sun,
    title: "Play",
    body: "Curated tee times at courses worth flying for. The kind of golf you remember when you're back home.",
  },
  {
    icon: Wine,
    title: "Lifestyle",
    body: "Lodging built for the trip — not just a place to sleep. Wine tours, distillery stops, dinners that earn the photo.",
  },
] as const

const DESTINATIONS = [
  {
    name: "Napa Valley",
    sub: "Golf & wine",
    body: "Top-shelf courses through the valley plus tastings and dinners that match the round. Small group, big itinerary.",
    accent: "clay",
  },
  {
    name: "St Andrews",
    sub: "Legacy & distillery",
    body: "Play the Home of Golf. A coached week through the kingdom of Fife, with whisky stops and links work in between.",
    accent: "tan",
  },
  {
    name: "Hawaii",
    sub: "Golf & wellness",
    body: "Volcano-rim fairways, ocean recovery sessions, and the kind of week you build the off-season around.",
    accent: "sage",
  },
] as const

export default function AdventuresPage() {
  return (
    <main className="relative">
      <SimpleHero
        eyebrow="Travel · play · improve"
        accent="green"
        titleA="Play iconic."
        titleBItalic="Get coached the whole way."
        lead="Small-group golf trips with full coaching attached. Eight to twelve players, three destinations a year, every detail handled — so the only thing on your mind is the next shot."
        image={{
          src: "/images/brady-hawaii.jpeg",
          alt: "Brady on an island fairway",
          caption: "On location · Hawaiian Islands",
        }}
      />

      {/* Three pillars */}
      <section className="relative border-y border-rule bg-linen-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 max-w-3xl md:mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/50" />
              The trip, three ways
            </div>
            <h2 className="mt-5 display text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] text-ink text-balance">
              Performance.{" "}
              <span className="italic text-gold-soft">Play.</span>{" "}
              <span className="italic text-green">Lifestyle.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon
              return (
                <article
                  key={p.title}
                  className="rounded-2xl border border-rule bg-linen/60 p-7 backdrop-blur-sm md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 display text-[1.55rem] leading-[1.1] text-ink md:text-[1.8rem]">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-[1.65] text-ink/70 md:text-[15.5px]">
                    {p.body}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 max-w-3xl md:mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold-soft">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold-soft/40" />
              Upcoming
            </div>
            <h2 className="mt-5 display text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] text-ink text-balance">
              Three destinations.{" "}
              <span className="italic text-gold">Bring the right twelve players.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {DESTINATIONS.map((d) => (
              <article
                key={d.name}
                className="group relative overflow-hidden rounded-2xl border border-rule bg-linen-deep/60 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40 md:p-8"
              >
                <Plane className="absolute right-5 top-5 h-4 w-4 text-ink/25 transition-colors group-hover:text-gold" />
                <div className={`font-mono text-[10px] uppercase tracking-[0.32em] text-${d.accent}`}>
                  {d.sub}
                </div>
                <h3 className="mt-3 display text-[1.7rem] leading-[1.1] text-ink md:text-[1.95rem]">
                  {d.name}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.65] text-ink/70 md:text-[15.5px]">
                  {d.body}
                </p>
              </article>
            ))}
          </div>

          {/* What's included strip */}
          <div className="mt-14 rounded-3xl border border-rule bg-linen-deep/60 p-7 backdrop-blur-sm md:mt-16 md:p-10">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
              What&apos;s included in every trip
            </div>
            <ul className="mt-5 grid gap-3 text-[14.5px] leading-[1.6] text-ink/80 md:grid-cols-2 md:gap-x-10 md:text-[15.5px]">
              <li>· Small group · 8 to 12 players</li>
              <li>· Daily coached training + on-course instruction</li>
              <li>· Luxury lodging and hospitality</li>
              <li>· Off-course excursions (wine, food, history)</li>
              <li>· Welcome gifts + take-home video feedback</li>
              <li>· Post-trip follow-up + practice plans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] text-ink text-balance">
            Want a seat on the next one?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink/65 md:text-[17px]">
            Trips fill in order of inquiry. Tell us which destination
            interests you and we&apos;ll send the itinerary.
          </p>
          <Link
            href="/connect#adventures-form"
            className="mt-9 inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-linen transition-colors hover:bg-clay-deep"
          >
            Inquire about a trip
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
