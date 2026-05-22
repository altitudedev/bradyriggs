"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

export function PullQuote() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-clay py-20 text-linen md:py-28">
      {/* Background photo wash */}
      <div aria-hidden className="absolute inset-0 opacity-20">
        <Image
          src="/images/footer-bg-pgawest.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Diagonal pattern overlay */}
      <div
        aria-hidden
        className="diag-gold-bold animate-diag pointer-events-none absolute inset-0 opacity-25"
      />

      {/* Dark clay scrim */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(154,58,42,0.88) 0%, rgba(194,78,58,0.78) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.figure
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            aria-hidden
            className="block font-serif text-7xl italic leading-none text-linen/40 md:text-8xl"
          >
            &ldquo;
          </span>
          <blockquote className="mt-2 font-serif text-2xl italic leading-[1.45] text-linen text-balance md:text-[2.1rem] md:leading-[1.4]">
            Greatness is always unique. Players have to find their best
            patterns and train them under stress to take it to the first tee.
          </blockquote>
          <figcaption className="mt-8 font-sans text-[11px] font-bold uppercase tracking-[0.32em] text-linen/80">
            — Brady Riggs
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}
