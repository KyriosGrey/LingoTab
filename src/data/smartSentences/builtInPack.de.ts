// Built-in sentences pack — available out-of-the-box
// Structure matches the Pack type from packValidator.ts
import type { Pack } from '@/utils/packValidator'

export const builtInPack: Pack = {
  "count": 100,
  "settings": {
    "level": "Mixed",
    "grammarFocus": ["Mixed Grammar"],
    "topics": ["General"],
    "lengthWords": [4, 15],
    "targetLang": "de"
  },
  "sentences": [
    {
    id: "1",
    text: "This is my book, and that one is yours.",
    translation: "Das ist mein Buch, und das da ist deins.",
    hint: {
      sentenceWithBlank: "This is my book, and that one is [____].",
      options: [
        { text: "yours", isCorrect: true, explanation: "Die absolute Form des Possessivpronomens – sie steht allein, ohne nachfolgendes Substantiv." },
        { text: "your", isCorrect: false, explanation: "Diese Form verlangt ein Substantiv nach sich (your book)." },
        { text: "you", isCorrect: false, explanation: "Ein Personalpronomen, kein Possessivpronomen." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "2",
    text: "He gave her his car because hers was broken.",
    translation: "Er gab ihr sein Auto, weil ihres kaputt war.",
    hint: {
      sentenceWithBlank: "He gave her his car because [____] was broken.",
      options: [
        { text: "hers", isCorrect: true, explanation: "Die absolute Form des Possessivpronomens ersetzt hier 'her car'." },
        { text: "her", isCorrect: false, explanation: "Diese Form verlangt ein Substantiv nach sich (her car)." },
        { text: "she", isCorrect: false, explanation: "Personalpronomen (sie) – es drückt keinen Besitz aus." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "3",
    text: "We did it ourselves without any help.",
    translation: "Wir haben es ganz ohne fremde Hilfe selbst gemacht.",
    hint: {
      sentenceWithBlank: "We [____] [____] ourselves without any help.",
      options: [
        { text: "did it", isCorrect: true, explanation: "Korrekte Vergangenheitsform von 'do' zusammen mit dem Pronomen 'it'." },
        { text: "do it", isCorrect: false, explanation: "Das Verb steht im Präsens, der Satz spricht aber von der Vergangenheit." },
        { text: "made it", isCorrect: false, explanation: "'Make' bedeutet 'herstellen', 'do' dagegen 'eine Handlung ausführen'." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "4",
    text: "Is there anybody in the office?",
    translation: "Ist jemand im Büro?",
    hint: {
      sentenceWithBlank: "[____] there anybody in the office?",
      options: [
        { text: "Is", isCorrect: true, explanation: "Das Verb 'to be' im Singular für die Konstruktion there is/are mit 'anybody'." },
        { text: "Are", isCorrect: false, explanation: "Diese Form wird für den Plural verwendet." },
        { text: "Does", isCorrect: false, explanation: "In der Konstruktion there is/are kommt 'does' nicht vor." }
      ]
    },
    tense: "Present Simple",
    topic: "Workplace",
    lengthWords: 6
  },
  {
    id: "5",
    text: "Nobody told me about the changes.",
    translation: "Niemand hat mir von den Änderungen erzählt.",
    hint: {
      sentenceWithBlank: "Nobody [____] me about the changes.",
      options: [
        { text: "told", isCorrect: true, explanation: "Bejahte Verbform im Past Simple. Die Verneinung steckt bereits in 'Nobody'." },
        { text: "didn't tell", isCorrect: false, explanation: "Im Englischen gibt es keine doppelte Verneinung (Nobody + didn't)." },
        { text: "said", isCorrect: false, explanation: "'Say' steht nicht direkt mit einem Objekt (me), sondern verlangt die Präposition 'to'." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "6",
    text: "This is the building whose roof was damaged.",
    translation: "Das ist das Gebäude, dessen Dach beschädigt wurde.",
    hint: {
      sentenceWithBlank: "This is the building [____] roof was damaged.",
      options: [
        { text: "whose", isCorrect: true, explanation: "Relativpronomen, das Besitz oder Zugehörigkeit ausdrückt (dessen, deren)." },
        { text: "who", isCorrect: false, explanation: "'Who' bedeutet 'wer' und nicht 'dessen/deren'." },
        { text: "which", isCorrect: false, explanation: "'Which' (welcher, der) drückt keine Zugehörigkeit aus." }
      ]
    },
    tense: "Passive Voice",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "7",
    text: "Give it to him, not to them.",
    translation: "Gib es ihm, nicht ihnen.",
    hint: {
      sentenceWithBlank: "Give it to him, not to [____].",
      options: [
        { text: "them", isCorrect: true, explanation: "Objektform des Pronomens 'they' (ihnen, sie)." },
        { text: "their", isCorrect: false, explanation: "Possessivpronomen (ihr) – es verlangt ein Substantiv nach sich." },
        { text: "they", isCorrect: false, explanation: "Subjektform (sie) – sie steht als Subjekt des Satzes." }
      ]
    },
    tense: "Imperative",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "8",
    text: "Both of them are busy right now.",
    translation: "Die beiden sind gerade beschäftigt.",
    hint: {
      sentenceWithBlank: "[____] of them are busy right now.",
      options: [
        { text: "Both", isCorrect: true, explanation: "Bedeutet 'beide' – der eine wie der andere." },
        { text: "All", isCorrect: false, explanation: "'All' (alle) verwendet man ab drei Personen oder Dingen." },
        { text: "Either", isCorrect: false, explanation: "'Either' (einer von beiden) verlangt das Verb im Singular." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "9",
    text: "Neither of the options is perfect.",
    translation: "Keine der beiden Möglichkeiten ist perfekt.",
    hint: {
      sentenceWithBlank: "[____] of the options is perfect.",
      options: [
        { text: "Neither", isCorrect: true, explanation: "Bedeutet 'keiner von beiden'." },
        { text: "None", isCorrect: false, explanation: "'None' verwendet man bei drei oder mehr Möglichkeiten." },
        { text: "Both", isCorrect: false, explanation: "Bedeutet 'beide' und verlangt das Verb im Plural (are)." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "10",
    text: "Each component has its own function.",
    translation: "Jede Komponente hat ihre eigene Funktion.",
    hint: {
      sentenceWithBlank: "Each component [____] its own function.",
      options: [
        { text: "has", isCorrect: true, explanation: "'Each' (jeder) steht immer mit dem Verb im Singular." },
        { text: "have", isCorrect: false, explanation: "Diese Form wird für den Plural verwendet." },
        { text: "having", isCorrect: false, explanation: "Gerundium bzw. Partizip; hier wird ein finites Prädikat gebraucht." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "11",
    text: "She usually goes to work by bus, but today she is driving.",
    translation: "Normalerweise fährt sie mit dem Bus zur Arbeit, aber heute nimmt sie das Auto.",
    hint: {
      sentenceWithBlank: "She usually goes to work by bus, but today she [____] [____].",
      options: [
        { text: "is driving", isCorrect: true, explanation: "Das Present Continuous zeigt eine vorübergehende Handlung, die genau heute stattfindet." },
        { text: "drives", isCorrect: false, explanation: "Das Present Simple steht für regelmäßige Handlungen (usually)." },
        { text: "driving", isCorrect: false, explanation: "Das Hilfsverb 'is' fehlt." }
      ]
    },
    tense: "Present Continuous",
    topic: "Daily Life",
    lengthWords: 12
  },
  {
    id: "12",
    text: "Water boils at 100 degrees Celsius.",
    translation: "Wasser kocht bei 100 Grad Celsius.",
    hint: {
      sentenceWithBlank: "Water [____] at 100 degrees Celsius.",
      options: [
        { text: "boils", isCorrect: true, explanation: "Das Present Simple verwendet man für allgemein bekannte Tatsachen und Naturgesetze." },
        { text: "is boiling", isCorrect: false, explanation: "Das Present Continuous beschreibt eine Handlung im Moment, keine allgemeine Tatsache." },
        { text: "boiled", isCorrect: false, explanation: "Das Past Simple steht für Handlungen in der Vergangenheit." }
      ]
    },
    tense: "Present Simple",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "13",
    text: "Does he know where the keys are?",
    translation: "Weiß er, wo die Schlüssel sind?",
    hint: {
      sentenceWithBlank: "[____] he know where the keys are?",
      options: [
        { text: "Does", isCorrect: true, explanation: "Hilfsverb des Present Simple für he, she, it." },
        { text: "Do", isCorrect: false, explanation: "Diese Form steht bei I, you, we, they." },
        { text: "Is", isCorrect: false, explanation: "Das Verb 'to be' dient nicht als Hilfsverb zum Vollverb 'know'." }
      ]
    },
    tense: "Present Simple",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "14",
    text: "Why didn't you call me yesterday?",
    translation: "Warum hast du mich gestern nicht angerufen?",
    hint: {
      sentenceWithBlank: "Why [____] you call me yesterday?",
      options: [
        { text: "didn't", isCorrect: true, explanation: "Hilfsverb für die verneinte Frage im Past Simple." },
        { text: "don't", isCorrect: false, explanation: "Das ist Present Simple, im Satz steht aber das Zeitsignal 'yesterday'." },
        { text: "weren't", isCorrect: false, explanation: "'To be' steht in den einfachen Zeiten nicht zusammen mit dem Vollverb 'call'." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "15",
    text: "I saw a great movie last weekend.",
    translation: "Letztes Wochenende habe ich einen tollen Film gesehen.",
    hint: {
      sentenceWithBlank: "I [____] a great movie last weekend.",
      options: [
        { text: "saw", isCorrect: true, explanation: "Past Simple (2. Form von 'see') für eine abgeschlossene Handlung in der Vergangenheit (last weekend)." },
        { text: "see", isCorrect: false, explanation: "Präsensform – sie passt nicht zu 'last weekend'." },
        { text: "have seen", isCorrect: false, explanation: "Das Present Perfect steht nicht mit einer genauen Zeitangabe der Vergangenheit." }
      ]
    },
    tense: "Past Simple",
    topic: "Entertainment",
    lengthWords: 7
  },
  {
    id: "16",
    text: "They didn't arrive on time because of the traffic.",
    translation: "Wegen des Verkehrs kamen sie nicht pünktlich an.",
    hint: {
      sentenceWithBlank: "They didn't arrive on time [____] of the traffic.",
      options: [
        { text: "because", isCorrect: true, explanation: "'Because of' (wegen) steht vor einem Substantiv." },
        { text: "why", isCorrect: false, explanation: "Bedeutet 'warum'." },
        { text: "as", isCorrect: false, explanation: "'As' (da, weil) verlangt danach einen vollständigen Satz mit Subjekt und Prädikat." }
      ]
    },
    tense: "Past Simple",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "17",
    text: "What will you do if they reject the plan?",
    translation: "Was machst du, wenn sie den Plan ablehnen?",
    hint: {
      sentenceWithBlank: "What [____] you do if they reject the plan?",
      options: [
        { text: "will", isCorrect: true, explanation: "Future Simple im Hauptsatz eines Bedingungssatzes vom Typ 1 (First Conditional)." },
        { text: "would", isCorrect: false, explanation: "'Would' steht im Bedingungssatz vom Typ 2 (unreale Bedingung)." },
        { text: "do", isCorrect: false, explanation: "Damit entstünde eine Frage im Präsens: 'Was machst du (generell)?'" }
      ]
    },
    tense: "Future Simple",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "18",
    text: "I think it will be a sunny day.",
    translation: "Ich glaube, es wird ein sonniger Tag.",
    hint: {
      sentenceWithBlank: "I think it [____] [____] a sunny day.",
      options: [
        { text: "will be", isCorrect: true, explanation: "Future Simple für Vorhersagen und persönliche Einschätzungen (I think)." },
        { text: "is being", isCorrect: false, explanation: "Bezeichnet vorübergehendes Verhalten im Moment und passt inhaltlich nicht." },
        { text: "will", isCorrect: false, explanation: "Es fehlt das Vollverb 'be' (sein)." }
      ]
    },
    tense: "Future Simple",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "19",
    text: "Are you going to update the layout this evening?",
    translation: "Hast du vor, das Layout heute Abend zu aktualisieren?",
    hint: {
      sentenceWithBlank: "Are you [____] [____] update the layout this evening?",
      options: [
        { text: "going to", isCorrect: true, explanation: "Die Konstruktion 'to be going to' drückt Pläne und Absichten aus." },
        { text: "will to", isCorrect: false, explanation: "Nach 'will' steht kein 'to'." },
        { text: "want to", isCorrect: false, explanation: "Das hieße 'Willst du ...' und nicht 'Hast du vor ...'." }
      ]
    },
    tense: "Future (going to)",
    topic: "IT",
    lengthWords: 9
  },
  {
    id: "20",
    text: "The train leaves at 9 PM tonight.",
    translation: "Der Zug fährt heute Abend um 21 Uhr ab.",
    hint: {
      sentenceWithBlank: "The train [____] at 9 PM tonight.",
      options: [
        { text: "leaves", isCorrect: true, explanation: "Für Fahrpläne verwendet man das Present Simple, auch wenn es um die Zukunft geht." },
        { text: "will leave", isCorrect: false, explanation: "Bei Fahrplänen ist das Present Simple üblich." },
        { text: "is leaving", isCorrect: false, explanation: "Diese Form steht für persönliche Verabredungen, nicht für Fahrpläne." }
      ]
    },
    tense: "Present Simple",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "21",
    text: "How often do you practice your English?",
    translation: "Wie oft übst du dein Englisch?",
    hint: {
      sentenceWithBlank: "How [____] do you practice your English?",
      options: [
        { text: "often", isCorrect: true, explanation: "Das Fragewort 'How often' (wie oft) fragt nach der Regelmäßigkeit." },
        { text: "many", isCorrect: false, explanation: "Bedeutet 'wie viele' und steht bei zählbaren Substantiven." },
        { text: "much", isCorrect: false, explanation: "Bedeutet 'wie viel' und steht bei unzählbaren Substantiven." }
      ]
    },
    tense: "Present Simple",
    topic: "Education",
    lengthWords: 7
  },
  {
    id: "22",
    text: "Who wrote this article?",
    translation: "Wer hat diesen Artikel geschrieben?",
    hint: {
      sentenceWithBlank: "Who [____] this article?",
      options: [
        { text: "wrote", isCorrect: true, explanation: "In der Frage nach dem Subjekt entfällt das Hilfsverb 'did'; es gilt die normale Wortstellung." },
        { text: "did write", isCorrect: false, explanation: "Falsche Konstruktion für die Frage nach dem Subjekt (Who)." },
        { text: "written", isCorrect: false, explanation: "Das ist die 3. Verbform, sie verlangt das Hilfsverb have/has." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 4
  },
  {
    id: "23",
    text: "Who did you invite to the presentation?",
    translation: "Wen hast du zur Präsentation eingeladen?",
    hint: {
      sentenceWithBlank: "Who [____] you invite to the presentation?",
      options: [
        { text: "did", isCorrect: true, explanation: "Hilfsverb für die Frage im Past Simple (Frage nach dem Objekt – 'wen?')." },
        { text: "do", isCorrect: false, explanation: "Präsens – also 'wen lädst du normalerweise ein'." },
        { text: "were", isCorrect: false, explanation: "'To be' steht in den einfachen Zeiten nicht zusammen mit dem Vollverb 'invite'." }
      ]
    },
    tense: "Past Simple",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "24",
    text: "There used to be a cinema here.",
    translation: "Früher war hier ein Kino.",
    hint: {
      sentenceWithBlank: "There [____] to be a cinema here.",
      options: [
        { text: "used", isCorrect: true, explanation: "Die Konstruktion 'used to' beschreibt etwas, das früher so war, heute aber nicht mehr existiert." },
        { text: "use", isCorrect: false, explanation: "Hier wird die Vergangenheitsform 'used' gebraucht." },
        { text: "was", isCorrect: false, explanation: "Nach 'was' kann kein Infinitiv 'to be' stehen." }
      ]
    },
    tense: "Past Habit",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "25",
    text: "I am used to waking up early.",
    translation: "Ich bin es gewohnt, früh aufzustehen.",
    hint: {
      sentenceWithBlank: "I am [____] [____] waking up early.",
      options: [
        { text: "used to", isCorrect: true, explanation: "Die Konstruktion 'to be used to + V-ing' beschreibt eine Gewohnheit, die bis heute besteht." },
        { text: "use to", isCorrect: false, explanation: "Für den Ausdruck der Gewohnheit braucht man die Form 'used'." },
        { text: "used", isCorrect: false, explanation: "Es fehlt die Präposition 'to', die in dieser Konstruktion zwingend ist." }
      ]
    },
    tense: "Present Habit",
    topic: "Daily Life",
    lengthWords: 7
  },
    {
    id: "26",
    text: "Look! It is snowing outside.",
    translation: "Schau mal! Draußen schneit es.",
    hint: {
      sentenceWithBlank: "Look! It [____] outside.",
      options: [
        { text: "is snowing", isCorrect: true, explanation: "Das Present Continuous steht für Handlungen, die gerade jetzt ablaufen (darauf weist 'Look!' hin)." },
        { text: "snows", isCorrect: false, explanation: "Das Present Simple bezeichnet eine regelmäßige Handlung, nicht das Geschehen im Moment." },
        { text: "snowing", isCorrect: false, explanation: "Das Hilfsverb 'is' fehlt." }
      ]
    },
    tense: "Present Continuous",
    topic: "Nature",
    lengthWords: 5
  },
  {
    id: "27",
    text: "What were you doing when I called you?",
    translation: "Was hast du gemacht, als ich dich angerufen habe?",
    hint: {
      sentenceWithBlank: "What [____] you [____] when I called you?",
      options: [
        { text: "were / doing", isCorrect: true, explanation: "Das Past Continuous bezeichnet eine andauernde Handlung in der Vergangenheit, die von einer anderen unterbrochen wird (als ich anrief)." },
        { text: "did / do", isCorrect: false, explanation: "Das Past Simple steht für aufeinanderfolgende abgeschlossene Handlungen, nicht für einen Verlauf." },
        { text: "are / doing", isCorrect: false, explanation: "Das Present Continuous bezieht sich auf die Gegenwart, hier geht es aber um die Vergangenheit ('when I called')." }
      ]
    },
    tense: "Past Continuous",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "28",
    text: "While she was cooking, he was reading a book.",
    translation: "Während sie kochte, las er ein Buch.",
    hint: {
      sentenceWithBlank: "While she [____], he was reading a book.",
      options: [
        { text: "was cooking", isCorrect: true, explanation: "Das Past Continuous steht für zwei gleichzeitig ablaufende Handlungen in der Vergangenheit." },
        { text: "cooked", isCorrect: false, explanation: "Das Past Simple bezeichnet eine abgeschlossene Handlung, 'while' verweist aber auf einen Verlauf." },
        { text: "is cooking", isCorrect: false, explanation: "Der zweite Satzteil steht in der Vergangenheit ('was reading'), also muss auch der erste dort stehen." }
      ]
    },
    tense: "Past Continuous",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "29",
    text: "I have already finished the first task.",
    translation: "Ich habe die erste Aufgabe schon erledigt.",
    hint: {
      sentenceWithBlank: "I [____] already [____] the first task.",
      options: [
        { text: "have / finished", isCorrect: true, explanation: "Das Present Perfect steht für abgeschlossene Handlungen mit Ergebnis in der Gegenwart (Signalwort 'already')." },
        { text: "am / finishing", isCorrect: false, explanation: "Das Present Continuous würde bedeuten, dass die Handlung noch läuft, 'already' heißt aber 'schon fertig'." },
        { text: "had / finished", isCorrect: false, explanation: "Das Past Perfect braucht man nur, wenn es eine weitere Handlung in der Vergangenheit gibt." }
      ]
    },
    tense: "Present Perfect",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "30",
    text: "Have you ever been to London?",
    translation: "Warst du schon einmal in London?",
    hint: {
      sentenceWithBlank: "Have you [____] been to London?",
      options: [
        { text: "ever", isCorrect: true, explanation: "'Ever' (jemals) steht häufig in Fragen im Present Perfect, wenn es um Lebenserfahrung geht." },
        { text: "never", isCorrect: false, explanation: "'Never' bedeutet 'nie' und steht in bejahten Sätzen mit verneinender Bedeutung." },
        { text: "yet", isCorrect: false, explanation: "'Yet' steht am Satzende." }
      ]
    },
    tense: "Present Perfect",
    topic: "Travel",
    lengthWords: 6
  },
  {
    id: "31",
    text: "She has lived here since 2015.",
    translation: "Sie wohnt seit 2015 hier.",
    hint: {
      sentenceWithBlank: "She has lived here [____] 2015.",
      options: [
        { text: "since", isCorrect: true, explanation: "'Since' nennt den konkreten Zeitpunkt, an dem die Handlung begonnen hat." },
        { text: "for", isCorrect: false, explanation: "'For' gibt die Dauer eines Zeitraums an (z. B. for 5 years)." },
        { text: "from", isCorrect: false, explanation: "'From' verlangt in der Regel ein Gegenstück wie 'to' oder 'until'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "32",
    text: "We haven't seen each other for ages.",
    translation: "Wir haben uns ewig nicht gesehen.",
    hint: {
      sentenceWithBlank: "We [____] each other for ages.",
      options: [
        { text: "haven't seen", isCorrect: true, explanation: "Das Present Perfect zeigt, dass die Handlung von der Vergangenheit bis jetzt ausgeblieben ist ('for ages')." },
        { text: "didn't see", isCorrect: false, explanation: "Das Past Simple verweist auf einen abgeschlossenen Zeitraum, hier reicht der Zeitraum aber bis in die Gegenwart." },
        { text: "don't see", isCorrect: false, explanation: "Das Present Simple beschreibt regelmäßige Handlungen, nicht einen Zustand 'seitdem'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "33",
    text: "When I arrived, the meeting had already started.",
    translation: "Als ich ankam, hatte die Besprechung schon begonnen.",
    hint: {
      sentenceWithBlank: "When I arrived, the meeting [____] already [____].",
      options: [
        { text: "had / started", isCorrect: true, explanation: "Das Past Perfect steht für eine Handlung, die vor einer anderen Handlung in der Vergangenheit abgeschlossen war ('When I arrived')." },
        { text: "has / started", isCorrect: false, explanation: "Das Present Perfect passt nicht, wenn die Haupthandlung in der Vergangenheit liegt ('arrived')." },
        { text: "was / starting", isCorrect: false, explanation: "Das hieße, die Besprechung fing gerade erst an, 'already' sagt aber, dass sie bereits begonnen hatte." }
      ]
    },
    tense: "Past Perfect",
    topic: "Workplace",
    lengthWords: 8
  },
  {
    id: "34",
    text: "He realized he had lost his wallet.",
    translation: "Er merkte, dass er seine Brieftasche verloren hatte.",
    hint: {
      sentenceWithBlank: "He realized he [____] his wallet.",
      options: [
        { text: "had lost", isCorrect: true, explanation: "Das Past Perfect steht für die Handlung ('verloren'), die vor einer anderen Handlung in der Vergangenheit ('merkte') geschah." },
        { text: "loses", isCorrect: false, explanation: "Das Present Simple passt zeitlich nicht, denn der Hauptsatz steht in der Vergangenheit." },
        { text: "has lost", isCorrect: false, explanation: "Das Present Perfect stellt einen Bezug zur Gegenwart her, das Erkennen ('realized') liegt aber in der Vergangenheit." }
      ]
    },
    tense: "Past Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "35",
    text: "By next year, they will have completed the project.",
    translation: "Bis nächstes Jahr werden sie das Projekt abgeschlossen haben.",
    hint: {
      sentenceWithBlank: "By next year, they [____] the project.",
      options: [
        { text: "will have completed", isCorrect: true, explanation: "Das Future Perfect steht für eine Handlung, die bis zu einem bestimmten Zeitpunkt in der Zukunft abgeschlossen sein wird ('By next year')." },
        { text: "will complete", isCorrect: false, explanation: "Diese Form nennt nur eine Tatsache in der Zukunft, 'by' verlangt aber das Future Perfect." },
        { text: "are completing", isCorrect: false, explanation: "Das Present Continuous drückt Pläne aus, vermittelt aber nicht die Abgeschlossenheit zu einem bestimmten Zeitpunkt." }
      ]
    },
    tense: "Future Perfect",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "36",
    text: "I will be flying to Paris this time tomorrow.",
    translation: "Morgen um diese Zeit werde ich nach Paris fliegen.",
    hint: {
      sentenceWithBlank: "I [____] to Paris this time tomorrow.",
      options: [
        { text: "will be flying", isCorrect: true, explanation: "Das Future Continuous beschreibt einen Vorgang, der zu einem bestimmten Zeitpunkt in der Zukunft im Gange sein wird ('this time tomorrow')." },
        { text: "will fly", isCorrect: false, explanation: "Das Future Simple nennt nur eine Tatsache oder Entscheidung, keinen Vorgang zu einem bestimmten Zeitpunkt." },
        { text: "fly", isCorrect: false, explanation: "Das Present Simple ist bei Fahrplänen möglich, hier liegt der Fokus aber auf dem Verlauf des Fluges." }
      ]
    },
    tense: "Future Continuous",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "37",
    text: "This is the best coffee I have ever tasted.",
    translation: "Das ist der beste Kaffee, den ich je getrunken habe.",
    hint: {
      sentenceWithBlank: "This is the best coffee I have [____] tasted.",
      options: [
        { text: "ever", isCorrect: true, explanation: "'Ever' beschreibt Lebenserfahrung, besonders nach einem Superlativ ('the best')." },
        { text: "never", isCorrect: false, explanation: "'Never' würde den Sinn zu 'nie probiert' verändern." },
        { text: "already", isCorrect: false, explanation: "'Already' bedeutet 'schon' und passt nicht zum Kontext 'der beste von allen'." }
      ]
    },
    tense: "Present Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "38",
    text: "It's the first time I have driven an electric car.",
    translation: "Ich fahre zum ersten Mal ein Elektroauto.",
    hint: {
      sentenceWithBlank: "It's the first time I [____] an electric car.",
      options: [
        { text: "have driven", isCorrect: true, explanation: "Die Konstruktion 'It's the first time ...' verlangt immer das Present Perfect." },
        { text: "drive", isCorrect: false, explanation: "Das Present Simple steht hier nicht, weil es um eine Erfahrung geht." },
        { text: "drove", isCorrect: false, explanation: "Das Past Simple steht für abgeschlossene Ereignisse, die Erfahrung ist aber jetzt relevant." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "39",
    text: "She was tired because she had worked all night.",
    translation: "Sie war müde, weil sie die ganze Nacht gearbeitet hatte.",
    hint: {
      sentenceWithBlank: "She was tired because she [____] all night.",
      options: [
        { text: "had worked", isCorrect: true, explanation: "Das Past Perfect nennt den Grund ('gearbeitet') für einen Zustand in der Vergangenheit ('war müde')." },
        { text: "has worked", isCorrect: false, explanation: "Das Present Perfect passt nicht, da das Ergebnis ('war müde') in der Vergangenheit liegt." },
        { text: "worked", isCorrect: false, explanation: "Das Past Simple wäre möglich, doch das Past Perfect betont die Vorzeitigkeit und den Grund deutlicher." }
      ]
    },
    tense: "Past Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "40",
    text: "I had never seen such a beautiful sunset before.",
    translation: "So einen schönen Sonnenuntergang hatte ich zuvor noch nie gesehen.",
    hint: {
      sentenceWithBlank: "I [____] seen such a beautiful sunset before.",
      options: [
        { text: "had never", isCorrect: true, explanation: "Das Past Perfect betont, dass diese Erfahrung bis zu einem bestimmten Zeitpunkt in der Vergangenheit fehlte." },
        { text: "have never", isCorrect: false, explanation: "Das Present Perfect bezieht sich auf die Gegenwart, 'before' verweist aber auf einen Punkt in der Vergangenheit." },
        { text: "did never", isCorrect: false, explanation: "Grammatisch falsche Konstruktion (es hieße 'never saw', hier ist aber das Past Perfect nötig)." }
      ]
    },
    tense: "Past Perfect",
    topic: "Nature",
    lengthWords: 9
  },
  {
    id: "41",
    text: "I have been learning English for three years.",
    translation: "Ich lerne seit drei Jahren Englisch.",
    hint: {
      sentenceWithBlank: "I [____] English for three years.",
      options: [
        { text: "have been learning", isCorrect: true, explanation: "Das Present Perfect Continuous betont die Dauer einer Handlung, die in der Vergangenheit begann und bis jetzt andauert." },
        { text: "am learning", isCorrect: false, explanation: "Das Present Continuous steht nicht mit einer Zeitspanne ('for three years')." },
        { text: "learn", isCorrect: false, explanation: "Das Present Simple beschreibt Tatsachen, nicht einen Vorgang über einen bestimmten Zeitraum." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Education",
    lengthWords: 8
  },
  {
    id: "42",
    text: "Why are your hands dirty? — I've been fixing my bike.",
    translation: "Warum sind deine Hände schmutzig? – Ich habe mein Fahrrad repariert.",
    hint: {
      sentenceWithBlank: "Why are your hands dirty? — I've [____] my bike.",
      options: [
        { text: "been fixing", isCorrect: true, explanation: "Das Present Perfect Continuous erklärt ein sichtbares Ergebnis in der Gegenwart (schmutzige Hände) durch einen kurz zuvor abgelaufenen Vorgang." },
        { text: "fixed", isCorrect: false, explanation: "Das Present Perfect betont die Abgeschlossenheit, hier zählt aber der Vorgang, der Spuren hinterlassen hat." },
        { text: "fixing", isCorrect: false, explanation: "Es fehlt 'been' zur Bildung des Present Perfect Continuous." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 11
  },
  {
    id: "43",
    text: "It has been raining all day.",
    translation: "Es regnet schon den ganzen Tag.",
    hint: {
      sentenceWithBlank: "It [____] all day.",
      options: [
        { text: "has been raining", isCorrect: true, explanation: "Present Perfect Continuous für eine Handlung, die von der Vergangenheit bis in die Gegenwart andauert ('all day')." },
        { text: "is raining", isCorrect: false, explanation: "Das Present Continuous steht für den Moment 'jetzt', ohne Angabe der Dauer." },
        { text: "rains", isCorrect: false, explanation: "Das Present Simple hieße, dass es generell regnet, nicht ununterbrochen den ganzen Tag." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Nature",
    lengthWords: 6
  },
  {
    id: "44",
    text: "She had been waiting for two hours before the bus arrived.",
    translation: "Sie hatte schon zwei Stunden gewartet, bevor der Bus kam.",
    hint: {
      sentenceWithBlank: "She [____] for two hours before the bus arrived.",
      options: [
        { text: "had been waiting", isCorrect: true, explanation: "Das Past Perfect Continuous zeigt die Dauer einer Handlung vor einem anderen Ereignis in der Vergangenheit." },
        { text: "has been waiting", isCorrect: false, explanation: "Das Present Perfect Continuous bezieht sich auf die Gegenwart, hier liegt die zweite Handlung ('arrived') aber in der Vergangenheit." },
        { text: "was waiting", isCorrect: false, explanation: "Mit der Dauerangabe 'for' vor einer weiteren Handlung in der Vergangenheit braucht man das Past Perfect Continuous." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "45",
    text: "They had been living there for five years when the company closed.",
    translation: "Sie hatten dort schon fünf Jahre gelebt, als die Firma schloss.",
    hint: {
      sentenceWithBlank: "They [____] there for five years when the company closed.",
      options: [
        { text: "had been living", isCorrect: true, explanation: "Das Past Perfect Continuous zeigt, wie lange eine Handlung bis zu einem bestimmten Zeitpunkt in der Vergangenheit gedauert hat." },
        { text: "were living", isCorrect: false, explanation: "Das Past Continuous steht nicht mit einer Dauerangabe ('for five years')." },
        { text: "have been living", isCorrect: false, explanation: "Die Ereignisse liegen in der Vergangenheit ('closed'), daher ist eine Vergangenheitsform nötig." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "46",
    text: "His eyes were red because he had been staring at the screen for hours.",
    translation: "Seine Augen waren rot, weil er stundenlang auf den Bildschirm gestarrt hatte.",
    hint: {
      sentenceWithBlank: "His eyes were red because he [____] at the screen for hours.",
      options: [
        { text: "had been staring", isCorrect: true, explanation: "Das Past Perfect Continuous steht für einen längeren Vorgang, der die Ursache für einen Zustand in der Vergangenheit war." },
        { text: "has been staring", isCorrect: false, explanation: "Die Folge ('were red') liegt in der Vergangenheit, daher braucht man eine Vergangenheitsform." },
        { text: "was staring", isCorrect: false, explanation: "Das Past Continuous vermittelt weder die Vorzeitigkeit noch die Dauer, die zu diesem Ergebnis geführt hat." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 14
  },
  {
    id: "47",
    text: "By midnight, I will have been working on this design for ten hours.",
    translation: "Bis Mitternacht werde ich zehn Stunden an diesem Design gearbeitet haben.",
    hint: {
      sentenceWithBlank: "By midnight, I [____] on this design for ten hours.",
      options: [
        { text: "will have been working", isCorrect: true, explanation: "Das Future Perfect Continuous zeigt, wie lange eine Handlung bis zu einem bestimmten Zeitpunkt in der Zukunft gedauert haben wird." },
        { text: "will work", isCorrect: false, explanation: "Das Future Simple vermittelt keine Dauer bis zu einem Zeitpunkt in der Zukunft." },
        { text: "will be working", isCorrect: false, explanation: "Das Future Continuous beschreibt einen Vorgang, betont aber nicht dessen Dauer ('for ten hours')." }
      ]
    },
    tense: "Future Perfect Continuous",
    topic: "Workplace",
    lengthWords: 13
  },
  {
    id: "48",
    text: "How long have you been looking for a job?",
    translation: "Wie lange suchst du schon einen Job?",
    hint: {
      sentenceWithBlank: "How long [____] you [____] for a job?",
      options: [
        { text: "have / been looking", isCorrect: true, explanation: "Fragen mit 'How long' nach noch andauernden Handlungen verlangen das Present Perfect Continuous." },
        { text: "are / looking", isCorrect: false, explanation: "Das Present Continuous fragt nach dem Moment des Sprechens ('was suchst du gerade?'), nicht nach 'wie lange'." },
        { text: "do / look", isCorrect: false, explanation: "Das Present Simple passt nicht, da es sich nicht um eine regelmäßige Handlung handelt." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "49",
    text: "We had been driving for miles before we realized we were lost.",
    translation: "Wir waren schon meilenweit gefahren, bevor wir merkten, dass wir uns verfahren hatten.",
    hint: {
      sentenceWithBlank: "We [____] for miles before we realized we were lost.",
      options: [
        { text: "had been driving", isCorrect: true, explanation: "Past Perfect Continuous für einen Vorgang, der bis zu einem bestimmten Ereignis in der Vergangenheit andauerte." },
        { text: "have been driving", isCorrect: false, explanation: "Alle Ereignisse im Satz liegen in der Vergangenheit ('realized', 'were'), das Present Perfect passt also nicht." },
        { text: "were driving", isCorrect: false, explanation: "Das Past Continuous betont weder das angesammelte Ergebnis noch die Dauer bis zur nächsten Handlung." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 12
  },
  {
    id: "50",
    text: "She has been running, so she is out of breath.",
    translation: "Sie ist gelaufen, deshalb ist sie außer Atem.",
    hint: {
      sentenceWithBlank: "She [____], so she is out of breath.",
      options: [
        { text: "has been running", isCorrect: true, explanation: "Das Present Perfect Continuous erklärt einen aktuellen Zustand ('out of breath') durch einen kurz zuvor abgelaufenen Vorgang." },
        { text: "is running", isCorrect: false, explanation: "Das Present Continuous würde bedeuten, dass sie gerade jetzt läuft." },
        { text: "ran", isCorrect: false, explanation: "Das Past Simple nennt nur die Tatsache des Laufens; das Present Perfect Continuous verbindet Vorgang und Ergebnis besser." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 10
  },
    {
    id: "51",
    text: "You must wear a seatbelt while driving.",
    translation: "Beim Autofahren müssen Sie sich anschnallen.",
    hint: {
      sentenceWithBlank: "You [____] wear a seatbelt while driving.",
      options: [
        { text: "must", isCorrect: true, explanation: "'Must' drückt eine strenge Pflicht oder eine Vorschrift aus." },
        { text: "have", isCorrect: false, explanation: "Nach 'have' muss die Partikel 'to' stehen (have to)." },
        { text: "can", isCorrect: false, explanation: "'Can' bezeichnet die körperliche Möglichkeit, hier geht es aber um eine Vorschrift." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "52",
    text: "You don't have to pay for the tickets; they are free.",
    translation: "Du musst die Tickets nicht bezahlen, sie sind kostenlos.",
    hint: {
      sentenceWithBlank: "You [____] pay for the tickets; they are free.",
      options: [
        { text: "don't have to", isCorrect: true, explanation: "'Don't have to' bedeutet, dass etwas nicht nötig ist." },
        { text: "mustn't", isCorrect: false, explanation: "'Mustn't' bedeutet ein striktes Verbot (man darf nicht)." },
        { text: "shouldn't", isCorrect: false, explanation: "'Shouldn't' ist ein Rat (sollte nicht), hier wird aber eine fehlende Notwendigkeit festgestellt." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "53",
    text: "You shouldn't eat so much fast food.",
    translation: "Du solltest nicht so viel Fastfood essen.",
    hint: {
      sentenceWithBlank: "You [____] eat so much fast food.",
      options: [
        { text: "shouldn't", isCorrect: true, explanation: "'Shouldn't' verwendet man, um einen Rat zu geben." },
        { text: "don't have to", isCorrect: false, explanation: "Bedeutet 'nicht nötig' und passt nicht als Ratschlag." },
        { text: "can't", isCorrect: false, explanation: "'Can't' drückt ein Verbot oder eine Unmöglichkeit aus." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "54",
    text: "He might come to the meeting, but he isn't sure.",
    translation: "Vielleicht kommt er zur Besprechung, aber er ist sich nicht sicher.",
    hint: {
      sentenceWithBlank: "He [____] come to the meeting, but he isn't sure.",
      options: [
        { text: "might", isCorrect: true, explanation: "'Might' drückt eine geringe Wahrscheinlichkeit in der Zukunft aus." },
        { text: "must", isCorrect: false, explanation: "'Must' bedeutet Gewissheit oder eine Verpflichtung." },
        { text: "can", isCorrect: false, explanation: "'Can' verwendet man normalerweise nicht für die Wahrscheinlichkeit einzelner zukünftiger Handlungen." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Workplace",
    lengthWords: 10
  },
  {
    id: "55",
    text: "May I borrow your pen for a moment?",
    translation: "Darf ich kurz deinen Stift ausleihen?",
    hint: {
      sentenceWithBlank: "[____] I borrow your pen for a moment?",
      options: [
        { text: "May", isCorrect: true, explanation: "'May' verwendet man für eine höfliche Bitte um Erlaubnis." },
        { text: "Must", isCorrect: false, explanation: "'Must' steht für eine Pflicht, nicht für eine Bitte." },
        { text: "Should", isCorrect: false, explanation: "'Should' dient dem Ratschlag (sollte ich)." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "56",
    text: "She can't be at home; I saw her at the office five minutes ago.",
    translation: "Sie kann nicht zu Hause sein; ich habe sie vor fünf Minuten im Büro gesehen.",
    hint: {
      sentenceWithBlank: "She [____] be at home; I saw her at the office five minutes ago.",
      options: [
        { text: "can't", isCorrect: true, explanation: "'Can't' drückt die Überzeugung aus, dass etwas unmöglich ist." },
        { text: "mustn't", isCorrect: false, explanation: "'Mustn't' bedeutet ein striktes Verbot, keine logische Schlussfolgerung." },
        { text: "might not", isCorrect: false, explanation: "'Might not' bedeutet nur eine geringe Wahrscheinlichkeit, hier herrscht aber Gewissheit." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 14
  },
  {
    id: "57",
    text: "He must have forgotten about our appointment.",
    translation: "Er muss unseren Termin vergessen haben.",
    hint: {
      sentenceWithBlank: "He [____] about our appointment.",
      options: [
        { text: "must have forgotten", isCorrect: true, explanation: "'Must + have + V3' drückt eine sichere Vermutung über die Vergangenheit aus." },
        { text: "must forget", isCorrect: false, explanation: "Diese Form bezieht sich auf die Gegenwart oder Zukunft." },
        { text: "should have forgotten", isCorrect: false, explanation: "Das hieße 'er hätte es vergessen sollen'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "58",
    text: "You should have told me the truth earlier.",
    translation: "Du hättest mir die Wahrheit früher sagen sollen.",
    hint: {
      sentenceWithBlank: "You [____] me the truth earlier.",
      options: [
        { text: "should have told", isCorrect: true, explanation: "'Should + have + V3' drückt einen Vorwurf über eine nicht ausgeführte Handlung in der Vergangenheit aus." },
        { text: "should tell", isCorrect: false, explanation: "Diese Form bezieht sich auf die Gegenwart oder Zukunft." },
        { text: "must have told", isCorrect: false, explanation: "Das wäre die sichere Vermutung 'du hast es sicher gesagt'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "59",
    text: "I could play the piano when I was a child.",
    translation: "Als Kind konnte ich Klavier spielen.",
    hint: {
      sentenceWithBlank: "I [____] play the piano when I was a child.",
      options: [
        { text: "could", isCorrect: true, explanation: "'Could' ist die Vergangenheitsform von 'can' und steht für Fähigkeiten in der Vergangenheit." },
        { text: "can", isCorrect: false, explanation: "'Can' bezieht sich auf die Gegenwart." },
        { text: "must", isCorrect: false, explanation: "'Must' bedeutet eine Pflicht, nicht eine Fähigkeit." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "60",
    text: "We had better leave now before it gets dark.",
    translation: "Wir gehen besser jetzt, bevor es dunkel wird.",
    hint: {
      sentenceWithBlank: "We [____] leave now before it gets dark.",
      options: [
        { text: "had better", isCorrect: true, explanation: "'Had better' (besser wäre es) steht für dringende Ratschläge oder Warnungen." },
        { text: "would rather", isCorrect: false, explanation: "'Would rather' drückt eine Vorliebe aus (würde lieber)." },
        { text: "should to", isCorrect: false, explanation: "Nach 'should' steht kein 'to'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "61",
    text: "If you heat ice, it melts.",
    translation: "Wenn man Eis erhitzt, schmilzt es.",
    hint: {
      sentenceWithBlank: "If you heat ice, it [____].",
      options: [
        { text: "melts", isCorrect: true, explanation: "Im Zero Conditional (allgemein bekannte Tatsachen) steht in beiden Satzteilen das Present Simple." },
        { text: "will melt", isCorrect: false, explanation: "Für naturwissenschaftliche Tatsachen verwendet man das Present Simple, nicht das Futur." },
        { text: "melted", isCorrect: false, explanation: "Die Vergangenheitsform passt hier nicht." }
      ]
    },
    tense: "Conditionals",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "62",
    text: "If I have time tonight, I will call you.",
    translation: "Wenn ich heute Abend Zeit habe, rufe ich dich an.",
    hint: {
      sentenceWithBlank: "If I [____] time tonight, I [____] you.",
      options: [
        { text: "have / will call", isCorrect: true, explanation: "First Conditional: Bedingung im Present Simple (have), Folge im Future Simple (will call)." },
        { text: "will have / call", isCorrect: false, explanation: "Nach 'if' steht in der Bedingung kein Futur (will)." },
        { text: "had / would call", isCorrect: false, explanation: "Das ist der Second Conditional für unreale Situationen, hier ist die Bedingung aber real." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "63",
    text: "Unless you study hard, you won't pass the exam.",
    translation: "Wenn du nicht fleißig lernst, wirst du die Prüfung nicht bestehen.",
    hint: {
      sentenceWithBlank: "[____] you study hard, you won't pass the exam.",
      options: [
        { text: "Unless", isCorrect: true, explanation: "'Unless' bedeutet 'wenn nicht' (if not) und enthält die Verneinung bereits in sich." },
        { text: "If", isCorrect: false, explanation: "Mit 'if' hieße es 'Wenn du lernst, bestehst du nicht', was unlogisch wäre." },
        { text: "Without", isCorrect: false, explanation: "'Without' ist eine Präposition (ohne); danach muss ein Substantiv oder Gerundium stehen." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 9
  },
  {
    id: "64",
    text: "As soon as I arrive, I will let you know.",
    translation: "Sobald ich ankomme, gebe ich dir Bescheid.",
    hint: {
      sentenceWithBlank: "[____] I arrive, I will let you know.",
      options: [
        { text: "As soon as", isCorrect: true, explanation: "'As soon as' (sobald) steht in Temporalsätzen zusammen mit dem Present Simple." },
        { text: "Until", isCorrect: false, explanation: "'Until' bedeutet 'bis' und verändert den Sinn des Satzes." },
        { text: "While", isCorrect: false, explanation: "'While' (während) steht für länger andauernde Vorgänge." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "65",
    text: "If I won the lottery, I would buy a house by the sea.",
    translation: "Wenn ich im Lotto gewinnen würde, würde ich mir ein Haus am Meer kaufen.",
    hint: {
      sentenceWithBlank: "If I [____] the lottery, I [____] a house by the sea.",
      options: [
        { text: "won / would buy", isCorrect: true, explanation: "Second Conditional: Bedingung im Past Simple (won), Folge mit 'would' + Infinitiv." },
        { text: "win / would buy", isCorrect: false, explanation: "Die Präsensform 'win' passt nicht zu 'would' im Hauptsatz." },
        { text: "won / will buy", isCorrect: false, explanation: "Nach dem Past Simple in der Bedingung steht 'would' und nicht 'will'." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 13
  },
  {
    id: "66",
    text: "What would you do if you were in my shoes?",
    translation: "Was würdest du an meiner Stelle tun?",
    hint: {
      sentenceWithBlank: "What [____] if you [____] in my shoes?",
      options: [
        { text: "would you do / were", isCorrect: true, explanation: "Second Conditional: in der Frage 'would' + Infinitiv, in der Bedingung 'to be' in der Form 'were' für alle Personen." },
        { text: "will you do / are", isCorrect: false, explanation: "Das ist der First Conditional, die Wendung 'in my shoes' setzt aber eine hypothetische Situation voraus." },
        { text: "do you do / was", isCorrect: false, explanation: "Grammatisch falsch für Bedingungssätze vom Typ 2." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "67",
    text: "If I had more free time, I would take up photography.",
    translation: "Wenn ich mehr Freizeit hätte, würde ich mit dem Fotografieren anfangen.",
    hint: {
      sentenceWithBlank: "If I [____] more free time, I [____] take up photography.",
      options: [
        { text: "had / would", isCorrect: true, explanation: "Second Conditional: unreale Bedingung in der Gegenwart (had), Folge mit 'would'." },
        { text: "have / will", isCorrect: false, explanation: "Das drückt eine reale Bedingung aus, hier wird aber die Irrealität der Situation betont." },
        { text: "had had / would have", isCorrect: false, explanation: "Das ist der Third Conditional und bezieht sich auf die Vergangenheit." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "68",
    text: "If we had left earlier, we wouldn't have missed the flight.",
    translation: "Wenn wir früher losgefahren wären, hätten wir den Flug nicht verpasst.",
    hint: {
      sentenceWithBlank: "If we [____] earlier, we [____] the flight.",
      options: [
        { text: "had left / wouldn't have missed", isCorrect: true, explanation: "Third Conditional: unreale Bedingung in der Vergangenheit (Past Perfect) und Folge in der Vergangenheit (would have + V3)." },
        { text: "left / wouldn't miss", isCorrect: false, explanation: "Das ist der Second Conditional und bezieht sich auf die Gegenwart, nicht auf die abgeschlossene Vergangenheit." },
        { text: "had left / wouldn't miss", isCorrect: false, explanation: "Ein Mischtyp, der hier nicht passt, da beide Handlungen in der Vergangenheit liegen." }
      ]
    },
    tense: "Conditionals",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "69",
    text: "I wouldn't have known about the project if you hadn't told me.",
    translation: "Ich hätte von dem Projekt nichts erfahren, wenn du es mir nicht gesagt hättest.",
    hint: {
      sentenceWithBlank: "I wouldn't [____] about the project if you hadn't told me.",
      options: [
        { text: "have known", isCorrect: true, explanation: "Third Conditional: Der Hauptsatz wird mit 'would have' + V3 für eine Situation in der Vergangenheit gebildet." },
        { text: "know", isCorrect: false, explanation: "'Wouldn't know' bezieht sich auf die Gegenwart." },
        { text: "knew", isCorrect: false, explanation: "Nach 'would have' steht die 3. Verbform (known) und nicht die zweite." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "70",
    text: "If I had studied harder at university, I would have a better job now.",
    translation: "Wenn ich an der Uni fleißiger gelernt hätte, hätte ich jetzt einen besseren Job.",
    hint: {
      sentenceWithBlank: "If I [____] harder at university, I [____] a better job now.",
      options: [
        { text: "had studied / would have", isCorrect: true, explanation: "Mixed Conditional: Bedingung in der Vergangenheit (Past Perfect), Folge in der Gegenwart (would + Infinitiv)." },
        { text: "studied / would have", isCorrect: false, explanation: "Das Studium liegt bereits in der Vergangenheit, daher ist das Past Perfect nötig." },
        { text: "had studied / would have had", isCorrect: false, explanation: "Die Folge bezieht sich auf die Gegenwart (now), daher 'would have' und nicht 'would have had'." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 14
  },
  {
    id: "71",
    text: "If he spoke French, he would have translated that document yesterday.",
    translation: "Wenn er Französisch könnte, hätte er das Dokument gestern übersetzt.",
    hint: {
      sentenceWithBlank: "If he [____] French, he [____] that document yesterday.",
      options: [
        { text: "spoke / would have translated", isCorrect: true, explanation: "Mixed Conditional: Die Bedingung gilt dauerhaft (Past Simple), die Folge lag in der Vergangenheit (would have + V3)." },
        { text: "had spoken / would translate", isCorrect: false, explanation: "Sprachkenntnisse sind eine dauerhafte Tatsache, die Übersetzung war dagegen gestern." },
        { text: "spoke / would translate", isCorrect: false, explanation: "Die Übersetzung bezieht sich auf gestern (yesterday), daher braucht man 'would have' + V3." }
      ]
    },
    tense: "Conditionals",
    topic: "Workplace",
    lengthWords: 11
  },
  {
    id: "72",
    text: "I wish I had more money.",
    translation: "Ich wünschte, ich hätte mehr Geld.",
    hint: {
      sentenceWithBlank: "I [____] I [____] more money.",
      options: [
        { text: "wish / had", isCorrect: true, explanation: "Die Konstruktion 'I wish + Past Simple' drückt Bedauern über die Gegenwart aus." },
        { text: "wish / have", isCorrect: false, explanation: "Nach 'I wish' steht für die Gegenwart das Past Simple." },
        { text: "hope / had", isCorrect: false, explanation: "Nach 'hope' steht in der Regel eine reale Zeitform (Gegenwart oder Zukunft)." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "73",
    text: "I wish you wouldn't make so much noise.",
    translation: "Ich wünschte, du würdest nicht so viel Lärm machen.",
    hint: {
      sentenceWithBlank: "I wish you [____] make so much noise.",
      options: [
        { text: "wouldn't", isCorrect: true, explanation: "'I wish + would/wouldn't' drückt Ärger über das Verhalten einer anderen Person in der Gegenwart aus." },
        { text: "don't", isCorrect: false, explanation: "Nach 'I wish' steht kein Present Simple." },
        { text: "didn't", isCorrect: false, explanation: "'Didn't' wäre möglich, doch 'wouldn't' betont den Ärger über das Verhalten des anderen deutlicher." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "74",
    text: "If only I hadn't said that to her yesterday.",
    translation: "Hätte ich ihr das gestern nur nicht gesagt.",
    hint: {
      sentenceWithBlank: "If [____] I [____] said that to her yesterday.",
      options: [
        { text: "only / hadn't", isCorrect: true, explanation: "'If only + Past Perfect' drückt starkes Bedauern über die Vergangenheit aus." },
        { text: "only / didn't", isCorrect: false, explanation: "Die Handlung war gestern, daher braucht man das Past Perfect und nicht das Past Simple." },
        { text: "just / haven't", isCorrect: false, explanation: "'If just' gibt es nicht, und 'haven't' ist Present Perfect und passt nicht zu 'gestern'." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "75",
    text: "It's time we went home.",
    translation: "Es ist Zeit, dass wir nach Hause gehen.",
    hint: {
      sentenceWithBlank: "It's time we [____] home.",
      options: [
        { text: "went", isCorrect: true, explanation: "Nach der Konstruktion 'It's time' (es ist höchste Zeit) steht die Form des Past Simple." },
        { text: "go", isCorrect: false, explanation: "Bei 'It's time' + Subjekt steht das Verb im Past Simple und nicht in der Grundform." },
        { text: "are going", isCorrect: false, explanation: "Die Verlaufsform der Gegenwart wird hier nicht verwendet." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 5
  },
    {
    "id": "76",
    "text": "This house was built in 1920.",
    "translation": "Dieses Haus wurde 1920 gebaut.",
    "hint": {
      "sentenceWithBlank": "This house [____] in 1920.",
      "options": [
        { "text": "was built", "isCorrect": true, "explanation": "Das Passiv der Vergangenheit (Past Simple Passive) beschreibt eine Handlung, die in der Vergangenheit am Objekt vollzogen wurde." },
        { "text": "built", "isCorrect": false, "explanation": "Hier braucht man das Passiv, denn das Haus hat sich nicht selbst gebaut." },
        { "text": "is built", "isCorrect": false, "explanation": "Die Handlung fand in der Vergangenheit statt (1920), daher ist eine Vergangenheitsform nötig." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "77",
    "text": "The interface is being redesigned at the moment.",
    "translation": "Die Oberfläche wird gerade überarbeitet.",
    "hint": {
      "sentenceWithBlank": "The interface [____] at the moment.",
      "options": [
        { "text": "is being redesigned", "isCorrect": true, "explanation": "Present Continuous Passive für eine Handlung, die genau jetzt abläuft (at the moment)." },
        { "text": "is redesigned", "isCorrect": false, "explanation": "Das Present Simple Passive steht für eine regelmäßige Handlung, nicht für den Moment." },
        { "text": "has been redesigned", "isCorrect": false, "explanation": "Das ist Present Perfect Passive und bezeichnet eine bereits abgeschlossene Handlung." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 8
  },
  {
    "id": "78",
    "text": "The new software has just been installed.",
    "translation": "Die neue Software wurde gerade installiert.",
    "hint": {
      "sentenceWithBlank": "The new software [____].",
      "options": [
        { "text": "has just been installed", "isCorrect": true, "explanation": "Present Perfect Passive für eine soeben abgeschlossene Handlung (mit 'just')." },
        { "text": "has just installed", "isCorrect": false, "explanation": "Software kann sich nicht selbst installieren, hier braucht man das Passiv." },
        { "text": "was just installed", "isCorrect": false, "explanation": "Mit dem Adverb 'just' verwendet man üblicherweise das Present Perfect und nicht das Past Simple." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 7
  },
  {
    "id": "79",
    "text": "English is spoken all over the world.",
    "translation": "Englisch wird auf der ganzen Welt gesprochen.",
    "hint": {
      "sentenceWithBlank": "English [____] all over the world.",
      "options": [
        { "text": "is spoken", "isCorrect": true, "explanation": "Das Present Simple Passive steht für allgemein bekannte Tatsachen." },
        { "text": "is speaking", "isCorrect": false, "explanation": "Eine Sprache kann nicht selbst sprechen, hier braucht man das Passiv." },
        { "text": "spoke", "isCorrect": false, "explanation": "Das ist Aktiv in der Vergangenheit." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "80",
    "text": "The letters will be sent tomorrow morning.",
    "translation": "Die Briefe werden morgen früh verschickt.",
    "hint": {
      "sentenceWithBlank": "The letters [____] tomorrow morning.",
      "options": [
        { "text": "will be sent", "isCorrect": true, "explanation": "Das Future Simple Passive steht für eine Handlung, die in der Zukunft am Objekt vollzogen wird." },
        { "text": "will send", "isCorrect": false, "explanation": "Briefe können sich nicht selbst verschicken – hier ist das Passiv nötig." },
        { "text": "are sent", "isCorrect": false, "explanation": "Das ist Present Simple Passive, die Handlung findet aber morgen statt." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "81",
    "text": "I need to get my hair cut this week.",
    "translation": "Ich muss mir diese Woche die Haare schneiden lassen.",
    "hint": {
      "sentenceWithBlank": "I need to [____] this week.",
      "options": [
        { "text": "get my hair cut", "isCorrect": true, "explanation": "Die Konstruktion 'get/have something done' bedeutet, dass jemand anderes die Handlung für dich ausführt." },
        { "text": "cut my hair", "isCorrect": false, "explanation": "Das hieße, dass du dir die Haare selbst schneidest." },
        { "text": "get cutting my hair", "isCorrect": false, "explanation": "Grammatisch falsche Konstruktion." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 9
  },
  {
    "id": "82",
    "text": "He had his laptop stolen while he was traveling.",
    "translation": "Ihm wurde auf Reisen der Laptop gestohlen.",
    "hint": {
      "sentenceWithBlank": "He [____] while he was traveling.",
      "options": [
        { "text": "had his laptop stolen", "isCorrect": true, "explanation": "Die Konstruktion 'have something done' kann auch negative Erfahrungen ausdrücken (jemand hat ihm den Laptop gestohlen)." },
        { "text": "stole his laptop", "isCorrect": false, "explanation": "Das bedeutet, dass er seinen eigenen Laptop gestohlen hat." },
        { "text": "had stolen his laptop", "isCorrect": false, "explanation": "Past Perfect im Aktiv: Er hatte seinen Laptop vor einem bestimmten Zeitpunkt gestohlen." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "83",
    "text": "She was made to clean the whole room by her mother.",
    "translation": "Ihre Mutter zwang sie, das ganze Zimmer aufzuräumen.",
    "hint": {
      "sentenceWithBlank": "She [____] to clean the whole room by her mother.",
      "options": [
        { "text": "was made", "isCorrect": true, "explanation": "Im Passiv verlangt das Verb 'make' in der Bedeutung 'zwingen' die Partikel 'to' vor dem folgenden Verb." },
        { "text": "made", "isCorrect": false, "explanation": "Das Aktiv würde den Sinn verändern: 'Sie zwang ...'." },
        { "text": "has made", "isCorrect": false, "explanation": "Ebenfalls Aktiv, nur im Present Perfect." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 11
  },
  {
    "id": "84",
    "text": "He is said to be the richest man in the city.",
    "translation": "Er soll der reichste Mann der Stadt sein.",
    "hint": {
      "sentenceWithBlank": "He [____] to be the richest man in the city.",
      "options": [
        { "text": "is said", "isCorrect": true, "explanation": "Die Passivkonstruktion 'is said to' bedeutet 'man sagt, dass er ...'." },
        { "text": "says", "isCorrect": false, "explanation": "Das hieße 'Er sagt, dass er der Reichste ist ...'." },
        { "text": "said", "isCorrect": false, "explanation": "Vergangenheitsform 'Er sagte' – das zerstört den Satzbau." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "85",
    "text": "It is expected that the prices will drop soon.",
    "translation": "Es wird erwartet, dass die Preise bald fallen.",
    "hint": {
      "sentenceWithBlank": "[____] that the prices will drop soon.",
      "options": [
        { "text": "It is expected", "isCorrect": true, "explanation": "Die unpersönliche Passivkonstruktion drückt eine allgemeine Meinung oder Erwartung aus." },
        { "text": "It expects", "isCorrect": false, "explanation": "'It' kann nichts 'erwarten' – hier ist das Passiv nötig." },
        { "text": "They is expected", "isCorrect": false, "explanation": "Grammatisch falsch: zu 'They' gehört 'are', hier braucht man aber das unpersönliche 'It'." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "86",
    "text": "He said that he was working on a new project.",
    "translation": "Er sagte, dass er an einem neuen Projekt arbeite.",
    "hint": {
      "sentenceWithBlank": "He said that he [____] on a new project.",
      "options": [
        { "text": "was working", "isCorrect": true, "explanation": "Nach der Regel der Zeitenfolge wird das Present Continuous der direkten Rede zum Past Continuous." },
        { "text": "is working", "isCorrect": false, "explanation": "Da der Hauptsatz in der Vergangenheit steht ('said'), muss sich der Nebensatz zeitlich anpassen." },
        { "text": "works", "isCorrect": false, "explanation": "Bezeichnet eine dauerhafte Handlung (Present Simple) und verletzt die Zeitenfolge." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 10
  },
  {
    "id": "87",
    "text": "She told me she had already seen that movie.",
    "translation": "Sie sagte mir, dass sie diesen Film schon gesehen habe.",
    "hint": {
      "sentenceWithBlank": "She [____] me she had already seen that movie.",
      "options": [
        { "text": "told", "isCorrect": true, "explanation": "Das Verb 'tell' verlangt immer ein direktes Objekt (wem etwas gesagt wurde – 'me')." },
        { "text": "said", "isCorrect": false, "explanation": "Nach 'said' braucht man die Präposition 'to', wenn genannt wird, wem etwas gesagt wurde: 'said to me'." },
        { "text": "spoke", "isCorrect": false, "explanation": "'Speak' bedeutet 'eine Sprache sprechen' oder 'mit jemandem reden' und leitet keine indirekte Rede ein." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Entertainment",
    "lengthWords": 9
  },
  {
    "id": "88",
    "text": "They said they would help us the following week.",
    "translation": "Sie sagten, dass sie uns in der folgenden Woche helfen würden.",
    "hint": {
      "sentenceWithBlank": "They said they [____] help us the following week.",
      "options": [
        { "text": "would", "isCorrect": true, "explanation": "Bei der Zeitenfolge wird 'will' (Futur) durch 'would' ersetzt." },
        { "text": "will", "isCorrect": false, "explanation": "Verstoß gegen die Zeitenfolge, da der Hauptsatz in der Vergangenheit steht." },
        { "text": "should", "isCorrect": false, "explanation": "Das verändert den Sinn zu 'sollten helfen' statt einer einfachen Handlung in der Zukunft." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "89",
    "text": "He asked me where I lived.",
    "translation": "Er fragte mich, wo ich wohne.",
    "hint": {
      "sentenceWithBlank": "He asked me where [____].",
      "options": [
        { "text": "I lived", "isCorrect": true, "explanation": "In der indirekten Frage gelten die normale Wortstellung und die Zeitenfolge." },
        { "text": "did I live", "isCorrect": false, "explanation": "Das Hilfsverb entfällt, da es sich um eine indirekte und nicht um eine direkte Frage handelt." },
        { "text": "I live", "isCorrect": false, "explanation": "Die Zeitenfolge ist verletzt, denn der Hauptsatz steht in der Vergangenheit (asked)." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "90",
    "text": "She asked if I could help her with the task.",
    "translation": "Sie fragte, ob ich ihr bei der Aufgabe helfen könne.",
    "hint": {
      "sentenceWithBlank": "She asked [____] I could help her with the task.",
      "options": [
        { "text": "if", "isCorrect": true, "explanation": "Bei Entscheidungsfragen (ohne Fragewort) verwendet man in der indirekten Rede 'if' oder 'whether'." },
        { "text": "that", "isCorrect": false, "explanation": "'That' steht bei Aussagen, nicht bei Fragen." },
        { "text": "can", "isCorrect": false, "explanation": "Passt grammatisch nicht in diese Satzstruktur." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "91",
    "text": "The manager advised me to review the guidelines.",
    "translation": "Der Manager riet mir, die Richtlinien durchzugehen.",
    "hint": {
      "sentenceWithBlank": "The manager advised me [____] the guidelines.",
      "options": [
        { "text": "to review", "isCorrect": true, "explanation": "Nach Verben wie 'advise', 'ask' oder 'tell' steht der Infinitiv mit 'to'." },
        { "text": "reviewing", "isCorrect": false, "explanation": "Das Gerundium steht nicht nach 'advise' + Person." },
        { "text": "review", "isCorrect": false, "explanation": "Es fehlt die Partikel 'to', die für den Infinitiv nötig ist." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "92",
    "text": "He denied making that mistake.",
    "translation": "Er bestritt, diesen Fehler gemacht zu haben.",
    "hint": {
      "sentenceWithBlank": "He denied [____] that mistake.",
      "options": [
        { "text": "making", "isCorrect": true, "explanation": "Nach dem Verb 'deny' steht das Gerundium (V-ing)." },
        { "text": "to make", "isCorrect": false, "explanation": "Der Infinitiv steht nicht nach 'deny'." },
        { "text": "make", "isCorrect": false, "explanation": "Grammatisch falsche Form." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 5
  },
  {
    "id": "93",
    "text": "She promised not to tell anyone his secret.",
    "translation": "Sie versprach, niemandem sein Geheimnis zu verraten.",
    "hint": {
      "sentenceWithBlank": "She promised [____] anyone his secret.",
      "options": [
        { "text": "not to tell", "isCorrect": true, "explanation": "Die verneinte Infinitivform bildet man, indem man 'not' vor 'to' stellt." },
        { "text": "to not tell", "isCorrect": false, "explanation": "Für die Standardgrammatik keine ganz korrekte Wortstellung." },
        { "text": "don't tell", "isCorrect": false, "explanation": "Hier braucht man den Infinitiv und nicht den Imperativ." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 8
  },
  {
    "id": "94",
    "text": "Although it was raining, we went for a walk.",
    "translation": "Obwohl es regnete, machten wir einen Spaziergang.",
    "hint": {
      "sentenceWithBlank": "[____] it was raining, we went for a walk.",
      "options": [
        { "text": "Although", "isCorrect": true, "explanation": "Die Konjunktion 'although' (obwohl) steht vor Subjekt und Prädikat." },
        { "text": "Despite", "isCorrect": false, "explanation": "Nach 'despite' muss ein Substantiv oder Gerundium folgen, kein vollständiger Satz (it was raining)." },
        { "text": "However", "isCorrect": false, "explanation": "Wird meist als Einschub verwendet und durch Komma abgetrennt." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "95",
    "text": "Despite the heavy traffic, we arrived on time.",
    "translation": "Trotz des dichten Verkehrs kamen wir pünktlich an.",
    "hint": {
      "sentenceWithBlank": "[____] the heavy traffic, we arrived on time.",
      "options": [
        { "text": "Despite", "isCorrect": true, "explanation": "'Despite' (trotz) steht mit einem Substantiv oder Gerundium." },
        { "text": "Although", "isCorrect": false, "explanation": "Nach 'although' muss ein vollständiger Satz folgen (Subjekt + Prädikat)." },
        { "text": "In spite", "isCorrect": false, "explanation": "Diese Wendung verlangt die Präposition 'of' (In spite of)." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "Travel",
    "lengthWords": 8
  },
  {
    "id": "96",
    "text": "Seldom have I seen such a beautiful piece of art.",
    "translation": "Selten habe ich ein so schönes Kunstwerk gesehen.",
    "hint": {
      "sentenceWithBlank": "[____] such a beautiful piece of art.",
      "options": [
        { "text": "Seldom have I seen", "isCorrect": true, "explanation": "Steht ein einschränkendes oder verneinendes Adverb (seldom) am Satzanfang, folgt die Inversion – also die umgekehrte Wortstellung." },
        { "text": "Seldom I have seen", "isCorrect": false, "explanation": "Nach 'seldom' am Satzanfang ist die Inversion nötig (Wortstellung wie in der Frage)." },
        { "text": "Have I seldom seen", "isCorrect": false, "explanation": "Das Adverb 'seldom' muss an erster Stelle stehen." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "97",
    "text": "No sooner had I closed the door than the phone rang.",
    "translation": "Kaum hatte ich die Tür geschlossen, klingelte das Telefon.",
    "hint": {
      "sentenceWithBlank": "[____] closed the door than the phone rang.",
      "options": [
        { "text": "No sooner had I", "isCorrect": true, "explanation": "Die Konstruktion 'No sooner + Inversion (had I) ... than' bedeutet 'kaum hatte ich ..., da ...'." },
        { "text": "No sooner I had", "isCorrect": false, "explanation": "Nach 'No sooner' ist die Inversion von Hilfsverb und Subjekt zwingend." },
        { "text": "As soon as I had", "isCorrect": false, "explanation": "'As soon as' lässt sich nicht mit 'than' im zweiten Satzteil verbinden." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "98",
    "text": "I look forward to hearing from you soon.",
    "translation": "Ich freue mich darauf, bald von Ihnen zu hören.",
    "hint": {
      "sentenceWithBlank": "I look forward [____] from you soon.",
      "options": [
        { "text": "to hearing", "isCorrect": true, "explanation": "In der Wendung 'look forward to' ist 'to' eine Präposition, deshalb folgt das Gerundium (V-ing)." },
        { "text": "to hear", "isCorrect": false, "explanation": "'To' ist hier kein Infinitivzeichen, sondern eine Präposition – daher braucht man das Gerundium." },
        { "text": "hearing", "isCorrect": false, "explanation": "Die obligatorische Präposition 'to' fehlt." }
      ]
    },
    "tense": "Gerund",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "99",
    "text": "It's no use crying over spilled milk.",
    "translation": "Was geschehen ist, ist geschehen. / Es hat keinen Sinn, über verschüttete Milch zu weinen.",
    "hint": {
      "sentenceWithBlank": "It's no use [____] over spilled milk.",
      "options": [
        { "text": "crying", "isCorrect": true, "explanation": "Nach dem Ausdruck 'it's no use' (es hat keinen Sinn) steht immer das Gerundium." },
        { "text": "to cry", "isCorrect": false, "explanation": "Der Infinitiv wird in dieser Redewendung nicht verwendet." },
        { "text": "cry", "isCorrect": false, "explanation": "Grammatisch falsche Form – hier braucht man das Gerundium." }
      ]
    },
    "tense": "Gerund",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "100",
    "text": "Not only did he design the layout, but he also wrote the code.",
    "translation": "Er hat nicht nur das Layout entworfen, sondern auch den Code geschrieben.",
    "hint": {
      "sentenceWithBlank": "Not only [____] the layout, but he also wrote the code.",
      "options": [
        { "text": "did he design", "isCorrect": true, "explanation": "Beginnt der Satz mit 'Not only', gilt die Inversion (Wortstellung wie in der Frage)." },
        { "text": "he designed", "isCorrect": false, "explanation": "Es fehlt die Inversion, die nach 'Not only' am Satzanfang obligatorisch ist." },
        { "text": "designed he", "isCorrect": false, "explanation": "Die Inversion erfolgt mit dem Hilfsverb 'did' und nicht mit dem Vollverb." }
      ]
    },
    "tense": "Inversion",
    "topic": "IT",
    "lengthWords": 13
  }
  ]
}
