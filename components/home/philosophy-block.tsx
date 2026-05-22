"use client"

import { motion, useReducedMotion } from "framer-motion"

const PILLARS = [
  {
    n: "01",
    title: "See the player",
    body: "Before changes. Before drills. The first session is about understanding who you are with a club in your hand — patterns, tendencies, what already works, what's costing you shots.",
  },
  {
    n: "02",
    title: "Build the plan",
    body: "What to fix, what to leave alone, and the order to attack it in. The plan is yours to take home. The drills are short, the feedback is fast, and there's a reason for everything in it.",
  },
  {
    n: "03",
    title: "Do the work",
    body: "Range time matters when the range time is right. We measure progress with the camera and the launch monitor — and we measure it on the course, where it actually counts.",
  },
]

export function PhilosophyBlock() {
  const reduce = useReducedMotion()
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="grid items-end gap-8 md:grid-cols-12 md:gap-12"
        >
          <div className="md:col-span-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/50" />
              How the lessons run
            </div>
            <h2 className="mt-5 display text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.04] text-ink text-balance">
              Three steps,{" "}
              <span className="italic text-gold">in this order.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-pretty text-[15px] leading-[1.65] text-ink/70 md:text-[17px]">
              No tricks. No swing-of-the-month. Just the same three steps,
              for everyone, every time — adjusted for what you bring to the
              tee.
            </p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-7">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.n}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-2xl border border-rule bg-linen-deep/60 p-7 backdrop-blur-sm md:p-8"
            >
              <span className="display absolute right-5 top-5 text-[3.5rem] leading-none tracking-[-0.04em] text-gold/15 md:text-[4.5rem]">
                {p.n}
              </span>
              <div className="relative">
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-soft">
                  Step {p.n}
                </div>
                <h3 className="mt-3 display text-[1.6rem] leading-[1.15] text-ink md:text-[1.85rem]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.65] text-ink/70 md:text-[15.5px]">
                  {p.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
