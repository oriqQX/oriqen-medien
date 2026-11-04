/* [oq_demo type="reviews"] · erfundene Bewertungen, gute und schwache Antworten im Vergleich */
document.querySelectorAll('[data-oq-demo="reviews"]').forEach(el => {
  const q = s => el.querySelector(`[data-oq="${s}"]`), knoepfe = el.querySelectorAll('[data-oq-antwort]');
  const FAELLE = {
    lob: {
      autor: 'S. Wagner', ini: 'SW', sterne: 5, text: 'Schnell, sauber, freundlich. Die neue Heizung lief am selben Tag, und die Baustelle war besenrein.',
      schwach: 'Danke!',
      gut: 'Vielen Dank, Frau Wagner. Schön, dass die Heizung so schnell lief und alles sauber geblieben ist. Das geben wir gern an Thomas und Jens weiter, die bei Ihnen waren.',
      punkte: { schwach: [[false, 'Ein Wort, kein Bezug zum Auftrag'], [false, 'Spätere Leser erfahren nichts über den Betrieb']], gut: [[true, 'Persönlich, mit Namen'], [true, 'Greift auf, was gelobt wurde'], [true, 'Zeigt die Menschen hinter dem Betrieb']] }
    },
    kritik: {
      autor: 'M. Krüger', ini: 'MK', sterne: 2, text: 'Termin wurde zweimal verschoben, ohne dass sich jemand gemeldet hat. Die Arbeit selbst war in Ordnung.',
      schwach: 'Wir hatten in dieser Zeit sehr viele Aufträge und Krankheitsfälle. Dafür können wir nichts. Andere Kunden sind sehr zufrieden.',
      gut: 'Guten Tag Herr Krüger, danke für die offenen Worte. Dass wir uns bei der zweiten Verschiebung nicht gemeldet haben, war unser Fehler. Wir haben die Terminplanung umgestellt, damit Kunden künftig rechtzeitig informiert werden. Gern sprechen wir persönlich: 05251 000 000.',
      punkte: { schwach: [[false, 'Rechtfertigt sich, statt zuzuhören'], [false, 'Schiebt die Verantwortung weg'], [false, 'Wirkt auf spätere Leser abwehrend']], gut: [[true, 'Bedankt sich und nimmt die Kritik an'], [true, 'Nennt, was sich ändert'], [true, 'Bietet einen direkten Weg zum Gespräch']] }
    },
    unfair: {
      autor: 'Nutzer 4711', ini: 'N', sterne: 1, text: 'Totale Abzocke, nie wieder!!!',
      schwach: 'Sie waren nie Kunde bei uns. Das ist eine Lüge, wir prüfen rechtliche Schritte!',
      gut: 'Guten Tag, wir finden zu Ihrer Bewertung keinen Auftrag und können sie deshalb nicht zuordnen. Wenn Sie bei uns Kunde waren, melden Sie sich bitte unter 05251 000 000, dann klären wir das gemeinsam.',
      punkte: { schwach: [[false, 'Greift an, statt sachlich zu bleiben'], [false, 'Spätere Leser sehen nur den Streit']], gut: [[true, 'Ruhig und sachlich'], [true, 'Zeigt, dass kein Kundenkontakt erkennbar ist'], [true, 'Bietet trotzdem Klärung an'], [true, 'Parallel: Meldung bei Google, Entscheidung liegt dort']] }
    }
  };
  let fall = 'kritik', art = 'gut';
  const zeigen = () => {
    const f = FAELLE[fall];
    q('autor').textContent = f.autor; q('ini').textContent = f.ini; q('text').textContent = f.text;
    q('sterne').textContent = '★'.repeat(f.sterne) + '☆'.repeat(5 - f.sterne); q('sterne').setAttribute('aria-label', f.sterne + ' von 5 Sternen');
    q('antwort').textContent = f[art];
    el.querySelector('.oq-rev').dataset.art = art;
    q('punkte').innerHTML = f.punkte[art].map(([ok, t]) => `<li class="${ok ? 'ist-ok' : 'ist-nein'}">${t}</li>`).join('');
    knoepfe.forEach(k => k.setAttribute('aria-pressed', String(k.dataset.oqAntwort === art)));
  };
  el.querySelectorAll('input[name="oq-rev-fall"]').forEach(r => r.addEventListener('change', () => { fall = r.value; zeigen(); }));
  knoepfe.forEach(k => k.addEventListener('click', () => { art = k.dataset.oqAntwort; zeigen(); }));
  zeigen();
});
