import { getStorageUrl } from "@/lib/storage";
import { useState } from "react";

/**
 * Testisivu, joka listaa projektin tärkeimmät kuvat ja näyttää niiden
 * lataustilanteen (vihreä = OK, punainen = virhe).
 *
 * Reitti: /image-test
 */

interface TestImage {
  label: string;
  path: string;
}

const testImages: TestImage[] = [
  // Logo
  { label: "Logo", path: "Pintanen-logo.webp" },
  // Kartta
  { label: "Toimialuekartta", path: "Toiminta-alue-kartta-pirkanmaa-kantahame.png" },
  // Hero-kuvat
  { label: "Etusivu hero", path: "Muut_referenssit/laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp" },
  { label: "Pinnoitus hero", path: "Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-tampere.webp" },
  { label: "Puhdistus hero", path: "Muut_referenssit/katto-jalkeen-mekaaninen-puhdistus-sastamala.webp" },
  { label: "Talon maalaus hero", path: "Muut_referenssit/talon-maalaus-ylojarvi-header.webp" },
  { label: "Toiminta-alueet hero", path: "Muut_referenssit/keltainen-talo-maalaus-jalkeen-hameenlinna.webp" },
  { label: "Referenssit hero", path: "Muut_referenssit/tiilikatto-pesu-hameenlinna.webp" },
  { label: "Meistä hero", path: "Muut_referenssit/talon-maalaus-pensseli-header.webp" },
  // Before/After
  { label: "Katto ennen (Valkeakoski)", path: "Muut_referenssit/punainen-tiilikatto-maalaus-ennen-valkeakoski.webp" },
  { label: "Katto jälkeen (Valkeakoski)", path: "Muut_referenssit/punainen-tiilikatto-maalaus-jalkeen-valkeakoski.webp" },
  { label: "Maalaus ennen (Tampere)", path: "Muut_referenssit/keltainen-talo-maalaus-varinvaihto-ennen-tampere.webp" },
  { label: "Maalaus jälkeen (Tampere)", path: "Muut_referenssit/violetti-talo-maalaus-varinvaihto-jalkeen-tampere.webp" },
  // Galleria
  { label: "Tiilikatto Forssa", path: "Muut_referenssit/tiilikatto-maalattu-forssa.webp" },
  { label: "Tiilikatto Pirkkala", path: "Muut_referenssit/tiilikaton-pinnoitus-tummanharmaa-pirkkala.webp" },
  { label: "Harmaa talo Pirkanmaa", path: "Muut_referenssit/harmaa-talon-maalaus-varinvaihdos-jalkeen-pirkanmaa.webp" },
  { label: "Violetti talo Tampere", path: "Muut_referenssit/violetti-talo-maalaus-varinvaihto-jalkeen-tampere.webp" },
  // Miksi Pintanen
  { label: "Miksi Pintanen", path: "Muut_referenssit/laivaston-sininen-talo-maalaus-jalkeen-hameenkyro.webp" },
  // Ikonit
  { label: "Tiilikatto icon", path: "Icons/Tiilikatto icon.svg" },
  { label: "Katon puhdistus icon", path: "Icons/Katon puhdistus icon.svg" },
  { label: "Maalauspensseli icon", path: "Icons/Maalauspensseli icon.svg" },
];

const ImageRow = ({ img }: { img: TestImage }) => {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const url = getStorageUrl(img.path);

  return (
    <tr className="border-b border-border">
      <td className="p-3 font-medium text-foreground">{img.label}</td>
      <td className="p-3 text-xs text-muted-foreground break-all max-w-xs">{url}</td>
      <td className="p-3">
        <img
          src={url}
          alt={img.label}
          className="h-16 w-24 object-cover rounded"
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("error")}
        />
      </td>
      <td className="p-3 text-center">
        {status === "loading" && <span className="text-muted-foreground">⏳</span>}
        {status === "ok" && <span className="text-green-600 font-bold text-lg">✅</span>}
        {status === "error" && <span className="text-red-600 font-bold text-lg">❌</span>}
      </td>
    </tr>
  );
};

const ImageTest = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-2">Kuvatesti</h1>
        <p className="text-muted-foreground mb-6 text-sm">
          Kaikki kuvat haetaan osoitteesta:{" "}
          <code className="bg-muted px-2 py-0.5 rounded text-xs">
            {getStorageUrl("")}
          </code>
        </p>

        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-3 text-left text-foreground">Nimi</th>
                <th className="p-3 text-left text-foreground">URL</th>
                <th className="p-3 text-left text-foreground">Esikatselu</th>
                <th className="p-3 text-center text-foreground">Tila</th>
              </tr>
            </thead>
            <tbody>
              {testImages.map((img) => (
                <ImageRow key={img.path} img={img} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ImageTest;
