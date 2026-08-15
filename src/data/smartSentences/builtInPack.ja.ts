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
    "targetLang": "ja"
  },
  "sentences": [
    {
    id: "1",
    text: "This is my book, and that one is yours.",
    translation: "これは私の本で、あちらはあなたのです。",
    hint: {
      sentenceWithBlank: "This is my book, and that one is [____].",
      options: [
        { text: "yours", isCorrect: true, explanation: "所有代名詞の独立形で、後ろに名詞を置かずに「あなたのもの」を表します。" },
        { text: "your", isCorrect: false, explanation: "所有格なので、後ろに名詞が必要です（your book）。" },
        { text: "you", isCorrect: false, explanation: "人称代名詞であり、所有を表す形ではありません。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "2",
    text: "He gave her his car because hers was broken.",
    translation: "彼女の車が壊れていたので、彼は自分の車を彼女に渡しました。",
    hint: {
      sentenceWithBlank: "He gave her his car because [____] was broken.",
      options: [
        { text: "hers", isCorrect: true, explanation: "「her car」の代わりに使う所有代名詞の独立形です。" },
        { text: "her", isCorrect: false, explanation: "所有格なので、後ろに名詞が必要です（her car）。" },
        { text: "she", isCorrect: false, explanation: "主格の人称代名詞（彼女は）で、所有関係は表せません。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "3",
    text: "We did it ourselves without any help.",
    translation: "私たちは誰の助けも借りずに、自分たちだけでそれをやりました。",
    hint: {
      sentenceWithBlank: "We [____] [____] ourselves without any help.",
      options: [
        { text: "did it", isCorrect: true, explanation: "do の過去形 did と代名詞 it を組み合わせた形です。" },
        { text: "do it", isCorrect: false, explanation: "現在形なので、過去の出来事を述べるこの文には合いません。" },
        { text: "made it", isCorrect: false, explanation: "make は「作り出す」、do は「行為を行う」という意味で、ここでは do が適切です。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "4",
    text: "Is there anybody in the office?",
    translation: "オフィスに誰かいますか？",
    hint: {
      sentenceWithBlank: "[____] there anybody in the office?",
      options: [
        { text: "Is", isCorrect: true, explanation: "there is/are の構文で、anybody は単数扱いなので is を使います。" },
        { text: "Are", isCorrect: false, explanation: "複数のものについて言うときに使う形です。" },
        { text: "Does", isCorrect: false, explanation: "there is/are の構文では does は使いません。" }
      ]
    },
    tense: "Present Simple",
    topic: "Workplace",
    lengthWords: 6
  },
  {
    id: "5",
    text: "Nobody told me about the changes.",
    translation: "変更について誰も私に教えてくれませんでした。",
    hint: {
      sentenceWithBlank: "Nobody [____] me about the changes.",
      options: [
        { text: "told", isCorrect: true, explanation: "nobody 自体に否定の意味があるので、動詞は過去形の肯定形にします。" },
        { text: "didn't tell", isCorrect: false, explanation: "英語では二重否定を使いません（Nobody + didn't は不可）。" },
        { text: "said", isCorrect: false, explanation: "say は前置詞 to なしで人を目的語に取れません（said to me）。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "6",
    text: "This is the building whose roof was damaged.",
    translation: "これが、屋根が損傷した建物です。",
    hint: {
      sentenceWithBlank: "This is the building [____] roof was damaged.",
      options: [
        { text: "whose", isCorrect: true, explanation: "所有を表す関係代名詞で、「〜の」という意味になります。" },
        { text: "who", isCorrect: false, explanation: "who は「誰が」を表し、所有の意味はありません。" },
        { text: "which", isCorrect: false, explanation: "which（〜するもの）は所有関係を表せません。" }
      ]
    },
    tense: "Passive Voice",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "7",
    text: "Give it to him, not to them.",
    translation: "それは彼らではなく、彼に渡してください。",
    hint: {
      sentenceWithBlank: "Give it to him, not to [____].",
      options: [
        { text: "them", isCorrect: true, explanation: "they の目的格で、前置詞 to の後に置ける形です。" },
        { text: "their", isCorrect: false, explanation: "所有格（彼らの）なので、後ろに名詞が必要です。" },
        { text: "they", isCorrect: false, explanation: "主格なので、主語としてしか使えません。" }
      ]
    },
    tense: "Imperative",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "8",
    text: "Both of them are busy right now.",
    translation: "二人とも今は忙しいです。",
    hint: {
      sentenceWithBlank: "[____] of them are busy right now.",
      options: [
        { text: "Both", isCorrect: true, explanation: "「2人（2つ）とも」という意味を表します。" },
        { text: "All", isCorrect: false, explanation: "all（全部）は3つ以上の人やものについて使います。" },
        { text: "Either", isCorrect: false, explanation: "either（2つのうちどちらか）は動詞を単数形にします。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "9",
    text: "Neither of the options is perfect.",
    translation: "どちらの選択肢も完璧ではありません。",
    hint: {
      sentenceWithBlank: "[____] of the options is perfect.",
      options: [
        { text: "Neither", isCorrect: true, explanation: "「2つのうちどちらも〜ない」という意味です。" },
        { text: "None", isCorrect: false, explanation: "none は3つ以上の中から「どれも〜ない」と言うときに使います。" },
        { text: "Both", isCorrect: false, explanation: "「両方」の意味で、動詞は複数形（are）になります。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "10",
    text: "Each component has its own function.",
    translation: "それぞれの部品が独自の機能を持っています。",
    hint: {
      sentenceWithBlank: "Each component [____] its own function.",
      options: [
        { text: "has", isCorrect: true, explanation: "each（それぞれの）は単数扱いなので、動詞も単数形にします。" },
        { text: "have", isCorrect: false, explanation: "複数の主語に使う形です。" },
        { text: "having", isCorrect: false, explanation: "動名詞・分詞であり、単独では文の述語動詞になれません。" }
      ]
    },
    tense: "Present Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "11",
    text: "She usually goes to work by bus, but today she is driving.",
    translation: "彼女はふだんバスで通勤していますが、今日は車を運転しています。",
    hint: {
      sentenceWithBlank: "She usually goes to work by bus, but today she [____] [____].",
      options: [
        { text: "is driving", isCorrect: true, explanation: "現在進行形は、今日だけという一時的な行為を表します。" },
        { text: "drives", isCorrect: false, explanation: "現在形は usually のような習慣的な行為に使います。" },
        { text: "driving", isCorrect: false, explanation: "助動詞の is が抜けています。" }
      ]
    },
    tense: "Present Continuous",
    topic: "Daily Life",
    lengthWords: 12
  },
  {
    id: "12",
    text: "Water boils at 100 degrees Celsius.",
    translation: "水は摂氏100度で沸騰します。",
    hint: {
      sentenceWithBlank: "Water [____] at 100 degrees Celsius.",
      options: [
        { text: "boils", isCorrect: true, explanation: "一般的な事実や自然の法則には現在形を使います。" },
        { text: "is boiling", isCorrect: false, explanation: "現在進行形は今まさに起きている動作を表し、事実の説明には合いません。" },
        { text: "boiled", isCorrect: false, explanation: "過去形は過去の出来事に使います。" }
      ]
    },
    tense: "Present Simple",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "13",
    text: "Does he know where the keys are?",
    translation: "彼は鍵がどこにあるか知っていますか？",
    hint: {
      sentenceWithBlank: "[____] he know where the keys are?",
      options: [
        { text: "Does", isCorrect: true, explanation: "主語が he / she / it のときの、現在形の疑問文をつくる助動詞です。" },
        { text: "Do", isCorrect: false, explanation: "I, you, we, they と一緒に使う形です。" },
        { text: "Is", isCorrect: false, explanation: "一般動詞 know の疑問文に be 動詞は使えません。" }
      ]
    },
    tense: "Present Simple",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "14",
    text: "Why didn't you call me yesterday?",
    translation: "昨日はどうして電話をくれなかったのですか？",
    hint: {
      sentenceWithBlank: "Why [____] you call me yesterday?",
      options: [
        { text: "didn't", isCorrect: true, explanation: "過去形の否定疑問文をつくる助動詞です。" },
        { text: "don't", isCorrect: false, explanation: "現在形ですが、文中に yesterday という過去を示す語があります。" },
        { text: "weren't", isCorrect: false, explanation: "一般動詞 call と一緒に be 動詞は使えません。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "15",
    text: "I saw a great movie last weekend.",
    translation: "先週末、とてもいい映画を見ました。",
    hint: {
      sentenceWithBlank: "I [____] a great movie last weekend.",
      options: [
        { text: "saw", isCorrect: true, explanation: "see の過去形で、last weekend という過去に完了した動作を表します。" },
        { text: "see", isCorrect: false, explanation: "現在形なので last weekend とは合いません。" },
        { text: "have seen", isCorrect: false, explanation: "現在完了は、過去の時点をはっきり示す語句とは一緒に使えません。" }
      ]
    },
    tense: "Past Simple",
    topic: "Entertainment",
    lengthWords: 7
  },
  {
    id: "16",
    text: "They didn't arrive on time because of the traffic.",
    translation: "渋滞のせいで、彼らは時間どおりに到着できませんでした。",
    hint: {
      sentenceWithBlank: "They didn't arrive on time [____] of the traffic.",
      options: [
        { text: "because", isCorrect: true, explanation: "because of の形で、名詞の前に置いて理由を表します。" },
        { text: "why", isCorrect: false, explanation: "「なぜ」という意味の疑問詞です。" },
        { text: "as", isCorrect: false, explanation: "as（〜なので）の後ろには、主語と動詞のある文が必要です。" }
      ]
    },
    tense: "Past Simple",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "17",
    text: "What will you do if they reject the plan?",
    translation: "もし彼らが計画を却下したら、どうしますか？",
    hint: {
      sentenceWithBlank: "What [____] you do if they reject the plan?",
      options: [
        { text: "will", isCorrect: true, explanation: "第1条件文（First Conditional）の主節には未来形を使います。" },
        { text: "would", isCorrect: false, explanation: "第2条件文で、現実にはありそうにない状況に使う形です。" },
        { text: "do", isCorrect: false, explanation: "「普段は何をしますか」という現在の習慣を尋ねる文になってしまいます。" }
      ]
    },
    tense: "Future Simple",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "18",
    text: "I think it will be a sunny day.",
    translation: "晴れの日になると思います。",
    hint: {
      sentenceWithBlank: "I think it [____] [____] a sunny day.",
      options: [
        { text: "will be", isCorrect: true, explanation: "未来形は予想や個人の意見（I think）を述べるときに使います。" },
        { text: "is being", isCorrect: false, explanation: "「今だけそう振る舞っている」という意味になり、文意に合いません。" },
        { text: "will", isCorrect: false, explanation: "本動詞の be が足りません。" }
      ]
    },
    tense: "Future Simple",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "19",
    text: "Are you going to update the layout this evening?",
    translation: "今晩、レイアウトを更新するつもりですか？",
    hint: {
      sentenceWithBlank: "Are you [____] [____] update the layout this evening?",
      options: [
        { text: "going to", isCorrect: true, explanation: "be going to は、前もって決めた計画や意図を表します。" },
        { text: "will to", isCorrect: false, explanation: "will の後ろに to は付けません。" },
        { text: "want to", isCorrect: false, explanation: "「〜したいですか」となり、「〜するつもりですか」とは意味が変わります。" }
      ]
    },
    tense: "Future (going to)",
    topic: "IT",
    lengthWords: 9
  },
  {
    id: "20",
    text: "The train leaves at 9 PM tonight.",
    translation: "その電車は今夜9時に出発します。",
    hint: {
      sentenceWithBlank: "The train [____] at 9 PM tonight.",
      options: [
        { text: "leaves", isCorrect: true, explanation: "交通機関の時刻表は、未来のことでも現在形で表します。" },
        { text: "will leave", isCorrect: false, explanation: "時刻表について述べるときは現在形を使うのが普通です。" },
        { text: "is leaving", isCorrect: false, explanation: "個人的な予定には使えますが、時刻表には使いません。" }
      ]
    },
    tense: "Present Simple",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "21",
    text: "How often do you practice your English?",
    translation: "どのくらいの頻度で英語を練習していますか？",
    hint: {
      sentenceWithBlank: "How [____] do you practice your English?",
      options: [
        { text: "often", isCorrect: true, explanation: "How often は頻度（どのくらいよく）を尋ねる表現です。" },
        { text: "many", isCorrect: false, explanation: "数えられる名詞の数を尋ねるときに使います。" },
        { text: "much", isCorrect: false, explanation: "数えられない名詞の量を尋ねるときに使います。" }
      ]
    },
    tense: "Present Simple",
    topic: "Education",
    lengthWords: 7
  },
  {
    id: "22",
    text: "Who wrote this article?",
    translation: "この記事は誰が書いたのですか？",
    hint: {
      sentenceWithBlank: "Who [____] this article?",
      options: [
        { text: "wrote", isCorrect: true, explanation: "主語を尋ねる疑問文では did は不要で、語順は平叙文と同じです。" },
        { text: "did write", isCorrect: false, explanation: "主語を尋ねる疑問文（Who）では使わない形です。" },
        { text: "written", isCorrect: false, explanation: "過去分詞なので、have / has などの助動詞が必要です。" }
      ]
    },
    tense: "Past Simple",
    topic: "General",
    lengthWords: 4
  },
  {
    id: "23",
    text: "Who did you invite to the presentation?",
    translation: "プレゼンには誰を招待したのですか？",
    hint: {
      sentenceWithBlank: "Who [____] you invite to the presentation?",
      options: [
        { text: "did", isCorrect: true, explanation: "目的語（誰を）を尋ねる過去の疑問文をつくる助動詞です。" },
        { text: "do", isCorrect: false, explanation: "現在形になり、「普段は誰を招待しますか」という意味になります。" },
        { text: "were", isCorrect: false, explanation: "一般動詞 invite と一緒に be 動詞は使えません。" }
      ]
    },
    tense: "Past Simple",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "24",
    text: "There used to be a cinema here.",
    translation: "以前はここに映画館がありました。",
    hint: {
      sentenceWithBlank: "There [____] to be a cinema here.",
      options: [
        { text: "used", isCorrect: true, explanation: "used to は「昔は〜だったが、今はそうではない」ことを表します。" },
        { text: "use", isCorrect: false, explanation: "過去を表す used の形が必要です。" },
        { text: "was", isCorrect: false, explanation: "was の後ろに不定詞 to be を続けることはできません。" }
      ]
    },
    tense: "Past Habit",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "25",
    text: "I am used to waking up early.",
    translation: "私は早起きに慣れています。",
    hint: {
      sentenceWithBlank: "I am [____] [____] waking up early.",
      options: [
        { text: "used to", isCorrect: true, explanation: "be used to + 動名詞で、今身についている習慣（〜に慣れている）を表します。" },
        { text: "use to", isCorrect: false, explanation: "この意味では used の形が必要です。" },
        { text: "used", isCorrect: false, explanation: "この構文に欠かせない前置詞 to が抜けています。" }
      ]
    },
    tense: "Present Habit",
    topic: "Daily Life",
    lengthWords: 7
  },
    {
    id: "26",
    text: "Look! It is snowing outside.",
    translation: "見て！外は雪が降っているよ。",
    hint: {
      sentenceWithBlank: "Look! It [____] outside.",
      options: [
        { text: "is snowing", isCorrect: true, explanation: "現在進行形は今まさに起きていることを表します（Look! がその合図です）。" },
        { text: "snows", isCorrect: false, explanation: "現在形は習慣的なことを表し、今この瞬間のことではありません。" },
        { text: "snowing", isCorrect: false, explanation: "助動詞の is が抜けています。" }
      ]
    },
    tense: "Present Continuous",
    topic: "Nature",
    lengthWords: 5
  },
  {
    id: "27",
    text: "What were you doing when I called you?",
    translation: "私が電話したとき、あなたは何をしていましたか？",
    hint: {
      sentenceWithBlank: "What [____] you [____] when I called you?",
      options: [
        { text: "were / doing", isCorrect: true, explanation: "過去進行形は、別の動作（電話）によって中断された進行中の動作を表します。" },
        { text: "did / do", isCorrect: false, explanation: "過去形は次々に起きた完了した動作に使い、進行中の様子は表しません。" },
        { text: "are / doing", isCorrect: false, explanation: "現在進行形は今のことですが、この文は過去（when I called）の話です。" }
      ]
    },
    tense: "Past Continuous",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "28",
    text: "While she was cooking, he was reading a book.",
    translation: "彼女が料理をしている間、彼は本を読んでいました。",
    hint: {
      sentenceWithBlank: "While she [____], he was reading a book.",
      options: [
        { text: "was cooking", isCorrect: true, explanation: "過去進行形は、過去に同時に進行していた2つの動作を表します。" },
        { text: "cooked", isCorrect: false, explanation: "過去形は完了した動作を表しますが、while は進行中であることを示します。" },
        { text: "is cooking", isCorrect: false, explanation: "後半が過去（was reading）なので、前半も過去にそろえます。" }
      ]
    },
    tense: "Past Continuous",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "29",
    text: "I have already finished the first task.",
    translation: "私はもう最初の作業を終えました。",
    hint: {
      sentenceWithBlank: "I [____] already [____] the first task.",
      options: [
        { text: "have / finished", isCorrect: true, explanation: "現在完了は、今に結果が残る完了した動作を表します（already が目印です）。" },
        { text: "am / finishing", isCorrect: false, explanation: "現在進行形は「まだ続いている」という意味になり、already と矛盾します。" },
        { text: "had / finished", isCorrect: false, explanation: "過去完了は、基準となる別の動作が過去にあるときに使います。" }
      ]
    },
    tense: "Present Perfect",
    topic: "Workplace",
    lengthWords: 7
  },
  {
    id: "30",
    text: "Have you ever been to London?",
    translation: "ロンドンに行ったことはありますか？",
    hint: {
      sentenceWithBlank: "Have you [____] been to London?",
      options: [
        { text: "ever", isCorrect: true, explanation: "ever は現在完了の疑問文で、これまでの経験を尋ねるときによく使います。" },
        { text: "never", isCorrect: false, explanation: "「一度も〜ない」という意味で、形の上では肯定文の中で使います。" },
        { text: "yet", isCorrect: false, explanation: "yet は文末に置きます。" }
      ]
    },
    tense: "Present Perfect",
    topic: "Travel",
    lengthWords: 6
  },
  {
    id: "31",
    text: "She has lived here since 2015.",
    translation: "彼女は2015年からここに住んでいます。",
    hint: {
      sentenceWithBlank: "She has lived here [____] 2015.",
      options: [
        { text: "since", isCorrect: true, explanation: "since は、動作が始まった具体的な時点を示します。" },
        { text: "for", isCorrect: false, explanation: "for は期間の長さを示します（for 5 years など）。" },
        { text: "from", isCorrect: false, explanation: "from は通常 to や until とセットで使います。" }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "32",
    text: "We haven't seen each other for ages.",
    translation: "私たちはずいぶん長い間会っていません。",
    hint: {
      sentenceWithBlank: "We [____] each other for ages.",
      options: [
        { text: "haven't seen", isCorrect: true, explanation: "現在完了は、過去から今までその動作がないことを表します（for ages）。" },
        { text: "didn't see", isCorrect: false, explanation: "過去形は終わった期間を指しますが、ここでは今も続いている期間の話です。" },
        { text: "don't see", isCorrect: false, explanation: "現在形は習慣を表し、「その時からずっと」という意味にはなりません。" }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "33",
    text: "When I arrived, the meeting had already started.",
    translation: "私が着いたときには、会議はもう始まっていました。",
    hint: {
      sentenceWithBlank: "When I arrived, the meeting [____] already [____].",
      options: [
        { text: "had / started", isCorrect: true, explanation: "過去完了は、過去のある動作（When I arrived）より前に完了した動作を表します。" },
        { text: "has / started", isCorrect: false, explanation: "基準となる動作が過去（arrived）なので、現在完了は使えません。" },
        { text: "was / starting", isCorrect: false, explanation: "「始まりかけていた」という意味になり、already と合いません。" }
      ]
    },
    tense: "Past Perfect",
    topic: "Workplace",
    lengthWords: 8
  },
  {
    id: "34",
    text: "He realized he had lost his wallet.",
    translation: "彼は財布をなくしたことに気づきました。",
    hint: {
      sentenceWithBlank: "He realized he [____] his wallet.",
      options: [
        { text: "had lost", isCorrect: true, explanation: "過去完了は、過去の別の動作（気づいた）より前に起きた動作に使います。" },
        { text: "loses", isCorrect: false, explanation: "主節が過去なので、現在形では時制が合いません。" },
        { text: "has lost", isCorrect: false, explanation: "現在完了は今と結び付きますが、気づいた（realized）のは過去のことです。" }
      ]
    },
    tense: "Past Perfect",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "35",
    text: "By next year, they will have completed the project.",
    translation: "来年までに、彼らはそのプロジェクトを完了しているでしょう。",
    hint: {
      sentenceWithBlank: "By next year, they [____] the project.",
      options: [
        { text: "will have completed", isCorrect: true, explanation: "未来完了は、未来のある時点までに完了する動作を表します（By next year）。" },
        { text: "will complete", isCorrect: false, explanation: "単なる未来の事実を表す形で、by があるここでは未来完了が必要です。" },
        { text: "are completing", isCorrect: false, explanation: "現在進行形は予定を表せますが、「その時点までの完了」は表せません。" }
      ]
    },
    tense: "Future Perfect",
    topic: "Workplace",
    lengthWords: 9
  },
  {
    id: "36",
    text: "I will be flying to Paris this time tomorrow.",
    translation: "明日の今ごろ、私はパリへ向かう飛行機の中にいるでしょう。",
    hint: {
      sentenceWithBlank: "I [____] to Paris this time tomorrow.",
      options: [
        { text: "will be flying", isCorrect: true, explanation: "未来進行形は、未来の特定の時点で進行中の動作を表します（this time tomorrow）。" },
        { text: "will fly", isCorrect: false, explanation: "単純未来は事実や決意を表し、その時点で進行中であることは表しません。" },
        { text: "fly", isCorrect: false, explanation: "現在形は時刻表には使えますが、ここでは飛んでいる最中であることが焦点です。" }
      ]
    },
    tense: "Future Continuous",
    topic: "Travel",
    lengthWords: 9
  },
  {
    id: "37",
    text: "This is the best coffee I have ever tasted.",
    translation: "これは今まで飲んだ中でいちばんおいしいコーヒーです。",
    hint: {
      sentenceWithBlank: "This is the best coffee I have [____] tasted.",
      options: [
        { text: "ever", isCorrect: true, explanation: "ever は経験を表し、特に最上級（the best）の後でよく使われます。" },
        { text: "never", isCorrect: false, explanation: "「一度も飲んだことがない」と意味が逆になってしまいます。" },
        { text: "already", isCorrect: false, explanation: "「すでに」という意味で、「今までで最高」という文脈には合いません。" }
      ]
    },
    tense: "Present Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "38",
    text: "It's the first time I have driven an electric car.",
    translation: "電気自動車を運転するのはこれが初めてです。",
    hint: {
      sentenceWithBlank: "It's the first time I [____] an electric car.",
      options: [
        { text: "have driven", isCorrect: true, explanation: "It's the first time... の構文では必ず現在完了を使います。" },
        { text: "drive", isCorrect: false, explanation: "経験について述べる文なので、現在形は使いません。" },
        { text: "drove", isCorrect: false, explanation: "過去形は終わった出来事に使いますが、この経験は今に関わることです。" }
      ]
    },
    tense: "Present Perfect",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "39",
    text: "She was tired because she had worked all night.",
    translation: "彼女は一晩中働いていたので疲れていました。",
    hint: {
      sentenceWithBlank: "She was tired because she [____] all night.",
      options: [
        { text: "had worked", isCorrect: true, explanation: "過去完了は、過去の状態（疲れていた）の原因となった、先に起きた動作を表します。" },
        { text: "has worked", isCorrect: false, explanation: "結果（疲れていた）が過去のことなので、現在完了は合いません。" },
        { text: "worked", isCorrect: false, explanation: "過去形でも通じますが、過去完了のほうが「先に起きた原因」であることをはっきり示せます。" }
      ]
    },
    tense: "Past Perfect",
    topic: "Daily Life",
    lengthWords: 9
  },
  {
    id: "40",
    text: "I had never seen such a beautiful sunset before.",
    translation: "あれほど美しい夕日は、それまで見たことがありませんでした。",
    hint: {
      sentenceWithBlank: "I [____] seen such a beautiful sunset before.",
      options: [
        { text: "had never", isCorrect: true, explanation: "過去完了は、過去のある時点までその経験がなかったことを強調します。" },
        { text: "have never", isCorrect: false, explanation: "現在完了は今が基準ですが、before は過去の時点を指しています。" },
        { text: "did never", isCorrect: false, explanation: "文法的に誤りです（never saw なら可ですが、ここでは過去完了が必要です）。" }
      ]
    },
    tense: "Past Perfect",
    topic: "Nature",
    lengthWords: 9
  },
  {
    id: "41",
    text: "I have been learning English for three years.",
    translation: "私は3年間英語を勉強しています。",
    hint: {
      sentenceWithBlank: "I [____] English for three years.",
      options: [
        { text: "have been learning", isCorrect: true, explanation: "現在完了進行形は、過去に始まって今も続いている動作の継続を強調します。" },
        { text: "am learning", isCorrect: false, explanation: "現在進行形は for three years のような期間の表現とは一緒に使いません。" },
        { text: "learn", isCorrect: false, explanation: "現在形は事実や習慣を表し、一定期間続く動作の継続は表しません。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Education",
    lengthWords: 8
  },
  {
    id: "42",
    text: "Why are your hands dirty? — I've been fixing my bike.",
    translation: "どうして手が汚れているの？ — 自転車を修理していたんだ。",
    hint: {
      sentenceWithBlank: "Why are your hands dirty? — I've [____] my bike.",
      options: [
        { text: "been fixing", isCorrect: true, explanation: "現在完了進行形は、今見えている結果（汚れた手）を、直前まで続いていた動作で説明します。" },
        { text: "fixed", isCorrect: false, explanation: "現在完了は完了に焦点がありますが、ここでは痕跡を残した動作そのものが重要です。" },
        { text: "fixing", isCorrect: false, explanation: "been が抜けていて、現在完了進行形の形になっていません。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 11
  },
  {
    id: "43",
    text: "It has been raining all day.",
    translation: "一日中ずっと雨が降っています。",
    hint: {
      sentenceWithBlank: "It [____] all day.",
      options: [
        { text: "has been raining", isCorrect: true, explanation: "現在完了進行形は、過去から今まで続いている動作を表します（all day）。" },
        { text: "is raining", isCorrect: false, explanation: "現在進行形は「今」の状況を表すだけで、継続の長さは示しません。" },
        { text: "rains", isCorrect: false, explanation: "現在形だと「ふだん雨が降る」という一般的な意味になります。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "Nature",
    lengthWords: 6
  },
  {
    id: "44",
    text: "She had been waiting for two hours before the bus arrived.",
    translation: "彼女はバスが来るまで2時間待っていました。",
    hint: {
      sentenceWithBlank: "She [____] for two hours before the bus arrived.",
      options: [
        { text: "had been waiting", isCorrect: true, explanation: "過去完了進行形は、過去のある出来事までの動作の継続を表します。" },
        { text: "has been waiting", isCorrect: false, explanation: "現在完了進行形は今が基準ですが、もう一つの動作（arrived）は過去のことです。" },
        { text: "was waiting", isCorrect: false, explanation: "for で期間を示し、過去の別の動作までの継続を表すには過去完了進行形が適切です。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "45",
    text: "They had been living there for five years when the company closed.",
    translation: "会社が閉鎖したとき、彼らはそこに5年間住んでいました。",
    hint: {
      sentenceWithBlank: "They [____] there for five years when the company closed.",
      options: [
        { text: "had been living", isCorrect: true, explanation: "過去完了進行形は、過去のある時点までどれくらい続いたかを表します。" },
        { text: "were living", isCorrect: false, explanation: "過去進行形は、for five years のように期間が示されているときには使いません。" },
        { text: "have been living", isCorrect: false, explanation: "出来事は過去（closed）なので、過去の時制が必要です。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "46",
    text: "His eyes were red because he had been staring at the screen for hours.",
    translation: "彼は何時間も画面を見続けていたので、目が赤くなっていました。",
    hint: {
      sentenceWithBlank: "His eyes were red because he [____] at the screen for hours.",
      options: [
        { text: "had been staring", isCorrect: true, explanation: "過去完了進行形は、過去の状態の原因となった、長く続いた動作を表します。" },
        { text: "has been staring", isCorrect: false, explanation: "結果（were red）が過去なので、過去の時制が必要です。" },
        { text: "was staring", isCorrect: false, explanation: "過去進行形では、「先に起きて結果を生んだ継続」というニュアンスが出ません。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Daily Life",
    lengthWords: 14
  },
  {
    id: "47",
    text: "By midnight, I will have been working on this design for ten hours.",
    translation: "夜12時には、私はこのデザインに10時間取り組んでいることになります。",
    hint: {
      sentenceWithBlank: "By midnight, I [____] on this design for ten hours.",
      options: [
        { text: "will have been working", isCorrect: true, explanation: "未来完了進行形は、未来のある時点までどれくらい続いているかを表します。" },
        { text: "will work", isCorrect: false, explanation: "単純未来では、その時点までの継続を表せません。" },
        { text: "will be working", isCorrect: false, explanation: "未来進行形は進行中であることは表せますが、継続時間（for ten hours）は強調できません。" }
      ]
    },
    tense: "Future Perfect Continuous",
    topic: "Workplace",
    lengthWords: 13
  },
  {
    id: "48",
    text: "How long have you been looking for a job?",
    translation: "どのくらいの間、仕事を探しているのですか？",
    hint: {
      sentenceWithBlank: "How long [____] you [____] for a job?",
      options: [
        { text: "have / been looking", isCorrect: true, explanation: "How long でまだ続いている動作について尋ねるときは、現在完了進行形を使います。" },
        { text: "are / looking", isCorrect: false, explanation: "現在進行形は「今何を探しているか」を尋ねる形で、期間を尋ねるのには使いません。" },
        { text: "do / look", isCorrect: false, explanation: "習慣的な動作ではないので、現在形は合いません。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "49",
    text: "We had been driving for miles before we realized we were lost.",
    translation: "道に迷ったと気づくまで、私たちは何マイルも車を走らせていました。",
    hint: {
      sentenceWithBlank: "We [____] for miles before we realized we were lost.",
      options: [
        { text: "had been driving", isCorrect: true, explanation: "過去完了進行形は、過去のある出来事まで続いた動作を表します。" },
        { text: "have been driving", isCorrect: false, explanation: "文中の出来事はすべて過去（realized, were）なので、現在完了は使えません。" },
        { text: "were driving", isCorrect: false, explanation: "過去進行形では、別の動作までの積み重なった継続を表せません。" }
      ]
    },
    tense: "Past Perfect Continuous",
    topic: "Travel",
    lengthWords: 12
  },
  {
    id: "50",
    text: "She has been running, so she is out of breath.",
    translation: "彼女は走ってきたので、息を切らしています。",
    hint: {
      sentenceWithBlank: "She [____], so she is out of breath.",
      options: [
        { text: "has been running", isCorrect: true, explanation: "現在完了進行形は、今の状態（息切れ）を直前まで続いた動作で説明します。" },
        { text: "is running", isCorrect: false, explanation: "現在進行形は「今まさに走っている」という意味になります。" },
        { text: "ran", isCorrect: false, explanation: "過去形は走った事実に焦点があり、動作と今の結果のつながりは現在完了進行形のほうがよく表せます。" }
      ]
    },
    tense: "Present Perfect Continuous",
    topic: "General",
    lengthWords: 10
  },
    {
    id: "51",
    text: "You must wear a seatbelt while driving.",
    translation: "運転中はシートベルトを着用しなければなりません。",
    hint: {
      sentenceWithBlank: "You [____] wear a seatbelt while driving.",
      options: [
        { text: "must", isCorrect: true, explanation: "must は強い義務や規則を表します。" },
        { text: "have", isCorrect: false, explanation: "have の後には to が必要です（have to）。" },
        { text: "can", isCorrect: false, explanation: "can は能力や可能性を表し、規則を述べるここでは使えません。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "Travel",
    lengthWords: 7
  },
  {
    id: "52",
    text: "You don't have to pay for the tickets; they are free.",
    translation: "チケット代を払う必要はありません。無料ですから。",
    hint: {
      sentenceWithBlank: "You [____] pay for the tickets; they are free.",
      options: [
        { text: "don't have to", isCorrect: true, explanation: "「〜する必要がない」という意味です。" },
        { text: "mustn't", isCorrect: false, explanation: "「〜してはいけない」という強い禁止を表します。" },
        { text: "shouldn't", isCorrect: false, explanation: "「〜しないほうがよい」という助言で、必要がないという事実の説明には合いません。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "53",
    text: "You shouldn't eat so much fast food.",
    translation: "ファストフードをそんなにたくさん食べないほうがいいですよ。",
    hint: {
      sentenceWithBlank: "You [____] eat so much fast food.",
      options: [
        { text: "shouldn't", isCorrect: true, explanation: "「〜しないほうがよい」という助言を表します。" },
        { text: "don't have to", isCorrect: false, explanation: "「〜する必要はない」という意味で、助言にはなりません。" },
        { text: "can't", isCorrect: false, explanation: "禁止や不可能を表します。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "Daily Life",
    lengthWords: 7
  },
  {
    id: "54",
    text: "He might come to the meeting, but he isn't sure.",
    translation: "彼は会議に来るかもしれませんが、本人もまだ分かりません。",
    hint: {
      sentenceWithBlank: "He [____] come to the meeting, but he isn't sure.",
      options: [
        { text: "might", isCorrect: true, explanation: "might は「〜かもしれない」という低い可能性を表します。" },
        { text: "must", isCorrect: false, explanation: "強い確信や義務を表します。" },
        { text: "can", isCorrect: false, explanation: "can は、この先の一回きりの出来事の可能性を表すのには普通使いません。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "Workplace",
    lengthWords: 10
  },
  {
    id: "55",
    text: "May I borrow your pen for a moment?",
    translation: "少しペンをお借りしてもいいですか？",
    hint: {
      sentenceWithBlank: "[____] I borrow your pen for a moment?",
      options: [
        { text: "May", isCorrect: true, explanation: "may は丁寧に許可を求めるときに使います。" },
        { text: "Must", isCorrect: false, explanation: "義務を表す語で、依頼には使いません。" },
        { text: "Should", isCorrect: false, explanation: "「〜すべきでしょうか」という助言を求める形になります。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "56",
    text: "She can't be at home; I saw her at the office five minutes ago.",
    translation: "彼女が家にいるはずがありません。5分前にオフィスで見かけましたから。",
    hint: {
      sentenceWithBlank: "She [____] be at home; I saw her at the office five minutes ago.",
      options: [
        { text: "can't", isCorrect: true, explanation: "can't は「〜のはずがない」という確信のある否定の推量を表します。" },
        { text: "mustn't", isCorrect: false, explanation: "強い禁止を表す形で、論理的な推論には使いません。" },
        { text: "might not", isCorrect: false, explanation: "「〜ではないかもしれない」という弱い推量で、確信のあるここでは合いません。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 14
  },
  {
    id: "57",
    text: "He must have forgotten about our appointment.",
    translation: "彼は私たちの約束を忘れてしまったに違いありません。",
    hint: {
      sentenceWithBlank: "He [____] about our appointment.",
      options: [
        { text: "must have forgotten", isCorrect: true, explanation: "must + have + 過去分詞で、過去のことについての確信のある推量を表します。" },
        { text: "must forget", isCorrect: false, explanation: "現在または未来のことを指す形です。" },
        { text: "should have forgotten", isCorrect: false, explanation: "「忘れるべきだったのに」という意味になります。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 7
  },
  {
    id: "58",
    text: "You should have told me the truth earlier.",
    translation: "もっと早く本当のことを言ってくれればよかったのに。",
    hint: {
      sentenceWithBlank: "You [____] me the truth earlier.",
      options: [
        { text: "should have told", isCorrect: true, explanation: "should + have + 過去分詞は、しなかったことへの非難や後悔を表します。" },
        { text: "should tell", isCorrect: false, explanation: "現在または未来のことを指す形です。" },
        { text: "must have told", isCorrect: false, explanation: "「言ったに違いない」という推量の意味になります。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "59",
    text: "I could play the piano when I was a child.",
    translation: "子どものころ、私はピアノが弾けました。",
    hint: {
      sentenceWithBlank: "I [____] play the piano when I was a child.",
      options: [
        { text: "could", isCorrect: true, explanation: "could は can の過去形で、過去の能力を表します。" },
        { text: "can", isCorrect: false, explanation: "現在の能力を表す形です。" },
        { text: "must", isCorrect: false, explanation: "義務を表し、能力は表しません。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "60",
    text: "We had better leave now before it gets dark.",
    translation: "暗くならないうちに、もう出発したほうがいいですね。",
    hint: {
      sentenceWithBlank: "We [____] leave now before it gets dark.",
      options: [
        { text: "had better", isCorrect: true, explanation: "had better は「〜したほうがよい」という強めの助言や警告を表します。" },
        { text: "would rather", isCorrect: false, explanation: "「むしろ〜したい」という好みを表します。" },
        { text: "should to", isCorrect: false, explanation: "should の後に to は付けません。" }
      ]
    },
    tense: "Modal Verbs",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "61",
    text: "If you heat ice, it melts.",
    translation: "氷を熱すると溶けます。",
    hint: {
      sentenceWithBlank: "If you heat ice, it [____].",
      options: [
        { text: "melts", isCorrect: true, explanation: "一般的な事実を表すゼロ条件文では、両方の節で現在形を使います。" },
        { text: "will melt", isCorrect: false, explanation: "科学的な事実には未来形ではなく現在形を使います。" },
        { text: "melted", isCorrect: false, explanation: "過去形はここでは合いません。" }
      ]
    },
    tense: "Conditionals",
    topic: "Science",
    lengthWords: 6
  },
  {
    id: "62",
    text: "If I have time tonight, I will call you.",
    translation: "今夜時間があれば、電話します。",
    hint: {
      sentenceWithBlank: "If I [____] time tonight, I [____] you.",
      options: [
        { text: "have / will call", isCorrect: true, explanation: "第1条件文では、条件節が現在形（have）、主節が未来形（will call）になります。" },
        { text: "will have / call", isCorrect: false, explanation: "if の条件節では未来形（will）は使いません。" },
        { text: "had / would call", isCorrect: false, explanation: "現実的でない状況を表す第2条件文の形で、ここは実現しうる条件です。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "63",
    text: "Unless you study hard, you won't pass the exam.",
    translation: "一生懸命勉強しなければ、試験には合格できませんよ。",
    hint: {
      sentenceWithBlank: "[____] you study hard, you won't pass the exam.",
      options: [
        { text: "Unless", isCorrect: true, explanation: "unless は「もし〜でなければ（if not）」の意味で、すでに否定を含んでいます。" },
        { text: "If", isCorrect: false, explanation: "if だと「勉強すれば合格しない」となり、意味が通りません。" },
        { text: "Without", isCorrect: false, explanation: "前置詞なので、後ろには名詞か動名詞が必要です。" }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 9
  },
  {
    id: "64",
    text: "As soon as I arrive, I will let you know.",
    translation: "着いたらすぐにお知らせします。",
    hint: {
      sentenceWithBlank: "[____] I arrive, I will let you know.",
      options: [
        { text: "As soon as", isCorrect: true, explanation: "「〜するとすぐに」の意味で、時を表す副詞節の中では現在形を使います。" },
        { text: "Until", isCorrect: false, explanation: "「〜するまで」となり、文の意味が変わってしまいます。" },
        { text: "While", isCorrect: false, explanation: "「〜している間」の意味で、続いている動作について使います。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "65",
    text: "If I won the lottery, I would buy a house by the sea.",
    translation: "もし宝くじに当たったら、海のそばに家を買うのですが。",
    hint: {
      sentenceWithBlank: "If I [____] the lottery, I [____] a house by the sea.",
      options: [
        { text: "won / would buy", isCorrect: true, explanation: "第2条件文では、条件節が過去形（won）、主節が would + 動詞の原形になります。" },
        { text: "win / would buy", isCorrect: false, explanation: "条件節が現在形では、主節の would と形がそろいません。" },
        { text: "won / will buy", isCorrect: false, explanation: "条件節が過去形のときは、will ではなく would を使います。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 13
  },
  {
    id: "66",
    text: "What would you do if you were in my shoes?",
    translation: "あなたが私の立場だったら、どうしますか？",
    hint: {
      sentenceWithBlank: "What [____] if you [____] in my shoes?",
      options: [
        { text: "would you do / were", isCorrect: true, explanation: "第2条件文では、疑問文は would + 原形、条件節の be 動詞はどの人称でも were を使います。" },
        { text: "will you do / are", isCorrect: false, explanation: "第1条件文の形ですが、in my shoes は仮定の状況を示しています。" },
        { text: "do you do / was", isCorrect: false, explanation: "第2条件文の文法として正しくない形です。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 10
  },
  {
    id: "67",
    text: "If I had more free time, I would take up photography.",
    translation: "もっと自由な時間があれば、写真を始めるのですが。",
    hint: {
      sentenceWithBlank: "If I [____] more free time, I [____] take up photography.",
      options: [
        { text: "had / would", isCorrect: true, explanation: "第2条件文で、現在の事実に反する仮定（had）とその結果（would）を表します。" },
        { text: "have / will", isCorrect: false, explanation: "現実的な条件を表す形ですが、ここでは実現していない状況が前提です。" },
        { text: "had had / would have", isCorrect: false, explanation: "第3条件文の形で、過去のことを表します。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 11
  },
  {
    id: "68",
    text: "If we had left earlier, we wouldn't have missed the flight.",
    translation: "もっと早く出発していれば、飛行機に乗り遅れなかったのに。",
    hint: {
      sentenceWithBlank: "If we [____] earlier, we [____] the flight.",
      options: [
        { text: "had left / wouldn't have missed", isCorrect: true, explanation: "第3条件文では、過去の事実に反する条件（過去完了）と結果（would have + 過去分詞）を使います。" },
        { text: "left / wouldn't miss", isCorrect: false, explanation: "第2条件文の形で、現在のことを表します。" },
        { text: "had left / wouldn't miss", isCorrect: false, explanation: "混合条件文になってしまい、どちらも過去の話であるこの文には合いません。" }
      ]
    },
    tense: "Conditionals",
    topic: "Travel",
    lengthWords: 11
  },
  {
    id: "69",
    text: "I wouldn't have known about the project if you hadn't told me.",
    translation: "あなたが教えてくれなかったら、私はそのプロジェクトのことを知らないままでした。",
    hint: {
      sentenceWithBlank: "I wouldn't [____] about the project if you hadn't told me.",
      options: [
        { text: "have known", isCorrect: true, explanation: "第3条件文の主節は、would have + 過去分詞の形になります。" },
        { text: "know", isCorrect: false, explanation: "wouldn't know は現在のことを表す形です。" },
        { text: "knew", isCorrect: false, explanation: "would have の後には過去分詞（known）が必要で、過去形は使えません。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 12
  },
  {
    id: "70",
    text: "If I had studied harder at university, I would have a better job now.",
    translation: "大学でもっとしっかり勉強していたら、今はもっといい仕事に就いているでしょう。",
    hint: {
      sentenceWithBlank: "If I [____] harder at university, I [____] a better job now.",
      options: [
        { text: "had studied / would have", isCorrect: true, explanation: "混合条件文で、条件は過去（過去完了）、結果は現在（would + 原形）を表します。" },
        { text: "studied / would have", isCorrect: false, explanation: "大学時代はすでに終わったことなので、過去完了が必要です。" },
        { text: "had studied / would have had", isCorrect: false, explanation: "結果は現在（now）のことなので、would have had ではなく would have を使います。" }
      ]
    },
    tense: "Conditionals",
    topic: "Education",
    lengthWords: 14
  },
  {
    id: "71",
    text: "If he spoke French, he would have translated that document yesterday.",
    translation: "彼がフランス語を話せたら、昨日あの書類を翻訳してくれたでしょうに。",
    hint: {
      sentenceWithBlank: "If he [____] French, he [____] that document yesterday.",
      options: [
        { text: "spoke / would have translated", isCorrect: true, explanation: "混合条件文で、条件は今も変わらない事実（過去形）、結果は過去のこと（would have + 過去分詞）を表します。" },
        { text: "had spoken / would translate", isCorrect: false, explanation: "語学力は今も続く事実、翻訳は昨日のことなので、形が逆になっています。" },
        { text: "spoke / would translate", isCorrect: false, explanation: "翻訳は昨日（yesterday）のことなので、would have + 過去分詞が必要です。" }
      ]
    },
    tense: "Conditionals",
    topic: "Workplace",
    lengthWords: 11
  },
  {
    id: "72",
    text: "I wish I had more money.",
    translation: "もっとお金があればいいのに。",
    hint: {
      sentenceWithBlank: "I [____] I [____] more money.",
      options: [
        { text: "wish / had", isCorrect: true, explanation: "I wish + 過去形で、現在の状況についての残念な気持ちを表します。" },
        { text: "wish / have", isCorrect: false, explanation: "I wish の後で現在のことを言うときは、過去形を使います。" },
        { text: "hope / had", isCorrect: false, explanation: "hope の後には、現在形や未来形など実際の時制を使うのが普通です。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 6
  },
  {
    id: "73",
    text: "I wish you wouldn't make so much noise.",
    translation: "そんなに騒がないでほしいのですが。",
    hint: {
      sentenceWithBlank: "I wish you [____] make so much noise.",
      options: [
        { text: "wouldn't", isCorrect: true, explanation: "I wish + would / wouldn't は、相手の今の振る舞いへのいら立ちを表します。" },
        { text: "don't", isCorrect: false, explanation: "I wish の後で現在形は使いません。" },
        { text: "didn't", isCorrect: false, explanation: "使えなくはありませんが、相手の行動へのいら立ちは wouldn't のほうがよく表せます。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 8
  },
  {
    id: "74",
    text: "If only I hadn't said that to her yesterday.",
    translation: "昨日あんなことを彼女に言わなければよかった。",
    hint: {
      sentenceWithBlank: "If [____] I [____] said that to her yesterday.",
      options: [
        { text: "only / hadn't", isCorrect: true, explanation: "If only + 過去完了は、過去のことへの強い後悔を表します。" },
        { text: "only / didn't", isCorrect: false, explanation: "昨日の出来事なので、過去形ではなく過去完了が必要です。" },
        { text: "just / haven't", isCorrect: false, explanation: "If just という形はなく、haven't（現在完了）も昨日のことには使えません。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 9
  },
  {
    id: "75",
    text: "It's time we went home.",
    translation: "そろそろ帰る時間です。",
    hint: {
      sentenceWithBlank: "It's time we [____] home.",
      options: [
        { text: "went", isCorrect: true, explanation: "It's time（そろそろ〜する時間だ）の後では、動詞を過去形にします。" },
        { text: "go", isCorrect: false, explanation: "It's time + 主語 の形では、原形ではなく過去形を使います。" },
        { text: "are going", isCorrect: false, explanation: "この構文で現在進行形は使いません。" }
      ]
    },
    tense: "Conditionals",
    topic: "General",
    lengthWords: 5
  },
    {
    "id": "76",
    "text": "This house was built in 1920.",
    "translation": "この家は1920年に建てられました。",
    "hint": {
      "sentenceWithBlank": "This house [____] in 1920.",
      "options": [
        { "text": "was built", "isCorrect": true, "explanation": "過去の受動態で、過去にものに対して行われた動作を表します。" },
        { "text": "built", "isCorrect": false, "explanation": "家が自分で建つわけではないので、受動態が必要です。" },
        { "text": "is built", "isCorrect": false, "explanation": "1920年という過去の出来事なので、過去形にします。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "77",
    "text": "The interface is being redesigned at the moment.",
    "translation": "インターフェースは今、作り直されているところです。",
    "hint": {
      "sentenceWithBlank": "The interface [____] at the moment.",
      "options": [
        { "text": "is being redesigned", "isCorrect": true, "explanation": "現在進行形の受動態で、今まさに行われている動作を表します（at the moment）。" },
        { "text": "is redesigned", "isCorrect": false, "explanation": "現在形の受動態は習慣的な動作を表し、今この瞬間のことではありません。" },
        { "text": "has been redesigned", "isCorrect": false, "explanation": "現在完了の受動態で、すでに終わった動作を表します。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 8
  },
  {
    "id": "78",
    "text": "The new software has just been installed.",
    "translation": "新しいソフトウェアがちょうどインストールされたところです。",
    "hint": {
      "sentenceWithBlank": "The new software [____].",
      "options": [
        { "text": "has just been installed", "isCorrect": true, "explanation": "現在完了の受動態は、たった今終わった動作を表します（just）。" },
        { "text": "has just installed", "isCorrect": false, "explanation": "ソフトが自分自身をインストールすることはないので、受動態が必要です。" },
        { "text": "was just installed", "isCorrect": false, "explanation": "just と一緒には、普通は過去形ではなく現在完了を使います。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "IT",
    "lengthWords": 7
  },
  {
    "id": "79",
    "text": "English is spoken all over the world.",
    "translation": "英語は世界中で話されています。",
    "hint": {
      "sentenceWithBlank": "English [____] all over the world.",
      "options": [
        { "text": "is spoken", "isCorrect": true, "explanation": "現在形の受動態は、広く知られた事実を述べるときに使います。" },
        { "text": "is speaking", "isCorrect": false, "explanation": "言語が自分で話すことはないので、受動態が必要です。" },
        { "text": "spoke", "isCorrect": false, "explanation": "過去形の能動態です。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "80",
    "text": "The letters will be sent tomorrow morning.",
    "translation": "手紙は明日の朝に発送されます。",
    "hint": {
      "sentenceWithBlank": "The letters [____] tomorrow morning.",
      "options": [
        { "text": "will be sent", "isCorrect": true, "explanation": "未来形の受動態で、未来にものに対して行われる動作を表します。" },
        { "text": "will send", "isCorrect": false, "explanation": "手紙が自分自身を送ることはできません（受動態が必要です）。" },
        { "text": "are sent", "isCorrect": false, "explanation": "現在形の受動態ですが、動作は明日のことです。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "81",
    "text": "I need to get my hair cut this week.",
    "translation": "今週、髪を切ってもらう必要があります。",
    "hint": {
      "sentenceWithBlank": "I need to [____] this week.",
      "options": [
        { "text": "get my hair cut", "isCorrect": true, "explanation": "get / have + もの + 過去分詞で、「他の人に〜してもらう」という意味になります。" },
        { "text": "cut my hair", "isCorrect": false, "explanation": "自分で自分の髪を切るという意味になってしまいます。" },
        { "text": "get cutting my hair", "isCorrect": false, "explanation": "文法的に正しくない形です。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 9
  },
  {
    "id": "82",
    "text": "He had his laptop stolen while he was traveling.",
    "translation": "彼は旅行中にノートパソコンを盗まれました。",
    "hint": {
      "sentenceWithBlank": "He [____] while he was traveling.",
      "options": [
        { "text": "had his laptop stolen", "isCorrect": true, "explanation": "have + もの + 過去分詞は、このような被害の経験を表すのにも使えます。" },
        { "text": "stole his laptop", "isCorrect": false, "explanation": "彼が自分のパソコンを盗んだ、という意味になります。" },
        { "text": "had stolen his laptop", "isCorrect": false, "explanation": "過去完了の能動態で、「彼が（それより前に）盗んでいた」という意味になります。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "83",
    "text": "She was made to clean the whole room by her mother.",
    "translation": "彼女は母親に部屋全体を掃除させられました。",
    "hint": {
      "sentenceWithBlank": "She [____] to clean the whole room by her mother.",
      "options": [
        { "text": "was made", "isCorrect": true, "explanation": "「〜させる」の意味の make を受動態にすると、後ろの動詞に to が必要になります。" },
        { "text": "made", "isCorrect": false, "explanation": "能動態になり、「彼女が〜させた」と意味が変わります。" },
        { "text": "has made", "isCorrect": false, "explanation": "これも能動態で、現在完了の形です。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "Daily Life",
    "lengthWords": 11
  },
  {
    "id": "84",
    "text": "He is said to be the richest man in the city.",
    "translation": "彼はこの街でいちばんの富豪だと言われています。",
    "hint": {
      "sentenceWithBlank": "He [____] to be the richest man in the city.",
      "options": [
        { "text": "is said", "isCorrect": true, "explanation": "is said to は「〜だと言われている」という意味の受動表現です。" },
        { "text": "says", "isCorrect": false, "explanation": "「彼は自分がいちばん裕福だと言っている」という意味になります。" },
        { "text": "said", "isCorrect": false, "explanation": "「彼は言った」という過去形になり、文の構造が崩れます。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "85",
    "text": "It is expected that the prices will drop soon.",
    "translation": "価格は間もなく下がると見られています。",
    "hint": {
      "sentenceWithBlank": "[____] that the prices will drop soon.",
      "options": [
        { "text": "It is expected", "isCorrect": true, "explanation": "一般的な見方や予想を述べる、非人称の受動態です。" },
        { "text": "It expects", "isCorrect": false, "explanation": "It が何かを「予想する」ことはできません（受動態が必要です）。" },
        { "text": "They is expected", "isCorrect": false, "explanation": "They なら are ですが、ここでは非人称の It を使うのが正しい形です。" }
      ]
    },
    "tense": "Passive Voice",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "86",
    "text": "He said that he was working on a new project.",
    "translation": "彼は新しいプロジェクトに取り組んでいると言いました。",
    "hint": {
      "sentenceWithBlank": "He said that he [____] on a new project.",
      "options": [
        { "text": "was working", "isCorrect": true, "explanation": "時制の一致により、直接話法の現在進行形は過去進行形になります。" },
        { "text": "is working", "isCorrect": false, "explanation": "主節が過去（said）なので、従属節も時制をそろえる必要があります。" },
        { "text": "works", "isCorrect": false, "explanation": "現在形は習慣的な動作を表し、時制の一致にも反します。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 10
  },
  {
    "id": "87",
    "text": "She told me she had already seen that movie.",
    "translation": "彼女はその映画をもう見たと私に言いました。",
    "hint": {
      "sentenceWithBlank": "She [____] me she had already seen that movie.",
      "options": [
        { "text": "told", "isCorrect": true, "explanation": "tell は「誰に」を表す目的語（me）を直接取ります。" },
        { "text": "said", "isCorrect": false, "explanation": "相手を示すときは to が必要です（said to me）。" },
        { "text": "spoke", "isCorrect": false, "explanation": "speak は「（言語を）話す」「誰かと話す」の意味で、伝えた内容を導く動詞ではありません。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Entertainment",
    "lengthWords": 9
  },
  {
    "id": "88",
    "text": "They said they would help us the following week.",
    "translation": "彼らは翌週に手伝ってくれると言いました。",
    "hint": {
      "sentenceWithBlank": "They said they [____] help us the following week.",
      "options": [
        { "text": "would", "isCorrect": true, "explanation": "時制の一致により、未来を表す will は would に変わります。" },
        { "text": "will", "isCorrect": false, "explanation": "主節が過去なので、時制の一致に反します。" },
        { "text": "should", "isCorrect": false, "explanation": "「手伝うべきだ」という意味になり、単なる未来の行為ではなくなります。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "89",
    "text": "He asked me where I lived.",
    "translation": "彼は私にどこに住んでいるのか尋ねました。",
    "hint": {
      "sentenceWithBlank": "He asked me where [____].",
      "options": [
        { "text": "I lived", "isCorrect": true, "explanation": "間接疑問文では平叙文と同じ語順を使い、時制も一致させます。" },
        { "text": "did I live", "isCorrect": false, "explanation": "間接疑問文なので、助動詞を使った疑問文の語順にはしません。" },
        { "text": "I live", "isCorrect": false, "explanation": "主節が過去（asked）なので、時制の一致ができていません。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 6
  },
  {
    "id": "90",
    "text": "She asked if I could help her with the task.",
    "translation": "彼女はその作業を手伝ってもらえるかと私に尋ねました。",
    "hint": {
      "sentenceWithBlank": "She asked [____] I could help her with the task.",
      "options": [
        { "text": "if", "isCorrect": true, "explanation": "疑問詞のない疑問文を間接話法にするときは、if または whether を使います。" },
        { "text": "that", "isCorrect": false, "explanation": "that は平叙文を導くときに使い、疑問には使いません。" },
        { "text": "can", "isCorrect": false, "explanation": "文の構造上、ここには入りません。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "91",
    "text": "The manager advised me to review the guidelines.",
    "translation": "マネージャーは私にガイドラインを確認するよう勧めました。",
    "hint": {
      "sentenceWithBlank": "The manager advised me [____] the guidelines.",
      "options": [
        { "text": "to review", "isCorrect": true, "explanation": "advise, ask, tell などの動詞の後では、to 不定詞を使います。" },
        { "text": "reviewing", "isCorrect": false, "explanation": "advise + 人 の後に動名詞は続けられません。" },
        { "text": "review", "isCorrect": false, "explanation": "不定詞に必要な to が抜けています。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "92",
    "text": "He denied making that mistake.",
    "translation": "彼はそのミスをしたことを否定しました。",
    "hint": {
      "sentenceWithBlank": "He denied [____] that mistake.",
      "options": [
        { "text": "making", "isCorrect": true, "explanation": "deny の後には動名詞（V-ing）を使います。" },
        { "text": "to make", "isCorrect": false, "explanation": "deny の後に不定詞は使いません。" },
        { "text": "make", "isCorrect": false, "explanation": "文法的に正しくない形です。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 5
  },
  {
    "id": "93",
    "text": "She promised not to tell anyone his secret.",
    "translation": "彼女は彼の秘密を誰にも言わないと約束しました。",
    "hint": {
      "sentenceWithBlank": "She promised [____] anyone his secret.",
      "options": [
        { "text": "not to tell", "isCorrect": true, "explanation": "不定詞の否定形は、to の前に not を置いてつくります。" },
        { "text": "to not tell", "isCorrect": false, "explanation": "標準的な文法としては語順が適切ではありません。" },
        { "text": "don't tell", "isCorrect": false, "explanation": "ここでは命令形ではなく不定詞が必要です。" }
      ]
    },
    "tense": "Reported Speech",
    "topic": "General",
    "lengthWords": 8
  },
  {
    "id": "94",
    "text": "Although it was raining, we went for a walk.",
    "translation": "雨が降っていましたが、私たちは散歩に出かけました。",
    "hint": {
      "sentenceWithBlank": "[____] it was raining, we went for a walk.",
      "options": [
        { "text": "Although", "isCorrect": true, "explanation": "although は接続詞なので、後ろに主語と動詞のある文が続きます。" },
        { "text": "Despite", "isCorrect": false, "explanation": "despite の後には名詞か動名詞が必要で、文（it was raining）は続けられません。" },
        { "text": "However", "isCorrect": false, "explanation": "通常はつなぎの副詞として、コンマとともに使います。" }
      ]
    },
    "tense": "Conjunctions",
    "topic": "General",
    "lengthWords": 9
  },
  {
    "id": "95",
    "text": "Despite the heavy traffic, we arrived on time.",
    "translation": "ひどい渋滞にもかかわらず、私たちは時間どおりに到着しました。",
    "hint": {
      "sentenceWithBlank": "[____] the heavy traffic, we arrived on time.",
      "options": [
        { "text": "Despite", "isCorrect": true, "explanation": "despite（〜にもかかわらず）は名詞または動名詞と一緒に使います。" },
        { "text": "Although", "isCorrect": false, "explanation": "although の後には、主語と動詞のある文が必要です。" },
        { "text": "In spite", "isCorrect": false, "explanation": "of が必要です（in spite of）。" }
      ]
    },
    "tense": "Conjunctions",
    "topic": "Travel",
    "lengthWords": 8
  },
  {
    "id": "96",
    "text": "Seldom have I seen such a beautiful piece of art.",
    "translation": "これほど美しい芸術作品を見ることは、めったにありません。",
    "hint": {
      "sentenceWithBlank": "[____] such a beautiful piece of art.",
      "options": [
        { "text": "Seldom have I seen", "isCorrect": true, "explanation": "否定・限定の意味を持つ副詞（seldom）が文頭に来ると、倒置が起こります。" },
        { "text": "Seldom I have seen", "isCorrect": false, "explanation": "文頭の seldom の後は、疑問文と同じ語順（倒置）にする必要があります。" },
        { "text": "Have I seldom seen", "isCorrect": false, "explanation": "副詞 seldom を文頭に置かなければなりません。" }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 10
  },
  {
    "id": "97",
    "text": "No sooner had I closed the door than the phone rang.",
    "translation": "ドアを閉めたとたんに、電話が鳴りました。",
    "hint": {
      "sentenceWithBlank": "[____] closed the door than the phone rang.",
      "options": [
        { "text": "No sooner had I", "isCorrect": true, "explanation": "No sooner + 倒置（had I）... than で、「〜するやいなや…」という意味になります。" },
        { "text": "No sooner I had", "isCorrect": false, "explanation": "No sooner の後では、助動詞と主語を倒置させる必要があります。" },
        { "text": "As soon as I had", "isCorrect": false, "explanation": "as soon as は、後半の than とは一緒に使えません。" }
      ]
    },
    "tense": "Inversion",
    "topic": "General",
    "lengthWords": 11
  },
  {
    "id": "98",
    "text": "I look forward to hearing from you soon.",
    "translation": "近いうちにお返事をいただけるのを楽しみにしています。",
    "hint": {
      "sentenceWithBlank": "I look forward [____] from you soon.",
      "options": [
        { "text": "to hearing", "isCorrect": true, "explanation": "look forward to の to は前置詞なので、後ろは動名詞（V-ing）になります。" },
        { "text": "to hear", "isCorrect": false, "explanation": "ここでの to は不定詞の to ではなく前置詞なので、動名詞が必要です。" },
        { "text": "hearing", "isCorrect": false, "explanation": "欠かせない前置詞 to が抜けています。" }
      ]
    },
    "tense": "Gerund",
    "topic": "Workplace",
    "lengthWords": 8
  },
  {
    "id": "99",
    "text": "It's no use crying over spilled milk.",
    "translation": "覆水盆に返らず。／こぼれたミルクを嘆いても仕方がない。",
    "hint": {
      "sentenceWithBlank": "It's no use [____] over spilled milk.",
      "options": [
        { "text": "crying", "isCorrect": true, "explanation": "it's no use（〜しても無駄だ）の後には、必ず動名詞を使います。" },
        { "text": "to cry", "isCorrect": false, "explanation": "この慣用表現で不定詞は使いません。" },
        { "text": "cry", "isCorrect": false, "explanation": "文法的に正しくない形で、ここでは動名詞が必要です。" }
      ]
    },
    "tense": "Gerund",
    "topic": "General",
    "lengthWords": 7
  },
  {
    "id": "100",
    "text": "Not only did he design the layout, but he also wrote the code.",
    "translation": "彼はレイアウトを設計しただけでなく、コードも書きました。",
    "hint": {
      "sentenceWithBlank": "Not only [____] the layout, but he also wrote the code.",
      "options": [
        { "text": "did he design", "isCorrect": true, "explanation": "Not only が文頭に来ると、倒置（疑問文と同じ語順）になります。" },
        { "text": "he designed", "isCorrect": false, "explanation": "文頭の Not only の後に必要な倒置がありません。" },
        { "text": "designed he", "isCorrect": false, "explanation": "倒置は本動詞ではなく、助動詞 did を使ってつくります。" }
      ]
    },
    "tense": "Inversion",
    "topic": "IT",
    "lengthWords": 13
  }
  ]
}
