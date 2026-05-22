import type { Metadata } from "next"
import { HomeHero } from "@/components/home/home-hero"
import { ServiceCards } from "@/components/home/service-cards"
import { AboutBrady } from "@/components/home/about-brady"
import { PullQuote } from "@/components/home/pull-quote"
import { ResultsSection } from "@/components/home/results-section"
import { Gallery } from "@/components/home/gallery"
import { SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: `${SITE.name} — Brady Riggs, Top-100 Golf Coach` },
  description: SITE.tagline,
  alternates: { canonical: SITE.url },
}

export default function HomePage() {
  return (
    <main className="relative">
      <HomeHero />
      <ServiceCards />
      <AboutBrady />
      <PullQuote />
      <ResultsSection />
      <Gallery />
    </main>
  )
}
