

# Puhdistuskortin taustakuva

## Muutos

Muokataan etusivun "Tarvitseeko kattosi vain puhdistuksen?" -kortti niin, että taustalla nakyy kuva puhdistetusta katosta. Teksti sailyy luettavana tumman overlayn paalla.

## Toteutus

### Tiedosto: `src/components/Services.tsx`

- Tuodaan `getStorageUrl` ja haetaan sama puhdistuskuva kuin puhdistussivulla: `Muut_referenssit/Puhdistuksen jalkeen.webp`
- Korvataan nykyinen yksinkertainen kortti (rivit 94-105) taustakuvallisella versiolla:
  - Kortin taustalle `background-image` kuva `cover`-asetuksella
  - Tumma gradient-overlay (esim. `bg-gradient-to-r from-black/70 to-black/40`) jotta valkoinen teksti erottuu
  - Teksti muutetaan valkoiseksi (`text-white`)
  - Droplets-ikoni saa valkoisen/vaalean taustan
  - Kortin korkeus hieman suuremmaksi (~py-8) jotta kuva nakyy paremmin
  - Hover-efekti sailyy (esim. lievasti tummenee tai skaalautuu)
  - `rounded-2xl overflow-hidden` pyoristetyt kulmat

### Visuaalinen tulos
Kortti nayttaa premium-bannerilta jossa kaunis kuva puhdistetusta katosta nakyy taustalla, ja teksti + nuoli-ikoni erottuvat selkeasti paalla.

## Tekniset yksityiskohdat

```tsx
const cleaningImage = getStorageUrl("Muut_referenssit/Puhdistuksen jalkeen.webp");

// Kortin Link-elementti:
<Link to="/kattopalvelut/puhdistus"
  className="block rounded-2xl overflow-hidden relative group"
  style={{ backgroundImage: `url(${cleaningImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 group-hover:from-black/75 transition-all duration-300" />
  {/* Content */}
  <div className="relative flex items-center gap-4 p-6 md:p-8">
    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm ...">
      <Droplets className="w-6 h-6 text-white" />
    </div>
    <div className="flex-1">
      <h4 className="font-bold text-white ...">Tarvitseeko kattosi vain puhdistuksen?</h4>
      <p className="text-white/80 text-sm">...</p>
    </div>
    <ArrowRight className="w-5 h-5 text-white ..." />
  </div>
</Link>
```

## Muokattavat tiedostot
- `src/components/Services.tsx`

