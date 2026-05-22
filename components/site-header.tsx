"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ArrowUpRight, Instagram, Mail } from "lucide-react"
import { SITE } from "@/lib/site"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/story", label: "Story" },
  { href: "/competitive-players", label: "Competitive Players" },
  { href: "/schools-outings", label: "Schools & Outings" },
  { href: "/adventures", label: "Adventures" },
  { href: "/connect", label: "Connect" },
] as const

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock scroll when full-screen menu open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [open])

  // When over a hero (not scrolled), text + logo are light. Once scrolled
  // past, panel becomes white with dark text.
  const overHero = !scrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-linen/90 backdrop-blur-md border-b border-rule"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5">
          <Link
            href="/"
            aria-label="Brady Riggs Golf — home"
            className="group flex shrink-0 items-center"
          >
            <span
              className={`relative block transition-all duration-500 ${
                overHero
                  ? "h-20 w-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] md:h-28 md:w-28"
                  : "h-14 w-14 drop-shadow-none md:h-16 md:w-16"
              }`}
            >
              <Image
                src="/images/brady-riggs-logo.png"
                alt="Brady Riggs Golf"
                fill
                sizes="(max-width: 768px) 80px, 112px"
                className="object-contain"
                priority
              />
            </span>
            <span className="sr-only">Brady Riggs Golf</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.slice(1, -1).map((n) => {
              const active = pathname === n.href
              const base = overHero
                ? active
                  ? "text-linen"
                  : "text-linen/75 hover:text-linen"
                : active
                  ? "text-ink"
                  : "text-ink/60 hover:text-ink"
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`relative font-mono text-[11px] uppercase tracking-[0.28em] transition-colors ${base}`}
                >
                  {n.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute -bottom-1.5 left-0 right-0 h-px ${
                        overHero ? "bg-linen" : "bg-clay"
                      }`}
                    />
                  ) : null}
                </Link>
              )
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3">
            <Link
              href={SITE.social.booking}
              target="_blank"
              rel="noreferrer"
              className="group hidden items-center gap-2 rounded-sm bg-clay px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-linen transition-all hover:-translate-y-0.5 hover:bg-clay-deep md:inline-flex"
            >
              Book a lesson
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors lg:hidden ${
                open
                  ? "border-linen/30 bg-transparent text-linen"
                  : overHero
                    ? "border-linen/40 bg-ink/20 text-linen backdrop-blur-md"
                    : "border-rule bg-linen-deep text-ink"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 lg:hidden"
            aria-modal="true"
            role="dialog"
          >
            {/* Backdrop layers */}
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-ink"
            />
            <div
              aria-hidden
              className="diag-gold-bold animate-diag pointer-events-none absolute inset-0 opacity-20"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 80% 18%, rgba(194,78,58,0.35) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 14% 92%, rgba(184,146,74,0.22) 0%, transparent 60%)",
              }}
            />

            {/* Content */}
            <div className="relative flex h-full flex-col px-6 pb-10 pt-24 md:px-10">
              <nav className="flex-1">
                <ul className="flex flex-col gap-1">
                  {NAV.map((n, i) => {
                    const active = pathname === n.href
                    return (
                      <motion.li
                        key={n.href}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.08 + i * 0.05,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Link
                          href={n.href}
                          className={`group flex items-center justify-between border-b border-linen/10 py-4 transition-colors ${
                            active ? "text-clay" : "text-linen hover:text-clay"
                          }`}
                        >
                          <span className="font-sans text-[22px] font-semibold tracking-[-0.01em] md:text-[26px]">
                            {n.label}
                          </span>
                          <ArrowUpRight
                            className={`h-4 w-4 transition-transform ${
                              active
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + NAV.length * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-6 flex flex-col gap-4"
              >
                <Link
                  href={SITE.social.booking}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between rounded-sm bg-clay px-5 py-4 font-mono text-[12px] uppercase tracking-[0.28em] text-linen transition-colors hover:bg-clay-deep"
                >
                  Book a lesson
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <div className="flex items-center gap-5 pt-2 font-mono text-[10px] uppercase tracking-[0.32em] text-linen/55">
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-linen"
                  >
                    <Instagram className="h-3.5 w-3.5" />
                    {SITE.social.instagramHandle}
                  </a>
                  <a
                    href={`mailto:${SITE.social.email}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-linen"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    Email
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
