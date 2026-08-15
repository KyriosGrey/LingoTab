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
    "targetLang": "ar"
  },
  "sentences": [
    {
    id: "1",
    text: "This is my book, and that one is yours.",
    translation: "هذا كتابي، وذاك كتابك.",
    hint: {
      sentenceWithBlank: "This is my book, and that one is [____].",
      options: [
        { text: "yours", isCorrect: true, explanation: "هذه هي الصيغة المستقلة لضمير الملكية، ولا يأتي بعدها اسم." },
        { text: "your", isCorrect: false, explanation: "صيغة تحتاج إلى اسم بعدها (your book)." },
        { text: "you", isCorrect: false, explanation: "ضمير شخصي لا يدل على الملكية." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "2",
    text: "He gave her his car because hers was broken.",
    translation: "أعطاها سيارته لأنّ سيارتها كانت معطّلة.",
    hint: {
      sentenceWithBlank: "He gave her his car because [____] was broken.",
      options: [
        { text: "hers", isCorrect: true, explanation: "الصيغة المستقلة لضمير الملكية، وهي تحلّ محلّ العبارة كاملة her car." },
        { text: "her", isCorrect: false, explanation: "تحتاج إلى اسم بعدها (her car)." },
        { text: "she", isCorrect: false, explanation: "ضمير في حالة الفاعل، ولا يعبّر عن الملكية." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "3",
    text: "We did it ourselves without any help.",
    translation: "قمنا بذلك بأنفسنا دون أي مساعدة.",
    hint: {
      sentenceWithBlank: "We [____] [____] ourselves without any help.",
      options: [
        { text: "did it", isCorrect: true, explanation: "did هي صيغة الماضي من do، ويأتي بعدها الضمير it مفعولًا به." },
        { text: "do it", isCorrect: false, explanation: "صيغة المضارع، والجملة تتحدث عن الماضي." },
        { text: "made it", isCorrect: false, explanation: "make تعني الصنع أو الإنشاء، أما تأدية العمل فيعبّر عنها بـ do." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "4",
    text: "Is there anybody in the office?",
    translation: "هل يوجد أحد في المكتب؟",
    hint: {
      sentenceWithBlank: "[____] there anybody in the office?",
      options: [
        { text: "Is", isCorrect: true, explanation: "كلمة anybody تُعامل معاملة المفرد، لذلك نستعمل is في تركيب there is/are." },
        { text: "Are", isCorrect: false, explanation: "تُستعمل مع الجمع." },
        { text: "Does", isCorrect: false, explanation: "لا يُستعمل الفعل المساعد do/does في تركيب there is/are." }
      ]
    },
    tense: "Present Simple",
    topic: "Workplace",
    lengthWords: 6
  },
  {
    id: "5",
    text: "Nobody told me about the changes.",
    translation: "لم يخبرني أحد بالتغييرات.",
    hint: {
      sentenceWithBlank: "Nobody [____] me about the changes.",
      options: [
        { text: "told", isCorrect: true, explanation: "صيغة مثبتة في الماضي البسيط، لأن النفي موجود أصلًا في كلمة Nobody." },
        { text: "didn't tell", isCorrect: false, explanation: "لا تجتمع أداتا نفي في الجملة الإنجليزية (Nobody + didn't)." },
        { text: "said", isCorrect: false, explanation: "لا يأتي بعد say مفعول به مباشر، بل نقول said to me." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "6",
    text: "This is the building whose roof was damaged.",
    translation: "هذا هو المبنى الذي تضرّر سقفه.",
    hint: {
      sentenceWithBlank: "This is the building [____] roof was damaged.",
      options: [
        { text: "whose", isCorrect: true, explanation: "اسم موصول يدل على الملكية، أي: الذي سقفه." },
        { text: "who", isCorrect: false, explanation: "who تعني الذي أو مَن، ولا تدل على الملكية." },
        { text: "which", isCorrect: false, explanation: "which تعود على غير العاقل لكنها لا تعبّر عن الملكية." }
      ]
    },
    tense: "Passive Voice",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "7",
    text: "Give it to him, not to them.",
    translation: "أعطِه إياه، لا لهم.",
    hint: {
      sentenceWithBlank: "Give it to him, not to [____].",
      options: [
        { text: "them", isCorrect: true, explanation: "صيغة المفعول من الضمير they، وهي التي تأتي بعد حرف الجر to." },
        { text: "their", isCorrect: false, explanation: "ضمير ملكية يحتاج إلى اسم بعده." },
        { text: "they", isCorrect: false, explanation: "ضمير فاعل، ولا يجوز مجيئه بعد حرف الجر." }
      ]
    },
    tense: "Imperative",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "8",
    text: "Both of them are busy right now.",
    translation: "كلاهما مشغول الآن.",
    hint: {
      sentenceWithBlank: "[____] of them are busy right now.",
      options: [
        { text: "Both", isCorrect: true, explanation: "تعني كِلا، أي الاثنان معًا." },
        { text: "All", isCorrect: false, explanation: "All تُستعمل لثلاثة أشخاص أو أشياء فأكثر." },
        { text: "Either", isCorrect: false, explanation: "Either تعني أحد الاثنين، ويأتي بعدها فعل مفرد." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "9",
    text: "Neither of the options is perfect.",
    translation: "لا يوجد خيار مثالي من بين الخيارين.",
    hint: {
      sentenceWithBlank: "[____] of the options is perfect.",
      options: [
        { text: "Neither", isCorrect: true, explanation: "تعني: ولا واحد من الاثنين." },
        { text: "None", isCorrect: false, explanation: "None تُستعمل حين تكون الخيارات ثلاثة فأكثر." },
        { text: "Both", isCorrect: false, explanation: "تعني كِلا، ويلزمها فعل بصيغة الجمع (are)." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "10",
    text: "Each component has its own function.",
    translation: "لكل مكوّن وظيفته الخاصة.",
    hint: {
      sentenceWithBlank: "Each component [____] its own function.",
      options: [
        { text: "has", isCorrect: true, explanation: "Each تُعامل معاملة المفرد، فيأتي الفعل معها مفردًا." },
        { text: "have", isCorrect: false, explanation: "تُستعمل مع الفاعل الجمع." },
        { text: "having", isCorrect: false, explanation: "صيغة اسم الفاعل، والمطلوب هنا فعل الجملة الأساسي." }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "11",
    text: "She usually goes to work by bus, but today she is driving.",
    translation: "تذهب عادةً إلى العمل بالحافلة، لكنها اليوم تقود سيارتها.",
    hint: {
      sentenceWithBlank: "She usually goes to work by bus, but today she [____] [____].",
      options: [
        { text: "is driving", isCorrect: true, explanation: "المضارع المستمر يعبّر عن فعل مؤقت يحدث اليوم خلافًا للعادة." },
        { text: "drives", isCorrect: false, explanation: "المضارع البسيط للعادات المتكررة (usually)، لا لحدث اليوم." },
        { text: "driving", isCorrect: false, explanation: "ينقص الفعل المساعد is." }
      ]
    },
    tense: "Present Continuous",
    topic: "Daily Life",
    lengthWords: 12
  },
  {
    id: "12",
    text: "Water boils at 100 degrees Celsius.",
    translation: "يغلي الماء عند مئة درجة مئوية.",
    hint: {
      sentenceWithBlank: "Water [____] at 100 degrees Celsius.",
      options: [
        { text: "boils", isCorrect: true, explanation: "المضارع البسيط يُستعمل للحقائق العامة وقوانين الطبيعة." },
        { text: "is boiling", isCorrect: false, explanation: "المضارع المستمر يصف ما يجري في هذه اللحظة، لا حقيقة ثابتة." },
        { text: "boiled", isCorrect: false, explanation: "الماضي البسيط للأحداث المنتهية في الماضي." }
      ]
    },
    tense: "Present Simple",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "13",
    text: "Does he know where the keys are?",
    translation: "هل يعرف أين المفاتيح؟",
    hint: {
      sentenceWithBlank: "[____] he know where the keys are?",
      options: [
        { text: "Does", isCorrect: true, explanation: "الفعل المساعد للسؤال في المضارع البسيط مع he/she/it." },
        { text: "Do", isCorrect: false, explanation: "تُستعمل مع I و you و we و they." },
        { text: "Is", isCorrect: false, explanation: "لا يُستعمل الفعل be مساعدًا مع فعل أساسي مثل know." }
      ]
    },
    tense: "Present Simple",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "14",
    text: "Why didn't you call me yesterday?",
    translation: "لماذا لم تتصل بي أمس؟",
    hint: {
      sentenceWithBlank: "Why [____] you call me yesterday?",
      options: [
        { text: "didn't", isCorrect: true, explanation: "الفعل المساعد للسؤال المنفي في الماضي البسيط." },
        { text: "don't", isCorrect: false, explanation: "صيغة المضارع، بينما في الجملة ظرف الزمان yesterday." },
        { text: "weren't", isCorrect: false, explanation: "لا يُستعمل الفعل be مع فعل أساسي (call) في الأزمنة البسيطة." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "15",
    text: "I saw a great movie last weekend.",
    translation: "شاهدت فيلمًا رائعًا في نهاية الأسبوع الماضي.",
    hint: {
      sentenceWithBlank: "I [____] a great movie last weekend.",
      options: [
        { text: "saw", isCorrect: true, explanation: "التصريف الثاني من see، لحدث تام في زمن ماضٍ محدد (last weekend)." },
        { text: "see", isCorrect: false, explanation: "صيغة مضارعة لا تتفق مع last weekend." },
        { text: "have seen", isCorrect: false, explanation: "المضارع التام لا يُستعمل مع تحديد زمن ماضٍ صريح." }
      ]
    },
    tense: "Past Simple",
    topic: "Entertainment",
    lengthWords: 7
  },
  {
    id: "16",
    text: "They didn't arrive on time because of the traffic.",
    translation: "لم يصلوا في الوقت المحدد بسبب الازدحام المروري.",
    hint: {
      sentenceWithBlank: "They didn't arrive on time [____] of the traffic.",
      options: [
        { text: "because", isCorrect: true, explanation: "التركيب because of يأتي قبل الاسم للدلالة على السبب." },
        { text: "why", isCorrect: false, explanation: "تعني لماذا، وهي أداة استفهام لا أداة تعليل." },
        { text: "as", isCorrect: false, explanation: "يأتي بعد as جملة كاملة فيها فاعل وفعل." }
      ]
    },
    tense: "Past Simple",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "17",
    text: "What will you do if they reject the plan?",
    translation: "ماذا ستفعل إن رفضوا الخطة؟",
    hint: {
      sentenceWithBlank: "What [____] you do if they reject the plan?",
      options: [
        { text: "will", isCorrect: true, explanation: "في الشرط من النوع الأول تأتي الجملة الرئيسية بصيغة المستقبل البسيط." },
        { text: "would", isCorrect: false, explanation: "تُستعمل في الشرط من النوع الثاني، أي الشرط غير الواقعي." },
        { text: "do", isCorrect: false, explanation: "عندئذٍ يصير السؤال عن عادة في الحاضر: ماذا تفعل عادةً؟" }
      ]
    },
    tense: "Future Simple",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "18",
    text: "I think it will be a sunny day.",
    translation: "أظن أنّ اليوم سيكون مشمسًا.",
    hint: {
      sentenceWithBlank: "I think it [____] [____] a sunny day.",
      options: [
        { text: "will be", isCorrect: true, explanation: "المستقبل البسيط للتوقعات وإبداء الرأي الشخصي (I think)." },
        { text: "is being", isCorrect: false, explanation: "تدل على سلوك مؤقت في اللحظة الراهنة، ولا تناسب المعنى هنا." },
        { text: "will", isCorrect: false, explanation: "ينقص الفعل الأساسي be." }
      ]
    },
    tense: "Future Simple",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "19",
    text: "Are you going to update the layout this evening?",
    translation: "هل تنوي تحديث التصميم هذا المساء؟",
    hint: {
      sentenceWithBlank: "Are you [____] [____] update the layout this evening?",
      options: [
        { text: "going to", isCorrect: true, explanation: "تركيب be going to يُستعمل للخطط والنوايا المقررة سلفًا." },
        { text: "will to", isCorrect: false, explanation: "لا تأتي to بعد will أبدًا." },
        { text: "want to", isCorrect: false, explanation: "يصير المعنى: هل تريد؟ لا: هل تنوي؟" }
      ]
    },
    tense: "Future (going to)",
    topic: "IT",
    lengthWords: 9
  },
  {
    id: "20",
    text: "The train leaves at 9 PM tonight.",
    translation: "يغادر القطار الليلة في التاسعة مساءً.",
    hint: {
      sentenceWithBlank: "The train [____] at 9 PM tonight.",
      options: [
        { text: "leaves", isCorrect: true, explanation: "المضارع البسيط يُستعمل لمواعيد الرحلات والجداول الزمنية ولو دلّت على المستقبل." },
        { text: "will leave", isCorrect: false, explanation: "مع الجداول الرسمية يُفضَّل المضارع البسيط." },
        { text: "is leaving", isCorrect: false, explanation: "تُستعمل للترتيبات الشخصية لا للجداول الرسمية." }
      ]
    },
    tense: "Present Simple",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "21",
    text: "How often do you practice your English?",
    translation: "كم مرة تتدرّب على لغتك الإنجليزية؟",
    hint: {
      sentenceWithBlank: "How [____] do you practice your English?",
      options: [
        { text: "often", isCorrect: true, explanation: "التركيب How often يُسأل به عن تكرار الفعل ومدى انتظامه." },
        { text: "many", isCorrect: false, explanation: "How many للسؤال عن عدد الأشياء المعدودة." },
        { text: "much", isCorrect: false, explanation: "How much للسؤال عن كمية ما لا يُعدّ." }
      ]
    },
    tense: "Present Simple",
    topic: "Education",
    lengthWords: 7
  },
  {
    id: "22",
    text: "Who wrote this article?",
    translation: "من كتب هذا المقال؟",
    hint: {
      sentenceWithBlank: "Who [____] this article?",
      options: [
        { text: "wrote", isCorrect: true, explanation: "إذا كان السؤال عن الفاعل نفسه فلا حاجة إلى did، ويبقى ترتيب الجملة الخبري." },
        { text: "did write", isCorrect: false, explanation: "تركيب غير صحيح في السؤال الموجّه إلى الفاعل (Who)." },
        { text: "written", isCorrect: false, explanation: "التصريف الثالث، ويلزمه فعل مساعد مثل have/has أو was/were." }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 4
  },
  {
    id: "23",
    text: "Who did you invite to the presentation?",
    translation: "من دعوت إلى العرض التقديمي؟",
    hint: {
      sentenceWithBlank: "Who [____] you invite to the presentation?",
      options: [
        { text: "did", isCorrect: true, explanation: "السؤال هنا عن المفعول به (مَن؟)، فيلزم الفعل المساعد did في الماضي البسيط." },
        { text: "do", isCorrect: false, explanation: "صيغة مضارعة تعني: من تدعو عادةً؟" },
        { text: "were", isCorrect: false, explanation: "لا يُستعمل الفعل be مع الفعل الأساسي invite في الأزمنة البسيطة." }
      ]
    },
    tense: "Past Simple",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "24",
    text: "There used to be a cinema here.",
    translation: "كانت هنا دار سينما فيما مضى.",
    hint: {
      sentenceWithBlank: "There [____] to be a cinema here.",
      options: [
        { text: "used", isCorrect: true, explanation: "التركيب used to يدل على أمر كان قائمًا في الماضي ولم يعد موجودًا." },
        { text: "use", isCorrect: false, explanation: "المطلوب صيغة الماضي used." },
        { text: "was", isCorrect: false, explanation: "لا يجوز أن يأتي بعد was مصدر بصيغة to be." }
      ]
    },
    tense: "Past Habit",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "25",
    text: "I am used to waking up early.",
    translation: "لقد اعتدت الاستيقاظ باكرًا.",
    hint: {
      sentenceWithBlank: "I am [____] [____] waking up early.",
      options: [
        { text: "used to", isCorrect: true, explanation: "التركيب be used to + V-ing يدل على عادة ترسّخت حتى الآن." },
        { text: "use to", isCorrect: false, explanation: "للدلالة على الاعتياد تلزم الصيغة used." },
        { text: "used", isCorrect: false, explanation: "ينقص حرف الجر to وهو ركن أساسي في هذا التركيب." }
      ]
    },
    tense: "Present Habit",
    topic: "Daily Life",
    lengthWords: 7
  },
    {
    id: "26",
    text: "Look! It is snowing outside.",
    translation: "انظر! الثلج يتساقط في الخارج.",
    hint: {
      sentenceWithBlank: "Look! It [____] outside.",
      options: [
        { text: "is snowing", isCorrect: true, explanation: "المضارع المستمر لما يجري في هذه اللحظة، وكلمة Look تدل على ذلك." },
        { text: "snows", isCorrect: false, explanation: "المضارع البسيط يفيد التكرار المعتاد لا ما يحدث الآن." },
        { text: "snowing", isCorrect: false, explanation: "ينقص الفعل المساعد is." }
      ]
    },
    tense: "Present Continuous",
    topic: "Nature",
    lengthWords: 5
  },
  {
    id: "27",
    text: "What were you doing when I called you?",
    translation: "ماذا كنت تفعل حين اتصلت بك؟",
    hint: {
      sentenceWithBlank: "What [____] you [____] when I called you?",
      options: [
        { text: "were / doing", isCorrect: true, explanation: "الماضي المستمر يصف فعلًا كان جاريًا في الماضي وقطعه فعل آخر (حين اتصلت)." },
        { text: "did / do", isCorrect: false, explanation: "الماضي البسيط للأحداث المتتابعة التامة لا للفعل الجاري." },
        { text: "are / doing", isCorrect: false, explanation: "صيغة حاضرة، والجملة تشير إلى الماضي (when I called)." }
      ]
    },
    tense: "Past Continuous",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "28",
    text: "While she was cooking, he was reading a book.",
    translation: "بينما كانت تطبخ، كان هو يقرأ كتابًا.",
    hint: {
      sentenceWithBlank: "While she [____], he was reading a book.",
      options: [
        { text: "was cooking", isCorrect: true, explanation: "الماضي المستمر يُستعمل لفعلين متزامنين مستمرين في الماضي." },
        { text: "cooked", isCorrect: false, explanation: "الماضي البسيط يدل على فعل تام، بينما تشير while إلى فعل جارٍ." },
        { text: "is cooking", isCorrect: false, explanation: "الشطر الثاني في الماضي (was reading)، فيلزم الشطر الأول الماضي كذلك." }
      ]
    },
    tense: "Past Continuous",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "29",
    text: "I have already finished the first task.",
    translation: "لقد أنجزت المهمة الأولى بالفعل.",
    hint: {
      sentenceWithBlank: "I [____] already [____] the first task.",
      options: [
        { text: "have / finished", isCorrect: true, explanation: "المضارع التام لفعل تمّ ونتيجته قائمة الآن، وكلمة already دليل عليه." },
        { text: "am / finishing", isCorrect: false, explanation: "تفيد أن العمل ما زال جاريًا، بينما already تعني أنه انتهى." },
        { text: "had / finished", isCorrect: false, explanation: "الماضي التام يلزم عند وجود حدث آخر في الماضي." }
      ]
    },
    tense: "Present Perfect",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "30",
    text: "Have you ever been to London?",
    translation: "هل سبق أن زرت لندن؟",
    hint: {
      sentenceWithBlank: "Have you [____] been to London?",
      options: [
        { text: "ever", isCorrect: true, explanation: "كلمة ever تكثر في أسئلة المضارع التام عند الحديث عن تجارب الحياة." },
        { text: "never", isCorrect: false, explanation: "تعني أبدًا، وتأتي في جملة مثبتة الشكل منفية المعنى." },
        { text: "yet", isCorrect: false, explanation: "موضعها في آخر الجملة." }
      ]
    },
    tense: "Present Perfect",
    topic: "Travel",
    lengthWords: 6
  },
  {
    id: "31",
    text: "She has lived here since 2015.",
    translation: "تعيش هنا منذ عام 2015.",
    hint: {
      sentenceWithBlank: "She has lived here [____] 2015.",
      options: [
        { text: "since", isCorrect: true, explanation: "since تحدد نقطة البداية التي انطلق منها الفعل في الماضي." },
        { text: "for", isCorrect: false, explanation: "for تدل على طول المدة (مثل: for 5 years)." },
        { text: "from", isCorrect: false, explanation: "غالبًا ما تحتاج from إلى ما يقابلها مثل to أو until." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "32",
    text: "We haven't seen each other for ages.",
    translation: "لم نلتقِ منذ زمن طويل.",
    hint: {
      sentenceWithBlank: "We [____] each other for ages.",
      options: [
        { text: "haven't seen", isCorrect: true, explanation: "المضارع التام يدل على انتفاء الفعل من الماضي حتى اللحظة (for ages)." },
        { text: "didn't see", isCorrect: false, explanation: "الماضي البسيط يشير إلى مدة منتهية، والمدة هنا ما زالت مستمرة." },
        { text: "don't see", isCorrect: false, explanation: "المضارع البسيط يصف عادة متكررة لا حالة ممتدة حتى الآن." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "33",
    text: "When I arrived, the meeting had already started.",
    translation: "حين وصلت، كان الاجتماع قد بدأ فعلًا.",
    hint: {
      sentenceWithBlank: "When I arrived, the meeting [____] already [____].",
      options: [
        { text: "had / started", isCorrect: true, explanation: "الماضي التام لفعل انتهى قبل فعل آخر في الماضي (When I arrived)." },
        { text: "has / started", isCorrect: false, explanation: "الفعل الرئيسي في الماضي (arrived)، فلا يصح المضارع التام." },
        { text: "was / starting", isCorrect: false, explanation: "يعني أن الاجتماع كان يوشك أن يبدأ، بينما already تفيد أنه بدأ فعلًا." }
      ]
    },
    tense: "Past Perfect",
    topic: "Workplace",
    lengthWords: 8
  },
  {
    id: "34",
    text: "He realized he had lost his wallet.",
    translation: "أدرك أنه أضاع محفظته.",
    hint: {
      sentenceWithBlank: "He realized he [____] his wallet.",
      options: [
        { text: "had lost", isCorrect: true, explanation: "ضياع المحفظة سبق لحظة الإدراك، لذا يلزم الماضي التام." },
        { text: "loses", isCorrect: false, explanation: "الجملة الرئيسية في الماضي، فلا يتفق معها المضارع البسيط." },
        { text: "has lost", isCorrect: false, explanation: "المضارع التام يربط بالحاضر، لكن الإدراك (realized) وقع في الماضي." }
      ]
    },
    tense: "Past Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "35",
    text: "By next year, they will have completed the project.",
    translation: "بحلول العام المقبل يكونون قد أنجزوا المشروع.",
    hint: {
      sentenceWithBlank: "By next year, they [____] the project.",
      options: [
        { text: "will have completed", isCorrect: true, explanation: "المستقبل التام لفعل سيكتمل قبل لحظة محددة في المستقبل (By next year)." },
        { text: "will complete", isCorrect: false, explanation: "يخبر عن حدث في المستقبل، لكن by تستدعي المستقبل التام." },
        { text: "are completing", isCorrect: false, explanation: "يفيد الخطة، لكنه لا ينقل معنى الاكتمال عند موعد محدد." }
      ]
    },
    tense: "Future Perfect",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "36",
    text: "I will be flying to Paris this time tomorrow.",
    translation: "في مثل هذا الوقت غدًا سأكون مسافرًا جوًّا إلى باريس.",
    hint: {
      sentenceWithBlank: "I [____] to Paris this time tomorrow.",
      options: [
        { text: "will be flying", isCorrect: true, explanation: "المستقبل المستمر يصف فعلًا سيكون جاريًا في لحظة محددة من المستقبل (this time tomorrow)." },
        { text: "will fly", isCorrect: false, explanation: "المستقبل البسيط يخبر عن الحدث أو القرار لا عن مجراه في لحظة بعينها." },
        { text: "fly", isCorrect: false, explanation: "يمكن استعمال المضارع البسيط للجداول، لكن التركيز هنا على مجرى الرحلة نفسه." }
      ]
    },
    tense: "Future Continuous",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "37",
    text: "This is the best coffee I have ever tasted.",
    translation: "هذه أفضل قهوة ذقتها في حياتي.",
    hint: {
      sentenceWithBlank: "This is the best coffee I have [____] tasted.",
      options: [
        { text: "ever", isCorrect: true, explanation: "ever تُستعمل للتجربة الحياتية، خاصة بعد اسم التفضيل (the best)." },
        { text: "never", isCorrect: false, explanation: "تقلب المعنى إلى: لم أذقها قط." },
        { text: "already", isCorrect: false, explanation: "تعني بالفعل، وهي لا تتلاءم مع سياق الأفضلية." }
      ]
    },
    tense: "Present Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "38",
    text: "It's the first time I have driven an electric car.",
    translation: "هذه أول مرة أقود فيها سيارة كهربائية.",
    hint: {
      sentenceWithBlank: "It's the first time I [____] an electric car.",
      options: [
        { text: "have driven", isCorrect: true, explanation: "التركيب It's the first time يستلزم دائمًا المضارع التام." },
        { text: "drive", isCorrect: false, explanation: "الحديث هنا عن تجربة، فلا يصلح المضارع البسيط." },
        { text: "drove", isCorrect: false, explanation: "الماضي البسيط لحدث منتهٍ، بينما هذه التجربة متصلة بالحاضر." }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "39",
    text: "She was tired because she had worked all night.",
    translation: "كانت متعبة لأنها عملت طوال الليل.",
    hint: {
      sentenceWithBlank: "She was tired because she [____] all night.",
      options: [
        { text: "had worked", isCorrect: true, explanation: "الماضي التام يوضح السبب الذي سبق الحالة الماضية (كونها متعبة)." },
        { text: "has worked", isCorrect: false, explanation: "النتيجة نفسها في الماضي، فلا يناسبها المضارع التام." },
        { text: "worked", isCorrect: false, explanation: "الماضي البسيط ممكن، لكن الماضي التام أوضح في بيان الأسبقية والسببية." }
      ]
    },
    tense: "Past Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "40",
    text: "I had never seen such a beautiful sunset before.",
    translation: "لم أرَ من قبل غروبًا بهذا الجمال.",
    hint: {
      sentenceWithBlank: "I [____] seen such a beautiful sunset before.",
      options: [
        { text: "had never", isCorrect: true, explanation: "الماضي التام يؤكد انتفاء التجربة حتى لحظة معينة في الماضي." },
        { text: "have never", isCorrect: false, explanation: "المضارع التام يتصل بالحاضر، لكن before تشير إلى نقطة في الماضي." },
        { text: "did never", isCorrect: false, explanation: "تركيب غير صحيح أصلًا، والمطلوب هنا الماضي التام." }
      ]
    },
    tense: "Past Perfect",
    topic: "Nature",
    lengthWords: 9
  },
  {
    id: "41",
    text: "I have been learning English for three years.",
    translation: "أتعلّم الإنجليزية منذ ثلاث سنوات.",
    hint: {
      sentenceWithBlank: "I [____] English for three years.",
      options: [
        { text: "have been learning", isCorrect: true, explanation: "المضارع التام المستمر يبرز طول فعل بدأ في الماضي وما زال جاريًا." },
        { text: "am learning", isCorrect: false, explanation: "لا يُستعمل المضارع المستمر مع تحديد مدة مثل for three years." },
        { text: "learn", isCorrect: false, explanation: "المضارع البسيط يذكر الحقيقة لا العملية الممتدة عبر مدة معينة." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Education",
    lengthWords: 8
  },
  {
    id: "42",
    text: "Why are your hands dirty? — I've been fixing my bike.",
    translation: "لماذا يداك متسختان؟ — كنت أُصلح دراجتي.",
    hint: {
      sentenceWithBlank: "Why are your hands dirty? — I've [____] my bike.",
      options: [
        { text: "been fixing", isCorrect: true, explanation: "المضارع التام المستمر يفسّر أثرًا ظاهرًا الآن (اليدان المتسختان) بعملية جرت قبل قليل." },
        { text: "fixed", isCorrect: false, explanation: "المضارع التام يركّز على تمام الفعل، والمهم هنا العملية التي تركت أثرها." },
        { text: "fixing", isCorrect: false, explanation: "ينقص الفعل been اللازم لبناء المضارع التام المستمر." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 11
  },
  {
    id: "43",
    text: "It has been raining all day.",
    translation: "ما زال المطر يهطل طوال اليوم.",
    hint: {
      sentenceWithBlank: "It [____] all day.",
      options: [
        { text: "has been raining", isCorrect: true, explanation: "المضارع التام المستمر لفعل متواصل من الماضي حتى اللحظة (all day)." },
        { text: "is raining", isCorrect: false, explanation: "المضارع المستمر يخص اللحظة الراهنة دون بيان المدة." },
        { text: "rains", isCorrect: false, explanation: "المضارع البسيط يعني أن المطر يهطل عادةً، لا أنه متواصل طوال اليوم." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Nature",
    lengthWords: 6
  },
  {
    id: "44",
    text: "She had been waiting for two hours before the bus arrived.",
    translation: "كانت تنتظر منذ ساعتين قبل أن تصل الحافلة.",
    hint: {
      sentenceWithBlank: "She [____] for two hours before the bus arrived.",
      options: [
        { text: "had been waiting", isCorrect: true, explanation: "الماضي التام المستمر يبيّن مدة استمرار الفعل حتى حدث آخر في الماضي." },
        { text: "has been waiting", isCorrect: false, explanation: "صيغة متصلة بالحاضر، والحدث الآخر (arrived) في الماضي." },
        { text: "was waiting", isCorrect: false, explanation: "مع تحديد المدة بـ for قبل حدث ماضٍ آخر يلزم الماضي التام المستمر." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "45",
    text: "They had been living there for five years when the company closed.",
    translation: "كانوا يقيمون هناك منذ خمس سنوات حين أُغلقت الشركة.",
    hint: {
      sentenceWithBlank: "They [____] there for five years when the company closed.",
      options: [
        { text: "had been living", isCorrect: true, explanation: "الماضي التام المستمر يبيّن كم دام الفعل حتى لحظة معينة في الماضي." },
        { text: "were living", isCorrect: false, explanation: "لا يُستعمل الماضي المستمر مع تحديد المدة (for five years)." },
        { text: "have been living", isCorrect: false, explanation: "الأحداث كلها في الماضي (closed)، فيلزم زمن ماضٍ." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "46",
    text: "His eyes were red because he had been staring at the screen for hours.",
    translation: "كانت عيناه محمرّتين لأنه ظل يحدّق في الشاشة ساعات طويلة.",
    hint: {
      sentenceWithBlank: "His eyes were red because he [____] at the screen for hours.",
      options: [
        { text: "had been staring", isCorrect: true, explanation: "الماضي التام المستمر يصف العملية الطويلة التي تسببت في حالة ماضية." },
        { text: "has been staring", isCorrect: false, explanation: "النتيجة في الماضي (were red)، فيلزم زمن ماضٍ." },
        { text: "was staring", isCorrect: false, explanation: "الماضي المستمر لا ينقل معنى الأسبقية والمدة المؤدية إلى النتيجة." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 14
  },
  {
    id: "47",
    text: "By midnight, I will have been working on this design for ten hours.",
    translation: "بحلول منتصف الليل أكون قد أمضيت عشر ساعات في العمل على هذا التصميم.",
    hint: {
      sentenceWithBlank: "By midnight, I [____] on this design for ten hours.",
      options: [
        { text: "will have been working", isCorrect: true, explanation: "المستقبل التام المستمر يبيّن كم سيدوم الفعل حتى لحظة محددة في المستقبل." },
        { text: "will work", isCorrect: false, explanation: "المستقبل البسيط لا ينقل فكرة المدة المتراكمة حتى موعد معين." },
        { text: "will be working", isCorrect: false, explanation: "يصف فعلًا جاريًا لكنه لا يبرز طول المدة (for ten hours)." }
      ]
    },
    tense: "Future Perfect Continuous",
    topic: "Workplace",
    lengthWords: 13
  },
  {
    id: "48",
    text: "How long have you been looking for a job?",
    translation: "منذ متى وأنت تبحث عن عمل؟",
    hint: {
      sentenceWithBlank: "How long [____] you [____] for a job?",
      options: [
        { text: "have / been looking", isCorrect: true, explanation: "أسئلة How long عن فعل لم ينتهِ بعد تُصاغ بالمضارع التام المستمر." },
        { text: "are / looking", isCorrect: false, explanation: "يسأل عن اللحظة الراهنة (عمّ تبحث الآن؟) لا عن المدة." },
        { text: "do / look", isCorrect: false, explanation: "لا يصلح المضارع البسيط لأن الأمر ليس عادة متكررة." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "49",
    text: "We had been driving for miles before we realized we were lost.",
    translation: "قطعنا أميالًا بالسيارة قبل أن ندرك أننا قد ضللنا الطريق.",
    hint: {
      sentenceWithBlank: "We [____] for miles before we realized we were lost.",
      options: [
        { text: "had been driving", isCorrect: true, explanation: "الماضي التام المستمر لعملية دامت حتى حدث معيّن في الماضي." },
        { text: "have been driving", isCorrect: false, explanation: "كل أحداث الجملة في الماضي (realized وwere)، فلا يصلح المضارع التام." },
        { text: "were driving", isCorrect: false, explanation: "الماضي المستمر لا يبرز المدة المتراكمة قبل الحدث الآخر." }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 12
  },
  {
    id: "50",
    text: "She has been running, so she is out of breath.",
    translation: "كانت تجري، لذلك انقطعت أنفاسها.",
    hint: {
      sentenceWithBlank: "She [____], so she is out of breath.",
      options: [
        { text: "has been running", isCorrect: true, explanation: "المضارع التام المستمر يفسّر الحالة الراهنة (انقطاع النفَس) بعملية جرت قبل قليل." },
        { text: "is running", isCorrect: false, explanation: "يعني أنها تجري في هذه اللحظة." },
        { text: "ran", isCorrect: false, explanation: "الماضي البسيط يذكر الحدث فحسب، أما ربط العملية بنتيجتها فيؤديه المضارع التام المستمر." }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 10
  },
    {
    id: "51",
    text: "You must wear a seatbelt while driving.",
    translation: "يجب ربط حزام الأمان أثناء القيادة.",
    hint: {
      sentenceWithBlank: "You [____] wear a seatbelt while driving.",
      options: [
        { text: "must", isCorrect: true, explanation: "must تعبّر عن إلزام صارم أو قاعدة واجبة." },
        { text: "have", isCorrect: false, explanation: "يلزم إضافة to بعد have (have to)." },
        { text: "can", isCorrect: false, explanation: "can تدل على القدرة، والحديث هنا عن قاعدة ملزمة." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "52",
    text: "You don't have to pay for the tickets; they are free.",
    translation: "لا داعي لأن تدفع ثمن التذاكر، فهي مجانية.",
    hint: {
      sentenceWithBlank: "You [____] pay for the tickets; they are free.",
      options: [
        { text: "don't have to", isCorrect: true, explanation: "تفيد انتفاء الضرورة، أي: ليس عليك أن تفعل." },
        { text: "mustn't", isCorrect: false, explanation: "mustn't تفيد المنع القاطع." },
        { text: "shouldn't", isCorrect: false, explanation: "shouldn't للنصح، والمقصود هنا انتفاء الحاجة." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "53",
    text: "You shouldn't eat so much fast food.",
    translation: "لا ينبغي لك أن تكثر من الوجبات السريعة.",
    hint: {
      sentenceWithBlank: "You [____] eat so much fast food.",
      options: [
        { text: "shouldn't", isCorrect: true, explanation: "shouldn't تُستعمل لإسداء النصيحة، أي: لا ينبغي." },
        { text: "don't have to", isCorrect: false, explanation: "تعني انتفاء الضرورة، ولا تؤدي معنى النصح." },
        { text: "can't", isCorrect: false, explanation: "can't تفيد المنع أو استحالة الفعل." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "54",
    text: "He might come to the meeting, but he isn't sure.",
    translation: "ربما يحضر الاجتماع، لكنه غير متأكد.",
    hint: {
      sentenceWithBlank: "He [____] come to the meeting, but he isn't sure.",
      options: [
        { text: "might", isCorrect: true, explanation: "might تعبّر عن احتمال ضعيف في المستقبل." },
        { text: "must", isCorrect: false, explanation: "must تفيد اليقين أو الإلزام." },
        { text: "can", isCorrect: false, explanation: "لا تُستعمل can عادةً للاحتمال في حدث مستقبلي بعينه." }
      ]
    },
    tense: "Modal Verbs",
    topic: "Workplace",
    lengthWords: 10
  },
  {
    id: "55",
    text: "May I borrow your pen for a moment?",
    translation: "هل لي أن أستعير قلمك لحظة؟",
    hint: {
      sentenceWithBlank: "[____] I borrow your pen for a moment?",
      options: [
        { text: "May", isCorrect: true, explanation: "May تُستعمل لطلب الإذن بأسلوب مهذّب." },
        { text: "Must", isCorrect: false, explanation: "Must للإلزام لا لطلب الإذن." },
        { text: "Should", isCorrect: false, explanation: "Should للنصح، أي: هل ينبغي لي؟" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "56",
    text: "She can't be at home; I saw her at the office five minutes ago.",
    translation: "لا يمكن أن تكون في البيت، فقد رأيتها في المكتب قبل خمس دقائق.",
    hint: {
      sentenceWithBlank: "She [____] be at home; I saw her at the office five minutes ago.",
      options: [
        { text: "can't", isCorrect: true, explanation: "can't تفيد الجزم باستحالة الأمر بناءً على دليل." },
        { text: "mustn't", isCorrect: false, explanation: "mustn't تفيد المنع لا الاستنتاج المنطقي." },
        { text: "might not", isCorrect: false, explanation: "تفيد احتمالًا ضعيفًا، والموقف هنا فيه جزم." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 14
  },
  {
    id: "57",
    text: "He must have forgotten about our appointment.",
    translation: "لا بد أنه نسي موعدنا.",
    hint: {
      sentenceWithBlank: "He [____] about our appointment.",
      options: [
        { text: "must have forgotten", isCorrect: true, explanation: "التركيب must + have + V3 يفيد الترجيح القوي لأمر وقع في الماضي." },
        { text: "must forget", isCorrect: false, explanation: "صيغة تخص الحاضر أو المستقبل." },
        { text: "should have forgotten", isCorrect: false, explanation: "تعني: كان ينبغي له أن ينسى." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "58",
    text: "You should have told me the truth earlier.",
    translation: "كان عليك أن تخبرني الحقيقة قبل ذلك.",
    hint: {
      sentenceWithBlank: "You [____] me the truth earlier.",
      options: [
        { text: "should have told", isCorrect: true, explanation: "التركيب should + have + V3 يفيد العتاب على أمر لم يُفعل في الماضي." },
        { text: "should tell", isCorrect: false, explanation: "صيغة تخص الحاضر أو المستقبل." },
        { text: "must have told", isCorrect: false, explanation: "تعني الترجيح: لا بد أنك أخبرت." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "59",
    text: "I could play the piano when I was a child.",
    translation: "كنت أجيد العزف على البيانو في طفولتي.",
    hint: {
      sentenceWithBlank: "I [____] play the piano when I was a child.",
      options: [
        { text: "could", isCorrect: true, explanation: "could صيغة الماضي من can، وتُستعمل للمهارات في الماضي." },
        { text: "can", isCorrect: false, explanation: "can تخص القدرة في الحاضر." },
        { text: "must", isCorrect: false, explanation: "must تفيد الإلزام لا القدرة أو المهارة." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "60",
    text: "We had better leave now before it gets dark.",
    translation: "الأفضل أن نغادر الآن قبل أن يحلّ الظلام.",
    hint: {
      sentenceWithBlank: "We [____] leave now before it gets dark.",
      options: [
        { text: "had better", isCorrect: true, explanation: "التركيب had better للنصح المؤكد أو التحذير." },
        { text: "would rather", isCorrect: false, explanation: "would rather تفيد التفضيل: أفضّل أن." },
        { text: "should to", isCorrect: false, explanation: "لا تأتي to بعد should." }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "61",
    text: "If you heat ice, it melts.",
    translation: "إذا سخّنت الجليد فإنه يذوب.",
    hint: {
      sentenceWithBlank: "If you heat ice, it [____].",
      options: [
        { text: "melts", isCorrect: true, explanation: "في الشرط من النوع الصفري (الحقائق العامة) يأتي الشطران في المضارع البسيط." },
        { text: "will melt", isCorrect: false, explanation: "الحقائق العلمية يعبَّر عنها بالمضارع البسيط لا بالمستقبل." },
        { text: "melted", isCorrect: false, explanation: "لا يصلح زمن الماضي في هذا السياق." }
      ]
    },
    tense: "Conditionals",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "62",
    text: "If I have time tonight, I will call you.",
    translation: "إن اتّسع وقتي الليلة فسأتصل بك.",
    hint: {
      sentenceWithBlank: "If I [____] time tonight, I [____] you.",
      options: [
        { text: "have / will call", isCorrect: true, explanation: "الشرط من النوع الأول: جملة الشرط بالمضارع البسيط، والجواب بالمستقبل البسيط." },
        { text: "will have / call", isCorrect: false, explanation: "لا تُستعمل will بعد if في جملة الشرط." },
        { text: "had / would call", isCorrect: false, explanation: "هذا النوع الثاني للمواقف غير الواقعية، والشرط هنا واقعي ممكن." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "63",
    text: "Unless you study hard, you won't pass the exam.",
    translation: "إن لم تجتهد في الدراسة فلن تنجح في الامتحان.",
    hint: {
      sentenceWithBlank: "[____] you study hard, you won't pass the exam.",
      options: [
        { text: "Unless", isCorrect: true, explanation: "Unless تعني: إن لم (if not)، فالنفي متضمَّن فيها." },
        { text: "If", isCorrect: false, explanation: "مع if يصير المعنى: إن درست فلن تنجح، وهو معنى غير منطقي." },
        { text: "Without", isCorrect: false, explanation: "Without حرف جر يأتي بعده اسم أو صيغة V-ing." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 9
  },
  {
    id: "64",
    text: "As soon as I arrive, I will let you know.",
    translation: "سأخبرك حالما أصل.",
    hint: {
      sentenceWithBlank: "[____] I arrive, I will let you know.",
      options: [
        { text: "As soon as", isCorrect: true, explanation: "As soon as أداة زمان يأتي بعدها المضارع البسيط وإن دلّ على المستقبل." },
        { text: "Until", isCorrect: false, explanation: "Until تعني: إلى أن، فيتغير معنى الجملة." },
        { text: "While", isCorrect: false, explanation: "While تُستعمل للأفعال المستمرة المتزامنة." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "65",
    text: "If I won the lottery, I would buy a house by the sea.",
    translation: "لو فزت باليانصيب لاشتريت بيتًا على شاطئ البحر.",
    hint: {
      sentenceWithBlank: "If I [____] the lottery, I [____] a house by the sea.",
      options: [
        { text: "won / would buy", isCorrect: true, explanation: "الشرط من النوع الثاني: الشرط بالماضي البسيط (won) والجواب بـ would + المصدر." },
        { text: "win / would buy", isCorrect: false, explanation: "صيغة المضارع win لا تتفق مع would في جواب الشرط." },
        { text: "won / will buy", isCorrect: false, explanation: "إذا جاء الشرط بالماضي البسيط فالجواب بـ would لا will." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 13
  },
  {
    id: "66",
    text: "What would you do if you were in my shoes?",
    translation: "ماذا كنت ستفعل لو كنت مكاني؟",
    hint: {
      sentenceWithBlank: "What [____] if you [____] in my shoes?",
      options: [
        { text: "would you do / were", isCorrect: true, explanation: "الشرط من النوع الثاني: would + المصدر في السؤال، وwere مع جميع الضمائر في جملة الشرط." },
        { text: "will you do / are", isCorrect: false, explanation: "هذا النوع الأول، بينما عبارة in my shoes تدل على موقف افتراضي." },
        { text: "do you do / was", isCorrect: false, explanation: "تركيب غير سليم للشرط من النوع الثاني." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "67",
    text: "If I had more free time, I would take up photography.",
    translation: "لو كان لديّ وقت فراغ أكثر لاحترفت التصوير الفوتوغرافي.",
    hint: {
      sentenceWithBlank: "If I [____] more free time, I [____] take up photography.",
      options: [
        { text: "had / would", isCorrect: true, explanation: "الشرط من النوع الثاني: شرط غير واقعي في الحاضر (had) ونتيجته (would)." },
        { text: "have / will", isCorrect: false, explanation: "يفيد شرطًا واقعيًا، بينما الموقف هنا افتراضي." },
        { text: "had had / would have", isCorrect: false, explanation: "هذا هو النوع الثالث المتعلق بالماضي." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "68",
    text: "If we had left earlier, we wouldn't have missed the flight.",
    translation: "لو خرجنا مبكرًا لما فاتتنا الرحلة.",
    hint: {
      sentenceWithBlank: "If we [____] earlier, we [____] the flight.",
      options: [
        { text: "had left / wouldn't have missed", isCorrect: true, explanation: "الشرط من النوع الثالث: شرط غير واقعي في الماضي (الماضي التام) ونتيجة في الماضي (would have + V3)." },
        { text: "left / wouldn't miss", isCorrect: false, explanation: "هذا النوع الثاني المتعلق بالحاضر، لا بحدث مضى وانتهى." },
        { text: "had left / wouldn't miss", isCorrect: false, explanation: "تركيب مختلط لا يناسب هنا لأن الفعلين كليهما في الماضي." }
      ]
    },
    tense: "Conditionals",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "69",
    text: "I wouldn't have known about the project if you hadn't told me.",
    translation: "ما كنت لأعلم بأمر المشروع لولا أنك أخبرتني.",
    hint: {
      sentenceWithBlank: "I wouldn't [____] about the project if you hadn't told me.",
      options: [
        { text: "have known", isCorrect: true, explanation: "في الشرط من النوع الثالث تُبنى الجملة الرئيسية بـ would have + V3 للحديث عن الماضي." },
        { text: "know", isCorrect: false, explanation: "wouldn't know تخص افتراضًا في الحاضر." },
        { text: "knew", isCorrect: false, explanation: "بعد would have يأتي التصريف الثالث (known) لا الثاني." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "70",
    text: "If I had studied harder at university, I would have a better job now.",
    translation: "لو اجتهدت أكثر في الجامعة لكان لديّ عمل أفضل الآن.",
    hint: {
      sentenceWithBlank: "If I [____] harder at university, I [____] a better job now.",
      options: [
        { text: "had studied / would have", isCorrect: true, explanation: "شرط مختلط: الشرط في الماضي (الماضي التام) والنتيجة في الحاضر (would + المصدر)." },
        { text: "studied / would have", isCorrect: false, explanation: "الدراسة الجامعية انقضت، فيلزم الماضي التام." },
        { text: "had studied / would have had", isCorrect: false, explanation: "النتيجة متعلقة بالحاضر (now)، لذا تُستعمل would have لا would have had." }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 14
  },
  {
    id: "71",
    text: "If he spoke French, he would have translated that document yesterday.",
    translation: "لو كان يتقن الفرنسية لترجم ذلك المستند أمس.",
    hint: {
      sentenceWithBlank: "If he [____] French, he [____] that document yesterday.",
      options: [
        { text: "spoke / would have translated", isCorrect: true, explanation: "شرط مختلط: الشرط حالة دائمة (الماضي البسيط) والنتيجة وقعت في الماضي (would have + V3)." },
        { text: "had spoken / would translate", isCorrect: false, explanation: "إتقان اللغة صفة ثابتة، أما الترجمة فكانت أمس." },
        { text: "spoke / would translate", isCorrect: false, explanation: "الترجمة مرتبطة بالأمس (yesterday)، فيلزم would have + V3." }
      ]
    },
    tense: "Conditionals",
    topic: "Workplace",
    lengthWords: 11
  },
  {
    id: "72",
    text: "I wish I had more money.",
    translation: "ليت لديّ مالًا أكثر.",
    hint: {
      sentenceWithBlank: "I [____] I [____] more money.",
      options: [
        { text: "wish / had", isCorrect: true, explanation: "التركيب I wish + الماضي البسيط يعبّر عن التمني أو الأسف بشأن الحاضر." },
        { text: "wish / have", isCorrect: false, explanation: "بعد I wish يأتي الماضي البسيط عند الحديث عن الحاضر." },
        { text: "hope / had", isCorrect: false, explanation: "بعد hope يأتي زمن واقعي في الحاضر أو المستقبل." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "73",
    text: "I wish you wouldn't make so much noise.",
    translation: "ليتك تكفّ عن إحداث كل هذه الضوضاء.",
    hint: {
      sentenceWithBlank: "I wish you [____] make so much noise.",
      options: [
        { text: "wouldn't", isCorrect: true, explanation: "التركيب I wish + would/wouldn't يعبّر عن التبرّم من سلوك شخص في الحاضر." },
        { text: "don't", isCorrect: false, explanation: "لا يأتي المضارع البسيط بعد I wish." },
        { text: "didn't", isCorrect: false, explanation: "ممكنة، لكن wouldn't أوضح في إظهار الانزعاج من تصرف الآخر." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "74",
    text: "If only I hadn't said that to her yesterday.",
    translation: "ليتني لم أقل لها ذلك أمس.",
    hint: {
      sentenceWithBlank: "If [____] I [____] said that to her yesterday.",
      options: [
        { text: "only / hadn't", isCorrect: true, explanation: "التركيب If only + الماضي التام يعبّر عن ندم شديد على الماضي." },
        { text: "only / didn't", isCorrect: false, explanation: "الفعل وقع أمس، فيلزم الماضي التام لا الماضي البسيط." },
        { text: "just / haven't", isCorrect: false, explanation: "لا يُقال If just، كما أن haven't مضارع تام لا يناسب الحديث عن أمس." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "75",
    text: "It's time we went home.",
    translation: "آن الأوان لنعود إلى البيت.",
    hint: {
      sentenceWithBlank: "It's time we [____] home.",
      options: [
        { text: "went", isCorrect: true, explanation: "بعد التركيب It's time متبوعًا بفاعل يأتي الفعل في الماضي البسيط." },
        { text: "go", isCorrect: false, explanation: "لا يأتي المصدر المجرد في تركيب It's time + فاعل." },
        { text: "are going", isCorrect: false, explanation: "لا يُستعمل المضارع المستمر في هذا التركيب." }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 5
  },
    {
    "id": "76",
    "text": "This house was built in 1920.",
    "translation": "بُني هذا البيت عام 1920.",
    "hint": {
      "sentenceWithBlank": "This house [____] in 1920.",
      "options": [
        { "text": "was built", "isCorrect": true, "explanation": "المبني للمجهول في الماضي البسيط يُستعمل لفعل وقع على الشيء في الماضي." },
        { "text": "built", "isCorrect": false, "explanation": "البيت لم يبنِ نفسه، فيلزم المبني للمجهول." },
        { "text": "is built", "isCorrect": false, "explanation": "الحدث وقع في الماضي (عام 1920)، فيلزم زمن ماضٍ." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "77",
    "text": "The interface is being redesigned at the moment.",
    "translation": "تجري الآن إعادة تصميم الواجهة.",
    "hint": {
      "sentenceWithBlank": "The interface [____] at the moment.",
      "options": [
        { "text": "is being redesigned", "isCorrect": true, "explanation": "المبني للمجهول في المضارع المستمر لفعل يجري في هذه اللحظة (at the moment)." },
        { "text": "is redesigned", "isCorrect": false, "explanation": "المبني للمجهول في المضارع البسيط يفيد التكرار المعتاد لا ما يجري الآن." },
        { "text": "has been redesigned", "isCorrect": false, "explanation": "مبني للمجهول في المضارع التام، ويفيد أن العمل قد اكتمل." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 8
  },
  {
    "id": "78",
    "text": "The new software has just been installed.",
    "translation": "جرى تثبيت البرنامج الجديد للتوّ.",
    "hint": {
      "sentenceWithBlank": "The new software [____].",
      "options": [
        { "text": "has just been installed", "isCorrect": true, "explanation": "المبني للمجهول في المضارع التام لفعل انتهى قبل قليل (مع just)." },
        { "text": "has just installed", "isCorrect": false, "explanation": "البرنامج لا يثبّت نفسه، فيلزم المبني للمجهول." },
        { "text": "was just installed", "isCorrect": false, "explanation": "مع الظرف just يُستعمل المضارع التام عادةً لا الماضي البسيط." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 7
  },
  {
    "id": "79",
    "text": "English is spoken all over the world.",
    "translation": "يُتحدَّث بالإنجليزية في أنحاء العالم كافة.",
    "hint": {
      "sentenceWithBlank": "English [____] all over the world.",
      "options": [
        { "text": "is spoken", "isCorrect": true, "explanation": "المبني للمجهول في المضارع البسيط يُستعمل للحقائق العامة." },
        { "text": "is speaking", "isCorrect": false, "explanation": "اللغة لا تتكلم بنفسها، فيلزم المبني للمجهول." },
        { "text": "spoke", "isCorrect": false, "explanation": "صيغة مبنية للمعلوم في الماضي." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "80",
    "text": "The letters will be sent tomorrow morning.",
    "translation": "ستُرسَل الرسائل صباح الغد.",
    "hint": {
      "sentenceWithBlank": "The letters [____] tomorrow morning.",
      "options": [
        { "text": "will be sent", "isCorrect": true, "explanation": "المبني للمجهول في المستقبل البسيط لفعل سيقع على الشيء لاحقًا." },
        { "text": "will send", "isCorrect": false, "explanation": "الرسائل لا ترسل نفسها، فيلزم المبني للمجهول." },
        { "text": "are sent", "isCorrect": false, "explanation": "مبني للمجهول في المضارع البسيط، والحدث سيقع غدًا." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "81",
    "text": "I need to get my hair cut this week.",
    "translation": "عليّ أن أقصّ شعري عند الحلّاق هذا الأسبوع.",
    "hint": {
      "sentenceWithBlank": "I need to [____] this week.",
      "options": [
        { "text": "get my hair cut", "isCorrect": true, "explanation": "التركيب get/have something done يعني أن شخصًا آخر يؤدي العمل نيابة عنك." },
        { "text": "cut my hair", "isCorrect": false, "explanation": "يعني أنك ستقص شعرك بنفسك." },
        { "text": "get cutting my hair", "isCorrect": false, "explanation": "تركيب غير صحيح نحويًا." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 9
  },
  {
    "id": "82",
    "text": "He had his laptop stolen while he was traveling.",
    "translation": "سُرق حاسوبه المحمول أثناء سفره.",
    "hint": {
      "sentenceWithBlank": "He [____] while he was traveling.",
      "options": [
        { "text": "had his laptop stolen", "isCorrect": true, "explanation": "التركيب have something done يُستعمل أيضًا للتجارب السيئة التي يقع فيها الفعل على الشخص (سرق أحدهم حاسوبه)." },
        { "text": "stole his laptop", "isCorrect": false, "explanation": "يعني أنه سرق حاسوبه بنفسه." },
        { "text": "had stolen his laptop", "isCorrect": false, "explanation": "مبني للمعلوم في الماضي التام: أي أنه كان قد سرق حاسوبه." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "83",
    "text": "She was made to clean the whole room by her mother.",
    "translation": "أجبرتها أمها على تنظيف الغرفة كلها.",
    "hint": {
      "sentenceWithBlank": "She [____] to clean the whole room by her mother.",
      "options": [
        { "text": "was made", "isCorrect": true, "explanation": "الفعل make بمعنى الإجبار يستلزم في المبني للمجهول أداة to قبل الفعل التالي." },
        { "text": "made", "isCorrect": false, "explanation": "المبني للمعلوم يقلب المعنى إلى: هي التي أجبرت غيرها." },
        { "text": "has made", "isCorrect": false, "explanation": "مبني للمعلوم أيضًا، لكن في المضارع التام." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 11
  },
  {
    "id": "84",
    "text": "He is said to be the richest man in the city.",
    "translation": "يُقال إنه أغنى رجل في المدينة.",
    "hint": {
      "sentenceWithBlank": "He [____] to be the richest man in the city.",
      "options": [
        { "text": "is said", "isCorrect": true, "explanation": "التركيب المبني للمجهول is said to يقابل قولنا: يُقال إنه." },
        { "text": "says", "isCorrect": false, "explanation": "يصير المعنى: هو يقول إنه الأغنى." },
        { "text": "said", "isCorrect": false, "explanation": "صيغة ماضية بمعنى: هو قال، وهي تخلّ ببناء الجملة." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "85",
    "text": "It is expected that the prices will drop soon.",
    "translation": "من المتوقع أن تنخفض الأسعار قريبًا.",
    "hint": {
      "sentenceWithBlank": "[____] that the prices will drop soon.",
      "options": [
        { "text": "It is expected", "isCorrect": true, "explanation": "تركيب مبني للمجهول غير شخصي يُستعمل للتعبير عن رأي عام أو توقع سائد." },
        { "text": "It expects", "isCorrect": false, "explanation": "الضمير It لا يتوقع شيئًا بنفسه، فيلزم المبني للمجهول." },
        { "text": "They is expected", "isCorrect": false, "explanation": "خطأ نحوي: مع They تأتي are، والمطلوب هنا الضمير غير الشخصي It." }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "86",
    "text": "He said that he was working on a new project.",
    "translation": "قال إنه يعمل على مشروع جديد.",
    "hint": {
      "sentenceWithBlank": "He said that he [____] on a new project.",
      "options": [
        { "text": "was working", "isCorrect": true, "explanation": "بحكم تطابق الأزمنة يتحول المضارع المستمر في الكلام المباشر إلى ماضٍ مستمر في الكلام المنقول." },
        { "text": "is working", "isCorrect": false, "explanation": "الجملة الرئيسية في الماضي (said)، فيلزم أن تتبعها الجملة التابعة في الزمن." },
        { "text": "works", "isCorrect": false, "explanation": "يفيد فعلًا معتادًا ويخالف قاعدة تطابق الأزمنة." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 10
  },
  {
    "id": "87",
    "text": "She told me she had already seen that movie.",
    "translation": "أخبرتني أنها شاهدت ذلك الفيلم من قبل.",
    "hint": {
      "sentenceWithBlank": "She [____] me she had already seen that movie.",
      "options": [
        { "text": "told", "isCorrect": true, "explanation": "الفعل tell يستلزم ذكر المخاطَب مفعولًا به مباشرًا (me)." },
        { "text": "said", "isCorrect": false, "explanation": "بعد said يلزم حرف الجر to عند ذكر المخاطَب: said to me." },
        { "text": "spoke", "isCorrect": false, "explanation": "speak تعني التحدث بلغة أو مع أحد، ولا تصلح لتصدير الكلام المنقول." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Entertainment",
    "lengthWords": 9
  },
  {
    "id": "88",
    "text": "They said they would help us the following week.",
    "translation": "قالوا إنهم سيساعدوننا في الأسبوع التالي.",
    "hint": {
      "sentenceWithBlank": "They said they [____] help us the following week.",
      "options": [
        { "text": "would", "isCorrect": true, "explanation": "في تطابق الأزمنة تتحول will الدالة على المستقبل إلى would." },
        { "text": "will", "isCorrect": false, "explanation": "مخالفة لقاعدة تطابق الأزمنة لأن الجملة الرئيسية في الماضي." },
        { "text": "should", "isCorrect": false, "explanation": "يتغير المعنى إلى: ينبغي أن يساعدوا، لا إلى مجرد حدث مستقبلي." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "89",
    "text": "He asked me where I lived.",
    "translation": "سألني أين أسكن.",
    "hint": {
      "sentenceWithBlank": "He asked me where [____].",
      "options": [
        { "text": "I lived", "isCorrect": true, "explanation": "في السؤال المنقول يبقى ترتيب الجملة خبريًا مع مراعاة تطابق الأزمنة." },
        { "text": "did I live", "isCorrect": false, "explanation": "لا حاجة إلى الفعل المساعد لأن السؤال منقول لا مباشر." },
        { "text": "I live", "isCorrect": false, "explanation": "إخلال بتطابق الأزمنة، فالجملة الرئيسية في الماضي (asked)." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "90",
    "text": "She asked if I could help her with the task.",
    "translation": "سألتني إن كان بوسعي مساعدتها في المهمة.",
    "hint": {
      "sentenceWithBlank": "She asked [____] I could help her with the task.",
      "options": [
        { "text": "if", "isCorrect": true, "explanation": "الأسئلة الخالية من أداة استفهام تُنقل بـ if أو whether." },
        { "text": "that", "isCorrect": false, "explanation": "أداة that تُستعمل لنقل الجمل الخبرية لا الأسئلة." },
        { "text": "can", "isCorrect": false, "explanation": "لا تستقيم مع بناء الجملة هنا." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "91",
    "text": "The manager advised me to review the guidelines.",
    "translation": "نصحني المدير بمراجعة الإرشادات.",
    "hint": {
      "sentenceWithBlank": "The manager advised me [____] the guidelines.",
      "options": [
        { "text": "to review", "isCorrect": true, "explanation": "بعد أفعال مثل advise وask وtell يأتي المصدر مسبوقًا بـ to." },
        { "text": "reviewing", "isCorrect": false, "explanation": "لا تأتي صيغة V-ing بعد advise متبوعًا بمفعول به." },
        { "text": "review", "isCorrect": false, "explanation": "ينقص حرف to اللازم لصياغة المصدر." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "92",
    "text": "He denied making that mistake.",
    "translation": "أنكر أنه ارتكب ذلك الخطأ.",
    "hint": {
      "sentenceWithBlank": "He denied [____] that mistake.",
      "options": [
        { "text": "making", "isCorrect": true, "explanation": "يأتي بعد الفعل deny اسم الفعل (V-ing) دائمًا." },
        { "text": "to make", "isCorrect": false, "explanation": "لا يأتي المصدر بـ to بعد deny." },
        { "text": "make", "isCorrect": false, "explanation": "صيغة غير صحيحة نحويًا في هذا الموضع." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 5
  },
  {
    "id": "93",
    "text": "She promised not to tell anyone his secret.",
    "translation": "وعدت بألّا تفشي سرّه لأحد.",
    "hint": {
      "sentenceWithBlank": "She promised [____] anyone his secret.",
      "options": [
        { "text": "not to tell", "isCorrect": true, "explanation": "ينفى المصدر بوضع not قبل to." },
        { "text": "to not tell", "isCorrect": false, "explanation": "ترتيب لا تستحسنه القواعد المعيارية." },
        { "text": "don't tell", "isCorrect": false, "explanation": "المطلوب هنا مصدر لا صيغة أمر." }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 8
  },
  {
    "id": "94",
    "text": "Although it was raining, we went for a walk.",
    "translation": "خرجنا للتنزّه رغم أن المطر كان يهطل.",
    "hint": {
      "sentenceWithBlank": "[____] it was raining, we went for a walk.",
      "options": [
        { "text": "Although", "isCorrect": true, "explanation": "أداة although يأتي بعدها جملة كاملة فيها فاعل وفعل." },
        { "text": "Despite", "isCorrect": false, "explanation": "بعد despite يأتي اسم أو صيغة V-ing لا جملة كاملة (it was raining)." },
        { "text": "However", "isCorrect": false, "explanation": "تُستعمل عادةً أداة ربط بين جملتين وتُفصل بفاصلة." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "95",
    "text": "Despite the heavy traffic, we arrived on time.",
    "translation": "وصلنا في الموعد رغم شدة الازدحام المروري.",
    "hint": {
      "sentenceWithBlank": "[____] the heavy traffic, we arrived on time.",
      "options": [
        { "text": "Despite", "isCorrect": true, "explanation": "Despite بمعنى رغم يأتي بعدها اسم أو صيغة V-ing." },
        { "text": "Although", "isCorrect": false, "explanation": "بعد although يلزم مجيء جملة كاملة فيها فاعل وفعل." },
        { "text": "In spite", "isCorrect": false, "explanation": "تحتاج إلى حرف الجر of لتصير In spite of." }
      ]
    },
    "tense": "Conjunctions",
    "topic": "Travel",
    "lengthWords": 8
  },
  {
    "id": "96",
    "text": "Seldom have I seen such a beautiful piece of art.",
    "translation": "قلّما رأيت عملًا فنيًّا بهذا الجمال.",
    "hint": {
      "sentenceWithBlank": "[____] such a beautiful piece of art.",
      "options": [
        { "text": "Seldom have I seen", "isCorrect": true, "explanation": "إذا تصدّر الجملةَ ظرفٌ نافٍ أو مقيِّد مثل seldom وجب قلب ترتيب الفاعل والفعل المساعد." },
        { "text": "Seldom I have seen", "isCorrect": false, "explanation": "بعد seldom في أول الجملة يلزم الترتيب المقلوب كترتيب السؤال." },
        { "text": "Have I seldom seen", "isCorrect": false, "explanation": "يجب أن يتصدّر الظرف seldom الجملة." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "97",
    "text": "No sooner had I closed the door than the phone rang.",
    "translation": "ما إن أغلقت الباب حتى رنّ الهاتف.",
    "hint": {
      "sentenceWithBlank": "[____] closed the door than the phone rang.",
      "options": [
        { "text": "No sooner had I", "isCorrect": true, "explanation": "التركيب No sooner + قلب (had I) ... than يفيد معنى: ما إن فعلت حتى." },
        { "text": "No sooner I had", "isCorrect": false, "explanation": "بعد No sooner يجب قلب موضع الفعل المساعد والفاعل." },
        { "text": "As soon as I had", "isCorrect": false, "explanation": "لا تُستعمل than في الشطر الثاني مع التركيب As soon as." }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "98",
    "text": "I look forward to hearing from you soon.",
    "translation": "أتطلع إلى تلقّي ردّكم قريبًا.",
    "hint": {
      "sentenceWithBlank": "I look forward [____] from you soon.",
      "options": [
        { "text": "to hearing", "isCorrect": true, "explanation": "في تعبير look forward to تكون to حرف جر، فيأتي بعدها اسم الفعل (V-ing)." },
        { "text": "to hear", "isCorrect": false, "explanation": "to هنا ليست أداة مصدر بل حرف جر، فيلزم بعدها صيغة V-ing." },
        { "text": "hearing", "isCorrect": false, "explanation": "ينقص حرف الجر to وهو ركن أساسي في التعبير." }
      ]
    },
    "tense": "Gerund",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "99",
    "text": "It's no use crying over spilled milk.",
    "translation": "لا ينفع الندم بعد فوات الأوان. / لا جدوى من البكاء على اللبن المسكوب.",
    "hint": {
      "sentenceWithBlank": "It's no use [____] over spilled milk.",
      "options": [
        { "text": "crying", "isCorrect": true, "explanation": "بعد تعبير it's no use بمعنى لا جدوى يأتي اسم الفعل (V-ing) دائمًا." },
        { "text": "to cry", "isCorrect": false, "explanation": "لا يُستعمل المصدر بـ to في هذا التعبير الاصطلاحي." },
        { "text": "cry", "isCorrect": false, "explanation": "صيغة غير صحيحة هنا، والمطلوب صيغة V-ing." }
      ]
    },
    "tense": "Gerund",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "100",
    "text": "Not only did he design the layout, but he also wrote the code.",
    "translation": "لم يصمّم المخطط فحسب، بل كتب الشيفرة البرمجية أيضًا.",
    "hint": {
      "sentenceWithBlank": "Not only [____] the layout, but he also wrote the code.",
      "options": [
        { "text": "did he design", "isCorrect": true, "explanation": "إذا بدأت الجملة بـ Not only وجب قلب الترتيب ليصير كترتيب السؤال." },
        { "text": "he designed", "isCorrect": false, "explanation": "غاب القلب الواجب بعد Not only في أول الجملة." },
        { "text": "designed he", "isCorrect": false, "explanation": "يتم القلب بالفعل المساعد did لا بالفعل الأساسي." }
      ]
    },
    "tense": "Inversion",
    "topic": "IT",
    "lengthWords": 13
  }
  ]
}