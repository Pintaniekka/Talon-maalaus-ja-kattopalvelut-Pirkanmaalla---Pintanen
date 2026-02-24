/**
 * Vite plugin: copies dist/index.html into every known SPA route directory
 * so GitHub Pages serves 200 OK instead of 404 + JS redirect.
 */
import fs from "fs";
import path from "path";

// All city slugs that have /alue/:city pages
const allCitySlugs = [
  // Full-service cities
  "tampere","sastamala","hameenkyro","ylojarvi","nokia","forssa","hameenlinna","huittinen",
  // Simple cities (area page only)
  "akaa","ikaalinen","juupajoki","kangasala","kihnio","lempaala","mantta-vilppula",
  "orivesi","parkano","pirkkala","palkane","ruovesi","urjala","valkeakoski","vesilahti","virrat",
];

// Cities that also have /kattopalvelut/pinnoitus/:city, /puhdistus/:city, /talon-maalaus/:city
const fullServiceSlugs = [
  "tampere","sastamala","hameenkyro","ylojarvi","nokia","forssa","hameenlinna","huittinen",
];

function getAllRoutes(): string[] {
  const routes: string[] = [
    "/meista",
    "/kattopalvelut/pinnoitus",
    "/kattopalvelut/puhdistus",
    "/talon-maalaus",
    "/toiminta-alueet",
    "/referenssit",
    "/image-test",
  ];

  for (const slug of allCitySlugs) {
    routes.push(`/alue/${slug}`);
  }

  for (const slug of fullServiceSlugs) {
    routes.push(`/kattopalvelut/pinnoitus/${slug}`);
    routes.push(`/kattopalvelut/puhdistus/${slug}`);
    routes.push(`/talon-maalaus/${slug}`);
  }

  return routes;
}

export default function spaRoutes() {
  return {
    name: "vite-plugin-spa-routes",
    closeBundle() {
      const distDir = path.resolve("dist");
      const indexPath = path.join(distDir, "index.html");

      if (!fs.existsSync(indexPath)) return;

      const html = fs.readFileSync(indexPath, "utf-8");
      const routes = getAllRoutes();

      for (const route of routes) {
        const dir = path.join(distDir, route);
        const file = path.join(dir, "index.html");

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(file, html, "utf-8");
      }

      console.log(`[spa-routes] Generated ${routes.length} route files.`);
    },
  };
}
