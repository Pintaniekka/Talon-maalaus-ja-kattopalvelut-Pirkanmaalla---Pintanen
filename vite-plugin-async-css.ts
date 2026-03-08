import type { Plugin } from 'vite';

/**
 * Vite plugin that converts Vite-injected CSS <link> tags to async-loading
 * pattern using media="print" onload trick, while adding a <noscript> fallback.
 * Only applies during production build.
 */
export default function asyncCss(): Plugin {
  return {
    name: 'vite-plugin-async-css',
    enforce: 'post',
    transformIndexHtml(html) {
      // Match Vite-injected CSS links (they reference /assets/*.css)
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        (_match, href) =>
          `<link rel="stylesheet" crossorigin href="${href}" media="print" onload="this.media='all'">\n    <noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`
      );
    },
  };
}
