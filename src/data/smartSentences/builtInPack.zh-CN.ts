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
    "targetLang": "zh-CN"
  },
  "sentences": [
    {
    id: "1",
    text: "This is my book, and that one is yours.",
    translation: "这是我的书，那本是你的。",
    hint: {
      sentenceWithBlank: "This is my book, and that one is [____].",
      options: [
        { text: "yours", isCorrect: true, explanation: "物主代词的绝对形式（名词性物主代词），后面不需要再接名词。" },
        { text: "your", isCorrect: false, explanation: "形容词性物主代词，后面必须跟名词（your book）。" },
        { text: "you", isCorrect: false, explanation: "这是人称代词，不表示所属关系。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "2",
    text: "He gave her his car because hers was broken.",
    translation: "他把自己的车借给了她，因为她的车坏了。",
    hint: {
      sentenceWithBlank: "He gave her his car because [____] was broken.",
      options: [
        { text: "hers", isCorrect: true, explanation: "名词性物主代词，相当于 'her car'，后面不再加名词。" },
        { text: "her", isCorrect: false, explanation: "形容词性物主代词，后面必须跟名词（her car）。" },
        { text: "she", isCorrect: false, explanation: "人称代词主格（她），不能表示所属关系。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "3",
    text: "We did it ourselves without any help.",
    translation: "我们没靠任何人帮忙，自己把这件事做完了。",
    hint: {
      sentenceWithBlank: "We [____] [____] ourselves without any help.",
      options: [
        { text: "did it", isCorrect: true, explanation: "'do' 的过去式加上代词 'it'，符合句子讲述过去的语境。" },
        { text: "do it", isCorrect: false, explanation: "这是现在时形式，而句子说的是已经发生的事。" },
        { text: "made it", isCorrect: false, explanation: "make 侧重'制造、做出成品'，而 do 表示'完成某项动作'。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "4",
    text: "Is there anybody in the office?",
    translation: "办公室里有人吗？",
    hint: {
      sentenceWithBlank: "[____] there anybody in the office?",
      options: [
        { text: "Is", isCorrect: true, explanation: "anybody 视为单数，there is/are 句型中要用单数的 is。" },
        { text: "Are", isCorrect: false, explanation: "只用于复数主语。" },
        { text: "Does", isCorrect: false, explanation: "there is/are 句型中不用助动词 do/does。" }
      ]
    },
    tense: "Present Simple",
    topic: "Workplace",
    lengthWords: 6
  },
  {
    id: "5",
    text: "Nobody told me about the changes.",
    translation: "没有人告诉我这些变化。",
    hint: {
      sentenceWithBlank: "Nobody [____] me about the changes.",
      options: [
        { text: "told", isCorrect: true, explanation: "一般过去时的肯定形式；否定意义已经包含在 'Nobody' 里了。" },
        { text: "didn't tell", isCorrect: false, explanation: "英语中不能双重否定（Nobody 后面不能再用 didn't）。" },
        { text: "said", isCorrect: false, explanation: "say 后面不能直接跟人（me），要说 said to me。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "6",
    text: "This is the building whose roof was damaged.",
    translation: "这就是那栋屋顶被损坏的建筑。",
    hint: {
      sentenceWithBlank: "This is the building [____] roof was damaged.",
      options: [
        { text: "whose", isCorrect: true, explanation: "关系代词 whose 表示所属关系（谁的）。" },
        { text: "who", isCorrect: false, explanation: "who 表示'谁'，不能表示'谁的'。" },
        { text: "which", isCorrect: false, explanation: "which（哪一个）不能表示所属关系。" }
      ]
    },
    tense: "Passive Voice",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "7",
    text: "Give it to him, not to them.",
    translation: "把它给他，别给他们。",
    hint: {
      sentenceWithBlank: "Give it to him, not to [____].",
      options: [
        { text: "them", isCorrect: true, explanation: "they 的宾格形式，用在动词或介词后面。" },
        { text: "their", isCorrect: false, explanation: "形容词性物主代词（他们的），后面必须跟名词。" },
        { text: "they", isCorrect: false, explanation: "主格形式（他们），只能作主语。" }
      ]
    },
    tense: "Imperative",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "8",
    text: "Both of them are busy right now.",
    translation: "他们两个现在都很忙。",
    hint: {
      sentenceWithBlank: "[____] of them are busy right now.",
      options: [
        { text: "Both", isCorrect: true, explanation: "both 表示'两者都'。" },
        { text: "All", isCorrect: false, explanation: "all（全部）用于三个或三个以上的人或物。" },
        { text: "Either", isCorrect: false, explanation: "either 指'两者中的任何一个'，谓语要用单数。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "9",
    text: "Neither of the options is perfect.",
    translation: "这两个方案都不完美。",
    hint: {
      sentenceWithBlank: "[____] of the options is perfect.",
      options: [
        { text: "Neither", isCorrect: true, explanation: "neither 表示'两者中没有一个'。" },
        { text: "None", isCorrect: false, explanation: "none 用于三个或三个以上的事物。" },
        { text: "Both", isCorrect: false, explanation: "both 表示'两者都'，谓语要用复数 are。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "10",
    text: "Each component has its own function.",
    translation: "每个部件都有各自的功能。",
    hint: {
      sentenceWithBlank: "Each component [____] its own function.",
      options: [
        { text: "has", isCorrect: true, explanation: "each（每一个）作主语时，谓语动词用单数。" },
        { text: "have", isCorrect: false, explanation: "这是复数形式，与 each 不搭配。" },
        { text: "having", isCorrect: false, explanation: "动名词或分词形式，这里需要的是谓语动词。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "11",
    text: "She usually goes to work by bus, but today she is driving.",
    translation: "她平时坐公交车上班，但今天是自己开车。",
    hint: {
      sentenceWithBlank: "She usually goes to work by bus, but today she [____] [____].",
      options: [
        { text: "is driving", isCorrect: true, explanation: "现在进行时表示今天这个阶段的临时性动作。" },
        { text: "drives", isCorrect: false, explanation: "一般现在时用于 usually 这类经常性的动作。" },
        { text: "driving", isCorrect: false, explanation: "缺少助动词 is。" }
      ]
    },
    tense: "Present Continuous",
    topic: "Daily Life",
    lengthWords: 12
  },
  {
    id: "12",
    text: "Water boils at 100 degrees Celsius.",
    translation: "水在摄氏100度时沸腾。",
    hint: {
      sentenceWithBlank: "Water [____] at 100 degrees Celsius.",
      options: [
        { text: "boils", isCorrect: true, explanation: "一般现在时用来陈述客观规律和科学事实。" },
        { text: "is boiling", isCorrect: false, explanation: "现在进行时表示此刻正在发生，而不是普遍事实。" },
        { text: "boiled", isCorrect: false, explanation: "一般过去时用于过去发生的动作。" }
      ]
    },
    tense: "Present Simple",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "13",
    text: "Does he know where the keys are?",
    translation: "他知道钥匙在哪儿吗？",
    hint: {
      sentenceWithBlank: "[____] he know where the keys are?",
      options: [
        { text: "Does", isCorrect: true, explanation: "主语是 he，一般现在时的疑问句用助动词 does。" },
        { text: "Do", isCorrect: false, explanation: "只与 I、you、we、they 连用。" },
        { text: "Is", isCorrect: false, explanation: "句中已有实义动词 know，不能再用 be 动词作助动词。" }
      ]
    },
    tense: "Present Simple",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "14",
    text: "Why didn't you call me yesterday?",
    translation: "你昨天为什么没给我打电话？",
    hint: {
      sentenceWithBlank: "Why [____] you call me yesterday?",
      options: [
        { text: "didn't", isCorrect: true, explanation: "一般过去时的否定疑问句要用助动词 didn't。" },
        { text: "don't", isCorrect: false, explanation: "这是一般现在时，而句中有时间标志 yesterday。" },
        { text: "weren't", isCorrect: false, explanation: "简单时态里 be 动词不能与实义动词 call 连用。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "15",
    text: "I saw a great movie last weekend.",
    translation: "我上周末看了一部很棒的电影。",
    hint: {
      sentenceWithBlank: "I [____] a great movie last weekend.",
      options: [
        { text: "saw", isCorrect: true, explanation: "see 的过去式，用于 last weekend 这类已完成的过去动作。" },
        { text: "see", isCorrect: false, explanation: "现在时形式，与 last weekend 不符。" },
        { text: "have seen", isCorrect: false, explanation: "现在完成时不能与明确的过去时间状语连用。" }
      ]
    },
    tense: "Past Simple",
    topic: "Entertainment",
    lengthWords: 7
  },
  {
    id: "16",
    text: "They didn't arrive on time because of the traffic.",
    translation: "由于堵车，他们没能准时到。",
    hint: {
      sentenceWithBlank: "They didn't arrive on time [____] of the traffic.",
      options: [
        { text: "because", isCorrect: true, explanation: "because of（因为）后面接名词性成分（the traffic）。" },
        { text: "why", isCorrect: false, explanation: "why 意思是'为什么'，不能引出原因。" },
        { text: "as", isCorrect: false, explanation: "as（因为）后面必须跟完整的句子，有主语和谓语。" }
      ]
    },
    tense: "Past Simple",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "17",
    text: "What will you do if they reject the plan?",
    translation: "如果他们否决这个方案，你打算怎么办？",
    hint: {
      sentenceWithBlank: "What [____] you do if they reject the plan?",
      options: [
        { text: "will", isCorrect: true, explanation: "第一类条件句（First Conditional）中，主句用一般将来时。" },
        { text: "would", isCorrect: false, explanation: "would 用于第二类条件句，表示与现实相反的假设。" },
        { text: "do", isCorrect: false, explanation: "那样就变成'你（平常）做什么'的一般现在时疑问句了。" }
      ]
    },
    tense: "Future Simple",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "18",
    text: "I think it will be a sunny day.",
    translation: "我觉得会是个晴天。",
    hint: {
      sentenceWithBlank: "I think it [____] [____] a sunny day.",
      options: [
        { text: "will be", isCorrect: true, explanation: "一般将来时用于预测和表达个人看法（I think）。" },
        { text: "is being", isCorrect: false, explanation: "表示某人此刻的临时表现，与句意不符。" },
        { text: "will", isCorrect: false, explanation: "缺少实义动词 be。" }
      ]
    },
    tense: "Future Simple",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "19",
    text: "Are you going to update the layout this evening?",
    translation: "你今晚打算更新一下版式吗？",
    hint: {
      sentenceWithBlank: "Are you [____] [____] update the layout this evening?",
      options: [
        { text: "going to", isCorrect: true, explanation: "be going to 结构表示计划和打算。" },
        { text: "will to", isCorrect: false, explanation: "will 后面直接跟动词原形，不加 to。" },
        { text: "want to", isCorrect: false, explanation: "那样意思就变成'你想…'，而不是'你打算…'。" }
      ]
    },
    tense: "Future (going to)",
    topic: "IT",
    lengthWords: 9
  },
  {
    id: "20",
    text: "The train leaves at 9 PM tonight.",
    translation: "火车今晚9点发车。",
    hint: {
      sentenceWithBlank: "The train [____] at 9 PM tonight.",
      options: [
        { text: "leaves", isCorrect: true, explanation: "交通时刻表即使指将来的事，也用一般现在时。" },
        { text: "will leave", isCorrect: false, explanation: "表述时刻表安排时习惯用一般现在时。" },
        { text: "is leaving", isCorrect: false, explanation: "现在进行时表将来用于个人安排，不用于时刻表。" }
      ]
    },
    tense: "Present Simple",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "21",
    text: "How often do you practice your English?",
    translation: "你多久练一次英语？",
    hint: {
      sentenceWithBlank: "How [____] do you practice your English?",
      options: [
        { text: "often", isCorrect: true, explanation: "How often（多久一次）用来询问动作的频率。" },
        { text: "many", isCorrect: false, explanation: "How many 表示'多少'，用于可数名词。" },
        { text: "much", isCorrect: false, explanation: "How much 表示'多少'，用于不可数名词。" }
      ]
    },
    tense: "Present Simple",
    topic: "Education",
    lengthWords: 7
  },
  {
    id: "22",
    text: "Who wrote this article?",
    translation: "这篇文章是谁写的？",
    hint: {
      sentenceWithBlank: "Who [____] this article?",
      options: [
        { text: "wrote", isCorrect: true, explanation: "对主语提问时不需要助动词 did，句子用陈述语序。" },
        { text: "did write", isCorrect: false, explanation: "对主语（Who）提问时不能用这种结构。" },
        { text: "written", isCorrect: false, explanation: "这是过去分词，必须与 have/has 连用。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 4
  },
  {
    id: "23",
    text: "Who did you invite to the presentation?",
    translation: "你邀请了谁来参加这次发布会？",
    hint: {
      sentenceWithBlank: "Who [____] you invite to the presentation?",
      options: [
        { text: "did", isCorrect: true, explanation: "对宾语提问（邀请了谁）时，一般过去时要用助动词 did。" },
        { text: "do", isCorrect: false, explanation: "现在时，意思变成'你平时邀请谁'。" },
        { text: "were", isCorrect: false, explanation: "简单时态中 be 动词不能与实义动词 invite 连用。" }
      ]
    },
    tense: "Past Simple",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "24",
    text: "There used to be a cinema here.",
    translation: "这里以前有一家电影院。",
    hint: {
      sentenceWithBlank: "There [____] to be a cinema here.",
      options: [
        { text: "used", isCorrect: true, explanation: "'used to' 结构表示过去存在、现在已不复存在的情况。" },
        { text: "use", isCorrect: false, explanation: "这里必须用过去式 used。" },
        { text: "was", isCorrect: false, explanation: "was 后面不能接不定式 'to be'。" }
      ]
    },
    tense: "Past Habit",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "25",
    text: "I am used to waking up early.",
    translation: "我已经习惯早起了。",
    hint: {
      sentenceWithBlank: "I am [____] [____] waking up early.",
      options: [
        { text: "used to", isCorrect: true, explanation: "'be used to + 动名词' 表示到现在已经养成的习惯。" },
        { text: "use to", isCorrect: false, explanation: "表示习惯时必须用 used 这个形式。" },
        { text: "used", isCorrect: false, explanation: "漏掉了这个结构中不可缺少的介词 to。" }
      ]
    },
    tense: "Present Habit",
    topic: "Daily Life",
    lengthWords: 7
  },
    {
    id: "26",
    text: "Look! It is snowing outside.",
    translation: "快看！外面下雪了。",
    hint: {
      sentenceWithBlank: "Look! It [____] outside.",
      options: [
        { text: "is snowing", isCorrect: true, explanation: "现在进行时表示此刻正在发生的动作（'Look!' 就是提示）。" },
        { text: "snows", isCorrect: false, explanation: "一般现在时表示经常性动作，而不是此刻正在发生的事。" },
        { text: "snowing", isCorrect: false, explanation: "缺少助动词 'is'。" }
      ]
    },
    tense: "Present Continuous",
    topic: "Nature",
    lengthWords: 5
  },
  {
    id: "27",
    text: "What were you doing when I called you?",
    translation: "我给你打电话的时候你在干什么？",
    hint: {
      sentenceWithBlank: "What [____] you [____] when I called you?",
      options: [
        { text: "were / doing", isCorrect: true, explanation: "过去进行时表示过去正在持续、被另一动作打断的行为（when I called）。" },
        { text: "did / do", isCorrect: false, explanation: "一般过去时用于依次完成的动作，不表示当时正在进行的过程。" },
        { text: "are / doing", isCorrect: false, explanation: "现在进行时说的是现在，而这里讲的是过去（'when I called'）。" }
      ]
    },
    tense: "Past Continuous",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "28",
    text: "While she was cooking, he was reading a book.",
    translation: "她做饭的时候，他在看书。",
    hint: {
      sentenceWithBlank: "While she [____], he was reading a book.",
      options: [
        { text: "was cooking", isCorrect: true, explanation: "过去进行时用于同时发生并持续的两个动作。" },
        { text: "cooked", isCorrect: false, explanation: "一般过去时表示已完成的动作，而 'while' 强调过程。" },
        { text: "is cooking", isCorrect: false, explanation: "句子后半部分是过去时（'was reading'），前半部分也要用过去时。" }
      ]
    },
    tense: "Past Continuous",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "29",
    text: "I have already finished the first task.",
    translation: "我已经完成第一项任务了。",
    hint: {
      sentenceWithBlank: "I [____] already [____] the first task.",
      options: [
        { text: "have / finished", isCorrect: true, explanation: "现在完成时表示已完成并对现在有影响的动作（标志词 'already'）。" },
        { text: "am / finishing", isCorrect: false, explanation: "现在进行时表示动作还在进行，而 'already' 说明已经做完了。" },
        { text: "had / finished", isCorrect: false, explanation: "过去完成时需要有另一个过去的动作作参照。" }
      ]
    },
    tense: "Present Perfect",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "30",
    text: "Have you ever been to London?",
    translation: "你去过伦敦吗？",
    hint: {
      sentenceWithBlank: "Have you [____] been to London?",
      options: [
        { text: "ever", isCorrect: true, explanation: "'ever'（曾经）常用于现在完成时的疑问句，询问人生经历。" },
        { text: "never", isCorrect: false, explanation: "'never' 表示'从未'，用于形式肯定、意义否定的句子。" },
        { text: "yet", isCorrect: false, explanation: "'yet' 一般放在句末。" }
      ]
    },
    tense: "Present Perfect",
    topic: "Travel",
    lengthWords: 6
  },
  {
    id: "31",
    text: "She has lived here since 2015.",
    translation: "她从2015年起就住在这里。",
    hint: {
      sentenceWithBlank: "She has lived here [____] 2015.",
      options: [
        { text: "since", isCorrect: true, explanation: "'since' 后面接动作开始的具体时间点。" },
        { text: "for", isCorrect: false, explanation: "'for' 后面接一段时间的长度（如 for 5 years）。" },
        { text: "from", isCorrect: false, explanation: "'from' 通常要和 'to' 或 'until' 搭配使用。" }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "32",
    text: "We haven't seen each other for ages.",
    translation: "我们好久没见面了。",
    hint: {
      sentenceWithBlank: "We [____] each other for ages.",
      options: [
        { text: "haven't seen", isCorrect: true, explanation: "现在完成时表示从过去到现在一直没有发生的动作（'for ages'）。" },
        { text: "didn't see", isCorrect: false, explanation: "一般过去时指已经结束的时间段，而这里的时间段延续到现在。" },
        { text: "don't see", isCorrect: false, explanation: "一般现在时描述经常性动作，不能表示'一直以来'的状态。" }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "33",
    text: "When I arrived, the meeting had already started.",
    translation: "我到的时候，会议已经开始了。",
    hint: {
      sentenceWithBlank: "When I arrived, the meeting [____] already [____].",
      options: [
        { text: "had / started", isCorrect: true, explanation: "过去完成时表示在过去某个动作（'When I arrived'）之前就已完成的事。" },
        { text: "has / started", isCorrect: false, explanation: "主要动作发生在过去（'arrived'），不能用现在完成时。" },
        { text: "was / starting", isCorrect: false, explanation: "那样意思是会议才刚要开始，而 'already' 说明它已经开始了。" }
      ]
    },
    tense: "Past Perfect",
    topic: "Workplace",
    lengthWords: 8
  },
  {
    id: "34",
    text: "He realized he had lost his wallet.",
    translation: "他发现自己把钱包弄丢了。",
    hint: {
      sentenceWithBlank: "He realized he [____] his wallet.",
      options: [
        { text: "had lost", isCorrect: true, explanation: "过去完成时表示先于过去另一动作（'realized'）发生的行为。" },
        { text: "loses", isCorrect: false, explanation: "一般现在时与主句的过去时不一致。" },
        { text: "has lost", isCorrect: false, explanation: "现在完成时强调与现在的联系，但'意识到'这件事发生在过去。" }
      ]
    },
    tense: "Past Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "35",
    text: "By next year, they will have completed the project.",
    translation: "到明年，他们就会完成这个项目。",
    hint: {
      sentenceWithBlank: "By next year, they [____] the project.",
      options: [
        { text: "will have completed", isCorrect: true, explanation: "将来完成时表示在将来某个时间点之前完成的动作（'By next year'）。" },
        { text: "will complete", isCorrect: false, explanation: "一般将来时只陈述将来的事实，而 'by' 要求用将来完成时。" },
        { text: "are completing", isCorrect: false, explanation: "现在进行时表示计划，无法表达'到某时已完成'的含义。" }
      ]
    },
    tense: "Future Perfect",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "36",
    text: "I will be flying to Paris this time tomorrow.",
    translation: "明天这个时候我将在飞往巴黎的途中。",
    hint: {
      sentenceWithBlank: "I [____] to Paris this time tomorrow.",
      options: [
        { text: "will be flying", isCorrect: true, explanation: "将来进行时描述将来某一具体时刻正在进行的动作（'this time tomorrow'）。" },
        { text: "will fly", isCorrect: false, explanation: "一般将来时只说明事实或临时决定，不强调当时正在进行。" },
        { text: "fly", isCorrect: false, explanation: "一般现在时可用于时刻表，但这里强调的是飞行这个过程。" }
      ]
    },
    tense: "Future Continuous",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "37",
    text: "This is the best coffee I have ever tasted.",
    translation: "这是我喝过的最好喝的咖啡。",
    hint: {
      sentenceWithBlank: "This is the best coffee I have [____] tasted.",
      options: [
        { text: "ever", isCorrect: true, explanation: "'ever' 用于描述人生经历，尤其常跟在最高级（'the best'）之后。" },
        { text: "never", isCorrect: false, explanation: "用 'never' 意思就变成'从没尝过'了。" },
        { text: "already", isCorrect: false, explanation: "'already' 表示'已经'，与'最好的一次'这个语境不符。" }
      ]
    },
    tense: "Present Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "38",
    text: "It's the first time I have driven an electric car.",
    translation: "这是我第一次开电动车。",
    hint: {
      sentenceWithBlank: "It's the first time I [____] an electric car.",
      options: [
        { text: "have driven", isCorrect: true, explanation: "'It's the first time...' 结构后面固定用现在完成时。" },
        { text: "drive", isCorrect: false, explanation: "一般现在时不能用来描述这种经历。" },
        { text: "drove", isCorrect: false, explanation: "一般过去时表示已结束的事件，而这里的经历与当下相关。" }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "39",
    text: "She was tired because she had worked all night.",
    translation: "她很累，因为她整晚都在工作。",
    hint: {
      sentenceWithBlank: "She was tired because she [____] all night.",
      options: [
        { text: "had worked", isCorrect: true, explanation: "过去完成时说明过去某种状态（'很累'）的原因。" },
        { text: "has worked", isCorrect: false, explanation: "现在完成时不合适，因为'累'这个结果发生在过去。" },
        { text: "worked", isCorrect: false, explanation: "用一般过去时也说得通，但过去完成时更能突出先后顺序和因果关系。" }
      ]
    },
    tense: "Past Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "40",
    text: "I had never seen such a beautiful sunset before.",
    translation: "我以前从没见过这么美的日落。",
    hint: {
      sentenceWithBlank: "I [____] seen such a beautiful sunset before.",
      options: [
        { text: "had never", isCorrect: true, explanation: "过去完成时强调在过去某个时刻之前从未有过这种经历。" },
        { text: "have never", isCorrect: false, explanation: "现在完成时指向现在，而 'before' 指的是过去的某个时点。" },
        { text: "did never", isCorrect: false, explanation: "语法上不成立（可以说 never saw，但这里需要过去完成时）。" }
      ]
    },
    tense: "Past Perfect",
    topic: "Nature",
    lengthWords: 9
  },
  {
    id: "41",
    text: "I have been learning English for three years.",
    translation: "我学英语已经三年了。",
    hint: {
      sentenceWithBlank: "I [____] English for three years.",
      options: [
        { text: "have been learning", isCorrect: true, explanation: "现在完成进行时强调动作从过去开始并一直持续到现在。" },
        { text: "am learning", isCorrect: false, explanation: "现在进行时不与 'for three years' 这类时间段连用。" },
        { text: "learn", isCorrect: false, explanation: "一般现在时陈述事实，不表示持续了一段时间的过程。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Education",
    lengthWords: 8
  },
  {
    id: "42",
    text: "Why are your hands dirty? — I've been fixing my bike.",
    translation: "你的手怎么这么脏？——我刚才在修自行车。",
    hint: {
      sentenceWithBlank: "Why are your hands dirty? — I've [____] my bike.",
      options: [
        { text: "been fixing", isCorrect: true, explanation: "现在完成进行时用最近持续的动作来解释现在看得见的结果（脏手）。" },
        { text: "fixed", isCorrect: false, explanation: "现在完成时强调动作已完成，而这里重要的是留下痕迹的那个过程。" },
        { text: "fixing", isCorrect: false, explanation: "缺少构成现在完成进行时的 'been'。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 11
  },
  {
    id: "43",
    text: "It has been raining all day.",
    translation: "雨下了一整天。",
    hint: {
      sentenceWithBlank: "It [____] all day.",
      options: [
        { text: "has been raining", isCorrect: true, explanation: "现在完成进行时表示从过去持续到现在的动作（'all day'）。" },
        { text: "is raining", isCorrect: false, explanation: "现在进行时只说'此刻在下'，不强调持续了多久。" },
        { text: "rains", isCorrect: false, explanation: "一般现在时表示通常会下雨，而不是一整天不停地下。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Nature",
    lengthWords: 6
  },
  {
    id: "44",
    text: "She had been waiting for two hours before the bus arrived.",
    translation: "公交车来之前，她已经等了两个小时。",
    hint: {
      sentenceWithBlank: "She [____] for two hours before the bus arrived.",
      options: [
        { text: "had been waiting", isCorrect: true, explanation: "过去完成进行时表示在过去另一事件之前动作已持续了多久。" },
        { text: "has been waiting", isCorrect: false, explanation: "现在完成进行时指向现在，而这里第二个动作（'arrived'）发生在过去。" },
        { text: "was waiting", isCorrect: false, explanation: "有 'for' 引出的时间长度、又在另一过去动作之前，要用过去完成进行时。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "45",
    text: "They had been living there for five years when the company closed.",
    translation: "公司倒闭时，他们已经在那里住了五年。",
    hint: {
      sentenceWithBlank: "They [____] there for five years when the company closed.",
      options: [
        { text: "had been living", isCorrect: true, explanation: "过去完成进行时说明动作持续到过去某个时刻已经有多久了。" },
        { text: "were living", isCorrect: false, explanation: "说明了持续时间（'for five years'）时不用过去进行时。" },
        { text: "have been living", isCorrect: false, explanation: "事情发生在过去（'closed'），所以要用过去的时态。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "46",
    text: "His eyes were red because he had been staring at the screen for hours.",
    translation: "他两眼通红，因为他盯着屏幕看了好几个小时。",
    hint: {
      sentenceWithBlank: "His eyes were red because he [____] at the screen for hours.",
      options: [
        { text: "had been staring", isCorrect: true, explanation: "过去完成进行时表示导致过去某种状态的持续过程。" },
        { text: "has been staring", isCorrect: false, explanation: "结果（'were red'）发生在过去，所以要用过去的时态。" },
        { text: "was staring", isCorrect: false, explanation: "过去进行时无法表达先于结果发生并持续很久的含义。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 14
  },
  {
    id: "47",
    text: "By midnight, I will have been working on this design for ten hours.",
    translation: "到午夜时，我做这个设计就满十个小时了。",
    hint: {
      sentenceWithBlank: "By midnight, I [____] on this design for ten hours.",
      options: [
        { text: "will have been working", isCorrect: true, explanation: "将来完成进行时表示到将来某一时刻为止动作已经持续了多久。" },
        { text: "will work", isCorrect: false, explanation: "一般将来时无法表达到将来某时的持续时长。" },
        { text: "will be working", isCorrect: false, explanation: "将来进行时描述当时正在做，但不强调持续了 'for ten hours'。" }
      ]
    },
    tense: "Future Perfect Continuous",
    topic: "Workplace",
    lengthWords: 13
  },
  {
    id: "48",
    text: "How long have you been looking for a job?",
    translation: "你找工作找多久了？",
    hint: {
      sentenceWithBlank: "How long [____] you [____] for a job?",
      options: [
        { text: "have / been looking", isCorrect: true, explanation: "用 'How long' 询问尚未结束的动作时，要用现在完成进行时。" },
        { text: "are / looking", isCorrect: false, explanation: "现在进行时问的是此刻在做什么，而不是'持续了多久'。" },
        { text: "do / look", isCorrect: false, explanation: "一般现在时不合适，这不是经常性的动作。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "49",
    text: "We had been driving for miles before we realized we were lost.",
    translation: "我们开了好几英里才发现迷路了。",
    hint: {
      sentenceWithBlank: "We [____] for miles before we realized we were lost.",
      options: [
        { text: "had been driving", isCorrect: true, explanation: "过去完成进行时表示持续到过去某个事件为止的过程。" },
        { text: "have been driving", isCorrect: false, explanation: "句中所有事件都发生在过去（'realized'、'were'），不能用现在完成时。" },
        { text: "were driving", isCorrect: false, explanation: "过去进行时无法突出在另一动作之前已持续了多久。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 12
  },
  {
    id: "50",
    text: "She has been running, so she is out of breath.",
    translation: "她刚跑过步，所以上气不接下气。",
    hint: {
      sentenceWithBlank: "She [____], so she is out of breath.",
      options: [
        { text: "has been running", isCorrect: true, explanation: "现在完成进行时用刚刚持续的动作解释现在的状态（'out of breath'）。" },
        { text: "is running", isCorrect: false, explanation: "现在进行时表示她此刻正在跑。" },
        { text: "ran", isCorrect: false, explanation: "一般过去时只陈述跑过这个事实，而现在完成进行时更能体现过程与结果的联系。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 10
  },
    {
    id: "51",
    text: "You must wear a seatbelt while driving.",
    translation: "开车时必须系安全带。",
    hint: {
      sentenceWithBlank: "You [____] wear a seatbelt while driving.",
      options: [
        { text: "must", isCorrect: true, explanation: "must 表示严格的义务或规定。" },
        { text: "have", isCorrect: false, explanation: "have 后面要加 to 才能表示必须（have to）。" },
        { text: "can", isCorrect: false, explanation: "can 表示客观能力，而这里说的是规定。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "52",
    text: "You don't have to pay for the tickets; they are free.",
    translation: "你不用买票，票是免费的。",
    hint: {
      sentenceWithBlank: "You [____] pay for the tickets; they are free.",
      options: [
        { text: "don't have to", isCorrect: true, explanation: "don't have to 表示没有必要（不必）。" },
        { text: "mustn't", isCorrect: false, explanation: "mustn't 表示严格的禁止（不许）。" },
        { text: "shouldn't", isCorrect: false, explanation: "shouldn't 是建议（不该），而这里只是陈述没有必要这个事实。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "53",
    text: "You shouldn't eat so much fast food.",
    translation: "你不该吃这么多快餐。",
    hint: {
      sentenceWithBlank: "You [____] eat so much fast food.",
      options: [
        { text: "shouldn't", isCorrect: true, explanation: "shouldn't 用来提出建议（不该做某事）。" },
        { text: "don't have to", isCorrect: false, explanation: "意思是'不必'，不能用来表达劝告。" },
        { text: "can't", isCorrect: false, explanation: "can't 表示禁止或不可能。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "54",
    text: "He might come to the meeting, but he isn't sure.",
    translation: "他可能会来开会，但他自己也说不准。",
    hint: {
      sentenceWithBlank: "He [____] come to the meeting, but he isn't sure.",
      options: [
        { text: "might", isCorrect: true, explanation: "might 表示将来发生的可能性较小、不确定。" },
        { text: "must", isCorrect: false, explanation: "must 表示很有把握的推测或义务。" },
        { text: "can", isCorrect: false, explanation: "can 一般不用来表示某个具体将来动作的可能性。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "Workplace",
    lengthWords: 10
  },
  {
    id: "55",
    text: "May I borrow your pen for a moment?",
    translation: "能借你的笔用一下吗？",
    hint: {
      sentenceWithBlank: "[____] I borrow your pen for a moment?",
      options: [
        { text: "May", isCorrect: true, explanation: "may 用于礼貌地请求许可。" },
        { text: "Must", isCorrect: false, explanation: "must 表示义务，不用于请求。" },
        { text: "Should", isCorrect: false, explanation: "should 用于征求建议（我该不该…）。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "56",
    text: "She can't be at home; I saw her at the office five minutes ago.",
    translation: "她不可能在家；五分钟前我还在办公室见到她。",
    hint: {
      sentenceWithBlank: "She [____] be at home; I saw her at the office five minutes ago.",
      options: [
        { text: "can't", isCorrect: true, explanation: "can't 表示说话人肯定某事不可能。" },
        { text: "mustn't", isCorrect: false, explanation: "mustn't 表示严格禁止，不表示逻辑推断。" },
        { text: "might not", isCorrect: false, explanation: "might not 只表示可能性不大，而这里语气是很肯定的。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 14
  },
  {
    id: "57",
    text: "He must have forgotten about our appointment.",
    translation: "他一定是把我们的约会忘了。",
    hint: {
      sentenceWithBlank: "He [____] about our appointment.",
      options: [
        { text: "must have forgotten", isCorrect: true, explanation: "must + have + 过去分词表示对过去的事情作出很有把握的推测。" },
        { text: "must forget", isCorrect: false, explanation: "这种形式指向现在或将来。" },
        { text: "should have forgotten", isCorrect: false, explanation: "意思变成'他本该忘掉'。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "58",
    text: "You should have told me the truth earlier.",
    translation: "你早就该跟我说实话。",
    hint: {
      sentenceWithBlank: "You [____] me the truth earlier.",
      options: [
        { text: "should have told", isCorrect: true, explanation: "should + have + 过去分词用来责备过去本该做却没做的事。" },
        { text: "should tell", isCorrect: false, explanation: "指的是现在或将来。" },
        { text: "must have told", isCorrect: false, explanation: "表示'你一定是说过'这种肯定的推测。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "59",
    text: "I could play the piano when I was a child.",
    translation: "我小时候会弹钢琴。",
    hint: {
      sentenceWithBlank: "I [____] play the piano when I was a child.",
      options: [
        { text: "could", isCorrect: true, explanation: "could 是 can 的过去式，表示过去具备的能力。" },
        { text: "can", isCorrect: false, explanation: "can 指现在的能力。" },
        { text: "must", isCorrect: false, explanation: "must 表示义务，而不是能力。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "60",
    text: "We had better leave now before it gets dark.",
    translation: "我们最好趁天没黑赶紧走。",
    hint: {
      sentenceWithBlank: "We [____] leave now before it gets dark.",
      options: [
        { text: "had better", isCorrect: true, explanation: "had better（最好）用于提出强烈的建议或警告。" },
        { text: "would rather", isCorrect: false, explanation: "would rather 表示更愿意、宁可。" },
        { text: "should to", isCorrect: false, explanation: "should 后面不加 to，直接跟动词原形。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "61",
    text: "If you heat ice, it melts.",
    translation: "冰受热就会融化。",
    hint: {
      sentenceWithBlank: "If you heat ice, it [____].",
      options: [
        { text: "melts", isCorrect: true, explanation: "零条件句（讲普遍事实）中，两个分句都用一般现在时。" },
        { text: "will melt", isCorrect: false, explanation: "表述科学事实要用一般现在时，不用将来时。" },
        { text: "melted", isCorrect: false, explanation: "这里不能用过去时。" }
      ]
    },
    tense: "Conditionals",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "62",
    text: "If I have time tonight, I will call you.",
    translation: "今晚我要是有空，就给你打电话。",
    hint: {
      sentenceWithBlank: "If I [____] time tonight, I [____] you.",
      options: [
        { text: "have / will call", isCorrect: true, explanation: "第一类条件句：if 从句用一般现在时（have），主句用一般将来时（will call）。" },
        { text: "will have / call", isCorrect: false, explanation: "if 引导的条件从句中不用将来时（will）。" },
        { text: "had / would call", isCorrect: false, explanation: "那是第二类条件句，用于不真实的假设，而这里是真实的条件。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "63",
    text: "Unless you study hard, you won't pass the exam.",
    translation: "你要是不努力学习，考试就通不过。",
    hint: {
      sentenceWithBlank: "[____] you study hard, you won't pass the exam.",
      options: [
        { text: "Unless", isCorrect: true, explanation: "unless 相当于 if not（如果不），本身已含否定意义。" },
        { text: "If", isCorrect: false, explanation: "用 if 就成了'如果你努力学习，你就通不过'，不合逻辑。" },
        { text: "Without", isCorrect: false, explanation: "without 是介词（没有），后面要接名词或动名词。" }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 9
  },
  {
    id: "64",
    text: "As soon as I arrive, I will let you know.",
    translation: "我一到就通知你。",
    hint: {
      sentenceWithBlank: "[____] I arrive, I will let you know.",
      options: [
        { text: "As soon as", isCorrect: true, explanation: "as soon as（一…就…）引导的时间状语从句用一般现在时表将来。" },
        { text: "Until", isCorrect: false, explanation: "until 意思是'直到…为止'，会改变句子的意思。" },
        { text: "While", isCorrect: false, explanation: "while（当…的时候）用于持续性的动作。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "65",
    text: "If I won the lottery, I would buy a house by the sea.",
    translation: "要是我中了彩票，我就在海边买套房子。",
    hint: {
      sentenceWithBlank: "If I [____] the lottery, I [____] a house by the sea.",
      options: [
        { text: "won / would buy", isCorrect: true, explanation: "第二类条件句：从句用一般过去时（won），主句用 would + 动词原形。" },
        { text: "win / would buy", isCorrect: false, explanation: "从句用现在时与主句的 would 不匹配。" },
        { text: "won / will buy", isCorrect: false, explanation: "从句用过去式时，主句要用 would 而不是 will。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 13
  },
  {
    id: "66",
    text: "What would you do if you were in my shoes?",
    translation: "如果你是我，你会怎么做？",
    hint: {
      sentenceWithBlank: "What [____] if you [____] in my shoes?",
      options: [
        { text: "would you do / were", isCorrect: true, explanation: "第二类条件句：主句用 would + 动词原形，从句中 be 动词各人称都用 were。" },
        { text: "will you do / are", isCorrect: false, explanation: "那是第一类条件句，而 'in my shoes' 表明这是假设的情况。" },
        { text: "do you do / was", isCorrect: false, explanation: "不符合第二类条件句的语法结构。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "67",
    text: "If I had more free time, I would take up photography.",
    translation: "要是我有更多空闲时间，我就去学摄影。",
    hint: {
      sentenceWithBlank: "If I [____] more free time, I [____] take up photography.",
      options: [
        { text: "had / would", isCorrect: true, explanation: "第二类条件句：与现在事实相反的条件（had）＋结果（would）。" },
        { text: "have / will", isCorrect: false, explanation: "那表示真实的条件，而这里强调的是与现实不符。" },
        { text: "had had / would have", isCorrect: false, explanation: "那是第三类条件句，说的是过去的情况。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "68",
    text: "If we had left earlier, we wouldn't have missed the flight.",
    translation: "要是我们早点出发，就不会误机了。",
    hint: {
      sentenceWithBlank: "If we [____] earlier, we [____] the flight.",
      options: [
        { text: "had left / wouldn't have missed", isCorrect: true, explanation: "第三类条件句：与过去事实相反的条件用过去完成时，结果用 would have + 过去分词。" },
        { text: "left / wouldn't miss", isCorrect: false, explanation: "那是第二类条件句，说的是现在，而不是已经过去的事。" },
        { text: "had left / wouldn't miss", isCorrect: false, explanation: "这是混合条件句，两个动作都发生在过去时不适用。" }
      ]
    },
    tense: "Conditionals",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "69",
    text: "I wouldn't have known about the project if you hadn't told me.",
    translation: "要不是你告诉我，我根本不会知道这个项目。",
    hint: {
      sentenceWithBlank: "I wouldn't [____] about the project if you hadn't told me.",
      options: [
        { text: "have known", isCorrect: true, explanation: "第三类条件句：讲过去的情况时，主句用 would have + 过去分词。" },
        { text: "know", isCorrect: false, explanation: "wouldn't know 指的是现在的情况。" },
        { text: "knew", isCorrect: false, explanation: "would have 后面要用过去分词（known），不是过去式。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "70",
    text: "If I had studied harder at university, I would have a better job now.",
    translation: "要是我大学时更用功，现在就能有份更好的工作。",
    hint: {
      sentenceWithBlank: "If I [____] harder at university, I [____] a better job now.",
      options: [
        { text: "had studied / would have", isCorrect: true, explanation: "混合条件句：条件在过去（过去完成时），结果在现在（would + 动词原形）。" },
        { text: "studied / would have", isCorrect: false, explanation: "上大学是过去的事，条件从句要用过去完成时。" },
        { text: "had studied / would have had", isCorrect: false, explanation: "结果指向现在（now），所以用 would have，而不是 would have had。" }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 14
  },
  {
    id: "71",
    text: "If he spoke French, he would have translated that document yesterday.",
    translation: "他要是会说法语，昨天那份文件他就翻译了。",
    hint: {
      sentenceWithBlank: "If he [____] French, he [____] that document yesterday.",
      options: [
        { text: "spoke / would have translated", isCorrect: true, explanation: "混合条件句：条件是长期存在的（一般过去时），结果发生在过去（would have + 过去分词）。" },
        { text: "had spoken / would translate", isCorrect: false, explanation: "会不会法语是长期的状态，而翻译发生在昨天。" },
        { text: "spoke / would translate", isCorrect: false, explanation: "翻译这件事发生在昨天（yesterday），所以要用 would have + 过去分词。" }
      ]
    },
    tense: "Conditionals",
    topic: "Workplace",
    lengthWords: 11
  },
  {
    id: "72",
    text: "I wish I had more money.",
    translation: "我要是再有点钱就好了。",
    hint: {
      sentenceWithBlank: "I [____] I [____] more money.",
      options: [
        { text: "wish / had", isCorrect: true, explanation: "I wish + 一般过去时，用来表达对现状的遗憾。" },
        { text: "wish / have", isCorrect: false, explanation: "I wish 后面表示现在的情况要用一般过去时。" },
        { text: "hope / had", isCorrect: false, explanation: "hope 后面通常用真实的时态（现在时或将来时）。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "73",
    text: "I wish you wouldn't make so much noise.",
    translation: "你要是别弄出这么大动静就好了。",
    hint: {
      sentenceWithBlank: "I wish you [____] make so much noise.",
      options: [
        { text: "wouldn't", isCorrect: true, explanation: "I wish + would/wouldn't 表示对别人现在的行为感到不满。" },
        { text: "don't", isCorrect: false, explanation: "I wish 后面不用一般现在时。" },
        { text: "didn't", isCorrect: false, explanation: "didn't 也说得通，但 wouldn't 更能表达对对方行为的不满。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "74",
    text: "If only I hadn't said that to her yesterday.",
    translation: "我昨天要是没对她说那些话就好了。",
    hint: {
      sentenceWithBlank: "If [____] I [____] said that to her yesterday.",
      options: [
        { text: "only / hadn't", isCorrect: true, explanation: "If only + 过去完成时，表达对过去的强烈懊悔。" },
        { text: "only / didn't", isCorrect: false, explanation: "事情发生在昨天，要用过去完成时，而不是一般过去时。" },
        { text: "just / haven't", isCorrect: false, explanation: "没有 If just 这种说法，而 haven't 是现在完成时，不能指昨天的事。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "75",
    text: "It's time we went home.",
    translation: "我们该回家了。",
    hint: {
      sentenceWithBlank: "It's time we [____] home.",
      options: [
        { text: "went", isCorrect: true, explanation: "It's time（早该…了）这个结构后面用一般过去时。" },
        { text: "go", isCorrect: false, explanation: "It's time + 主语的结构中，动词要用过去式，不用原形。" },
        { text: "are going", isCorrect: false, explanation: "这里不用现在进行时。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 5
  },
    {
    "id": "76",
    "text": "This house was built in 1920.",
    "translation": "这座房子建于1920年。",
    "hint": {
      "sentenceWithBlank": "This house [____] in 1920.",
      "options": [
        { "text": "was built", "isCorrect": true, "explanation": "一般过去时的被动语态，表示过去对某物施加的动作。" },
        { "text": "built", "isCorrect": false, "explanation": "房子不会自己盖自己，这里必须用被动语态。" },
        { "text": "is built", "isCorrect": false, "explanation": "动作发生在过去（1920年），要用过去时。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "77",
    "text": "The interface is being redesigned at the moment.",
    "translation": "界面目前正在重新设计。",
    "hint": {
      "sentenceWithBlank": "The interface [____] at the moment.",
      "options": [
        { "text": "is being redesigned", "isCorrect": true, "explanation": "现在进行时的被动语态用于此刻正在进行的动作（at the moment）。" },
        { "text": "is redesigned", "isCorrect": false, "explanation": "一般现在时的被动表示经常性动作，而非此刻正在进行。" },
        { "text": "has been redesigned", "isCorrect": false, "explanation": "这是现在完成时的被动，表示动作已经完成。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 8
  },
  {
    "id": "78",
    "text": "The new software has just been installed.",
    "translation": "新软件刚刚安装好。",
    "hint": {
      "sentenceWithBlank": "The new software [____].",
      "options": [
        { "text": "has just been installed", "isCorrect": true, "explanation": "现在完成时的被动语态用于刚刚完成的动作（与 'just' 连用）。" },
        { "text": "has just installed", "isCorrect": false, "explanation": "软件不会自己安装自己，需要用被动语态。" },
        { "text": "was just installed", "isCorrect": false, "explanation": "与副词 'just' 搭配通常用现在完成时，而不是一般过去时。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 7
  },
  {
    "id": "79",
    "text": "English is spoken all over the world.",
    "translation": "全世界都有人说英语。",
    "hint": {
      "sentenceWithBlank": "English [____] all over the world.",
      "options": [
        { "text": "is spoken", "isCorrect": true, "explanation": "一般现在时的被动语态用于陈述众所周知的事实。" },
        { "text": "is speaking", "isCorrect": false, "explanation": "语言本身不会说话，需要用被动语态。" },
        { "text": "spoke", "isCorrect": false, "explanation": "这是过去时的主动语态。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "80",
    "text": "The letters will be sent tomorrow morning.",
    "translation": "这些信明天上午会寄出。",
    "hint": {
      "sentenceWithBlank": "The letters [____] tomorrow morning.",
      "options": [
        { "text": "will be sent", "isCorrect": true, "explanation": "一般将来时的被动语态表示将来对某物施加的动作。" },
        { "text": "will send", "isCorrect": false, "explanation": "信不会自己把自己寄出去（需要用被动）。" },
        { "text": "are sent", "isCorrect": false, "explanation": "这是一般现在时的被动，而动作发生在明天。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "81",
    "text": "I need to get my hair cut this week.",
    "translation": "我这周得去理个发。",
    "hint": {
      "sentenceWithBlank": "I need to [____] this week.",
      "options": [
        { "text": "get my hair cut", "isCorrect": true, "explanation": "'get/have something done' 结构表示这件事是别人替你做的。" },
        { "text": "cut my hair", "isCorrect": false, "explanation": "那意思是你打算自己给自己剪头发。" },
        { "text": "get cutting my hair", "isCorrect": false, "explanation": "这是不符合语法的结构。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 9
  },
  {
    "id": "82",
    "text": "He had his laptop stolen while he was traveling.",
    "translation": "他旅行途中笔记本电脑被偷了。",
    "hint": {
      "sentenceWithBlank": "He [____] while he was traveling.",
      "options": [
        { "text": "had his laptop stolen", "isCorrect": true, "explanation": "'have something done' 结构也可以表示遭遇不幸的事（他的电脑被人偷了）。" },
        { "text": "stole his laptop", "isCorrect": false, "explanation": "那意思成了他自己偷了自己的电脑。" },
        { "text": "had stolen his laptop", "isCorrect": false, "explanation": "这是过去完成时的主动语态：他在某时之前偷走了电脑。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "83",
    "text": "She was made to clean the whole room by her mother.",
    "translation": "妈妈让她把整个房间都打扫了。",
    "hint": {
      "sentenceWithBlank": "She [____] to clean the whole room by her mother.",
      "options": [
        { "text": "was made", "isCorrect": true, "explanation": "make 表示'迫使'时，变成被动语态后，后面的动词要带上 to。" },
        { "text": "made", "isCorrect": false, "explanation": "主动语态会把意思变成'她强迫别人'。" },
        { "text": "has made", "isCorrect": false, "explanation": "同样是主动语态，只是用了现在完成时。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 11
  },
  {
    "id": "84",
    "text": "He is said to be the richest man in the city.",
    "translation": "据说他是城里最有钱的人。",
    "hint": {
      "sentenceWithBlank": "He [____] to be the richest man in the city.",
      "options": [
        { "text": "is said", "isCorrect": true, "explanation": "被动结构 'is said to' 意思是'据说他…'。" },
        { "text": "says", "isCorrect": false, "explanation": "那意思会变成'他说自己是最有钱的…'。" },
        { "text": "said", "isCorrect": false, "explanation": "过去时'他说过'会破坏整个句子的结构。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "85",
    "text": "It is expected that the prices will drop soon.",
    "translation": "预计价格很快就会下跌。",
    "hint": {
      "sentenceWithBlank": "[____] that the prices will drop soon.",
      "options": [
        { "text": "It is expected", "isCorrect": true, "explanation": "以 It 开头的无人称被动结构用来表达普遍的看法或预期。" },
        { "text": "It expects", "isCorrect": false, "explanation": "'It' 本身不会'预期'什么，要用被动语态。" },
        { "text": "They is expected", "isCorrect": false, "explanation": "语法错误：They 要搭配 are，而这里需要的是无人称的 It。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "86",
    "text": "He said that he was working on a new project.",
    "translation": "他说他正在做一个新项目。",
    "hint": {
      "sentenceWithBlank": "He said that he [____] on a new project.",
      "options": [
        { "text": "was working", "isCorrect": true, "explanation": "按照时态呼应规则，直接引语中的现在进行时要变成过去进行时。" },
        { "text": "is working", "isCorrect": false, "explanation": "主句是过去时（'said'），从句时态必须与之呼应。" },
        { "text": "works", "isCorrect": false, "explanation": "一般现在时表示经常性动作，不符合时态呼应规则。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 10
  },
  {
    "id": "87",
    "text": "She told me she had already seen that movie.",
    "translation": "她告诉我她已经看过那部电影了。",
    "hint": {
      "sentenceWithBlank": "She [____] me she had already seen that movie.",
      "options": [
        { "text": "told", "isCorrect": true, "explanation": "动词 tell 后面必须直接跟人（告诉谁——'me'）。" },
        { "text": "said", "isCorrect": false, "explanation": "said 后面要说明告诉谁时，必须加介词 to：said to me。" },
        { "text": "spoke", "isCorrect": false, "explanation": "speak 指'说某种语言'或'与某人交谈'，不能引出转述内容。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Entertainment",
    "lengthWords": 9
  },
  {
    "id": "88",
    "text": "They said they would help us the following week.",
    "translation": "他们说下周会帮我们。",
    "hint": {
      "sentenceWithBlank": "They said they [____] help us the following week.",
      "options": [
        { "text": "would", "isCorrect": true, "explanation": "时态呼应时，表示将来的 'will' 要变成 'would'。" },
        { "text": "will", "isCorrect": false, "explanation": "主句是过去时，用 will 就违反了时态呼应规则。" },
        { "text": "should", "isCorrect": false, "explanation": "意思会变成'应该帮忙'，而不是单纯的将来动作。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "89",
    "text": "He asked me where I lived.",
    "translation": "他问我住在哪儿。",
    "hint": {
      "sentenceWithBlank": "He asked me where [____].",
      "options": [
        { "text": "I lived", "isCorrect": true, "explanation": "间接疑问句用陈述语序，同时要遵守时态呼应。" },
        { "text": "did I live", "isCorrect": false, "explanation": "这是间接疑问句而非直接疑问句，不需要助动词。" },
        { "text": "I live", "isCorrect": false, "explanation": "违反了时态呼应（主句 asked 是过去时）。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "90",
    "text": "She asked if I could help her with the task.",
    "translation": "她问我能不能帮她完成那项任务。",
    "hint": {
      "sentenceWithBlank": "She asked [____] I could help her with the task.",
      "options": [
        { "text": "if", "isCorrect": true, "explanation": "转述一般疑问句（没有疑问词）时，要用 'if' 或 'whether'。" },
        { "text": "that", "isCorrect": false, "explanation": "'that' 用于转述陈述句，不用于疑问句。" },
        { "text": "can", "isCorrect": false, "explanation": "从句子结构上讲不通。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "91",
    "text": "The manager advised me to review the guidelines.",
    "translation": "经理建议我看一下这份指南。",
    "hint": {
      "sentenceWithBlank": "The manager advised me [____] the guidelines.",
      "options": [
        { "text": "to review", "isCorrect": true, "explanation": "advise、ask、tell 这类动词后面接带 to 的不定式。" },
        { "text": "reviewing", "isCorrect": false, "explanation": "'advise' + 人 后面不接动名词。" },
        { "text": "review", "isCorrect": false, "explanation": "漏掉了构成不定式所必需的 to。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "92",
    "text": "He denied making that mistake.",
    "translation": "他否认自己犯了那个错误。",
    "hint": {
      "sentenceWithBlank": "He denied [____] that mistake.",
      "options": [
        { "text": "making", "isCorrect": true, "explanation": "动词 deny 后面要接动名词（V-ing）。" },
        { "text": "to make", "isCorrect": false, "explanation": "deny 后面不能接不定式。" },
        { "text": "make", "isCorrect": false, "explanation": "这个形式在语法上不成立。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 5
  },
  {
    "id": "93",
    "text": "She promised not to tell anyone his secret.",
    "translation": "她答应不把他的秘密告诉任何人。",
    "hint": {
      "sentenceWithBlank": "She promised [____] anyone his secret.",
      "options": [
        { "text": "not to tell", "isCorrect": true, "explanation": "不定式的否定形式是把 'not' 放在 'to' 前面。" },
        { "text": "to not tell", "isCorrect": false, "explanation": "从标准语法看，这样的语序不够规范。" },
        { "text": "don't tell", "isCorrect": false, "explanation": "这里需要的是不定式，而不是祈使句。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 8
  },
  {
    "id": "94",
    "text": "Although it was raining, we went for a walk.",
    "translation": "虽然当时在下雨，我们还是出去散步了。",
    "hint": {
      "sentenceWithBlank": "[____] it was raining, we went for a walk.",
      "options": [
        { "text": "Although", "isCorrect": true, "explanation": "连词 'although'（虽然）后面要接主语和谓语组成的句子。" },
        { "text": "Despite", "isCorrect": false, "explanation": "'despite' 后面要接名词或动名词，不能接完整的句子（it was raining）。" },
        { "text": "However", "isCorrect": false, "explanation": "通常作插入语，需要用逗号隔开。" }
      ]
    },
    "tense": "Conjunctions",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "95",
    "text": "Despite the heavy traffic, we arrived on time.",
    "translation": "尽管交通拥堵，我们还是准时到了。",
    "hint": {
      "sentenceWithBlank": "[____] the heavy traffic, we arrived on time.",
      "options": [
        { "text": "Despite", "isCorrect": true, "explanation": "'despite'（尽管）后面接名词或动名词。" },
        { "text": "Although", "isCorrect": false, "explanation": "'although' 后面必须跟完整的句子（主语＋谓语）。" },
        { "text": "In spite", "isCorrect": false, "explanation": "必须加上介词 'of'（In spite of）。" }
      ]
    },
    "tense": "Conjunctions",
    "topic": "Travel",
    "lengthWords": 8
  },
  {
    "id": "96",
    "text": "Seldom have I seen such a beautiful piece of art.",
    "translation": "我很少见过这么美的艺术品。",
    "hint": {
      "sentenceWithBlank": "[____] such a beautiful piece of art.",
      "options": [
        { "text": "Seldom have I seen", "isCorrect": true, "explanation": "seldom 这类否定或限定意义的副词放在句首时，句子要用倒装语序。" },
        { "text": "Seldom I have seen", "isCorrect": false, "explanation": "'seldom' 位于句首时必须倒装（语序与疑问句相同）。" },
        { "text": "Have I seldom seen", "isCorrect": false, "explanation": "副词 'seldom' 必须放在句子最前面。" }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "97",
    "text": "No sooner had I closed the door than the phone rang.",
    "translation": "我刚关上门，电话就响了。",
    "hint": {
      "sentenceWithBlank": "[____] closed the door than the phone rang.",
      "options": [
        { "text": "No sooner had I", "isCorrect": true, "explanation": "'No sooner + 倒装（had I）… than…' 结构表示'刚一…就…'。" },
        { "text": "No sooner I had", "isCorrect": false, "explanation": "'No sooner' 后面必须把助动词提到主语前面。" },
        { "text": "As soon as I had", "isCorrect": false, "explanation": "'As soon as' 不能与后半句的 'than' 搭配。" }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "98",
    "text": "I look forward to hearing from you soon.",
    "translation": "期待很快收到您的回复。",
    "hint": {
      "sentenceWithBlank": "I look forward [____] from you soon.",
      "options": [
        { "text": "to hearing", "isCorrect": true, "explanation": "'look forward to' 中的 'to' 是介词，后面要接动名词（V-ing）。" },
        { "text": "to hear", "isCorrect": false, "explanation": "这里的 'to' 不是不定式符号而是介词，所以要用动名词。" },
        { "text": "hearing", "isCorrect": false, "explanation": "漏掉了不可省略的介词 'to'。" }
      ]
    },
    "tense": "Gerund",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "99",
    "text": "It's no use crying over spilled milk.",
    "translation": "覆水难收，哭也没用。",
    "hint": {
      "sentenceWithBlank": "It's no use [____] over spilled milk.",
      "options": [
        { "text": "crying", "isCorrect": true, "explanation": "'it's no use'（没有用）这个结构后面一律接动名词。" },
        { "text": "to cry", "isCorrect": false, "explanation": "这个习语中不用不定式。" },
        { "text": "cry", "isCorrect": false, "explanation": "这个形式不合语法，必须用动名词。" }
      ]
    },
    "tense": "Gerund",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "100",
    "text": "Not only did he design the layout, but he also wrote the code.",
    "translation": "他不仅设计了版式，还写了代码。",
    "hint": {
      "sentenceWithBlank": "Not only [____] the layout, but he also wrote the code.",
      "options": [
        { "text": "did he design", "isCorrect": true, "explanation": "句子以 'Not only' 开头时要用倒装（语序与疑问句相同）。" },
        { "text": "he designed", "isCorrect": false, "explanation": "缺少 'Not only' 置于句首时必须使用的倒装。" },
        { "text": "designed he", "isCorrect": false, "explanation": "倒装要借助助动词 'did'，而不是把实义动词提到主语前面。" }
      ]
    },
    "tense": "Inversion",
    "topic": "IT",
    "lengthWords": 13
  }
  ]
}