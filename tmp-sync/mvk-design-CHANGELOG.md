# Changelog

## 0.9.0 (15.11.2026)
- Duschform-Werkzeug `[mvk_dusche form="…"]`: Schema als SVG mit roten Aufmaß-Linien, Glas, Wand, Duschfläche und Schwenkbereich. Elf Formen: nische, doppelfluegel, nische-oberteil (Ansicht von vorn), eck-nische, eckdusche, fuenfeck, fuenfeck-gross, walkin, u-dusche, badewanne, nische-schiebe. Im Reiter-Viewer mit Klasse `mvk-tool--dusche` heißt die Reiterleiste „Duschform wählen“. Vorlage „MVK Werkzeug Duschform“.
- Brücke `mvk-bridge`: eigenes Foto mit Stufenkante, Kicker (`mvk-bridge__k`), ein Satz (`mvk-bridge__t`), Link (`mvk-bridge__go`); die rote Bemaßungslinie läuft aus der Seite hinaus und zeichnet sich beim Einblenden. Varianten `mvk-bridge--links` (gespiegelt) und `mvk-bridge-duo` (zwei Wege nebeneinander, Linien nach außen). Vorlage „MVK Brücke zum Nachbar-Segment“.
- Bühne als Triptychon `mvk-stage--tri`: `mvk-stage__img` als Gruppe mit drei Bildern, mittleres Bild mit Stufenkante.
- Kataloge `erkelenz-duschen` (63 Glasduschen, Filter Türsystem, Einbausituation, Motiv, Glasart, Beschlagfarbe), `erkelenz-veredelung` (69 Motive nach Verfahren und Element), `erkelenz-programm` (16 Duschmodelle ED100 bis ED1400 und 11 Produktlinien, Glasfinder mit drei Fragen). Katalog-Feld `daten_label` für die Überschrift der Datenzeilen.
- Medien: Fällt die PNG-Übergabe an GD aus (ImageMagick-Policy sperrt `png32`, Strato seit 15.11.2026), schreibt Imagick das WebP. Qualitätstest ohne Pseudo-Bildformat. `reconvert` nimmt mit `src_url` eine bessere Fassung direkt aus oriqen-medien und behält Name und Adresse des Anhangs.

## 0.8.2 (15.11.2026)
- `POST /media/meta` liest auf Wunsch ein Manifest aus oriqen-medien (`manifest`, `offset`, `limit` bis 400) und antwortet mit `kurz: true` nur mit Zählern und Fehlern. Für Massenläufe wie die Alt-Texte mit Ortsbezug (3.142 Bilder am 15.11.2026). Alte Werte weiter in Option `mvkd_media_meta_backup`.

## 0.8.1 (09.11.2026)
- Galerie-Variante `mvk-gallery--z`: nach dem Startblock Reihen mit Doppelbild links, dann rechts (Z-Rhythmus), mobil wie gewohnt zweispaltig.
- Küchenseite: Nolte-Galerie von 5 auf 11 Küchen erweitert (zwei Reihen im Z-Rhythmus), Button „Mehr über Nolte Küchen“ wie bei Ballerina.

## 0.8.0 (08.11.2026)
- NEFF-Silo als Entwurf: Hub /kuechen-kuechenplanung/neff-einbaugeraete/ (Umbau von 1931) und fünf Themenseiten (Backöfen und Dampfgarer, Kochfelder und Dunstabzug, Geschirrspüler und Kühlgeräte, NEFF Collection, Küchenideen), Leiste „NEFF-Welt“ wie bei Ballerina und Nolte.
- Sechs neue Kataloge: neff-geraete (68 Geräte, Karten mit Gerätefinder, Filter Geräteart, Werteklasse, Ausstattung, Breite), neff-backen, neff-kochen, neff-spuelen, neff-design, neff-kuechenideen.
- Miele-Seite neu aufgebaut ohne Herstellerbilder, Hinweis „Katalog in Entwicklung“ (neue Klasse .mvk-note).
- Küchenseite: Abschnitt Elektrogeräte mit Auszug aus dem NEFF Gerätekatalog, Markenleiste mit Link zu Nolte Küchen.

