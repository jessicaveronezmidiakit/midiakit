import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/SiteNav";
import { folderBySlug, videoFolders } from "@/lib/videos";

export function generateStaticParams() {
  return videoFolders.map((folder) => ({ slug: folder.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const folder = folderBySlug(slug);
  if (!folder) return {};
  return {
    title: folder.name,
    description: `Vídeos de ${folder.name} no mídia kit de Jéssica Veronez.`,
  };
}

export default async function VideoFolderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const folder = folderBySlug(slug);
  if (!folder) notFound();

  return (
    <>
      <SiteNav />
      <main className="light video-page">
        <div className="wrap">
          <Link className="back" href="/#videos">
            ← Todas as pastas
          </Link>
          <p className="kicker" style={{ color: "var(--muted-light)" }}>
            vídeos
          </p>
          <h1 className="h">{folder.name}</h1>
          <div className="video-mock" aria-hidden="true">
            <span className="screen" />
          </div>
        </div>
      </main>
    </>
  );
}
