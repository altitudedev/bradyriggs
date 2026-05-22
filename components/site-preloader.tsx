"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

/**
 * Page-transition title slate.
 *
 *  Fires on initial mount AND on every SPA navigation. `showing` is
 *  derived synchronously from state during render so the overlay is on
 *  screen the very first frame the new pathname appears — no flash of
 *  new page underneath.
 *
 *  Visual: warm-black canvas, drifting clay/tan glows, animated arc
 *  drawing across (the swing-path signature), then the page name in
 *  editorial serif with italic clay accent. Brief, premium, on-brand.
 */

type PageMeta = {
  vol: string
  title: [string, string]
  tagline: string
}

const PAGES: Record<string, PageMeta> = {
  "/":                      { vol: "Chapter 01", title: ["",      "Coaching"],     tagline: "Top-100. Three decades. One swing at a time." },
  "/story":                 { vol: "Chapter 02", title: ["The ",  "Story"],        tagline: "Thirty years. Hall of Fame. Still teaching every day." },
  "/competitive-players":   { vol: "Chapter 03", title: ["",      "Competitive"],  tagline: "Players who keep score in everything they do." },
  "/schools-outings":       { vol: "Chapter 04", title: ["Schools &", " Outings"], tagline: "PGA WEST. Three days. One better swing." },
  "/adventures":            { vol: "Chapter 05", title: ["",      "Adventures"],   tagline: "Play iconic. Live well. Get coached." },
  "/connect":               { vol: "Chapter 06", title: ["",      "Connect"],      tagline: "Show up serious. Leave better." },
}

const FALLBACK: PageMeta = {
  vol: "Chapter —",
  title: ["", "Redgoat"],
  tagline: "Brady Riggs Golf",
}

const HOLD_MS = 950
const REDUCED_MS = 450
const FADE = 0.55
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function SitePreloader() {
  const reduce = useReducedMotion()
  const pathname = usePathname()
  const [shownFor, setShownFor] = useState<string | null>(null)
  const showing = shownFor !== pathname

  useEffect(() => {
    if (!showing) return
    const t = setTimeout(
      () => setShownFor(pathname),
      reduce ? REDUCED_MS : HOLD_MS,
    )
    return () => clearTimeout(t)
  }, [showing, pathname, reduce])

  useEffect(() => {
    if (!showing) return
    const html = document.documentElement
    const body = document.body
    const prevH = html.style.overflow
    const prevB = body.style.overflow
    html.style.overflow = "hidden"
    body.style.overflow = "hidden"
    return () => {
      html.style.overflow = prevH
      body.style.overflow = prevB
    }
  }, [showing])

  const meta = PAGES[pathname ?? ""] ?? FALLBACK

  return (
    <AnimatePresence>
      {showing ? (
        <motion.div
          key={`preloader-${pathname}`}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.2 : FADE, ease: EASE }}
          className="fixed inset-0 z-[400] flex items-center justify-center overflow-hidden bg-linen"
          style={{ width: "100vw", height: "100vh" }}
        >
          {/* Diagonal-line pattern, animated — Brady's signature */}
          <div
            aria-hidden
            className="diag-gold-bold animate-diag pointer-events-none absolute inset-0 opacity-90"
          />

          {/* Warm radial wash on top of the pattern */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(184,146,74,0.18), transparent 70%)," +
                "radial-gradient(ellipse 55% 45% at 18% 90%, rgba(45,62,47,0.10), transparent 65%)," +
                "linear-gradient(180deg, rgba(250,248,243,0.78) 0%, rgba(250,248,243,0.55) 100%)",
            }}
          />

          {/* Signature swing arc — draws across the screen behind the title */}
          <svg
            aria-hidden
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            <motion.path
              d="M 80 720 Q 540 80 1520 220"
              fill="none"
              stroke="rgba(184,146,74,0.7)"
              strokeWidth={1.6}
              strokeLinecap="round"
              initial={reduce ? { opacity: 0.55 } : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            />
            {/* Ball mark at the start of the arc */}
            <motion.circle
              cx="80"
              cy="720"
              r="7"
              fill="rgba(26,24,20,0.78)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
              style={{ transformBox: "fill-box", transformOrigin: "center" }}
            />
            {/* Flag/pin at the end */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2, ease: EASE }}
              style={{ transformBox: "fill-box", transformOrigin: "1520px 220px" }}
            >
              <circle cx="1520" cy="220" r="5.5" fill="#b8924a" />
              <line x1="1520" y1="220" x2="1520" y2="166" stroke="#b8924a" strokeWidth="1.6" />
              <path d="M 1520 166 L 1564 178 L 1520 190 Z" fill="#b8924a" />
            </motion.g>
          </svg>

          {/* Center stack */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] text-ink/55 md:text-[11px]"
            >
              <span className="inline-block h-px w-10 bg-ink/35" />
              <span>{meta.vol}</span>
              <span className="text-ink/25">·</span>
              <span className="text-gold">Redgoat</span>
              <span className="inline-block h-px w-10 bg-ink/35" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.3, ease: EASE }}
              className="mt-7 display font-medium leading-[0.96] tracking-[-0.04em] text-ink text-balance"
              style={{ fontSize: "clamp(3rem, 9.5vw, 7.5rem)" }}
            >
              {meta.title[0] ? (
                <span className="text-ink">{meta.title[0]}</span>
              ) : null}
              <span className="italic text-gold">{meta.title[1]}</span>
              <span className="text-gold">.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
              style={{ transformOrigin: "center" }}
              className="mt-8 h-px w-[min(24rem,70vw)]"
            >
              <div
                className="h-full w-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%)",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.05, ease: EASE }}
              className="mt-5 max-w-[32rem] text-balance font-sans text-[13px] italic leading-[1.55] text-ink/70 md:text-[15px]"
            >
              {meta.tagline}
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
