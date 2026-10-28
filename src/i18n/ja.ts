import type { MessageKey } from './en'

// 日本語のインターフェース翻訳。キーとルールは en.ts を参照：1 キーにつき 1 つの
// 完結した文、値の中にマークアップを入れない、数字の隣に数える名詞を置かない。
//
// `Partial` は意図的：足りないキーは静かに英語へフォールバックするので、
// 未完成の翻訳でも安全に出せる。
//
// 文体は説明文が「です・ます」、ボタンやラベルは体言止め。
// 括弧は「」、句読点は。と、を使う。
export const ja: Partial<Record<MessageKey, string>> = {
  // 設定 — ページの骨組み
  'settings.menu': '設定メニュー',
  'settings.brand': '設定',
  'settings.tab.main': '基本設定',
  'settings.tab.smart': 'スマートセンテンス',
  'settings.tab.patchNotes': '更新情報',

  // 基本設定 — 一般
  'group.general': '一般',

  'lang.title': '翻訳先の言語',
  'lang.description': '単語や文章を翻訳する言語です。',
  'lang.select': '翻訳先の言語を選択',

  'shortcuts.title': 'サイトショートカット',
  'shortcuts.description': '新しいタブの左側にブックマークをバーで表示します。',

  'background.title': '背景',
  'background.description': '新しいタブの背景画像です。',
  'background.none': 'なし',
  'background.custom': 'カスタム画像',
  'background.urlPlaceholder': '画像のURLを入力',
  'background.or': 'または',
  'background.chooseFile': 'パソコンからファイルを選択',

  'interface.title': '表示言語',
  'interface.description': 'LingoTab のボタンやラベルの言語です。「自動」にすると翻訳先の言語に合わせます。',
  'interface.select': '表示言語を選択',
  'interface.auto': '自動',

  'theme.title': 'テーマ',
  'theme.description': 'ライトまたはダークの外観。',
  'theme.switch': 'テーマを切り替え',
  'theme.dark': 'ダーク',
  'theme.light': 'ライト',

  'dictionary.title': '辞書の取得元',
  'dictionary.description': '単語の意味と発音の取得元です。「自動」はメインの取得元を試し、つながらないときは静かにもう一方へ切り替えます。',
  'dictionary.select': '辞書の取得元を選択',
  'dictionary.auto': '自動',

  // 基本設定 — 単語
  'group.vocabulary': '単語',
  'vocab.title': '単語リスト',
  'vocab.description': '新しい単語をどのリストから選ぶか。',
  'vocab.learningOnly': '学習中の単語のみ',
  'vocab.learningOnlyHint': '(保存した単語だけを表示)',

  // 基本設定 — 翻訳と復習
  'group.translationReview': '翻訳と復習',

  'translation.title': '翻訳を隠す',
  'translation.description': '翻訳は「表示」ボタンの裏に隠れます。先に自分で試せます。',

  'repetition.title': '学習済みの単語の復習',
  'repetition.description': 'すでに学習した単語をときどき表示して、忘れないようにします。',
  'repetition.select': '復習の頻度を選択',
  'repetition.off': 'オフ',
  // 日本語には複数形がないので、ここはどの頻度も同じ形。
  // それでもキーを分けたままにしているのは、スラブ系の言語に必要だから。
  'repetition.every1': '1単語ごと',
  'repetition.every2': '2単語ごと',
  'repetition.every3': '3単語ごと',
  'repetition.every4': '4単語ごと',
  'repetition.every5': '5単語ごと',
  'repetition.every10': '10単語ごと',
  'repetition.every20': '20単語ごと',

  // 基本設定 — あなたのリスト
  'group.yourWordLists': 'あなたのリスト',
  'wordLists.title': 'インポートとエクスポート',
  'wordLists.description': '単語リストをファイルに保存したり、ファイルから読み込んだりできます。',
  'wordLists.learning': '学習中',
  'wordLists.learned': '学習済み',
  'wordLists.export': 'エクスポート',
  'wordLists.import': 'インポート',

  // 基本設定 — 非表示の単語
  'group.ignoredWords': '非表示の単語',
  'group.supportMe': '開発者を応援',
  'supportMe.description': 'この拡張機能がお役に立てたなら、応援していただけるとうれしいです。今後も改善を続けていく予定で、皆さんの応援が大きな支えになります。ありがとうございます。',
  'supportMe.button': 'Ko-fi で応援する',
  'ignored.description': '非表示にした単語は新しいタブに出てきません。リストから削除すると元に戻ります。',
  'ignored.empty': '単語のこのアイコンを押すと、新しいタブに表示されなくなります。',

  // 共通の単語リスト
  'list.search': '検索',
  'list.empty': 'まだ何もありません',
  'list.noMatch': '見つかりませんでした',
  'list.remove': 'リストから削除',
  'list.sort.oldest': '並び順: 古い順',
  'list.sort.newest': '並び順: 新しい順',
  // 並ぶのは英単語なので、文字はラテン文字のまま。
  'list.sort.aToZ': '並び順: A→Z',
  'list.sort.zToA': '並び順: Z→A',

  // インポート画面
  'import.ignored.title': '非表示の単語をインポート',
  'import.ignored.subtitle': 'テキストファイルから非表示リストに単語を追加します。',
  'import.learning.title': '学習中の単語をインポート',
  'import.learning.subtitle': 'テキストファイルから「学習中」リストに単語を追加します。',
  'import.learned.title': '学習済みの単語をインポート',
  'import.learned.subtitle': 'テキストファイルから「学習済み」リストに単語を追加します。',
  'import.requirements': 'ファイルの条件',
  'import.req.matching': '照合: LingoTab の単語リストにある単語のみ',
  'import.req.separators': '区切り: スペース、タブ、カンマ、改行',
  'import.req.length': '単語の長さ: 30文字まで',
  'import.req.lowercase': 'すべて小文字に変換されます',
  'import.req.format': 'ファイル形式: プレーンテキスト (.txt)',
  'import.found': '見つかった単語:',
  'import.none': 'このファイルには単語が見つかりませんでした。別のファイルをお試しください。',
  'import.readError': 'ファイルを読み込めませんでした。プレーンテキストファイルか確認して、もう一度お試しください。',
  'import.cancel': 'キャンセル',
  'import.confirm': 'インポート',
  'wordLists.importJson': '翻訳付きでインポート (JSON)',
  'wordLists.exportJson': '翻訳付きでエクスポート (JSON)',
  'import.json.title': '翻訳付きの単語をインポート',
  'import.json.subtitle': '.json ファイルから自分の翻訳と例文付きの単語を「学習中」に追加します。ファイルの翻訳と例文は既存のものを置き換えます。',
  'import.json.invalid': 'LingoTab の単語ファイルではありません。正しい形式の JSON か確認してください。',
  'import.json.newWords': '新しい単語:',
  'import.json.translations': '翻訳:',
  'import.json.replaced': '置き換える翻訳:',
  'import.json.examples': '例文付きの単語:',
  'import.json.replacedExamples': '置き換える例文:',
  'import.json.skipped': 'スキップ (1語ではない):',
  'aiPrompt.title': 'AI で翻訳と例文',
  'aiPrompt.description': '自分の翻訳や例文がない「学習中」の単語を含む、すぐに使えるプロンプトをコピーします。ChatGPT や Claude などの AI チャットに貼り付け、返答を .json ファイルとして保存し、上の「翻訳付きでインポート (JSON)」で読み込んでください。',
  'aiPrompt.wordsCount': '自分の翻訳か例文がない単語:',
  'aiPrompt.copy': 'プロンプトをコピー',
  'aiPrompt.copied': 'コピーしました!',
  'file.select': 'ファイルを選択',

  // スマートセンテンス — 一般
  'smart.enable.title': 'スマートセンテンス',
  'smart.enable.description': '新しいタブで単語を覚える代わりに、文を組み立てる練習をします。',
  'smart.hints.title': 'ヒント',
  'smart.hints.description': '各文に選択式の文法問題を付けます。',
  'smart.mix.title': '単語と文を交互に',
  'smart.mix.description': '単語と文の練習を交互に表示します。',
  'smart.wordsPer.title': '1文あたりの単語数',
  'smart.wordsPer.description': '次の文までに表示する単語の数です。',

  // スマートセンテンス — 例文セット
  'group.sentencePack': '例文セット',
  'smart.builtIn.title': '内蔵セット',
  'smart.builtIn.description': 'LingoTab に付属する例文セットです。すでにあなたの言語に翻訳されています。',
  'smart.create.title': '自分で作る',
  'smart.create.description': '用意されたプロンプトをコピーして、好きなAIチャットに貼り付けてください。いくつか質問されたあと、下からインポートできるファイルが返ってきます。',
  'smart.create.copy': 'プロンプトをコピー',
  'smart.create.copied': 'コピーしました',
  'smart.import.title': 'セットをインポート',
  'smart.import.description': 'ファイルから例文セットを読み込みます。',
  'smart.import.choose': 'ファイルを選択',
  'smart.import.change': 'ファイルを変更',
  'smart.preview.title': 'プレビュー',
  'smart.preview.description': '下の文を確認してください。このセットを使うなら「適用」、使わないなら「破棄」を選びます。',
  'smart.preview.accept': '適用',
  'smart.preview.discard': '破棄',

  // 新しいタブ — 表示ボタン
  'word.showWord': '単語を表示',
  'word.showTranslation': '翻訳を表示',
  'word.examples': '例文',
  'word.examplesSource': '例文の出典:',
  'wordExamples.title': '使用例',
  'wordExamples.description': '単語カードの最初のタブに、その単語を使った実際の文と翻訳を表示します。',
  'editWord.examples': '例文',
  'editWord.addExample': '例文を追加',
  'editWord.examplePlaceholder': '単語を含む文',
  'editWord.exampleTranslationPlaceholder': '翻訳（任意）',
  'editWord.removeExample': '例文を削除',
  'word.ownExamples': 'あなたの例文',
  'action.editExamples': '例文を編集',

  // 新しいタブ — 空の画面とエラー
  'common.settings': '設定',
  'empty.noLists.title': 'リストが選ばれていません',
  'empty.noLists.description': '単語リストを1つ以上選ぶと始められます。',
  'empty.wordError.message': 'この単語の意味は見つかりませんでした。',
  'empty.wordError.ignore': '単語を非表示',
  'empty.wordError.newWord': '別の単語',
  'empty.offline.title': 'オフラインです',
  'empty.offline.description': 'インターネットに接続すると単語の意味を読み込めます。',
  'empty.learnedAll.title': 'やった！',
  'empty.learnedAll.description': 'リストの単語をすべて学習しました。お見事！',
  'empty.noPack': '例文セットがまだありません。設定で内蔵セットをオンにするか、自分のセットをインポートしてください。',
  'empty.learningTitle': 'ここにあなたの単語が表示されます',
  'empty.learning': '単語カードのブックマークアイコン、または下の「単語を追加」ボタンで追加できます。',
  'learningOnlyTip.text': 'これらの単語だけを学習するには、設定 → 単語リストで「学習中の単語のみ」をオンにしてください。',
  'learningOnlyTip.openSettings': '設定を開く',
  'empty.learned': '「学習中」の単語でこのアイコンを押すと、ここに移動します。',

  // 新しいタブ — 上部バー
  'nav.search': '単語を検索',
  'nav.options': '設定',
  'nav.inventory': 'すべての単語',
  'nav.inventorySubtitle': 'リストにあるすべての単語を見る',
  'nav.history': '履歴',
  'nav.historySubtitle': '最近表示された単語',
  'nav.markedWords': 'マークした単語',
  'nav.close': '閉じる',

  // 新しいタブ — 単語の操作
  'action.ignore': '単語を非表示',
  'action.markLearning': '「学習中」に追加',
  'action.markLearned': '「学習済み」に移動',
  'action.listen': '発音を聞く',
  'action.next': '次へ',
  'repetitionBlock.title': '学習済みの単語を復習',

  // 新しいタブ — サイトショートカット
  'shortcut.add': 'ショートカットを追加',
  'shortcut.edit': 'ショートカットを編集',
  'shortcut.remove': '削除',
  'shortcut.name': '名前',
  'shortcut.url': 'アドレス',
  'shortcut.nameDuplicated': 'この名前はすでに使われています。',
  'shortcut.cancel': 'キャンセル',
  'shortcut.done': '完了',
  'action.editTranslation': '翻訳を編集',
  'editWord.title': '単語を編集',
  'editWord.word': '単語',
  'editWord.translation': '翻訳',
  'editWord.translationPlaceholder': '空欄にすると自動翻訳を使います',
  'editWord.invalidWord': 'スペースやカンマを含まない1語で入力してください。',
  'editWord.duplicateWord': 'この単語はすでにリストにあります。',
  'editWord.addTitle': '単語を追加',
  'editWord.translate': '自動翻訳',
  'editWord.translateFailed': '自動翻訳を利用できません。手動で入力してください。',
  'editWord.movedFromLearned': 'この単語は「学習済み」から「学習中」に移動されます。',
  'editWord.movedFromIgnored': 'この単語は無視リストから「学習中」に移動されます。',
  'list.sort.ownFirst': '並べ替え: 自分の翻訳を先に',
  'word.ownTranslation': 'あなたの翻訳',

  // 新しいタブ — 翻訳の不具合
  'translateFailure.quota.label': '1日の上限に達しました',
  'translateFailure.quota.message': '無料の翻訳サービスが1日の上限に達しました。すでに開いた単語は保存された翻訳を表示します。新しい翻訳は明日から再開します。',
  'translateFailure.unavailable.label': '翻訳を利用できません',
  'translateFailure.unavailable.message': 'いまはどの翻訳サービスにも接続できません。すでに開いた単語は保存された翻訳を表示します。',
  'translateFailure.dismiss': '閉じる',
  'translateFailure.translating': '翻訳中…',
  'translateFailure.tooltipQuota': '1日の翻訳上限に達しました',
  'translateFailure.tooltipUnavailable': '翻訳を利用できません',

  // 新しいタブ — 文の練習
  'practice.translatePrompt': '英語に翻訳:',
  'practice.inputPlaceholder': '英文をここに入力',
  'practice.inputLabel': '英文を入力',
  'practice.check': '確認',
  'practice.grammarReference': '文法リファレンス',
}
