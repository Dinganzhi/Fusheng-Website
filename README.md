# Fusheng-Website

Welcome to Fusheng Group!

Documentation site for **Fusheng Group**, built with [Astro](https://astro.build)
and [Starlight](https://starlight.astro.build).

## 🚀 Project Structure

```text
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/          # ← 所有文档页面都在这里
│   ├── content.config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory.
Each file is exposed as a route based on its file name.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 👀 Want to learn more?

Check out [Starlight's docs](https://starlight.astro.build/), read
[the Astro documentation](https://docs.astro.build).
