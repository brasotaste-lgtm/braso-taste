# Braso Taste – Design Philosophy

## Referência de Design
Este site é inspirado em restaurantes de alta gastronomia e hotéis boutique de luxo.
O objetivo é transmitir exclusividade, confiança, elegância e acolhimento.
NÃO é um site de churrascaria comum, entrega ou hambúrguer.

---

## Abordagem Escolhida: "Brasa & Ouro" — Gastronomia de Alta Cozinha

### Design Movement
**Luxury Hospitality Editorial** — Inspirado em hotéis boutique de 5 estrelas e restaurantes com estrela Michelin. Combina a força rústica do fogo com a elegância atemporal da alta gastronomia.

### Core Principles
1. **Espaço como luxo** — Muito espaço negativo, respiração entre elementos. O silêncio visual comunica exclusividade.
2. **Fotografia como protagonista** — Imagens grandes e cinematográficas dominam o layout. O texto é secundário, elegante e conciso.
3. **Dourado como assinatura** — O dourado (#E2BD7C) aparece como detalhe precioso: linhas, bordas, ícones, botões. Nunca excessivo.
4. **Movimento suave e intencional** — Animações de entrada sutis, parallax leve, transições de 300–500ms com ease-out elegante.

### Color Philosophy
- **Azul Institucional** `#2A4069` — Autoridade, confiança, sofisticação. Usado em fundos escuros e textos de destaque.
- **Dourado** `#E2BD7C` — Excelência, calor do fogo, exclusividade. Usado em detalhes, CTAs e ornamentos.
- **Off-white** `#FAF6F1` — Leveza, hospitalidade, espaço. Fundo principal que evoca papel de alta gramatura.
- **Carvão** `#1A1A1A` — Profundidade, força, contraste. Para textos e seções escuras.

### Layout Paradigm
Layout editorial assimétrico: textos alinhados à esquerda, imagens que sangram para fora do grid, seções alternando entre fundo claro e escuro. Evitar grid centralizado genérico.

### Signature Elements
1. **Linha dourada fina** — Separadores horizontais e bordas de cartões em `#E2BD7C` com 1px de espessura.
2. **Tipografia contrastante** — Títulos em Playfair Display (serif elegante) + corpo em Montserrat (clean, institucional).
3. **Efeito de fumaça/brasa** — Partículas animadas sutis na seção hero, evocando a brasa viva.

### Interaction Philosophy
Cada interação confirma a qualidade: hover em cartões revela brilho dourado sutil, botões têm micro-animação de escala, scroll revela elementos com fade-in elegante.

### Animation
- **Entrada de seções**: `opacity: 0 → 1` + `translateY(20px → 0)` em 600ms ease-out
- **Hero**: Partículas de brasa animadas com CSS/canvas
- **Cartões de experiência**: Hover com `box-shadow` dourado + leve `scale(1.02)`
- **Header**: Reduz altura discretamente ao fazer scroll (80px → 60px)
- **Botões**: `scale(0.97)` no `:active`

### Typography System
- **Display/Títulos**: Playfair Display — serif clássica com personalidade gastronômica
- **Corpo/UI**: Montserrat — clean, moderno, institucional (conforme briefing)
- **Hierarquia**: 
  - H1: Playfair Display 72px/bold, tracking -1px
  - H2: Playfair Display 48px/semibold
  - H3: Montserrat 24px/semibold, uppercase, letter-spacing 3px
  - Body: Montserrat 16px/regular
  - Caption: Montserrat 12px/medium, uppercase, letter-spacing 2px

### Brand Essence
**Braso Taste** — Para quem quer transformar encontros em memórias gastronômicas. Onde o fogo encontra a alta cozinha.
Personalidade: **Sofisticado. Acolhedor. Autêntico.**

### Brand Voice
- Headlines: Poéticas, evocativas, curtas. Ex: *"O fogo que transforma."* / *"Sua mesa. Nossa arte."*
- CTAs: Diretos e exclusivos. Ex: *"Solicitar Experiência"* / *"Conhecer o Chef"*
- Microcopy: Caloroso e preciso. Sem clichês.

### Wordmark & Logo
Símbolo de chama estilizada em dourado, minimalista e geométrica. Representa a brasa — origem de tudo.

### Signature Brand Color
**Dourado Brasa** `#E2BD7C` — A cor do fogo controlado, da excelência e do calor humano.

---

## Style Decisions
- Usar Playfair Display para títulos + Montserrat para corpo (conforme briefing)
- Fundo principal Off-white `#FAF6F1` para seções claras
- Seções alternadas: claro (#FAF6F1) e escuro (#2A4069 ou #1A1A1A)
- Botões dourados com texto escuro para CTAs principais
- Ícones das experiências em dourado sobre fundo escuro
- Galeria em grid masonry com imagens grandes
- Formulário de contato elegante com campos minimalistas
