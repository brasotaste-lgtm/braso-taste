// Braso Taste — SEO landing page data
// Centralizes copy for /experiencias/:slug and /atendemos/:slug pages
// Adding a new page = adding one entry here + one line in sitemap.xml

export interface ServicePageData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  priceInfo: string;
  icon: string;
  intro: string;
  highlights: string[];
  idealFor: string;
}

export const services: ServicePageData[] = [
  {
    slug: "braso-celebration",
    title: "Braso Celebration",
    metaTitle: "Braso Celebration | Buffet de Churrasco em Domicílio na Região dos Lagos",
    metaDescription: "Celebrações completas com churrasco gourmet em domicílio. A partir de R$ 80/pessoa, mínimo 20 convidados. Opção vegana disponível. Atendemos Araruama, Cabo Frio, Saquarema e região.",
    tagline: "A partir de R$ 80/pessoa · mín. 20 convidados",
    priceInfo: "20 pessoas: R$ 100/pessoa · 21-30: R$ 90/pessoa · 31-40: R$ 80/pessoa",
    icon: "/images/icons/braso_celebration.svg",
    intro: "O Braso Celebration é o nosso produto de entrada para quem quer um evento completo, bonito e sem trabalho — sem abrir mão da qualidade que é a assinatura da Braso Taste.",
    highlights: [
      "Buffet completo de churrasco montado no seu espaço",
      "Equipe própria cuidando do fogo, do serviço e da organização",
      "Cardápio pensado para grupos, com guarnições e acompanhamentos",
      "Opção vegana de legumes grelhados na brasa disponível",
      "Organização pós-evento incluída no escopo",
    ],
    idealFor: "Aniversários, confraternizações, almoços em família e pequenas celebrações em casa ou em condomínio.",
  },
  {
    slug: "taste-selection",
    title: "Braso Taste Selection",
    metaTitle: "Braso Taste Selection | Churrasco Gourmet de Cortes Nobres em Casa",
    metaDescription: "Seleção de cortes nobres e alta gastronomia na brasa, em domicílio. R$ 200/pessoa, mínimo 10 convidados. Opção vegana disponível. Curadoria do Chef Fabio Tortelote.",
    tagline: "R$ 200/pessoa · mín. 10 convidados",
    priceInfo: "R$ 200 por pessoa, a partir de 10 convidados",
    icon: "/images/icons/braso_selection.svg",
    intro: "Uma seleção de cortes nobres e acompanhamentos sofisticados, para quem ama carne e busca uma experiência de alta gastronomia na brasa, sem sair de casa.",
    highlights: [
      "Curadoria de cortes premium, escolhidos a dedo",
      "Execução conduzida pelo Chef Fabio Tortelote",
      "Harmonizações e acompanhamentos autorais",
      "Opção vegana de legumes grelhados na brasa disponível",
      "Apresentação de mesa em nível de restaurante",
    ],
    idealFor: "Jantares gourmet, degustações e grupos que valorizam alta gastronomia.",
  },
  {
    slug: "personal-taste",
    title: "Braso Personal Taste",
    metaTitle: "Braso Personal Taste | Chef Particular em Casa com Menu Personalizado",
    metaDescription: "Experiência de chef em casa totalmente personalizada, com cardápio co-criado com você. Orçamento sob consulta, até 20 pessoas. Região dos Lagos e Grande RJ.",
    tagline: "Orçamento personalizado · até 20 pessoas",
    priceInfo: "Orçamento sob consulta, de acordo com escopo e personalização",
    icon: "/images/icons/personal_taste.svg",
    intro: "A experiência mais exclusiva da Braso Taste: cardápio e ritmo desenhados sob medida para você, em conversa direta com o Chef.",
    highlights: [
      "Menu 100% personalizado, co-criado com o cliente",
      "Pode dialogar com alta gastronomia além da brasa — pescados, massas, risotos",
      "Atendimento consultivo do início ao fim",
      "Indicado para ocasiões que pedem exclusividade total",
    ],
    idealFor: "Jantares intimistas, datas especiais e clientes com exigências específicas de cardápio.",
  },
  {
    slug: "da-anatomia-a-brasa",
    title: "Da Anatomia à Brasa",
    metaTitle: "Da Anatomia à Brasa | Experiência Gastronômica e Educativa em Casa",
    metaDescription: "Desossa ao vivo, técnicas de preparo e degustação guiada. R$ 150/pessoa, mínimo 10 convidados. Uma experiência sensorial única para grupos e empresas.",
    tagline: "R$ 150/pessoa · mín. 10 convidados",
    priceInfo: "R$ 150 por pessoa, a partir de 10 convidados",
    icon: "/images/icons/da_anatomia_a_brasa.svg",
    intro: "Um produto educativo e experiencial: desossa ao vivo, técnicas de preparo e degustação guiada, unindo conhecimento sobre cortes, fogo e sabor.",
    highlights: [
      "Demonstração ao vivo de desossa e preparo",
      "Degustação guiada de diferentes cortes e pontos",
      "Conteúdo rico sobre técnica e culinária de fogo",
      "Formato ideal para grupos curiosos e eventos corporativos",
    ],
    idealFor: "Empresas, grupos de amigos e apaixonados por gastronomia que quer viver algo diferente.",
  },
  {
    slug: "brunch-braso-taste",
    title: "Brunch Braso Taste",
    metaTitle: "Brunch Braso Taste | Brunch em Casa com Assinatura da Brasa",
    metaDescription: "O melhor do brunch com toque da brasa, servido em domicílio. R$ 120/pessoa, mínimo 10 convidados. Ideal para batizados e encontros de família.",
    tagline: "R$ 120/pessoa · mín. 10 convidados",
    priceInfo: "R$ 120 por pessoa, a partir de 10 convidados",
    icon: "/images/icons/brunch_braso.svg",
    intro: "Uma oferta diurna de hospitalidade: o melhor do brunch com a assinatura da brasa, em um clima leve e acolhedor.",
    highlights: [
      "Cardápio diurno com toques salgados na brasa",
      "Ambientação leve, ideal para famílias",
      "Montagem completa no seu espaço",
      "Flexível para diferentes horários e ocasiões",
    ],
    idealFor: "Batizados, despedidas, aniversários infantis e encontros de família durante o dia.",
  },
  {
    slug: "house-burger",
    title: "Braso House Burger",
    metaTitle: "Braso House Burger | Hambúrguer Artesanal ao Vivo em Domicílio",
    metaDescription: "Hambúrguer artesanal preparado na hora, com ingredientes premium. R$ 120/pessoa, mínimo 10 convidados. Descontração com qualidade Braso Taste.",
    tagline: "R$ 120/pessoa · mín. 10 convidados",
    priceInfo: "R$ 120 por pessoa, a partir de 10 convidados",
    icon: "/images/icons/house_burguer.svg",
    intro: "Hambúrguer artesanal preparado ao vivo, com ingredientes premium e o padrão de qualidade Braso Taste — para um encontro mais descontraído.",
    highlights: [
      "Blends artesanais preparados na hora",
      "Ingredientes selecionados e pães especiais",
      "Estação montada e conduzida pela nossa equipe",
      "Ótimo custo-benefício para grupos maiores",
    ],
    idealFor: "Aniversários, encontros informais e confraternizações jovens.",
  },
];

