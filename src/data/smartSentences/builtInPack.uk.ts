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
    "targetLang": "uk"
  },
  "sentences": [
    {
    id: "1",
    text: "This is my book, and that one is yours.",
    translation: "Це моя книжка, а та — твоя.",
    hint: {
      sentenceWithBlank: "This is my book, and that one is [____].",
      options: [
        { text: "yours", isCorrect: true, explanation: "Абсолютна форма присвійного займенника — після неї іменник уже не потрібен." },
        { text: "your", isCorrect: false, explanation: "Ця форма вимагає іменника після себе (your book)." },
        { text: "you", isCorrect: false, explanation: "Це особовий займенник, а не присвійний." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "2",
    text: "He gave her his car because hers was broken.",
    translation: "Він дав їй свою машину, бо її власна була зламана.",
    hint: {
      sentenceWithBlank: "He gave her his car because [____] was broken.",
      options: [
        { text: "hers", isCorrect: true, explanation: "Абсолютна форма присвійного займенника, яка заміняє собою 'her car'." },
        { text: "her", isCorrect: false, explanation: "Після цієї форми обов'язково має стояти іменник (her car)." },
        { text: "she", isCorrect: false, explanation: "Особовий займенник (вона) — він не вказує на належність." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "3",
    text: "We did it ourselves without any help.",
    translation: "Ми зробили це самі, без жодної допомоги.",
    hint: {
      sentenceWithBlank: "We [____] [____] ourselves without any help.",
      options: [
        { text: "did it", isCorrect: true, explanation: "Правильна форма минулого часу від 'do' плюс займенник 'it'." },
        { text: "do it", isCorrect: false, explanation: "Дієслово стоїть у теперішньому часі, а йдеться про минуле." },
        { text: "made it", isCorrect: false, explanation: "Make — це 'створювати, виготовляти', а do — 'виконувати дію'." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "4",
    text: "Is there anybody in the office?",
    translation: "Є хтось в офісі?",
    hint: {
      sentenceWithBlank: "[____] there anybody in the office?",
      options: [
        { text: "Is", isCorrect: true, explanation: "Дієслово to be в однині: конструкція there is/are з anybody вимагає саме is." },
        { text: "Are", isCorrect: false, explanation: "Ця форма потрібна для множини." },
        { text: "Does", isCorrect: false, explanation: "У конструкції there is/are допоміжне does не вживається." }
      ]
    },
    tense: "Present Simple",
    topic: "Workplace",
    lengthWords: 6
  },
  {
    id: "5",
    text: "Nobody told me about the changes.",
    translation: "Ніхто не сказав мені про зміни.",
    hint: {
      sentenceWithBlank: "Nobody [____] me about the changes.",
      options: [
        { text: "told", isCorrect: true, explanation: "Стверджувальна форма дієслова в Past Simple: заперечення вже міститься в слові 'Nobody'." },
        { text: "didn't tell", isCorrect: false, explanation: "В англійській мові подвійного заперечення не буває (Nobody + didn't)." },
        { text: "said", isCorrect: false, explanation: "Say не вживається з прямим додатком (me) без прийменника to." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "6",
    text: "This is the building whose roof was damaged.",
    translation: "Це будівля, дах якої пошкоджено.",
    hint: {
      sentenceWithBlank: "This is the building [____] roof was damaged.",
      options: [
        { text: "whose", isCorrect: true, explanation: "Відносний займенник, що вказує на належність (чий, чия, чиє)." },
        { text: "who", isCorrect: false, explanation: "Who означає 'хто', а не 'чий'." },
        { text: "which", isCorrect: false, explanation: "Which (який) не виражає належності." }
      ]
    },
    tense: "Passive Voice",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "7",
    text: "Give it to him, not to them.",
    translation: "Віддай це йому, а не їм.",
    hint: {
      sentenceWithBlank: "Give it to him, not to [____].",
      options: [
        { text: "them", isCorrect: true, explanation: "Об'єктний відмінок займенника they (їм, їх)." },
        { text: "their", isCorrect: false, explanation: "Присвійний займенник (їхній), після нього потрібен іменник." },
        { text: "they", isCorrect: false, explanation: "Називний відмінок (вони) — уживається в ролі підмета." }
      ]
    },
    tense: "Imperative",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "8",
    text: "Both of them are busy right now.",
    translation: "Вони обидва зараз зайняті.",
    hint: {
      sentenceWithBlank: "[____] of them are busy right now.",
      options: [
        { text: "Both", isCorrect: true, explanation: "Both означає 'обидва' (і той, і той)." },
        { text: "All", isCorrect: false, explanation: "All (усі) уживають, коли йдеться про трьох і більше осіб чи предметів." },
        { text: "Either", isCorrect: false, explanation: "Either (будь-який із двох) вимагає дієслова в однині." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "9",
    text: "Neither of the options is perfect.",
    translation: "Жоден із варіантів не є ідеальним.",
    hint: {
      sentenceWithBlank: "[____] of the options is perfect.",
      options: [
        { text: "Neither", isCorrect: true, explanation: "Neither означає 'жоден із двох'." },
        { text: "None", isCorrect: false, explanation: "None уживають, коли варіантів три і більше." },
        { text: "Both", isCorrect: false, explanation: "Both означає 'обидва' і вимагає дієслова в множині (are)." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "10",
    text: "Each component has its own function.",
    translation: "Кожен компонент має свою власну функцію.",
    hint: {
      sentenceWithBlank: "Each component [____] its own function.",
      options: [
        { text: "has", isCorrect: true, explanation: "Each (кожен) узгоджується з дієсловом в однині." },
        { text: "have", isCorrect: false, explanation: "Ця форма вживається з підметом у множині." },
        { text: "having", isCorrect: false, explanation: "Це герундій або дієприкметник, а тут потрібен присудок." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "11",
    text: "She usually goes to work by bus, but today she is driving.",
    translation: "Вона зазвичай їздить на роботу автобусом, але сьогодні вона за кермом.",
    hint: {
      sentenceWithBlank: "She usually goes to work by bus, but today she [____] [____].",
      options: [
        { text: "is driving", isCorrect: true, explanation: "Present Continuous показує тимчасову дію, яка відбувається саме сьогодні." },
        { text: "drives", isCorrect: false, explanation: "Present Simple уживають для регулярних дій (usually), а тут ідеться про виняток." },
        { text: "driving", isCorrect: false, explanation: "Пропущено допоміжне дієслово is." }
      ]
    },
    tense: "Present Continuous",
    topic: "Daily Life",
    lengthWords: 12
  },
  {
    id: "12",
    text: "Water boils at 100 degrees Celsius.",
    translation: "Вода кипить при 100 градусах Цельсія.",
    hint: {
      sentenceWithBlank: "Water [____] at 100 degrees Celsius.",
      options: [
        { text: "boils", isCorrect: true, explanation: "Present Simple уживають для загальновідомих фактів і законів природи." },
        { text: "is boiling", isCorrect: false, explanation: "Present Continuous описує дію просто зараз, а не незмінний факт." },
        { text: "boiled", isCorrect: false, explanation: "Past Simple потрібен для дій у минулому." }
      ]
    },
    tense: "Present Simple",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "13",
    text: "Does he know where the keys are?",
    translation: "Він знає, де ключі?",
    hint: {
      sentenceWithBlank: "[____] he know where the keys are?",
      options: [
        { text: "Does", isCorrect: true, explanation: "Допоміжне дієслово для Present Simple із he, she, it." },
        { text: "Do", isCorrect: false, explanation: "Ця форма вживається з I, you, we, they." },
        { text: "Is", isCorrect: false, explanation: "Дієслово to be не буває допоміжним при смисловому дієслові know." }
      ]
    },
    tense: "Present Simple",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "14",
    text: "Why didn't you call me yesterday?",
    translation: "Чому ти не подзвонив мені вчора?",
    hint: {
      sentenceWithBlank: "Why [____] you call me yesterday?",
      options: [
        { text: "didn't", isCorrect: true, explanation: "Допоміжне дієслово для заперечного запитання в Past Simple." },
        { text: "don't", isCorrect: false, explanation: "Це Present Simple, а в реченні є вказівник часу yesterday." },
        { text: "weren't", isCorrect: false, explanation: "Дієслово to be не вживається зі смисловим дієсловом (call) у простих часах." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "15",
    text: "I saw a great movie last weekend.",
    translation: "Минулими вихідними я подивився чудовий фільм.",
    hint: {
      sentenceWithBlank: "I [____] a great movie last weekend.",
      options: [
        { text: "saw", isCorrect: true, explanation: "Past Simple (друга форма дієслова see) — для завершеної дії в минулому (last weekend)." },
        { text: "see", isCorrect: false, explanation: "Це теперішній час, який не узгоджується з last weekend." },
        { text: "have seen", isCorrect: false, explanation: "Present Perfect не вживають із точною вказівкою на час у минулому." }
      ]
    },
    tense: "Past Simple",
    topic: "Entertainment",
    lengthWords: 7
  },
  {
    id: "16",
    text: "They didn't arrive on time because of the traffic.",
    translation: "Вони не приїхали вчасно через затори.",
    hint: {
      sentenceWithBlank: "They didn't arrive on time [____] of the traffic.",
      options: [
        { text: "because", isCorrect: true, explanation: "Because of (через) ставлять перед іменником." },
        { text: "why", isCorrect: false, explanation: "Це слово означає 'чому'." },
        { text: "as", isCorrect: false, explanation: "As (оскільки) вимагає після себе повного речення з підметом і присудком." }
      ]
    },
    tense: "Past Simple",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "17",
    text: "What will you do if they reject the plan?",
    translation: "Що ти робитимеш, якщо вони відхилять план?",
    hint: {
      sentenceWithBlank: "What [____] you do if they reject the plan?",
      options: [
        { text: "will", isCorrect: true, explanation: "Future Simple у головній частині умовного речення першого типу (First Conditional)." },
        { text: "would", isCorrect: false, explanation: "Would вживають в умовних реченнях другого типу (нереальна умова)." },
        { text: "do", isCorrect: false, explanation: "Тоді вийшло б запитання в теперішньому часі: 'Що ти робиш взагалі?'." }
      ]
    },
    tense: "Future Simple",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "18",
    text: "I think it will be a sunny day.",
    translation: "Думаю, день буде сонячний.",
    hint: {
      sentenceWithBlank: "I think it [____] [____] a sunny day.",
      options: [
        { text: "will be", isCorrect: true, explanation: "Future Simple — для прогнозів і особистих припущень (I think)." },
        { text: "is being", isCorrect: false, explanation: "Ця форма означає тимчасову поведінку в конкретний момент і за змістом не підходить." },
        { text: "will", isCorrect: false, explanation: "Бракує смислового дієслова be (буде)." }
      ]
    },
    tense: "Future Simple",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "19",
    text: "Are you going to update the layout this evening?",
    translation: "Ти збираєшся оновити макет сьогодні ввечері?",
    hint: {
      sentenceWithBlank: "Are you [____] [____] update the layout this evening?",
      options: [
        { text: "going to", isCorrect: true, explanation: "Конструкцію to be going to уживають для планів і намірів." },
        { text: "will to", isCorrect: false, explanation: "Після will частка to не ставиться." },
        { text: "want to", isCorrect: false, explanation: "Це перекладалося б як 'Ти хочеш...', а не 'Ти збираєшся...'." }
      ]
    },
    tense: "Future (going to)",
    topic: "IT",
    lengthWords: 9
  },
  {
    id: "20",
    text: "The train leaves at 9 PM tonight.",
    translation: "Потяг вирушає сьогодні о 9 вечора.",
    hint: {
      sentenceWithBlank: "The train [____] at 9 PM tonight.",
      options: [
        { text: "leaves", isCorrect: true, explanation: "Present Simple уживають для розкладів транспорту, навіть коли йдеться про майбутнє." },
        { text: "will leave", isCorrect: false, explanation: "З розкладами прийнято вживати Present Simple." },
        { text: "is leaving", isCorrect: false, explanation: "Цю форму вживають для особистих домовленостей, а не для розкладу." }
      ]
    },
    tense: "Present Simple",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "21",
    text: "How often do you practice your English?",
    translation: "Як часто ти практикуєш свою англійську?",
    hint: {
      sentenceWithBlank: "How [____] do you practice your English?",
      options: [
        { text: "often", isCorrect: true, explanation: "Питальна фраза 'How often' (як часто) — для запитань про регулярність." },
        { text: "many", isCorrect: false, explanation: "Означає 'як багато' і вживається з обчислюваними іменниками." },
        { text: "much", isCorrect: false, explanation: "Означає 'як багато' і вживається з необчислюваними іменниками." }
      ]
    },
    tense: "Present Simple",
    topic: "Education",
    lengthWords: 7
  },
  {
    id: "22",
    text: "Who wrote this article?",
    translation: "Хто написав цю статтю?",
    hint: {
      sentenceWithBlank: "Who [____] this article?",
      options: [
        { text: "wrote", isCorrect: true, explanation: "У запитанні до підмета допоміжне did не потрібне — порядок слів прямий." },
        { text: "did write", isCorrect: false, explanation: "Для запитання до підмета (Who) така конструкція неправильна." },
        { text: "written", isCorrect: false, explanation: "Це третя форма дієслова, вона потребує допоміжного have/has." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 4
  },
  {
    id: "23",
    text: "Who did you invite to the presentation?",
    translation: "Кого ти запросив на презентацію?",
    hint: {
      sentenceWithBlank: "Who [____] you invite to the presentation?",
      options: [
        { text: "did", isCorrect: true, explanation: "Допоміжне дієслово для запитання в Past Simple (запитання до додатка — 'кого?')." },
        { text: "do", isCorrect: false, explanation: "Це теперішній час: кого ти зазвичай запрошуєш." },
        { text: "were", isCorrect: false, explanation: "Дієслово to be не вживається зі смисловим дієсловом invite у простих часах." }
      ]
    },
    tense: "Past Simple",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "24",
    text: "There used to be a cinema here.",
    translation: "Раніше тут був кінотеатр.",
    hint: {
      sentenceWithBlank: "There [____] to be a cinema here.",
      options: [
        { text: "used", isCorrect: true, explanation: "Конструкція 'used to' описує те, що було раніше, але вже не існує." },
        { text: "use", isCorrect: false, explanation: "Потрібна форма минулого часу (used)." },
        { text: "was", isCorrect: false, explanation: "Після was не може стояти інфінітив 'to be'." }
      ]
    },
    tense: "Past Habit",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "25",
    text: "I am used to waking up early.",
    translation: "Я звик прокидатися рано.",
    hint: {
      sentenceWithBlank: "I am [____] [____] waking up early.",
      options: [
        { text: "used to", isCorrect: true, explanation: "Конструкція 'to be used to + V-ing' означає звичку, яка вже сформувалася до теперішнього моменту." },
        { text: "use to", isCorrect: false, explanation: "Щоб передати звичку, потрібна форма used." },
        { text: "used", isCorrect: false, explanation: "Пропущено прийменник to, обов'язковий у цій конструкції." }
      ]
    },
    tense: "Present Habit",
    topic: "Daily Life",
    lengthWords: 7
  },
    {
    id: "26",
    text: "Look! It is snowing outside.",
    translation: "Дивись! Надворі йде сніг.",
    hint: {
      sentenceWithBlank: "Look! It [____] outside.",
      options: [
        { text: "is snowing", isCorrect: true, explanation: "Present Continuous — для дій, що відбуваються саме зараз (на це вказує 'Look!')." },
        { text: "snows", isCorrect: false, explanation: "Present Simple означає регулярну дію, а не ту, що триває цієї миті." },
        { text: "snowing", isCorrect: false, explanation: "Пропущено допоміжне дієслово 'is'." }
      ]
    },
    tense: "Present Continuous",
    topic: "Nature",
    lengthWords: 5
  },
  {
    id: "27",
    text: "What were you doing when I called you?",
    translation: "Що ти робив, коли я тобі подзвонив?",
    hint: {
      sentenceWithBlank: "What [____] you [____] when I called you?",
      options: [
        { text: "were / doing", isCorrect: true, explanation: "Past Continuous описує тривалу дію в минулому, яку перервала інша дія (коли я подзвонив)." },
        { text: "did / do", isCorrect: false, explanation: "Past Simple уживають для послідовних завершених дій, а не для процесу." },
        { text: "are / doing", isCorrect: false, explanation: "Present Continuous стосується теперішнього, а тут ідеться про минуле ('when I called')." }
      ]
    },
    tense: "Past Continuous",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "28",
    text: "While she was cooking, he was reading a book.",
    translation: "Поки вона готувала, він читав книжку.",
    hint: {
      sentenceWithBlank: "While she [____], he was reading a book.",
      options: [
        { text: "was cooking", isCorrect: true, explanation: "Past Continuous уживають для двох одночасних тривалих дій у минулому." },
        { text: "cooked", isCorrect: false, explanation: "Past Simple означає завершену дію, а 'while' вказує саме на процес." },
        { text: "is cooking", isCorrect: false, explanation: "Друга частина речення в минулому ('was reading'), тож і перша має бути в минулому." }
      ]
    },
    tense: "Past Continuous",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "29",
    text: "I have already finished the first task.",
    translation: "Я вже виконав перше завдання.",
    hint: {
      sentenceWithBlank: "I [____] already [____] the first task.",
      options: [
        { text: "have / finished", isCorrect: true, explanation: "Present Perfect — для завершених дій із результатом у теперішньому (маркер 'already')." },
        { text: "am / finishing", isCorrect: false, explanation: "Present Continuous означав би, що дія ще триває, а 'already' — що її вже завершено." },
        { text: "had / finished", isCorrect: false, explanation: "Past Perfect потрібен тоді, коли є ще одна дія в минулому." }
      ]
    },
    tense: "Present Perfect",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "30",
    text: "Have you ever been to London?",
    translation: "Ти коли-небудь був у Лондоні?",
    hint: {
      sentenceWithBlank: "Have you [____] been to London?",
      options: [
        { text: "ever", isCorrect: true, explanation: "Слово 'ever' (коли-небудь) часто уживають у запитаннях Present Perfect про життєвий досвід." },
        { text: "never", isCorrect: false, explanation: "'never' означає 'ніколи' і вживається в стверджувальних реченнях із заперечним змістом." },
        { text: "yet", isCorrect: false, explanation: "'yet' ставлять у кінці речення." }
      ]
    },
    tense: "Present Perfect",
    topic: "Travel",
    lengthWords: 6
  },
  {
    id: "31",
    text: "She has lived here since 2015.",
    translation: "Вона живе тут із 2015 року.",
    hint: {
      sentenceWithBlank: "She has lived here [____] 2015.",
      options: [
        { text: "since", isCorrect: true, explanation: "'since' указує на конкретний момент, коли дія почалася." },
        { text: "for", isCorrect: false, explanation: "'for' указує на тривалість періоду (наприклад, for 5 years)." },
        { text: "from", isCorrect: false, explanation: "'from' зазвичай потребує пари — 'to' або 'until'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "32",
    text: "We haven't seen each other for ages.",
    translation: "Ми не бачилися цілу вічність.",
    hint: {
      sentenceWithBlank: "We [____] each other for ages.",
      options: [
        { text: "haven't seen", isCorrect: true, explanation: "Present Perfect показує, що дії не було від минулого і дотепер ('for ages')." },
        { text: "didn't see", isCorrect: false, explanation: "Past Simple указує на завершений період, а ми говоримо про період, який триває досі." },
        { text: "don't see", isCorrect: false, explanation: "Present Simple описує регулярні дії, а не стан 'відтоді й дотепер'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "33",
    text: "When I arrived, the meeting had already started.",
    translation: "Коли я приїхав, зустріч уже почалася.",
    hint: {
      sentenceWithBlank: "When I arrived, the meeting [____] already [____].",
      options: [
        { text: "had / started", isCorrect: true, explanation: "Past Perfect показує дію, що завершилася раніше за іншу дію в минулому ('When I arrived')." },
        { text: "has / started", isCorrect: false, explanation: "Present Perfect не вживають, якщо основна дія в минулому ('arrived')." },
        { text: "was / starting", isCorrect: false, explanation: "Це означало б, що зустріч тільки починалася, а 'already' каже, що вона вже почалася." }
      ]
    },
    tense: "Past Perfect",
    topic: "Workplace",
    lengthWords: 8
  },
  {
    id: "34",
    text: "He realized he had lost his wallet.",
    translation: "Він зрозумів, що загубив гаманець.",
    hint: {
      sentenceWithBlank: "He realized he [____] his wallet.",
      options: [
        { text: "had lost", isCorrect: true, explanation: "Past Perfect уживають для дії ('загубив'), яка сталася раніше за іншу дію в минулому ('зрозумів')." },
        { text: "loses", isCorrect: false, explanation: "Present Simple не узгоджується за часом (головне речення в минулому)." },
        { text: "has lost", isCorrect: false, explanation: "Present Perfect пов'язує дію з теперішнім, але усвідомлення ('realized') було в минулому." }
      ]
    },
    tense: "Past Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "35",
    text: "By next year, they will have completed the project.",
    translation: "До наступного року вони завершать проєкт.",
    hint: {
      sentenceWithBlank: "By next year, they [____] the project.",
      options: [
        { text: "will have completed", isCorrect: true, explanation: "Future Perfect указує на дію, яка завершиться до певного моменту в майбутньому ('By next year')." },
        { text: "will complete", isCorrect: false, explanation: "Ця форма передає просто факт у майбутньому, а 'by' вимагає Future Perfect." },
        { text: "are completing", isCorrect: false, explanation: "Present Continuous говорить про плани, але не передає ідеї завершеності до певного моменту." }
      ]
    },
    tense: "Future Perfect",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "36",
    text: "I will be flying to Paris this time tomorrow.",
    translation: "Завтра о цій порі я летітиму до Парижа.",
    hint: {
      sentenceWithBlank: "I [____] to Paris this time tomorrow.",
      options: [
        { text: "will be flying", isCorrect: true, explanation: "Future Continuous описує процес, який триватиме в конкретний момент у майбутньому ('this time tomorrow')." },
        { text: "will fly", isCorrect: false, explanation: "Future Simple передає просто факт або рішення, а не процес у певний момент." },
        { text: "fly", isCorrect: false, explanation: "Present Simple можна вжити для розкладу, але тут наголос саме на процесі польоту." }
      ]
    },
    tense: "Future Continuous",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "37",
    text: "This is the best coffee I have ever tasted.",
    translation: "Це найкраща кава, яку я коли-небудь пробував.",
    hint: {
      sentenceWithBlank: "This is the best coffee I have [____] tasted.",
      options: [
        { text: "ever", isCorrect: true, explanation: "'ever' уживають, коли говорять про життєвий досвід, особливо після найвищого ступеня ('the best')." },
        { text: "never", isCorrect: false, explanation: "'never' змінило б зміст на 'ніколи не пробував'." },
        { text: "already", isCorrect: false, explanation: "'already' означає 'уже', що не пасує до контексту 'найкращий з усіх'." }
      ]
    },
    tense: "Present Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "38",
    text: "It's the first time I have driven an electric car.",
    translation: "Я вперше веду електромобіль.",
    hint: {
      sentenceWithBlank: "It's the first time I [____] an electric car.",
      options: [
        { text: "have driven", isCorrect: true, explanation: "Конструкція 'It's the first time...' завжди вимагає Present Perfect." },
        { text: "drive", isCorrect: false, explanation: "Present Simple тут не вживають, бо йдеться про досвід." },
        { text: "drove", isCorrect: false, explanation: "Past Simple уживають для завершених подій, а цей досвід актуальний саме зараз." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "39",
    text: "She was tired because she had worked all night.",
    translation: "Вона втомилася, бо працювала цілу ніч.",
    hint: {
      sentenceWithBlank: "She was tired because she [____] all night.",
      options: [
        { text: "had worked", isCorrect: true, explanation: "Past Perfect пояснює причину ('працювала') стану в минулому ('була втомлена')." },
        { text: "has worked", isCorrect: false, explanation: "Present Perfect не підходить, бо результат ('була втомлена') лишився в минулому." },
        { text: "worked", isCorrect: false, explanation: "Past Simple можливий, але Past Perfect краще підкреслює передування та причину." }
      ]
    },
    tense: "Past Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "40",
    text: "I had never seen such a beautiful sunset before.",
    translation: "Я ніколи раніше не бачив такого гарного заходу сонця.",
    hint: {
      sentenceWithBlank: "I [____] seen such a beautiful sunset before.",
      options: [
        { text: "had never", isCorrect: true, explanation: "Past Perfect підкреслює, що такого досвіду не було до певного моменту в минулому." },
        { text: "have never", isCorrect: false, explanation: "Present Perfect стосується теперішнього, а 'before' указує на момент у минулому." },
        { text: "did never", isCorrect: false, explanation: "Граматично неправильна конструкція (сказали б 'never saw', але тут потрібен Past Perfect)." }
      ]
    },
    tense: "Past Perfect",
    topic: "Nature",
    lengthWords: 9
  },
  {
    id: "41",
    text: "I have been learning English for three years.",
    translation: "Я вивчаю англійську вже три роки.",
    hint: {
      sentenceWithBlank: "I [____] English for three years.",
      options: [
        { text: "have been learning", isCorrect: true, explanation: "Present Perfect Continuous підкреслює тривалість дії, яка почалася в минулому й триває досі." },
        { text: "am learning", isCorrect: false, explanation: "Present Continuous не вживають із зазначенням періоду часу ('for three years')." },
        { text: "learn", isCorrect: false, explanation: "Present Simple описує факти, а не процес, що триває певний час." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Education",
    lengthWords: 8
  },
  {
    id: "42",
    text: "Why are your hands dirty? — I've been fixing my bike.",
    translation: "Чому в тебе брудні руки? — Я лагодив велосипед.",
    hint: {
      sentenceWithBlank: "Why are your hands dirty? — I've [____] my bike.",
      options: [
        { text: "been fixing", isCorrect: true, explanation: "Present Perfect Continuous пояснює видимий результат у теперішньому (брудні руки) недавнім тривалим процесом." },
        { text: "fixed", isCorrect: false, explanation: "Present Perfect наголошує на завершеності, а тут важливий сам процес, який залишив сліди." },
        { text: "fixing", isCorrect: false, explanation: "Бракує дієслова 'been' для утворення Present Perfect Continuous." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 11
  },
  {
    id: "43",
    text: "It has been raining all day.",
    translation: "Дощ іде цілий день.",
    hint: {
      sentenceWithBlank: "It [____] all day.",
      options: [
        { text: "has been raining", isCorrect: true, explanation: "Present Perfect Continuous — для дії, що триває від минулого до цієї миті ('all day')." },
        { text: "is raining", isCorrect: false, explanation: "Present Continuous описує момент 'зараз', без наголосу на тривалості." },
        { text: "rains", isCorrect: false, explanation: "Present Simple означав би, що дощ іде взагалі, а не безперервно цілий день." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Nature",
    lengthWords: 6
  },
  {
    id: "44",
    text: "She had been waiting for two hours before the bus arrived.",
    translation: "Вона чекала дві години, перш ніж приїхав автобус.",
    hint: {
      sentenceWithBlank: "She [____] for two hours before the bus arrived.",
      options: [
        { text: "had been waiting", isCorrect: true, explanation: "Past Perfect Continuous показує, як довго тривала дія до іншої події в минулому." },
        { text: "has been waiting", isCorrect: false, explanation: "Present Perfect Continuous стосується теперішнього, а тут друга дія ('arrived') у минулому." },
        { text: "was waiting", isCorrect: false, explanation: "Із прийменником 'for' (тривалість) перед іншою дією в минулому потрібен Past Perfect Continuous." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "45",
    text: "They had been living there for five years when the company closed.",
    translation: "Вони прожили там п'ять років, коли компанія закрилася.",
    hint: {
      sentenceWithBlank: "They [____] there for five years when the company closed.",
      options: [
        { text: "had been living", isCorrect: true, explanation: "Past Perfect Continuous показує, як довго тривала дія до певного моменту в минулому." },
        { text: "were living", isCorrect: false, explanation: "Past Continuous не вживають, коли зазначено тривалість ('for five years')." },
        { text: "have been living", isCorrect: false, explanation: "Події відбуваються в минулому ('closed'), тому потрібен минулий час." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "46",
    text: "His eyes were red because he had been staring at the screen for hours.",
    translation: "Його очі були червоні, бо він годинами дивився в екран.",
    hint: {
      sentenceWithBlank: "His eyes were red because he [____] at the screen for hours.",
      options: [
        { text: "had been staring", isCorrect: true, explanation: "Past Perfect Continuous уживають для тривалого процесу, що спричинив стан у минулому." },
        { text: "has been staring", isCorrect: false, explanation: "Наслідок ('were red') лишається в минулому, тому потрібен минулий час." },
        { text: "was staring", isCorrect: false, explanation: "Past Continuous не передає ані передування, ані тривалості, що дала такий результат." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 14
  },
  {
    id: "47",
    text: "By midnight, I will have been working on this design for ten hours.",
    translation: "До півночі я працюватиму над цим дизайном уже десять годин.",
    hint: {
      sentenceWithBlank: "By midnight, I [____] on this design for ten hours.",
      options: [
        { text: "will have been working", isCorrect: true, explanation: "Future Perfect Continuous показує, як довго триватиме дія до певного моменту в майбутньому." },
        { text: "will work", isCorrect: false, explanation: "Future Simple не передає тривалості до моменту в майбутньому." },
        { text: "will be working", isCorrect: false, explanation: "Future Continuous описує процес, але не наголошує на його тривалості ('for ten hours')." }
      ]
    },
    tense: "Future Perfect Continuous",
    topic: "Workplace",
    lengthWords: 13
  },
  {
    id: "48",
    text: "How long have you been looking for a job?",
    translation: "Як довго ти вже шукаєш роботу?",
    hint: {
      sentenceWithBlank: "How long [____] you [____] for a job?",
      options: [
        { text: "have / been looking", isCorrect: true, explanation: "Запитання з 'How long' про незавершені дії вимагають Present Perfect Continuous." },
        { text: "are / looking", isCorrect: false, explanation: "Present Continuous ставлять, коли питають про момент мовлення ('що ти шукаєш зараз?'), а не 'як довго'." },
        { text: "do / look", isCorrect: false, explanation: "Present Simple тут не підходить, бо це не регулярна дія." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "49",
    text: "We had been driving for miles before we realized we were lost.",
    translation: "Ми проїхали багато миль, перш ніж зрозуміли, що заблукали.",
    hint: {
      sentenceWithBlank: "We [____] for miles before we realized we were lost.",
      options: [
        { text: "had been driving", isCorrect: true, explanation: "Past Perfect Continuous — для процесу, який тривав до певної події в минулому." },
        { text: "have been driving", isCorrect: false, explanation: "Усі події в реченні стосуються минулого ('realized', 'were'), тож Present Perfect не підходить." },
        { text: "were driving", isCorrect: false, explanation: "Past Continuous не підкреслює ані накопиченого результату, ані тривалості до іншої дії." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 12
  },
  {
    id: "50",
    text: "She has been running, so she is out of breath.",
    translation: "Вона бігла, тому й захекалася.",
    hint: {
      sentenceWithBlank: "She [____], so she is out of breath.",
      options: [
        { text: "has been running", isCorrect: true, explanation: "Present Perfect Continuous пояснює теперішній стан ('out of breath') недавнім процесом." },
        { text: "is running", isCorrect: false, explanation: "Present Continuous означав би, що вона біжить просто зараз." },
        { text: "ran", isCorrect: false, explanation: "Past Simple зосереджується на самому факті бігу, а Present Perfect Continuous краще показує зв'язок процесу з результатом." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 10
  },
    {
    id: "51",
    text: "You must wear a seatbelt while driving.",
    translation: "Ви повинні пристібатися ременем безпеки під час керування автомобілем.",
    hint: {
      sentenceWithBlank: "You [____] wear a seatbelt while driving.",
      options: [
        { text: "must", isCorrect: true, explanation: "Must виражає суворий обов'язок або правило." },
        { text: "have", isCorrect: false, explanation: "Після have потрібна частка to (have to)." },
        { text: "can", isCorrect: false, explanation: "Can означає фізичну спроможність, а тут ідеться про правило." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "52",
    text: "You don't have to pay for the tickets; they are free.",
    translation: "Тобі не обов'язково платити за квитки — вони безкоштовні.",
    hint: {
      sentenceWithBlank: "You [____] pay for the tickets; they are free.",
      options: [
        { text: "don't have to", isCorrect: true, explanation: "Don't have to означає, що потреби немає (не обов'язково)." },
        { text: "mustn't", isCorrect: false, explanation: "Mustn't означає сувору заборону (не можна)." },
        { text: "shouldn't", isCorrect: false, explanation: "Shouldn't — це порада (не варто), а тут просто констатація, що потреби немає." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "53",
    text: "You shouldn't eat so much fast food.",
    translation: "Тобі не варто їсти так багато фастфуду.",
    hint: {
      sentenceWithBlank: "You [____] eat so much fast food.",
      options: [
        { text: "shouldn't", isCorrect: true, explanation: "Shouldn't уживають, коли дають пораду (не варто)." },
        { text: "don't have to", isCorrect: false, explanation: "Означає 'не обов'язково' і для поради не підходить." },
        { text: "can't", isCorrect: false, explanation: "Can't виражає заборону або неможливість." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "54",
    text: "He might come to the meeting, but he isn't sure.",
    translation: "Він може прийти на зустріч, але не впевнений.",
    hint: {
      sentenceWithBlank: "He [____] come to the meeting, but he isn't sure.",
      options: [
        { text: "might", isCorrect: true, explanation: "Might виражає невелику ймовірність у майбутньому." },
        { text: "must", isCorrect: false, explanation: "Must означає впевненість або обов'язок." },
        { text: "can", isCorrect: false, explanation: "Can зазвичай не вживають для ймовірності поодинокої майбутньої події." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Workplace",
    lengthWords: 10
  },
  {
    id: "55",
    text: "May I borrow your pen for a moment?",
    translation: "Можна позичити твою ручку на хвилинку?",
    hint: {
      sentenceWithBlank: "[____] I borrow your pen for a moment?",
      options: [
        { text: "May", isCorrect: true, explanation: "May вживають, коли ввічливо просять дозволу." },
        { text: "Must", isCorrect: false, explanation: "Must передає обов'язок, а не прохання." },
        { text: "Should", isCorrect: false, explanation: "Should — для поради (чи варто мені)." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "56",
    text: "She can't be at home; I saw her at the office five minutes ago.",
    translation: "Вона не може бути вдома — я бачив її в офісі п'ять хвилин тому.",
    hint: {
      sentenceWithBlank: "She [____] be at home; I saw her at the office five minutes ago.",
      options: [
        { text: "can't", isCorrect: true, explanation: "Can't уживають, коли впевнені, що щось неможливе." },
        { text: "mustn't", isCorrect: false, explanation: "Mustn't означає сувору заборону, а не логічний висновок." },
        { text: "might not", isCorrect: false, explanation: "Might not передає лише невелику ймовірність, а тут мовець упевнений." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 14
  },
  {
    id: "57",
    text: "He must have forgotten about our appointment.",
    translation: "Він, певно, забув про нашу зустріч.",
    hint: {
      sentenceWithBlank: "He [____] about our appointment.",
      options: [
        { text: "must have forgotten", isCorrect: true, explanation: "Must + have + V3 виражає впевнене припущення про дію в минулому." },
        { text: "must forget", isCorrect: false, explanation: "Ця форма стосується теперішнього або майбутнього." },
        { text: "should have forgotten", isCorrect: false, explanation: "Означає 'йому слід було б забути'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "58",
    text: "You should have told me the truth earlier.",
    translation: "Тобі слід було сказати мені правду раніше.",
    hint: {
      sentenceWithBlank: "You [____] me the truth earlier.",
      options: [
        { text: "should have told", isCorrect: true, explanation: "Should + have + V3 виражає докір за те, чого не зробили в минулому." },
        { text: "should tell", isCorrect: false, explanation: "Ця форма стосується теперішнього або майбутнього часу." },
        { text: "must have told", isCorrect: false, explanation: "Означає впевнене припущення: 'ти, певно, сказав'." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "59",
    text: "I could play the piano when I was a child.",
    translation: "Я вмів грати на піаніно, коли був дитиною.",
    hint: {
      sentenceWithBlank: "I [____] play the piano when I was a child.",
      options: [
        { text: "could", isCorrect: true, explanation: "Could — форма минулого часу від can; уживається для вмінь у минулому." },
        { text: "can", isCorrect: false, explanation: "Can стосується теперішнього часу." },
        { text: "must", isCorrect: false, explanation: "Must означає обов'язок, а не вміння." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "60",
    text: "We had better leave now before it gets dark.",
    translation: "Нам краще піти зараз, поки не стемніло.",
    hint: {
      sentenceWithBlank: "We [____] leave now before it gets dark.",
      options: [
        { text: "had better", isCorrect: true, explanation: "Had better (краще б) уживають для наполегливих порад чи попереджень." },
        { text: "would rather", isCorrect: false, explanation: "Would rather виражає перевагу (волів би)." },
        { text: "should to", isCorrect: false, explanation: "Після should частка to не ставиться." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "61",
    text: "If you heat ice, it melts.",
    translation: "Якщо нагріти лід, він тане.",
    hint: {
      sentenceWithBlank: "If you heat ice, it [____].",
      options: [
        { text: "melts", isCorrect: true, explanation: "У Zero Conditional (загальновідомі факти) обидві частини стоять у Present Simple." },
        { text: "will melt", isCorrect: false, explanation: "Для наукових фактів уживають Present Simple, а не майбутній час." },
        { text: "melted", isCorrect: false, explanation: "Минулий час тут не підходить." }
      ]
    },
    tense: "Conditionals",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "62",
    text: "If I have time tonight, I will call you.",
    translation: "Якщо в мене буде час сьогодні ввечері, я тобі подзвоню.",
    hint: {
      sentenceWithBlank: "If I [____] time tonight, I [____] you.",
      options: [
        { text: "have / will call", isCorrect: true, explanation: "First Conditional: умова в Present Simple (have), наслідок у Future Simple (will call)." },
        { text: "will have / call", isCorrect: false, explanation: "Після if в умові майбутній час (will) не вживають." },
        { text: "had / would call", isCorrect: false, explanation: "Це Second Conditional для нереальних ситуацій, а тут умова цілком реальна." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "63",
    text: "Unless you study hard, you won't pass the exam.",
    translation: "Якщо ти не вчитимешся старанно, ти не складеш іспит.",
    hint: {
      sentenceWithBlank: "[____] you study hard, you won't pass the exam.",
      options: [
        { text: "Unless", isCorrect: true, explanation: "Unless перекладається як 'якщо не' (if not) і вже містить заперечення." },
        { text: "If", isCorrect: false, explanation: "З if вийшло б 'Якщо ти вчитимешся, ти не складеш', що нелогічно." },
        { text: "Without", isCorrect: false, explanation: "Without — прийменник (без), після нього має стояти іменник або герундій." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 9
  },
  {
    id: "64",
    text: "As soon as I arrive, I will let you know.",
    translation: "Щойно я приїду, я дам тобі знати.",
    hint: {
      sentenceWithBlank: "[____] I arrive, I will let you know.",
      options: [
        { text: "As soon as", isCorrect: true, explanation: "As soon as (щойно, як тільки) уживають у підрядних часу з Present Simple." },
        { text: "Until", isCorrect: false, explanation: "Until означає 'доки не', і це змінює зміст речення." },
        { text: "While", isCorrect: false, explanation: "While (поки, тоді як) уживають для тривалих процесів." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "65",
    text: "If I won the lottery, I would buy a house by the sea.",
    translation: "Якби я виграв у лотерею, я купив би будинок біля моря.",
    hint: {
      sentenceWithBlank: "If I [____] the lottery, I [____] a house by the sea.",
      options: [
        { text: "won / would buy", isCorrect: true, explanation: "Second Conditional: умова в Past Simple (won), наслідок — would + інфінітив." },
        { text: "win / would buy", isCorrect: false, explanation: "Форма win у теперішньому часі не узгоджується з would в головному реченні." },
        { text: "won / will buy", isCorrect: false, explanation: "Після Past Simple в умові вживають would, а не will." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 13
  },
  {
    id: "66",
    text: "What would you do if you were in my shoes?",
    translation: "Що б ти зробив на моєму місці?",
    hint: {
      sentenceWithBlank: "What [____] if you [____] in my shoes?",
      options: [
        { text: "would you do / were", isCorrect: true, explanation: "Second Conditional: у запитанні would + інфінітив, а в умові дієслово to be має форму were для всіх осіб." },
        { text: "will you do / are", isCorrect: false, explanation: "Це First Conditional, а вислів 'in my shoes' указує на гіпотетичну ситуацію." },
        { text: "do you do / was", isCorrect: false, explanation: "Для умовних речень другого типу така граматика неправильна." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "67",
    text: "If I had more free time, I would take up photography.",
    translation: "Якби я мав більше вільного часу, я зайнявся б фотографією.",
    hint: {
      sentenceWithBlank: "If I [____] more free time, I [____] take up photography.",
      options: [
        { text: "had / would", isCorrect: true, explanation: "Second Conditional: нереальна умова в теперішньому (had) і результат (would)." },
        { text: "have / will", isCorrect: false, explanation: "Ця форма передає реальну умову, а тут наголошено на нереальності ситуації." },
        { text: "had had / would have", isCorrect: false, explanation: "Це Third Conditional, він стосується минулого." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "68",
    text: "If we had left earlier, we wouldn't have missed the flight.",
    translation: "Якби ми виїхали раніше, ми б не запізнилися на рейс.",
    hint: {
      sentenceWithBlank: "If we [____] earlier, we [____] the flight.",
      options: [
        { text: "had left / wouldn't have missed", isCorrect: true, explanation: "Third Conditional: нереальна умова в минулому (Past Perfect) і результат у минулому (would have + V3)." },
        { text: "left / wouldn't miss", isCorrect: false, explanation: "Це Second Conditional — він стосується теперішнього, а не завершеного минулого." },
        { text: "had left / wouldn't miss", isCorrect: false, explanation: "Це мішаний тип, і за змістом він не підходить, бо обидві дії в минулому." }
      ]
    },
    tense: "Conditionals",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "69",
    text: "I wouldn't have known about the project if you hadn't told me.",
    translation: "Я б не дізнався про проєкт, якби ти мені не сказав.",
    hint: {
      sentenceWithBlank: "I wouldn't [____] about the project if you hadn't told me.",
      options: [
        { text: "have known", isCorrect: true, explanation: "Third Conditional: головне речення будують за схемою would have + V3 для ситуації в минулому." },
        { text: "know", isCorrect: false, explanation: "Форма wouldn't know стосується теперішнього часу." },
        { text: "knew", isCorrect: false, explanation: "Після would have має стояти третя форма дієслова (known), а не друга." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "70",
    text: "If I had studied harder at university, I would have a better job now.",
    translation: "Якби я краще вчився в університеті, зараз у мене була б краща робота.",
    hint: {
      sentenceWithBlank: "If I [____] harder at university, I [____] a better job now.",
      options: [
        { text: "had studied / would have", isCorrect: true, explanation: "Mixed Conditional: умова в минулому (Past Perfect), а наслідок у теперішньому (would + V1)." },
        { text: "studied / would have", isCorrect: false, explanation: "Навчання в університеті вже в минулому, тому потрібен Past Perfect." },
        { text: "had studied / would have had", isCorrect: false, explanation: "Наслідок стосується теперішнього (now), тому would have, а не would have had." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 14
  },
  {
    id: "71",
    text: "If he spoke French, he would have translated that document yesterday.",
    translation: "Якби він говорив французькою, він переклав би той документ учора.",
    hint: {
      sentenceWithBlank: "If he [____] French, he [____] that document yesterday.",
      options: [
        { text: "spoke / would have translated", isCorrect: true, explanation: "Mixed Conditional: умова постійна (Past Simple), а наслідок був у минулому (would have + V3)." },
        { text: "had spoken / would translate", isCorrect: false, explanation: "Знання мови — постійна характеристика, а переклад мав бути вчора." },
        { text: "spoke / would translate", isCorrect: false, explanation: "Переклад стосується вчорашнього дня (yesterday), тому потрібно would have + V3." }
      ]
    },
    tense: "Conditionals",
    topic: "Workplace",
    lengthWords: 11
  },
  {
    id: "72",
    text: "I wish I had more money.",
    translation: "Шкода, що в мене немає більше грошей.",
    hint: {
      sentenceWithBlank: "I [____] I [____] more money.",
      options: [
        { text: "wish / had", isCorrect: true, explanation: "Конструкцію I wish + Past Simple уживають, щоб висловити жаль про теперішнє." },
        { text: "wish / have", isCorrect: false, explanation: "Після I wish про теперішнє потрібно вживати Past Simple." },
        { text: "hope / had", isCorrect: false, explanation: "Після hope зазвичай уживають реальний час — теперішній або майбутній." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "73",
    text: "I wish you wouldn't make so much noise.",
    translation: "Я б хотів, щоб ти не шумів так сильно.",
    hint: {
      sentenceWithBlank: "I wish you [____] make so much noise.",
      options: [
        { text: "wouldn't", isCorrect: true, explanation: "I wish + would/wouldn't передає роздратування чиєюсь поведінкою в теперішньому." },
        { text: "don't", isCorrect: false, explanation: "Після I wish не вживають Present Simple." },
        { text: "didn't", isCorrect: false, explanation: "Форма didn't можлива, але wouldn't краще передає роздратування чужою поведінкою." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "74",
    text: "If only I hadn't said that to her yesterday.",
    translation: "Якби ж я не сказав їй цього вчора.",
    hint: {
      sentenceWithBlank: "If [____] I [____] said that to her yesterday.",
      options: [
        { text: "only / hadn't", isCorrect: true, explanation: "If only + Past Perfect виражає сильний жаль про минуле." },
        { text: "only / didn't", isCorrect: false, explanation: "Дія була вчора, тому потрібен Past Perfect, а не Past Simple." },
        { text: "just / haven't", isCorrect: false, explanation: "Сполуки If just не існує, а haven't — це Present Perfect, який не пасує до 'вчора'." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "75",
    text: "It's time we went home.",
    translation: "Час нам іти додому.",
    hint: {
      sentenceWithBlank: "It's time we [____] home.",
      options: [
        { text: "went", isCorrect: true, explanation: "Після конструкції It's time (давно час) уживають форму Past Simple." },
        { text: "go", isCorrect: false, explanation: "У конструкції It's time + підмет дієслово ставлять у Past Simple, а не в початкову форму." },
        { text: "are going", isCorrect: false, explanation: "Теперішній тривалий час тут не вживають." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 5
  },
    {
    "id": "76",
    "text": "This house was built in 1920.",
    "translation": "Цей будинок збудували 1920 року.",
    "hint": {
      "sentenceWithBlank": "This house [____] in 1920.",
      "options": [
        { "text": "was built", "isCorrect": true, "explanation": "Пасивний стан у минулому часі (Past Simple Passive) описує дію, виконану над об'єктом у минулому." },
        { "text": "built", "isCorrect": false, "explanation": "Тут потрібен пасивний стан, бо будинок не будував сам себе." },
        { "text": "is built", "isCorrect": false, "explanation": "Дія відбулася в минулому (1920 року), тому потрібен минулий час." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "77",
    "text": "The interface is being redesigned at the moment.",
    "translation": "Інтерфейс саме зараз переробляють.",
    "hint": {
      "sentenceWithBlank": "The interface [____] at the moment.",
      "options": [
        { "text": "is being redesigned", "isCorrect": true, "explanation": "Present Continuous Passive уживають для дії, що відбувається просто зараз (at the moment)." },
        { "text": "is redesigned", "isCorrect": false, "explanation": "Present Simple Passive указує на регулярну дію, а не на ту, що триває цієї миті." },
        { "text": "has been redesigned", "isCorrect": false, "explanation": "Це Present Perfect Passive — він означає вже завершену дію." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 8
  },
  {
    "id": "78",
    "text": "The new software has just been installed.",
    "translation": "Нове програмне забезпечення щойно встановили.",
    "hint": {
      "sentenceWithBlank": "The new software [____].",
      "options": [
        { "text": "has just been installed", "isCorrect": true, "explanation": "Present Perfect Passive уживають для щойно завершеної дії (зі словом 'just')." },
        { "text": "has just installed", "isCorrect": false, "explanation": "Програма не може встановити сама себе — потрібен пасивний стан." },
        { "text": "was just installed", "isCorrect": false, "explanation": "Із прислівником 'just' зазвичай уживають Present Perfect, а не Past Simple." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 7
  },
  {
    "id": "79",
    "text": "English is spoken all over the world.",
    "translation": "Англійською говорять у всьому світі.",
    "hint": {
      "sentenceWithBlank": "English [____] all over the world.",
      "options": [
        { "text": "is spoken", "isCorrect": true, "explanation": "Present Simple Passive уживають для загальновідомих фактів." },
        { "text": "is speaking", "isCorrect": false, "explanation": "Мова не може говорити сама — потрібен пасивний стан." },
        { "text": "spoke", "isCorrect": false, "explanation": "Це активний стан у минулому часі." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "80",
    "text": "The letters will be sent tomorrow morning.",
    "translation": "Листи відправлять завтра вранці.",
    "hint": {
      "sentenceWithBlank": "The letters [____] tomorrow morning.",
      "options": [
        { "text": "will be sent", "isCorrect": true, "explanation": "Future Simple Passive описує дію над об'єктом у майбутньому." },
        { "text": "will send", "isCorrect": false, "explanation": "Листи не можуть відправити самі себе — потрібен пасив." },
        { "text": "are sent", "isCorrect": false, "explanation": "Це Present Simple Passive, а дія відбудеться завтра." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "81",
    "text": "I need to get my hair cut this week.",
    "translation": "Мені треба підстригтися цього тижня.",
    "hint": {
      "sentenceWithBlank": "I need to [____] this week.",
      "options": [
        { "text": "get my hair cut", "isCorrect": true, "explanation": "Конструкція 'get/have something done' означає, що дію для вас виконує хтось інший." },
        { "text": "cut my hair", "isCorrect": false, "explanation": "Це означало б, що ви самі збираєтеся стригти собі волосся." },
        { "text": "get cutting my hair", "isCorrect": false, "explanation": "Граматично неправильна конструкція." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 9
  },
  {
    "id": "82",
    "text": "He had his laptop stolen while he was traveling.",
    "translation": "У нього вкрали ноутбук під час подорожі.",
    "hint": {
      "sentenceWithBlank": "He [____] while he was traveling.",
      "options": [
        { "text": "had his laptop stolen", "isCorrect": true, "explanation": "Конструкцію 'have something done' уживають і для неприємного досвіду (хтось украв його ноутбук)." },
        { "text": "stole his laptop", "isCorrect": false, "explanation": "Це означає, що він сам украв свій ноутбук." },
        { "text": "had stolen his laptop", "isCorrect": false, "explanation": "Це Past Perfect в активному стані: він украв свій ноутбук раніше за якийсь момент у минулому." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "83",
    "text": "She was made to clean the whole room by her mother.",
    "translation": "Мама змусила її прибрати всю кімнату.",
    "hint": {
      "sentenceWithBlank": "She [____] to clean the whole room by her mother.",
      "options": [
        { "text": "was made", "isCorrect": true, "explanation": "У пасивному стані дієслово 'make' у значенні 'змушувати' вимагає частки 'to' перед наступним дієсловом." },
        { "text": "made", "isCorrect": false, "explanation": "Активний стан змінив би зміст: 'Вона змусила'." },
        { "text": "has made", "isCorrect": false, "explanation": "Це теж активний стан, тільки в Present Perfect." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 11
  },
  {
    "id": "84",
    "text": "He is said to be the richest man in the city.",
    "translation": "Кажуть, він найбагатша людина в місті.",
    "hint": {
      "sentenceWithBlank": "He [____] to be the richest man in the city.",
      "options": [
        { "text": "is said", "isCorrect": true, "explanation": "Пасивна конструкція 'is said to' відповідає українському 'кажуть, що він...'." },
        { "text": "says", "isCorrect": false, "explanation": "Це означало б 'Він каже, що є найбагатшим...'." },
        { "text": "said", "isCorrect": false, "explanation": "Минулий час 'Він сказав' руйнує структуру речення." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "85",
    "text": "It is expected that the prices will drop soon.",
    "translation": "Очікується, що ціни скоро впадуть.",
    "hint": {
      "sentenceWithBlank": "[____] that the prices will drop soon.",
      "options": [
        { "text": "It is expected", "isCorrect": true, "explanation": "Безособову пасивну конструкцію уживають, щоб передати загальну думку чи очікування." },
        { "text": "It expects", "isCorrect": false, "explanation": "Слово 'It' само нічого 'очікувати' не може — потрібен пасив." },
        { "text": "They is expected", "isCorrect": false, "explanation": "Граматично неправильно: із 'They' уживають 'are', але тут потрібне безособове 'It'." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "86",
    "text": "He said that he was working on a new project.",
    "translation": "Він сказав, що працює над новим проєктом.",
    "hint": {
      "sentenceWithBlank": "He said that he [____] on a new project.",
      "options": [
        { "text": "was working", "isCorrect": true, "explanation": "За правилом узгодження часів Present Continuous із прямої мови переходить у Past Continuous." },
        { "text": "is working", "isCorrect": false, "explanation": "Головне речення в минулому ('said'), тож підрядне має узгодитися за часом." },
        { "text": "works", "isCorrect": false, "explanation": "Ця форма означає постійну дію (Present Simple) і порушує узгодження часів." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 10
  },
  {
    "id": "87",
    "text": "She told me she had already seen that movie.",
    "translation": "Вона сказала мені, що вже бачила цей фільм.",
    "hint": {
      "sentenceWithBlank": "She [____] me she had already seen that movie.",
      "options": [
        { "text": "told", "isCorrect": true, "explanation": "Дієслово 'tell' завжди вимагає прямого додатка (кому сказали — 'me')." },
        { "text": "said", "isCorrect": false, "explanation": "Після 'said' потрібен прийменник 'to', якщо зазначаємо кому: 'said to me'." },
        { "text": "spoke", "isCorrect": false, "explanation": "'Speak' означає 'говорити якоюсь мовою' або 'розмовляти з кимось' і непрямої мови не вводить." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Entertainment",
    "lengthWords": 9
  },
  {
    "id": "88",
    "text": "They said they would help us the following week.",
    "translation": "Вони сказали, що допоможуть нам наступного тижня.",
    "hint": {
      "sentenceWithBlank": "They said they [____] help us the following week.",
      "options": [
        { "text": "would", "isCorrect": true, "explanation": "При узгодженні часів 'will' (майбутній час) замінюють на 'would'." },
        { "text": "will", "isCorrect": false, "explanation": "Це порушення правила узгодження часів, бо головне речення в минулому." },
        { "text": "should", "isCorrect": false, "explanation": "Змінило б зміст на 'мали б допомогти', а не просто майбутня дія." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "89",
    "text": "He asked me where I lived.",
    "translation": "Він запитав мене, де я живу.",
    "hint": {
      "sentenceWithBlank": "He asked me where [____].",
      "options": [
        { "text": "I lived", "isCorrect": true, "explanation": "У непрямому запитанні порядок слів прямий, і діє узгодження часів." },
        { "text": "did I live", "isCorrect": false, "explanation": "Допоміжне дієслово не потрібне, бо це непряме, а не пряме запитання." },
        { "text": "I live", "isCorrect": false, "explanation": "Порушено узгодження часів (головне речення в минулому — asked)." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "90",
    "text": "She asked if I could help her with the task.",
    "translation": "Вона запитала, чи можу я допомогти їй із завданням.",
    "hint": {
      "sentenceWithBlank": "She asked [____] I could help her with the task.",
      "options": [
        { "text": "if", "isCorrect": true, "explanation": "Для загальних запитань (без питального слова) у непрямій мові уживають 'if' або 'whether'." },
        { "text": "that", "isCorrect": false, "explanation": "Слово 'that' уживають для тверджень, а не для запитань." },
        { "text": "can", "isCorrect": false, "explanation": "За структурою речення ця форма не підходить." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "91",
    "text": "The manager advised me to review the guidelines.",
    "translation": "Менеджер порадив мені переглянути настанови.",
    "hint": {
      "sentenceWithBlank": "The manager advised me [____] the guidelines.",
      "options": [
        { "text": "to review", "isCorrect": true, "explanation": "Після дієслів на кшталт 'advise', 'ask', 'tell' уживають інфінітив із часткою 'to'." },
        { "text": "reviewing", "isCorrect": false, "explanation": "Після 'advise' + особа герундій не вживають." },
        { "text": "review", "isCorrect": false, "explanation": "Пропущено частку 'to', обов'язкову для інфінітива." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "92",
    "text": "He denied making that mistake.",
    "translation": "Він заперечував, що зробив ту помилку.",
    "hint": {
      "sentenceWithBlank": "He denied [____] that mistake.",
      "options": [
        { "text": "making", "isCorrect": true, "explanation": "Після дієслова 'deny' уживають герундій (V-ing)." },
        { "text": "to make", "isCorrect": false, "explanation": "Інфінітив після 'deny' не вживають." },
        { "text": "make", "isCorrect": false, "explanation": "Граматично неправильна форма." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 5
  },
  {
    "id": "93",
    "text": "She promised not to tell anyone his secret.",
    "translation": "Вона пообіцяла нікому не розповідати його секрет.",
    "hint": {
      "sentenceWithBlank": "She promised [____] anyone his secret.",
      "options": [
        { "text": "not to tell", "isCorrect": true, "explanation": "Заперечну форму інфінітива утворюють, ставлячи 'not' перед 'to'." },
        { "text": "to not tell", "isCorrect": false, "explanation": "Такий порядок слів для стандартної граматики не зовсім коректний." },
        { "text": "don't tell", "isCorrect": false, "explanation": "Тут потрібен інфінітив, а не наказовий спосіб." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 8
  },
  {
    "id": "94",
    "text": "Although it was raining, we went for a walk.",
    "translation": "Хоча йшов дощ, ми пішли на прогулянку.",
    "hint": {
      "sentenceWithBlank": "[____] it was raining, we went for a walk.",
      "options": [
        { "text": "Although", "isCorrect": true, "explanation": "Сполучник 'although' (хоча) ставлять перед підметом і присудком." },
        { "text": "Despite", "isCorrect": false, "explanation": "Після 'despite' має стояти іменник або герундій, а не повне речення (it was raining)." },
        { "text": "However", "isCorrect": false, "explanation": "Це слово зазвичай уживають як вставне і виділяють комою." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "95",
    "text": "Despite the heavy traffic, we arrived on time.",
    "translation": "Попри затори, ми приїхали вчасно.",
    "hint": {
      "sentenceWithBlank": "[____] the heavy traffic, we arrived on time.",
      "options": [
        { "text": "Despite", "isCorrect": true, "explanation": "'Despite' (попри, незважаючи на) уживають з іменником або герундієм." },
        { "text": "Although", "isCorrect": false, "explanation": "Після 'although' має стояти повне речення (підмет + присудок)." },
        { "text": "In spite", "isCorrect": false, "explanation": "Ця форма потребує прийменника 'of' (In spite of)." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "Travel",
    "lengthWords": 8
  },
  {
    "id": "96",
    "text": "Seldom have I seen such a beautiful piece of art.",
    "translation": "Рідко я бачив такий гарний твір мистецтва.",
    "hint": {
      "sentenceWithBlank": "[____] such a beautiful piece of art.",
      "options": [
        { "text": "Seldom have I seen", "isCorrect": true, "explanation": "На початку речення заперечні або обмежувальні прислівники (seldom) вимагають інверсії — зворотного порядку слів." },
        { "text": "Seldom I have seen", "isCorrect": false, "explanation": "Після 'seldom' на початку речення потрібна інверсія (порядок слів як у запитанні)." },
        { "text": "Have I seldom seen", "isCorrect": false, "explanation": "Прислівник 'seldom' має стояти першим." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "97",
    "text": "No sooner had I closed the door than the phone rang.",
    "translation": "Не встиг я зачинити двері, як задзвонив телефон.",
    "hint": {
      "sentenceWithBlank": "[____] closed the door than the phone rang.",
      "options": [
        { "text": "No sooner had I", "isCorrect": true, "explanation": "Конструкція 'No sooner + інверсія (had I) ... than' означає 'не встиг я..., як...'." },
        { "text": "No sooner I had", "isCorrect": false, "explanation": "Після 'No sooner' інверсія допоміжного дієслова й підмета обов'язкова." },
        { "text": "As soon as I had", "isCorrect": false, "explanation": "Конструкція 'As soon as' не поєднується з 'than' у другій частині речення." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "98",
    "text": "I look forward to hearing from you soon.",
    "translation": "З нетерпінням чекаю на вашу відповідь найближчим часом.",
    "hint": {
      "sentenceWithBlank": "I look forward [____] from you soon.",
      "options": [
        { "text": "to hearing", "isCorrect": true, "explanation": "У виразі 'look forward to' слово 'to' є прийменником, тому після нього потрібен герундій (V-ing)." },
        { "text": "to hear", "isCorrect": false, "explanation": "Тут 'to' — не частина інфінітива, а прийменник, тому потрібен герундій." },
        { "text": "hearing", "isCorrect": false, "explanation": "Пропущено обов'язковий прийменник 'to'." }
      ]
    },
    "tense": "Gerund",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "99",
    "text": "It's no use crying over spilled milk.",
    "translation": "Сльозами горю не зарадиш. / Немає сенсу плакати над розлитим молоком.",
    "hint": {
      "sentenceWithBlank": "It's no use [____] over spilled milk.",
      "options": [
        { "text": "crying", "isCorrect": true, "explanation": "Після виразу 'it's no use' (немає сенсу) завжди уживають герундій." },
        { "text": "to cry", "isCorrect": false, "explanation": "Інфінітив у цій ідіомі не вживають." },
        { "text": "cry", "isCorrect": false, "explanation": "Граматично неправильна форма — потрібен герундій." }
      ]
    },
    "tense": "Gerund",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "100",
    "text": "Not only did he design the layout, but he also wrote the code.",
    "translation": "Він не лише розробив макет, а й написав код.",
    "hint": {
      "sentenceWithBlank": "Not only [____] the layout, but he also wrote the code.",
      "options": [
        { "text": "did he design", "isCorrect": true, "explanation": "Коли речення починається з 'Not only', застосовують інверсію (порядок слів як у запитанні)." },
        { "text": "he designed", "isCorrect": false, "explanation": "Бракує інверсії, обов'язкової після 'Not only' на початку речення." },
        { "text": "designed he", "isCorrect": false, "explanation": "Інверсію роблять за допомогою допоміжного дієслова 'did', а не основного дієслова." }
      ]
    },
    "tense": "Inversion",
    "topic": "IT",
    "lengthWords": 13
  }
  ]
}