# Teste Econverse – Front-End

Página completa (header, banner, categorias, vitrines, parceiros, marcas, newsletter e footer) em **React + TypeScript + Sass (Vite)**, baseada no layout do Figma. As vitrines consomem o JSON da Econverse e abrem um modal com os detalhes do produto ao clicar.

## Requisitos
- Node.js 18+

## Como rodar
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build e testes
```bash
npm run build      # checagem de tipos + build de produção em /dist
npm run preview    # serve o build
npm test           # testes (Vitest + Testing Library)
```

## Estrutura
```
src/
  assets/       imagens exportadas do Figma (otimizadas)
  components/   Header, Hero, Categories, Showcase, ProductCard, ProductModal,
                PartnerBanners, Brands, Newsletter, Footer, Carousel (reutilizável), Logo
  hooks/        useProducts (estado de loading/erro)
  services/     productsService (fetch do JSON)
  types/        interfaces TypeScript
  utils/        formatação de preço
  styles/       _variables.scss (tokens) e global.scss
```

## Decisões
- Fontes (Poppins, Work Sans, Outfit) via `@fontsource` e ícones via **Flaticon UIcons** (`@flaticon/flaticon-uicons`, uso gratuito com atribuição: ícones por Flaticon / UIcons) — tudo instalado pelo `npm install`, sem CDN.
- Se a API da Econverse falhar (CORS/rede), `productsService` usa uma cópia local do JSON (`src/data/produtos.json`) e as fotos têm fallback local, então a vitrine nunca fica vazia.
- Medidas baseadas no layout: container de 1280 px, cards de 304 px, modal de 768×299 px.
- HTML semântico (`main`, `section`, `article`, `ul/li`, `h1–h3`), `meta description`/Open Graph e `lang="pt-BR"`.
- Modal acessível: `role="dialog"`, `aria-modal`, fecha com ESC/clique fora/botão, devolve o foco.
- Sem bibliotecas de UI; estilos em Sass com tokens do Figma (cores, fontes Poppins/Work Sans/Outfit) em `_variables.scss`.
- Layout responsivo; o `Carousel` é reutilizado em categorias, vitrines e marcas.
- O JSON não traz preço antigo; o preço riscado é calculado (+7%) apenas para reproduzir o layout.
