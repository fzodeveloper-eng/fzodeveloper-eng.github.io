(() => {
  const expectedHash = '03a452f03d0c6860c425a5588b1120efe66646ec8d3e616dd9ee147066cb48d0';
  const accessKey = 'fzoSupportTrialUnlocked';
  const gate = document.querySelector('[data-trial-gate]');
  const workspace = document.querySelector('[data-trial-workspace]');
  const accessForm = document.querySelector('[data-access-form]');
  const accessCode = document.querySelector('[data-access-code]');
  const accessError = document.querySelector('[data-access-error]');
  const steps = [...document.querySelectorAll('[data-trial-step]')];
  const categorySelect = document.querySelector('[data-category]');
  const problemSelect = document.querySelector('[data-problem]');
  const solutionCopy = document.querySelector('[data-solution-copy]');
  const summary = document.querySelector('[data-trial-summary]');
  const formLink = document.querySelector('[data-test-form-link]');
  const formFrame = document.querySelector('[data-test-form-frame]');
  const embeddedFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe-kNfhi0mcdFrQvXpWoIWVaHcJbmnfETK-znGc1kv2UNOFcw/viewform?embedded=true';
  const responseFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe-kNfhi0mcdFrQvXpWoIWVaHcJbmnfETK-znGc1kv2UNOFcw/viewform';

  const state = {
    language: 'Italiano',
    app: 'App di collaudo FZO',
    category: '',
    problem: '',
    solution: '',
    resolved: '',
    source: ''
  };

  const catalog = {
    funzionamento: {
      label: 'Funzionamento dell’app',
      problems: {
        blocco: ['L’app sembra bloccata', 'Chiudi completamente l’app, riaprila e verifica che sia installata la versione più recente. Se il problema persiste, annota l’azione eseguita subito prima del blocco.'],
        comando: ['Un comando non produce il risultato atteso', 'Ripeti il comando una sola volta partendo dalla schermata iniziale dell’app. Controlla che non sia aperta una finestra sovrapposta e confronta il comportamento con la guida.']
      }
    },
    installazione: {
      label: 'Installazione o aggiornamento',
      problems: {
        installazione: ['L’installazione non si completa', 'Controlla lo spazio disponibile, la connessione e che Google Play stia usando l’account previsto. Riavvia il dispositivo prima di riprovare.'],
        versione: ['Non vedo la versione più recente', 'Apri la pagina dell’app in Google Play, aggiorna manualmente la scheda e verifica l’account associato al programma di test.']
      }
    },
    accesso: {
      label: 'Account o accesso',
      problems: {
        account: ['L’account previsto non viene riconosciuto', 'Controlla quale account Google è attivo nel Play Store e quale è stato autorizzato per il programma. Non condividere password o codici di sicurezza.'],
        premium: ['Una funzione acquistata non risulta disponibile', 'Verifica connessione, account Play Store e stato dell’acquisto. Non inviare ricevute o dati di pagamento nel modulo di assistenza.']
      }
    },
    connettivita: {
      label: 'Connessione tra dispositivi',
      problems: {
        dispositivi: ['I dispositivi non si trovano', 'Avvicina i dispositivi, abilita le funzioni richieste dall’app e ripeti la ricerca. Verifica che entrambi usino versioni compatibili.'],
        sessione: ['La sessione si interrompe', 'Mantieni le app in primo piano, riduci la distanza e disattiva temporaneamente il risparmio energetico aggressivo durante la prova.']
      }
    },
    materiali: {
      label: 'Immagini o materiali dell’utente',
      problems: {
        ritaglio: ['Un’immagine importata non è centrata', 'Il ritaglio e la qualità dei materiali scelti restano sotto il controllo dell’utente. Regola il file di origine e ripeti l’importazione.'],
        cancellazione: ['Il materiale di origine conserva elementi indesiderati', 'Correggi il documento o l’immagine di origine prima di ripetere l’elaborazione. Questo caso non indica, di per sé, un problema tecnico dell’app.']
      }
    },
    altro: {
      label: 'Altro problema tecnico',
      problems: {
        generico: ['Il problema non rientra nelle categorie precedenti', 'Riavvia l’app e il dispositivo, verifica la versione installata e prova a riprodurre il comportamento con una sequenza minima di azioni.']
      }
    }
  };

  const digest = async (value) => {
    const data = new TextEncoder().encode(value);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  };

  const showWorkspace = () => {
    gate.hidden = true;
    workspace.hidden = false;
    showStep('language');
  };

  const showStep = (name) => {
    steps.forEach((step) => { step.hidden = step.dataset.trialStep !== name; });
    workspace.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  accessForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    accessError.textContent = '';
    const candidate = accessCode.value.trim();
    if (!candidate) {
      accessError.textContent = 'Inserisci il codice di collaudo.';
      return;
    }
    if (await digest(candidate) !== expectedHash) {
      accessError.textContent = 'Codice non riconosciuto.';
      accessCode.select();
      return;
    }
    sessionStorage.setItem(accessKey, 'yes');
    showWorkspace();
  });

  document.querySelectorAll('[data-language-option]').forEach((button) => button.addEventListener('click', () => {
    state.language = button.dataset.languageOption;
    showStep('app');
  }));

  document.querySelector('[data-confirm-app]').addEventListener('click', () => showStep('problem'));

  const populateProblems = () => {
    const category = catalog[categorySelect.value];
    problemSelect.innerHTML = '<option value="">Seleziona il caso da provare</option>';
    if (!category) return;
    Object.entries(category.problems).forEach(([value, [label]]) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = label;
      problemSelect.append(option);
    });
  };
  categorySelect.addEventListener('change', populateProblems);

  document.querySelector('[data-show-solution]').addEventListener('click', () => {
    const category = catalog[categorySelect.value];
    const problem = category?.problems[problemSelect.value];
    if (!category || !problem) {
      document.querySelector('[data-problem-error]').textContent = 'Seleziona categoria e problema.';
      return;
    }
    document.querySelector('[data-problem-error]').textContent = '';
    state.category = category.label;
    state.problem = problem[0];
    state.solution = problem[1];
    solutionCopy.textContent = state.solution;
    showStep('solution');
  });

  document.querySelectorAll('[data-resolved]').forEach((button) => button.addEventListener('click', () => {
    state.resolved = button.dataset.resolved === 'yes' ? 'Sì' : 'No';
    if (state.resolved === 'Sì') {
      state.source = 'Anonima · problema risolto';
      renderSummary();
      showStep('submit');
    } else {
      showStep('source');
    }
  }));

  document.querySelectorAll('[data-source]').forEach((button) => button.addEventListener('click', () => {
    state.source = button.dataset.source;
    renderSummary();
    showStep('submit');
  }));

  const renderSummary = () => {
    const values = {
      language: state.language,
      app: state.app,
      category: state.category,
      problem: state.problem,
      solution: state.solution,
      outcome: state.resolved,
      source: state.source
    };
    Object.entries(values).forEach(([key, value]) => {
      const target = summary.querySelector(`[data-summary-${key}]`);
      if (target) target.textContent = value;
    });
    const note = document.querySelector('[data-source-note]');
    if (state.source.includes('contatto')) {
      note.textContent = 'Nel modulo di prova compariranno email, descrizione e diagnostica fittizie, precedute da un avviso dimostrativo sulla privacy.';
    } else if (state.source.includes('Beta')) {
      note.textContent = 'Il percorso beta simula la copertura dell’informativa dedicata al programma; usa comunque soltanto dati fittizi.';
    } else {
      note.textContent = 'Il percorso anonimo non richiede email, testo libero, diagnostica o allegati.';
    }
    if (!responseFormUrl.startsWith('FORM_')) formLink.href = responseFormUrl;
    if (!embeddedFormUrl.startsWith('FORM_')) formFrame.src = embeddedFormUrl;
  };

  document.querySelectorAll('[data-go-step]').forEach((button) => button.addEventListener('click', () => showStep(button.dataset.goStep)));
  document.querySelector('[data-restart-trial]').addEventListener('click', () => window.location.reload());

  if (sessionStorage.getItem(accessKey) === 'yes') showWorkspace();
  else {
    gate.hidden = false;
    workspace.hidden = true;
  }
})();
