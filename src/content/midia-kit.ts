export const creator = {
  name: "Jéssica Veronez",
  firstName: "Jéssica",
  lastName: "Veronez",
  role: "Criadora de conteúdo de beleza, moda e lifestyle",
  city: "Curitiba, PR",
  since: "pouco mais de 1 ano nas redes",
  brandsServed: "+30",
};

export function whatsappLink(message: string) {
  return `https://wa.me/5541999013646?text=${encodeURIComponent(message)}`;
}

export const contact = {
  email: "jessicaveronez@outlook.com.br",
  whatsappDisplay: "(41) 99901-3646",
  whatsappNumber: "5541999013646",
  whatsappUrl: whatsappLink("Olá, Jéssica! Vi seu mídia kit e quero falar sobre uma parceria."),
  instagram: { handle: "@jessicaveronez", url: "https://www.instagram.com/jessicaveronez" },
  tiktok: { handle: "@veronezjessica", url: "https://www.tiktok.com/@veronezjessica" },
};

export type AboutPart = { text: string; cap?: string; img?: string };

export const aboutParagraphs: AboutPart[][] = [
  [
    {
      text: "Jéssica trabalha desde os 14 anos. Pós-graduada pela FGV em Gestão Empresarial, construiu uma carreira sólida no ",
    },
    { text: "mundo corporativo", cap: "carreira antes do conteúdo", img: "/photos/jv-2.webp" },
    { text: " até um burnout mudar seus planos. Em vez de recuar, transformou a pausa em virada: migrou para o " },
    { text: "social commerce", cap: "a virada", img: "/photos/jv-21.webp" },
    { text: " e fez da " },
    { text: "criação de conteúdo", cap: "bastidores do conteúdo", img: "/photos/jv-pb-18.webp" },
    {
      text: " um negócio próprio. Com anos de estrada e bagagem profissional em diferentes frentes, leva para as parcerias a postura de quem entende de negócio: é extremamente profissional, pontual e comprometida com prazos e entregas.",
    },
  ],
  [
    {
      text: "O resultado já vem em números: em pouco mais de 1 ano de atuação nas redes sociais, Jéssica reúne mais de 50 mil seguidores no Instagram e 80 mil no TikTok, e já faturou mais de R$ 5 milhões em vídeos e lives no ",
    },
    { text: "TikTok Shop", cap: "venda com narrativa e ao vivo", img: "/photos/jv-14.webp" },
    {
      text: ". Híbrida, ela domina os dois formatos: vende com a narrativa e o olhar de estilo nos vídeos e com a energia e a conexão em tempo real nas lives.",
    },
  ],
  [
    { text: "Formada em " },
    {
      text: "consultoria de imagem e estilo",
      cap: "formação em imagem e estilo",
      img: "/generated/cutout-smile-v2.webp",
    },
    { text: ", Jéssica transforma técnica em conteúdo acessível: mostra, a partir do " },
    { text: "dia a dia real", cap: "dia a dia real", img: "/photos/jv-pb-16.webp" },
    {
      text: ", como mulheres de todos os tipos podem se vestir com mais confiança e se reconhecer no próprio estilo.",
    },
  ],
  [
    { text: "Personalidade forte, opiniões firmes e uma " },
    { text: "risada que ninguém esquece", cap: "maximalista e intensa", img: "/photos/jv-pb-18.webp" },
    {
      text: ". Maximalista e intensa, só indica o que usa e acredita, e é essa curadoria honesta que sustenta a confiança da audiência. Para as marcas, isso significa recomendação com credibilidade e venda real.",
    },
  ],
];

export const aboutTags = ["Formação em imagem e estilo", "Curadoria honesta", "Dia a dia real", "TikTok Shop"];

export const navLinks = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#redes", label: "Redes" },
  { href: "/#videos", label: "Vídeos" },
  { href: "/#publico", label: "Público" },
  { href: "/#resultados", label: "Resultados" },
  { href: "/#formatos", label: "Formatos" },
  { href: "/#medidas", label: "Medidas" },
  { href: "/#contato", label: "Contato" },
];

export const metricsPeriod = "Últimos 30 dias";

export const totalFollowers = "130 mil";

export const social = {
  instagram: {
    label: "Instagram",
    followers: "50 mil",
    metrics: [
      { value: "5 mi", label: "contas alcançadas", cap: "Alcance" },
      { value: "257 mil", label: "interações", cap: "Interações" },
      { value: "4,9 mi", label: "visualizações em Reels", cap: "Reels" },
      { value: "132 mil", label: "visualizações em Stories", cap: "Stories" },
    ],
  },
  tiktok: {
    label: "TikTok",
    followers: "80 mil",
    metrics: [
      { value: "7 mi", label: "visualizações de vídeos", cap: "Visualizações" },
      { value: "7 mi", label: "espectadores", cap: "Espectadores" },
      { value: "+1,5 mi", label: "curtidas", cap: "Curtidas" },
      { value: "22,2 mil", label: "visitas ao perfil", cap: "Visitas ao perfil" },
    ],
  },
};

export const audience = {
  highlights: [
    { value: "81,2%", label: "mulheres no Instagram" },
    { value: "30,9%", label: "entre 45 e 54 anos" },
    { value: "94,3%", label: "no Brasil" },
  ],
  profile: {
    gender: { value: "Feminino", note: "predominante" },
    ages: ["25–34", "35–44", "45+"],
    classes: ["A", "B"],
    cities: ["São Paulo", "Curitiba", "Rio de Janeiro"],
  },
};