## 0.7.1 (08.11.2026)
- Nolte-Silo live (Hub 4481, Themenseiten 4483 bis 4487).
- Footer: „Nolte Küchen“ unter Maßküchen & Küchenplanung, nach Ballerina Küchen. Footer auf Deens Freigabe global eingeschaltet (Einstellung footer_global).

## 0.7.0 (08.11.2026)
- Nolte-Silo als Entwurf: Hub /kuechen-kuechenplanung/nolte-kuechen/ und fünf Themenseiten (Küchenfronten, Gestaltung, Innenausstattung, Neuheiten, Wohnideen), Leiste „Nolte-Welt“ und „Weiter in der Nolte-Welt“ wie bei Ballerina.
- Zehn neue Kataloge: nolte-programme (Karten mit Frontfinder), nolte-fronten, nolte-arbeitsplatten, nolte-korpusdekore, nolte-griffe, nolte-mattlackgriffe, nolte-nischen, nolte-ausstattung, nolte-wohnideen, nolte-neuheiten.
- Katalog: Text des Finder-Knopfs je Katalog einstellbar (`finder.knopf`), Standard bleibt „Passende Modelle ansehen“.

## 0.6.6 (08.11.2026)
- Handy: Leiste „Ballerina-Welt“ bricht um statt seitlich zu laufen, Themen-Kacheln kompakter (flacheres Bild, ohne Beschreibung).

## 0.6.5 (08.11.2026)
- Leiste „Ballerina-Welt“ ohne Listenstriche und Unterstreichung, Kacheln auf weißem Grund mit feiner Linie.

## 0.6.4 (08.11.2026)
- Partner-Silo: Leiste „Ballerina-Welt“ unter der Bühne auf Hub und allen Themenseiten (aktuelle Seite rot markiert, mobil seitlich wischbar).
- Abschnitt „Weiter in der Ballerina-Welt“ auf jeder Themenseite: Bild-Kacheln zur Übersicht und zu allen anderen Themen. Kacheln mit verlinktem Bild, Titel und „… ansehen“.

## 0.6.3 (08.11.2026)
- Ballerina-Seite: „Ein Blick in die Fronten“ zeigt 16 ausgewählte Fronten quer durch Farben und Materialien.

## 0.6.2 (08.11.2026)
- Ballerina-Seite (Hub): neuer Abschnitt „Ballerina-Welt“ mit den fünf Themenseiten und einem Blick in die Fronten, Querverweise bei Farben und Auszügen.
- Wohnideen: Multiroom-Bilder nebeneinander, Bild zur LAFER Gewürzbox aus der Schublade.
- Linktexte für Katalog-Auszüge (`auszug_link`) bei Fronten, Gestaltung, Ausstattung und Wohnideen.

## 0.6.1 (08.11.2026)
- Katalog „ballerina-wohnideen“: 96 Wohnideen in neun Räumen als Bildergalerie (ohne Personenbilder).
- Blueprint `ballerina-wohnideen.html`: acht Raumthemen, Multiroom, LAFER by Ballerina-Küchen, Partner, FAQ.
- Vergleichstabellen mit zwei Spalten (`mvk-vergleich--2`) ohne Wisch-Hinweis und ohne feste erste Spalte auf dem Handy. Wisch-Hinweis sonst allgemein formuliert.

## 0.6.0 (08.11.2026)
- Katalog „ballerina-messekuechen“: 132 Messeküchen von 2020/21 bis 2025/26 mit 141 Bildern, Filter nach Saison und Thema, je Karte die Neuheiten der Messeküche.
- Blueprint `ballerina-neuheiten.html`: Neuheiten 2026/27 (Stand ballerina.de 08.11.2026) als Tabelle, Trends je Jahrgang, Archiv, Begriffe, FAQ.
- Chronik mit Titelzeile (`mvk-chronik__t`).

## 0.5.9 (08.11.2026)
- Katalog „ballerina-ausstattung“: 242 Ausstattungsideen als Bildergalerie mit Filtern nach Ort (Unterschrank, Hochschrank, Eckschrank, Spüle und Abfall, Vitrine und Regal, Wohnen und Hauswirtschaft) und Zweck.
- Katalog-Format `foto` (quadratische Bildkacheln, 4/3/2 Spalten, größere Bildgröße), Lightbox-Text je Eintrag (`lb`), Bezeichnung der Vergrößerung je Datensatz (`lb_label`).
- Blueprint `ballerina-innenausstattung.html` für die Themenseite Innenausstattung.
- Korpusfarben: Schreibweise „Soft Perl“ vereinheitlicht.

