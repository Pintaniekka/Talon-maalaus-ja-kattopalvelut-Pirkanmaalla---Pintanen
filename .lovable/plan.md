## Ongelma
Referenssit-sivulla osa thumbnail-kuvista jää tyhjäksi tietyillä ikkunaleveyksillä (n. 700–900 px). Vain pikkutarra "2 kuvaa" ja overlay-teksti näkyvät. Lightbox toimii, koska se lataa täysikokoisen kuvan.

## Syy
- `Referenssit.tsx`:n sisäinen `CompositeThumbnail` käyttää suoraa `<img>`-elementtiä **ilman onError-fallbackia** (toisin kuin yleinen `ResponsiveSupabaseImage`, johon edellisellä kierroksella lisättiin fallback).
- `sizes="(max-width: 768px) 100vw, 33vw"` antaa selaimelle väärän vihjeen kompositin puolikkaalle ruudulle, jolloin selain saattaa valita variantin joka epäonnistuu välimuistissa eikä koskaan korvaudu.
- Sama puute koskee Lightboxin pää- ja pikkukuvia.

## Muutokset

### `src/pages/Referenssit.tsx`
1. **`CompositeThumbnail`**: korvaa sisempi `<img>` `ResponsiveSupabaseImage`-komponentilla (saa onError-fallbackin 1500w → 1200w). Korjaa `sizes` puolikasta ruutua varten: `(min-width: 1024px) 17vw, (min-width: 640px) 25vw, 50vw`. Lisää `bg-muted/40` puolikkaaseen säiliöön kosmeettiseksi varmistukseksi.
2. **Yksittäisen gallerian kortin `sizes`**: korjaa rivin 375 vihje vastaamaan todellista ruudukkoa (sm: 2 saraketta, lg: 3 saraketta): `(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw`.
3. **Lightbox-kuvat**: tee pieni `LightboxImage`-apukomponentti, jossa on `onError`-fallback 1500w-versioon. Käytä sekä päänäkymässä (rivit 100–111) että pikkukuvissa (rivi 126).

## Lopputulos
- Thumbnailit eivät jää tyhjiksi millään ruutuleveydellä — jos optimoitu variantti epäonnistuu, kuva vaihtuu automaattisesti suurimpaan olemassa olevaan versioon.
- Lightboxin sisältö suojataan samalla tavalla.
- Ei vaikutusta SEO:hon, reitteihin tai sisältöteksteihin.