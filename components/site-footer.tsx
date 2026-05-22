"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Instagram, Mail, ArrowUpRight, MapPin } from "lucide-react"
import { SITE } from "@/lib/site"

export function SiteFooter() {
  const reduce = useReducedMotion()
  return (
    <footer className="relative overflow-hidden border-t border-rule bg-linen-deep text-ink">
      {/* Drifting clay glow in the corner */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(194,78,58,0.35), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        {/* Closing line */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/50" />
            Take the next swing
          </div>
          <h2 className="mt-5 display text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02] text-ink text-balance">
            Show up serious. <span className="italic text-gold">Leave better.</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[15px] leading-[1.7] text-ink/65 md:text-[17px]">
            Whether it&apos;s a single tune-up at Hansen Dam or a three-day
            school at PGA WEST — start where you are. Brady takes it from
            there.
          </p>
        </motion.div>

        {/* CTA grid */}
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          <FooterCard
            href={SITE.social.booking}
            external
            eyebrow="One-on-one"
            title="Book a lesson"
            sub="Pick a time. Show up. Get to work."
            accent="clay"
            delay={0.05}
          />
          <FooterCard
            href="/schools-outings#inquire"
            eyebrow="Group · School · Outing"
            title="Plan an event"
            sub="Clinic, school, or corporate outing — built for you."
            accent="tan"
            delay={0.15}
          />
          <FooterCard
            href="/adventures"
            eyebrow="Multi-day"
            title="Adventures"
            sub="Play iconic courses. Get coached the whole way."
            accent="sage"
            delay={0.25}
          />
        </div>

        {/* Quiet sub-footer */}
        <div className="mt-20 grid gap-10 border-t border-rule pt-10 md:mt-24 md:grid-cols-12 md:gap-12 md:pt-12">
          <div className="md:col-span-5">
            <Link href="/" className="display inline-flex items-baseline gap-3 text-[1.9rem] text-ink md:text-[2.2rem]">
              Brady<span className="text-gold">.</span>Riggs
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold-soft/60">
                {SITE.signature}
              </span>
            </Link>
            <p className="mt-5 max-w-sm font-sans text-[15px] italic leading-[1.45] text-ink/75 md:text-[17px]">
              Top-100 coaching for players who care about the score{" "}
              <span className="text-gold">and the swing equally.</span>
            </p>
          </div>

          <nav className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-soft">
              Explore
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/story" label="Story" />
              <FooterLink href="/competitive-players" label="Competitive Players" />
              <FooterLink href="/schools-outings" label="Schools & Outings" />
              <FooterLink href="/adventures" label="Adventures" />
              <FooterLink href="/connect" label="Connect" />
            </ul>
          </nav>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold-soft">
              Reach
            </div>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${SITE.social.email}`}
                  className="group inline-flex items-center gap-2 text-[14px] text-ink/85 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.social.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[14px] text-ink/85 transition-colors hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                  {SITE.social.instagramHandle}
                  <ArrowUpRight className="h-3 w-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li className="mt-2 flex items-start gap-2 text-[13px] leading-[1.5] text-ink/55">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                <span>
                  PGA WEST · Hansen Dam GC · Brentwood CC · California
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-6 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/35">
          <span>© {new Date().getFullYear()} Brady Riggs Golf</span>
          <span className="hidden md:inline">{SITE.signature} · MMXXVI</span>
          <span>Built for the back nine.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterCard({
  href,
  external,
  eyebrow,
  title,
  sub,
  accent,
  delay,
}: {
  href: string
  external?: boolean
  eyebrow: string
  title: string
  sub: string
  accent: "clay" | "tan" | "sage"
  delay: number
}) {
  const reduce = useReducedMotion()
  const accentClass = {
    clay: "text-gold group-hover:bg-gold/15",
    tan: "text-gold-soft group-hover:bg-gold-soft/15",
    sage: "text-green group-hover:bg-green/15",
  }[accent]
  const Wrapper = external ? "a" : Link
  const props = external
    ? { href, target: "_blank" as const, rel: "noreferrer" }
    : { href }
  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Wrapper
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
        className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-rule bg-linen/60 p-6 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-gold/40 md:p-7"
      >
        <div className={`font-mono text-[10px] uppercase tracking-[0.32em] transition-colors ${accentClass.split(" ")[0]}`}>
          {eyebrow}
        </div>
        <div className="display text-[1.6rem] leading-[1.1] text-ink md:text-[1.8rem]">
          {title}
        </div>
        <p className="text-[14px] leading-[1.55] text-ink/65">{sub}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/45 transition-colors group-hover:text-gold">
          Get going <ArrowUpRight className="h-3 w-3" />
        </span>
      </Wrapper>
    </motion.div>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="font-mono text-[12px] uppercase tracking-[0.24em] text-ink/65 transition-colors hover:text-gold"
      >
        {label}
      </Link>
    </li>
  )
}
