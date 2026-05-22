import { ImageResponse } from "next/og"
import { SITE } from "@/lib/site"

export const runtime = "edge"
export const alt = `${SITE.name} — Top-100 golf coaching`
export const size = SITE.ogImageSize
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse 70% 50% at 80% 18%, rgba(194,78,58,0.55) 0%, transparent 60%)," +
            "radial-gradient(ellipse 55% 40% at 14% 92%, rgba(212,165,116,0.35) 0%, transparent 60%)," +
            "linear-gradient(135deg, #14110f 0%, #0e0b09 100%)",
          color: "#f5f0e8",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "rgba(212,165,116,0.85)",
          }}
        >
          <div style={{ width: 56, height: 1, background: "rgba(212,165,116,0.5)" }} />
          <span>Brady Riggs Golf · Redgoat</span>
        </div>

        {/* Big headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              lineHeight: 0.96,
              display: "flex",
              flexWrap: "wrap",
              gap: 22,
            }}
          >
            <span>Brady</span>
            <span style={{ fontStyle: "italic", color: "#c24e3a" }}>
              Riggs.
            </span>
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(245,240,232,0.78)",
              maxWidth: 900,
              marginTop: 12,
            }}
          >
            Top-100 golf coaching for players who care about{" "}
            <span style={{ color: "#d4a574" }}>the score and the swing equally.</span>
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.55)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: "#c24e3a" }} />
            <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: "#d4a574" }} />
            <span style={{ display: "inline-block", width: 12, height: 12, borderRadius: "50%", background: "#6b7f69" }} />
          </div>
          <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
