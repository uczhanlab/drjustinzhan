/* =====================================================================
   PRESENTATION LOGIC. No content lives here.
   Content comes from js/data.js (window.SITE_DATA).
   ===================================================================== */
(function () {
  'use strict';

  const D = window.SITE_DATA;
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const esc = (v = '') => String(v).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isTodo = url => !url || String(url).includes('#TODO');
  const emptyState = msg => `<p class="text-uc-charcoal/60 italic">${esc(msg)}</p>`;
  const fmtDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('en-US',
    { year: 'numeric', month: 'short', day: 'numeric' });

  const ICONS = {
    scholar:  `<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><path fill="currentColor" d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18V17c0 1.66 3.13 3 7 3s7-1.34 7-3v-3.82L12 17l-7-3.82z"/></svg>`,
    orcid:    `<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#A6CE39"/><text x="12" y="16" font-size="9" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif">iD</text></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" class="h-5 w-5" aria-hidden="true"><rect x="1" y="1" width="22" height="22" rx="3" fill="#0A66C2"/><text x="12" y="17" font-size="11" font-weight="700" text-anchor="middle" fill="#fff" font-family="Arial,sans-serif">in</text></svg>`,
    cincysi:  `<svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>`
  };

  // ---- TAG COLOR MAP ----
  const TAG_COLORS = {
    'Award':   'bg-amber-100 text-amber-800',
    'Grant':   'bg-green-100 text-green-800',
    'Paper':   'bg-blue-100  text-blue-800',
    'Talk':    'bg-purple-100 text-purple-800',
    'Service': 'bg-uc-red/10 text-uc-red',
    'Event':   'bg-sky-100 text-sky-800'
  };
  const tagColor = tag => TAG_COLORS[tag] || 'bg-uc-slate text-uc-charcoal';

  // ---- HEADER ----
  function renderHeader() {
    const el = document.getElementById('site-header');
    if (!el) return;
    const navLinks = D.nav.map(item => {
      const active = item.href === currentPage;
      const cls = active
        ? 'text-white border-b-2 border-uc-red pb-1'
        : 'text-white/75 hover:text-white pb-1 border-b-2 border-transparent transition';
      return `<a href="${esc(item.href)}" class="${cls}" ${active ? 'aria-current="page"' : ''}>${esc(item.label)}</a>`;
    }).join('');

    el.innerHTML = `
      <header class="bg-uc-charcoal text-white">
        <div class="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a href="index.html" class="flex items-center gap-3 leading-tight">
                <img src="${esc(D.person.headshot)}" alt=""
                    class="h-9 w-9 rounded-full object-cover ring-2 ring-white/20 shrink-0"
                    onerror="this.style.display='none'">
                <span class="flex flex-col">
                    <span class="font-serif text-lg font-semibold">${esc(D.person.name)}</span>
                    <span class="text-xs tracking-wide uppercase text-white/65">${esc(D.person.university)}</span>
                </span>
              </a>
          <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium items-center" aria-label="Primary">
  ${navLinks}
  <a href="https://cincysi.si" target="_blank" rel="noopener"
     class="ml-2 rounded-lg bg-uc-red px-4 py-1.5 text-sm font-semibold text-white hover:bg-uc-deep transition-colors">
    CincySI Lab ↗
  </a>
</nav>
        </div>
        <div class="h-1 bg-uc-red"></div>
      </header>`;
  }

  // ---- FOOTER ----
  function renderFooter() {
    const el = document.getElementById('site-footer');
    if (!el) return;
    const linkItems = Object.entries(D.links).map(([key, cfg]) => {
      const todo = isTodo(cfg.url);
      const attrs = todo
        ? 'aria-disabled="true" title="Add this link in js/data.js"'
        : 'target="_blank" rel="noopener noreferrer"';
      return `
        <a href="${todo ? '#' : esc(cfg.url)}" ${attrs}
           class="group flex items-center gap-3 rounded-lg px-3 py-2 text-white/85 hover:bg-white/10 hover:text-white transition">
          <span class="text-uc-red group-hover:text-white">${ICONS[key] || ''}</span>
          <span class="text-sm">${esc(cfg.label)}</span>
        </a>`;
    }).join('');

    el.innerHTML = `
      <footer class="bg-uc-charcoal text-white mt-auto">
        <div class="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid gap-8 md:grid-cols-2">
          <div>
            <p class="font-serif text-lg font-semibold">${esc(D.person.name)}</p>
            <p class="mt-2 text-sm text-white/70">${esc(D.person.department)}<br>${esc(D.person.college)}<br>${esc(D.person.university)}</p>
            <p class="mt-3 text-sm"><a class="text-white/85 hover:text-white underline underline-offset-4" href="mailto:${esc(D.person.email)}">${esc(D.person.email)}</a></p>
          </div>
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest text-white/60 mb-3">Elsewhere online</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1">${linkItems}</div>
          </div>
        </div>
        <div class="border-t border-white/10">
          <p class="max-w-6xl mx-auto px-5 sm:px-8 py-4 text-xs text-white/60">
            © ${new Date().getFullYear()} ${esc(D.person.name)}. All rights reserved.
          </p>
        </div>
      </footer>`;
  }

  // ---- RENDERERS ----
  const RENDER = {

    headshot() {
      const p = D.person;
      return `
        <figure class="bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden sticky top-24">
          <div class="relative aspect-[4/5] bg-gradient-to-br from-uc-charcoal to-uc-deep">
            <span class="absolute inset-0 flex items-center justify-center text-sm text-white/60">Headshot placeholder</span>
            <img src="${esc(p.headshot)}" alt="Portrait of ${esc(p.name)}"
                 class="absolute inset-0 h-full w-full object-cover" onerror="this.remove()">
          </div>
          <figcaption class="p-5 text-sm space-y-1.5">
            <p class="font-semibold text-uc-charcoal">${esc(p.name)}</p>
            <p class="text-uc-charcoal/70 text-xs leading-relaxed">${esc(p.office)}</p>
            <p><a class="text-uc-red hover:underline font-medium" href="mailto:${esc(p.email)}">${esc(p.email)}</a></p>
            <p class="text-uc-charcoal/70">${esc(p.phone)}</p>
          </figcaption>
        </figure>`;
    },

    bio() {
      const p = D.person;
      return `
        <p class="text-sm font-semibold uppercase tracking-widest text-uc-red">${esc(p.chair)}</p>
        <h1 class="mt-3 font-serif text-4xl md:text-5xl font-bold text-uc-charcoal">${esc(p.name)}</h1>
        <p class="mt-3 text-lg text-uc-charcoal/80">${esc(p.title)}, ${esc(p.department)}<br>${esc(p.college)}, ${esc(p.university)}</p>
        <div class="mt-8 space-y-4 text-base leading-relaxed text-uc-charcoal/90">
          ${p.bio.map(par => `<p>${par}</p>`).join('')}
        </div>`;
    },

    stats() {
      if (!D.stats || !D.stats.length) return '';
      return D.stats.map(s => `
        <div class="text-center bg-white rounded-xl p-5 shadow-sm ring-1 ring-black/5">
          <p class="font-serif text-4xl font-bold text-uc-red">${esc(s.value)}</p>
          <p class="mt-1 text-xs font-medium text-uc-charcoal/70 uppercase tracking-wide">${esc(s.label)}</p>
        </div>`).join('');
    },

    news(el) {
      if (!D.news || !D.news.length) return emptyState('No news yet.');
      const n = parseInt(el.dataset.limit, 10) || D.news.length;
      const sorted = [...D.news].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
      return sorted.map(item => `
        <article class="relative pl-6 pb-7 border-l-2 border-uc-red/30 last:pb-0 last:border-transparent">
          <span class="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-uc-red ring-4 ring-uc-slate"></span>
          <div class="flex flex-wrap items-center gap-2 text-xs mb-1">
            <time datetime="${esc(item.date)}" class="font-mono text-uc-charcoal/50">${fmtDate(item.date)}</time>
            ${item.tag ? `<span class="rounded-full px-2.5 py-0.5 font-semibold text-[11px] ${tagColor(item.tag)}">${esc(item.tag)}</span>` : ''}
          </div>
          <h3 class="font-serif text-base font-semibold text-uc-charcoal leading-snug">
            ${item.link ? `<a href="${esc(item.link)}" target="_blank" rel="noopener" class="hover:text-uc-red transition">${esc(item.title)}</a>` : esc(item.title)}
          </h3>
          <p class="mt-1 text-sm text-uc-charcoal/70 leading-relaxed">${esc(item.body)}</p>
        </article>`).join('');
    },

    'pub-preview'(el) {
      if (!D.publications || !D.publications.length) return emptyState('Publications coming soon.');
      const n = parseInt(el.dataset.limit, 10) || 3;
      const sorted = [...D.publications].sort((a, b) => b.year - a.year).slice(0, n);
      return sorted.map(p => `
        <li class="flex gap-4 py-4 border-b border-uc-charcoal/10 last:border-0">
          <span class="shrink-0 font-mono text-sm font-bold text-uc-red mt-0.5">${esc(String(p.year))}</span>
          <div>
            <p class="text-sm font-semibold text-uc-charcoal leading-snug">
              ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="hover:text-uc-red transition">${esc(p.title)}</a>` : esc(p.title)}
            </p>
            <p class="text-xs text-uc-charcoal/60 mt-0.5">${esc(p.authors)}</p>
            <p class="text-xs text-uc-charcoal/50 italic mt-0.5">${esc(p.venue)}</p>
          </div>
        </li>`).join('');
    },

    publications(el) {
      if (!D.publications || !D.publications.length) return emptyState('Publications coming soon.');
      const limit = parseInt(el && el.dataset.limit, 10) || D.publications.length;
      const sorted = [...D.publications].sort((a, b) => b.year - a.year).slice(0, limit);
      const byYear = sorted.reduce((acc, p) => {
        (acc[p.year] = acc[p.year] || []).push(p); return acc;
      }, {});
      return Object.keys(byYear).sort((a, b) => b - a).map(year => `
        <section class="grid md:grid-cols-[64px_1fr] gap-x-6 gap-y-2">
          <div class="md:pt-1">
            <span class="inline-block font-mono text-sm font-bold text-uc-red md:sticky md:top-24">${year}</span>
          </div>
          <ul class="divide-y divide-uc-charcoal/8">
            ${byYear[year].map(p => `
              <li class="py-3 flex gap-3 items-baseline">
                <span class="shrink-0 mt-0.5 text-[10px] font-semibold uppercase tracking-wide rounded px-1.5 py-0.5 bg-uc-slate text-uc-charcoal/60 leading-none">${esc(p.type || 'Paper')}</span>
                <div class="min-w-0">
                  <p class="text-sm font-semibold text-uc-charcoal leading-snug">
                    ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="hover:text-uc-red transition">${esc(p.title)}</a>` : esc(p.title)}
                  </p>
                  <p class="text-xs text-uc-charcoal/60 mt-0.5 leading-snug">${esc(p.authors)} — <em>${esc(p.venue)}</em></p>
                </div>
              </li>`).join('')}
          </ul>
        </section>`).join('');
    },

    patents() {
      if (!D.patents || !D.patents.length) return emptyState('No patents listed yet.');
      const hasReal = D.patents.some(p => !p.number.includes('XX'));
      if (!hasReal) return emptyState('Patent information coming soon.');
      return D.patents.map(p => `
        <li class="bg-white rounded-xl p-5 ring-1 ring-black/5 shadow-sm flex gap-4">
          <span class="shrink-0 text-xs font-mono font-bold text-uc-red mt-1 pt-0.5">${esc(p.number)}</span>
          <div>
            <p class="font-serif text-base font-semibold text-uc-charcoal leading-snug">
              ${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener" class="hover:text-uc-red">${esc(p.title)}</a>` : esc(p.title)}
            </p>
            <p class="text-sm text-uc-charcoal/60 mt-0.5">${esc(p.inventors)} · Issued ${esc(p.issued)}</p>
          </div>
        </li>`).join('');
    },

    'research-preview'() { return areaCards(D.researchAreas, false); },
    research()           { return areaCards(D.researchAreas, true); },

    teaching() {
      if (!D.teaching || !D.teaching.length) return emptyState('Courses coming soon.');
      return `
        <ol class="relative border-l-2 border-uc-red/40 space-y-8 ml-3">
          ${D.teaching.map(c => `
            <li class="pl-8 relative">
              <span class="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-uc-red ring-4 ring-uc-slate"></span>
              <p class="text-xs font-semibold uppercase tracking-widest text-uc-red">${esc(c.term)} · ${esc(c.level || '')}</p>
              <h3 class="mt-1 font-serif text-lg font-semibold">${esc(c.code)}: ${esc(c.title)}</h3>
              ${c.note ? `<p class="mt-1 text-sm text-uc-charcoal/70">${esc(c.note)}</p>` : ''}
            </li>`).join('')}
        </ol>`;
    }
  };

  function areaCards(items, detailed) {
    if (!items || !items.length) return emptyState('Research areas coming soon.');
    return items.map(a => `
      <article class="bg-white rounded-xl p-6 shadow-sm ring-1 ring-black/5 border-t-4 border-uc-red">
        <h3 class="font-serif text-xl font-semibold text-uc-charcoal">${esc(a.title)}</h3>
        <p class="mt-3 text-sm leading-relaxed text-uc-charcoal/80">${esc(a.description)}</p>
        ${detailed && a.keywords ? `
          <ul class="mt-4 flex flex-wrap gap-2">
            ${a.keywords.map(k => `<li class="rounded-full bg-uc-slate px-3 py-1 text-xs font-medium">${esc(k)}</li>`).join('')}
          </ul>` : ''}
      </article>`).join('');
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    document.querySelectorAll('[data-render]').forEach(el => {
      const fn = RENDER[el.dataset.render];
      if (fn) el.innerHTML = fn(el);
      else console.warn('Unknown data-render key:', el.dataset.render);
    });
  });
})();
