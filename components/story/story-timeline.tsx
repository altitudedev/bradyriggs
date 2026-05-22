"use client"

import { motion, useReducedMotion } from "framer-motion"

type Milestone = {
  year: string
  title: string
  body: string
  accent: "clay" | "tan" | "sage"
}

const MILESTONES: Milestone[] = [
  {
    year: "1990s",
    title: "Working teacher",
    body:
      "Starts on the lesson tee in Southern California. PGA membership in hand, working at clubs, learning by watching every kind of player from juniors to senior champions.",
    accent: "tan",
  },
  {
    year: "2007",
    title: "Golf Magazine Top 100",
    body:
      "Named to the magazine's national list of best teachers in America — and stays on every list since. Becomes a regular contributor in Golf Digest and Golf Tips.",
    accent: "clay",
  },
  {
    year: "2010s",
    title: "Tour-level work",
    body:
      "Coaches players into PGA and LPGA Tour status. Sends students to NCAA Regionals, AJGA wins, and competitive amateur titles around the country.",
    accent: "sage",
  },
  {
    year: "2016",
    title: "SCPGA Teacher of the Year",
    body:
      "Recognized by the Southern California PGA Section as Teacher of the Year — the section award that means peers picked him, not a panel.",
    accent: "clay",
  },
  {
    year: "Today",
    title: "Hall of Fame · Adjunct Faculty",
    body:
      "Inducted into the Southern California PGA Teaching Hall of Fame. Joins the PGA of America's National Adjunct Faculty — the group that trains the next generation of teaching pros.",
    accent: "tan",
  },
]

export function StoryTimeline() {
  const reduce = useReducedMotion()
  return (
    <section className="relative border-y border-rule bg-linen-deep py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-3xl md:mb-20"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/50" />
            The timeline
          </div>
          <h2 className="mt-5 display text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.05] text-ink text-balance">
            How the work{" "}
            <span className="italic text-gold-soft">got here.</span>
          </h2>
        </motion.div>

        {/* Vertical rail */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 top-0 bottom-0 w-px bg-rule md:left-6"
          />
          <ol className="space-y-9 md:space-y-12">
            {MILESTONES.map((m, i) => (
              <motion.li
                key={m.year}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 md:pl-16"
              >
                <span
                  aria-hidden
                  className={`absolute left-2.5 top-2 h-3 w-3 rounded-full bg-${m.accent} md:left-4.5`}
                  style={{ boxShadow: `0 0 0 4px rgba(20,17,15,1), 0 0 0 5px var(--${m.accent})` }}
                />
                <div className="grid items-baseline gap-3 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <div className={`font-mono text-[10px] uppercase tracking-[0.32em] text-${m.accent}`}>
                      {m.year}
                    </div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="display text-[1.5rem] leading-[1.15] text-ink md:text-[1.85rem]">
                      {m.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.65] text-ink/70 md:text-[16px]">
                      {m.body}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
