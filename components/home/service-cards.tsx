"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const CARDS = [
  {
    href: "/story",
    image: "/images/card-brady-story.jpg",
    eyebrow: "About",
    title: "Brady's Story",
    body: "Thirty years on the lesson tee. Hall of Fame coach.",
  },
  {
    href: "/competitive-players",
    image: "/images/card-competitive.jpg",
    eyebrow: "Player development",
    title: "Competitive Players",
    body: "Juniors to tour pros — built for serious golfers.",
  },
  {
    href: "/schools-outings",
    image: "/images/card-schools-outings.jpg",
    eyebrow: "Group programs",
    title: "Clinics, Schools & Outings",
    body: "Half-day to multi-day at PGA WEST. Group or corporate.",
  },
]

export function ServiceCards() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-linen py-20 md:py-24">
      {/* Diagonal pattern decoration on the left edge */}
      <div
        aria-hidden
        className="diag-gold pointer-events-none absolute -left-10 top-0 hidden h-full w-48 opacity-90 md:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.href}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link
                href={card.href}
                className="group relative block h-full overflow-hidden rounded-md shadow-[0_24px_50px_-30px_rgba(26,24,20,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(26,24,20,0.5)]"
              >
                {/* Background image */}
                <div className="relative aspect-[5/4] w-full md:aspect-[4/5]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient scrim */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(26,24,20,0.35) 0%, rgba(26,24,20,0.10) 35%, rgba(26,24,20,0.78) 100%)",
                    }}
                  />
                  {/* Diagonal accent overlay on hover */}
                  <div
                    aria-hidden
                    className="diag-gold-bold absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                  />

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
                    <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-soft">
                      {card.eyebrow}
                    </div>
                    <h3 className="mt-2 font-sans font-black uppercase leading-[0.98] tracking-[-0.01em] text-linen md:text-[1.85rem]"
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}>
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-xs text-[13.5px] leading-[1.5] text-linen/80 md:text-[14.5px]">
                      {card.body}
                    </p>
                    {/* Learn more pill */}
                    <span className="mt-5 inline-flex items-center gap-2 self-start rounded-sm bg-clay px-5 py-2.5 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-linen transition-colors group-hover:bg-clay-deep">
                      Learn more
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
