## Overview
Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 site for Descro, a handmade crochet bag brand. Simple product/portfolio site with inquire-to-order flow, not full e-commerce.

## Completed
- 2026-08-14: Initial v0 scaffold (commit 2183f80: starting)
- 2026-08-14: Technical cleanup and image optimization (commit 18e4e73): converted images to WebP, removed unused dependencies, fixed TypeScript errors
- 2026-08-14: Product data centralized in lib/products.ts with Product type and sample data (4 bags: Ivory Tote, Blush Carry, Sage Bucket, Cocoa Mini)
- 2026-08-14: Product detail pages at /shop/[slug] with static generation (commit 38da1ca: Add product pages and quick view)
- 2026-08-14: Quick View modal added using React Context (components/quick-view-modal.tsx, lib/product-modal-context.tsx)
- 2026-08-14: Global SiteHeader extracted (components/site-header.tsx) and rendered in app/layout.tsx
- 2026-08-14: Fixed header positioning and contrast bug: removed absolute positioning, made sticky, changed text colors to text-foreground for visibility on all pages
- 2026-08-14: Fixed Quick View modal to close on navigation: added onClick={closeModal} to "View Full Product" link
- 2026-08-14: Fixed "inquire about this piece" button to link to /#contact instead of dead link, using Next.js Link component
- 2026-08-14: Fixed gallery layout in product pages: added missing 'grid' class to image container
- 2026-08-14: Cleanup: removed backup file app/shop/[slug]/page.tsx.backup, added *.tsbuildinfo to .gitignore, removed tsconfig.tsbuildinfo from git tracking
- 2026-08-14: Fixed nav links to use absolute paths with leading slash (e.g., /#collection) for cross-page scrolling
- 2026-08-19: Updated Product type to support real bag designs: added category, sizes array with priceEUR, customization, removed flat price; added getStartingPrice helper; replaced 4 placeholder products with 5 real designs (Amara, Sirena, Mirae, Divina, Cleo) with real size/pricing data; updated FeaturedBags, QuickViewModal, and product page to display sizes/pricing correctly
- 2026-08-19: Fixed customization note styling on product page and quick view modal (used text-sm text-foreground/70); corrected material copy site-wide from cotton to recycled t-shirt yarn in lib/products.ts, components/faq.tsx, components/process.tsx, components/about.tsx
- 2026-08-19: Simplified materials copy (removed redundant "handmade"); replaced stacked size/price list with interactive size picker (new components/product-pricing.tsx) used on product page and Quick View modal; added "Sizes available" line in product page Details list

## Known issues / not yet done
- Mobile navigation only exposes a "Shop" button; no way to reach Gallery/About/Process/Contact on mobile without scrolling to the footer or using the desktop nav (which is hidden below md breakpoint).
- Contact form in components/contact.tsx is client-side only and does not actually send form data anywhere.
- Catalog currently has 5 real bag designs (Amara, Sirena, Mirae, Divina, Cleo) but images are still temporarily reused from the old placeholder set pending real photo selection from public/media/.
- Descriptions for all products are generic placeholders pending photo-based rewrite.
- Dimensions and per-design materials still need to be added (currently using placeholders).
- next.config.mjs still has:
  - typescript.ignoreBuildErrors: true ( TypeScript errors are ignored during build)
  - images.unoptimized: true ( Next.js image optimization is disabled, serving original images)

## How to use this file
Read this file first before making changes to understand the current state of the project.
After completing a task, update the "Completed" section with a new dated entry (oldest to newest) in plain language.
Move resolved items from "Known issues / not yet done" to "Completed" as they are fixed.
Keep entries brief and factual rather than descriptive.