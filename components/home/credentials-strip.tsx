"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Trophy, GraduationCap, Award, BadgeCheck } from "lucide-react"

const CREDENTIALS = [
  {
    icon: Trophy,
    headline: "Top 100",
    sub: "Golf Magazine's Top 100 Teachers in America — every list since 2007.",
  },
  {
    icon: Award,
    headline: "Hall of Fame",
    sub: "Southern California PGA Teaching Hall of Fame inductee.",
  },
  {
    icon: BadgeCheck,
    headline: "SCPGA Teacher of the Year",
    sub: "Named 2016 Teacher of the Year by the Southern California PGA Section.",
  },
  {
    icon: GraduationCap,
    headline: "PGA Adjunct Faculty",
    sub: "Teaches the teachers — National Adjunct Faculty, PGA of America.",
  },
]

export function CredentialsStrip() {
  const reduce = useReducedMotion()
  return (
    <section className="relative border-y border-rule bg-linen-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-3xl md:mb-16"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold-soft">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-gold-soft/40" />
            What the work has earned
          </div>
          <h2 className="mt-5 display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] text-ink text-balance">
            Awards don&apos;t hit shots.{" "}
            <span className="italic text-gold">But they tell you who&apos;s in the bag.</span>
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {CREDENTIALS.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.headline}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-rule bg-linen/60 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(194,78,58,0.35)] md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div className="mt-5 display text-[1.45rem] leading-[1.15] text-ink md:text-[1.6rem]">
                  {c.headline}
                </div>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink/65 md:text-[14px]">
                  {c.sub}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
