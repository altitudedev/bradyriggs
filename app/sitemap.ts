import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
    priority: number
  }> = [
    { path: "/",                     changeFrequency: "monthly", priority: 1.0 },
    { path: "/story",                changeFrequency: "monthly", priority: 0.9 },
    { path: "/competitive-players",  changeFrequency: "monthly", priority: 0.9 },
    { path: "/schools-outings",      changeFrequency: "monthly", priority: 0.8 },
    { path: "/adventures",           changeFrequency: "monthly", priority: 0.8 },
    { path: "/connect",              changeFrequency: "monthly", priority: 0.9 },
  ]
  return routes.map((r) => ({
    url: siteUrl(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
