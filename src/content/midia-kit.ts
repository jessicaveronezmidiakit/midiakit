export const creator = {
  name: "Jéssica Veronez",
  firstName: "Jéssica",
  lastName: "Veronez",
  role: "Criadora de conteúdo de beleza, moda e lifestyle",
  city: "Curitiba, PR",
  since: "1 a 2 anos criando conteúdo",
  brandsServed: "+30",
};

export function whatsappLink(message: string) {
  return `https://wa.me/5541999013646?text=${encodeURIComponent(message)}`;
}

export const contact = {
  email: "jessicaveronez@outlook.com.br",
  whatsappDisplay: "(41) 99901-3646",
  whatsappUrl: whatsappLink("Olá, Jéssica! Vi seu mídia kit e quero falar sobre uma parceria."),
  instagram: { handle: "@jessicaveronez", url: "https://www.instagram.com/jessicaveronez" },
  tiktok: { handle: "@veronezjessica", url: "https://www.tiktok.com/@veronezjessica" },
};

export const about = [
  "Jéssica trocou o mundo corporativo pela criação de conteúdo depois de um burnout. Transformou a transição de carreira em um negócio próprio, falando do que ama, e começou a crescer pelo TikTok Shop.",
  "Formada em consultoria de imagem e estilo, usa esse repertório para ajudar outras mulheres a se sentirem melhor com o próprio estilo — sempre a partir do dia a dia real.",
  "Personalidade forte, opiniões firmes e uma risada que ninguém esquece. Maximalista e intensa, indica apenas o que usa e acredita: a curadoria honesta é o que sustenta a confiança da audiência.",
];

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#redes", label: "Redes" },
  { href: "#publico", label: "Público" },
  { href: "#resultados", label: "Resultados" },
  { href: "#formatos", label: "Formatos" },
  { href: "#medidas", label: "Medidas" },
];

export const metricsPeriod = "Últimos 30 dias";

export const totalFollowers = "102 mil";

export const social = {
  instagram: {
    label: "Instagram",
    followers: "32 mil",
    metrics: [
      { value: "5 mi", label: "contas alcançadas" },
      { value: "257 mil", label: "interações" },
      { value: "4,9 mi", label: "visualizações em Reels" },
      { value: "132 mil", label: "visualizações em Stories" },
    ],
  },
  tiktok: {
    label: "TikTok",
    followers: "70 mil",
    metrics: [
      { value: "7 mi", label: "visualizações de vídeos" },
      { value: "7 mi", label: "espectadores" },
      { value: "+1,5 mi", label: "curtidas" },
      { value: "22,2 mil", label: "visitas ao perfil" },
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
  gmvPrefix: "Acima de",
  gmv: "R$ 200 mil",
  gmvLabel: "GMV médio nos últimos 6 meses",
  conversion: "Instagram e TikTok",
  cases: [
    { brand: "Gummy", product: "Suplementação", value: 800, display: "R$ 800 mil" },
    { brand: "Toda Up", product: "Sutiã", value: 322.2, display: "R$ 322,2 mil" },
    { brand: "Emili Modas", product: "Conjunto de alfaiataria", value: 180, display: "R$ 180 mil" },
    { brand: "Lorizze", product: "Sapatos", value: 100, display: "R$ 100 mil" },
    { brand: "Riachuelo", product: "Moda", value: 30, display: "R$ 30 mil" },
    { brand: "Simple Organic", product: "Ball de olhos", value: 10, display: "R$ 10 mil" },
    { brand: "C&A", product: "Calça petit", value: 7, display: "R$ 7 mil" },
  ],
};

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
  { format: "Publi no feed (Reels)" },
  { format: "Vídeo no TikTok" },
  { format: "Reels + TikTok (mesmo vídeo)" },
  { format: "Sequência de stories", note: "Mínimo de 3 stories" },
  { format: "Carrossel de fotos" },
  { format: "Conteúdo UGC", note: "Entrega do vídeo, sem postagem" },
  { format: "Live shop", note: "Valor por hora, com condição especial para lives longas" },
  { format: "Presença em eventos" },
];

export const brands = [
  { name: "Gummy Original", logo: "/marcas/gummy.webp" },
  { name: "Indulto Jeans", logo: "/marcas/indulto.webp" },
  { name: "Insider", logo: "/marcas/insider.webp" },
  { name: "C&A", logo: "/marcas/cea.webp" },
  { name: "Toda Up", logo: "/marcas/toda-up.webp" },
  { name: "MAC", logo: "/marcas/mac.webp" },
  { name: "Contém1g", logo: "/marcas/contem1g.webp" },
  { name: "Riachuelo", logo: "/marcas/riachuelo.webp" },
  { name: "Lorizze", logo: "/marcas/lorizze.webp" },
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

export const gallery = [
  { src: "/photos/jv-pb-18.webp", alt: "Jéssica Veronez em retrato preto e branco com trench coat" },
  { src: "/photos/jv-14.webp", alt: "Detalhe do look de alfaiataria marsala com scarpin" },
  { src: "/photos/jv-pb-16.webp", alt: "Jéssica Veronez sentada de forma descontraída em preto e branco" },
  { src: "/photos/jv-2.webp", alt: "Jéssica Veronez com blazer off-white e jeans em sofá curvo" },
  { src: "/photos/jv-21.webp", alt: "Mãos segurando celular com conteúdo de moda e revista" },
];
