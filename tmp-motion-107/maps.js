/* [oq_demo type="maps"] · Spielmodell: Relevanz, Entfernung, Bekanntheit. Gewichtung ist eine eigene Annahme, Betriebe erfunden. */
document.querySelectorAll('[data-oq-demo="maps"]').forEach(el => {
  const q = s => el.querySelector(`[data-oq="${s}"]`), ns = 'http://www.w3.org/2000/svg';
  const de = n => n.toFixed(1).replace('.', ',');
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const ORTE = { zentrum: [.5, .5], nord: [.32, .2], ost: [.84, .4] };
  const BRANCHEN = {
    heizung: { such: 'heizungsbauer in der nähe', kat: 'Heizungsbau', ich: 'Wärmetechnik Lindner', ini: 'WL', andere: ['Haustechnik Becker', 'Sanitär Ostfeld', 'Heizung & Bad Kramer'] },
    physio: { such: 'physiotherapie in der nähe', kat: 'Physiotherapie', ich: 'Physio am Lindenpark', ini: 'PL', andere: ['Praxis Bewegungsraum', 'Physio Nordstadt', 'Therapiezentrum Ost'] },
    steuer: { such: 'steuerberater in der nähe', kat: 'Steuerberatung', ich: 'Kanzlei Weidenfeld', ini: 'KW', andere: ['Steuerbüro Hartmann', 'Kanzlei am Markt', 'Beratung Sommer'] }
  };
  const MIT = [{ x: .22, y: .26, n: 140, s: 4.7, kat: true, profil: true }, { x: .8, y: .52, n: 51, s: 4.4, kat: true, profil: true }, { x: .12, y: .86, n: 40, s: 4.5, kat: true, profil: false }];
  const ICH = { x: .56, y: .6 };
  let vorher = null;
  const wert = (name) => el.querySelector(`input[name="${name}"]:checked`).value;
  const rechnen = () => {
    const b = BRANCHEN[wert('oq-maps-branche')], [ox, oy] = ORTE[wert('oq-maps-ort')];
    const ich = { ...ICH, name: b.ich, ini: b.ini, ich: true, n: +q('anzahl').value, s: +q('schnitt').value / 10, kat: q('kategorie').checked, profil: q('profil').checked };
    q('anzahlwert').textContent = ich.n; q('schnittwert').textContent = de(ich.s); q('such').textContent = b.such;
    const alle = [ich, ...MIT.map((m, i) => ({ ...m, name: b.andere[i] }))].map(x => {
      const km = Math.hypot(x.x - ox, (x.y - oy) * .75) * 6;
      const rel = (x.kat ? 1 : .3) * (x.profil ? 1 : .8);
      const ent = 1 / (1 + km / 2.2);
      const bek = Math.max(0, Math.min(1, Math.log10(1 + x.n) / 2.2) * ((x.s - 2.5) / 2.5));
      return { ...x, km, rel, ent, bek, score: rel * (.5 * ent + .35 * bek + .15 * (x.profil ? 1 : .55)) };
    }).sort((a, z) => z.score - a.score);
    const platz = alle.findIndex(x => x.ich) + 1;
    q('liste').innerHTML = alle.slice(0, 3).map(x => `<li${x.ich ? ' class="ist-ich"' : ''}><b>${esc(x.name)}</b><small><span class="oq-maps__sterne">${de(x.s)} ★</span> (${x.n}) · ${b.kat} · ${de(x.km)} km</small><span class="oq-maps__aktionen"><i>Anrufen</i><i>Route</i></span></li>`).join('');
    q('rest').textContent = platz > 3 ? `${b.ich} steht auf Platz ${platz} und erscheint erst unter „Weitere Orte“.` : '';
    // Karte
    const g = q('pins'); g.innerHTML = '';
    alle.slice().reverse().forEach(x => {
      const i = alle.indexOf(x), sichtbar = i < 3, cx = x.x * 400, cy = x.y * 300;
      const grp = document.createElementNS(ns, 'g'); grp.setAttribute('class', 'oq-maps__pin' + (x.ich ? ' ist-ich' : '') + (sichtbar ? ' ist-sichtbar' : ''));
      grp.innerHTML = `<path d="M${cx} ${cy}c-9-12-14-19-14-26a14 14 0 0 1 28 0c0 7-5 14-14 26z"/><text x="${cx}" y="${cy - 22}" text-anchor="middle">${x.ich ? x.ini : sichtbar ? i + 1 : ''}</text>`;
      g.append(grp);
    });
    const p = q('person'); p.querySelectorAll('circle').forEach(c => { c.setAttribute('cx', ox * 400); c.setAttribute('cy', oy * 300); });
    q('radius').setAttribute('cx', ox * 400); q('radius').setAttribute('cy', oy * 300);
    const mich = alle.find(x => x.ich);
    q('f-rel').style.width = Math.round(mich.rel * 100) + '%'; q('f-ent').style.width = Math.round(mich.ent * 100) + '%'; q('f-bek').style.width = Math.round(mich.bek * 100) + '%';
    // Erklärung
    let warum = '';
    if (!ich.kat) warum = 'Ohne passende Hauptkategorie hält Google den Betrieb für die Suche kaum relevant, egal wie gut die Bewertungen sind.';
    else if (vorher && vorher.ort !== wert('oq-maps-ort')) warum = 'Nur der Standort der suchenden Person hat sich geändert, und schon verschiebt sich die Reihenfolge. Entfernung können Sie nicht beeinflussen.';
    else if (ich.n < 20) warum = 'Wenige Bewertungen bremsen die Bekanntheit. Mehr echte Bewertungen sind der Hebel, den Sie selbst in der Hand haben.';
    else if (!ich.profil) warum = 'Ein gepflegtes Profil mit Fotos, Öffnungszeiten und Beiträgen hebt die Relevanz noch einmal an.';
    else warum = 'Kategorie, Profil und Bewertungen stimmen. Den Rest entscheidet die Entfernung zur suchenden Person.';
    q('status').textContent = (platz <= 3 ? `${b.ich} steht auf Platz ${platz} der drei sichtbaren Einträge. ` : `${b.ich} ist nicht unter den drei sichtbaren Einträgen. `) + warum;
    vorher = { ort: wert('oq-maps-ort') };
  };
  el.addEventListener('input', rechnen); el.addEventListener('change', rechnen); rechnen();
});
