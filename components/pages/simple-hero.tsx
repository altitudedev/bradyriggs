"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SITE } from "@/lib/site"

type Props = {
  eyebrow: string
  accent: "gold" | "gold-soft" | "green" | "clay"
  titleA: string
  titleBItalic: string
  lead: string
  /** Full-bleed background image */
  image: { src: string; alt: string; caption?: string }
  /** Optional secondary image — shown side-by-side at md+ */
  imageRight?: { src: string; alt: string }
}

/**
 * Full-height photo-backed hero used on every interior page.
 * Mirrors the home hero structure: full-bleed image background,
 * dark scrim for readability, content anchored bottom-left.
 */
export function SimpleHero({
  eyebrow,
  accent,
  titleA,
  titleBItalic,
  lead,
  image,
  imageRight,
}: Props) {
  const reduce = useReducedMotion()
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-ink">
      {/* Background photos */}
      <div
        aria-hidden
        className={`absolute inset-0 grid h-full ${
          imageRight ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        <div className="relative h-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes={imageRight ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
            className="object-cover object-center"
          />
        </div>
        {imageRight ? (
          <div className="relative hidden h-full md:block">
            <Image
              src={imageRight.src}
              alt={imageRight.alt}
              fill
              priority
              sizes="50vw"
              className="object-cover object-center"
            />
          </div>
        ) : null}
      </div>

      {/* Dark gradient scrim */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 30%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.75) 100%)",
        }}
      />

      {/* Diagonal pattern overlay */}
      <div
        aria-hidden
        className="diag-gold-bold animate-diag pointer-events-none absolute inset-0 opacity-25"
      />

      {/* Content anchored bottom-left */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 md:px-10 md:pb-20">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] md:text-[11px] text-${accent}`}
        >
          <span className={`inline-block h-1.5 w-1.5 rounded-full bg-${accent}`} />
          <span className="text-linen">{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 font-sans font-black uppercase leading-[0.95] tracking-[-0.02em] text-linen text-balance"
          style={{ fontSize: "clamp(2.4rem, 7vw, 5rem)" }}
        >
          {titleA}{" "}
          <span className="text-clay-soft">{titleBItalic}</span>
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-2xl text-pretty text-[15px] leading-[1.6] text-linen/85 md:text-[17px]"
        >
          {lead}
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
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
            href="/connect"
            className="group inline-flex items-center gap-2 rounded-sm border border-linen/60 px-7 py-3.5 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-linen transition-colors hover:border-linen hover:bg-linen hover:text-ink"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
