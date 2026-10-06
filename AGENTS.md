# Architecture rules

- Preserve existing numeric product IDs when adding products so published detail links remain stable.
- Bundle optimized product WebP photos when the asset service fails on the current host so galleries remain visible on self-hosted deployments.
- Bundle optimized homepage banner WebP images when asset delivery fails on the current host so the slideshow remains visible on self-hosted deployments.
- Render the homepage hero as one static picture with optimized breakpoint-specific compositions, without duplicated image layers or slideshow state; this keeps the banner lightweight and preserves glove framing.
- Keep new product entries aligned across the catalog, featured collection, detail pages, and inquiry selector so buyers can discover and inquire about every model.