export const results = {
  gmv: "R$ 1,8 mi",
  gmvLabel: "faturamento total nos últimos 6 meses",
  cases: [
    { brand: "Gummy", product: "Suplementação", value: 800, display: "R$ 800 mil" },
    { brand: "Toda Up", product: "Sutiã", value: 500, display: "R$ 500 mil" },
    { brand: "Arara Sport", product: "", value: 360, display: "R$ 360 mil" },
    { brand: "Emili Modas", product: "Conjunto de alfaiataria", value: 180, display: "R$ 180 mil" },
    { brand: "Lorizze", product: "Sapatos", value: 100, display: "R$ 100 mil" },
    { brand: "Riachuelo", product: "Moda", value: 25, display: "R$ 25 mil" },
    { brand: "ARM Fitness", product: "", value: 20, display: "R$ 20 mil" },
    { brand: "Insider", product: "", value: 15, display: "R$ 15 mil" },
    { brand: "C&A", product: "Calça petit", value: 12, display: "R$ 12 mil" },
    { brand: "Simple Organic", product: "Ball de olhos", value: 10, display: "R$ 10 mil" },
  ],
};

export function formatCaseTotal(thousands: number) {
  const millions = thousands / 1000;
  return `R$ ${millions.toLocaleString("pt-BR", { maximumFractionDigits: 3 })} mi`;
}

export const contentFormats = [
  "Tutorial",
  "Review",
  "Teste de produto",
  "Arrume-se comigo (GRWM)",
  "Unboxing / Haul",
  "Look do dia",
  "Vlog de rotina",
];

export const deliverables = [
  { item: "Publi no feed (Reels)", title: "Publi no feed (Reels)", tag: "Instagram", note: "Consultar valor", image: "/photos/jv-14.webp" },
  { item: "Vídeo no TikTok", title: "Vídeo no TikTok", tag: "TikTok", note: "Consultar valor", image: "/photos/jv-21.webp" },
  { item: "Reels + TikTok (mesmo vídeo)", title: "Reels + TikTok", tag: "Combo", note: "Mesmo vídeo nas duas redes · consultar valor", image: "/photos/jv-2.webp" },
  { item: "Sequência de stories (mín. 3)", title: "Sequência de stories", tag: "Stories", note: "Mínimo de 3 stories · consultar valor", image: "/photos/jv-pb-16.webp" },
  { item: "Carrossel de fotos", title: "Carrossel de fotos", tag: "Fotos", note: "Consultar valor", image: "/photos/jv-pb-18.webp" },
  { item: "Conteúdo UGC (sem postagem)", title: "Conteúdo UGC", tag: "UGC", note: "Entrega do vídeo, sem postagem · consultar valor", image: "/photos/h-4.webp" },
  { item: "Live shop", title: "Live shop", tag: "Ao vivo", note: "Valor por hora, com condição especial para lives longas", image: "/photos/h-13.webp" },
  { item: "Presença em eventos", title: "Presença em eventos", tag: "Presencial", note: "Consultar valor", image: "/photos/h-17.webp" },
];

export const brands = [
  { name: "MAC", logo: "/marcas/mac.webp" },
  { name: "Indulto Jeans", logo: "/marcas/indulto.webp" },
  { name: "Gummy Original", logo: "/marcas/gummy.webp" },
  { name: "Insider", logo: "/marcas/insider.webp" },
  { name: "C&A", logo: "/marcas/cea.webp" },
  { name: "Toda Up", logo: "/marcas/toda-up.webp" },
  { name: "Lorizze", logo: "/marcas/lorizze.webp" },
  { name: "Contém1g", logo: "/marcas/contem1g.webp" },
  { name: "Riachuelo", logo: "/marcas/riachuelo.webp" },
  { name: "Simple Organic", logo: "/marcas/simple.webp" },
];

export const measures = [
  { label: "Altura", value: "1,61 m" },
  { label: "Busto", value: "88 cm" },
  { label: "Cintura", value: "67 cm" },
  { label: "Quadril", value: "98 cm" },
  { label: "Jeans", value: "36" },
  { label: "Blusa", value: "P" },
  { label: "Calçado", value: "37" },
  { label: "Pele", value: "Clara, mista" },
];

export const measuresCopy = [
  "Jéssica Veronez — Medidas",
  ...measures.map((item) => `${item.label}: ${item.value}`),
].join("\n");

export const gallery = [
  { src: "/photos/h-18.webp", alt: "Retrato com trench coat caramelo" },
  { src: "/photos/h-15.webp", alt: "Conjunto marsala segurando o painel de looks" },
  { src: "/photos/h-13.webp", alt: "Blazer marsala segurando uma revista" },
  { src: "/photos/h-2.webp", alt: "Jaqueta clara e jeans no sofá" },
  { src: "/photos/h-17.webp", alt: "Alfaiataria marsala sentada com revista" },
  { src: "/photos/h-21.webp", alt: "Celular com fotos de moda na tela" },
  { src: "/photos/h-1.webp", alt: "Detalhe do blazer claro e da calça jeans" },
  { src: "/photos/h-7.webp", alt: "De perfil, junto à arara de roupas" },
  { src: "/photos/h-4.webp", alt: "Blazer claro segurando uma jaqueta de couro" },
  { src: "/photos/h-20.webp", alt: "No estúdio, em frente à arara de roupas" },
];

export function quoteBody(items: string[]) {
  const list = items.map((item, index) => `${String(index + 1).padStart(2, "0")} ${item}`).join("\n");
  return items.length
    ? `Oi, Jéssica! Tudo bem?\n\nGostaria de um orçamento para:\n${list}\n\nMarca:\nProduto:\nPrazo:\n\nObrigada!`
    : "Oi, Jéssica! Tudo bem?\n\n";
}
