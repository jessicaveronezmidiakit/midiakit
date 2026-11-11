import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // `URL` é definida pelo Netlify no build com o endereço principal do site.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000"),
  title: "Jéssica Veronez · Mídia Kit",
  description:
    "Mídia kit de Jéssica Veronez, criadora de conteúdo de beleza, moda e lifestyle em Curitiba. Números, público, cases, formatos e contato comercial.",
  openGraph: {
    title: "Jéssica Veronez · Mídia Kit",
    description: "Criadora de conteúdo de beleza, moda e lifestyle. +30 marcas atendidas.",
    images: ["/generated/velvet-hero.webp"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1c080d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bodoni.variable} ${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
