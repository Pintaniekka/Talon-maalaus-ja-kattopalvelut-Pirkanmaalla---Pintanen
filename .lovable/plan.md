## 1. FAQ JSON-LD Schema — already implemented

`src/components/FAQSection.tsx` already injects dynamic `FAQPage` JSON-LD via `react-helmet-async`, mapping `items` (fed by `src/data/faqData.ts`) into `Question` / `acceptedAnswer` nodes. All 13 pages using `FAQSection` automatically get correct, page-specific schema. **No code changes needed.**

## 2. Fix Open Graph image — `index.html` + `SEO.tsx`

The target image is **1500 × 2000** (portrait WebP, verified via HEAD+PIL).

### `index.html`
Replace the OG/Twitter image URLs and update dimensions to match the actual file:

```html
<meta property="og:image" content="https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/Pictures-1500/tummansininen-puutalo-ulkomaalaus-jalkeen-1500.webp" />
<meta property="og:image:width" content="1500" />
<meta property="og:image:height" content="2000" />
<meta property="og:image:type" content="image/webp" />
...
<meta name="twitter:image" content="https://fndkkgfpsgghvewvoysr.supabase.co/storage/v1/object/public/images/Pictures-1500/tummansininen-puutalo-ulkomaalaus-jalkeen-1500.webp" />
```

(Keep height tag; per OG spec it should match. User wanted width=1500 and height accurate → 2000.)

### `src/components/SEO.tsx`
Add `og:image` + `twitter:image` Helmet tags (plus matching `og:image:width=1500` / `og:image:height=2000`) defaulting to the same Supabase URL, with optional `ogImage` prop for per-page override. This ensures JS-executing crawlers (Googlebot) see the correct image on every route; static `index.html` covers non-JS social previewers (LinkedIn, Slack, Facebook).

### Note on aspect ratio
The image is portrait (3:4). Facebook/LinkedIn previews are optimized for 1.91:1 landscape (e.g., 1200×630) and will crop the top/bottom of a portrait image. Flagging this for awareness — the user explicitly requested this URL, so we keep it. If preview cropping becomes an issue later, a 1200×630 landscape variant would render better.