# Recipes

This repo builds a static site of my favorite recipes.

1. Install the Command Line Tools:

```bash
xcode-select --install
```

2. Install Dependencies

```bash
brew install node
brew install pnpm
brew install astro
```

3. Install packages

```bash
pnpm install
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
