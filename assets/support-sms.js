(() => {
  const languages = ['it', 'en', 'fr', 'de', 'es'];
  const languageNames = { it: 'Italiano', en: 'English', fr: 'Français', de: 'Deutsch', es: 'Español' };
  const local = (it, en, fr, de, es) => ({ it, en, fr, de, es });

  const ui = {
    it: {
      eyebrow: 'Assistenza FZO · Guida operativa', title: 'SchoolMasterScan',
      lead: 'Scegli ciò che non funziona, prova la soluzione proposta e registra l’esito. Il percorso conserva anche i problemi risolti, così FZO può migliorare progressivamente l’app e la guida.',
      languageTitle: 'Lingua della guida', privacyTitle: 'Dati minimi.', privacyCopy: 'Non inviare immagini o documenti, password, dati di pagamento o il testo dei documenti scansionati. Puoi registrare l’esito in forma anonima; email e diagnostica testuale sono facoltative.',
      step1: 'Passaggio 1', step2: 'Passaggio 2', step3: 'Passaggio 3', step4: 'Passaggio 4', step5: 'Passaggio 5',
      categoryTitle: 'Che cosa non funziona?', categoryIntro: 'Parti dal sintomo che osservi. Non è necessario conoscere la causa tecnica.',
      solutionTitle: 'Prova questa soluzione.', resolvedQuestion: 'Il problema è stato risolto?', yesResolved: 'Sì, problema risolto', noResolved: 'No, il problema persiste',
      reportTitle: 'Scegli come registrare la segnalazione.', reportIntro: 'La registrazione aiuta FZO a individuare problemi ricorrenti. Nessuna opzione consente allegati.',
      anonymousTitle: 'Anonima', anonymousCopy: 'Nessun indirizzo email; non riceverai una risposta personale.', contactTitle: 'Con richiesta di contatto', contactCopy: 'Puoi lasciare facoltativamente un’email per ricevere una risposta.', betaTitle: 'Beta tester', betaCopy: 'Usa questo percorso se il problema è emerso durante il programma di test.',
      submitTitle: 'Registra l’esito.', summaryLanguage: 'Lingua', summaryCategory: 'Categoria', summaryProblem: 'Problema', summaryOutcome: 'Esito', summaryType: 'Tipo',
      formNote: 'Il modulo ripropone il percorso già seguito e permette di aggiungere soltanto le informazioni tecniche pertinenti. Il registro amministrativo non è pubblico.',
      openForm: 'Apri il modulo di segnalazione', restart: 'Inizia un nuovo percorso', backCategories: 'Torna alle categorie', backProblems: 'Torna ai problemi', backSolution: 'Torna alla soluzione', chooseProblem: 'Scegli il problema.', resolvedLabel: 'Problema risolto', unresolvedLabel: 'Problema non risolto'
    },
    en: {
      eyebrow: 'FZO support · Operating guide', title: 'SchoolMasterScan',
      lead: 'Choose what is not working, try the suggested solution and record the result. Resolved cases are recorded too, helping FZO improve the app and this guide.',
      languageTitle: 'Guide language', privacyTitle: 'Minimum data.', privacyCopy: 'Do not send images or documents, passwords, payment data or text from scanned documents. You may record the result anonymously; email and text diagnostics are optional.',
      step1: 'Step 1', step2: 'Step 2', step3: 'Step 3', step4: 'Step 4', step5: 'Step 5',
      categoryTitle: 'What is not working?', categoryIntro: 'Start from the symptom you can see. You do not need to know the technical cause.',
      solutionTitle: 'Try this solution.', resolvedQuestion: 'Was the problem solved?', yesResolved: 'Yes, problem solved', noResolved: 'No, the problem remains',
      reportTitle: 'Choose how to record the report.', reportIntro: 'Reports help FZO identify recurring issues. Attachments are not accepted.',
      anonymousTitle: 'Anonymous', anonymousCopy: 'No email address; you will not receive a personal reply.', contactTitle: 'Request a reply', contactCopy: 'You may optionally leave an email address for a reply.', betaTitle: 'Beta tester', betaCopy: 'Use this route if the issue occurred during the testing programme.',
      submitTitle: 'Record the result.', summaryLanguage: 'Language', summaryCategory: 'Category', summaryProblem: 'Problem', summaryOutcome: 'Result', summaryType: 'Type',
      formNote: 'The form repeats the route you followed and lets you add only relevant technical information. The administrative register is private.',
      openForm: 'Open the report form', restart: 'Start a new route', backCategories: 'Back to categories', backProblems: 'Back to problems', backSolution: 'Back to the solution', chooseProblem: 'Choose the problem.', resolvedLabel: 'Problem solved', unresolvedLabel: 'Problem not solved'
    },
    fr: {
      eyebrow: 'Assistance FZO · Guide pratique', title: 'SchoolMasterScan',
      lead: 'Choisissez ce qui ne fonctionne pas, essayez la solution proposée et enregistrez le résultat. Les problèmes résolus sont eux aussi consignés afin d’améliorer l’application et le guide.',
      languageTitle: 'Langue du guide', privacyTitle: 'Données minimales.', privacyCopy: 'N’envoyez ni images ni documents, mots de passe, données de paiement ou texte des documents numérisés. Le résultat peut être enregistré anonymement; l’e-mail et le diagnostic textuel sont facultatifs.',
      step1: 'Étape 1', step2: 'Étape 2', step3: 'Étape 3', step4: 'Étape 4', step5: 'Étape 5',
      categoryTitle: 'Qu’est-ce qui ne fonctionne pas?', categoryIntro: 'Partez du symptôme observé. Il n’est pas nécessaire d’en connaître la cause technique.',
      solutionTitle: 'Essayez cette solution.', resolvedQuestion: 'Le problème est-il résolu?', yesResolved: 'Oui, problème résolu', noResolved: 'Non, le problème persiste',
      reportTitle: 'Choisissez comment enregistrer le signalement.', reportIntro: 'Les signalements aident FZO à repérer les problèmes récurrents. Aucune pièce jointe n’est acceptée.',
      anonymousTitle: 'Anonyme', anonymousCopy: 'Aucune adresse e-mail; vous ne recevrez pas de réponse personnelle.', contactTitle: 'Avec demande de contact', contactCopy: 'Vous pouvez laisser une adresse e-mail facultative pour recevoir une réponse.', betaTitle: 'Bêta-testeur', betaCopy: 'Utilisez ce parcours si le problème est apparu pendant le programme de test.',
      submitTitle: 'Enregistrez le résultat.', summaryLanguage: 'Langue', summaryCategory: 'Catégorie', summaryProblem: 'Problème', summaryOutcome: 'Résultat', summaryType: 'Type',
      formNote: 'Le formulaire reprend le parcours suivi et ne demande que les informations techniques utiles. Le registre administratif reste privé.',
      openForm: 'Ouvrir le formulaire', restart: 'Commencer un nouveau parcours', backCategories: 'Retour aux catégories', backProblems: 'Retour aux problèmes', backSolution: 'Retour à la solution', chooseProblem: 'Choisissez le problème.', resolvedLabel: 'Problème résolu', unresolvedLabel: 'Problème non résolu'
    },
    de: {
      eyebrow: 'FZO-Support · Praktische Anleitung', title: 'SchoolMasterScan',
      lead: 'Wähle das Problem, probiere die vorgeschlagene Lösung und erfasse das Ergebnis. Auch gelöste Fälle werden gespeichert, damit FZO App und Anleitung verbessern kann.',
      languageTitle: 'Sprache der Anleitung', privacyTitle: 'Nur notwendige Daten.', privacyCopy: 'Keine Bilder oder Dokumente, Passwörter, Zahlungsdaten oder Texte aus gescannten Dokumenten senden. Das Ergebnis kann anonym erfasst werden; E-Mail und Textdiagnose sind freiwillig.',
      step1: 'Schritt 1', step2: 'Schritt 2', step3: 'Schritt 3', step4: 'Schritt 4', step5: 'Schritt 5',
      categoryTitle: 'Was funktioniert nicht?', categoryIntro: 'Beginne mit dem sichtbaren Symptom. Die technische Ursache musst du nicht kennen.',
      solutionTitle: 'Probiere diese Lösung.', resolvedQuestion: 'Wurde das Problem gelöst?', yesResolved: 'Ja, Problem gelöst', noResolved: 'Nein, Problem besteht weiter',
      reportTitle: 'Wähle die Art der Meldung.', reportIntro: 'Meldungen helfen FZO, wiederkehrende Probleme zu erkennen. Anhänge sind nicht möglich.',
      anonymousTitle: 'Anonym', anonymousCopy: 'Keine E-Mail-Adresse; du erhältst keine persönliche Antwort.', contactTitle: 'Antwort gewünscht', contactCopy: 'Du kannst freiwillig eine E-Mail-Adresse für eine Antwort angeben.', betaTitle: 'Beta-Tester', betaCopy: 'Nutze diesen Weg, wenn das Problem im Testprogramm aufgetreten ist.',
      submitTitle: 'Ergebnis erfassen.', summaryLanguage: 'Sprache', summaryCategory: 'Kategorie', summaryProblem: 'Problem', summaryOutcome: 'Ergebnis', summaryType: 'Art',
      formNote: 'Das Formular übernimmt den gewählten Weg und fragt nur nach relevanten technischen Angaben. Das Verwaltungsregister ist nicht öffentlich.',
      openForm: 'Meldeformular öffnen', restart: 'Neuen Weg beginnen', backCategories: 'Zurück zu den Kategorien', backProblems: 'Zurück zu den Problemen', backSolution: 'Zurück zur Lösung', chooseProblem: 'Problem auswählen.', resolvedLabel: 'Problem gelöst', unresolvedLabel: 'Problem nicht gelöst'
    },
    es: {
      eyebrow: 'Asistencia FZO · Guía operativa', title: 'SchoolMasterScan',
      lead: 'Elige lo que no funciona, prueba la solución propuesta y registra el resultado. También se guardan los casos resueltos para mejorar progresivamente la aplicación y la guía.',
      languageTitle: 'Idioma de la guía', privacyTitle: 'Datos mínimos.', privacyCopy: 'No envíes imágenes o documentos, contraseñas, datos de pago ni texto de documentos escaneados. Puedes registrar el resultado de forma anónima; el correo y el diagnóstico textual son opcionales.',
      step1: 'Paso 1', step2: 'Paso 2', step3: 'Paso 3', step4: 'Paso 4', step5: 'Paso 5',
      categoryTitle: '¿Qué no funciona?', categoryIntro: 'Empieza por el síntoma que observas. No necesitas conocer la causa técnica.',
      solutionTitle: 'Prueba esta solución.', resolvedQuestion: '¿Se ha resuelto el problema?', yesResolved: 'Sí, problema resuelto', noResolved: 'No, el problema continúa',
      reportTitle: 'Elige cómo registrar el aviso.', reportIntro: 'Los avisos ayudan a FZO a detectar problemas recurrentes. No se admiten archivos adjuntos.',
      anonymousTitle: 'Anónimo', anonymousCopy: 'Sin correo electrónico; no recibirás una respuesta personal.', contactTitle: 'Con solicitud de contacto', contactCopy: 'Puedes dejar opcionalmente un correo para recibir respuesta.', betaTitle: 'Beta tester', betaCopy: 'Usa este recorrido si el problema apareció durante el programa de pruebas.',
      submitTitle: 'Registra el resultado.', summaryLanguage: 'Idioma', summaryCategory: 'Categoría', summaryProblem: 'Problema', summaryOutcome: 'Resultado', summaryType: 'Tipo',
      formNote: 'El formulario repite el recorrido seguido y permite añadir solo la información técnica pertinente. El registro administrativo es privado.',
      openForm: 'Abrir el formulario', restart: 'Iniciar otro recorrido', backCategories: 'Volver a las categorías', backProblems: 'Volver a los problemas', backSolution: 'Volver a la solución', chooseProblem: 'Elige el problema.', resolvedLabel: 'Problema resuelto', unresolvedLabel: 'Problema no resuelto'
    }
  };

  const catalog = [
    { id: 'acquisition', label: local('Acquisizione del documento', 'Document capture', 'Acquisition du document', 'Dokument erfassen', 'Captura del documento'), problems: [
      { id: 'partial-scan', title: local('La scansione non comprende tutta la pagina', 'The scan does not include the whole page', 'La numérisation ne comprend pas toute la page', 'Der Scan erfasst nicht die ganze Seite', 'El escaneo no incluye toda la página'), solution: local('Allontana leggermente il dispositivo finché sono visibili tutti e quattro i bordi del foglio, quindi ripeti la scansione. Prima di confermare, controlla il ritaglio proposto.', 'Move the device slightly farther away until all four edges of the sheet are visible, then scan again. Check the proposed crop before confirming.', 'Éloignez légèrement l’appareil jusqu’à voir les quatre bords de la feuille, puis recommencez. Vérifiez le recadrage avant de confirmer.', 'Halte das Gerät etwas weiter weg, bis alle vier Blattränder sichtbar sind, und scanne erneut. Prüfe vor dem Bestätigen den Zuschnitt.', 'Aleja un poco el dispositivo hasta ver los cuatro bordes de la hoja y repite el escaneo. Revisa el recorte antes de confirmar.') },
      { id: 'scanner-unavailable', title: local('Lo scanner non è disponibile', 'The scanner is unavailable', 'Le scanner n’est pas disponible', 'Der Scanner ist nicht verfügbar', 'El escáner no está disponible'), solution: local('Aggiorna Google Play Services e riprova. Lo scanner richiede almeno 1,7 GB di RAM. Se non è supportato, usa Fotografa oppure Galleria.', 'Update Google Play Services and try again. The scanner needs at least 1.7 GB of RAM. If unsupported, use Camera or Gallery.', 'Mettez à jour les services Google Play et réessayez. Le scanner exige au moins 1,7 Go de RAM. Sinon, utilisez Appareil photo ou Galerie.', 'Aktualisiere Google Play-Dienste und versuche es erneut. Der Scanner benötigt mindestens 1,7 GB RAM. Nutze sonst Kamera oder Galerie.', 'Actualiza Servicios de Google Play y vuelve a intentarlo. El escáner necesita al menos 1,7 GB de RAM. Si no es compatible, usa Cámara o Galería.') },
      { id: 'one-page', title: local('Viene acquisita una sola pagina', 'Only one page is captured', 'Une seule page est acquise', 'Es wird nur eine Seite erfasst', 'Solo se captura una página'), solution: local('È il comportamento previsto: SchoolMasterScan lavora su una pagina alla volta. Salva la pagina corrente e ripeti l’acquisizione per le successive.', 'This is expected: SchoolMasterScan works with one page at a time. Save the current page and capture each following page separately.', 'C’est normal: SchoolMasterScan traite une page à la fois. Enregistrez la page courante puis capturez les suivantes séparément.', 'Das ist vorgesehen: SchoolMasterScan bearbeitet jeweils eine Seite. Speichere die aktuelle Seite und erfasse weitere Seiten einzeln.', 'Es el comportamiento previsto: SchoolMasterScan trabaja con una página cada vez. Guarda la actual y captura las siguientes por separado.') },
      { id: 'camera', title: local('Non riesco ad aprire la fotocamera', 'I cannot open the camera', 'Je ne peux pas ouvrir l’appareil photo', 'Die Kamera lässt sich nicht öffnen', 'No puedo abrir la cámara'), solution: local('Concedi a SchoolMasterScan il permesso Fotocamera nelle impostazioni Android. Se non vuoi concederlo o il problema continua, usa Scansiona o Galleria.', 'Allow SchoolMasterScan to use the Camera in Android settings. If you prefer not to, or the issue remains, use Scan or Gallery.', 'Autorisez SchoolMasterScan à utiliser l’appareil photo dans les réglages Android. Sinon, utilisez Scanner ou Galerie.', 'Erlaube SchoolMasterScan den Kamerazugriff in den Android-Einstellungen. Andernfalls nutze Scannen oder Galerie.', 'Concede a SchoolMasterScan el permiso de Cámara en los ajustes de Android. Si no quieres hacerlo o el problema continúa, usa Escanear o Galería.') },
      { id: 'unreadable-image', title: local('L’immagine è illeggibile o il formato non è supportato', 'The image is unreadable or unsupported', 'L’image est illisible ou son format n’est pas pris en charge', 'Das Bild ist unlesbar oder nicht unterstützt', 'La imagen no se puede leer o no es compatible'), solution: local('Riprova ad aprire l’immagine. Se il problema continua, crea una nuova fotografia o scansione oppure salva prima l’immagine in un formato comune.', 'Open the image again. If the issue remains, create a new photo or scan, or save the image in a common format first.', 'Réessayez d’ouvrir l’image. Si le problème persiste, créez une nouvelle photo ou numérisation, ou enregistrez-la d’abord dans un format courant.', 'Öffne das Bild erneut. Bleibt das Problem bestehen, erstelle ein neues Foto oder einen Scan oder speichere das Bild zuerst in einem üblichen Format.', 'Vuelve a abrir la imagen. Si continúa el problema, crea una nueva foto o escaneo, o guarda antes la imagen en un formato común.') }
    ]},
    { id: 'recognition', label: local('Riconoscimento o selezione', 'Recognition or selection', 'Reconnaissance ou sélection', 'Erkennung oder Auswahl', 'Reconocimiento o selección'), problems: [
      { id: 'partial-ocr', title: local('Il testo non viene riconosciuto o è incompleto', 'Text is not recognised or is incomplete', 'Le texte n’est pas reconnu ou reste incomplet', 'Text wird nicht oder nur teilweise erkannt', 'El texto no se reconoce o está incompleto'), solution: local('Ripeti l’acquisizione con un’immagine più nitida e controlla che il testo sia a fuoco. Se usi una fotografia, prova Scansiona.', 'Capture a sharper image and make sure the text is in focus. If you used a photo, try Scan.', 'Refaites l’acquisition avec une image plus nette et du texte bien au point. Si vous avez utilisé une photo, essayez Scanner.', 'Erfasse ein schärferes Bild und achte auf fokussierten Text. Wenn du ein Foto verwendet hast, probiere Scannen.', 'Repite la captura con una imagen más nítida y el texto enfocado. Si usaste una foto, prueba Escanear.') },
      { id: 'select-word', title: local('Non riesco a selezionare la parola corretta', 'I cannot select the correct word', 'Je n’arrive pas à sélectionner le bon mot', 'Das richtige Wort lässt sich nicht auswählen', 'No puedo seleccionar la palabra correcta'), solution: local('Ingrandisci con due dita o fai doppio tocco vicino alla parola, quindi tocca il centro del testo. Puoi rendere visibili i riquadri OCR nelle Impostazioni. Usa ↔ per adattare la vista.', 'Zoom with two fingers or double-tap near the word, then tap the centre of the text. OCR boxes can be shown in Settings. Use ↔ to fit the view.', 'Zoomez avec deux doigts ou touchez deux fois près du mot, puis touchez son centre. Les cadres OCR peuvent être affichés dans les Réglages. Utilisez ↔ pour ajuster la vue.', 'Zoome mit zwei Fingern oder tippe zweimal nahe dem Wort und dann auf die Textmitte. OCR-Rahmen lassen sich in den Einstellungen anzeigen. ↔ passt die Ansicht an.', 'Amplía con dos dedos o toca dos veces cerca de la palabra y luego su centro. Puedes mostrar los cuadros OCR en Ajustes. Usa ↔ para ajustar la vista.') },
      { id: 'group', title: local('Non riesco a raggruppare più parole', 'I cannot group several words', 'Je n’arrive pas à regrouper plusieurs mots', 'Mehrere Wörter lassen sich nicht gruppieren', 'No puedo agrupar varias palabras'), solution: local('Seleziona la prima parola, premi Gruppo e tocca l’ultima. Le parole devono appartenere alla stessa riga OCR e non essere già incluse in un’altra correzione.', 'Select the first word, press Group and tap the last one. All words must be on the same OCR line and not already used by another correction.', 'Sélectionnez le premier mot, appuyez sur Groupe puis touchez le dernier. Tous les mots doivent être sur la même ligne OCR et ne pas appartenir à une autre correction.', 'Wähle das erste Wort, tippe auf Gruppe und dann auf das letzte. Alle Wörter müssen in derselben OCR-Zeile liegen und dürfen nicht schon Teil einer Korrektur sein.', 'Selecciona la primera palabra, pulsa Grupo y toca la última. Todas deben estar en la misma línea OCR y no pertenecer ya a otra corrección.') }
    ]},
    { id: 'editing', label: local('Correzioni e interfaccia', 'Corrections and interface', 'Corrections et interface', 'Korrekturen und Oberfläche', 'Correcciones e interfaz'), problems: [
      { id: 'position', title: local('La scritta non è nella posizione desiderata', 'The text is in the wrong position', 'Le texte n’est pas à la position souhaitée', 'Der Text steht an der falschen Stelle', 'El texto no está en la posición deseada'), solution: local('Seleziona di nuovo la correzione e scegli Sopra, Sotto, Sinistra, Destra o Margine invece di Auto. Usa le quattro frecce di Sposta testo per rifinire la posizione.', 'Select the correction again and choose Above, Below, Left, Right or Margin instead of Auto. Use the four Move text arrows for fine adjustment.', 'Sélectionnez à nouveau la correction et choisissez Haut, Bas, Gauche, Droite ou Marge au lieu d’Auto. Utilisez les quatre flèches Déplacer le texte.', 'Wähle die Korrektur erneut und statt Auto Oben, Unten, Links, Rechts oder Rand. Nutze die vier Pfeile unter Text verschieben zur Feinjustierung.', 'Selecciona de nuevo la corrección y elige Arriba, Abajo, Izquierda, Derecha o Margen en vez de Auto. Ajusta con las cuatro flechas de Mover texto.') },
      { id: 'auto', title: local('La posizione Auto produce un risultato anomalo', 'Auto positioning gives an unusual result', 'La position Auto donne un résultat anormal', 'Die Auto-Position liefert ein ungewöhnliches Ergebnis', 'La posición Auto produce un resultado anómalo'), solution: local('Sostituisci Auto con una posizione esplicita e usa Sposta testo. Se il problema persiste, descrivi nel modulo il risultato e la posizione scelta.', 'Replace Auto with an explicit position and use Move text. If the issue remains, describe the result and selected position in the form.', 'Remplacez Auto par une position explicite et utilisez Déplacer le texte. Si le problème persiste, décrivez le résultat et la position choisie.', 'Ersetze Auto durch eine feste Position und nutze Text verschieben. Bleibt das Problem bestehen, beschreibe Ergebnis und gewählte Position im Formular.', 'Sustituye Auto por una posición concreta y usa Mover texto. Si continúa el problema, describe el resultado y la posición elegida en el formulario.') },
      { id: 'sign-only', title: local('Voglio applicare un segno senza aggiungere una scritta', 'I want a mark without adding text', 'Je veux ajouter un signe sans texte', 'Ich möchte nur ein Zeichen ohne Text', 'Quiero aplicar una marca sin añadir texto'), solution: local('Lascia vuoto il campo della scritta. Quando premi Salva o Condividi, conferma di voler continuare senza testo.', 'Leave the text field empty. When you press Save or Share, confirm that you want to continue without text.', 'Laissez le champ de texte vide. Lorsque vous appuyez sur Enregistrer ou Partager, confirmez que vous souhaitez continuer sans texte.', 'Lasse das Textfeld leer. Bestätige bei Speichern oder Teilen, dass du ohne Text fortfahren möchtest.', 'Deja vacío el campo de texto. Al pulsar Guardar o Compartir, confirma que quieres continuar sin texto.') },
      { id: 'disabled-controls', title: local('I comandi di correzione sono disattivati', 'Correction controls are disabled', 'Les commandes de correction sont désactivées', 'Die Korrekturbefehle sind deaktiviert', 'Los controles de corrección están desactivados'), solution: local('Attendi il completamento del riconoscimento e tocca una parola. Se non compare alcuna parola selezionabile, ripeti l’acquisizione con un’immagine più nitida.', 'Wait for recognition to finish and tap a word. If no selectable word appears, capture a sharper image.', 'Attendez la fin de la reconnaissance puis touchez un mot. Si aucun mot n’est sélectionnable, refaites l’acquisition avec une image plus nette.', 'Warte bis die Erkennung fertig ist und tippe auf ein Wort. Wenn kein Wort auswählbar ist, erfasse ein schärferes Bild.', 'Espera a que termine el reconocimiento y toca una palabra. Si no aparece ninguna seleccionable, repite la captura con una imagen más nítida.') },
      { id: 'keyboard', title: local('La tastiera copre o sposta i comandi', 'The keyboard covers or moves controls', 'Le clavier masque ou déplace les commandes', 'Die Tastatur verdeckt oder verschiebt Bedienelemente', 'El teclado tapa o desplaza los controles'), solution: local('Chiudi la tastiera con Fine o con il tasto Indietro di Android. Se il problema continua, nel modulo indica dispositivo, Android e tastiera utilizzata.', 'Close the keyboard with Done or Android Back. If the issue remains, enter the device, Android version and keyboard used in the form.', 'Fermez le clavier avec Terminé ou Retour d’Android. Si le problème persiste, indiquez dans le formulaire l’appareil, la version Android et le clavier.', 'Schließe die Tastatur mit Fertig oder Android-Zurück. Bleibt das Problem, gib im Formular Gerät, Android-Version und Tastatur an.', 'Cierra el teclado con Hecho o Atrás de Android. Si continúa, indica en el formulario el dispositivo, la versión de Android y el teclado.') }
    ]},
    { id: 'output', label: local('Salvataggio e condivisione', 'Saving and sharing', 'Enregistrement et partage', 'Speichern und Teilen', 'Guardado y uso compartido'), problems: [
      { id: 'saved-file', title: local('Non trovo l’immagine salvata', 'I cannot find the saved image', 'Je ne trouve pas l’image enregistrée', 'Das gespeicherte Bild ist nicht auffindbar', 'No encuentro la imagen guardada'), solution: local('Salva crea un JPEG nella raccolta immagini, normalmente in Pictures/SCHOOLMASTERSCAN. Cercalo nella Galleria o nell’app File.', 'Save creates a JPEG in the image collection, normally in Pictures/SCHOOLMASTERSCAN. Look in Gallery or the Files app.', 'Enregistrer crée un JPEG dans la collection d’images, normalement dans Pictures/SCHOOLMASTERSCAN. Cherchez-le dans Galerie ou Fichiers.', 'Speichern erstellt ein JPEG in der Bildsammlung, normalerweise unter Pictures/SCHOOLMASTERSCAN. Suche in Galerie oder Dateien.', 'Guardar crea un JPEG en la colección de imágenes, normalmente en Pictures/SCHOOLMASTERSCAN. Búscalo en Galería o Archivos.') },
      { id: 'shared-file', title: local('Dopo Condividi non compare una nuova immagine in Galleria', 'Share does not create an image in Gallery', 'Partager ne crée pas d’image dans la Galerie', 'Teilen erstellt kein Bild in der Galerie', 'Compartir no crea una imagen en Galería'), solution: local('È previsto: Condividi usa una copia temporanea e non salva automaticamente in Galleria. Usa anche Salva se vuoi conservare il risultato.', 'This is expected: Share uses a temporary copy and does not save to Gallery. Use Save too if you want to keep the result.', 'C’est normal: Partager utilise une copie temporaire et ne l’enregistre pas dans la Galerie. Utilisez aussi Enregistrer pour conserver le résultat.', 'Das ist vorgesehen: Teilen nutzt eine temporäre Kopie und speichert nicht in der Galerie. Nutze zusätzlich Speichern, wenn du das Ergebnis behalten willst.', 'Es normal: Compartir usa una copia temporal y no guarda en Galería. Usa también Guardar si quieres conservar el resultado.') },
      { id: 'save-failed', title: local('Non riesco a salvare l’immagine', 'I cannot save the image', 'Je ne peux pas enregistrer l’image', 'Das Bild lässt sich nicht speichern', 'No puedo guardar la imagen'), solution: local('Controlla lo spazio libero e riprova. Su Android 9 o precedenti verifica il permesso di scrittura. Se necessario usa Condividi per trasferire temporaneamente il risultato.', 'Check free space and try again. On Android 9 or earlier, check storage permission. If needed, use Share to transfer the result temporarily.', 'Vérifiez l’espace libre et réessayez. Sous Android 9 ou antérieur, vérifiez l’autorisation de stockage. Utilisez au besoin Partager pour transférer temporairement le résultat.', 'Prüfe den freien Speicher und versuche es erneut. Unter Android 9 oder älter prüfe die Speicherberechtigung. Nutze bei Bedarf Teilen für eine vorübergehende Übertragung.', 'Comprueba el espacio libre y vuelve a intentarlo. En Android 9 o anterior, revisa el permiso de almacenamiento. Si es necesario, usa Compartir para transferir temporalmente el resultado.') },
      { id: 'unsaved', title: local('Compare l’avviso sulle modifiche non salvate', 'A warning about unsaved changes appears', 'Un avertissement signale des modifications non enregistrées', 'Eine Warnung zu ungespeicherten Änderungen erscheint', 'Aparece un aviso sobre cambios sin guardar'), solution: local('Per conservare il lavoro scegli Resta qui e usa prima Salva o Condividi. Scegli Continua senza salvare soltanto se vuoi abbandonare le correzioni.', 'To keep your work choose Stay here, then Save or Share. Choose Continue without saving only if you want to discard the corrections.', 'Pour conserver le travail, choisissez Rester ici puis Enregistrer ou Partager. Choisissez Continuer sans enregistrer uniquement pour abandonner les corrections.', 'Wähle Hier bleiben und dann Speichern oder Teilen, um die Arbeit zu behalten. Ohne Speichern fortfahren verwirft die Korrekturen.', 'Para conservar el trabajo, elige Quedarme aquí y usa Guardar o Compartir. Elige Continuar sin guardar solo si quieres descartar las correcciones.') }
    ]},
    { id: 'settings', label: local('Impostazioni o Premium', 'Settings or Premium', 'Réglages ou Premium', 'Einstellungen oder Premium', 'Ajustes o Premium'), problems: [
      { id: 'language', title: local('Voglio cambiare la lingua dell’app', 'I want to change the app language', 'Je veux changer la langue de l’application', 'Ich möchte die App-Sprache ändern', 'Quiero cambiar el idioma de la aplicación'), solution: local('Apri le Impostazioni, scegli Italiano, English, Français, Deutsch o Español e torna alla Home. La scelta resta memorizzata.', 'Open Settings, choose Italiano, English, Français, Deutsch or Español, then return Home. The choice is saved.', 'Ouvrez les Réglages, choisissez Italiano, English, Français, Deutsch ou Español, puis revenez à l’accueil. Le choix est mémorisé.', 'Öffne die Einstellungen, wähle Italiano, English, Français, Deutsch oder Español und kehre zur Startseite zurück. Die Auswahl bleibt gespeichert.', 'Abre Ajustes, elige Italiano, English, Français, Deutsch o Español y vuelve a Inicio. La elección queda guardada.') },
      { id: 'reset', title: local('Voglio ripristinare le impostazioni iniziali', 'I want to restore default settings', 'Je veux rétablir les réglages initiaux', 'Ich möchte die Standardeinstellungen wiederherstellen', 'Quiero restaurar los ajustes iniciales'), solution: local('Apri Impostazioni e scegli Ripristina impostazioni predefinite. Il ripristino non elimina i JPEG già salvati nella Galleria.', 'Open Settings and choose Restore default settings. This does not delete JPEG files already saved in Gallery.', 'Ouvrez les Réglages et choisissez Rétablir les réglages par défaut. Les JPEG déjà enregistrés dans la Galerie ne sont pas supprimés.', 'Öffne die Einstellungen und wähle Standardeinstellungen wiederherstellen. Bereits in der Galerie gespeicherte JPEGs werden nicht gelöscht.', 'Abre Ajustes y elige Restaurar ajustes predeterminados. No se eliminan los JPEG ya guardados en Galería.') },
      { id: 'premium', title: local('Ho acquistato Premium ma Bianchetto non è disponibile', 'I bought Premium but White-out is unavailable', 'J’ai acheté Premium mais le Correcteur blanc est indisponible', 'Premium wurde gekauft, aber Weißabdeckung fehlt', 'He comprado Premium pero el Corrector blanco no está disponible'), solution: local('Controlla lo stato Premium nelle Impostazioni, l’account Google Play usato per l’acquisto e la connessione. Torna alle Impostazioni per un nuovo controllo. Non inviare password o dati di pagamento.', 'Check Premium status in Settings, the Google Play account used for purchase and the connection. Return to Settings for another check. Do not send passwords or payment details.', 'Vérifiez l’état Premium dans les Réglages, le compte Google Play utilisé et la connexion. Revenez aux Réglages pour une nouvelle vérification. N’envoyez ni mot de passe ni donnée de paiement.', 'Prüfe den Premium-Status in den Einstellungen, das beim Kauf verwendete Google-Play-Konto und die Verbindung. Öffne die Einstellungen erneut. Keine Passwörter oder Zahlungsdaten senden.', 'Comprueba el estado Premium en Ajustes, la cuenta de Google Play usada para comprar y la conexión. Vuelve a Ajustes para otra comprobación. No envíes contraseñas ni datos de pago.') }
    ]},
    { id: 'crash', label: local('Arresto anomalo', 'Unexpected closure', 'Arrêt anormal', 'Unerwartetes Beenden', 'Cierre inesperado'), problems: [
      { id: 'crash', title: local('SchoolMasterScan si è chiusa improvvisamente', 'SchoolMasterScan closed unexpectedly', 'SchoolMasterScan s’est fermée brusquement', 'SchoolMasterScan wurde unerwartet beendet', 'SchoolMasterScan se cerró inesperadamente'), solution: local('Riapri l’app e ripeti una sola volta l’operazione. Se l’arresto si ripresenta, registra versione dell’app, dispositivo, Android e ultima operazione. Aggiungi la diagnostica testuale soltanto se richiesta.', 'Reopen the app and repeat the action once. If it happens again, record app version, device, Android and the last action. Add text diagnostics only when requested.', 'Rouvrez l’application et répétez l’action une seule fois. Si l’arrêt se reproduit, indiquez version, appareil, Android et dernière action. Ajoutez le diagnostic textuel uniquement sur demande.', 'Öffne die App erneut und wiederhole den Vorgang einmal. Tritt der Absturz erneut auf, erfasse App-Version, Gerät, Android und letzte Aktion. Textdiagnose nur auf Anfrage hinzufügen.', 'Abre de nuevo la aplicación y repite una vez la operación. Si vuelve a cerrarse, registra versión, dispositivo, Android y última acción. Añade el diagnóstico textual solo si se solicita.') }
    ]},
    { id: 'other', label: local('Altro problema o modifica', 'Other issue or change', 'Autre problème ou modification', 'Anderes Problem oder Änderung', 'Otro problema o modificación'), problems: [
      { id: 'not-listed', direct: true, title: local('Il mio problema non è nell’elenco', 'My issue is not listed', 'Mon problème ne figure pas dans la liste', 'Mein Problem steht nicht in der Liste', 'Mi problema no aparece en la lista'), solution: local('Non è ancora disponibile una soluzione guidata. Registra una descrizione breve e la categoria più vicina, senza allegare documenti o immagini.', 'No guided solution is available yet. Record a short description and the closest category, without attaching documents or images.', 'Aucune solution guidée n’est encore disponible. Enregistrez une brève description et la catégorie la plus proche, sans joindre de document ni d’image.', 'Noch ist keine geführte Lösung verfügbar. Erfasse eine kurze Beschreibung und die passendste Kategorie, ohne Dokumente oder Bilder anzuhängen.', 'Todavía no hay una solución guiada. Registra una descripción breve y la categoría más cercana, sin adjuntar documentos ni imágenes.') },
      { id: 'change-request', direct: true, title: local('Voglio proporre una modifica o un miglioramento', 'I want to suggest a change or improvement', 'Je veux proposer une modification ou une amélioration', 'Ich möchte eine Änderung oder Verbesserung vorschlagen', 'Quiero proponer un cambio o una mejora'), solution: local('Descrivi in modo breve la modifica desiderata e il risultato atteso. Non inserire dati personali o contenuti dei documenti.', 'Briefly describe the requested change and expected result. Do not include personal data or document contents.', 'Décrivez brièvement la modification souhaitée et le résultat attendu. N’insérez aucune donnée personnelle ni contenu de document.', 'Beschreibe kurz die gewünschte Änderung und das erwartete Ergebnis. Keine personenbezogenen Daten oder Dokumentinhalte eingeben.', 'Describe brevemente el cambio deseado y el resultado esperado. No incluyas datos personales ni contenido de documentos.') }
    ]}
  ];

  const formBase = 'https://docs.google.com/forms/d/e/1FAIpQLSftVyOxPCkRvXG8INtcotOXPzhqJ3DJVwGtU2ZY8lw6SFe6ZA/viewform';
  const entryIds = {
    outcome: 'entry.1633846683', language: 'entry.180276640', category: 'entry.723478191',
    problem: 'entry.954489350', solution: 'entry.859553276', source: 'entry.1171516139'
  };
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get('lang');
  const storedLanguage = sessionStorage.getItem('fzoSupportLanguage');
  const state = {
    language: languages.includes(requestedLanguage) ? requestedLanguage : languages.includes(storedLanguage) ? storedLanguage : 'it',
    category: null, problem: null, outcome: '', source: ''
  };

  const steps = [...document.querySelectorAll('[data-sms-step]')];
  const categoriesTarget = document.querySelector('[data-sms-categories]');
  const problemsTarget = document.querySelector('[data-sms-problems]');
  const formLink = document.querySelector('[data-sms-form-link]');

  const text = (value) => value[state.language] || value.it;
  const showStep = (name, scroll = true) => {
    steps.forEach((step) => { step.hidden = step.dataset.smsStep !== name; });
    if (scroll) document.querySelector(`[data-sms-step="${name}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const applyLanguage = () => {
    document.documentElement.lang = state.language;
    sessionStorage.setItem('fzoSupportLanguage', state.language);
    params.set('lang', state.language);
    history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      const value = ui[state.language][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    document.querySelectorAll('[data-sms-language]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.smsLanguage === state.language)));
    renderCategories();
    showStep('category', false);
  };

  const renderCategories = () => {
    categoriesTarget.replaceChildren(...catalog.map((category) => {
      const button = document.createElement('button');
      button.className = 'sms-category-card';
      button.type = 'button';
      button.dataset.categoryId = category.id;
      button.innerHTML = `<strong>${text(category.label)}</strong><span>${category.problems.length}</span>`;
      return button;
    }));
  };

  const selectCategory = (id) => {
    state.category = catalog.find((category) => category.id === id);
    state.problem = null;
    document.querySelector('[data-sms-problem-heading]').textContent = `${ui[state.language].chooseProblem} ${text(state.category.label)}`;
    problemsTarget.replaceChildren(...state.category.problems.map((problem) => {
      const button = document.createElement('button');
      button.className = 'sms-problem-button';
      button.type = 'button';
      button.dataset.problemId = problem.id;
      button.textContent = text(problem.title);
      return button;
    }));
    showStep('problem');
  };

  const selectProblem = (id) => {
    state.problem = state.category.problems.find((problem) => problem.id === id);
    state.outcome = '';
    state.source = '';
    document.querySelector('[data-sms-selected-problem]').textContent = text(state.problem.title);
    document.querySelector('[data-sms-solution]').textContent = text(state.problem.solution);
    if (state.problem.direct) {
      state.outcome = 'Problema non risolto';
      showStep('report');
    } else showStep('solution');
  };

  const buildFormUrl = () => {
    if (formBase.startsWith('FORM_')) return '#modulo-non-pubblicato';
    const url = new URL(formBase);
    url.searchParams.set('usp', 'pp_url');
    url.searchParams.set(entryIds.outcome, state.outcome);
    url.searchParams.set(entryIds.language, languageNames[state.language]);
    url.searchParams.set(entryIds.category, text(state.category.label));
    url.searchParams.set(entryIds.problem, text(state.problem.title));
    url.searchParams.set(entryIds.solution, text(state.problem.solution));
    url.searchParams.set(entryIds.source, state.source);
    return url.toString();
  };

  const renderSummary = () => {
    const summary = {
      language: languageNames[state.language], category: text(state.category.label), problem: text(state.problem.title),
      outcome: state.outcome === 'Problema risolto' ? ui[state.language].resolvedLabel : ui[state.language].unresolvedLabel,
      source: state.source
    };
    Object.entries(summary).forEach(([key, value]) => {
      const target = document.querySelector(`[data-summary="${key}"]`);
      if (target) target.textContent = value;
    });
    formLink.href = buildFormUrl();
    showStep('submit');
  };

  document.addEventListener('click', (event) => {
    const languageButton = event.target.closest('[data-sms-language]');
    if (languageButton) { state.language = languageButton.dataset.smsLanguage; state.category = null; state.problem = null; applyLanguage(); return; }
    const categoryButton = event.target.closest('[data-category-id]');
    if (categoryButton) { selectCategory(categoryButton.dataset.categoryId); return; }
    const problemButton = event.target.closest('[data-problem-id]');
    if (problemButton) { selectProblem(problemButton.dataset.problemId); return; }
    const resolvedButton = event.target.closest('[data-sms-resolved]');
    if (resolvedButton) {
      state.outcome = resolvedButton.dataset.smsResolved === 'yes' ? 'Problema risolto' : 'Problema non risolto';
      if (state.outcome === 'Problema risolto') { state.source = 'Anonima'; renderSummary(); }
      else showStep('report');
      return;
    }
    const sourceButton = event.target.closest('[data-sms-source]');
    if (sourceButton) { state.source = sourceButton.dataset.smsSource; renderSummary(); return; }
    const backButton = event.target.closest('[data-sms-back]');
    if (backButton) { showStep(backButton.dataset.smsBack); return; }
    if (event.target.closest('[data-sms-restart]')) { state.category = null; state.problem = null; state.outcome = ''; state.source = ''; showStep('category'); }
  });

  applyLanguage();
})();
