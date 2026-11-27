(() => {
  'use strict';
  const scope = document.body.dataset.fdmApp;
  const app = scope === 'FDM' ? 'Family Deathmatch' : 'Family Deathmatch Rissa Reale';
  const categories = window.FZO_FDM_CATALOG.filter(c => c.scope === 'FDM+RR' || c.scope === scope);
  const formBase = 'https://docs.google.com/forms/d/e/1FAIpQLSeBv7UdWZpo0F1-kCIudrVjyBhffIXrNxzj9sa8UZL5H5jQjA/viewform';
  const entry = { outcome: '1633846683', language: '180276640', category: '723478191', problem: '954489350', solution: '859553276', scope: '2094053274', source: '1171516139', app: '508399571', details: '2147087580' };
  const state = { category: null, problem: null, outcome: '', source: '' };
  const $ = selector => document.querySelector(selector);
  const steps = [...document.querySelectorAll('[data-fdm-step]')];
  const show = (name, scroll = true) => {
    for (const step of steps) step.hidden = step.dataset.fdmStep !== name;
    const active = $(`[data-fdm-step="${name}"]`);
    if (scroll) {
      const heading = active.querySelector('h2');
      if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
      const headerHeight = $('.site-header')?.getBoundingClientRect().height || 0;
      const top = window.scrollY + active.getBoundingClientRect().top - headerHeight - 16;
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
    }
  };
  const button = (className, key, id, text) => {
    const el = document.createElement('button');
    el.type = 'button'; el.className = className; el.dataset[key] = id;
    el.textContent = text; return el;
  };
  const card = category => {
    const el = button('sms-category-card', 'fdmCategoryId', category.id, '');
    const title = document.createElement('strong'); title.textContent = category.title;
    const count = document.createElement('span'); count.textContent = String(category.problems.length);
    el.append(title, count); return el;
  };
  $('[data-fdm-common]').replaceChildren(...categories.filter(c => c.scope === 'FDM+RR').map(card));
  $('[data-fdm-specific]').replaceChildren(...categories.filter(c => c.scope === scope).map(card));
  const lang = new URLSearchParams(location.search).get('lang');
  const languageNames = { en: 'English', fr: 'Français', de: 'Deutsch', es: 'Español' };
  if (languageNames[lang]) $('[data-fdm-language]').textContent = `La guida FDM è per ora disponibile in italiano, non in ${languageNames[lang]}.`;
  const pickCategory = id => {
    state.category = categories.find(c => c.id === id);
    if (!state.category) return;
    state.problem = null;
    $('[data-fdm-problem-heading]').textContent = `Scegli il problema: ${state.category.title}`;
    $('[data-fdm-problems]').replaceChildren(...state.category.problems.map(p => button('sms-problem-button','fdmProblemId',p.id,p.title)));
    show('problem');
  };
  const pickProblem = id => {
    state.problem = state.category.problems.find(p => p.id === id);
    if (!state.problem) return;
    state.outcome = ''; state.source = '';
    $('[data-fdm-selected-problem]').textContent = state.problem.title;
    $('[data-fdm-solution]').replaceChildren(...state.problem.solution.map(line => { const p = document.createElement('p'); p.textContent = line; return p; }));
    $('[data-fdm-details]').textContent = state.problem.details;
    $('[data-fdm-question]').textContent = state.problem.direct ? 'Non è ancora disponibile una soluzione specifica.' : 'Il problema è stato risolto?';
    $('[data-fdm-resolved="yes"]').hidden = !!state.problem.direct;
    $('[data-fdm-resolved="no"]').textContent = state.problem.direct ? 'Prosegui con la segnalazione' : 'No, il problema persiste';
    show('solution');
  };
  const renderSummary = () => {
    const values = { app, scope: state.category.scope, category: state.category.title, problem: `${state.problem.id} — ${state.problem.title}`, outcome: state.outcome, source: state.source };
    Object.entries(values).forEach(([key,value]) => { $(`[data-fdm-summary="${key}"]`).textContent = value; });
    const url = new URL(formBase); url.searchParams.set('usp','pp_url');
    const fields = { ...values, language:'Italiano', solution:state.problem.solution.join('\n\n') };
    if (state.outcome === 'Problema non risolto') {
      fields.details = `Dettagli da indicare, se pertinenti: ${state.problem.details}\nDescrivi il problema e quando si verifica:\n`;
      $('[data-fdm-final-note]').textContent = 'Il modulo ripropone il percorso e i dettagli da indicare. Compila la descrizione, quindi premi Invia. Se hai scelto la segnalazione anonima, lascia vuoto il campo email.';
    } else $('[data-fdm-final-note]').textContent = 'Il modulo ripropone il percorso già seguito. Per registrare l’esito positivo premi Invia; lascia vuoto il campo email.';
    for (const [key,value] of Object.entries(fields)) url.searchParams.set(`entry.${entry[key]}`,value);
    $('[data-fdm-form-link]').href = url.toString();
    show('submit');
  };
  document.addEventListener('click', event => {
    const category = event.target.closest('[data-fdm-category-id]');
    if (category) return pickCategory(category.dataset.fdmCategoryId);
    const problem = event.target.closest('[data-fdm-problem-id]');
    if (problem) return pickProblem(problem.dataset.fdmProblemId);
    const resolved = event.target.closest('[data-fdm-resolved]');
    if (resolved) {
      state.outcome = resolved.dataset.fdmResolved === 'yes' ? 'Problema risolto' : 'Problema non risolto';
      if (state.outcome === 'Problema risolto') { state.source = 'Anonima'; return renderSummary(); }
      return show('report');
    }
    const source = event.target.closest('[data-fdm-source]');
    if (source) { state.source = source.dataset.fdmSource; return renderSummary(); }
    const back = event.target.closest('[data-fdm-back]');
    if (back) return show(back.dataset.fdmBack);
    if (event.target.closest('[data-fdm-back-submit]')) return show(state.outcome === 'Problema risolto' ? 'solution' : 'report');
    if (event.target.closest('[data-fdm-restart]')) {
      Object.assign(state,{category:null,problem:null,outcome:'',source:''});
      return show('category');
    }
  });
  show('category',false);
})();
