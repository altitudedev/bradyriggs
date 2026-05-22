import { ImageResponse } from "next/og"

export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 34,
          fontWeight: 800,
          letterSpacing: -2,
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #c24e3a 0%, #9a3a2a 65%, #14110f 100%)",
          borderRadius: 12,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        BR
      </div>
    ),
    { ...size },
  )
}
