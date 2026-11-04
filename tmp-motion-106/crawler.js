/* [oq_demo type="crawler"] · Modell: sammeln, ordnen, ausspielen. Startet einmal, sobald es sichtbar ist. */
document.querySelectorAll('[data-oq-demo="crawler"]').forEach(el => {
  const q = s => el.querySelector(`[data-oq="${s}"]`);
  const box = el.querySelector('.oq-crawler'), start = el.querySelector('.oq-demo__start'), sitemap = q('sitemap'), status = q('status');
  const alle = [...el.querySelectorAll('.oq-crawler__baum li')];
  const ruhig = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DAUER = 4200;
  let raf = 0;
  const erreichbar = () => alle.filter(li => li.dataset.art !== 'waise' || sitemap.checked);
  const indexierbar = li => li.dataset.art !== 'noindex';
  const setze = p => {
    const liste = erreichbar(), n = liste.length;
    const gefunden = Math.round(Math.min(1, p / .5) * n);
    const idxListe = liste.filter(indexierbar), m = idxListe.length;
    const imIndex = Math.round(Math.max(0, Math.min(1, (p - .5) / .4)) * m);
    alle.forEach(li => {
      const i = liste.indexOf(li), st = li.querySelector('.oq-crawler__status');
      const gelesen = i > -1 && i < gefunden, ix = idxListe.indexOf(li);
      const drin = ix > -1 && ix < imIndex;
      li.classList.toggle('ist-gefunden', gelesen && !drin);
      li.classList.toggle('ist-index', drin);
      li.classList.toggle('ist-aktiv', p < 1 && ((p < .5 && i > -1 && i === gefunden - 1) || (p >= .5 && ix > -1 && ix === imIndex - 1)));
      li.classList.toggle('ist-aus', p >= .9 && i === -1);
      st.textContent = drin ? 'im Index' : gelesen ? (li.dataset.art === 'noindex' && p >= .9 ? 'ausgeschlossen' : 'gelesen') : (i === -1 && p >= .9 ? 'nicht gefunden' : 'unbekannt');
    });
    q('gefunden').textContent = gefunden; q('index').textContent = imIndex; q('treffer').textContent = p >= .95 ? imIndex : 0;
    el.querySelectorAll('.oq-crawler__stufe').forEach(s => s.classList.toggle('ist-an', (s.dataset.stufe === '1' && p > .02) || (s.dataset.stufe === '2' && p >= .5) || (s.dataset.stufe === '3' && p >= .95)));
    box.dataset.p = p >= 1 ? 'fertig' : 'laeuft';
  };
  const fazit = () => {
    const n = erreichbar().length, m = erreichbar().filter(indexierbar).length;
    status.textContent = sitemap.checked
      ? `${n} von ${alle.length} Adressen gefunden, ${m} im Index. Über die Sitemap kennt Google jetzt auch die Seite, die nirgends verlinkt ist. /danke bleibt bewusst draußen, weil sie mit noindex markiert ist.`
      : `${n} von ${alle.length} Adressen gefunden, ${m} im Index. /aktion-2019 wurde nie gefunden: Keine Seite verlinkt sie, und sie steht in keiner Sitemap. /danke wurde gelesen, bleibt aber wegen noindex bewusst draußen.`;
  };
  const lauf = () => {
    cancelAnimationFrame(raf);
    start.disabled = true; start.firstChild.textContent = 'Crawler läuft … ';
    status.textContent = 'Der Crawler folgt den Links ab der Startseite und liest jede gefundene Seite.';
    if (ruhig) { setze(1); fertig(); return; }
    const t0 = performance.now();
    const tick = t => { const p = Math.min(1, (t - t0) / DAUER); setze(p); p < 1 ? raf = requestAnimationFrame(tick) : fertig(); };
    raf = requestAnimationFrame(tick);
  };
  const fertig = () => { start.disabled = false; start.firstChild.textContent = 'Noch einmal '; fazit(); };
  start.addEventListener('click', lauf);
  sitemap.addEventListener('change', lauf);
  setze(0);
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(e => { if (e[0].isIntersecting) { io.disconnect(); lauf(); } }, { threshold: .45 });
    io.observe(box);
  }
});
