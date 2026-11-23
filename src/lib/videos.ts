import library from "@/content/video-library.json";

export type VideoFolder = {
  slug: string;
  name: string;
  folder: string;
  preview: string | null;
  files: string[];
};

export const videoFolders = library as VideoFolder[];

export function videoUrl(folder: string, file: string) {
  return `/arquivos/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;
}

export function folderBySlug(slug: string) {
  return videoFolders.find((folder) => folder.slug === slug);
}
