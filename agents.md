# Style Guide

- Run pnpm format to auto-format the entire repo.
- Run pnpm lint to lint the entire repo.

# Astro Quick Reference

- Use `astro dev` to start the local dev server with HMR.
- Use `astro build` to create a production build in `dist/` (static or Node server).
- Use `astro preview` to serve the production build locally (static or Node server).
- Fetch **LLM-optimized** docs at https://docs.astro.build/llms.txt.
- Fetch **Full docs** at https://docs.astro.build/ (primary source, use when llms.txt lacks info).

# Working with Astro

- Use `astro dev` and `astro preview` in the background to prevent hanging your entire session, and use `&` to run them in the background. Use `--port RANDOM_NUMBER --strictPort` to avoid port conflicts. Cleanup old servers when you're done.
- Use `astro dev` and `astro preview` as web servers for Astro project. They are reliable. Don't use other web servers for testing.
