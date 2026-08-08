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
    "targetLang": "ru"
  },
  "sentences": [
    {
    id: "1",
    text: "This is my book, and that one is yours.",
    translation: "Это моя книга, а та — твоя.",
    hint: {
      sentenceWithBlank: "This is my book, and that one is [____].",
      options: [
        { text: "yours", isCorrect: true, explanation: "Абсолютная форма притяжательного местоимения (не требует существительного после себя)." },
        { text: "your", isCorrect: false, explanation: "Требует существительного после себя (your book)." },
        { text: "you", isCorrect: false, explanation: "Личное местоимение, а не притяжательное." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "2",
    text: "He gave her his car because hers was broken.",
    translation: "Он отдал ей свою машину, потому что её сломалась.",
    hint: {
      sentenceWithBlank: "He gave her his car because [____] was broken.",
      options: [
        { text: "hers", isCorrect: true, explanation: "Абсолютная форма притяжательного местоимения заменяет 'her car'." },
        { text: "her", isCorrect: false, explanation: "Требует существительного после себя (her car)." },
        { text: "she", isCorrect: false, explanation: "Личное местоимение (она), не показывает принадлежность." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "3",
    text: "We did it ourselves without any help.",
    translation: "Мы сделали это сами без какой-либо помощи.",
    hint: {
      sentenceWithBlank: "We [____] [____] ourselves without any help.",
      options: [
        { text: "did it", isCorrect: true, explanation: "Правильная форма прошедшего времени от 'do' и местоимение 'it'." },
        { text: "do it", isCorrect: false, explanation: "Глагол в настоящем времени, а предложение о прошлом." },
        { text: "made it", isCorrect: false, explanation: "Make означает 'создавать', а do - 'выполнять действие'." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "4",
    text: "Is there anybody in the office?",
    translation: "Есть кто-нибудь в офисе?",
    hint: {
      sentenceWithBlank: "[____] there anybody in the office?",
      options: [
        { text: "Is", isCorrect: true, explanation: "Глагол to be в ед.ч. для конструкции there is/are с anybody." },
        { text: "Are", isCorrect: false, explanation: "Используется для множественного числа." },
        { text: "Does", isCorrect: false, explanation: "Не используется в конструкции there is/are." }
      ]
    },
    tense: "Present Simple",
    topic: "Workplace",
    lengthWords: 6
  },
  {
    id: "5",
    text: "Nobody told me about the changes.",
    translation: "Никто не сказал мне об изменениях.",
    hint: {
      sentenceWithBlank: "Nobody [____] me about the changes.",
      options: [
        { text: "told", isCorrect: true, explanation: "Утвердительная форма глагола в Past Simple. Отрицание уже есть в 'Nobody'." },
        { text: "didn't tell", isCorrect: false, explanation: "В английском не бывает двойного отрицания (Nobody + didn't)." },
        { text: "said", isCorrect: false, explanation: "Say не используется с прямым дополнением (me) без предлога to." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "6",
    text: "This is the building whose roof was damaged.",
    translation: "Это здание, чья крыша была повреждена.",
    hint: {
      sentenceWithBlank: "This is the building [____] roof was damaged.",
      options: [
        { text: "whose", isCorrect: true, explanation: "Относительное местоимение, обозначающее принадлежность (чей, чья, чье)." },
        { text: "who", isCorrect: false, explanation: "Who означает 'кто', а не 'чей'." },
        { text: "which", isCorrect: false, explanation: "Which (который) не выражает принадлежность." }
      ]
    },
    tense: "Passive Voice",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "7",
    text: "Give it to him, not to them.",
    translation: "Отдай это ему, а не им.",
    hint: {
      sentenceWithBlank: "Give it to him, not to [____].",
      options: [
        { text: "them", isCorrect: true, explanation: "Объектный падеж местоимения they (им, их)." },
        { text: "their", isCorrect: false, explanation: "Притяжательное местоимение (их), требует существительного." },
        { text: "they", isCorrect: false, explanation: "Именительный падеж (они), используется как подлежащее." }
      ]
    },
    tense: "Imperative",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "8",
    text: "Both of them are busy right now.",
    translation: "Оба они сейчас заняты.",
    hint: {
      sentenceWithBlank: "[____] of them are busy right now.",
      options: [
        { text: "Both", isCorrect: true, explanation: "Означает 'оба' (и тот, и другой)." },
        { text: "All", isCorrect: false, explanation: "All (все) используется для трех и более человек или предметов." },
        { text: "Either", isCorrect: false, explanation: "Either (любой из двух) требует глагола в единственном числе." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "9",
    text: "Neither of the options is perfect.",
    translation: "Ни один из вариантов не идеален.",
    hint: {
      sentenceWithBlank: "[____] of the options is perfect.",
      options: [
        { text: "Neither", isCorrect: true, explanation: "Означает 'ни один из двух'." },
        { text: "None", isCorrect: false, explanation: "None используется для трех и более вариантов." },
        { text: "Both", isCorrect: false, explanation: "Означает 'оба' и требует глагола во множественном числе (are)." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "10",
    text: "Each component has its own function.",
    translation: "Каждый компонент имеет свою собственную функцию.",
    hint: {
      sentenceWithBlank: "Each component [____] its own function.",
      options: [
        { text: "has", isCorrect: true, explanation: "Each (каждый) согласуется с глаголом в единственном числе." },
        { text: "have", isCorrect: false, explanation: "Используется для множественного числа." },
        { text: "having", isCorrect: false, explanation: "Герундий или причастие, здесь нужен сказуемое." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "11",
    text: "She usually goes to work by bus, but today she is driving.",
    translation: "Она обычно ездит на работу на автобусе, но сегодня она за рулем.",
    hint: {
      sentenceWithBlank: "She usually goes to work by bus, but today she [____] [____].",
      options: [
        { text: "is driving", isCorrect: true, explanation: "Present Continuous показывает временное действие, происходящее именно сегодня." },
        { text: "drives", isCorrect: false, explanation: "Present Simple используется для регулярных действий (usually)." },
        { text: "driving", isCorrect: false, explanation: "Пропущен вспомогательный глагол is." }
      ]
    },
    tense: "Present Continuous",
    topic: "Daily Life",
    lengthWords: 12
  },
  {
    id: "12",
    text: "Water boils at 100 degrees Celsius.",
    translation: "Вода кипит при 100 градусах Цельсия.",
    hint: {
      sentenceWithBlank: "Water [____] at 100 degrees Celsius.",
      options: [
        { text: "boils", isCorrect: true, explanation: "Present Simple используется для общеизвестных фактов и законов природы." },
        { text: "is boiling", isCorrect: false, explanation: "Present Continuous описывает действие прямо сейчас, а не факт." },
        { text: "boiled", isCorrect: false, explanation: "Past Simple используется для действий в прошлом." }
      ]
    },
    tense: "Present Simple",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "13",
    text: "Does he know where the keys are?",
    translation: "Он знает, где ключи?",
    hint: {
      sentenceWithBlank: "[____] he know where the keys are?",
      options: [
        { text: "Does", isCorrect: true, explanation: "Вспомогательный глагол для Present Simple (he, she, it)." },
        { text: "Do", isCorrect: false, explanation: "Используется с I, you, we, they." },
        { text: "Is", isCorrect: false, explanation: "Глагол to be не используется как вспомогательный со смысловым глаголом know." }
      ]
    },
    tense: "Present Simple",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "14",
    text: "Why didn't you call me yesterday?",
    translation: "Почему ты не позвонил мне вчера?",
    hint: {
      sentenceWithBlank: "Why [____] you call me yesterday?",
      options: [
        { text: "didn't", isCorrect: true, explanation: "Вспомогательный глагол для отрицательного вопроса в Past Simple." },
        { text: "don't", isCorrect: false, explanation: "Это Present Simple, а в предложении есть указатель времени yesterday." },
        { text: "weren't", isCorrect: false, explanation: "Глагол to be не используется со смысловым глаголом (call) в простом времени." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "15",
    text: "I saw a great movie last weekend.",
    translation: "Я посмотрел отличный фильм на прошлых выходных.",
    hint: {
      sentenceWithBlank: "I [____] a great movie last weekend.",
      options: [
        { text: "saw", isCorrect: true, explanation: "Past Simple (2 форма глагола see) для завершенного действия в прошлом (last weekend)." },
        { text: "see", isCorrect: false, explanation: "Настоящее время, не подходит к last weekend." },
        { text: "have seen", isCorrect: false, explanation: "Present Perfect не используется с точным указанием времени в прошлом." }
      ]
    },
    tense: "Past Simple",
    topic: "Entertainment",
    lengthWords: 7
  },
  {
    id: "16",
    text: "They didn't arrive on time because of the traffic.",
    translation: "Они не приехали вовремя из-за пробок.",
    hint: {
      sentenceWithBlank: "They didn't arrive on time [____] of the traffic.",
      options: [
        { text: "because", isCorrect: true, explanation: "Because of (из-за) используется перед существительными." },
        { text: "why", isCorrect: false, explanation: "Означает 'почему'." },
        { text: "as", isCorrect: false, explanation: "As (так как) требует после себя полноценного предложения с подлежащим и сказуемым." }
      ]
    },
    tense: "Past Simple",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "17",
    text: "What will you do if they reject the plan?",
    translation: "Что ты будешь делать, если они отклонят план?",
    hint: {
      sentenceWithBlank: "What [____] you do if they reject the plan?",
      options: [
        { text: "will", isCorrect: true, explanation: "Future Simple в главной части условного предложения 1 типа (First Conditional)." },
        { text: "would", isCorrect: false, explanation: "Используется во 2 типе условных предложений (нереальное условие)." },
        { text: "do", isCorrect: false, explanation: "Тогда получится вопрос в настоящем времени 'Что ты делаешь (вообще)?'." }
      ]
    },
    tense: "Future Simple",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "18",
    text: "I think it will be a sunny day.",
    translation: "Думаю, день будет солнечным.",
    hint: {
      sentenceWithBlank: "I think it [____] [____] a sunny day.",
      options: [
        { text: "will be", isCorrect: true, explanation: "Future Simple для предсказаний и личного мнения (I think)." },
        { text: "is being", isCorrect: false, explanation: "Означает временное поведение в данный момент, не подходит по смыслу." },
        { text: "will", isCorrect: false, explanation: "Не хватает смыслового глагола be (будет)." }
      ]
    },
    tense: "Future Simple",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "19",
    text: "Are you going to update the layout this evening?",
    translation: "Ты собираешься обновить макет сегодня вечером?",
    hint: {
      sentenceWithBlank: "Are you [____] [____] update the layout this evening?",
      options: [
        { text: "going to", isCorrect: true, explanation: "Конструкция to be going to используется для планов и намерений." },
        { text: "will to", isCorrect: false, explanation: "После will частица to не ставится." },
        { text: "want to", isCorrect: false, explanation: "Это переводилось бы как 'Ты хочешь...', а не 'Ты собираешься...'." }
      ]
    },
    tense: "Future (going to)",
    topic: "IT",
    lengthWords: 9
  },
  {
    id: "20",
    text: "The train leaves at 9 PM tonight.",
    translation: "Поезд отправляется сегодня в 9 вечера.",
    hint: {
      sentenceWithBlank: "The train [____] at 9 PM tonight.",
      options: [
        { text: "leaves", isCorrect: true, explanation: "Present Simple используется для расписаний транспорта, даже в будущем." },
        { text: "will leave", isCorrect: false, explanation: "С расписаниями принято использовать Present Simple." },
        { text: "is leaving", isCorrect: false, explanation: "Используется для личных договоренностей, а не для расписания." }
      ]
    },
    tense: "Present Simple",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "21",
    text: "How often do you practice your English?",
    translation: "Как часто ты практикуешь свой английский?",
    hint: {
      sentenceWithBlank: "How [____] do you practice your English?",
      options: [
        { text: "often", isCorrect: true, explanation: "Вопросительное слово 'How often' (как часто) используется для вопросов о регулярности." },
        { text: "many", isCorrect: false, explanation: "Означает 'как много' (для исчисляемых существительных)." },
        { text: "much", isCorrect: false, explanation: "Означает 'как много' (для неисчисляемых существительных)." }
      ]
    },
    tense: "Present Simple",
    topic: "Education",
    lengthWords: 7
  },
  {
    id: "22",
    text: "Who wrote this article?",
    translation: "Кто написал эту статью?",
    hint: {
      sentenceWithBlank: "Who [____] this article?",
      options: [
        { text: "wrote", isCorrect: true, explanation: "В вопросе к подлежащему вспомогательный глагол did не нужен. Используется прямой порядок слов." },
        { text: "did write", isCorrect: false, explanation: "Неверная конструкция для вопроса к подлежащему (Who)." },
        { text: "written", isCorrect: false, explanation: "Это 3 форма глагола, она требует вспомогательного глагола have/has." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 4
  },
  {
    id: "23",
    text: "Who did you invite to the presentation?",
    translation: "Кого ты пригласил на презентацию?",
    hint: {
      sentenceWithBlank: "Who [____] you invite to the presentation?",
      options: [
        { text: "did", isCorrect: true, explanation: "Вспомогательный глагол для вопроса в Past Simple (вопрос к дополнению - 'кого?')." },
        { text: "do", isCorrect: false, explanation: "Настоящее время (кого ты приглашаешь обычно)." },
        { text: "were", isCorrect: false, explanation: "Глагол to be не используется со смысловым глаголом invite в простом времени." }
      ]
    },
    tense: "Past Simple",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "24",
    text: "There used to be a cinema here.",
    translation: "Раньше здесь был кинотеатр.",
    hint: {
      sentenceWithBlank: "There [____] to be a cinema here.",
      options: [
        { text: "used", isCorrect: true, explanation: "Конструкция 'used to' показывает то, что было раньше, но больше не существует." },
        { text: "use", isCorrect: false, explanation: "Требуется прошедшее время (used)." },
        { text: "was", isCorrect: false, explanation: "После was не может стоять инфинитив 'to be'." }
      ]
    },
    tense: "Past Habit",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "25",
    text: "I am used to waking up early.",
    translation: "Я привык просыпаться рано.",
    hint: {
      sentenceWithBlank: "I am [____] [____] waking up early.",
      options: [
        { text: "used to", isCorrect: true, explanation: "Конструкция 'to be used to + V-ing' означает привычку, сформированную к настоящему моменту." },
        { text: "use to", isCorrect: false, explanation: "Для выражения привычки нужна форма used." },
        { text: "used", isCorrect: false, explanation: "Пропущен предлог to, обязательный в этой конструкции." }
      ]
    },
    tense: "Present Habit",
    topic: "Daily Life",
    lengthWords: 7
  },
    {
    id: "26",
    text: "Look! It is snowing outside.",
    translation: "Смотри! На улице идет снег.",
    hint: {
      sentenceWithBlank: "Look! It [____] outside.",
      options: [
        { text: "is snowing", isCorrect: true, explanation: "Present Continuous используется для действий, происходящих прямо сейчас (на что указывает 'Look!')." },
        { text: "snows", isCorrect: false, explanation: "Present Simple означает регулярное действие, а не происходящее в данный момент." },
        { text: "snowing", isCorrect: false, explanation: "Пропущен вспомогательный глагол 'is'." }
      ]
    },
    tense: "Present Continuous",
    topic: "Nature",
    lengthWords: 5
  },
  {
    id: "27",
    text: "What were you doing when I called you?",
    translation: "Что ты делал, когда я тебе позвонил?",
    hint: {
      sentenceWithBlank: "What [____] you [____] when I called you?",
      options: [
        { text: "were / doing", isCorrect: true, explanation: "Past Continuous обозначает длительное действие в прошлом, прерванное другим действием (когда я позвонил)." },
        { text: "did / do", isCorrect: false, explanation: "Past Simple используется для последовательных завершенных действий, а не для процесса." },
        { text: "are / doing", isCorrect: false, explanation: "Present Continuous относится к настоящему, а здесь речь о прошлом ('when I called')." }
      ]
    },
    tense: "Past Continuous",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "28",
    text: "While she was cooking, he was reading a book.",
    translation: "Пока она готовила, он читал книгу.",
    hint: {
      sentenceWithBlank: "While she [____], he was reading a book.",
      options: [
        { text: "was cooking", isCorrect: true, explanation: "Past Continuous используется для одновременных длительных действий в прошлом." },
        { text: "cooked", isCorrect: false, explanation: "Past Simple означает завершенное действие, но 'while' указывает на процесс." },
        { text: "is cooking", isCorrect: false, explanation: "Вторая часть предложения в прошлом ('was reading'), поэтому и первая должна быть в прошедшем времени." }
      ]
    },
    tense: "Past Continuous",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "29",
    text: "I have already finished the first task.",
    translation: "Я уже закончил первую задачу.",
    hint: {
      sentenceWithBlank: "I [____] already [____] the first task.",
      options: [
        { text: "have / finished", isCorrect: true, explanation: "Present Perfect используется для завершенных действий с результатом в настоящем (маркер 'already')." },
        { text: "am / finishing", isCorrect: false, explanation: "Present Continuous означает, что действие все еще происходит, а 'already' значит 'уже закончил'." },
        { text: "had / finished", isCorrect: false, explanation: "Past Perfect нужен, когда есть другое действие в прошлом." }
      ]
    },
    tense: "Present Perfect",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "30",
    text: "Have you ever been to London?",
    translation: "Ты когда-нибудь был в Лондоне?",
    hint: {
      sentenceWithBlank: "Have you [____] been to London?",
      options: [
        { text: "ever", isCorrect: true, explanation: "Слово 'ever' (когда-либо) часто используется в вопросах в Present Perfect для обсуждения жизненного опыта." },
        { text: "never", isCorrect: false, explanation: "'never' означает 'никогда' и используется в утвердительных предложениях с отрицательным смыслом." },
        { text: "yet", isCorrect: false, explanation: "'yet' ставится в конце предложения." }
      ]
    },
    tense: "Present Perfect",
    topic: "Travel",
    lengthWords: 6
  },
  {
    id: "31",
    text: "She has lived here since 2015.",
    translation: "Она живет здесь с 2015 года.",
    hint: {
      sentenceWithBlank: "She has lived here [____] 2015.",
      options: [
        { text: "since", isCorrect: true, explanation: "'since' используется для указания конкретного момента начала действия в прошлом." },
        { text: "for", isCorrect: false, explanation: "'for' указывает на продолжительность периода времени (например, for 5 years)." },
        { text: "from", isCorrect: false, explanation: "'from' обычно требует парного предлога 'to' или 'until'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "32",
    text: "We haven't seen each other for ages.",
    translation: "Мы не виделись целую вечность.",
    hint: {
      sentenceWithBlank: "We [____] each other for ages.",
      options: [
        { text: "haven't seen", isCorrect: true, explanation: "Present Perfect показывает отсутствие действия с прошлого до настоящего времени ('for ages')." },
        { text: "didn't see", isCorrect: false, explanation: "Past Simple указывает на завершенный период, а мы говорим о периоде, продолжающемся до сих пор." },
        { text: "don't see", isCorrect: false, explanation: "Present Simple описывает регулярные действия, а не состояние 'с тех пор'." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "33",
    text: "When I arrived, the meeting had already started.",
    translation: "Когда я приехал, собрание уже началось.",
    hint: {
      sentenceWithBlank: "When I arrived, the meeting [____] already [____].",
      options: [
        { text: "had / started", isCorrect: true, explanation: "Past Perfect показывает действие, которое завершилось до другого действия в прошлом ('When I arrived')." },
        { text: "has / started", isCorrect: false, explanation: "Present Perfect не используется, если основное действие в прошлом ('arrived')." },
        { text: "was / starting", isCorrect: false, explanation: "Это значило бы, что собрание только начиналось, а 'already' говорит о том, что оно уже началось." }
      ]
    },
    tense: "Past Perfect",
    topic: "Workplace",
    lengthWords: 8
  },
  {
    id: "34",
    text: "He realized he had lost his wallet.",
    translation: "Он понял, что потерял кошелек.",
    hint: {
      sentenceWithBlank: "He realized he [____] his wallet.",
      options: [
        { text: "had lost", isCorrect: true, explanation: "Past Perfect используется для действия ('потерял'), которое произошло до другого действия в прошлом ('понял')." },
        { text: "loses", isCorrect: false, explanation: "Present Simple не подходит по времени (главное предложение в прошедшем)." },
        { text: "has lost", isCorrect: false, explanation: "Present Perfect связывает с настоящим, но осознание ('realized') было в прошлом." }
      ]
    },
    tense: "Past Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "35",
    text: "By next year, they will have completed the project.",
    translation: "К следующему году они завершат проект.",
    hint: {
      sentenceWithBlank: "By next year, they [____] the project.",
      options: [
        { text: "will have completed", isCorrect: true, explanation: "Future Perfect указывает на действие, которое завершится к определенному моменту в будущем ('By next year')." },
        { text: "will complete", isCorrect: false, explanation: "Используется для фактов в будущем, но 'by' требует Future Perfect." },
        { text: "are completing", isCorrect: false, explanation: "Present Continuous говорит о планах, но не передает идею завершенности к определенному моменту." }
      ]
    },
    tense: "Future Perfect",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "36",
    text: "I will be flying to Paris this time tomorrow.",
    translation: "Завтра в это время я буду лететь в Париж.",
    hint: {
      sentenceWithBlank: "I [____] to Paris this time tomorrow.",
      options: [
        { text: "will be flying", isCorrect: true, explanation: "Future Continuous описывает процесс, который будет происходить в конкретный момент в будущем ('this time tomorrow')." },
        { text: "will fly", isCorrect: false, explanation: "Future Simple обозначает просто факт или решение, а не процесс в определенный момент." },
        { text: "fly", isCorrect: false, explanation: "Present Simple можно использовать для расписания, но здесь акцент на самом процессе полета." }
      ]
    },
    tense: "Future Continuous",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "37",
    text: "This is the best coffee I have ever tasted.",
    translation: "Это лучший кофе, который я когда-либо пробовал.",
    hint: {
      sentenceWithBlank: "This is the best coffee I have [____] tasted.",
      options: [
        { text: "ever", isCorrect: true, explanation: "'ever' используется для описания жизненного опыта, особенно после превосходной степени ('the best')." },
        { text: "never", isCorrect: false, explanation: "'never' изменило бы смысл на 'никогда не пробовал'." },
        { text: "already", isCorrect: false, explanation: "'already' означает 'уже', что не подходит к контексту 'лучший из всех'." }
      ]
    },
    tense: "Present Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "38",
    text: "It's the first time I have driven an electric car.",
    translation: "Я впервые вожу электромобиль.",
    hint: {
      sentenceWithBlank: "It's the first time I [____] an electric car.",
      options: [
        { text: "have driven", isCorrect: true, explanation: "Конструкция 'It's the first time...' всегда требует Present Perfect." },
        { text: "drive", isCorrect: false, explanation: "Present Simple здесь не используется, так как это описание опыта." },
        { text: "drove", isCorrect: false, explanation: "Past Simple используется для завершенных событий, но опыт актуален сейчас." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "39",
    text: "She was tired because she had worked all night.",
    translation: "Она устала, потому что работала всю ночь.",
    hint: {
      sentenceWithBlank: "She was tired because she [____] all night.",
      options: [
        { text: "had worked", isCorrect: true, explanation: "Past Perfect объясняет причину ('работала') состояния в прошлом ('была уставшей')." },
        { text: "has worked", isCorrect: false, explanation: "Present Perfect не подходит, так как результат ('была уставшей') находится в прошлом." },
        { text: "worked", isCorrect: false, explanation: "Past Simple возможен, но Past Perfect лучше подчеркивает предшествование и причину." }
      ]
    },
    tense: "Past Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "40",
    text: "I had never seen such a beautiful sunset before.",
    translation: "Я никогда раньше не видел такого красивого заката.",
    hint: {
      sentenceWithBlank: "I [____] seen such a beautiful sunset before.",
      options: [
        { text: "had never", isCorrect: true, explanation: "Past Perfect подчеркивает, что этот опыт отсутствовал до определенного момента в прошлом." },
        { text: "have never", isCorrect: false, explanation: "Present Perfect относится к настоящему, но 'before' указывает на момент в прошлом." },
        { text: "did never", isCorrect: false, explanation: "Грамматически неверная конструкция (нужно 'never saw', но здесь нужен Past Perfect)." }
      ]
    },
    tense: "Past Perfect",
    topic: "Nature",
    lengthWords: 9
  },
  {
    id: "41",
    text: "I have been learning English for three years.",
    translation: "Я учу английский три года.",
    hint: {
      sentenceWithBlank: "I [____] English for three years.",
      options: [
        { text: "have been learning", isCorrect: true, explanation: "Present Perfect Continuous подчеркивает длительность действия, которое началось в прошлом и продолжается сейчас." },
        { text: "am learning", isCorrect: false, explanation: "Present Continuous не используется с указанием периода времени ('for three years')." },
        { text: "learn", isCorrect: false, explanation: "Present Simple описывает факты, а не процесс, продолжающийся определенное время." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Education",
    lengthWords: 8
  },
  {
    id: "42",
    text: "Why are your hands dirty? — I've been fixing my bike.",
    translation: "Почему у тебя грязные руки? — Я чинил велосипед.",
    hint: {
      sentenceWithBlank: "Why are your hands dirty? — I've [____] my bike.",
      options: [
        { text: "been fixing", isCorrect: true, explanation: "Present Perfect Continuous объясняет видимый результат в настоящем (грязные руки) недавним длительным процессом." },
        { text: "fixed", isCorrect: false, explanation: "Present Perfect делает акцент на завершенности, но здесь важен сам процесс, оставивший следы." },
        { text: "fixing", isCorrect: false, explanation: "Не хватает глагола 'been' для образования Present Perfect Continuous." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 11
  },
  {
    id: "43",
    text: "It has been raining all day.",
    translation: "Дождь идет весь день.",
    hint: {
      sentenceWithBlank: "It [____] all day.",
      options: [
        { text: "has been raining", isCorrect: true, explanation: "Present Perfect Continuous для действия, которое длится с прошлого до настоящего момента ('all day')." },
        { text: "is raining", isCorrect: false, explanation: "Present Continuous используется для момента 'сейчас', без указания длительности." },
        { text: "rains", isCorrect: false, explanation: "Present Simple означает, что дождь идет вообще, а не непрерывно весь день." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Nature",
    lengthWords: 6
  },
  {
    id: "44",
    text: "She had been waiting for two hours before the bus arrived.",
    translation: "Она ждала два часа, прежде чем автобус приехал.",
    hint: {
      sentenceWithBlank: "She [____] for two hours before the bus arrived.",
      options: [
        { text: "had been waiting", isCorrect: true, explanation: "Past Perfect Continuous показывает длительность действия до другого события в прошлом." },
        { text: "has been waiting", isCorrect: false, explanation: "Present Perfect Continuous относится к настоящему, а здесь второе действие ('arrived') в прошлом." },
        { text: "was waiting", isCorrect: false, explanation: "С предлогом 'for' (указание длительности) перед другим действием в прошлом нужен Past Perfect Continuous." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "45",
    text: "They had been living there for five years when the company closed.",
    translation: "Они жили там пять лет, когда компания закрылась.",
    hint: {
      sentenceWithBlank: "They [____] there for five years when the company closed.",
      options: [
        { text: "had been living", isCorrect: true, explanation: "Past Perfect Continuous показывает, как долго длилось действие до определенного момента в прошлом." },
        { text: "were living", isCorrect: false, explanation: "Past Continuous не используется, когда указана длительность ('for five years')." },
        { text: "have been living", isCorrect: false, explanation: "События происходят в прошлом ('closed'), поэтому нужно прошедшее время." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "46",
    text: "His eyes were red because he had been staring at the screen for hours.",
    translation: "Его глаза были красными, потому что он часами смотрел в экран.",
    hint: {
      sentenceWithBlank: "His eyes were red because he [____] at the screen for hours.",
      options: [
        { text: "had been staring", isCorrect: true, explanation: "Past Perfect Continuous используется для длительного процесса, который стал причиной состояния в прошлом." },
        { text: "has been staring", isCorrect: false, explanation: "Следствие ('were red') находится в прошлом, поэтому нужно прошедшее время." },
        { text: "was staring", isCorrect: false, explanation: "Past Continuous не передает идею предшествования и длительности, вызвавшей результат." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 14
  },
  {
    id: "47",
    text: "By midnight, I will have been working on this design for ten hours.",
    translation: "К полуночи я буду работать над этим дизайном уже десять часов.",
    hint: {
      sentenceWithBlank: "By midnight, I [____] on this design for ten hours.",
      options: [
        { text: "will have been working", isCorrect: true, explanation: "Future Perfect Continuous показывает, как долго будет длиться действие к определенному моменту в будущем." },
        { text: "will work", isCorrect: false, explanation: "Future Simple не передает длительность к моменту в будущем." },
        { text: "will be working", isCorrect: false, explanation: "Future Continuous описывает процесс, но не подчеркивает его продолжительность ('for ten hours')." }
      ]
    },
    tense: "Future Perfect Continuous",
    topic: "Workplace",
    lengthWords: 13
  },
  {
    id: "48",
    text: "How long have you been looking for a job?",
    translation: "Как долго ты уже ищешь работу?",
    hint: {
      sentenceWithBlank: "How long [____] you [____] for a job?",
      options: [
        { text: "have / been looking", isCorrect: true, explanation: "Вопросы с 'How long' о незаконченных действиях требуют Present Perfect Continuous." },
        { text: "are / looking", isCorrect: false, explanation: "Present Continuous используется для вопроса о моменте речи ('что ты ищешь сейчас?'), а не 'как долго'." },
        { text: "do / look", isCorrect: false, explanation: "Present Simple здесь не подходит, так как это не регулярное действие." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "49",
    text: "We had been driving for miles before we realized we were lost.",
    translation: "Мы ехали много миль, прежде чем поняли, что заблудились.",
    hint: {
      sentenceWithBlank: "We [____] for miles before we realized we were lost.",
      options: [
        { text: "had been driving", isCorrect: true, explanation: "Past Perfect Continuous для процесса, который длился до определенного события в прошлом." },
        { text: "have been driving", isCorrect: false, explanation: "Все события в предложении относятся к прошлому ('realized', 'were'), поэтому Present Perfect не подходит." },
        { text: "were driving", isCorrect: false, explanation: "Past Continuous не подчеркивает накопленный результат и длительность до другого действия." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 12
  },
  {
    id: "50",
    text: "She has been running, so she is out of breath.",
    translation: "Она бежала, поэтому запыхалась.",
    hint: {
      sentenceWithBlank: "She [____], so she is out of breath.",
      options: [
        { text: "has been running", isCorrect: true, explanation: "Present Perfect Continuous объясняет текущее состояние ('out of breath') недавним процессом." },
        { text: "is running", isCorrect: false, explanation: "Present Continuous означает, что она бежит прямо сейчас." },
        { text: "ran", isCorrect: false, explanation: "Past Simple фокусируется на факте бега, но Present Perfect Continuous лучше подчеркивает связь процесса с результатом." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 10
  },
    {
    id: "51",
    text: "You must wear a seatbelt while driving.",
    translation: "Вы обязаны пристегивать ремень безопасности во время вождения.",
    hint: {
      sentenceWithBlank: "You [____] wear a seatbelt while driving.",
      options: [
        { text: "must", isCorrect: true, explanation: "Must выражает строгую обязанность или правило." },
        { text: "have", isCorrect: false, explanation: "После have нужно использовать частицу to (have to)." },
        { text: "can", isCorrect: false, explanation: "Can означает физическую возможность, а здесь речь о правиле." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "52",
    text: "You don't have to pay for the tickets; they are free.",
    translation: "Тебе не обязательно платить за билеты, они бесплатные.",
    hint: {
      sentenceWithBlank: "You [____] pay for the tickets; they are free.",
      options: [
        { text: "don't have to", isCorrect: true, explanation: "Don't have to означает отсутствие необходимости (не обязательно)." },
        { text: "mustn't", isCorrect: false, explanation: "Mustn't означает строгий запрет (нельзя)." },
        { text: "shouldn't", isCorrect: false, explanation: "Shouldn't — это совет (не следует), а здесь констатация факта об отсутствии нужды." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "53",
    text: "You shouldn't eat so much fast food.",
    translation: "Тебе не следует есть так много фастфуда.",
    hint: {
      sentenceWithBlank: "You [____] eat so much fast food.",
      options: [
        { text: "shouldn't", isCorrect: true, explanation: "Shouldn't используется для дачи совета (не следует)." },
        { text: "don't have to", isCorrect: false, explanation: "Означает «не обязательно», не подходит по смыслу для совета." },
        { text: "can't", isCorrect: false, explanation: "Can't выражает запрет или невозможность." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "54",
    text: "He might come to the meeting, but he isn't sure.",
    translation: "Он может прийти на встречу, но он не уверен.",
    hint: {
      sentenceWithBlank: "He [____] come to the meeting, but he isn't sure.",
      options: [
        { text: "might", isCorrect: true, explanation: "Might используется для выражения небольшой вероятности в будущем." },
        { text: "must", isCorrect: false, explanation: "Must означает уверенность или обязанность." },
        { text: "can", isCorrect: false, explanation: "Can обычно не используется для вероятности одиночных будущих действий." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Workplace",
    lengthWords: 10
  },
  {
    id: "55",
    text: "May I borrow your pen for a moment?",
    translation: "Можно я одолжу твою ручку на минуту?",
    hint: {
      sentenceWithBlank: "[____] I borrow your pen for a moment?",
      options: [
        { text: "May", isCorrect: true, explanation: "May используется для вежливой просьбы разрешения." },
        { text: "Must", isCorrect: false, explanation: "Must используется для обязанности, а не для просьбы." },
        { text: "Should", isCorrect: false, explanation: "Should — для совета (следует ли мне)." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "56",
    text: "She can't be at home; I saw her at the office five minutes ago.",
    translation: "Она не может быть дома; я видел её в офисе пять минут назад.",
    hint: {
      sentenceWithBlank: "She [____] be at home; I saw her at the office five minutes ago.",
      options: [
        { text: "can't", isCorrect: true, explanation: "Can't используется для выражения уверенности в том, что что-то невозможно." },
        { text: "mustn't", isCorrect: false, explanation: "Mustn't означает строгий запрет, а не логическое умозаключение." },
        { text: "might not", isCorrect: false, explanation: "Might not означает лишь небольшую вероятность, а здесь есть уверенность." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 14
  },
  {
    id: "57",
    text: "He must have forgotten about our appointment.",
    translation: "Он, должно быть, забыл о нашей встрече.",
    hint: {
      sentenceWithBlank: "He [____] about our appointment.",
      options: [
        { text: "must have forgotten", isCorrect: true, explanation: "Must + have + V3 выражает уверенное предположение о действии в прошлом." },
        { text: "must forget", isCorrect: false, explanation: "Относится к настоящему или будущему времени." },
        { text: "should have forgotten", isCorrect: false, explanation: "Означает «ему следовало забыть»." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "58",
    text: "You should have told me the truth earlier.",
    translation: "Тебе следовало сказать мне правду раньше.",
    hint: {
      sentenceWithBlank: "You [____] me the truth earlier.",
      options: [
        { text: "should have told", isCorrect: true, explanation: "Should + have + V3 используется для упрека о невыполненном действии в прошлом." },
        { text: "should tell", isCorrect: false, explanation: "Относится к настоящему или будущему времени." },
        { text: "must have told", isCorrect: false, explanation: "Означает уверенное предположение «ты, должно быть, сказал»." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "59",
    text: "I could play the piano when I was a child.",
    translation: "Я умел играть на пианино, когда был ребенком.",
    hint: {
      sentenceWithBlank: "I [____] play the piano when I was a child.",
      options: [
        { text: "could", isCorrect: true, explanation: "Could — форма прошедшего времени от can, используется для навыков в прошлом." },
        { text: "can", isCorrect: false, explanation: "Can относится к настоящему времени." },
        { text: "must", isCorrect: false, explanation: "Must означает обязанность, а не физическую способность." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "60",
    text: "We had better leave now before it gets dark.",
    translation: "Нам лучше уйти сейчас, пока не потемнело.",
    hint: {
      sentenceWithBlank: "We [____] leave now before it gets dark.",
      options: [
        { text: "had better", isCorrect: true, explanation: "Had better (лучше бы) используется для настоятельных советов или предупреждений." },
        { text: "would rather", isCorrect: false, explanation: "Would rather означает предпочтение (предпочел бы)." },
        { text: "should to", isCorrect: false, explanation: "После should не ставится частица to." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "61",
    text: "If you heat ice, it melts.",
    translation: "Если нагреть лед, он тает.",
    hint: {
      sentenceWithBlank: "If you heat ice, it [____].",
      options: [
        { text: "melts", isCorrect: true, explanation: "В Zero Conditional (общеизвестные факты) в обеих частях используется Present Simple." },
        { text: "will melt", isCorrect: false, explanation: "Для научных фактов используется Present Simple, а не Future." },
        { text: "melted", isCorrect: false, explanation: "Прошедшее время здесь не подходит." }
      ]
    },
    tense: "Conditionals",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "62",
    text: "If I have time tonight, I will call you.",
    translation: "Если у меня будет время сегодня вечером, я тебе позвоню.",
    hint: {
      sentenceWithBlank: "If I [____] time tonight, I [____] you.",
      options: [
        { text: "have / will call", isCorrect: true, explanation: "First Conditional: условие в Present Simple (have), следствие в Future Simple (will call)." },
        { text: "will have / call", isCorrect: false, explanation: "После if в условии не используется будущее время (will)." },
        { text: "had / would call", isCorrect: false, explanation: "Это Second Conditional для нереальных ситуаций, а здесь реальное условие." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "63",
    text: "Unless you study hard, you won't pass the exam.",
    translation: "Если ты не будешь усердно учиться, ты не сдашь экзамен.",
    hint: {
      sentenceWithBlank: "[____] you study hard, you won't pass the exam.",
      options: [
        { text: "Unless", isCorrect: true, explanation: "Unless переводится как «если не» (if not) и уже содержит отрицание." },
        { text: "If", isCorrect: false, explanation: "С if получилось бы «Если ты будешь учиться, ты не сдашь», что нелогично." },
        { text: "Without", isCorrect: false, explanation: "Without — это предлог (без), после него должно идти существительное или герундий." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 9
  },
  {
    id: "64",
    text: "As soon as I arrive, I will let you know.",
    translation: "Как только я приеду, я дам тебе знать.",
    hint: {
      sentenceWithBlank: "[____] I arrive, I will let you know.",
      options: [
        { text: "As soon as", isCorrect: true, explanation: "As soon as (как только) используется в придаточных времени с Present Simple." },
        { text: "Until", isCorrect: false, explanation: "Until означает «до тех пор пока», что меняет смысл предложения." },
        { text: "While", isCorrect: false, explanation: "While (в то время как) используется для длительных процессов." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "65",
    text: "If I won the lottery, I would buy a house by the sea.",
    translation: "Если бы я выиграл в лотерею, я бы купил дом у моря.",
    hint: {
      sentenceWithBlank: "If I [____] the lottery, I [____] a house by the sea.",
      options: [
        { text: "won / would buy", isCorrect: true, explanation: "Second Conditional: условие в Past Simple (won), следствие с would + инфинитив." },
        { text: "win / would buy", isCorrect: false, explanation: "Слово win в настоящем времени не согласуется с would в главном предложении." },
        { text: "won / will buy", isCorrect: false, explanation: "После Past Simple в условии используется would, а не will." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 13
  },
  {
    id: "66",
    text: "What would you do if you were in my shoes?",
    translation: "Что бы ты сделал на моем месте?",
    hint: {
      sentenceWithBlank: "What [____] if you [____] in my shoes?",
      options: [
        { text: "would you do / were", isCorrect: true, explanation: "Second Conditional: в вопросе would + инфинитив, в условии глагол to be в форме were для всех лиц." },
        { text: "will you do / are", isCorrect: false, explanation: "Это First Conditional, а фраза 'in my shoes' предполагает гипотетическую ситуацию." },
        { text: "do you do / was", isCorrect: false, explanation: "Неверная грамматика для условных предложений второго типа." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "67",
    text: "If I had more free time, I would take up photography.",
    translation: "Если бы у меня было больше свободного времени, я бы занялся фотографией.",
    hint: {
      sentenceWithBlank: "If I [____] more free time, I [____] take up photography.",
      options: [
        { text: "had / would", isCorrect: true, explanation: "Second Conditional: нереальное условие в настоящем (had), результат (would)." },
        { text: "have / will", isCorrect: false, explanation: "Передает реальное условие, но здесь подчеркивается нереальность ситуации." },
        { text: "had had / would have", isCorrect: false, explanation: "Это Third Conditional, относится к прошлому." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "68",
    text: "If we had left earlier, we wouldn't have missed the flight.",
    translation: "Если бы мы выехали раньше, мы бы не опоздали на рейс.",
    hint: {
      sentenceWithBlank: "If we [____] earlier, we [____] the flight.",
      options: [
        { text: "had left / wouldn't have missed", isCorrect: true, explanation: "Third Conditional: нереальное условие в прошлом (Past Perfect) и результат в прошлом (would have + V3)." },
        { text: "left / wouldn't miss", isCorrect: false, explanation: "Это Second Conditional, относится к настоящему, а не к завершенному прошлому." },
        { text: "had left / wouldn't miss", isCorrect: false, explanation: "Смешанный тип, не подходит по смыслу для обоих действий в прошлом." }
      ]
    },
    tense: "Conditionals",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "69",
    text: "I wouldn't have known about the project if you hadn't told me.",
    translation: "Я бы не узнал о проекте, если бы ты мне не рассказал.",
    hint: {
      sentenceWithBlank: "I wouldn't [____] about the project if you hadn't told me.",
      options: [
        { text: "have known", isCorrect: true, explanation: "Third Conditional: главное предложение строится с would have + V3 для ситуации в прошлом." },
        { text: "know", isCorrect: false, explanation: "wouldn't know относится к настоящему времени." },
        { text: "knew", isCorrect: false, explanation: "После would have должен идти глагол в 3-й форме (known), а не во второй." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "70",
    text: "If I had studied harder at university, I would have a better job now.",
    translation: "Если бы я лучше учился в университете, у меня сейчас была бы работа получше.",
    hint: {
      sentenceWithBlank: "If I [____] harder at university, I [____] a better job now.",
      options: [
        { text: "had studied / would have", isCorrect: true, explanation: "Mixed Conditional: условие в прошлом (Past Perfect), а следствие в настоящем (would + V1)." },
        { text: "studied / would have", isCorrect: false, explanation: "Учеба в университете уже в прошлом, нужен Past Perfect." },
        { text: "had studied / would have had", isCorrect: false, explanation: "Следствие относится к настоящему (now), поэтому would have, а не would have had." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 14
  },
  {
    id: "71",
    text: "If he spoke French, he would have translated that document yesterday.",
    translation: "Если бы он говорил по-французски, он бы перевел тот документ вчера.",
    hint: {
      sentenceWithBlank: "If he [____] French, he [____] that document yesterday.",
      options: [
        { text: "spoke / would have translated", isCorrect: true, explanation: "Mixed Conditional: условие постоянно (Past Simple), а следствие было в прошлом (would have + V3)." },
        { text: "had spoken / would translate", isCorrect: false, explanation: "Знание языка — постоянный факт, а перевод был вчера." },
        { text: "spoke / would translate", isCorrect: false, explanation: "Перевод относится ко вчерашнему дню (yesterday), поэтому нужен would have + V3." }
      ]
    },
    tense: "Conditionals",
    topic: "Workplace",
    lengthWords: 11
  },
  {
    id: "72",
    text: "I wish I had more money.",
    translation: "Жаль, что у меня нет больше денег.",
    hint: {
      sentenceWithBlank: "I [____] I [____] more money.",
      options: [
        { text: "wish / had", isCorrect: true, explanation: "Конструкция I wish + Past Simple используется для выражения сожаления о настоящем." },
        { text: "wish / have", isCorrect: false, explanation: "После I wish для настоящего времени нужно использовать Past Simple." },
        { text: "hope / had", isCorrect: false, explanation: "После hope обычно используется реальное время (настоящее или будущее)." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "73",
    text: "I wish you wouldn't make so much noise.",
    translation: "Я бы хотел, чтобы ты не шумел так сильно.",
    hint: {
      sentenceWithBlank: "I wish you [____] make so much noise.",
      options: [
        { text: "wouldn't", isCorrect: true, explanation: "I wish + would/wouldn't выражает раздражение чьим-то поведением в настоящем." },
        { text: "don't", isCorrect: false, explanation: "После I wish не используется Present Simple." },
        { text: "didn't", isCorrect: false, explanation: "didn't можно использовать, но wouldn't лучше подчеркивает раздражение действием другого." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "74",
    text: "If only I hadn't said that to her yesterday.",
    translation: "Если бы только я не сказал ей это вчера.",
    hint: {
      sentenceWithBlank: "If [____] I [____] said that to her yesterday.",
      options: [
        { text: "only / hadn't", isCorrect: true, explanation: "If only + Past Perfect выражает сильное сожаление о прошлом." },
        { text: "only / didn't", isCorrect: false, explanation: "Действие было вчера, поэтому нужен Past Perfect, а не Past Simple." },
        { text: "just / haven't", isCorrect: false, explanation: "If just не используется, а haven't — это Present Perfect, не подходит для вчера." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "75",
    text: "It's time we went home.",
    translation: "Пора нам идти домой.",
    hint: {
      sentenceWithBlank: "It's time we [____] home.",
      options: [
        { text: "went", isCorrect: true, explanation: "После конструкции It's time (давно пора) используется форма Past Simple." },
        { text: "go", isCorrect: false, explanation: "Для выражения It's time + подлежащее глагол ставится в Past Simple, а не в начальную форму." },
        { text: "are going", isCorrect: false, explanation: "Настоящее длительное время здесь не используется." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 5
  },
    {
    "id": "76",
    "text": "This house was built in 1920.",
    "translation": "Этот дом был построен в 1920 году.",
    "hint": {
      "sentenceWithBlank": "This house [____] in 1920.",
      "options": [
        { "text": "was built", "isCorrect": true, "explanation": "Пассивный залог в прошедшем времени (Past Simple Passive) используется для указания на действие в прошлом над объектом." },
        { "text": "built", "isCorrect": false, "explanation": "Здесь нужен пассивный залог, так как дом не сам себя строил." },
        { "text": "is built", "isCorrect": false, "explanation": "Действие произошло в прошлом (в 1920 году), поэтому нужно прошедшее время." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "77",
    "text": "The interface is being redesigned at the moment.",
    "translation": "Интерфейс сейчас перерабатывается.",
    "hint": {
      "sentenceWithBlank": "The interface [____] at the moment.",
      "options": [
        { "text": "is being redesigned", "isCorrect": true, "explanation": "Present Continuous Passive используется для действия, которое происходит прямо сейчас (at the moment)." },
        { "text": "is redesigned", "isCorrect": false, "explanation": "Present Simple Passive указывает на регулярное действие, а не происходящее в данный момент." },
        { "text": "has been redesigned", "isCorrect": false, "explanation": "Это Present Perfect Passive, означает уже завершенное действие." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 8
  },
  {
    "id": "78",
    "text": "The new software has just been installed.",
    "translation": "Новое ПО только что было установлено.",
    "hint": {
      "sentenceWithBlank": "The new software [____].",
      "options": [
        { "text": "has just been installed", "isCorrect": true, "explanation": "Present Perfect Passive используется для недавно завершенного действия (с 'just')." },
        { "text": "has just installed", "isCorrect": false, "explanation": "ПО не может установить само себя, нужен пассивный залог." },
        { "text": "was just installed", "isCorrect": false, "explanation": "С наречием 'just' обычно используется Present Perfect, а не Past Simple." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 7
  },
  {
    "id": "79",
    "text": "English is spoken all over the world.",
    "translation": "На английском говорят по всему миру.",
    "hint": {
      "sentenceWithBlank": "English [____] all over the world.",
      "options": [
        { "text": "is spoken", "isCorrect": true, "explanation": "Present Simple Passive используется для общеизвестных фактов." },
        { "text": "is speaking", "isCorrect": false, "explanation": "Язык не может говорить сам по себе, нужен пассивный залог." },
        { "text": "spoke", "isCorrect": false, "explanation": "Это активный залог в прошедшем времени." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "80",
    "text": "The letters will be sent tomorrow morning.",
    "translation": "Письма будут отправлены завтра утром.",
    "hint": {
      "sentenceWithBlank": "The letters [____] tomorrow morning.",
      "options": [
        { "text": "will be sent", "isCorrect": true, "explanation": "Future Simple Passive используется для действия над объектом в будущем." },
        { "text": "will send", "isCorrect": false, "explanation": "Письма не могут отправить сами себя (нужен пассив)." },
        { "text": "are sent", "isCorrect": false, "explanation": "Это Present Simple Passive, а действие произойдет завтра." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "81",
    "text": "I need to get my hair cut this week.",
    "translation": "Мне нужно подстричься на этой неделе.",
    "hint": {
      "sentenceWithBlank": "I need to [____] this week.",
      "options": [
        { "text": "get my hair cut", "isCorrect": true, "explanation": "Конструкция 'get/have something done' означает, что действие выполняется кем-то другим для вас." },
        { "text": "cut my hair", "isCorrect": false, "explanation": "Это означало бы, что вы сами собираетесь стричь себе волосы." },
        { "text": "get cutting my hair", "isCorrect": false, "explanation": "Грамматически неверная конструкция." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 9
  },
  {
    "id": "82",
    "text": "He had his laptop stolen while he was traveling.",
    "translation": "У него украли ноутбук во время путешествия.",
    "hint": {
      "sentenceWithBlank": "He [____] while he was traveling.",
      "options": [
        { "text": "had his laptop stolen", "isCorrect": true, "explanation": "Конструкция 'have something done' может использоваться для негативного опыта (кто-то украл его ноутбук)." },
        { "text": "stole his laptop", "isCorrect": false, "explanation": "Это означает, что он сам украл свой ноутбук." },
        { "text": "had stolen his laptop", "isCorrect": false, "explanation": "Past Perfect в активном залоге: он украл свой ноутбук до какого-то момента." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "83",
    "text": "She was made to clean the whole room by her mother.",
    "translation": "Мама заставила её убрать всю комнату.",
    "hint": {
      "sentenceWithBlank": "She [____] to clean the whole room by her mother.",
      "options": [
        { "text": "was made", "isCorrect": true, "explanation": "В пассивном залоге глагол 'make' в значении 'заставлять' требует частицу 'to' перед следующим глаголом." },
        { "text": "made", "isCorrect": false, "explanation": "Активный залог изменит смысл: 'Она заставила'." },
        { "text": "has made", "isCorrect": false, "explanation": "Тоже активный залог, но в Present Perfect." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 11
  },
  {
    "id": "84",
    "text": "He is said to be the richest man in the city.",
    "translation": "Говорят, он самый богатый человек в городе.",
    "hint": {
      "sentenceWithBlank": "He [____] to be the richest man in the city.",
      "options": [
        { "text": "is said", "isCorrect": true, "explanation": "Пассивная конструкция 'is said to' переводится как 'говорят, что он...'." },
        { "text": "says", "isCorrect": false, "explanation": "Это означало бы 'Он говорит, что является самым богатым...'." },
        { "text": "said", "isCorrect": false, "explanation": "Прошедшее время 'Он сказал' - нарушает структуру предложения." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "85",
    "text": "It is expected that the prices will drop soon.",
    "translation": "Ожидается, что цены скоро упадут.",
    "hint": {
      "sentenceWithBlank": "[____] that the prices will drop soon.",
      "options": [
        { "text": "It is expected", "isCorrect": true, "explanation": "Безличная пассивная конструкция используется для выражения общего мнения/ожидания." },
        { "text": "It expects", "isCorrect": false, "explanation": "Слово 'It' не может ничего 'ожидать' (нужен пассив)." },
        { "text": "They is expected", "isCorrect": false, "explanation": "Грамматически неверно: с 'They' используется 'are', но здесь нужно безличное 'It'." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "86",
    "text": "He said that he was working on a new project.",
    "translation": "Он сказал, что работает над новым проектом.",
    "hint": {
      "sentenceWithBlank": "He said that he [____] on a new project.",
      "options": [
        { "text": "was working", "isCorrect": true, "explanation": "По правилу согласования времен, Present Continuous из прямой речи переходит в Past Continuous." },
        { "text": "is working", "isCorrect": false, "explanation": "Так как главное предложение в прошедшем ('said'), зависимое должно согласоваться по времени." },
        { "text": "works", "isCorrect": false, "explanation": "Означает постоянное действие (Present Simple), нарушает согласование времен." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 10
  },
  {
    "id": "87",
    "text": "She told me she had already seen that movie.",
    "translation": "Она сказала мне, что уже видела этот фильм.",
    "hint": {
      "sentenceWithBlank": "She [____] me she had already seen that movie.",
      "options": [
        { "text": "told", "isCorrect": true, "explanation": "Глагол 'tell' всегда требует прямого дополнения (кому сказали - 'me')." },
        { "text": "said", "isCorrect": false, "explanation": "После 'said' нужен предлог 'to', если указывается кому: 'said to me'." },
        { "text": "spoke", "isCorrect": false, "explanation": "'Speak' означает 'говорить на языке' или 'разговаривать с кем-то', не вводит косвенную речь." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Entertainment",
    "lengthWords": 9
  },
  {
    "id": "88",
    "text": "They said they would help us the following week.",
    "translation": "Они сказали, что помогут нам на следующей неделе.",
    "hint": {
      "sentenceWithBlank": "They said they [____] help us the following week.",
      "options": [
        { "text": "would", "isCorrect": true, "explanation": "При согласовании времен 'will' (будущее время) заменяется на 'would'." },
        { "text": "will", "isCorrect": false, "explanation": "Нарушение правила согласования времен, так как главное предложение в прошедшем." },
        { "text": "should", "isCorrect": false, "explanation": "Изменит смысл на 'следует/должны помочь', а не просто будущее действие." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "89",
    "text": "He asked me where I lived.",
    "translation": "Он спросил меня, где я живу.",
    "hint": {
      "sentenceWithBlank": "He asked me where [____].",
      "options": [
        { "text": "I lived", "isCorrect": true, "explanation": "В косвенном вопросе используется прямой порядок слов и согласование времен." },
        { "text": "did I live", "isCorrect": false, "explanation": "Вспомогательный глагол не нужен, так как это косвенный вопрос, а не прямой." },
        { "text": "I live", "isCorrect": false, "explanation": "Нарушено согласование времен (главное предложение в прошедшем времени - asked)." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "90",
    "text": "She asked if I could help her with the task.",
    "translation": "Она спросила, могу ли я помочь ей с заданием.",
    "hint": {
      "sentenceWithBlank": "She asked [____] I could help her with the task.",
      "options": [
        { "text": "if", "isCorrect": true, "explanation": "Для общих вопросов (без вопросительного слова) в косвенной речи используются 'if' или 'whether'." },
        { "text": "that", "isCorrect": false, "explanation": "Слово 'that' используется для утверждений, а не для вопросов." },
        { "text": "can", "isCorrect": false, "explanation": "Грамматически не подходит по структуре." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "91",
    "text": "The manager advised me to review the guidelines.",
    "translation": "Менеджер посоветовал мне изучить руководство.",
    "hint": {
      "sentenceWithBlank": "The manager advised me [____] the guidelines.",
      "options": [
        { "text": "to review", "isCorrect": true, "explanation": "После глаголов типа 'advise', 'ask', 'tell' используется инфинитив с частицей 'to'." },
        { "text": "reviewing", "isCorrect": false, "explanation": "Герундий не используется после 'advise' + лицо." },
        { "text": "review", "isCorrect": false, "explanation": "Пропущена частица 'to', необходимая для инфинитива." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "92",
    "text": "He denied making that mistake.",
    "translation": "Он отрицал, что совершил ту ошибку.",
    "hint": {
      "sentenceWithBlank": "He denied [____] that mistake.",
      "options": [
        { "text": "making", "isCorrect": true, "explanation": "После глагола 'deny' используется герундий (V-ing)." },
        { "text": "to make", "isCorrect": false, "explanation": "Инфинитив после 'deny' не используется." },
        { "text": "make", "isCorrect": false, "explanation": "Грамматически неверная форма." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 5
  },
  {
    "id": "93",
    "text": "She promised not to tell anyone his secret.",
    "translation": "Она обещала никому не говорить его секрет.",
    "hint": {
      "sentenceWithBlank": "She promised [____] anyone his secret.",
      "options": [
        { "text": "not to tell", "isCorrect": true, "explanation": "Отрицательная форма инфинитива образуется добавлением 'not' перед 'to'." },
        { "text": "to not tell", "isCorrect": false, "explanation": "Не совсем корректный порядок слов для стандартной грамматики." },
        { "text": "don't tell", "isCorrect": false, "explanation": "Здесь нужен инфинитив, а не повелительное наклонение." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 8
  },
  {
    "id": "94",
    "text": "Although it was raining, we went for a walk.",
    "translation": "Хотя шел дождь, мы пошли на прогулку.",
    "hint": {
      "sentenceWithBlank": "[____] it was raining, we went for a walk.",
      "options": [
        { "text": "Although", "isCorrect": true, "explanation": "Союз 'although' (хотя) используется перед подлежащим и сказуемым." },
        { "text": "Despite", "isCorrect": false, "explanation": "После 'despite' должно идти существительное или герундий, а не полноценное предложение (it was raining)." },
        { "text": "However", "isCorrect": false, "explanation": "Обычно используется как вводное слово и выделяется запятой." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "95",
    "text": "Despite the heavy traffic, we arrived on time.",
    "translation": "Несмотря на пробки, мы приехали вовремя.",
    "hint": {
      "sentenceWithBlank": "[____] the heavy traffic, we arrived on time.",
      "options": [
        { "text": "Despite", "isCorrect": true, "explanation": "'Despite' (несмотря на) используется с существительным или герундием." },
        { "text": "Although", "isCorrect": false, "explanation": "После 'although' должно идти полноценное предложение (подлежащее + сказуемое)." },
        { "text": "In spite", "isCorrect": false, "explanation": "Требует предлога 'of' (In spite of)." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "Travel",
    "lengthWords": 8
  },
  {
    "id": "96",
    "text": "Seldom have I seen such a beautiful piece of art.",
    "translation": "Редко я видел такое красивое произведение искусства.",
    "hint": {
      "sentenceWithBlank": "[____] such a beautiful piece of art.",
      "options": [
        { "text": "Seldom have I seen", "isCorrect": true, "explanation": "В начале предложения отрицательные/ограничительные наречия (seldom) требуют инверсии (обратного порядка слов)." },
        { "text": "Seldom I have seen", "isCorrect": false, "explanation": "После 'seldom' в начале предложения требуется инверсия (порядок как в вопросе)." },
        { "text": "Have I seldom seen", "isCorrect": false, "explanation": "Наречие 'seldom' должно стоять первым." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "97",
    "text": "No sooner had I closed the door than the phone rang.",
    "translation": "Не успел я закрыть дверь, как зазвонил телефон.",
    "hint": {
      "sentenceWithBlank": "[____] closed the door than the phone rang.",
      "options": [
        { "text": "No sooner had I", "isCorrect": true, "explanation": "Конструкция 'No sooner + инверсия (had I) ... than' означает 'не успел я..., как...'." },
        { "text": "No sooner I had", "isCorrect": false, "explanation": "После 'No sooner' обязательна инверсия вспомогательного глагола и подлежащего." },
        { "text": "As soon as I had", "isCorrect": false, "explanation": "Конструкция 'As soon as' не сочетается с 'than' во второй части предложения." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "98",
    "text": "I look forward to hearing from you soon.",
    "translation": "С нетерпением жду ответа от вас в ближайшее время.",
    "hint": {
      "sentenceWithBlank": "I look forward [____] from you soon.",
      "options": [
        { "text": "to hearing", "isCorrect": true, "explanation": "В выражении 'look forward to' слово 'to' является предлогом, поэтому после него нужен герундий (V-ing)." },
        { "text": "to hear", "isCorrect": false, "explanation": "Здесь 'to' — не часть инфинитива, а предлог, поэтому нужен герундий." },
        { "text": "hearing", "isCorrect": false, "explanation": "Пропущен обязательный предлог 'to'." }
      ]
    },
    "tense": "Gerund",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "99",
    "text": "It's no use crying over spilled milk.",
    "translation": "Слезами горю не поможешь. / Нет смысла плакать над пролитым молоком.",
    "hint": {
      "sentenceWithBlank": "It's no use [____] over spilled milk.",
      "options": [
        { "text": "crying", "isCorrect": true, "explanation": "После выражения 'it's no use' (нет смысла) всегда используется герундий." },
        { "text": "to cry", "isCorrect": false, "explanation": "Инфинитив в данной идиоме не используется." },
        { "text": "cry", "isCorrect": false, "explanation": "Грамматически неверная форма, нужен герундий." }
      ]
    },
    "tense": "Gerund",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "100",
    "text": "Not only did he design the layout, but he also wrote the code.",
    "translation": "Он не только разработал макет, но и написал код.",
    "hint": {
      "sentenceWithBlank": "Not only [____] the layout, but he also wrote the code.",
      "options": [
        { "text": "did he design", "isCorrect": true, "explanation": "Когда предложение начинается с 'Not only', применяется инверсия (порядок слов как в вопросе)." },
        { "text": "he designed", "isCorrect": false, "explanation": "Отсутствует инверсия, которая обязательна после 'Not only' в начале." },
        { "text": "designed he", "isCorrect": false, "explanation": "Инверсия делается с помощью вспомогательного глагола 'did', а не основного глагола." }
      ]
    },
    "tense": "Inversion",
    "topic": "IT",
    "lengthWords": 13
  }
  ]
}