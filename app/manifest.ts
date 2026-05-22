import type { MetadataRoute } from "next"
import { SITE } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.tagline,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: SITE.brand.background,
    theme_color: SITE.brand.theme,
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/icon", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
    categories: ["sports", "lifestyle", "business"],
    lang: "en-US",
  }
}
