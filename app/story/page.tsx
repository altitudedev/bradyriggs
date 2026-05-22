import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SITE, siteUrl } from "@/lib/site"
import { StoryHero } from "@/components/story/story-hero"
import { StoryTimeline } from "@/components/story/story-timeline"
import { PhilosophyBlock } from "@/components/home/philosophy-block"
import { CredentialsStrip } from "@/components/home/credentials-strip"

export const metadata: Metadata = {
  title: "Story — Brady Riggs",
  description:
    "Three decades coaching golf — Hall of Fame, Top 100, PGA Adjunct Faculty. The journey from working player to working teacher, and what's behind the swing-of-the-month rejection.",
  alternates: { canonical: siteUrl("/story") },
  openGraph: {
    title: `Story — ${SITE.name}`,
    description:
      "Three decades coaching golf. Hall of Fame. Top 100. The work behind the credentials.",
    url: siteUrl("/story"),
    siteName: SITE.name,
    type: "profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

export default function StoryPage() {
  return (
    <main className="relative">
      <StoryHero />
      <StoryTimeline />
      <PhilosophyBlock />
      <CredentialsStrip />

      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] text-ink text-balance">
            Want to see what a session looks like?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.65] text-ink/65 md:text-[17px]">
            Book one. The first hour is the most useful — Brady spends it
            watching you swing, asking questions, and writing down the plan.
          </p>
          <Link
            href={SITE.social.booking}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3 font-mono text-[11px] uppercase tracking-[0.28em] text-linen transition-colors hover:bg-clay-deep"
          >
            Book a first session
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </main>
  )
}