## 0.5.8 (08.11.2026)
- Musternamen auf schmalen Handys etwas kleiner mit Silbentrennung (graphitschwarz).
- Sprungliste der Bühne auf schmalen Handys einspaltig (keine Silbentrennung mitten im Wort).
- Griffe ohne Gedankenstriche in den Beschreibungen, Rückwände mit Hinweis auf die Maßskala statt „Breite frei planbar“.

## 0.5.7 (08.11.2026)
- Kataloge „ballerina-arbeitsplatten“ (39), „ballerina-korpusfarben“ (46), „ballerina-griffe“ (107) und „ballerina-rueckwaende“ (11) als Musterkataloge mit Filtern.
- Blueprint `ballerina-gestaltung.html` für die Themenseite Gestaltung im Ballerina-Silo.

## 0.5.6 (08.11.2026)
- Import: Option `opt.flach_ok` für Farbmuster, die einfarbig sein dürfen (Korpusfarben).
- Katalog-Formate je Datensatz (`format`: quer, quadrat, band, panorama) für Griffe, Korpusfarben, Arbeitsplatten und Rückwände. Muster mit kurzer Beschreibung (`text`). Muster-Auszüge behalten das Musterraster.
- Kataloge ohne Filter laufen ohne Skriptfehler.

## 0.5.5 (08.11.2026)
- Blueprint anwenden blendet den Seitentitel des Themes aus (`_generate-disable-headline`), damit neue Seiten nur die H1 der Bühne tragen.
- Fakten-Band mit vier Zahlen: Zahlen etwas kleiner und ohne Umbruch (4.100).
- Küchenfronten-Blueprint: FLEXDESIGN mit drei Beispielen.

## 0.5.4 (08.11.2026)
- Katalog „ballerina-fronten“: 662 Ballerina-Fronten als Musterkatalog mit Filtern nach Farbton, Oberfläche und Glanzgrad (Linie 400xx ohne Türbild ausgelassen).
- Blueprint `ballerina-kuechenfronten.html` für die erste Themenseite des Ballerina-Silos.

## 0.5.3 (08.11.2026)
- Bildimport per Manifest: bis 40 Bilder je Aufruf, Kurzantwort `kurz: true` (nur IDs in Manifest-Reihenfolge und Fehler), damit große Kataloge ohne lange Antworten durchlaufen.

## 0.5.2 (08.11.2026)
- Vergleichstabelle ohne Gitterlinien der Core-Tabelle, mobil mit fester erster Spalte und Wisch-Hinweis.
- Fakten-Band mit vier Zahlen mobil als 2 × 2.
- Siegel-Leiste ohne doppelte Listenmarke. Ballerina-Blueprint: DirectLACK-Karte mit Frontdetail.

## 0.5.1 (08.11.2026)
- Katalog „ballerina-modelle“: 63 Modelle mit eigenen Texten, Filtern (Stil, Farbwelt, Griff, Form, Alltag) und 171 Bildern (153 neu importiert, IDs 2100 bis 2252). Stilfinder mit Hinweisen statt Sackgassen, Nachweis und Leertext je Katalog.
- Korpus im Schnitt mit eckigen Nummernmarken und Liste im HTML, mobil lesbar.
- Katalogkarten im Format 3:2, Detailangaben als `mvk-kat__spec` (kein Klassenkonflikt mehr mit „Mehr zeigen“).
- Neue Bausteine der Partnerseite: Rollen (`mvk-roles`), Chronik (`mvk-chronik`), Siegel-Leiste (`mvk-seals`), Bildnachweis-Zeile (`mvk-credit`).
- Blueprint `ballerina-kuechen.html` für die neue Ballerina-Seite.

