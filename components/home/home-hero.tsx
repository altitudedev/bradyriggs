"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { SITE } from "@/lib/site"

/**
 * Full-viewport hero — uses the exact banner image from Brady's WordPress
 * site (Riggs-2.png) so the new build matches his existing brand impression.
 * Headline + CTAs sit bottom-left over a dark gradient scrim.
 */
export function HomeHero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Banner image — same one from bradyriggsgolf.com */}
      <Image
        src="/images/hero-banner.png"
        alt="Brady Riggs coaching on the lesson tee at PGA WEST"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark gradient scrim — readable type at any size */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 28%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.78) 100%)",
        }}
      />

      {/* Diagonal pattern decoration */}
      <div
        aria-hidden
        className="diag-gold-bold animate-diag pointer-events-none absolute inset-0 opacity-25"
      />

      {/* Content — bottom-left */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] text-linen/85 md:text-[11px]"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
          <span className="text-linen">Brady Riggs Golf</span>
          <span className="text-linen/40">·</span>
          <span className="text-linen/65">Redgoat</span>
        </motion.div>

        <motion.h1
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-sans font-black uppercase leading-[0.95] tracking-[-0.02em] text-linen text-balance"
          style={{ fontSize: "clamp(2.6rem, 8vw, 5.5rem)" }}
        >
          Brady Riggs <span className="text-clay-soft">Golf</span>
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-pretty text-[15px] leading-[1.6] text-linen/85 md:text-[17px]"
        >
          <span className="font-semibold text-linen">Golf Magazine Top 100 Teacher</span>{" "}
          — blending technical mastery, common-sense strategy, and
          performance-based training for over 30 years of proven results.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href={SITE.social.booking}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-sm bg-clay px-7 py-3.5 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-linen transition-all hover:-translate-y-0.5 hover:bg-clay-deep hover:shadow-[0_18px_40px_-16px_rgba(194,78,58,0.7)]"
          >
            Book Now
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/story"
            className="group inline-flex items-center gap-2 rounded-sm border border-linen/60 px-7 py-3.5 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-linen transition-colors hover:border-linen hover:bg-linen hover:text-ink"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex justify-center"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-linen/60"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <ChevronDown className="h-3 w-3" />
        </motion.div>
      </motion.div>
    </section>
  )
}
