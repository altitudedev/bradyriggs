import type { Metadata, Viewport } from "next"
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SITE, siteUrl } from "@/lib/site"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SitePreloader } from "@/components/site-preloader"
import { PageTransition } from "@/components/page-transition"
import { ScrollCorners } from "@/components/scroll-corners"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
})

const jbm = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbm",
  display: "swap",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Top-100 golf coaching`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.tagline,
  applicationName: SITE.name,
  authors: [{ name: "Brady Riggs", url: SITE.url }],
  creator: "Brady Riggs",
  publisher: SITE.name,
  category: "Sports · Golf Instruction",
  keywords: [
    "Brady Riggs",
    "Brady Riggs Golf",
    "Redgoat",
    "@redgoat",
    "Golf Magazine Top 100 Teacher",
    "PGA WEST golf instructor",
    "La Quinta golf coach",
    "Hansen Dam golf lessons",
    "Brentwood CC golf coach",
    "junior golf coach California",
    "competitive player development",
    "PGA tour coach",
    "golf school PGA WEST",
    "TrackMan golf lessons",
    "SCPGA Hall of Fame",
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Top-100 golf coaching`,
    description: SITE.tagline,
    images: [
      {
        url: "/opengraph-image",
        width: SITE.ogImageSize.width,
        height: SITE.ogImageSize.height,
        alt: `${SITE.name} — Brady Riggs, Top-100 golf instructor`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Top-100 golf coaching`,
    description: SITE.tagline,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: SITE.brand.background },
    { media: "(prefers-color-scheme: light)", color: SITE.brand.background },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
}

// JSON-LD — Person + WebSite + LocalBusiness graph for Brady's coaching
// practice. Cross-referenced @ids tie the entities together for Google.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}#brady`,
  name: "Brady Riggs",
  givenName: "Brady",
  familyName: "Riggs",
  alternateName: "Redgoat",
  url: SITE.url,
  jobTitle: SITE.jobTitle,
  description: SITE.bio,
  email: `mailto:${SITE.social.email}`,
  sameAs: [SITE.social.instagram].filter(Boolean),
  worksFor: { "@id": `${SITE.url}#brand` },
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location.city,
    addressRegion: SITE.location.region,
    addressCountry: SITE.location.country,
  },
  award: [
    "Golf Magazine Top 100 Teacher in America (since 2007)",
    "Southern California PGA Teaching Hall of Fame",
    "SCPGA Teacher of the Year (2016)",
  ],
  knowsAbout: [
    "Golf instruction",
    "Junior development",
    "Collegiate golf preparation",
    "Tour-level coaching",
    "TrackMan / launch monitor analysis",
    "Tournament strategy",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.tagline,
  publisher: { "@id": `${SITE.url}#brand` },
  inLanguage: "en-US",
}

const brandJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}#brand`,
  name: SITE.name,
  url: SITE.url,
  founder: { "@id": `${SITE.url}#brady` },
  image: siteUrl("/opengraph-image"),
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.location.city,
    addressRegion: SITE.location.region,
    addressCountry: SITE.location.country,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jbm.variable} bg-background`}
    >
      <body className="font-sans antialiased text-foreground">
        {/* No-JS fallback so framer-motion's opacity:0 initial states don't
            leave content invisible if scripts never run. */}
        <noscript>
          <style>{`
            [style*="opacity:0"], [style*="opacity: 0"] { opacity: 1 !important; }
            [style*="translate"], [style*="transform"] { transform: none !important; }
            .grain.fixed.inset-0 { display: none !important; }
            html, body { overflow: auto !important; }
          `}</style>
        </noscript>

        <SitePreloader />
        <SiteHeader />
        <ScrollCorners />
        <PageTransition>{children}</PageTransition>
        <SiteFooter />

        {process.env.NODE_ENV === "production" && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd, brandJsonLd]),
          }}
        />
      </body>
    </html>
  )
}