## 0.5.0 (08.11.2026)
- Neues Modul Katalog: Herstellerkataloge als Datensätze im Plugin (`katalog/*.json`), Shortcode `[mvk_katalog set="…"]`. Text steht im HTML, ohne JavaScript sind alle Einträge sichtbar.
- Vollständiger Katalog: Filter-Chips je Merkmal mit Live-Zählern (UND zwischen Merkmalen, ODER innerhalb), Stilfinder mit drei Fragen und Hinweisen, „Mehr zeigen“ in Zwölferschritten, Bildansicht je Modell, teilbare Filter-Links (`#katalog=stil:landhaus;griff:grifflos`), Schema ItemList. Auszüge mit `auszug`, `ids`, `filter` und `link`.
- Neuer Shortcode `[mvk_korpus]`: Ballerina-Unterschrank im Schnitt mit Maßlinien, Nummernmarken und Liste im HTML.
- Bildimport `/mvk-design/v1/media/import` liest auf Wunsch ein Manifest aus oriqen-medien (`manifest`, `offset`, `limit`).
- Neue Leseroute `/mvk-design/v1/katalog` (Kataloge, Einträge, fehlende Bilder).

## 0.4.7 (08.11.2026)
- Footer: Einsatzgebiet bricht nie mit einem Punkt am Zeilenanfang um (geschütztes Leerzeichen vor dem Trenner).
- Kontaktleiste Desktop blendet aus, solange der Footer im Bild ist (dort stehen dieselben Kontaktwege im roten Panel). Mobil bleibt die Leiste unten.

## 0.4.6 (08.11.2026)
- Neuer Footer „Stufe“ (Konzept 5, Freigabe Deen): rotes Kontaktpanel links (Telefon groß, Öffnungszeiten, Termin, Route, Küche online planen) mit Kerbe oben rechts. Die rote Linie an der Oberkante des grauen Bandes läuft mittig in die Kerbe bis an deren Innenkante. Marke mit Leitsatz, Spalten Leistungen, Magazin, Studio. Einsatzgebiet an einer Bemaßung, Partner und Google 5,0 in einer Zeile, Rechtliches und oriqen-Verweis darunter. Altes Vertrauensband und die Stufenblöcke entfallen.

## 0.4.5 (08.11.2026)
- Footer-Stufenform nach Deens Vorlage: linker Balken doppelt so hoch (bis kurz vor „Glastüren & Glastrennwände“), linke Box ohne Obergrenze bis kurz vor das Logo. Rechte Form um 180 Grad gedreht: Balken (2,5-fach) auf Höhe der Öffnungszeiten vom rechten Rand bis an den Text, Box hängt darunter fast so hoch wie links. Überlauf jetzt am ganzen Footer abgeschnitten.
- Küchen-Blueprint: G-Küche mit gekennzeichneter Visualisierung (2095), Ballerina-Korpus „61 cm statt bisher 55,5 cm“.

## 0.4.4 (07.11.2026)
- Überschriften: lange Titel tragen zwei rote Blickanker (Schlüsselwort vorn, Nutzen hinten), kurze einen. Auch Abschnitts-H3 wie „Inspiration aus dem Ballerina-Programm“.
- Footer: Stufenform deutlich größer. Links Box im Seitenrand von Logo-Oberkante bis Balkenunterkante plus breiter Balken bis zum Spaltenende, rechts gespiegelt, kleiner und kürzer am Fuß der Studio-Spalte. Endstrich als Maßlinie. oriqen-Verweis ohne eigenes Band im selben Hellgrau wie der Footer.
- Bildband: Zielpunkt-Callouts (`mvk-pt` mit `mvk-x-NN mvk-y-NN`, Linienlänge `mvk-lead-N` in vw, `mvk-to-l` für Etikett links). Bildband mit `mvk-strip--pt` zeigt das Bild am Desktop ungeschnitten in 5:2, damit der Punkt exakt auf dem Objekt liegt. Mobil wie bisher als Etiketten unter dem Bild.
- Küchen-Blueprint: Nolte mit eigenem Magazin-Teaser (H3, Einleitung, Galerie mit fünf Küchen), Ballerina-Galerie mit 15 Küchen, Küchenformen mit Fotos für zweizeilig, U-Küche und Halbinsel.

## 0.4.3 (07.11.2026)
- Copyright der Bestandsseiten nur noch „© Jahr MVK Küchen & Raumdesign“ (Filter `generate_copyright`, Priorität 99). Der oriqen-Verweis steht einmal im neuen Band von oriqen Support 1.0.2. Snippet 5 wirkt damit nicht mehr und kann aus.

