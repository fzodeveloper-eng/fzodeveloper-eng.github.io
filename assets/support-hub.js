(() => {
  const buttons = [...document.querySelectorAll('[data-support-language]')];
  const status = document.querySelector('[data-support-language-status]');
  const appLinks = [...document.querySelectorAll('[data-support-app-link]')];
  if (!buttons.length || !status) return;

  const names = { it: 'Italiano', en: 'English', fr: 'Français', de: 'Deutsch', es: 'Español' };
  const saved = sessionStorage.getItem('fzoSupportLanguage');
  let active = names[saved] ? saved : 'it';

  const update = (language) => {
    active = language;
    sessionStorage.setItem('fzoSupportLanguage', active);
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.supportLanguage === active)));
    status.textContent = `Lingua selezionata: ${names[active]}. Le pagine operative saranno localizzate progressivamente.`;
    appLinks.forEach((link) => {
      const url = new URL(link.getAttribute('href'), window.location.href);
      url.searchParams.set('lang', active);
      link.setAttribute('href', `${url.pathname}${url.search}`);
    });
  };

  buttons.forEach((button) => button.addEventListener('click', () => update(button.dataset.supportLanguage)));
  update(active);
})();
