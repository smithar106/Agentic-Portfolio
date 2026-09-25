import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Arthur Smith — AI Solutions & Forward Deployed Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAFAF7",
          padding: "72px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "#3457D5",
            }}
          />
          <div style={{ fontSize: 30, color: "#14161A", fontWeight: 600 }}>
            Arthur Smith
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#14161A",
              fontWeight: 700,
              maxWidth: 1000,
            }}
          >
            I turn complex operational problems into AI, data, and automation
            products.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#5C6470",
              letterSpacing: "0.02em",
            }}
          >
            AI Solutions · Forward Deployed Engineering · Technical Program
            Leadership
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {["AI", "DATA", "AUTOMATION", "OPERATIONS", "DEPLOYMENT"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#3457D5",
                padding: "10px 22px",
                borderRadius: 999,
                background: "#ECF0FD",
                display: "flex",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
