# Style Guide

- Run yarn format to auto-format the entire repo.
- Run yarn lint to lint the entire repo.

# Changing the structure of content types

- Treat each top-level folder in recipes in `/content` as a distinct data type (recipe, blogs, etc)
- Update all content of a specific type if you need to restructure
- Update the appropriate template for that content type in `/templates/$TEMPLATE.md`, `$TEMPLATE` should match the folder name in `content/$TEMPLATE`

# Astro

> Astro is an all-in-one web framework for building websites.

- Astro uses island architecture and server-first design to reduce client-side JavaScript overhead and ship high performance websites.
- Astro’s friendly content-focused features like content collections and built-in Markdown support make it an excellent choice for blogs, marketing, and e-commerce sites amongst others.
- The `.astro` templating syntax provides powerful server rendering in a format that follows HTML standards and will feel very familiar to anyone who has used JSX.
- Astro supports popular UI frameworks like React, Vue, Svelte, Preact, and Solid through official integrations.
- Astro is powered by Vite, comes with a fast development server, bundles your JavaScript and CSS for you, and makes building websites feel fun.

## Astro Quick Reference

- Use `astro dev` to start the local dev server with HMR.
- Use `astro build` to create a production build in `dist/` (static or Node server).
- Use `astro preview` to serve the production build locally (static or Node server).
- Fetch **LLM-optimized** docs at https://docs.astro.build/llms.txt.
- Fetch **Full docs** at https://docs.astro.build/ (primary source, use when llms.txt lacks info).

## Working with Astro

- Use `astro dev` and `astro preview` in the background to prevent hanging your entire session, and use `&` to run them in the background. Use `--port RANDOM_NUMBER --strictPort` to avoid port conflicts. Cleanup old servers when you're done.
- Use `astro dev` and `astro preview` as web servers for Astro project. They are reliable. Don't use other web servers for testing.

## Documentation Sets

- [Abridged documentation](https://docs.astro.build/llms-small.txt): a compact version of the documentation for Astro, with non-essential content removed
- [Complete documentation](https://docs.astro.build/llms-full.txt): the full documentation for Astro
- [API Reference](https://docs.astro.build/_llms-txt/api-reference.txt): terse, structured descriptions of Astro’s APIs
- [How-to Recipes](https://docs.astro.build/_llms-txt/how-to-recipes.txt): guided examples of adding features to an Astro project
- [Build a Blog Tutorial](https://docs.astro.build/_llms-txt/build-a-blog-tutorial.txt): a step-by-step guide to building a basic blog with Astro
- [Deployment Guides](https://docs.astro.build/_llms-txt/deployment-guides.txt): recipes for how to deploy an Astro website to different services
- [CMS Guides](https://docs.astro.build/_llms-txt/cms-guides.txt): recipes for how to use different content management systems in an Astro project
- [Backend Services](https://docs.astro.build/_llms-txt/backend-services.txt): advice on how to integrate backend services like Firebase, Sentry, and Supabase in an Astro project
- [Migration Guides](https://docs.astro.build/_llms-txt/migration-guides.txt): advice on how to migrate a project built with another tool to Astro
- [Additional Guides](https://docs.astro.build/_llms-txt/additional-guides.txt): guides to e-commerce, authentication, testing, and digital asset management in Astro projects

## Notes

- The complete documentation includes all content from the official documentation
- The content is automatically generated from the same source as the official documentation

## Optional

- [The Astro blog](https://astro.build/blog/): the latest news about Astro development
