# Mídia Kit · Jéssica Veronez

Landing page de mídia kit em Next.js 16 (App Router + TypeScript + Tailwind 4).

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção (página 100% estática)
```

Em produção, defina `NEXT_PUBLIC_SITE_URL` (ex.: `https://midiakit.jessicaveronez.com.br`) para as imagens de Open Graph.

## Onde editar

- **Conteúdo** (textos, números, cases, entregas, marcas, medidas, contato): `src/content/midia-kit.ts`
  - Os valores não aparecem no site: cada entrega em `deliverables` abre o WhatsApp com uma mensagem pedindo o valor daquele formato.
- **Paleta**: variáveis CSS em `src/app/globals.css` (`--ink`, `--wine`, `--marsala`, `--offwhite`, `--sand`, `--accent` amarelo bebê).
- **Seções**: `src/components/sections/*`, montadas em `src/app/page.tsx`.

## Assets

| Pasta | Origem |
| --- | --- |
| `public/generated/` | Gerados no **Magnific** (MCP): fundos `velvet-results`, `satin-about`, `satin-formats`, todos sem fitas ou laços (`satin-about` e `satin-formats` têm versão vertical `*-mobile`, usada abaixo de 1024 px), e `velvet-hero`, usado só como imagem de Open Graph; e recortes `cutout-*` (fundo removido no Magnific a partir das fotos reais). |
| `public/photos/` | Fotos reais da creator (`informações/imagens/`), redimensionadas para WebP. |
| `public/marcas/` | Logos das marcas parceiras, em WebP com fundo transparente. |

Os originais em alta ficam em `informações/imagens/` e no projeto *Personal* da conta Magnific.

## Pendências

- O levantamento não trouxe frase de impacto, diferenciais nem vídeos de melhor resultado; essas seções foram omitidas.
# midiakit
