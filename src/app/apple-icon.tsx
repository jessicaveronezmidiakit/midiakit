import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#7a2335",
          color: "#f6f0e9",
          fontSize: 84,
          fontStyle: "italic",
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "-0.04em",
        }}
      >
        JV
      </div>
    ),
    { ...size },
  );
}
