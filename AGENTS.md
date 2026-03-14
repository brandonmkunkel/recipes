# Style Guide

- Run `yarn format` to auto-format the entire repo
- Run `yarn lint` to lint the entire repo.

# Changing the structure of content types

- Treat each top-level folder in recipes in `/content` as a distinct data type (recipe, blogs, etc)
- Update all content of a specific type if you need to restructure
- Update the appropriate template for that content type in `/templates/$TEMPLATE.md`, `$TEMPLATE` should match the folder name in `content/$TEMPLATE`

# Astro

## Astro Quick Reference

- Use `yarn dev` to start the local dev server.
- Use `yarn build` to create a production build in `dist/` (static).
- Use `yarn preview` to serve the production build locally (static or Node server).
- Fetch **LLM-optimized** docs at https://docs.astro.build/llms.txt.
- Fetch **Full docs** at https://docs.astro.build/ (primary source, use when llms.txt lacks info).

## Working with Astro

- Use `yarn dev` and `yarn preview` in the background to prevent hanging your entire session, and use `&` to run them in the background. Use `--port RANDOM_NUMBER --strictPort` to avoid port conflicts. Cleanup old servers when you're done.
- Use `yarn dev` and `yarn preview` as web servers for Astro project. They are reliable. Don't use other web servers for testing.