## 0.4.2 (07.11.2026)
- Bilder blenden weich ein (Deckkraft und leichter Zoom, 1,1 s) statt per Zuschnitt aufzuploppen, Auslöser etwas früher. Bilder in Reitern ohne zweite Einblendung. Bilder, die beim Start noch laden, blenden nach dem Laden weich ein (nicht Bühne).
- Akzente: Kicker in MVK-Rot, Schlüsselwörter in H2 rot markiert (Core-Textfarbe mit Klasse `mvk-key`, im Builder `[[Wort]]`).
- Footer: Spaltentitel, Leitsatz, Einsatzgebiet und Partner in Rot, Stufenbalken (Box und Balken) von links unter dem Leitsatz und kürzer von rechts unter dem Studio, Endstrich wie eine Maßlinie. oriqen-Verweis auf eigenem weißen Band.

## 0.4.1 (07.11.2026)
- Blueprints: Küchen-Pillar überarbeitet (Vorher-Nachher 3D gegen fertige Küche, Ballerina mit Fakten, Zahlenband und Galerie mit 12 Küchen, Nolte mit Fakten und Galerie, Stilwelten) und neu Küchenausstattung (Hotspot-Bild, drei Reiter-Viewer, Funktionsraster mit Filter, vier Galerien, Zahlenband, FAQ).
- Galerie: Bildunterschrift außerhalb des Rasters, Raster ohne Lücken bei 8, 12 und gerader Bildzahl mobil, Variante `mvk-gallery--row` (eine Reihe), Kachelunterschriften mobil und in Spalten nur am ersten Bild.
- Raster `mvk-grid--tall` (Bilder 4:5), `mvk-grid--funktion` zählt „Lösungen“. Sprungmarken-Liste `mvk-jump`. `mvk-split--solo`. Hotspot-Punkte mobil kleiner.

## 0.4.0 (07.11.2026)
- Bildimport `POST /mvk-design/v1/media/import` (nur aus oriqen-medien, höchstens 20 je Aufruf): WebP q92, lange Kante 2000 px, Zwischengrößen über GD, Alt-Text, Titel, Beschreibung, Quelle in `_mvkd_source`.
- Neue Bausteine: Galerie mit Lightbox (`mvk-gallery`, Einzelbild `mvk-zoom`), Vorher-Nachher-Schieber (`mvk-compare`), Hotspot-Bild (`mvk-hotspots` mit `mvk-x-NN mvk-y-NN`).

## 0.3.2 (07.11.2026)
- GeneratePress ohne theme.json legt in Gruppen `wp-block-group__inner-container` an: Container ohne eigene Box (display: contents), Kind-Selektoren und Skript berücksichtigen ihn.

## 0.3.1 (07.11.2026)
- Seiten-Blueprints: `POST /mvk-design/v1/content/apply` schreibt eine Seite aus `blueprints/pages/` in einen Entwurf (nie in veröffentlichte Seiten), setzt `_mvkd_v2` und GeneratePress „Volle Breite“. Erster Blueprint: Küchen-Pillar v2.

## 0.3.0 (07.11.2026)
- Modul Designsystem: Schriften lokal, Tokens, Bausteine (Bühne, Stufenpanel, Stufenband in drei Varianten, Text-Bild-Split, Zweispalter mit Randnotiz, Bildband mit Callouts, Nutzen-Leiste, Vergleichsraster mit Filter, Reiter-Viewer, Grundriss-Werkzeug, Zeitleiste, Zahlenband, Kundenstimmen, Marken-Leiste, Magazin-Teaser, FAQ, Abschluss), Blockstile für Buttons, 15 Blockvorlagen.
- Globaler Footer und Kontaktleiste aus dem Plugin, vorerst nur auf v2-Seiten.
- FAQPage-Schema aus `mvk-faq` ab drei Fragen.
- Medien: Aktion `purge` für eigene Zwischendateien.

## 0.2.7
- WebP über GD bei fehlerhafter Imagick-Qualität, lange Kante, ICC nach sRGB, keine Rückfallstufe auf q75.
