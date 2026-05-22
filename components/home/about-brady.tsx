"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const CREDENTIALS = [
  "Golf Magazine Top 100 Instructor since 2007",
  "SCPGA Hall of Fame inductee & Teacher of the Year",
  "Trusted by top juniors, collegiate programs, and tour professionals",
  "National Adjunct Faculty — PGA of America",
  "Coaching at PGA WEST and Hansen Dam Golf Course",
  "Brentwood Country Club",
]

export function AboutBrady() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-linen py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
          {/* LEFT — portrait */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="relative overflow-hidden rounded-sm bg-linen-deep shadow-[0_28px_60px_-30px_rgba(26,24,20,0.30)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/about-brady-portrait.jpg"
                  alt="Brady Riggs portrait"
                  fill
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Diagonal pattern accent below the portrait */}
            <div
              aria-hidden
              className="diag-gold-bold animate-diag mt-3 h-12 w-32"
            />
          </motion.div>

          {/* RIGHT — heading + body + badges + bullets + CTA */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <h2 className="font-sans font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>
              Brady Riggs
            </h2>

            <h3 className="mt-7 font-sans text-[1.4rem] font-bold uppercase tracking-[0.02em] text-ink md:text-[1.65rem]">
              Why train with Brady?
            </h3>

            <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-[1.7] text-ink/80 md:text-[16.5px]">
              With nearly 30 years of experience and recognition as one of{" "}
              <span className="font-semibold text-ink">
                Golf Magazine&apos;s Top 100 Teachers in America
              </span>
              , Brady Riggs has worked with thousands of players — from
              juniors taking their first lesson to tour professionals
              chasing majors. His approach pairs modern data-driven
              instruction with timeless fundamentals, every plan built
              around the individual golfer in front of him.
            </p>

            {/* Two credential badges */}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <div className="relative h-24 w-24 md:h-28 md:w-28">
                <Image
                  src="/images/badge-pga.png"
                  alt="PGA of America"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
              <div className="relative h-24 w-24 md:h-28 md:w-28">
                <Image
                  src="/images/badge-top-100.png"
                  alt="Golf Magazine Top 100 Teacher"
                  fill
                  sizes="112px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bullet list */}
            <ul className="mt-9 space-y-3 text-[14.5px] leading-[1.55] text-ink/85 md:text-[15.5px]">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 max-w-2xl text-pretty text-[14.5px] leading-[1.7] text-ink/70 md:text-[15.5px]">
              Brady&apos;s direct, pragmatic style helps create a clear, easy
              path of improvement for any golfer — junior players just
              beginning their competitive journey, D1 college athletes,
              tour pros chasing stars and stripes, or long-time players
              hoping to rekindle past magic. His experience and expertise
              have been the answer for decades.
            </p>

            <Link
              href="/story"
              className="group mt-9 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-linen transition-all hover:bg-clay"
            >
              Learn more
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Diagonal pattern accent bottom-left */}
        <div
          aria-hidden
          className="diag-gold mt-10 h-10 w-40 md:mt-16"
        />
      </div>
    </section>
  )
}
