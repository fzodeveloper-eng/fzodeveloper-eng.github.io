# FZO GitHub Pages

## 2026-11-15 — Correzione mobile FDM e regola editoriale Asset

Corretta la testata della main Family Deathmatch sui telefoni: titolo, testo e pulsanti restano entro la cornice anche sui viewport stretti. Le raccolte Combattenti e Arene adottano ora una carta più vissuta, con grana, leggere macchie, variazioni di tono e ombreggiatura interna ottenute senza introdurre nuove immagini esterne.

La testata dell'edizione inaugurale dei combattenti resta invariata. Per gli aggiornamenti successivi, il nuovo combattente sarà inserito in apertura con classe editoriale `featured`, titolo e testo personalizzati; all'uscita seguente rientrerà nella griglia ordinaria. La stessa convenzione vale per le nuove arene. In questo modo il giornale conserva la propria prima edizione e non richiede la riscrittura dei testi storici a ogni caricamento.

## 2026-11-15 — Asset gratuiti Family Deathmatch

Pubblicata la raccolta permanente `/family-deathmatch/asset/`, destinata al futuro comando **Asset scaricabili** di Family Deathmatch e Family Deathmatch Rissa Reale. Il flusso resta volutamente manuale: download dal sito e importazione dall'app mediante il selettore file Android; non è stata introdotta alcuna importazione diretta dal browser.

La prima edizione comprende quattro combattenti nativi `.fdmcombattente` — Zio Peppino, Mario R, Zia Adelina e Antonella R — e due arene `.fdmarena` — Cartoon Kitchen e Arena Wrestling. I pacchetti sono dichiarati compatibili con entrambe le app. Per ogni asset sono disponibili una pagina dedicata, l'anteprima, le istruzioni brevi, il download versionato e l'impronta SHA-256.

Le raccolte `/family-deathmatch/asset/combattenti/` e `/family-deathmatch/asset/arene/` adottano una grafica da giornale sportivo anni Settanta, verificata anche su schermo mobile. Le arene sono state confezionate secondo il formato di esportazione definito dal codice corrente delle app (`archiveVersion 3`, manifest arena `schemaVersion 2`); la struttura degli archivi e la decodifica delle immagini sono state validate staticamente. L'importazione su dispositivo reale resta da collaudare. Nessun codice Android è stato modificato.

## 2026-11-08 — Termini d'uso Versione 1.0

Pubblicati i Termini d'uso italiani specifici di Family Deathmatch, Family Deathmatch Rissa Reale e SchoolMasterScan. Gli URL preesistenti `/family-deathmatch/termini/` e `/schoolmasterscan/termini/` restano stabili e diventano hub linguistici.

Il percorso FDM usa `/family-deathmatch/termini/it/` come selettore dell'applicazione e due pagine distinte per i documenti FDM e FDM-RR. SchoolMasterScan pubblica la versione italiana in `/schoolmasterscan/termini/it/`; i percorsi `en`, `fr`, `de` ed `es` sono predisposti come pagine WiP con l'asset giradischi fino alla consegna delle traduzioni.

Nei tre testi la sola dicitura di stato è stata aggiornata da `Bozza 1.0` a `Versione 1.0`; il restante contenuto legale è stato riportato senza modifiche.

## 2026-11-07 — Assistenza e segnalazioni · collaudo

Nuova sezione pubblica `/support/` con scelta della lingua e dell'applicazione. Le pagine di assistenza di Family Deathmatch, FDM Rissa Reale e SchoolMasterScan restano esplicitamente WiP e utilizzano l'asset giradischi.

Il percorso `/support/altre-app/` è un ambiente dimostrativo protetto da codice temporaneo, escluso dall'indicizzazione e collegato a un Google Form riservato all'account FZO. Il modulo e il foglio collegato sono separati dalla futura infrastruttura operativa e devono contenere esclusivamente dati fittizi.

## 2026-11-04 — Pubblicazione iniziale v1.0

Stato previsto: **pubblico tramite GitHub Pages dopo il commit e l'attivazione esplicita**.

Pagine con indirizzo permanente:

- `/privacy/`: Informativa sulla privacy comune a Family Deathmatch e Family Deathmatch Rissa Reale.
- `/family-deathmatch/guida/`: guida provvisoria Family Deathmatch.
- `/family-deathmatch-rissa-reale/guida/`: guida provvisoria Family Deathmatch Rissa Reale.

La Privacy Policy riproduce il testo fornito nel brief di pubblicazione del 4 novembre 2026. Le guide sono volutamente indicate come “Work in progress”. Non sono state apportate modifiche alle applicazioni Android.

## Cronologia precedente — bozza locale 2026-11-03

La prima bozza locale aveva predisposto Home, contenitori non pubblicabili per Privacy e Termini e due strutture di guida. La versione iniziale pubblicabile sostituisce i segnaposto richiesti dal nuovo brief; la pagina Termini resta esclusa finché non viene fornito un testo validato.
