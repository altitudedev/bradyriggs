"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function ResultsSection() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          {/* LEFT — copy */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] text-gold-deep md:text-[11px]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
              Tour-proven coaching
            </div>
            <h2 className="mt-5 font-sans font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.4rem)" }}>
              Ultimately, it&apos;s about the results.
            </h2>
            <p className="mt-6 max-w-xl text-pretty text-[15px] leading-[1.7] text-ink/80 md:text-[16.5px]">
              Brady often says, &ldquo;The range is where games go to
              die.&rdquo; Trying to perfect mechanics without prioritizing
              performance is a recipe for quitting the game. Developing a
              predictable shot shape, adjusting for lies and slopes, mastering
              distance control instead of distance, and owning the three
              critical short-game shots — those are the pillars of improving
              results.
            </p>
            <Link
              href="/competitive-players"
              className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-linen transition-all hover:-translate-y-0.5 hover:bg-clay-deep"
            >
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* RIGHT — group instruction photo */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:col-span-7"
          >
            <div
              aria-hidden
              className="diag-gold animate-diag-r absolute -top-4 -right-4 h-32 w-32 opacity-90"
            />
            <div className="relative overflow-hidden rounded-sm shadow-[0_30px_60px_-30px_rgba(26,24,20,0.35)]">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/results-group.jpeg"
                  alt="Brady leading a group instruction session"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
