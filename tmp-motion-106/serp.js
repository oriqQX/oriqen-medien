/* [oq_demo type="serp"] · Breite wird wie in der Ergebnisliste gemessen (Arial 20 px Titel, 14 px Text). Betriebe erfunden. */
document.querySelectorAll('[data-oq-demo="serp"]').forEach(el => {
  const q = s => el.querySelector(`[data-oq="${s}"]`);
  const serp = el.querySelector('.oq-serp'), selbst = el.querySelector('.oq-serp__selbst');
  const it = el.querySelector('#oq-serp-titel'), ix = el.querySelector('#oq-serp-text');
  const knoepfe = el.querySelectorAll('[data-oq-modus]'), checks = el.querySelectorAll('[data-oq-check]');
  const BETRIEBE = {
    tischlerei: {
      such: 'tischler paderborn', domain: 'tischlerei-eichenwerk.de', name: 'Tischlerei Eichenwerk', ini: 'TE', slug: 'leistungen', ort: 'Paderborn',
      ohneUrl: 'index.php?id=3', ohneTitel: 'Startseite',
      ohneText: 'Herzlich Willkommen auf unserer Homepage! Wir freuen uns über Ihren Besuch. Hier finden Sie alle Informationen rund um unser Unternehmen und unser umfangreiches …',
      titel: 'Tischler in Paderborn: Möbel nach Maß, Küchen, Innenausbau',
      text: 'Möbel und Küchen nach Maß aus unserer Werkstatt. Beratung vor Ort im Raum Paderborn, Delbrück und Salzkotten. Jetzt Termin anfragen.'
    },
    physio: {
      such: 'physiotherapie paderborn', domain: 'physio-am-lindenpark.de', name: 'Physio am Lindenpark', ini: 'PL', slug: 'behandlungen', ort: 'Paderborn',
      ohneUrl: '?page_id=12', ohneTitel: 'Home',
      ohneText: 'Willkommen! Wir sind ein junges, dynamisches Team und freuen uns, Sie in unseren hellen Räumen begrüßen zu dürfen. Öffnungszeiten: Mo–Fr …',
      titel: 'Physiotherapie in Paderborn: Termine auch kurzfristig',
      text: 'Krankengymnastik, manuelle Therapie und Hausbesuche. Barrierefreie Praxis, gesetzlich und privat. Jetzt Termin vereinbaren.'
    },
    steuer: {
      such: 'steuerberater paderborn', domain: 'kanzlei-weidenfeld.de', name: 'Kanzlei Weidenfeld', ini: 'KW', slug: 'leistungen', ort: 'Paderborn',
      ohneUrl: 'cms/index.php/de/start', ohneTitel: 'Kanzlei Weidenfeld - Willkommen - Startseite - Home',
      ohneText: 'Steuerberatung Steuerberater Steuerkanzlei Lohnbuchhaltung Finanzbuchhaltung Jahresabschluss Erbschaftsteuer Existenzgründung Paderborn Steuer …',
      titel: 'Steuerberater in Paderborn: für Selbstständige und Familien',
      text: 'Steuererklärung, Lohn und Buchhaltung, Existenzgründung. Verständlich erklärt, Termine auch per Video. Jetzt Erstgespräch anfragen.'
    }
  };
  const TEXTE = {
    ohne: {
      titel: [false, 'Sagt nichts darüber, was es gibt und wo.'],
      adresse: [false, 'Eine Parameter-Adresse statt lesbarer Wörter.'],
      text: [false, 'Kein Nutzen, kein nächster Schritt. Google schneidet den Text ab.'],
      marke: [false, 'Kein Website-Name, kein eigenes Symbol.']
    },
    mit: {
      titel: [true, 'Leistung und Ort stehen vorn, passt in die Breite.'],
      adresse: [true, 'Lesbar und sprechend, zeigt den Bereich der Website.'],
      text: [true, 'Beantwortet die Frage und nennt den nächsten Schritt.'],
      marke: [true, 'Name und eigenes Symbol machen den Eintrag wiedererkennbar.']
    }
  };
  const c = document.createElement('canvas').getContext('2d');
  const breite = (t, px) => { c.font = `${px}px Arial`; return c.measureText(t).width; };
  const kuerzen = (t, px, max) => {
    if (breite(t, px) <= max) return [t, false];
    let lo = 0, hi = t.length;
    while (lo < hi) { const m = (lo + hi + 1) >> 1; breite(t.slice(0, m) + ' …', px) <= max ? lo = m : hi = m - 1; }
    return [t.slice(0, lo).replace(/\s+\S*$/, '') + ' …', true];
  };
  let betrieb = 'tischlerei', modus = 'ohne', eigen = false;
  const b = () => BETRIEBE[betrieb];
  const setzeChecks = werte => checks.forEach(li => {
    const [ok, txt] = werte[li.dataset.oqCheck];
    li.classList.toggle('ist-ok', ok); li.classList.toggle('ist-nein', !ok);
    li.querySelector('span').textContent = txt;
  });
  const fuelle = () => {
    const d = b();
    q('such').textContent = d.such; q('domain').textContent = d.domain; q('domain2').textContent = d.domain; q('domain3').textContent = d.domain;
    q('name').textContent = d.name; q('ini').textContent = d.ini; q('slug').textContent = d.slug; q('ohneurl').textContent = d.ohneUrl;
    q('ohnetitel').textContent = kuerzen(d.ohneTitel, 20, 600)[0]; q('ohnetext').textContent = d.ohneText;
    if (!eigen) { it.value = d.titel; ix.value = d.text; }
  };
  const selbstPruefen = () => {
    const d = b(), t = it.value.trim() || 'Ohne Titel', x = ix.value.trim();
    const [kt, tk] = kuerzen(t, 20, 600), [kx, xk] = kuerzen(x, 14, 1150);
    q('titel').textContent = kt; q('text').textContent = kx;
    const pt = Math.round(breite(t, 20) / 6), px = Math.round(breite(x, 14) / 11.5);
    q('titelinfo').innerHTML = `${[...t].length} Zeichen, etwa ${pt} % der Breite. ` + (tk ? '<span class="zu-lang">Wird abgeschnitten.</span>' : pt < 45 ? 'Hier ist noch Platz für Ort oder Leistung.' : 'Passt.');
    q('textinfo').innerHTML = `${[...x].length} Zeichen, etwa ${px} % von zwei Zeilen. ` + (xk ? '<span class="zu-lang">Das Ende fehlt.</span>' : 'Passt.');
    const ort = t.toLowerCase().includes(d.ort.toLowerCase());
    const schritt = /(jetzt|termin|anfrag|vereinbar|anruf|ansehen|reservier|buchen|kontakt)/i.test(x);
    setzeChecks({
      titel: [!tk && ort, tk ? 'Zu lang: Das Ende wird abgeschnitten.' : ort ? 'Nennt den Ort und passt in die Breite.' : `Der Ort fehlt. Wer „${d.such}“ sucht, will ihn sehen.`],
      adresse: [true, 'Lesbar und sprechend, zeigt den Bereich der Website.'],
      text: [!xk && schritt && x.length > 60, xk ? 'Zu lang: Das Ende mit dem nächsten Schritt fehlt.' : x.length <= 60 ? 'Sehr kurz. Zwei Zeilen dürfen Sie nutzen.' : schritt ? 'Vollständig sichtbar, mit nächstem Schritt.' : 'Es fehlt ein nächster Schritt, etwa „Jetzt Termin anfragen“.'],
      marke: [true, 'Name und eigenes Symbol machen den Eintrag wiedererkennbar.']
    });
  };
  const zeige = m => {
    modus = m; serp.dataset.modus = m;
    knoepfe.forEach(k => k.setAttribute('aria-pressed', String(k.dataset.oqModus === m)));
    selbst.hidden = m !== 'selbst';
    q('zustand').textContent = m === 'ohne' ? 'Ohne Optimierung' : m === 'mit' ? 'Mit Optimierung' : 'Ihr eigener Eintrag';
    if (m === 'selbst') selbstPruefen();
    else { q('titel').textContent = b().titel; q('text').textContent = b().text; setzeChecks(TEXTE[m]); }
  };
  el.querySelectorAll('input[name="oq-serp-betrieb"]').forEach(r => r.addEventListener('change', () => { betrieb = r.value; eigen = false; fuelle(); zeige(modus); }));
  knoepfe.forEach(k => k.addEventListener('click', () => zeige(k.dataset.oqModus)));
  [it, ix].forEach(f => f.addEventListener('input', () => { eigen = true; selbstPruefen(); }));
  fuelle(); zeige('ohne');
});
