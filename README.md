# Portfólio — Reginaldo Correa

Portfólio pessoal de front-end, construído com React + Vite. O projeto é estático, leve e pode ser publicado em qualquer host (GitHub Pages, Vercel, Netlify etc.).

## Stack

- React 18
- Vite 5
- React Icons
- CSS com custom properties (sem framework de UI)
- Google Fonts: Space Grotesk (títulos) e Inter (texto)

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera a pasta dist/
npm run preview  # serve o build de produção
```

## Estrutura

```
src/
├── assets/          imagens usadas no portfólio
├── components/      Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer
├── data.js          textos, projetos, skills e links — edite aqui
├── App.jsx
└── index.css        tokens de cor, tipografia e utilitários
public/              favicon.svg e robots.txt
```

## Editar conteúdo

Tudo que aparece no site está em `src/data.js`:

- `personalInfo`: nome, cargo, localização, e-mail, telefone e redes sociais
- `skills`: tecnologias, ferramentas e certificações
- `projects`: cards com print, descrição, tags, link do código e da demo
- `experience`: linha do tempo

Para adicionar um projeto: coloque a imagem em `src/assets/`, importe no topo de `src/data.js` e inclua um novo objeto em `projects`.

## Publicação

O `vite.config.js` usa `base: './'`, então os caminhos dos assets são relativos. Isso significa que o conteúdo de `dist/` funciona tanto na raiz de um domínio quanto em um caminho como `/port-japa/`.

```bash
npm run build
# publique o conteúdo da pasta dist/
```

## Observações

- Não há formulário falso: o contato usa `mailto:`, telefone e links reais.
- O overlay de scanlines, a fonte pixelada e o código morto das versões antigas foram removidos.
- Respeita `prefers-reduced-motion` e tem estados de foco visíveis para navegação por teclado.
