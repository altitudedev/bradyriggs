import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Target,
  Activity,
  Map as MapIcon,
  Trophy,
  Video,
  ClipboardList,
} from "lucide-react"
import { SITE, siteUrl } from "@/lib/site"
import { SimpleHero } from "@/components/pages/simple-hero"

export const metadata: Metadata = {
  title: "Competitive Players — Brady Riggs",
  description:
    "Player development for serious golfers — junior, collegiate, amateur, professional. Full-swing engine, short-game sharpness, on-course strategy, TrackMan-backed data.",
  alternates: { canonical: siteUrl("/competitive-players") },
  openGraph: {
    title: `Competitive Players — ${SITE.name}`,
    description:
      "Player development for juniors, collegiate athletes, top amateurs, and tour pros.",
    url: siteUrl("/competitive-players"),
    siteName: SITE.name,
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const TIERS = [
  {
    label: "Juniors",
    sub: "AJGA · USGA · recruiting",
    body:
      "Build the foundation that holds up at every level above this one. Tournament prep, college recruiting strategy, mental routines for nine-shot Mondays.",
    accent: "tan",
  },
  {
    label: "Collegiate",
    sub: "D1 / D2 / D3 · elite amateur",
    body:
      "Tighten the engine, sharpen short game, learn to play match-ready golf in qualifiers and conference events. Roster spots are won in the second nine.",
    accent: "clay",
  },
  {
    label: "Amateurs",
    sub: "Club champs · Mid · Senior",
    body:
      "Members chasing the championship flight, mid-amateurs heading to USGA events, senior players staying sharp. Built to fit a busy life.",
    accent: "sage",
  },
  {
    label: "Professionals",
    sub: "Mini-tours · LPGA · PGA",
    body:
      "Tour-level technical work, Tuesday-to-Sunday strategy, off-week development. Player + coach on the same page from range to scorecard.",
    accent: "clay",
  },
] as const

const INCLUDED = [
  {
    icon: Target,
    title: "Full-swing engine",
    body: "Shape the shot pattern the course is asking for — high draws when you need them, hold-up cuts when you don't.",
  },
  {
    icon: Activity,
    title: "Three critical shots",
    body: "The chip, the pitch, the bunker. Get these right and you save more strokes than any full-swing change.",
  },
  {
    icon: ClipboardList,
    title: "Pre/post-shot routine",
    body: "What you do before the swing matters more than the swing. Build a routine that works under pressure and stays consistent in scoring rounds.",
  },
  {
    icon: Video,
    title: "Data + video",
    body: "TrackMan numbers, swing video, dispersion patterns. We measure the things that matter and ignore the rest.",
  },
  {
    icon: MapIcon,
    title: "Tournament strategy",
    body: "Course mapping, scheduling, hole-by-hole game plans, conditioning week-by-week. The shot you don't hit is the one you don't need.",
  },
  {
    icon: Trophy,
    title: "Compete · review · adjust",
    body: "After every event: what went right, what didn't, what's next. The plan evolves with the player.",
  },
]

export default function CompetitivePlayersPage() {
  return (
    <main className="relative">
      <SimpleHero
        eyebrow="For players who keep score"
        accent="gold-soft"
        titleA="Build a player."
        titleBItalic="Not just a swing."
        lead="Development for juniors heading to college, college players chasing tour status, amateurs deep in their club season, and professionals competing for a check. Same coach. Same method. Different plan for every player."
        image={{
          src: "/images/card-competitive.jpg",
          alt: "Brady Riggs coaching a competitive player",
        }}
      />

      {/* WHO IT'S FOR */}
      <section className="relative border-y border-rule bg-linen-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 max-w-3xl md:mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold-soft">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold-soft/40" />
              Who it&apos;s for
            </div>
            <h2 className="mt-5 display text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] text-ink text-balance">
              Players who{" "}
              <span className="italic text-gold">already keep score —</span>{" "}
              and want to do it better.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {TIERS.map((t) => (
              <article
                key={t.label}
                className="group rounded-2xl border border-rule bg-linen/60 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40"
              >
                <div className={`font-mono text-[10px] uppercase tracking-[0.32em] text-${t.accent}`}>
                  {t.sub}
                </div>
                <h3 className="mt-4 display text-[1.55rem] leading-[1.1] text-ink md:text-[1.8rem]">
                  {t.label}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.6] text-ink/65 md:text-[15.5px]">
                  {t.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 max-w-3xl md:mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/50" />
              What&apos;s in the work
            </div>
            <h2 className="mt-5 display text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] text-ink text-balance">
              The whole picture —{" "}
              <span className="italic text-gold-soft">not just swing changes.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-rule bg-linen-deep/60 p-7 backdrop-blur-sm md:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 display text-[1.4rem] leading-[1.15] text-ink md:text-[1.55rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-ink/70 md:text-[15.5px]">
                    {item.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] text-ink text-balance">
            Ready to play with a plan?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink/65 md:text-[17px]">
            The fastest way in is a first session — Brady builds the
            development plan after he sees the player.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={SITE.social.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-linen transition-colors hover:bg-clay-deep"
            >
              Book a development session
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/25 bg-linen-deep/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-linen"
            >
              Ask a question first
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
