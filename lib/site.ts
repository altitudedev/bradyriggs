/**
 * Site-wide constants — single source of truth for metadata, sitemap,
 * JSON-LD, and any component that needs to reference identity or URL.
 *
 * NEXT_PUBLIC_SITE_URL overrides the canonical origin for previews /
 * local dev. Set the real domain here once it's confirmed.
 */

export const SITE = {
  name: "Brady Riggs Golf",
  shortName: "Brady Riggs",
  signature: "Redgoat",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://bradyriggsgolf.com",
  tagline:
    "Top-100 instruction, built for players who care about the score and the swing equally.",
  bio:
    "Brady Riggs has spent three decades teaching golf — from juniors at their first AJGA event to tour professionals chasing a major. Hall of Fame, Top 100, SCPGA Teacher of the Year. Coaching out of PGA WEST, Hansen Dam, and Brentwood CC.",
  jobTitle: "Golf Coach · Golf Magazine Top 100 Teacher",
  location: { city: "La Quinta", region: "California", country: "US" },
  /** Three teaching homes */
  locations: [
    {
      slug: "pga-west",
      name: "PGA WEST",
      city: "La Quinta, CA",
      note: "Schools, adventures, and tour-level coaching",
    },
    {
      slug: "hansen-dam",
      name: "Hansen Dam Golf Course",
      city: "Los Angeles, CA",
      note: "Daily lessons and junior development",
    },
    {
      slug: "brentwood-cc",
      name: "Brentwood Country Club",
      city: "Brentwood, CA",
      note: "Member-side coaching and competitive prep",
    },
  ],
  social: {
    instagram: "https://instagram.com/redgoat",
    instagramHandle: "@redgoat",
    booking: "https://coach.thrivesports.us",
    email: "info@bradyriggsgolf.com",
  },
  twitter: undefined as string | undefined,
  ogImageSize: { width: 1200, height: 630 },
  brand: {
    /** Warm black canvas */
    background: "#14110f",
    /** Clay red — the "red" in redgoat */
    theme: "#C24E3A",
  },
}

/** Build a full URL from a path. */
export function siteUrl(path = "/"): string {
  const base = SITE.url.replace(/\/$/, "")
  const rel = path.startsWith("/") ? path : `/${path}`
  return `${base}${rel}`
}
