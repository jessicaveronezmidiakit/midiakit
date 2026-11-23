import fs from "fs";
import path from "path";

const root = process.cwd();
const source = path.join(root, "references", "videos");
const link = path.join(root, "public", "arquivos");
const manifestPath = path.join(root, "src", "content", "video-library.json");

const order = [
  "Looks",
  "Arrume-se Comigo",
  "Unboxing",
  "Dicas",
  "Casal",
  "Riachuelo",
  "TodaUp",
  "MAC",
  "Contém1g",
  "Creamy",
];

const labels = {
  "Arrume-se Comigo": "Arrume-se comigo",
  TodaUp: "Toda Up",
};

function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

if (!fs.existsSync(source)) {
  console.error("Pasta de vídeos não encontrada:", source);
  process.exit(1);
}

if (!fs.existsSync(link)) {
  const type = process.platform === "win32" ? "junction" : "dir";
  fs.symlinkSync(source, link, type);
}

const folders = fs
  .readdirSync(source, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b, "pt");
  });

const library = folders.map((name) => {
  const files = fs
    .readdirSync(path.join(source, name))
    .filter((file) => /\.(mp4|mov|webm)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, "pt"));
  const preview = files.find((file) => /\.mp4$/i.test(file)) ?? files[0] ?? null;
  return {
    slug: slugify(name),
    name: labels[name] ?? name,
    folder: name,
    preview,
    files,
  };
});

fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, JSON.stringify(library, null, 2) + "\n");
console.log(`Vídeos ligados em public/arquivos (${library.length} pastas).`);
