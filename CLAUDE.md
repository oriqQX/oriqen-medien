# oriqen-medien

Öffentlicher Zwischenspeicher für Bilder, die Claude in die Mediathek von oriqen.de importiert. Hier liegt nie etwas dauerhaft.

## Ablauf (eingerichtet und getestet am 04.11.2026)

1. Bild vorbereiten: WebP, sprechender Dateiname nach dem Muster `oriqen-thema-motiv-ort.webp` (Kleinbuchstaben, Bindestriche, Umlaute ausgeschrieben), Breite passend zum Einsatz (Inhaltsbilder bis 1600 px).
2. In dieses Repo committen und auf `main` pushen.
3. Import über Easy MCP `wp_upload_media_from_url` mit
   `https://raw.githubusercontent.com/oriqQX/oriqen-medien/main/<datei>` und gleich im selben Aufruf `filename`, `slug`, `title`, `alt_text`, `caption`, `description` (Regionalanker etwa 70 % Paderborn, 30 % OWL), optional `post_id`.
4. Datei hier sofort wieder löschen (commit und push). Imagify komprimiert in WordPress automatisch.

Quellen: Chat-Anhänge (liegen im Container unter `/mnt/user-data/uploads/`) und Artlist-Generierungen. Bei Artlist zuerst den Download-Link direkt mit `wp_upload_media_from_url` versuchen, nur wenn das scheitert über dieses Repo gehen.

Kundenbilder vor einem Launch nur kurz hier ablegen. Keine vertraulichen Dateien.
