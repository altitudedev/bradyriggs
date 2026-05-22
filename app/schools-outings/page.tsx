import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Users, GraduationCap, Building2 } from "lucide-react"
import { SITE, siteUrl } from "@/lib/site"
import { SimpleHero } from "@/components/pages/simple-hero"

export const metadata: Metadata = {
  title: "Schools & Outings — Brady Riggs",
  description:
    "Half-day clinics, one-to-three-day golf schools, and corporate outings at PGA WEST. TrackMan-backed instruction, on-course coaching, and take-home plans.",
  alternates: { canonical: siteUrl("/schools-outings") },
  openGraph: {
    title: `Schools & Outings — ${SITE.name}`,
    description:
      "Half-day clinics, one-to-three-day golf schools, corporate outings — at PGA WEST.",
    url: siteUrl("/schools-outings"),
    siteName: SITE.name,
    type: "article",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const PROGRAMS = [
  {
    icon: Users,
    eyebrow: "Half-day · 3–9 players",
    title: "Clinics",
    body:
      "Pick one focus — putting, wedges, full-swing, mental game — and spend a half day on it. Video, drills, a written practice plan, and follow-up materials so the work doesn't disappear when you go home.",
    accent: "tan",
  },
  {
    icon: GraduationCap,
    eyebrow: "One to three days · private or small group",
    title: "Golf Schools",
    body:
      "Pick the dates, we build the curriculum. Individual swing assessments with launch-monitor and video, on-course coaching at PGA WEST, written plans for what to do after you leave.",
    accent: "clay",
  },
  {
    icon: Building2,
    eyebrow: "Custom · groups any size",
    title: "Corporate Outings",
    body:
      "Half-day clinics into tournament play, branded warm-up stations, TrackMan challenges, swing evaluations. Built for client events, leadership offsites, and member-guests.",
    accent: "sage",
  },
] as const

export default function SchoolsOutingsPage() {
  return (
    <main className="relative">
      <SimpleHero
        eyebrow="Schools · Outings · PGA WEST"
        accent="gold-soft"
        titleA="Three days."
        titleBItalic="One better game."
        lead="Bring a group to PGA WEST. Two top-100 instructors. TrackMan, video, course time, take-home plans. Built around what your players actually need."
        image={{
          src: "/images/brady-events.jpg",
          alt: "Brady Riggs leading a group session",
          caption: "Group day · PGA WEST",
        }}
      />

      {/* Programs */}
      <section className="relative border-y border-rule bg-linen-deep py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 max-w-3xl md:mb-16">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/50" />
              Three formats
            </div>
            <h2 className="mt-5 display text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] text-ink text-balance">
              Pick the shape.{" "}
              <span className="italic text-gold-soft">We&apos;ll handle the curriculum.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {PROGRAMS.map((p) => {
              const Icon = p.icon
              return (
                <article
                  key={p.title}
                  className="group flex h-full flex-col rounded-2xl border border-rule bg-linen/60 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40 md:p-8"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-${p.accent}/15 text-${p.accent}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className={`mt-6 font-mono text-[10px] uppercase tracking-[0.32em] text-${p.accent}`}>
                    {p.eyebrow}
                  </div>
                  <h3 className="mt-3 display text-[1.6rem] leading-[1.1] text-ink md:text-[1.85rem]">
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

      {/* The host card */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <div className="rounded-3xl border border-rule bg-linen-deep/60 p-8 backdrop-blur-sm md:p-12">
            <div className="grid items-start gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold-soft">
                  Hosted at PGA WEST
                </div>
                <h3 className="mt-4 display text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.08] text-ink text-balance">
                  Two Top-100 instructors.{" "}
                  <span className="italic text-gold">Champion courses.</span>
                </h3>
                <p className="mt-5 text-[15px] leading-[1.65] text-ink/70 md:text-[17px]">
                  Brady Riggs and Bryan Lebedevitch run the schools and
                  outings program at PGA WEST in La Quinta. First-class
                  amenities, world-class lesson tees, and the kind of golf
                  course time you only get out here.
                </p>
              </div>
              <div className="md:col-span-5">
                <ul className="space-y-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/65">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                    PGA WEST · La Quinta, CA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-soft" />
                    Half-day to multi-day
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-green" />
                    TrackMan + video
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
                    On-course coaching included
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section id="inquire" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h2 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] text-ink text-balance">
            Got a group? Let&apos;s talk dates.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink/65 md:text-[17px]">
            Tell us a few details — group size, dates, what you want to
            work on — and we&apos;ll come back with a recommended format.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/connect#schools-form"
              className="inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-linen transition-colors hover:bg-clay-deep"
            >
              Inquire now
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`mailto:${SITE.social.email}?subject=Schools%20%26%20outings%20inquiry`}
              className="inline-flex items-center gap-2 rounded-sm border border-ink/25 bg-linen-deep/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-linen"
            >
              Email us directly
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
