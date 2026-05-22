import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Calendar,
  Mail,
  Instagram,
  MapPin,
  MessageSquare,
} from "lucide-react"
import { SITE, siteUrl } from "@/lib/site"
import { SimpleHero } from "@/components/pages/simple-hero"

export const metadata: Metadata = {
  title: "Connect — Brady Riggs",
  description:
    "Book a lesson, plan a school, or ask about an adventure. Brady reads every note that comes in.",
  alternates: { canonical: siteUrl("/connect") },
  openGraph: {
    title: `Connect — ${SITE.name}`,
    description:
      "Book a lesson, plan a school, or ask about an adventure.",
    url: siteUrl("/connect"),
    siteName: SITE.name,
    type: "profile",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

const CHANNELS = [
  {
    icon: Calendar,
    title: "Book a lesson",
    sub: "Pick a time on the calendar",
    href: SITE.social.booking,
    external: true,
    accent: "clay" as const,
  },
  {
    icon: Mail,
    title: "Email Brady",
    sub: SITE.social.email,
    href: `mailto:${SITE.social.email}`,
    external: false,
    accent: "tan" as const,
  },
  {
    icon: Instagram,
    title: "On Instagram",
    sub: SITE.social.instagramHandle,
    href: SITE.social.instagram,
    external: true,
    accent: "sage" as const,
  },
]

export default function ConnectPage() {
  return (
    <main className="relative">
      <SimpleHero
        eyebrow="Say hello"
        accent="gold"
        titleA="Three doors in."
        titleBItalic="All of them open."
        lead="Book a lesson, send an email, or DM on Instagram. Whichever's fastest for you — Brady reads everything that comes in."
        image={{
          src: "/images/results-group-2.jpeg",
          alt: "Brady Riggs at a group event",
        }}
      />

      {/* Channel grid */}
      <section className="relative border-y border-rule bg-linen-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {CHANNELS.map((c) => {
              const Icon = c.icon
              const Wrapper = c.external ? "a" : Link
              const props = c.external
                ? { href: c.href, target: "_blank" as const, rel: "noreferrer" }
                : { href: c.href }
              return (
                <Wrapper
                  key={c.title}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  {...(props as any)}
                  className="group flex h-full flex-col rounded-2xl border border-rule bg-linen/60 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-gold/40 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-${c.accent}/15 text-${c.accent} transition-colors group-hover:bg-${c.accent} group-hover:text-ink`}>
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-ink/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </div>
                  <h3 className="mt-6 display text-[1.5rem] leading-[1.1] text-ink md:text-[1.75rem]">
                    {c.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.28em] text-ink/55">
                    {c.sub}
                  </p>
                </Wrapper>
              )
            })}
          </div>
        </div>
      </section>

      {/* Inquiry form (schools / outings / adventures) */}
      <section id="schools-form" className="relative scroll-mt-24 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-12 md:gap-16 md:px-10">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold-soft">
              <span className="mr-3 inline-block h-px w-10 align-middle bg-gold-soft/40" />
              For groups & trips
            </div>
            <h2 className="mt-5 display text-[clamp(2rem,5vw,3.4rem)] leading-[1.04] text-ink text-balance">
              Tell us about{" "}
              <span className="italic text-gold">the group.</span>
            </h2>
            <p className="mt-5 text-[14.5px] leading-[1.65] text-ink/70 md:text-[16px]">
              Whether it&apos;s a clinic at Hansen Dam, a corporate event at
              PGA WEST, or a seat on an upcoming adventure — drop the
              details and we&apos;ll come back with a recommended format
              and a few date options.
            </p>
            <ul className="mt-7 space-y-2.5 font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink/55">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold-soft" />
                PGA WEST · Hansen Dam · Brentwood CC
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="h-3.5 w-3.5 text-gold" />
                Brady answers personally
              </li>
            </ul>
          </div>

          <form
            id="adventures-form"
            className="rounded-3xl border border-rule bg-linen-deep/60 p-7 backdrop-blur-md md:col-span-7 md:p-10"
            action={`mailto:${SITE.social.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field name="name" label="Your name" placeholder="Jane Doe" required />
              <Field name="email" type="email" label="Email" placeholder="you@example.com" required />
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <SelectField
                name="format"
                label="Format"
                options={[
                  "Half-day clinic",
                  "Full-day clinic",
                  "1-day school",
                  "Multi-day school",
                  "Corporate outing",
                  "Adventure trip",
                  "Not sure yet",
                ]}
              />
              <Field name="group" label="Group size" placeholder="e.g. 8" />
            </div>
            <Field name="dates" label="Preferred dates" placeholder="e.g. October 2026" className="mt-5" />
            <div className="mt-5">
              <label
                htmlFor="message"
                className="block font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55"
              >
                Anything else
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What does the group want to work on? Any context that helps Brady plan the day."
                className="mt-2 w-full rounded-xl border border-rule bg-linen/70 px-4 py-3 text-[14px] leading-[1.55] text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-clay/30"
              />
            </div>
            <div className="mt-7 flex items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">
                Brady reads every note
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-sm bg-clay px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-linen transition-colors hover:bg-clay-deep"
              >
                Send inquiry
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Locations strip */}
      <section className="relative border-t border-rule bg-linen-deep py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.45em] text-gold-soft">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-gold-soft/40" />
            Three studios
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3 md:gap-6">
            {SITE.locations.map((loc) => (
              <div
                key={loc.slug}
                className="rounded-2xl border border-rule bg-linen/60 p-6 backdrop-blur-sm"
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.32em] text-gold">
                  {loc.city}
                </div>
                <h3 className="mt-3 display text-[1.4rem] leading-[1.1] text-ink md:text-[1.55rem]">
                  {loc.name}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.55] text-ink/65">{loc.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  className = "",
}: {
  name: string
  label: string
  placeholder?: string
  type?: string
  required?: boolean
  className?: string
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-rule bg-linen/70 px-4 py-3 text-[14px] leading-[1.5] text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none focus:ring-2 focus:ring-clay/30"
      />
    </div>
  )
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string
  label: string
  options: string[]
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-[0.32em] text-ink/55"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="mt-2 w-full appearance-none rounded-xl border border-rule bg-linen/70 px-4 py-3 text-[14px] leading-[1.5] text-ink focus:border-gold focus:outline-none focus:ring-2 focus:ring-clay/30"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-linen text-ink">
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
