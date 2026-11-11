import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#7a2335",
          color: "#f6f0e9",
          fontSize: 15,
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
