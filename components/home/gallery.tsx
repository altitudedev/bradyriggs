"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Instagram, ChevronLeft, ChevronRight, X } from "lucide-react"
import { SITE } from "@/lib/site"

// Curated set — sized so the desktop layout is one 2×2 featured tile
// plus 8 single tiles = exactly 12 cells = two clean rows of 6.
// Mobile is a clean 2-column grid. Click any tile opens the lightbox.
const GALLERY = [
  "/images/gallery-01.jpg",
  "/images/gallery-02.jpg",
  "/images/gallery-03.jpg",
  "/images/gallery-04.jpg",
  "/images/gallery-05.jpg",
  "/images/gallery-06.jpg",
  "/images/gallery-07.jpg",
  "/images/gallery-08.jpg",
  "/images/gallery-09.jpg",
] as const

export function Gallery() {
  const reduce = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i + 1) % GALLERY.length,
      ),
    [],
  )
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length,
      ),
    [],
  )

  // Keyboard nav + scroll lock when lightbox open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, close, next, prev])

  return (
    <section className="relative overflow-hidden bg-linen-deep py-24 md:py-32">
      <div
        aria-hidden
        className="diag-gold pointer-events-none absolute -left-10 bottom-0 h-72 w-64 opacity-90"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header row — full-width title with copy beside it */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12"
        >
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.45em] text-clay md:text-[11px]">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay" />
              Gallery
            </div>
            <h2
              className="mt-5 font-sans font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}
            >
              Check out our gallery
            </h2>
          </div>
          <div className="md:max-w-md">
            <p className="text-pretty text-[15px] leading-[1.65] text-ink/70 md:text-[16.5px]">
              Three decades of coaching captured in candid moments — range
              sessions, on-course coaching, group days, and tournament prep.
            </p>
            <Link
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-sm bg-clay px-6 py-3 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-linen transition-all hover:-translate-y-0.5 hover:bg-clay-deep"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </Link>
          </div>
        </motion.div>

        {/* Full-width gallery — mosaic with featured first tile */}
        <div className="mt-14 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-6 md:gap-4">
          {GALLERY.map((src, i) => {
            // First tile spans 2 cols & 2 rows on desktop for visual weight
            const featured = i === 0
            return (
              <motion.button
                key={src}
                type="button"
                onClick={() => setOpenIndex(i)}
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: (i % 6) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                aria-label={`Open photo ${i + 1} of ${GALLERY.length}`}
                className={`group relative overflow-hidden rounded-sm bg-ink/10 outline-none ring-clay/60 transition-all focus-visible:ring-2 ${
                  featured
                    ? "col-span-2 row-span-2 aspect-square md:col-span-2 md:row-span-2"
                    : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes={
                    featured
                      ? "(max-width: 768px) 100vw, 33vw"
                      : "(max-width: 768px) 50vw, 16vw"
                  }
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 ring-1 ring-inset ring-linen/0 transition-all duration-500 group-hover:ring-linen/20"
                />
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Lightbox — full-screen with blurred backdrop */}
      <AnimatePresence>
        {isOpen && openIndex !== null ? (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            {/* Blurred backdrop — page behind is obscured */}
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="absolute inset-0 cursor-default bg-ink/85 backdrop-blur-2xl"
            />

            {/* Top bar */}
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 md:px-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.32em] text-linen/70">
                {String(openIndex + 1).padStart(2, "0")}
                <span className="mx-2 text-linen/30">/</span>
                {String(GALLERY.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-linen/20 bg-linen/5 text-linen transition-colors hover:bg-linen/15"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-sm text-linen/80 transition-colors hover:bg-linen/10 hover:text-linen md:left-6 md:h-14 md:w-14"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next photo"
              className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-sm text-linen/80 transition-colors hover:bg-linen/10 hover:text-linen md:right-6 md:h-14 md:w-14"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

            {/* Image stage */}
            <AnimatePresence mode="wait">
              <motion.div
                key={openIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-[5] mx-4 my-20 h-[calc(100svh-160px)] w-[calc(100vw-32px)] max-w-6xl md:mx-10"
              >
                <Image
                  src={GALLERY[openIndex]}
                  alt={`Brady Riggs gallery photo ${openIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
