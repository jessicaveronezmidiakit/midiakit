import Link from "next/link";
import { videoFolders, type VideoFolder } from "@/lib/videos";

export function Videos() {
  return (
    <section className="light" id="videos" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <p className="kicker center" style={{ color: "var(--muted-light)" }}>
          conteúdo
        </p>
        <h2 className="h center">
          Vídeos por <em>pasta</em>
        </h2>
        <div className="videos-grid">
          {videoFolders.map((folder) => (
            <FolderCard key={folder.slug} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FolderCard({ folder }: { folder: VideoFolder }) {
  return (
    <Link href={`/videos/${folder.slug}`} className="folder-card">
      <span className="screen" />
      <strong>{folder.name}</strong>
    </Link>
  );
}
