import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import { contact, creator, totalFollowers } from "@/content/midia-kit";
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

const title = "Jéssica Veronez · Mídia Kit";
const description = `Mídia kit de Jéssica Veronez, criadora de conteúdo de beleza, moda e lifestyle em Curitiba. ${creator.brandsServed} marcas atendidas, ${totalFollowers} seguidores, cases, formatos e contato comercial.`;
const socialDescription = `Criadora de conteúdo de beleza, moda e lifestyle em Curitiba. ${creator.brandsServed} marcas atendidas e ${totalFollowers} seguidores.`;
const shareImage = {
  url: "/generated/velvet-hero.webp",
  width: 2400,
  height: 1336,
  alt: "Jéssica Veronez, criadora de conteúdo de beleza, moda e lifestyle",
};

export const metadata: Metadata = {
  // `URL` é definida pelo Netlify no build com o endereço principal do site.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "http://localhost:3000"),
  title: {
    default: title,
    template: "%s · Jéssica Veronez",
  },
  description,
  applicationName: "Mídia Kit · Jéssica Veronez",
  authors: [{ name: creator.name, url: contact.instagram.url }],
  creator: creator.name,
  keywords: [
    "Jéssica Veronez",
    "mídia kit",
    "criadora de conteúdo",
    "beleza",
    "moda",
    "lifestyle",
    "Curitiba",
    "TikTok Shop",
    "Instagram",
    "UGC",
  ],
  category: "lifestyle",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description: socialDescription,
    url: "/",
    siteName: "Jéssica Veronez",
    locale: "pt_BR",
    type: "profile",
    firstName: creator.firstName,
    lastName: creator.lastName,
    username: contact.instagram.handle,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: socialDescription,
    images: [shareImage],
    creator: contact.instagram.handle,
  },
  appleWebApp: {
    title: "Jéssica Veronez",
    statusBarStyle: "black-translucent",
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
