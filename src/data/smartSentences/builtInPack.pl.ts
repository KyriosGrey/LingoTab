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
    "targetLang": "pl"
  },
  "sentences": [
    {
    id: "1",
    text: "This is my book, and that one is yours.",
    translation: "To moja książka, a tamta jest twoja.",
    hint: {
      sentenceWithBlank: "This is my book, and that one is [____].",
      options: [
        { text: "yours", isCorrect: true, explanation: "Samodzielna forma zaimka dzierżawczego – nie wymaga rzeczownika po sobie." },
        { text: "your", isCorrect: false, explanation: "Wymaga rzeczownika po sobie (your book)." },
        { text: "you", isCorrect: false, explanation: "Zaimek osobowy, a nie dzierżawczy." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "2",
    text: "He gave her his car because hers was broken.",
    translation: "Dał jej swój samochód, bo jej samochód był zepsuty.",
    hint: {
      sentenceWithBlank: "He gave her his car because [____] was broken.",
      options: [
        { text: "hers", isCorrect: true, explanation: "Samodzielna forma zaimka dzierżawczego zastępuje wyrażenie 'her car'." },
        { text: "her", isCorrect: false, explanation: "Wymaga rzeczownika po sobie (her car)." },
        { text: "she", isCorrect: false, explanation: "Zaimek osobowy (ona), nie wyraża przynależności." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "3",
    text: "We did it ourselves without any help.",
    translation: "Zrobiliśmy to sami, bez niczyjej pomocy.",
    hint: {
      sentenceWithBlank: "We [____] [____] ourselves without any help.",
      options: [
        { text: "did it", isCorrect: true, explanation: "Poprawna forma czasu przeszłego czasownika 'do' wraz z zaimkiem 'it'." },
        { text: "do it", isCorrect: false, explanation: "Czasownik w czasie teraźniejszym, a zdanie mówi o przeszłości." },
        { text: "made it", isCorrect: false, explanation: "'Make' znaczy 'tworzyć', a 'do' – 'wykonywać czynność'." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "4",
    text: "Is there anybody in the office?",
    translation: "Czy jest ktoś w biurze?",
    hint: {
      sentenceWithBlank: "[____] there anybody in the office?",
      options: [
        { text: "Is", isCorrect: true, explanation: "Czasownik 'to be' w liczbie pojedynczej w konstrukcji there is/are z 'anybody'." },
        { text: "Are", isCorrect: false, explanation: "Forma używana w liczbie mnogiej." },
        { text: "Does", isCorrect: false, explanation: "Nie występuje w konstrukcji there is/are." }
      ]
    },
    tense: "Present Simple",
    topic: "Workplace",
    lengthWords: 6
  },
  {
    id: "5",
    text: "Nobody told me about the changes.",
    translation: "Nikt mi nie powiedział o zmianach.",
    hint: {
      sentenceWithBlank: "Nobody [____] me about the changes.",
      options: [
        { text: "told", isCorrect: true, explanation: "Twierdząca forma czasownika w Past Simple. Przeczenie zawarte jest już w słowie 'Nobody'." },
        { text: "didn't tell", isCorrect: false, explanation: "W angielskim nie stosuje się podwójnego przeczenia (Nobody + didn't)." },
        { text: "said", isCorrect: false, explanation: "Czasownik 'say' nie łączy się z dopełnieniem osobowym (me) bez przyimka 'to'." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "6",
    text: "This is the building whose roof was damaged.",
    translation: "To jest budynek, którego dach został uszkodzony.",
    hint: {
      sentenceWithBlank: "This is the building [____] roof was damaged.",
      options: [
        { text: "whose", isCorrect: true, explanation: "Zaimek względny wyrażający przynależność (którego, której, czyj)." },
        { text: "who", isCorrect: false, explanation: "'Who' znaczy 'kto', a nie 'czyj'." },
        { text: "which", isCorrect: false, explanation: "'Which' (który) nie wyraża przynależności." }
      ]
    },
    tense: "Passive Voice",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "7",
    text: "Give it to him, not to them.",
    translation: "Daj to jemu, a nie im.",
    hint: {
      sentenceWithBlank: "Give it to him, not to [____].",
      options: [
        { text: "them", isCorrect: true, explanation: "Forma dopełnieniowa zaimka 'they' (im, ich)." },
        { text: "their", isCorrect: false, explanation: "Zaimek dzierżawczy (ich), wymaga rzeczownika po sobie." },
        { text: "they", isCorrect: false, explanation: "Forma podmiotowa (oni), używana jako podmiot zdania." }
      ]
    },
    tense: "Imperative",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "8",
    text: "Both of them are busy right now.",
    translation: "Oboje są teraz zajęci.",
    hint: {
      sentenceWithBlank: "[____] of them are busy right now.",
      options: [
        { text: "Both", isCorrect: true, explanation: "Znaczy 'obaj, oboje' (i jeden, i drugi)." },
        { text: "All", isCorrect: false, explanation: "'All' (wszyscy) odnosi się do trzech lub więcej osób albo rzeczy." },
        { text: "Either", isCorrect: false, explanation: "'Either' (którykolwiek z dwóch) wymaga czasownika w liczbie pojedynczej." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "9",
    text: "Neither of the options is perfect.",
    translation: "Żadna z tych dwóch opcji nie jest idealna.",
    hint: {
      sentenceWithBlank: "[____] of the options is perfect.",
      options: [
        { text: "Neither", isCorrect: true, explanation: "Znaczy 'żaden z dwóch'." },
        { text: "None", isCorrect: false, explanation: "'None' stosujemy przy trzech lub większej liczbie możliwości." },
        { text: "Both", isCorrect: false, explanation: "Znaczy 'oba' i wymaga czasownika w liczbie mnogiej (are)." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "10",
    text: "Each component has its own function.",
    translation: "Każdy element ma swoją własną funkcję.",
    hint: {
      sentenceWithBlank: "Each component [____] its own function.",
      options: [
        { text: "has", isCorrect: true, explanation: "'Each' (każdy) łączy się z czasownikiem w liczbie pojedynczej." },
        { text: "have", isCorrect: false, explanation: "Forma używana w liczbie mnogiej." },
        { text: "having", isCorrect: false, explanation: "Forma -ing; w tym miejscu potrzebne jest orzeczenie." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "11",
    text: "She usually goes to work by bus, but today she is driving.",
    translation: "Zwykle jeździ do pracy autobusem, ale dziś prowadzi samochód.",
    hint: {
      sentenceWithBlank: "She usually goes to work by bus, but today she [____] [____].",
      options: [
        { text: "is driving", isCorrect: true, explanation: "Present Continuous opisuje czynność tymczasową, dziejącą się właśnie dziś." },
        { text: "drives", isCorrect: false, explanation: "Present Simple opisuje czynności regularne (usually)." },
        { text: "driving", isCorrect: false, explanation: "Brakuje czasownika posiłkowego 'is'." }
      ]
    },
    tense: "Present Continuous",
    topic: "Daily Life",
    lengthWords: 12
  },
  {
    id: "12",
    text: "Water boils at 100 degrees Celsius.",
    translation: "Woda wrze w temperaturze 100 stopni Celsjusza.",
    hint: {
      sentenceWithBlank: "Water [____] at 100 degrees Celsius.",
      options: [
        { text: "boils", isCorrect: true, explanation: "Present Simple stosujemy do faktów powszechnie znanych i praw natury." },
        { text: "is boiling", isCorrect: false, explanation: "Present Continuous opisuje czynność dziejącą się w tej chwili, a nie stały fakt." },
        { text: "boiled", isCorrect: false, explanation: "Past Simple opisuje czynności w przeszłości." }
      ]
    },
    tense: "Present Simple",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "13",
    text: "Does he know where the keys are?",
    translation: "Czy on wie, gdzie są klucze?",
    hint: {
      sentenceWithBlank: "[____] he know where the keys are?",
      options: [
        { text: "Does", isCorrect: true, explanation: "Czasownik posiłkowy w Present Simple dla he, she, it." },
        { text: "Do", isCorrect: false, explanation: "Używany z I, you, we, they." },
        { text: "Is", isCorrect: false, explanation: "Czasownika 'to be' nie używamy jako posiłkowego przy czasowniku głównym 'know'." }
      ]
    },
    tense: "Present Simple",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "14",
    text: "Why didn't you call me yesterday?",
    translation: "Dlaczego nie zadzwoniłeś do mnie wczoraj?",
    hint: {
      sentenceWithBlank: "Why [____] you call me yesterday?",
      options: [
        { text: "didn't", isCorrect: true, explanation: "Czasownik posiłkowy w pytaniu przeczącym w Past Simple." },
        { text: "don't", isCorrect: false, explanation: "To Present Simple, a w zdaniu jest określenie czasu 'yesterday'." },
        { text: "weren't", isCorrect: false, explanation: "Czasownika 'to be' nie łączymy z czasownikiem głównym (call) w czasach prostych." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "15",
    text: "I saw a great movie last weekend.",
    translation: "W zeszły weekend obejrzałem świetny film.",
    hint: {
      sentenceWithBlank: "I [____] a great movie last weekend.",
      options: [
        { text: "saw", isCorrect: true, explanation: "Past Simple (druga forma czasownika 'see') dla czynności zakończonej w przeszłości (last weekend)." },
        { text: "see", isCorrect: false, explanation: "Czas teraźniejszy nie pasuje do określenia 'last weekend'." },
        { text: "have seen", isCorrect: false, explanation: "Present Perfect nie łączy się z dokładnym określeniem czasu przeszłego." }
      ]
    },
    tense: "Past Simple",
    topic: "Entertainment",
    lengthWords: 7
  },
  {
    id: "16",
    text: "They didn't arrive on time because of the traffic.",
    translation: "Nie dotarli na czas z powodu korków.",
    hint: {
      sentenceWithBlank: "They didn't arrive on time [____] of the traffic.",
      options: [
        { text: "because", isCorrect: true, explanation: "Wyrażenie 'because of' (z powodu) stawiamy przed rzeczownikiem." },
        { text: "why", isCorrect: false, explanation: "Znaczy 'dlaczego'." },
        { text: "as", isCorrect: false, explanation: "'As' (ponieważ) wymaga po sobie pełnego zdania z podmiotem i orzeczeniem." }
      ]
    },
    tense: "Past Simple",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "17",
    text: "What will you do if they reject the plan?",
    translation: "Co zrobisz, jeśli odrzucą ten plan?",
    hint: {
      sentenceWithBlank: "What [____] you do if they reject the plan?",
      options: [
        { text: "will", isCorrect: true, explanation: "Future Simple w zdaniu głównym pierwszego okresu warunkowego (First Conditional)." },
        { text: "would", isCorrect: false, explanation: "Używane w drugim okresie warunkowym (sytuacja nierealna)." },
        { text: "do", isCorrect: false, explanation: "Powstałoby pytanie w czasie teraźniejszym: 'Co robisz (zwykle)?'." }
      ]
    },
    tense: "Future Simple",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "18",
    text: "I think it will be a sunny day.",
    translation: "Myślę, że będzie słoneczny dzień.",
    hint: {
      sentenceWithBlank: "I think it [____] [____] a sunny day.",
      options: [
        { text: "will be", isCorrect: true, explanation: "Future Simple stosujemy do przewidywań i wyrażania własnej opinii (I think)." },
        { text: "is being", isCorrect: false, explanation: "Oznacza chwilowe zachowanie i nie pasuje tu znaczeniowo." },
        { text: "will", isCorrect: false, explanation: "Brakuje czasownika 'be' (będzie)." }
      ]
    },
    tense: "Future Simple",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "19",
    text: "Are you going to update the layout this evening?",
    translation: "Czy zamierzasz zaktualizować układ strony dziś wieczorem?",
    hint: {
      sentenceWithBlank: "Are you [____] [____] update the layout this evening?",
      options: [
        { text: "going to", isCorrect: true, explanation: "Konstrukcja 'to be going to' wyraża plany i zamiary." },
        { text: "will to", isCorrect: false, explanation: "Po 'will' nie stawiamy partykuły 'to'." },
        { text: "want to", isCorrect: false, explanation: "Znaczyłoby to 'Czy chcesz...', a nie 'Czy zamierzasz...'." }
      ]
    },
    tense: "Future (going to)",
    topic: "IT",
    lengthWords: 9
  },
  {
    id: "20",
    text: "The train leaves at 9 PM tonight.",
    translation: "Pociąg odjeżdża dziś o dwudziestej pierwszej.",
    hint: {
      sentenceWithBlank: "The train [____] at 9 PM tonight.",
      options: [
        { text: "leaves", isCorrect: true, explanation: "Present Simple stosujemy do rozkładów jazdy, nawet gdy mowa o przyszłości." },
        { text: "will leave", isCorrect: false, explanation: "Przy rozkładach jazdy zwyczajowo używamy Present Simple." },
        { text: "is leaving", isCorrect: false, explanation: "Używane do osobistych ustaleń, a nie do rozkładu jazdy." }
      ]
    },
    tense: "Present Simple",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "21",
    text: "How often do you practice your English?",
    translation: "Jak często ćwiczysz swój angielski?",
    hint: {
      sentenceWithBlank: "How [____] do you practice your English?",
      options: [
        { text: "often", isCorrect: true, explanation: "Wyrażenie pytające 'How often' (jak często) dotyczy regularności." },
        { text: "many", isCorrect: false, explanation: "Znaczy 'ile' i odnosi się do rzeczowników policzalnych." },
        { text: "much", isCorrect: false, explanation: "Znaczy 'ile' i odnosi się do rzeczowników niepoliczalnych." }
      ]
    },
    tense: "Present Simple",
    topic: "Education",
    lengthWords: 7
  },
  {
    id: "22",
    text: "Who wrote this article?",
    translation: "Kto napisał ten artykuł?",
    hint: {
      sentenceWithBlank: "Who [____] this article?",
      options: [
        { text: "wrote", isCorrect: true, explanation: "W pytaniu o podmiot nie używamy czasownika posiłkowego 'did' – szyk zdania pozostaje prosty." },
        { text: "did write", isCorrect: false, explanation: "Niepoprawna konstrukcja w pytaniu o podmiot (Who)." },
        { text: "written", isCorrect: false, explanation: "To trzecia forma czasownika, wymaga czasownika posiłkowego have/has." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 4
  },
  {
    id: "23",
    text: "Who did you invite to the presentation?",
    translation: "Kogo zaprosiłeś na prezentację?",
    hint: {
      sentenceWithBlank: "Who [____] you invite to the presentation?",
      options: [
        { text: "did", isCorrect: true, explanation: "Czasownik posiłkowy w pytaniu w Past Simple (pytanie o dopełnienie – 'kogo?')." },
        { text: "do", isCorrect: false, explanation: "Czas teraźniejszy (kogo zwykle zapraszasz)." },
        { text: "were", isCorrect: false, explanation: "Czasownika 'to be' nie łączymy z czasownikiem 'invite' w czasach prostych." }
      ]
    },
    tense: "Past Simple",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "24",
    text: "There used to be a cinema here.",
    translation: "Kiedyś było tu kino.",
    hint: {
      sentenceWithBlank: "There [____] to be a cinema here.",
      options: [
        { text: "used", isCorrect: true, explanation: "Konstrukcja 'used to' opisuje to, co było kiedyś, ale już nie istnieje." },
        { text: "use", isCorrect: false, explanation: "Potrzebna jest forma przeszła 'used'." },
        { text: "was", isCorrect: false, explanation: "Po 'was' nie może stać bezokolicznik 'to be'." }
      ]
    },
    tense: "Past Habit",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "25",
    text: "I am used to waking up early.",
    translation: "Przyzwyczaiłem się do wczesnego wstawania.",
    hint: {
      sentenceWithBlank: "I am [____] [____] waking up early.",
      options: [
        { text: "used to", isCorrect: true, explanation: "Konstrukcja 'to be used to + V-ing' oznacza przyzwyczajenie wykształcone do chwili obecnej." },
        { text: "use to", isCorrect: false, explanation: "Do wyrażenia przyzwyczajenia potrzebna jest forma 'used'." },
        { text: "used", isCorrect: false, explanation: "Brakuje przyimka 'to', obowiązkowego w tej konstrukcji." }
      ]
    },
    tense: "Present Habit",
    topic: "Daily Life",
    lengthWords: 7
  },
    {
    id: "26",
    text: "Look! It is snowing outside.",
    translation: "Patrz! Na dworze pada śnieg.",
    hint: {
      sentenceWithBlank: "Look! It [____] outside.",
      options: [
        { text: "is snowing", isCorrect: true, explanation: "Present Continuous opisuje czynność dziejącą się w tej chwili (wskazuje na to 'Look!')." },
        { text: "snows", isCorrect: false, explanation: "Present Simple oznacza czynność regularną, a nie dziejącą się właśnie teraz." },
        { text: "snowing", isCorrect: false, explanation: "Brakuje czasownika posiłkowego 'is'." }
      ]
    },
    tense: "Present Continuous",
    topic: "Nature",
    lengthWords: 5
  },
  {
    id: "27",
    text: "What were you doing when I called you?",
    translation: "Co robiłeś, kiedy do ciebie zadzwoniłem?",
    hint: {
      sentenceWithBlank: "What [____] you [____] when I called you?",
      options: [
        { text: "were / doing", isCorrect: true, explanation: "Past Continuous opisuje czynność trwającą w przeszłości, przerwaną przez inną (kiedy zadzwoniłem)." },
        { text: "did / do", isCorrect: false, explanation: "Past Simple opisuje kolejne zakończone czynności, a nie trwający proces." },
        { text: "are / doing", isCorrect: false, explanation: "Present Continuous dotyczy teraźniejszości, a tu mowa o przeszłości ('when I called')." }
      ]
    },
    tense: "Past Continuous",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "28",
    text: "While she was cooking, he was reading a book.",
    translation: "Kiedy ona gotowała, on czytał książkę.",
    hint: {
      sentenceWithBlank: "While she [____], he was reading a book.",
      options: [
        { text: "was cooking", isCorrect: true, explanation: "Past Continuous stosujemy do dwóch równoczesnych czynności trwających w przeszłości." },
        { text: "cooked", isCorrect: false, explanation: "Past Simple oznacza czynność zakończoną, a 'while' wskazuje na trwający proces." },
        { text: "is cooking", isCorrect: false, explanation: "Druga część zdania jest w przeszłości ('was reading'), więc pierwsza również musi być." }
      ]
    },
    tense: "Past Continuous",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "29",
    text: "I have already finished the first task.",
    translation: "Skończyłem już pierwsze zadanie.",
    hint: {
      sentenceWithBlank: "I [____] already [____] the first task.",
      options: [
        { text: "have / finished", isCorrect: true, explanation: "Present Perfect opisuje czynność zakończoną, której skutek widoczny jest teraz (wskaźnik 'already')." },
        { text: "am / finishing", isCorrect: false, explanation: "Present Continuous znaczyłby, że czynność wciąż trwa, a 'already' mówi, że jest już skończona." },
        { text: "had / finished", isCorrect: false, explanation: "Past Perfect potrzebny jest wtedy, gdy w zdaniu występuje inna czynność przeszła." }
      ]
    },
    tense: "Present Perfect",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "30",
    text: "Have you ever been to London?",
    translation: "Czy byłeś kiedyś w Londynie?",
    hint: {
      sentenceWithBlank: "Have you [____] been to London?",
      options: [
        { text: "ever", isCorrect: true, explanation: "Słowo 'ever' (kiedykolwiek) często pojawia się w pytaniach w Present Perfect o doświadczenia życiowe." },
        { text: "never", isCorrect: false, explanation: "'Never' znaczy 'nigdy' i występuje w zdaniach twierdzących o przeczącym znaczeniu." },
        { text: "yet", isCorrect: false, explanation: "'Yet' stawiamy na końcu zdania." }
      ]
    },
    tense: "Present Perfect",
    topic: "Travel",
    lengthWords: 6
  },
  {
    id: "31",
    text: "She has lived here since 2015.",
    translation: "Mieszka tu od 2015 roku.",
    hint: {
      sentenceWithBlank: "She has lived here [____] 2015.",
      options: [
        { text: "since", isCorrect: true, explanation: "'Since' wskazuje konkretny moment rozpoczęcia czynności w przeszłości." },
        { text: "for", isCorrect: false, explanation: "'For' określa długość trwania okresu (np. for 5 years)." },
        { text: "from", isCorrect: false, explanation: "'From' zwykle wymaga pary z 'to' lub 'until'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "32",
    text: "We haven't seen each other for ages.",
    translation: "Nie widzieliśmy się całą wieczność.",
    hint: {
      sentenceWithBlank: "We [____] each other for ages.",
      options: [
        { text: "haven't seen", isCorrect: true, explanation: "Present Perfect pokazuje brak czynności od przeszłości aż do chwili obecnej ('for ages')." },
        { text: "didn't see", isCorrect: false, explanation: "Past Simple wskazuje na okres zamknięty, a tu mowa o okresie trwającym do teraz." },
        { text: "don't see", isCorrect: false, explanation: "Present Simple opisuje czynności regularne, a nie stan trwający 'od tamtej pory'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "33",
    text: "When I arrived, the meeting had already started.",
    translation: "Kiedy przyjechałem, spotkanie już się zaczęło.",
    hint: {
      sentenceWithBlank: "When I arrived, the meeting [____] already [____].",
      options: [
        { text: "had / started", isCorrect: true, explanation: "Past Perfect opisuje czynność zakończoną przed inną czynnością przeszłą ('When I arrived')." },
        { text: "has / started", isCorrect: false, explanation: "Present Perfect nie pasuje, gdy główna czynność należy do przeszłości ('arrived')." },
        { text: "was / starting", isCorrect: false, explanation: "Znaczyłoby, że spotkanie dopiero się zaczynało, a 'already' mówi, że już się zaczęło." }
      ]
    },
    tense: "Past Perfect",
    topic: "Workplace",
    lengthWords: 8
  },
  {
    id: "34",
    text: "He realized he had lost his wallet.",
    translation: "Zorientował się, że zgubił portfel.",
    hint: {
      sentenceWithBlank: "He realized he [____] his wallet.",
      options: [
        { text: "had lost", isCorrect: true, explanation: "Past Perfect opisuje czynność ('zgubił'), która zdarzyła się przed inną czynnością przeszłą ('zorientował się')." },
        { text: "loses", isCorrect: false, explanation: "Present Simple nie pasuje czasowo, bo zdanie nadrzędne jest w czasie przeszłym." },
        { text: "has lost", isCorrect: false, explanation: "Present Perfect łączy zdarzenie z teraźniejszością, a uświadomienie ('realized') nastąpiło w przeszłości." }
      ]
    },
    tense: "Past Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "35",
    text: "By next year, they will have completed the project.",
    translation: "Do przyszłego roku ukończą ten projekt.",
    hint: {
      sentenceWithBlank: "By next year, they [____] the project.",
      options: [
        { text: "will have completed", isCorrect: true, explanation: "Future Perfect opisuje czynność, która zakończy się przed określonym momentem w przyszłości ('By next year')." },
        { text: "will complete", isCorrect: false, explanation: "Opisuje zwykły fakt w przyszłości, ale 'by' wymaga Future Perfect." },
        { text: "are completing", isCorrect: false, explanation: "Present Continuous mówi o planach, ale nie oddaje zakończenia czynności przed danym momentem." }
      ]
    },
    tense: "Future Perfect",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "36",
    text: "I will be flying to Paris this time tomorrow.",
    translation: "Jutro o tej porze będę leciał do Paryża.",
    hint: {
      sentenceWithBlank: "I [____] to Paris this time tomorrow.",
      options: [
        { text: "will be flying", isCorrect: true, explanation: "Future Continuous opisuje proces trwający w konkretnym momencie w przyszłości ('this time tomorrow')." },
        { text: "will fly", isCorrect: false, explanation: "Future Simple wyraża sam fakt lub decyzję, a nie proces w danym momencie." },
        { text: "fly", isCorrect: false, explanation: "Present Simple można stosować do rozkładów lotów, ale tu ważny jest sam przebieg podróży." }
      ]
    },
    tense: "Future Continuous",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "37",
    text: "This is the best coffee I have ever tasted.",
    translation: "To najlepsza kawa, jaką kiedykolwiek piłem.",
    hint: {
      sentenceWithBlank: "This is the best coffee I have [____] tasted.",
      options: [
        { text: "ever", isCorrect: true, explanation: "'Ever' opisuje doświadczenie życiowe, zwłaszcza po stopniu najwyższym ('the best')." },
        { text: "never", isCorrect: false, explanation: "'Never' zmieniłoby sens na 'nigdy nie piłem'." },
        { text: "already", isCorrect: false, explanation: "'Already' znaczy 'już' i nie pasuje do kontekstu 'najlepsza ze wszystkich'." }
      ]
    },
    tense: "Present Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "38",
    text: "It's the first time I have driven an electric car.",
    translation: "Po raz pierwszy prowadzę samochód elektryczny.",
    hint: {
      sentenceWithBlank: "It's the first time I [____] an electric car.",
      options: [
        { text: "have driven", isCorrect: true, explanation: "Konstrukcja 'It's the first time...' zawsze wymaga Present Perfect." },
        { text: "drive", isCorrect: false, explanation: "Present Simple tu nie występuje, ponieważ mowa o doświadczeniu." },
        { text: "drove", isCorrect: false, explanation: "Past Simple opisuje zdarzenia zamknięte, a to doświadczenie jest aktualne teraz." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "39",
    text: "She was tired because she had worked all night.",
    translation: "Była zmęczona, bo pracowała całą noc.",
    hint: {
      sentenceWithBlank: "She was tired because she [____] all night.",
      options: [
        { text: "had worked", isCorrect: true, explanation: "Past Perfect wyjaśnia przyczynę ('pracowała') stanu w przeszłości ('była zmęczona')." },
        { text: "has worked", isCorrect: false, explanation: "Present Perfect nie pasuje, bo skutek ('była zmęczona') należy do przeszłości." },
        { text: "worked", isCorrect: false, explanation: "Past Simple jest możliwy, ale Past Perfect lepiej podkreśla uprzedniość i przyczynę." }
      ]
    },
    tense: "Past Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "40",
    text: "I had never seen such a beautiful sunset before.",
    translation: "Nigdy wcześniej nie widziałem tak pięknego zachodu słońca.",
    hint: {
      sentenceWithBlank: "I [____] seen such a beautiful sunset before.",
      options: [
        { text: "had never", isCorrect: true, explanation: "Past Perfect podkreśla brak takiego doświadczenia przed określonym momentem w przeszłości." },
        { text: "have never", isCorrect: false, explanation: "Present Perfect dotyczy teraźniejszości, a 'before' wskazuje na moment w przeszłości." },
        { text: "did never", isCorrect: false, explanation: "Konstrukcja niepoprawna gramatycznie (byłoby 'never saw', ale tu potrzebny jest Past Perfect)." }
      ]
    },
    tense: "Past Perfect",
    topic: "Nature",
    lengthWords: 9
  },
  {
    id: "41",
    text: "I have been learning English for three years.",
    translation: "Uczę się angielskiego od trzech lat.",
    hint: {
      sentenceWithBlank: "I [____] English for three years.",
      options: [
        { text: "have been learning", isCorrect: true, explanation: "Present Perfect Continuous podkreśla trwanie czynności, która zaczęła się w przeszłości i trwa nadal." },
        { text: "am learning", isCorrect: false, explanation: "Present Continuous nie łączy się z określeniem długości okresu ('for three years')." },
        { text: "learn", isCorrect: false, explanation: "Present Simple opisuje fakty, a nie proces trwający przez określony czas." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Education",
    lengthWords: 8
  },
  {
    id: "42",
    text: "Why are your hands dirty? — I've been fixing my bike.",
    translation: "Dlaczego masz brudne ręce? — Naprawiałem rower.",
    hint: {
      sentenceWithBlank: "Why are your hands dirty? — I've [____] my bike.",
      options: [
        { text: "been fixing", isCorrect: true, explanation: "Present Perfect Continuous tłumaczy widoczny teraz skutek (brudne ręce) niedawnym, trwającym procesem." },
        { text: "fixed", isCorrect: false, explanation: "Present Perfect kładzie nacisk na zakończenie, a tu ważny jest sam proces, który zostawił ślady." },
        { text: "fixing", isCorrect: false, explanation: "Brakuje słowa 'been', potrzebnego do utworzenia Present Perfect Continuous." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 11
  },
  {
    id: "43",
    text: "It has been raining all day.",
    translation: "Deszcz pada cały dzień.",
    hint: {
      sentenceWithBlank: "It [____] all day.",
      options: [
        { text: "has been raining", isCorrect: true, explanation: "Present Perfect Continuous opisuje czynność trwającą od przeszłości do chwili obecnej ('all day')." },
        { text: "is raining", isCorrect: false, explanation: "Present Continuous dotyczy chwili 'teraz', bez wskazania czasu trwania." },
        { text: "rains", isCorrect: false, explanation: "Present Simple znaczyłby, że deszcz pada w ogóle, a nie nieprzerwanie przez cały dzień." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Nature",
    lengthWords: 6
  },
  {
    id: "44",
    text: "She had been waiting for two hours before the bus arrived.",
    translation: "Czekała dwie godziny, zanim przyjechał autobus.",
    hint: {
      sentenceWithBlank: "She [____] for two hours before the bus arrived.",
      options: [
        { text: "had been waiting", isCorrect: true, explanation: "Past Perfect Continuous pokazuje, jak długo trwała czynność przed innym wydarzeniem w przeszłości." },
        { text: "has been waiting", isCorrect: false, explanation: "Present Perfect Continuous dotyczy teraźniejszości, a tu druga czynność ('arrived') jest w przeszłości." },
        { text: "was waiting", isCorrect: false, explanation: "Przy podanym czasie trwania ('for') przed inną czynnością przeszłą potrzebny jest Past Perfect Continuous." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "45",
    text: "They had been living there for five years when the company closed.",
    translation: "Mieszkali tam już pięć lat, gdy firma została zamknięta.",
    hint: {
      sentenceWithBlank: "They [____] there for five years when the company closed.",
      options: [
        { text: "had been living", isCorrect: true, explanation: "Past Perfect Continuous pokazuje, jak długo trwała czynność do określonego momentu w przeszłości." },
        { text: "were living", isCorrect: false, explanation: "Past Continuous nie łączy się z podanym czasem trwania ('for five years')." },
        { text: "have been living", isCorrect: false, explanation: "Wydarzenia rozgrywają się w przeszłości ('closed'), więc potrzebny jest czas przeszły." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "46",
    text: "His eyes were red because he had been staring at the screen for hours.",
    translation: "Miał czerwone oczy, bo godzinami wpatrywał się w ekran.",
    hint: {
      sentenceWithBlank: "His eyes were red because he [____] at the screen for hours.",
      options: [
        { text: "had been staring", isCorrect: true, explanation: "Past Perfect Continuous opisuje długotrwały proces, który stał się przyczyną stanu w przeszłości." },
        { text: "has been staring", isCorrect: false, explanation: "Skutek ('were red') należy do przeszłości, więc potrzebny jest czas przeszły." },
        { text: "was staring", isCorrect: false, explanation: "Past Continuous nie oddaje uprzedniości ani czasu trwania, które doprowadziły do tego skutku." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 14
  },
  {
    id: "47",
    text: "By midnight, I will have been working on this design for ten hours.",
    translation: "Do północy będę pracować nad tym projektem już dziesięć godzin.",
    hint: {
      sentenceWithBlank: "By midnight, I [____] on this design for ten hours.",
      options: [
        { text: "will have been working", isCorrect: true, explanation: "Future Perfect Continuous pokazuje, jak długo będzie trwała czynność do określonego momentu w przyszłości." },
        { text: "will work", isCorrect: false, explanation: "Future Simple nie oddaje czasu trwania czynności do momentu w przyszłości." },
        { text: "will be working", isCorrect: false, explanation: "Future Continuous opisuje sam proces, ale nie podkreśla jego długości ('for ten hours')." }
      ]
    },
    tense: "Future Perfect Continuous",
    topic: "Workplace",
    lengthWords: 13
  },
  {
    id: "48",
    text: "How long have you been looking for a job?",
    translation: "Jak długo już szukasz pracy?",
    hint: {
      sentenceWithBlank: "How long [____] you [____] for a job?",
      options: [
        { text: "have / been looking", isCorrect: true, explanation: "Pytania z 'How long' o czynności niezakończone wymagają Present Perfect Continuous." },
        { text: "are / looking", isCorrect: false, explanation: "Present Continuous służy do pytania o daną chwilę ('czego szukasz teraz?'), a nie o czas trwania." },
        { text: "do / look", isCorrect: false, explanation: "Present Simple tu nie pasuje, bo nie chodzi o czynność regularną." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "49",
    text: "We had been driving for miles before we realized we were lost.",
    translation: "Jechaliśmy wiele kilometrów, zanim zorientowaliśmy się, że zabłądziliśmy.",
    hint: {
      sentenceWithBlank: "We [____] for miles before we realized we were lost.",
      options: [
        { text: "had been driving", isCorrect: true, explanation: "Past Perfect Continuous opisuje proces trwający do określonego wydarzenia w przeszłości." },
        { text: "have been driving", isCorrect: false, explanation: "Wszystkie zdarzenia w zdaniu należą do przeszłości ('realized', 'were'), więc Present Perfect nie pasuje." },
        { text: "were driving", isCorrect: false, explanation: "Past Continuous nie podkreśla nagromadzonego efektu ani trwania przed inną czynnością." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 12
  },
  {
    id: "50",
    text: "She has been running, so she is out of breath.",
    translation: "Biegła, więc jest teraz zdyszana.",
    hint: {
      sentenceWithBlank: "She [____], so she is out of breath.",
      options: [
        { text: "has been running", isCorrect: true, explanation: "Present Perfect Continuous tłumaczy obecny stan ('out of breath') niedawnym procesem." },
        { text: "is running", isCorrect: false, explanation: "Present Continuous znaczy, że biegnie właśnie w tej chwili." },
        { text: "ran", isCorrect: false, explanation: "Past Simple skupia się na samym fakcie biegu, a Present Perfect Continuous lepiej łączy proces ze skutkiem." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 10
  },
    {
    id: "51",
    text: "You must wear a seatbelt while driving.",
    translation: "Podczas jazdy musisz mieć zapięte pasy.",
    hint: {
      sentenceWithBlank: "You [____] wear a seatbelt while driving.",
      options: [
        { text: "must", isCorrect: true, explanation: "'Must' wyraża surowy obowiązek lub przepis." },
        { text: "have", isCorrect: false, explanation: "Po 'have' potrzebna jest partykuła 'to' (have to)." },
        { text: "can", isCorrect: false, explanation: "'Can' oznacza fizyczną możliwość, a tu chodzi o przepis." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "52",
    text: "You don't have to pay for the tickets; they are free.",
    translation: "Nie musisz płacić za bilety, są bezpłatne.",
    hint: {
      sentenceWithBlank: "You [____] pay for the tickets; they are free.",
      options: [
        { text: "don't have to", isCorrect: true, explanation: "'Don't have to' oznacza brak konieczności (nie trzeba)." },
        { text: "mustn't", isCorrect: false, explanation: "'Mustn't' oznacza surowy zakaz (nie wolno)." },
        { text: "shouldn't", isCorrect: false, explanation: "'Shouldn't' to rada (nie powinieneś), a tu stwierdzamy jedynie brak konieczności." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "53",
    text: "You shouldn't eat so much fast food.",
    translation: "Nie powinieneś jeść tyle fast foodów.",
    hint: {
      sentenceWithBlank: "You [____] eat so much fast food.",
      options: [
        { text: "shouldn't", isCorrect: true, explanation: "'Shouldn't' służy do udzielania rad (nie powinieneś)." },
        { text: "don't have to", isCorrect: false, explanation: "Znaczy 'nie musisz' i nie pasuje do udzielania rady." },
        { text: "can't", isCorrect: false, explanation: "'Can't' wyraża zakaz lub niemożliwość." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "54",
    text: "He might come to the meeting, but he isn't sure.",
    translation: "Może przyjdzie na spotkanie, ale nie jest pewien.",
    hint: {
      sentenceWithBlank: "He [____] come to the meeting, but he isn't sure.",
      options: [
        { text: "might", isCorrect: true, explanation: "'Might' wyraża niewielkie prawdopodobieństwo w przyszłości." },
        { text: "must", isCorrect: false, explanation: "'Must' oznacza pewność lub obowiązek." },
        { text: "can", isCorrect: false, explanation: "'Can' zwykle nie wyraża prawdopodobieństwa pojedynczych zdarzeń przyszłych." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Workplace",
    lengthWords: 10
  },
  {
    id: "55",
    text: "May I borrow your pen for a moment?",
    translation: "Czy mogę pożyczyć na chwilę twój długopis?",
    hint: {
      sentenceWithBlank: "[____] I borrow your pen for a moment?",
      options: [
        { text: "May", isCorrect: true, explanation: "'May' służy do uprzejmej prośby o pozwolenie." },
        { text: "Must", isCorrect: false, explanation: "'Must' wyraża obowiązek, a nie prośbę." },
        { text: "Should", isCorrect: false, explanation: "'Should' służy do rady (czy powinienem)." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "56",
    text: "She can't be at home; I saw her at the office five minutes ago.",
    translation: "Ona nie może być w domu; pięć minut temu widziałem ją w biurze.",
    hint: {
      sentenceWithBlank: "She [____] be at home; I saw her at the office five minutes ago.",
      options: [
        { text: "can't", isCorrect: true, explanation: "'Can't' wyraża pewność, że coś jest niemożliwe." },
        { text: "mustn't", isCorrect: false, explanation: "'Mustn't' to surowy zakaz, a nie wniosek logiczny." },
        { text: "might not", isCorrect: false, explanation: "'Might not' oznacza jedynie niewielkie prawdopodobieństwo, a tu mamy pewność." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 14
  },
  {
    id: "57",
    text: "He must have forgotten about our appointment.",
    translation: "Musiał zapomnieć o naszym spotkaniu.",
    hint: {
      sentenceWithBlank: "He [____] about our appointment.",
      options: [
        { text: "must have forgotten", isCorrect: true, explanation: "'Must + have + V3' wyraża pewne przypuszczenie dotyczące przeszłości." },
        { text: "must forget", isCorrect: false, explanation: "Odnosi się do teraźniejszości lub przyszłości." },
        { text: "should have forgotten", isCorrect: false, explanation: "Znaczy 'powinien był zapomnieć'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "58",
    text: "You should have told me the truth earlier.",
    translation: "Powinieneś był powiedzieć mi prawdę wcześniej.",
    hint: {
      sentenceWithBlank: "You [____] me the truth earlier.",
      options: [
        { text: "should have told", isCorrect: true, explanation: "'Should + have + V3' wyraża wyrzut z powodu czynności niewykonanej w przeszłości." },
        { text: "should tell", isCorrect: false, explanation: "Odnosi się do teraźniejszości lub przyszłości." },
        { text: "must have told", isCorrect: false, explanation: "Wyraża pewne przypuszczenie: 'musiałeś powiedzieć'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "59",
    text: "I could play the piano when I was a child.",
    translation: "Umiałem grać na pianinie, kiedy byłem dzieckiem.",
    hint: {
      sentenceWithBlank: "I [____] play the piano when I was a child.",
      options: [
        { text: "could", isCorrect: true, explanation: "'Could' to przeszła forma 'can', używana do umiejętności z przeszłości." },
        { text: "can", isCorrect: false, explanation: "'Can' odnosi się do teraźniejszości." },
        { text: "must", isCorrect: false, explanation: "'Must' oznacza obowiązek, a nie umiejętność." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "60",
    text: "We had better leave now before it gets dark.",
    translation: "Lepiej wyjdźmy teraz, zanim się ściemni.",
    hint: {
      sentenceWithBlank: "We [____] leave now before it gets dark.",
      options: [
        { text: "had better", isCorrect: true, explanation: "'Had better' (lepiej żeby) służy do stanowczych rad i ostrzeżeń." },
        { text: "would rather", isCorrect: false, explanation: "'Would rather' wyraża preferencję (wolałbym)." },
        { text: "should to", isCorrect: false, explanation: "Po 'should' nie stawiamy partykuły 'to'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "61",
    text: "If you heat ice, it melts.",
    translation: "Jeśli podgrzejesz lód, on topnieje.",
    hint: {
      sentenceWithBlank: "If you heat ice, it [____].",
      options: [
        { text: "melts", isCorrect: true, explanation: "W Zero Conditional (fakty ogólne) w obu częściach zdania stosujemy Present Simple." },
        { text: "will melt", isCorrect: false, explanation: "Do faktów naukowych używamy Present Simple, a nie czasu przyszłego." },
        { text: "melted", isCorrect: false, explanation: "Czas przeszły tu nie pasuje." }
      ]
    },
    tense: "Conditionals",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "62",
    text: "If I have time tonight, I will call you.",
    translation: "Jeśli będę miał dziś wieczorem czas, zadzwonię do ciebie.",
    hint: {
      sentenceWithBlank: "If I [____] time tonight, I [____] you.",
      options: [
        { text: "have / will call", isCorrect: true, explanation: "First Conditional: warunek w Present Simple (have), skutek w Future Simple (will call)." },
        { text: "will have / call", isCorrect: false, explanation: "Po 'if' w części warunkowej nie używamy czasu przyszłego (will)." },
        { text: "had / would call", isCorrect: false, explanation: "To Second Conditional dla sytuacji nierealnych, a tutaj warunek jest realny." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "63",
    text: "Unless you study hard, you won't pass the exam.",
    translation: "Jeśli nie będziesz się pilnie uczyć, nie zdasz egzaminu.",
    hint: {
      sentenceWithBlank: "[____] you study hard, you won't pass the exam.",
      options: [
        { text: "Unless", isCorrect: true, explanation: "'Unless' znaczy 'jeśli nie' (if not) i samo w sobie zawiera przeczenie." },
        { text: "If", isCorrect: false, explanation: "Z 'if' wyszłoby: 'Jeśli będziesz się uczyć, nie zdasz', co jest nielogiczne." },
        { text: "Without", isCorrect: false, explanation: "'Without' to przyimek (bez), po którym musi stać rzeczownik lub forma -ing." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 9
  },
  {
    id: "64",
    text: "As soon as I arrive, I will let you know.",
    translation: "Jak tylko przyjadę, dam ci znać.",
    hint: {
      sentenceWithBlank: "[____] I arrive, I will let you know.",
      options: [
        { text: "As soon as", isCorrect: true, explanation: "'As soon as' (jak tylko) wprowadza zdanie czasowe z czasownikiem w Present Simple." },
        { text: "Until", isCorrect: false, explanation: "'Until' znaczy 'dopóki nie', co zmienia sens zdania." },
        { text: "While", isCorrect: false, explanation: "'While' (podczas gdy) odnosi się do czynności trwających." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "65",
    text: "If I won the lottery, I would buy a house by the sea.",
    translation: "Gdybym wygrał na loterii, kupiłbym dom nad morzem.",
    hint: {
      sentenceWithBlank: "If I [____] the lottery, I [____] a house by the sea.",
      options: [
        { text: "won / would buy", isCorrect: true, explanation: "Second Conditional: warunek w Past Simple (won), skutek z 'would' + bezokolicznik." },
        { text: "win / would buy", isCorrect: false, explanation: "Forma 'win' w czasie teraźniejszym nie zgadza się z 'would' w zdaniu głównym." },
        { text: "won / will buy", isCorrect: false, explanation: "Po Past Simple w warunku używamy 'would', a nie 'will'." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 13
  },
  {
    id: "66",
    text: "What would you do if you were in my shoes?",
    translation: "Co byś zrobił na moim miejscu?",
    hint: {
      sentenceWithBlank: "What [____] if you [____] in my shoes?",
      options: [
        { text: "would you do / were", isCorrect: true, explanation: "Second Conditional: w pytaniu 'would' + bezokolicznik, a w warunku czasownik 'to be' w formie 'were' dla wszystkich osób." },
        { text: "will you do / are", isCorrect: false, explanation: "To First Conditional, a zwrot 'in my shoes' zakłada sytuację hipotetyczną." },
        { text: "do you do / was", isCorrect: false, explanation: "Gramatyka niepoprawna dla drugiego okresu warunkowego." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "67",
    text: "If I had more free time, I would take up photography.",
    translation: "Gdybym miał więcej wolnego czasu, zająłbym się fotografią.",
    hint: {
      sentenceWithBlank: "If I [____] more free time, I [____] take up photography.",
      options: [
        { text: "had / would", isCorrect: true, explanation: "Second Conditional: nierealny warunek w teraźniejszości (had) i jego skutek (would)." },
        { text: "have / will", isCorrect: false, explanation: "Wyraża warunek realny, a tutaj podkreślamy nierealność sytuacji." },
        { text: "had had / would have", isCorrect: false, explanation: "To Third Conditional, odnoszący się do przeszłości." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "68",
    text: "If we had left earlier, we wouldn't have missed the flight.",
    translation: "Gdybyśmy wyjechali wcześniej, nie spóźnilibyśmy się na samolot.",
    hint: {
      sentenceWithBlank: "If we [____] earlier, we [____] the flight.",
      options: [
        { text: "had left / wouldn't have missed", isCorrect: true, explanation: "Third Conditional: nierealny warunek w przeszłości (Past Perfect) i skutek w przeszłości (would have + V3)." },
        { text: "left / wouldn't miss", isCorrect: false, explanation: "To Second Conditional, dotyczący teraźniejszości, a nie zamkniętej przeszłości." },
        { text: "had left / wouldn't miss", isCorrect: false, explanation: "Typ mieszany, który nie pasuje, gdy obie czynności należą do przeszłości." }
      ]
    },
    tense: "Conditionals",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "69",
    text: "I wouldn't have known about the project if you hadn't told me.",
    translation: "Nie dowiedziałbym się o tym projekcie, gdybyś mi nie powiedział.",
    hint: {
      sentenceWithBlank: "I wouldn't [____] about the project if you hadn't told me.",
      options: [
        { text: "have known", isCorrect: true, explanation: "Third Conditional: zdanie główne budujemy z 'would have' + V3 dla sytuacji z przeszłości." },
        { text: "know", isCorrect: false, explanation: "'Wouldn't know' odnosi się do teraźniejszości." },
        { text: "knew", isCorrect: false, explanation: "Po 'would have' stawiamy trzecią formę czasownika (known), a nie drugą." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "70",
    text: "If I had studied harder at university, I would have a better job now.",
    translation: "Gdybym pilniej uczył się na studiach, miałbym teraz lepszą pracę.",
    hint: {
      sentenceWithBlank: "If I [____] harder at university, I [____] a better job now.",
      options: [
        { text: "had studied / would have", isCorrect: true, explanation: "Mixed Conditional: warunek w przeszłości (Past Perfect), a skutek w teraźniejszości (would + V1)." },
        { text: "studied / would have", isCorrect: false, explanation: "Studia są już przeszłością, więc potrzebny jest Past Perfect." },
        { text: "had studied / would have had", isCorrect: false, explanation: "Skutek dotyczy teraźniejszości (now), więc 'would have', a nie 'would have had'." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 14
  },
  {
    id: "71",
    text: "If he spoke French, he would have translated that document yesterday.",
    translation: "Gdyby mówił po francusku, przetłumaczyłby wczoraj tamten dokument.",
    hint: {
      sentenceWithBlank: "If he [____] French, he [____] that document yesterday.",
      options: [
        { text: "spoke / would have translated", isCorrect: true, explanation: "Mixed Conditional: warunek jest stały (Past Simple), a skutek dotyczy przeszłości (would have + V3)." },
        { text: "had spoken / would translate", isCorrect: false, explanation: "Znajomość języka to cecha stała, a tłumaczenie miało się odbyć wczoraj." },
        { text: "spoke / would translate", isCorrect: false, explanation: "Tłumaczenie dotyczy wczorajszego dnia (yesterday), więc potrzebne jest 'would have' + V3." }
      ]
    },
    tense: "Conditionals",
    topic: "Workplace",
    lengthWords: 11
  },
  {
    id: "72",
    text: "I wish I had more money.",
    translation: "Szkoda, że nie mam więcej pieniędzy.",
    hint: {
      sentenceWithBlank: "I [____] I [____] more money.",
      options: [
        { text: "wish / had", isCorrect: true, explanation: "Konstrukcja 'I wish' + Past Simple wyraża żal dotyczący teraźniejszości." },
        { text: "wish / have", isCorrect: false, explanation: "Po 'I wish' w odniesieniu do teraźniejszości używamy Past Simple." },
        { text: "hope / had", isCorrect: false, explanation: "Po 'hope' stosujemy zwykle czas realny – teraźniejszy lub przyszły." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "73",
    text: "I wish you wouldn't make so much noise.",
    translation: "Chciałbym, żebyś tak nie hałasował.",
    hint: {
      sentenceWithBlank: "I wish you [____] make so much noise.",
      options: [
        { text: "wouldn't", isCorrect: true, explanation: "'I wish' + would/wouldn't wyraża irytację czyimś zachowaniem w teraźniejszości." },
        { text: "don't", isCorrect: false, explanation: "Po 'I wish' nie używamy Present Simple." },
        { text: "didn't", isCorrect: false, explanation: "'Didn't' jest możliwe, ale 'wouldn't' lepiej podkreśla irytację cudzym zachowaniem." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "74",
    text: "If only I hadn't said that to her yesterday.",
    translation: "Gdybym tylko nie powiedział jej tego wczoraj.",
    hint: {
      sentenceWithBlank: "If [____] I [____] said that to her yesterday.",
      options: [
        { text: "only / hadn't", isCorrect: true, explanation: "'If only' + Past Perfect wyraża silny żal dotyczący przeszłości." },
        { text: "only / didn't", isCorrect: false, explanation: "Czynność miała miejsce wczoraj, więc potrzebny jest Past Perfect, a nie Past Simple." },
        { text: "just / haven't", isCorrect: false, explanation: "Wyrażenie 'If just' nie istnieje, a 'haven't' to Present Perfect, który nie pasuje do 'wczoraj'." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "75",
    text: "It's time we went home.",
    translation: "Najwyższy czas, żebyśmy poszli do domu.",
    hint: {
      sentenceWithBlank: "It's time we [____] home.",
      options: [
        { text: "went", isCorrect: true, explanation: "Po konstrukcji 'It's time' (najwyższy czas) używamy formy Past Simple." },
        { text: "go", isCorrect: false, explanation: "W konstrukcji 'It's time' + podmiot czasownik przyjmuje formę Past Simple, a nie bezokolicznik." },
        { text: "are going", isCorrect: false, explanation: "Czas teraźniejszy ciągły w tej konstrukcji nie występuje." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 5
  },
    {
    "id": "76",
    "text": "This house was built in 1920.",
    "translation": "Ten dom został zbudowany w 1920 roku.",
    "hint": {
      "sentenceWithBlank": "This house [____] in 1920.",
      "options": [
        { "text": "was built", "isCorrect": true, "explanation": "Strona bierna w czasie przeszłym (Past Simple Passive) opisuje czynność wykonaną na obiekcie w przeszłości." },
        { "text": "built", "isCorrect": false, "explanation": "Potrzebna jest strona bierna, ponieważ dom nie zbudował się sam." },
        { "text": "is built", "isCorrect": false, "explanation": "Czynność miała miejsce w przeszłości (w 1920 roku), więc potrzebny jest czas przeszły." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "77",
    "text": "The interface is being redesigned at the moment.",
    "translation": "Interfejs jest w tej chwili przeprojektowywany.",
    "hint": {
      "sentenceWithBlank": "The interface [____] at the moment.",
      "options": [
        { "text": "is being redesigned", "isCorrect": true, "explanation": "Present Continuous Passive opisuje czynność dziejącą się właśnie teraz (at the moment)." },
        { "text": "is redesigned", "isCorrect": false, "explanation": "Present Simple Passive wskazuje na czynność regularną, a nie dziejącą się w tej chwili." },
        { "text": "has been redesigned", "isCorrect": false, "explanation": "To Present Perfect Passive, który oznacza czynność już zakończoną." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 8
  },
  {
    "id": "78",
    "text": "The new software has just been installed.",
    "translation": "Nowe oprogramowanie zostało właśnie zainstalowane.",
    "hint": {
      "sentenceWithBlank": "The new software [____].",
      "options": [
        { "text": "has just been installed", "isCorrect": true, "explanation": "Present Perfect Passive opisuje czynność dopiero co zakończoną (z przysłówkiem 'just')." },
        { "text": "has just installed", "isCorrect": false, "explanation": "Oprogramowanie nie może zainstalować się samo, potrzebna jest strona bierna." },
        { "text": "was just installed", "isCorrect": false, "explanation": "Z przysłówkiem 'just' zwykle używamy Present Perfect, a nie Past Simple." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 7
  },
  {
    "id": "79",
    "text": "English is spoken all over the world.",
    "translation": "Po angielsku mówi się na całym świecie.",
    "hint": {
      "sentenceWithBlank": "English [____] all over the world.",
      "options": [
        { "text": "is spoken", "isCorrect": true, "explanation": "Present Simple Passive stosujemy do faktów powszechnie znanych." },
        { "text": "is speaking", "isCorrect": false, "explanation": "Język nie może sam mówić, potrzebna jest strona bierna." },
        { "text": "spoke", "isCorrect": false, "explanation": "To strona czynna w czasie przeszłym." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "80",
    "text": "The letters will be sent tomorrow morning.",
    "translation": "Listy zostaną wysłane jutro rano.",
    "hint": {
      "sentenceWithBlank": "The letters [____] tomorrow morning.",
      "options": [
        { "text": "will be sent", "isCorrect": true, "explanation": "Future Simple Passive opisuje czynność wykonaną na obiekcie w przyszłości." },
        { "text": "will send", "isCorrect": false, "explanation": "Listy nie mogą wysłać się same – potrzebna jest strona bierna." },
        { "text": "are sent", "isCorrect": false, "explanation": "To Present Simple Passive, a czynność odbędzie się jutro." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "81",
    "text": "I need to get my hair cut this week.",
    "translation": "Muszę się w tym tygodniu ostrzyc.",
    "hint": {
      "sentenceWithBlank": "I need to [____] this week.",
      "options": [
        { "text": "get my hair cut", "isCorrect": true, "explanation": "Konstrukcja 'get/have something done' oznacza, że czynność wykonuje dla nas ktoś inny." },
        { "text": "cut my hair", "isCorrect": false, "explanation": "Znaczyłoby to, że zamierzasz sam obciąć sobie włosy." },
        { "text": "get cutting my hair", "isCorrect": false, "explanation": "Konstrukcja niepoprawna gramatycznie." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 9
  },
  {
    "id": "82",
    "text": "He had his laptop stolen while he was traveling.",
    "translation": "Skradziono mu laptopa podczas podróży.",
    "hint": {
      "sentenceWithBlank": "He [____] while he was traveling.",
      "options": [
        { "text": "had his laptop stolen", "isCorrect": true, "explanation": "Konstrukcja 'have something done' może opisywać przykre doświadczenie (ktoś ukradł mu laptopa)." },
        { "text": "stole his laptop", "isCorrect": false, "explanation": "Znaczy, że to on sam ukradł swojego laptopa." },
        { "text": "had stolen his laptop", "isCorrect": false, "explanation": "Past Perfect w stronie czynnej: to on ukradł laptopa przed jakimś momentem." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "83",
    "text": "She was made to clean the whole room by her mother.",
    "translation": "Mama kazała jej posprzątać cały pokój.",
    "hint": {
      "sentenceWithBlank": "She [____] to clean the whole room by her mother.",
      "options": [
        { "text": "was made", "isCorrect": true, "explanation": "W stronie biernej czasownik 'make' w znaczeniu 'zmuszać' wymaga partykuły 'to' przed kolejnym czasownikiem." },
        { "text": "made", "isCorrect": false, "explanation": "Strona czynna zmieni sens na 'To ona zmusiła'." },
        { "text": "has made", "isCorrect": false, "explanation": "To również strona czynna, tyle że w Present Perfect." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 11
  },
  {
    "id": "84",
    "text": "He is said to be the richest man in the city.",
    "translation": "Mówi się, że jest najbogatszym człowiekiem w mieście.",
    "hint": {
      "sentenceWithBlank": "He [____] to be the richest man in the city.",
      "options": [
        { "text": "is said", "isCorrect": true, "explanation": "Konstrukcja bierna 'is said to' znaczy 'mówi się, że on...'." },
        { "text": "says", "isCorrect": false, "explanation": "Znaczyłoby: 'On mówi, że jest najbogatszy...'." },
        { "text": "said", "isCorrect": false, "explanation": "Czas przeszły 'powiedział' burzy strukturę tego zdania." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "85",
    "text": "It is expected that the prices will drop soon.",
    "translation": "Oczekuje się, że ceny wkrótce spadną.",
    "hint": {
      "sentenceWithBlank": "[____] that the prices will drop soon.",
      "options": [
        { "text": "It is expected", "isCorrect": true, "explanation": "Bezosobowa konstrukcja bierna służy do wyrażania powszechnej opinii lub oczekiwania." },
        { "text": "It expects", "isCorrect": false, "explanation": "Słowo 'it' nie może niczego 'oczekiwać' – potrzebna jest strona bierna." },
        { "text": "They is expected", "isCorrect": false, "explanation": "Niepoprawne gramatycznie: z 'they' łączy się 'are', ale tu potrzebne jest bezosobowe 'it'." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "86",
    "text": "He said that he was working on a new project.",
    "translation": "Powiedział, że pracuje nad nowym projektem.",
    "hint": {
      "sentenceWithBlank": "He said that he [____] on a new project.",
      "options": [
        { "text": "was working", "isCorrect": true, "explanation": "Zgodnie z zasadą następstwa czasów Present Continuous z mowy niezależnej zmienia się w Past Continuous." },
        { "text": "is working", "isCorrect": false, "explanation": "Skoro zdanie nadrzędne jest w czasie przeszłym ('said'), zdanie podrzędne musi się do niego dostosować." },
        { "text": "works", "isCorrect": false, "explanation": "Oznacza czynność stałą (Present Simple) i łamie zasadę następstwa czasów." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 10
  },
  {
    "id": "87",
    "text": "She told me she had already seen that movie.",
    "translation": "Powiedziała mi, że widziała już ten film.",
    "hint": {
      "sentenceWithBlank": "She [____] me she had already seen that movie.",
      "options": [
        { "text": "told", "isCorrect": true, "explanation": "Czasownik 'tell' zawsze wymaga dopełnienia osobowego (komu powiedziano – 'me')." },
        { "text": "said", "isCorrect": false, "explanation": "Po 'said' potrzebny jest przyimek 'to', jeśli wskazujemy adresata: 'said to me'." },
        { "text": "spoke", "isCorrect": false, "explanation": "'Speak' znaczy 'mówić w jakimś języku' lub 'rozmawiać z kimś' i nie wprowadza mowy zależnej." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Entertainment",
    "lengthWords": 9
  },
  {
    "id": "88",
    "text": "They said they would help us the following week.",
    "translation": "Powiedzieli, że pomogą nam w następnym tygodniu.",
    "hint": {
      "sentenceWithBlank": "They said they [____] help us the following week.",
      "options": [
        { "text": "would", "isCorrect": true, "explanation": "Przy następstwie czasów 'will' (czas przyszły) zmienia się w 'would'." },
        { "text": "will", "isCorrect": false, "explanation": "Złamanie zasady następstwa czasów, ponieważ zdanie nadrzędne jest w czasie przeszłym." },
        { "text": "should", "isCorrect": false, "explanation": "Zmieni sens na 'powinni pomóc', zamiast zwykłej czynności przyszłej." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "89",
    "text": "He asked me where I lived.",
    "translation": "Zapytał mnie, gdzie mieszkam.",
    "hint": {
      "sentenceWithBlank": "He asked me where [____].",
      "options": [
        { "text": "I lived", "isCorrect": true, "explanation": "W pytaniu zależnym stosujemy prosty szyk zdania oraz następstwo czasów." },
        { "text": "did I live", "isCorrect": false, "explanation": "Czasownik posiłkowy jest niepotrzebny, bo to pytanie zależne, a nie bezpośrednie." },
        { "text": "I live", "isCorrect": false, "explanation": "Złamane następstwo czasów – zdanie nadrzędne jest w czasie przeszłym (asked)." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "90",
    "text": "She asked if I could help her with the task.",
    "translation": "Zapytała, czy mogę jej pomóc z zadaniem.",
    "hint": {
      "sentenceWithBlank": "She asked [____] I could help her with the task.",
      "options": [
        { "text": "if", "isCorrect": true, "explanation": "W pytaniach ogólnych (bez słowa pytającego) w mowie zależnej używamy 'if' lub 'whether'." },
        { "text": "that", "isCorrect": false, "explanation": "Słowo 'that' wprowadza zdania twierdzące, a nie pytania." },
        { "text": "can", "isCorrect": false, "explanation": "Nie pasuje do struktury tego zdania." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "91",
    "text": "The manager advised me to review the guidelines.",
    "translation": "Menedżer poradził mi, żebym zapoznał się z wytycznymi.",
    "hint": {
      "sentenceWithBlank": "The manager advised me [____] the guidelines.",
      "options": [
        { "text": "to review", "isCorrect": true, "explanation": "Po czasownikach takich jak 'advise', 'ask', 'tell' stosujemy bezokolicznik z 'to'." },
        { "text": "reviewing", "isCorrect": false, "explanation": "Formy -ing nie używamy po 'advise' + osoba." },
        { "text": "review", "isCorrect": false, "explanation": "Brakuje partykuły 'to', koniecznej przy bezokoliczniku." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "92",
    "text": "He denied making that mistake.",
    "translation": "Zaprzeczył, że popełnił ten błąd.",
    "hint": {
      "sentenceWithBlank": "He denied [____] that mistake.",
      "options": [
        { "text": "making", "isCorrect": true, "explanation": "Po czasowniku 'deny' stosujemy formę -ing (gerund)." },
        { "text": "to make", "isCorrect": false, "explanation": "Bezokolicznika po 'deny' nie używamy." },
        { "text": "make", "isCorrect": false, "explanation": "Forma niepoprawna gramatycznie." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 5
  },
  {
    "id": "93",
    "text": "She promised not to tell anyone his secret.",
    "translation": "Obiecała nikomu nie zdradzić jego sekretu.",
    "hint": {
      "sentenceWithBlank": "She promised [____] anyone his secret.",
      "options": [
        { "text": "not to tell", "isCorrect": true, "explanation": "Przeczącą formę bezokolicznika tworzymy, stawiając 'not' przed 'to'." },
        { "text": "to not tell", "isCorrect": false, "explanation": "Szyk niezalecany w standardowej gramatyce." },
        { "text": "don't tell", "isCorrect": false, "explanation": "Tutaj potrzebny jest bezokolicznik, a nie tryb rozkazujący." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 8
  },
  {
    "id": "94",
    "text": "Although it was raining, we went for a walk.",
    "translation": "Chociaż padał deszcz, poszliśmy na spacer.",
    "hint": {
      "sentenceWithBlank": "[____] it was raining, we went for a walk.",
      "options": [
        { "text": "Although", "isCorrect": true, "explanation": "Spójnik 'although' (chociaż) stawiamy przed podmiotem i orzeczeniem." },
        { "text": "Despite", "isCorrect": false, "explanation": "Po 'despite' musi stać rzeczownik lub forma -ing, a nie pełne zdanie (it was raining)." },
        { "text": "However", "isCorrect": false, "explanation": "Zwykle występuje jako wyraz wtrącony i oddzielany jest przecinkiem." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "95",
    "text": "Despite the heavy traffic, we arrived on time.",
    "translation": "Mimo dużego ruchu dotarliśmy na czas.",
    "hint": {
      "sentenceWithBlank": "[____] the heavy traffic, we arrived on time.",
      "options": [
        { "text": "Despite", "isCorrect": true, "explanation": "'Despite' (mimo) łączy się z rzeczownikiem lub formą -ing." },
        { "text": "Although", "isCorrect": false, "explanation": "Po 'although' musi stać pełne zdanie (podmiot + orzeczenie)." },
        { "text": "In spite", "isCorrect": false, "explanation": "Wymaga przyimka 'of' (In spite of)." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "Travel",
    "lengthWords": 8
  },
  {
    "id": "96",
    "text": "Seldom have I seen such a beautiful piece of art.",
    "translation": "Rzadko widywałem tak piękne dzieło sztuki.",
    "hint": {
      "sentenceWithBlank": "[____] such a beautiful piece of art.",
      "options": [
        { "text": "Seldom have I seen", "isCorrect": true, "explanation": "Przysłówki o znaczeniu przeczącym lub ograniczającym (seldom) na początku zdania wymagają inwersji." },
        { "text": "Seldom I have seen", "isCorrect": false, "explanation": "Po 'seldom' na początku zdania konieczna jest inwersja, czyli szyk jak w pytaniu." },
        { "text": "Have I seldom seen", "isCorrect": false, "explanation": "Przysłówek 'seldom' musi stać na pierwszym miejscu." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "97",
    "text": "No sooner had I closed the door than the phone rang.",
    "translation": "Ledwie zamknąłem drzwi, a zadzwonił telefon.",
    "hint": {
      "sentenceWithBlank": "[____] closed the door than the phone rang.",
      "options": [
        { "text": "No sooner had I", "isCorrect": true, "explanation": "Konstrukcja 'No sooner' + inwersja (had I) ... 'than' znaczy 'ledwie..., a już...'." },
        { "text": "No sooner I had", "isCorrect": false, "explanation": "Po 'No sooner' obowiązkowa jest inwersja czasownika posiłkowego i podmiotu." },
        { "text": "As soon as I had", "isCorrect": false, "explanation": "Konstrukcji 'As soon as' nie łączymy z 'than' w drugiej części zdania." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "98",
    "text": "I look forward to hearing from you soon.",
    "translation": "Czekam z niecierpliwością na wiadomość od Państwa.",
    "hint": {
      "sentenceWithBlank": "I look forward [____] from you soon.",
      "options": [
        { "text": "to hearing", "isCorrect": true, "explanation": "W wyrażeniu 'look forward to' słowo 'to' jest przyimkiem, dlatego po nim stosujemy formę -ing." },
        { "text": "to hear", "isCorrect": false, "explanation": "Tutaj 'to' nie jest częścią bezokolicznika, lecz przyimkiem, więc potrzebna jest forma -ing." },
        { "text": "hearing", "isCorrect": false, "explanation": "Brakuje obowiązkowego przyimka 'to'." }
      ]
    },
    "tense": "Gerund",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "99",
    "text": "It's no use crying over spilled milk.",
    "translation": "Nie ma co płakać nad rozlanym mlekiem.",
    "hint": {
      "sentenceWithBlank": "It's no use [____] over spilled milk.",
      "options": [
        { "text": "crying", "isCorrect": true, "explanation": "Po wyrażeniu 'it's no use' (nie ma sensu) zawsze stosujemy formę -ing." },
        { "text": "to cry", "isCorrect": false, "explanation": "W tym idiomie nie używamy bezokolicznika." },
        { "text": "cry", "isCorrect": false, "explanation": "Forma niepoprawna gramatycznie – potrzebny jest gerund." }
      ]
    },
    "tense": "Gerund",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "100",
    "text": "Not only did he design the layout, but he also wrote the code.",
    "translation": "Nie tylko zaprojektował układ strony, ale też napisał kod.",
    "hint": {
      "sentenceWithBlank": "Not only [____] the layout, but he also wrote the code.",
      "options": [
        { "text": "did he design", "isCorrect": true, "explanation": "Gdy zdanie zaczyna się od 'Not only', stosujemy inwersję, czyli szyk jak w pytaniu." },
        { "text": "he designed", "isCorrect": false, "explanation": "Brak inwersji, która po 'Not only' na początku zdania jest obowiązkowa." },
        { "text": "designed he", "isCorrect": false, "explanation": "Inwersję tworzymy za pomocą czasownika posiłkowego 'did', a nie czasownika głównego." }
      ]
    },
    "tense": "Inversion",
    "topic": "IT",
    "lengthWords": 13
  }
  ]
}
