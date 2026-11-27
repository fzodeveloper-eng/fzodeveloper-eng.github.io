// Generated from the approved public-facing fields of the catalog.
window.FZO_FDM_CATALOG = [
  {
    "id": "cat-4",
    "title": "Avvio, aggiornamento, dispositivo e Impostazioni",
    "scope": "FDM+RR",
    "problems": [
      {
        "id": "COM-APP-01",
        "title": "L'app non si avvia.",
        "solution": [
          "Chiudi completamente l'app e riaprila. Se il problema continua, riavvia il dispositivo e controlla in Google Play se è disponibile un aggiornamento. Non disinstallare l'app prima di avere verificato l'esistenza di eventuali backup che vuoi conservare."
        ],
        "details": "momento della chiusura, presenza della schermata iniziale, versione installata, eventuale aggiornamento appena eseguito."
      },
      {
        "id": "COM-APP-02",
        "title": "L'app si comporta diversamente dopo un aggiornamento.",
        "solution": [
          "Verifica nelle Impostazioni il numero di versione realmente installato, chiudi e riapri l'app e ripeti una sola volta l'operazione. Non cancellare dati o reinstallare prima di avere protetto fighter, arene, statistiche e backup che vuoi conservare."
        ],
        "details": "versione precedente e attuale, funzione interessata, aggiornamento dell'app o di Android."
      },
      {
        "id": "COM-APP-03",
        "title": "Una voce delle Impostazioni non è visibile.",
        "solution": [
          "Scorri l'intera pagina delle Impostazioni fino in fondo. Se una voce resta irraggiungibile, torna alla Home, riapri le Impostazioni e indica modello, versione Android e voce mancante."
        ],
        "details": "orientamento dello schermo, dimensione o modello del dispositivo, ultima voce visibile."
      },
      {
        "id": "COM-APP-04",
        "title": "Non vedo un avviso dell'app.",
        "solution": [
          "Ripeti l'operazione mantenendo l'app in primo piano. Controlla anche nelle impostazioni Android se le notifiche dell'app sono disattivate. Se il messaggio continua a non comparire, descrivi l'azione eseguita e ciò che compare al suo posto."
        ],
        "details": "azione, schermata, notifiche abilitate/disabilitate, versione Android."
      }
    ]
  },
  {
    "id": "cat-5",
    "title": "Combattenti, arene, importazione, esportazione e backup",
    "scope": "FDM+RR",
    "problems": [
      {
        "id": "COM-DATA-01",
        "title": "Non trovo il combattente o l'arena scaricata.",
        "solution": [
          "Apri l'app File del dispositivo e controlla la cartella Download. Se il download non compare, aggiorna il browser e ripeti il download; con alcune versioni di Firefox per Android può essere necessario usare temporaneamente un altro browser. Poi importa il file manualmente dall'app."
        ],
        "details": "browser e versione, dispositivo, pagina di download, estensione del file (non il nome se contiene dati personali)."
      },
      {
        "id": "COM-DATA-02",
        "title": "Il file non compare durante l'importazione.",
        "solution": [
          "Nel selettore Android apri la cartella in cui hai salvato il file e controlla di non avere modificato nome o estensione. I combattenti usano .fdmcombattente; le arene usano .fdmarena. Mantieni integro il file esportato dall'app: non estrarne il contenuto né convertirlo in un altro formato. Se proviene da WhatsApp, email o un'altra app, puoi anche tentare l'apertura diretta (vedi COM-DATA-07). Se il download è contenuto in un ulteriore archivio, recupera il file originale prima di riprovare."
        ],
        "details": "tipo di asset, estensione mostrata dall'app File, origine del file."
      },
      {
        "id": "COM-DATA-03",
        "title": "L'asset importato non viene aggiunto.",
        "solution": [
          "Controlla se lo stesso fighter o la stessa arena è già presente. Gli asset con lo stesso identificativo non vengono duplicati o sovrascritti; per i fighter prevalgono inoltre le statistiche locali già esistenti. Questo protegge i dati dell'utente."
        ],
        "details": "asset già presente, provenienza del file, eventuale messaggio mostrato."
      },
      {
        "id": "COM-DATA-04",
        "title": "Voglio recuperare un fighter predefinito eliminato.",
        "solution": [
          "Gli aggiornamenti non ripristinano automaticamente i fighter predefiniti eliminati. Scarica il fighter dalla raccolta Asset gratuiti, salvalo sul dispositivo e importalo manualmente. Se una scheda con lo stesso identificativo esiste ancora, l'app conserva i dati locali."
        ],
        "details": "quale combattente predefinito, presenza di una scheda residua, app usata."
      },
      {
        "id": "COM-DATA-05",
        "title": "Il volto del combattente non è ben centrato.",
        "solution": [
          "Modifica la scheda del fighter e scegli o prepara un'immagine con il volto più centrato. L'app adatta la fotografia allo spazio disponibile, ma la qualità dell'inquadratura iniziale dipende dall'immagine scelta. Questo non richiede l'invio dell'immagine all'assistenza."
        ],
        "details": "nessun allegato; soltanto dispositivo e punto dell'app in cui la resa è anomala, se il difetto sembra tecnico."
      },
      {
        "id": "COM-DATA-06",
        "title": "L'arena non occupa correttamente lo schermo.",
        "solution": [
          "Apri la scheda dell'arena e controlla l'immagine e il livello del pavimento. Se l'arena è stata creata o importata dall'utente, prova un'immagine orizzontale più adatta allo schermo. Se il problema riguarda un'arena predefinita, indica arena, dispositivo e modalità di gioco."
        ],
        "details": "arena predefinita o personale, risoluzione/orientamento del dispositivo, locale o multiplayer."
      },
      {
        "id": "COM-DATA-07",
        "title": "Non riesco a esportare, condividere o aprire un asset ricevuto.",
        "solution": [
          "Se stai inviando un combattente o un'arena, controlla lo spazio libero e la disponibilità di un'app di destinazione compatibile; riprova una volta oppure salva il file e condividilo dall'app File. L'app non carica automaticamente gli asset su un server FZO.",
          "Se stai ricevendo un asset tramite WhatsApp, email o un'altra app (quando supportato da Android e dall'app di origine), usa Apri con e seleziona Family Deathmatch o Family Deathmatch Rissa Reale. Controlla la versione dell'app di destinazione: FDM 0.16.9 o successiva, FDM-RR 0.10.8 o successiva. Conferma l'importazione quando viene richiesto. Al primo avvio, la conferma compare dopo l'accettazione dei Termini d'uso.",
          "Se l'app non compare fra le destinazioni, il file viene rifiutato prima della conferma oppure compare un avviso di archivio danneggiato dopo aver confermato, aggiorna l'app e riprova. Se non riesci a usare l'apertura diretta, salva il file originale sul dispositivo e importalo manualmente dall'app, senza rinominarlo o estrarlo. Un normale ZIP o un file realmente danneggiato non è un asset importabile.",
          "Se l'importazione termina senza aggiungere una seconda copia di un asset già presente, consulta COM-DATA-03. Per la condivisione di un backup completo consulta COM-DATA-08."
        ],
        "details": "tipo di asset (combattente, arena o backup), app/versione di origine e destinazione se note, canale di condivisione (es. WhatsApp o email), eventuale estensione visibile, fase del blocco (app non disponibile, prima della conferma, dopo la conferma o importazione manuale), messaggio mostrato; nessun allegato o nome di contatto."
      },
      {
        "id": "COM-DATA-08",
        "title": "Non riesco a creare o ripristinare un backup.",
        "solution": [
          "Verifica di avere scelto il file di backup corretto e di non avere interrotto l'operazione. FDM usa i backup .fdmbackup; FDM-RR usa .fdmrrbackup e può importare i contenuti compatibili da FDM. Da FDM 0.16.8 e FDM-RR 0.10.6, per condividere un backup usa Salva tutto e poi condividi il file salvato dall'app File (ad esempio con Quick Share), oppure scegli Drive come destinazione di salvataggio se disponibile: la voce Condividi backup è stata rimossa intenzionalmente. Se l'app segnala il superamento dei limiti del backup, il nuovo file non viene prodotto; conserva il backup originale. Per un backup ricevuto e aperto da un'altra app, segui anche COM-DATA-07. Se il ripristino continua a non riuscire, indica app e versione che hanno creato il backup e app e versione che tentano di aprirlo."
        ],
        "details": "app/versione di origine e destinazione, tipo di contenuto mancante, operazione (salvataggio, condivisione o ripristino), eventuale avviso di superamento dei limiti o altro messaggio mostrato; non allegare il backup al modulo pubblico."
      }
    ]
  },
  {
    "id": "cat-6",
    "title": "Preparazione dell'incontro e lobby",
    "scope": "FDM+RR",
    "problems": [
      {
        "id": "COM-LOB-01",
        "title": "Non riesco a selezionare un fighter.",
        "solution": [
          "Controlla che nella raccolta sia presente almeno un fighter utilizzabile e tocca la scheda o il comando di cambio previsto nella lobby. Se un fighter non compare, torna alla raccolta Combattenti e verifica che la sua scheda sia ancora presente."
        ],
        "details": "app, tipo di incontro, slot interessato, fighter predefinito o personale."
      },
      {
        "id": "COM-LOB-02",
        "title": "Il pulsante di avvio non fa iniziare l'incontro.",
        "solution": [
          "Controlla di avere completato tutte le selezioni richieste. In multiplayer attendi che entrambi i dispositivi abbiano completato la lobby e mostrino lo stato pronto. Se il problema continua, indica la modalità e l'ultimo stato visibile su ciascun dispositivo."
        ],
        "details": "locale/multiplayer/torneo/TAG/RR, slot compilati, Host/Guest, stato pronto."
      },
      {
        "id": "COM-LOB-03",
        "title": "La preparazione dell'incontro non si completa.",
        "solution": [
          "Attendi alcuni secondi senza uscire dall'app. In multiplayer mantieni entrambi i dispositivi attivi e in primo piano. Se l'attesa continua, annulla la sessione su entrambi i dispositivi e ricomincia la ricerca."
        ],
        "details": "schermata ferma, durata approssimativa, Host/Guest, fighter o arena in trasferimento."
      }
    ]
  },
  {
    "id": "cat-7",
    "title": "Comandi, armi, pausa e conclusione dell'incontro",
    "scope": "FDM+RR",
    "problems": [
      {
        "id": "COM-CTRL-01",
        "title": "Il fighter continua a muoversi dopo avere rilasciato il pulsante.",
        "solution": [
          "Rilascia entrambi i pulsanti direzionali, metti in pausa e riprendi l'incontro. Se il movimento continua, esci dalla partita e avviane una nuova. Segnala se il problema è comparso durante una pausa, un cambio TAG o la disattivazione dei comandi."
        ],
        "details": "direzione, modalità, evento immediatamente precedente, locale/Host/Guest."
      },
      {
        "id": "COM-CTRL-02",
        "title": "Un pulsante non produce effetto.",
        "solution": [
          "Controlla che l'incontro non sia in pausa, in caricamento, concluso o durante una transizione che blocca temporaneamente i comandi. Riprova quando l'arena è attiva. In multiplayer indica se il comando appartiene all'Host o al Guest."
        ],
        "details": "pulsante, stato della partita, posizione o slot del fighter controllato (non il nome), Host/Guest."
      },
      {
        "id": "COM-CTRL-03",
        "title": "Non riesco a raccogliere un'arma.",
        "solution": [
          "Avvicina il fighter all'arma e riprova il comando di raccolta. Se l'arma si trova oltre il margine raggiungibile o non reagisce, indica arena, posizione approssimativa e modalità di gioco."
        ],
        "details": "arena, bordo sinistro/destra, locale/multiplayer, arma interessata."
      },
      {
        "id": "COM-CTRL-04",
        "title": "Dopo la pausa i due dispositivi mostrano situazioni diverse.",
        "solution": [
          "Riprendi dall'Host e attendi il riallineamento. Se la differenza persiste, termina la sessione su entrambi i dispositivi e ricomincia. Non tentare di correggere manualmente la posizione sul Guest."
        ],
        "details": "chi ha attivato la pausa, Host/Guest, stato visibile sui due schermi."
      },
      {
        "id": "COM-CTRL-05",
        "title": "L'incontro è finito ma non posso continuare o uscire.",
        "solution": [
          "Attendi la conclusione dell'animazione e controlla i comandi disponibili. Distingui un KO intermedio da una vittoria definitiva. Se nessun comando compare, indica modalità, ultimo fighter eliminato e ciò che mostrano i due dispositivi."
        ],
        "details": "tipo di KO, locale/multiplayer, app, Host/Guest, pulsanti presenti."
      },
      {
        "id": "COM-CTRL-06",
        "title": "La nuova partita conserva uno stato vecchio.",
        "solution": [
          "Torna alla lobby e crea una nuova partita invece di usare Ripeti o Rivincita. Se lo stato precedente ricompare, indica che cosa è rimasto: pausa, fighter eliminato, controllo, arena, punteggio o collegamento multiplayer."
        ],
        "details": "elemento rimasto, modalità, match precedente e nuovo, Host/Guest."
      }
    ]
  },
  {
    "id": "cat-8",
    "title": "Multiplayer Nearby",
    "scope": "FDM+RR",
    "problems": [
      {
        "id": "COM-MP-01",
        "title": "I dispositivi non si trovano.",
        "solution": [
          "Su entrambi i dispositivi apri la modalità multiplayer e avvia la ricerca prevista. Mantieni le app in primo piano, avvicina i dispositivi e controlla che Android abbia concesso le autorizzazioni richieste. Se necessario, interrompi e riavvia la ricerca su entrambi."
        ],
        "details": "modelli, versioni Android, app usate, autorizzazione negata o messaggio mostrato."
      },
      {
        "id": "COM-MP-02",
        "title": "I codici mostrati sui due dispositivi sono diversi.",
        "solution": [
          "Non confermare l'associazione. Annulla la richiesta su entrambi i dispositivi, riavvia la ricerca e accetta soltanto quando i codici coincidono."
        ],
        "details": "app e ruolo previsto; non registrare il codice nel modulo."
      },
      {
        "id": "COM-MP-03",
        "title": "Il multiplayer richiede un'autorizzazione.",
        "solution": [
          "Concedi soltanto le autorizzazioni mostrate da Android per la ricerca dei dispositivi vicini. Se le avevi negate, apri le informazioni dell'app nelle Impostazioni Android e abilita l'autorizzazione pertinente, quindi riprova."
        ],
        "details": "testo dell'autorizzazione, versione Android, scelta effettuata."
      },
      {
        "id": "COM-MP-04",
        "title": "La lobby multiplayer non si sincronizza.",
        "solution": [
          "Mantieni entrambi i dispositivi nella lobby e attendi il completamento del trasferimento. Non cambiare app durante questa fase. Se uno dei dispositivi resta fermo, annulla la sessione su entrambi e ricomincia la ricerca."
        ],
        "details": "elemento mancante, Host/Guest, app su entrambi, ultimo stato visibile."
      },
      {
        "id": "COM-MP-05",
        "title": "Il multiplayer non è fluido.",
        "solution": [
          "Controlla che entrambi i dispositivi abbiano terminato gli aggiornamenti Android e dei componenti Google. Se un aggiornamento Nearby o Google Play Services è appena avvenuto o risulta in attesa, completalo e riavvia i dispositivi. Chiudi la registrazione video e le altre attività pesanti, poi crea una nuova sessione."
        ],
        "details": "Host/Guest, modelli, Android, app, registrazione attiva, aggiornamenti recenti o pendenti, rallentamento continuo o occasionale."
      },
      {
        "id": "COM-MP-06",
        "title": "Host e Guest non mostrano la stessa situazione.",
        "solution": [
          "Attendi qualche istante senza impartire nuovi comandi. Se la differenza persiste, termina la sessione e ricreala. Lo stato dell'Host è quello autorevole: non cercare di correggere manualmente la partita sul Guest."
        ],
        "details": "differenza osservata, Host/Guest, modalità, momento di comparsa."
      },
      {
        "id": "COM-MP-07",
        "title": "Il collegamento multiplayer si è interrotto.",
        "solution": [
          "Riporta entrambe le app in primo piano, mantieni gli schermi attivi e crea una nuova sessione. Evita attese molto lunghe nella lobby. Se il problema ricompare, indica se uno schermo si è spento, un'app è passata in secondo piano o la disconnessione è avvenuta durante lobby, combattimento, pausa o KO."
        ],
        "details": "fase, inattività, schermo spento, app in secondo piano, messaggio di disconnessione."
      },
      {
        "id": "COM-MP-08",
        "title": "La rivincita multiplayer non comincia.",
        "solution": [
          "Verifica che entrambi i dispositivi abbiano concluso la partita precedente e confermato la nuova sessione. Se uno resta nella schermata precedente, esci dal multiplayer su entrambi e ripeti la ricerca."
        ],
        "details": "schermata dei due dispositivi, Host/Guest, uso di Ripeti/Rivincita o nuova ricerca."
      },
      {
        "id": "COM-MP-09",
        "title": "Le app multiplayer non sono compatibili in questa direzione.",
        "solution": [
          "Controlla quale app sta creando la sessione. Due FDM possono giocare fra loro; due FDM-RR possono giocare fra loro; FDM-RR può creare una sessione compatibile per un Guest FDM. Un Host FDM non può invece ospitare FDM-RR come Guest."
        ],
        "details": "app Host e app Guest."
      }
    ]
  },
  {
    "id": "cat-9",
    "title": "Prestazioni, grafica, audio e registrazione",
    "scope": "FDM+RR",
    "problems": [
      {
        "id": "COM-PERF-01",
        "title": "La registrazione rende il gioco meno fluido.",
        "solution": [
          "Controlla di avere installato la versione più recente dell'app. Chiudi altre app pesanti e riprova una registrazione breve. Se il rallentamento compare soltanto durante la registrazione, indica modello, Android e modalità di gioco."
        ],
        "details": "con/senza registrazione, app/versione, durata, locale/Host/Guest."
      },
      {
        "id": "COM-PERF-02",
        "title": "L'audio non viene riprodotto correttamente.",
        "solution": [
          "Controlla volume multimediale, modalità silenziosa e dispositivo audio selezionato. Chiudi e riapri l'app. Se il problema riguarda soltanto una registrazione, prova anche senza registrare."
        ],
        "details": "audio del gioco o del video, cuffie/Bluetooth, modalità, momento di comparsa."
      },
      {
        "id": "COM-UI-01",
        "title": "Una parte dell'interfaccia è tagliata o sovrapposta.",
        "solution": [
          "Torna alla Home e riapri la schermata. Se il difetto resta, indica modello, Android, orientamento, schermata e testi o pulsanti coinvolti. Non è necessario inviare immagini nel modulo pubblico."
        ],
        "details": "schermata, elementi coinvolti, dimensione/orientamento del dispositivo."
      },
      {
        "id": "COM-UI-02",
        "title": "L'arena o lo sfondo non viene disegnato correttamente.",
        "solution": [
          "Esci dall'incontro e riaprilo con la stessa arena. Se il problema ricompare, indica arena, modalità locale/multiplayer e quale dispositivo mostra lo sfondo diverso."
        ],
        "details": "arena, Host/Guest, rapporto dello schermo, bande laterali o area di gioco interessata."
      },
      {
        "id": "COM-PERF-03",
        "title": "Il gioco si ferma per un momento durante un passaggio.",
        "solution": [
          "Attendi il completamento della transizione. Alcuni cambi di fase possono mostrare una breve pausa intenzionale. Se il fermo dura a lungo, si ripete durante il combattimento o impedisce di continuare, trattalo come un blocco e invia una segnalazione."
        ],
        "details": "durata approssimativa, passaggio interessato, ripresa automatica sì/no."
      }
    ]
  },
  {
    "id": "cat-10",
    "title": "Crash, arresti anomali e casi non classificati",
    "scope": "FDM+RR",
    "problems": [
      {
        "id": "COM-CRASH-01",
        "title": "L'app si è arrestata in modo anomalo.",
        "solution": [
          "Riapri l'app e ripeti una sola volta l'operazione. Se l'arresto si ripresenta, non cancellare i dati: invia una segnalazione con versione, dispositivo, Android, modalità e ultima azione eseguita. Condividi la diagnostica testuale soltanto se richiesto e su tua azione esplicita."
        ],
        "details": "campi standard più riproducibilità e ultima operazione."
      },
      {
        "id": "COM-OTHER-01",
        "title": "Altro problema o proposta di modifica.",
        "solution": [
          "Scegli la categoria più vicina e descrivi brevemente ciò che accade o la modifica proposta. Non allegare fotografie personali, fighter, arene, backup o altri documenti. La segnalazione sarà valutata prima di diventare un nuovo percorso della guida."
        ],
        "details": "descrizione breve, app/versione, dispositivo solo se pertinente.",
        "direct": true
      }
    ]
  },
  {
    "id": "cat-11",
    "title": "Incontro standard nell'arena a due fighter",
    "scope": "FDM",
    "problems": [
      {
        "id": "FDM-ONE-01",
        "title": "Non riesco a preparare l'incontro singolo.",
        "solution": [
          "Controlla che entrambi gli slot abbiano un fighter e che sia stata scelta un'arena. Se usi il multiplayer, verifica che il Guest stia usando Family Deathmatch e che entrambi abbiano completato la lobby."
        ],
        "details": "locale/multiplayer, slot mancante, app Guest."
      },
      {
        "id": "FDM-ONE-02",
        "title": "Perché ESCI chiede conferma soltanto in alcuni momenti?",
        "solution": [
          "Durante un incontro attivo o in pausa, ESCI chiede conferma per evitare un abbandono involontario. Dopo il KO definitivo di un incontro singolo locale, torna direttamente alla lobby. Tournament e multiplayer possono usare conferme diverse."
        ],
        "details": "nessuno, salvo comportamento diverso da quello descritto."
      }
    ]
  },
  {
    "id": "cat-12",
    "title": "Tournament",
    "scope": "FDM",
    "problems": [
      {
        "id": "FDM-TOR-01",
        "title": "Non posso creare un torneo.",
        "solution": [
          "Per iniziare servono almeno quattro fighter disponibili. Crea o importa altri fighter, oppure recupera quelli predefiniti eliminati dalla raccolta Asset gratuiti."
        ],
        "details": "numero di fighter presenti e formato scelto."
      },
      {
        "id": "FDM-TOR-02",
        "title": "Lo stesso fighter compare più volte nel tabellone.",
        "solution": [
          "Se la raccolta contiene meno fighter del formato scelto, il Tournament può riutilizzarli per completare il tabellone. Non è un errore. Aggiungi altri fighter se vuoi tutti i partecipanti differenti."
        ],
        "details": "numero di fighter e formato."
      },
      {
        "id": "FDM-TOR-03",
        "title": "Voglio cambiare il tabellone del torneo.",
        "solution": [
          "Usa Nuovo sorteggio per ricreare gli accoppiamenti oppure Cambia per sostituire un partecipante nella lobby. La dicitura testa di serie non indica necessariamente un fighter vincente: identifica uno dei fighter più utilizzati in base alle statistiche disponibili. Controlla il tabellone prima di iniziare."
        ],
        "details": "formato, comando usato, posizione del partecipante o testa di serie interessata (senza nomi)."
      },
      {
        "id": "FDM-TOR-04",
        "title": "Il torneo salvato non viene ripristinato.",
        "solution": [
          "Salva il torneo dalla lobby e conserva il file senza modificarlo. Per riprenderlo usa Carica torneo e seleziona lo stesso file. Se il caricamento fallisce, non sovrascrivere l'originale e indica la versione che lo ha creato."
        ],
        "details": "versione di creazione e apertura, fase del torneo, messaggio mostrato; non allegare il file al modulo pubblico."
      },
      {
        "id": "FDM-TOR-05",
        "title": "Il torneo continua dopo l'uscita del Guest.",
        "solution": [
          "È un comportamento previsto quando la sessione multiplayer termina ma il torneo può proseguire sul dispositivo principale. Controlla la lobby e continua localmente, oppure salva il torneo e riprendilo in seguito."
        ],
        "details": "segnalare soltanto se il tabellone o i risultati vengono persi."
      },
      {
        "id": "FDM-TOR-06",
        "title": "Il Tournament multiplayer si disconnette nella lobby.",
        "solution": [
          "Mantieni entrambi i dispositivi attivi e completa la lobby senza lasciarla inattiva a lungo. Se il collegamento cade, esci dal multiplayer su entrambi e crea una nuova sessione; il torneo locale può essere salvato prima di riprovare."
        ],
        "details": "durata dell'attesa, Host/Guest, fase della lobby, schermo spento o app in secondo piano."
      },
      {
        "id": "FDM-TOR-07",
        "title": "Il risultato del torneo non compare nelle statistiche.",
        "solution": [
          "Completa il torneo fino alla vittoria finale e torna alla relativa sezione. Un torneo abbandonato o non concluso può non produrre lo stesso risultato. Se il dato manca, indica formato e punto in cui il torneo è terminato."
        ],
        "details": "torneo concluso sì/no, formato, posizione del vincitore nel tabellone (senza nome), ripresa da file o sessione continua."
      }
    ]
  },
  {
    "id": "cat-13",
    "title": "Premium e acquisti FDM",
    "scope": "FDM",
    "problems": [
      {
        "id": "FDM-PREM-01",
        "title": "Ho acquistato Premium ma non viene riconosciuto.",
        "solution": [
          "Controlla che Google Play usi lo stesso account dell'acquisto e che il dispositivo sia connesso. Chiudi e riapri l'app, poi apri le Impostazioni per consentire un nuovo controllo. Non inviare ricevute, password o dati di pagamento nel modulo pubblico."
        ],
        "details": "stato mostrato dal pulsante Premium, account corretto sì/no, versione; nessun dato di pagamento."
      },
      {
        "id": "FDM-PREM-02",
        "title": "Una funzione Premium non è disponibile.",
        "solution": [
          "Verifica prima che nelle Impostazioni il pulsante indichi Premium attivo. Se lo stato non è attivo, segui il percorso di ripristino dell'acquisto. Se è attivo ma la funzione resta bloccata, chiudi e riapri l'app e invia una segnalazione."
        ],
        "details": "funzione, stato Premium, versione."
      },
      {
        "id": "FDM-PREM-03",
        "title": "Voglio ripristinare Premium su un altro dispositivo.",
        "solution": [
          "Installa FDM da Google Play con lo stesso account usato per l'acquisto e attendi il controllo automatico. Premium è collegato all'acquisto Google Play, non a un codice da comunicare all'assistenza."
        ],
        "details": "stesso account sì/no, installazione da Google Play sì/no, stato del pulsante."
      }
    ]
  },
  {
    "id": "cat-14",
    "title": "Arena a quattro fighter, squadre e TAG",
    "scope": "FDM-RR",
    "problems": [
      {
        "id": "RR-TAG-01",
        "title": "Il fighter controllato o la riserva non sono quelli attesi.",
        "solution": [
          "Controlla nella lobby la composizione delle due squadre e quale fighter è attivo. Se il problema compare dopo un TAG o dopo il passaggio RR → TAG, indica soltanto Team A o Team B e lo slot A1, A2, B1 o B2, oltre al ruolo del dispositivo. Non inserire i nomi dei fighter."
        ],
        "details": "Team A/B, slot A1/A2/B1/B2, locale/Host/Guest, prima/dopo TAG o RR; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-TAG-02",
        "title": "Non riesco a cambiare fighter con TAG.",
        "solution": [
          "Verifica che la squadra abbia una riserva disponibile e che la sua fotografia laterale sia verde, quindi toccala quando l'incontro non è in pausa e non è già in corso una transizione. Riprova una volta. Se il comando continua a essere ignorato, indica soltanto Team A o Team B, lo slot controllato A1, A2, B1 o B2 e il ruolo Host/Guest. Non inserire il nome del fighter."
        ],
        "details": "Team A/B, slot A1/A2/B1/B2, riserva disponibile, Host/Guest, stato della partita; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-TAG-03",
        "title": "Dopo il KO non entra la riserva.",
        "solution": [
          "Attendi il completamento del KO e controlla se la squadra dispone ancora di una riserva valida. Se l'incontro passa invece a Rissa Reale o termina, può trattarsi della fase prevista. Se resta bloccato, indica soltanto Team A o Team B e lo slot eliminato A1, A2, B1 o B2. Non inserire il nome del fighter."
        ],
        "details": "Team A/B, slot eliminato A1/A2/B1/B2, riserva disponibile, fase TAG/RR, locale/Host/Guest; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-TAG-04",
        "title": "I pulsanti agiscono sul fighter sbagliato.",
        "solution": [
          "Metti in pausa e controlla quale squadra e fighter dovrebbero appartenere al dispositivo. Riprendi e prova un solo comando. Se il problema continua, esci dalla sessione e segnala soltanto Team A o Team B, gli slot A1, A2, B1, B2 coinvolti e il ruolo Host/Guest. Non inserire i nomi dei fighter."
        ],
        "details": "Team A/B, slot A1/A2/B1/B2, Host/Guest, locale/nativo/compatibile, evento precedente; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-TAG-05",
        "title": "La partita resta ferma durante il passaggio a Rissa Reale.",
        "solution": [
          "Attendi alcuni secondi senza premere altri comandi. Se l'arena non riprende, metti in pausa e torna alla lobby. Indica soltanto Team A o Team B, lo slot eliminato e gli slot delle riserve rimaste fra A1, A2, B1, B2, oltre allo stato visibile sui due dispositivi. Non inserire i nomi dei fighter."
        ],
        "details": "locale/Host/Guest, Team A/B, slot coinvolti A1/A2/B1/B2, durata, comandi visibili; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      }
    ]
  },
  {
    "id": "cat-15",
    "title": "Rissa Reale ed eventi speciali",
    "scope": "FDM-RR",
    "problems": [
      {
        "id": "RR-MODE-01",
        "title": "In Rissa Reale non controllo il fighter desiderato.",
        "solution": [
          "Usa il comando ↻ RR e attendi il completamento del passaggio. Il cambio può essere temporaneamente indisponibile durante KO, pausa o transizione. Se resta bloccato, indica soltanto lo slot attivo e quello che vuoi controllare fra A1, A2, B1, B2. Non inserire i nomi dei fighter."
        ],
        "details": "locale/Host/Guest, slot attivo e desiderato A1/A2/B1/B2, stato della partita; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-EVT-01",
        "title": "L'evento DUAL si interrompe o appare diverso sui due dispositivi.",
        "solution": [
          "DUAL è un possibile evento casuale della fase TAG, non una seconda partita. Quando uno zoccolo manca il bersaglio, le due riserve possono raccoglierlo e rilanciarlo, avvicinarsi, scambiarsi alcuni colpi e tornare ai lati. Attendi la fine della sequenza. Se resta bloccata o Host e Guest mostrano fasi diverse, termina la sessione e indica il punto in cui si è fermata."
        ],
        "details": "locale/nativo/compatibile, Host/Guest, riserve ancora disponibili, fase osservata — zoccolo, avvicinamento, colpi o ritorno — e stato sui due schermi."
      },
      {
        "id": "RR-EVT-02",
        "title": "SECOND WIND non riporta correttamente un fighter in gioco.",
        "solution": [
          "Attendi la conclusione dell'evento senza premere altri comandi. Se il fighter non rientra o i controlli restano sul fighter precedente, indica soltanto quale slot era stato eliminato e quale è tornato attivo fra A1, A2, B1, B2. Non inserire i nomi dei fighter."
        ],
        "details": "locale/nativo/compatibile, slot eliminato e ripristinato A1/A2/B1/B2, Host/Guest, controlli disponibili; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-EVT-03",
        "title": "La partita termina mentre restano altri fighter.",
        "solution": [
          "Controlla se restano fighter o riserve validi. Un KO intermedio deve proseguire con sostituzione, passaggio di fase o evento previsto; soltanto la vittoria definitiva conclude la partita. Se compaiono subito i comandi finali, invia una segnalazione indicando soltanto gli slot rimasti fra A1, A2, B1, B2. Non inserire i nomi dei fighter."
        ],
        "details": "slot rimasti A1/A2/B1/B2, fase TAG/RR, evento speciale, locale/Host/Guest; non raccogliere nomi dei fighter. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-EVT-04",
        "title": "Il comportamento di ESCI cambia dopo la vittoria.",
        "solution": [
          "Durante TAG o RR attivi e durante la pausa, ESCI chiede conferma. Dopo la vittoria definitiva di un match locale torna direttamente alla lobby. Un KO intermedio o un evento speciale non equivale alla conclusione definitiva."
        ],
        "details": "nessuno, salvo comportamento diverso."
      }
    ]
  },
  {
    "id": "cat-16",
    "title": "Multiplayer FDM-RR nativo e compatibile",
    "scope": "FDM-RR",
    "problems": [
      {
        "id": "RR-MP-01",
        "title": "La modalità nativa FDM-RR non mostra la stessa fase sui due dispositivi.",
        "solution": [
          "Attendi il riallineamento senza impartire nuovi comandi. Se Host e Guest restano in fasi diverse, termina la sessione e ricreala. Indica fase, soltanto Team A o Team B come squadra controllata e l'ultima transizione. Non inserire i nomi dei componenti."
        ],
        "details": "Host/Guest, TAG/RR, Team A/B, ultima azione o KO; non raccogliere nomi dei componenti. Indica esclusivamente Team A o Team B e/o gli slot A1, A2, B1, B2 quando pertinenti; non scrivere nomi dei fighter o dei componenti."
      },
      {
        "id": "RR-MP-02",
        "title": "FDM-RR mi chiede di usare l'app Family Deathmatch.",
        "solution": [
          "È il comportamento previsto. Una sessione standard creata da FDM richiede un Guest FDM. Torna alla ricerca e usa Family Deathmatch sul dispositivo Guest, oppure crea la sessione da FDM-RR e collega FDM come Guest compatibile."
        ],
        "details": "nessuno, salvo mancata comparsa dell'avviso o apertura errata di una lobby."
      },
      {
        "id": "RR-MP-03",
        "title": "Non riesco a collegare FDM a un Host FDM-RR.",
        "solution": [
          "Avvia la sessione compatibile da FDM-RR, poi cerca la partita dal dispositivo FDM. Controlla che FDM-RR sia realmente l'Host. Se i dispositivi si trovano ma la lobby non si completa, segui il percorso di sincronizzazione della lobby."
        ],
        "details": "app Host/Guest, versione, fase di arresto, avviso mostrato."
      },
      {
        "id": "RR-MP-04",
        "title": "Host FDM-RR e Guest FDM mostrano un'arena diversa.",
        "solution": [
          "Termina la sessione e verifica che l'arena scelta sia disponibile e riconosciuta su entrambi i dispositivi. Se la differenza riguarda un'arena predefinita o importata con lo stesso nome ma contenuto diverso, indica nome e origine dell'asset."
        ],
        "details": "arena predefinita o importata, app Host/Guest, differenza visiva (senza nomi personali)."
      },
      {
        "id": "RR-MP-05",
        "title": "Il Guest FDM-RR è meno fluido su un dispositivo datato.",
        "solution": [
          "Chiudi registrazione e altre app, completa gli aggiornamenti Android e Google e ricrea la sessione. Se possibile prova a usare il dispositivo più potente come Guest nativo oppure usa il percorso compatibile con FDM quando adatto alla partita desiderata."
        ],
        "details": "modello Host/Guest, Android, nativo/compatibile, registrazione, frequenza del rallentamento."
      }
    ]
  }
];
