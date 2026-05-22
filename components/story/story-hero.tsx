"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

export function StoryHero() {
  const reduce = useReducedMotion()
  return (
    <section className="relative min-h-[80vh] overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Diagonal pattern wash */}
      <div
        aria-hidden
        className="diag-gold-r animate-diag-r pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 30%, rgba(184,146,74,0.18), transparent 65%)," +
            "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(45,62,47,0.14), transparent 65%)," +
            "linear-gradient(180deg, rgba(250,248,243,0.85) 0%, rgba(250,248,243,0.55) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] text-gold-soft md:text-[11px]"
        >
          <span className="inline-block h-px w-10 bg-gold-soft/40" />
          The story
          <span className="text-ink/25">·</span>
          <span className="text-ink/55">Brady Riggs · Redgoat</span>
        </motion.div>

        <motion.h1
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 display font-medium leading-[0.96] tracking-[-0.04em] text-ink text-balance"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
        >
          Thirty years on the lesson tee,{" "}
          <span className="italic text-gold">and still curious about every swing.</span>
        </motion.h1>

        <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-12 md:gap-14">
          {/* Portrait card with diagonal frame */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative md:col-span-5"
          >
            <div
              aria-hidden
              className="diag-gold-bold animate-diag absolute -inset-3 -z-10 rounded-3xl bg-paper/60"
            />
            <div className="relative overflow-hidden rounded-3xl border border-rule bg-paper shadow-[0_36px_80px_-30px_rgba(26,24,20,0.20)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/brady-portrait.jpg"
                  alt="Brady Riggs portrait"
                  fill
                  sizes="(max-width: 768px) 90vw, 38vw"
                  className="object-cover"
                  priority
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(26,24,20,0.55)_100%)]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 font-mono text-[10px] uppercase tracking-[0.28em] text-linen md:text-[11px]">
                  <span>Brady Riggs</span>
                  <span className="text-linen/80">Coach · Redgoat</span>
                </figcaption>
              </div>
            </div>
          </motion.div>

          {/* Bio paragraphs */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-pretty text-[15.5px] leading-[1.7] text-ink/75 md:col-span-7 md:text-[17px]"
          >
            <p>
              Brady started teaching in the 90s, working under the kind of
              instructors who handed you a 7-iron and made you earn every
              change. He played, he competed, he taught — and somewhere along
              the way he figured out the thing that&apos;s defined the rest of
              his career:{" "}
              <span className="text-ink">no two players are the same shape, so no two plans should be either.</span>
            </p>
            <p>
              What followed: a spot on Golf Magazine&apos;s Top 100 list every
              year since 2007, a Hall of Fame induction with the Southern
              California PGA, Teacher of the Year in 2016, and a National
              Adjunct Faculty seat with the PGA of America — a job that
              mostly means teaching the teachers what he&apos;s learned by
              watching players up close for three decades.
            </p>
            <p>
              Today the lesson schedule runs across three California
              studios — PGA WEST in the desert, Hansen Dam in the city, and
              Brentwood Country Club on the west side. Same eye for every
              player who shows up. Different plan for every one.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
