# VIBÆMAN Portfolios

The source for **Mayor Victor Bayo (VIBÆMAN)**’s portfolio website. It is a static, responsive React application presenting full-stack and smart-contract development work.

## Technology

| Area | Tooling |
|---|---|
| Application | React 18 with TypeScript |
| Build system | Vite 5 |
| Styling | Tailwind CSS 4 and Radix UI |
| Animation | Framer Motion and GSAP |
| Data services | Supabase client |

## Local development

Install the project dependencies, then start the development server:

```bash
bun install
bun run dev
```

The development server prints the local address to open in a browser. To create a production build, run:

```bash
bun run build
```

The build output is written to `dist/` and can be previewed locally with:

```bash
bun run preview
```

## Deployment

This is a Vite single-page application and can be deployed to Vercel. Import the GitHub repository in Vercel, keep the framework preset as **Vite**, use `bun run build` as the build command, and deploy the generated `dist` directory.

## Project structure

| Path | Purpose |
|---|---|
| `src/components/` | Reusable interface components |
| `src/pages/` | Portfolio page sections and routes |
| `src/assets/` | Portfolio images and project artwork |
| `src/lib/` | Shared utilities and integrations |
| `src/integrations/` | Third-party client configuration |

## Quality checks

Before publishing updates, run:

```bash
bun run lint
bun run build
```