export interface CityPageData {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  demand: string;
  priority: "Alta" | "Alta seletiva" | "Média-alta" | "Média seletiva";
}

export const cities: CityPageData[] = [
  {
    slug: "araruama",
    city: "Araruama",
    metaTitle: "Churrasco em Domicílio em Araruama | Braso Taste",
    metaDescription: "Buffet de churrasco e experiências gastronômicas em domicílio em Araruama. Base operacional da Braso Taste, atendimento rápido e personalizado.",
    intro: "Araruama é a nossa base — o que significa deslocamento ágil, disponibilidade de agenda e um atendimento próximo, de quem conhece a região.",
    demand: "Aniversários, confraternizações, almoços em família e pequenos casamentos em residências e condomínios.",
    priority: "Alta",
  },
  {
    slug: "cabo-frio",
    city: "Cabo Frio",
    metaTitle: "Churrasco e Buffet em Domicílio em Cabo Frio | Braso Taste",
    metaDescription: "Experiências gastronômicas na brasa em domicílio em Cabo Frio. Aniversários, casamentos e eventos corporativos com a qualidade Braso Taste.",
    intro: "Cabo Frio é o maior polo de eventos da Região dos Lagos — atendemos aniversários, confraternizações, casamentos e eventos corporativos na cidade.",
    demand: "Maior volume regional: aniversários, confraternizações, casamentos e eventos de empresas.",
    priority: "Alta",
  },
  {
    slug: "saquarema",
    city: "Saquarema",
    metaTitle: "Churrasco em Domicílio em Saquarema | Braso Taste",
    metaDescription: "Buffet de churrasco gourmet em domicílio em Saquarema. Celebrações completas para famílias e empresas, com a assinatura da brasa.",
    intro: "Em Saquarema, atendemos com foco em celebrações familiares e confraternizações, levando a experiência completa da Braso Taste até você.",
    demand: "Eventos familiares, corporativos locais, celebrações e encontros em casas de fim de semana.",
    priority: "Alta",
  },
  {
    slug: "buzios",
    city: "Armação dos Búzios",
    metaTitle: "Chef em Casa e Buffet Gourmet em Búzios | Braso Taste",
    metaDescription: "Experiências gastronômicas exclusivas na brasa em Búzios. Casamentos intimistas, eventos em casas exclusivas e jantares personalizados.",
    intro: "Búzios pede exclusividade — por isso, atendemos a cidade de forma seletiva, com nossos produtos de maior personalização: Taste Selection e Personal Taste.",
    demand: "Casamentos destino, eventos em casas exclusivas, aniversários premium e encontros corporativos boutique.",
    priority: "Alta seletiva",
  },
  {
    slug: "rio-das-ostras",
    city: "Rio das Ostras",
    metaTitle: "Churrasco em Domicílio em Rio das Ostras | Braso Taste",
    metaDescription: "Buffet e experiências gastronômicas na brasa em domicílio em Rio das Ostras. Eventos residenciais, familiares e corporativos.",
    intro: "Em Rio das Ostras, levamos experiências completas para famílias e pequenas empresas da região, com a mesma qualidade da nossa base em Araruama.",
    demand: "Eventos residenciais e familiares, com conexão ao eixo corporativo de Macaé.",
    priority: "Média-alta",
  },
  {
    slug: "macae",
    city: "Macaé",
    metaTitle: "Buffet Corporativo e Churrasco em Domicílio em Macaé | Braso Taste",
    metaDescription: "Experiências gastronômicas na brasa para eventos corporativos e confraternizações em Macaé. Full Service, do planejamento à limpeza.",
    intro: "Em Macaé, atendemos principalmente confraternizações corporativas e eventos empresariais, com escopo pensado para o público de maior porte da cidade.",
    demand: "Confraternizações corporativas, eventos empresariais e aniversários.",
    priority: "Média-alta",
  },
  {
    slug: "nova-friburgo",
    city: "Nova Friburgo",
    metaTitle: "Chef em Casa e Experiências Gastronômicas em Nova Friburgo | Braso Taste",
    metaDescription: "Experiências gastronômicas autorais na brasa em Nova Friburgo. Casamentos, eventos serranos e jantares intimistas com identidade artesanal.",
    intro: "Na região serrana, atendemos de forma seletiva, com foco em casamentos e eventos que valorizam narrativa artesanal e mesa posta.",
    demand: "Casamentos, eventos serranos, casas de campo e experiências gastronômicas intimistas.",
    priority: "Média seletiva",
  },
];
