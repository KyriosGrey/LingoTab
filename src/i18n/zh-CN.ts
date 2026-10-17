import type { MessageKey } from './en'

// 简体中文界面翻译。键名和规则见 en.ts：每个键是一句完整的话，值里不放标记，
// 数字旁边不放可数名词。
//
// `Partial` 是有意为之：缺少的键会静默回退到英文，所以翻译不完整也不会出问题。
//
// 排版约定：全角标点（。，：！），引号用“”，中文与拉丁字母、数字之间留一个空格。
export const zhCN: Partial<Record<MessageKey, string>> = {
  // 设置 — 页面框架
  'settings.menu': '设置菜单',
  'settings.brand': '设置',
  'settings.tab.main': '基本设置',
  'settings.tab.smart': '智能句子',
  'settings.tab.patchNotes': '更新内容',

  // 基本设置 — 常规
  'group.general': '常规',

  'lang.title': '翻译语言',
  'lang.description': '单词和句子会被翻译成这种语言。',
  'lang.select': '选择翻译语言',

  'shortcuts.title': '网站快捷方式',
  'shortcuts.description': '在新标签页左侧以竖栏显示你的书签。',

  'background.title': '背景',
  'background.description': '新标签页的背景图片。',
  'background.none': '无',
  'background.custom': '自定义图片',
  'background.urlPlaceholder': '输入图片网址',
  'background.or': '或',
  'background.chooseFile': '从电脑中选择文件',

  'interface.title': '界面语言',
  'interface.description': 'LingoTab 自身按钮和文字的语言。选择“自动”会跟随翻译语言。',
  'interface.select': '选择界面语言',
  'interface.auto': '自动',

  'theme.title': '主题',
  'theme.description': '浅色或深色外观。',
  'theme.switch': '切换主题',
  'theme.dark': '深色',
  'theme.light': '浅色',

  'dictionary.title': '词典来源',
  'dictionary.description': '单词释义和发音的来源。“自动”会先尝试主来源，如果连不上就悄悄切换到备用来源。',
  'dictionary.select': '选择词典来源',
  'dictionary.auto': '自动',

  // 基本设置 — 词汇
  'group.vocabulary': '词汇',
  'vocab.title': '词汇表',
  'vocab.description': '新单词从哪些词汇表中选取。',
  'vocab.learningOnly': '仅学习中的单词',
  'vocab.learningOnlyHint': '(只显示已保存的单词)',

  // 基本设置 — 翻译与复习
  'group.translationReview': '翻译与复习',

  'translation.title': '隐藏翻译',
  'translation.description': '翻译会藏在“显示”按钮后面，你可以先自己想一想。',

  'repetition.title': '复习已学会的单词',
  'repetition.description': '时不时显示一个你已经学会的单词，以免忘记。',
  'repetition.select': '选择复习频率',
  'repetition.off': '关闭',
  // 中文没有复数形式，这几条形式完全一致。键仍然分开，是因为斯拉夫语言需要。
  'repetition.every1': '每个单词',
  'repetition.every2': '每 2 个单词',
  'repetition.every3': '每 3 个单词',
  'repetition.every4': '每 4 个单词',
  'repetition.every5': '每 5 个单词',
  'repetition.every10': '每 10 个单词',
  'repetition.every20': '每 20 个单词',

  // 基本设置 — 你的单词表
  'group.yourWordLists': '你的单词表',
  'wordLists.title': '导入与导出',
  'wordLists.description': '把单词表保存为文件，或者从文件重新载入。',
  'wordLists.learning': '学习中',
  'wordLists.learned': '已学会',
  'wordLists.export': '导出',
  'wordLists.import': '导入',

  // 基本设置 — 已隐藏的单词
  'group.ignoredWords': '已隐藏的单词',
  'ignored.description': '已隐藏的单词不会再出现在新标签页上。把它从列表中删除即可恢复。',
  'ignored.empty': '点击单词旁的这个图标，它就不会再出现在新标签页上。',

  // 通用单词列表
  'list.search': '搜索',
  'list.empty': '还没有内容',
  'list.noMatch': '没有找到匹配的单词',
  'list.remove': '从列表中删除',
  'list.sort.oldest': '排序：最早的在前',
  'list.sort.newest': '排序：最新的在前',
  // 排序的是英文单词，所以字母保持拉丁字母。
  'list.sort.aToZ': '排序：A 到 Z',
  'list.sort.zToA': '排序：Z 到 A',

  // 导入窗口
  'import.ignored.title': '导入已隐藏的单词',
  'import.ignored.subtitle': '从文本文件中把单词添加到隐藏列表。',
  'import.learning.title': '导入学习中的单词',
  'import.learning.subtitle': '从文本文件中把单词添加到“学习中”列表。',
  'import.learned.title': '导入已学会的单词',
  'import.learned.subtitle': '从文本文件中把单词添加到“已学会”列表。',
  'import.requirements': '文件要求',
  'import.req.matching': '匹配：仅限 LingoTab 词汇表中已有的单词',
  'import.req.separators': '分隔符：空格、制表符、逗号或换行',
  'import.req.length': '单词长度：最多 30 个字符',
  'import.req.lowercase': '所有单词都会转换为小写',
  'import.req.format': '文件格式：纯文本 (.txt)',
  'import.found': '找到的单词：',
  'import.none': '这个文件里没有找到单词。请换一个试试。',
  'import.readError': '无法读取该文件。请确认它是纯文本文件，然后重试。',
  'import.cancel': '取消',
  'import.confirm': '导入',
  'wordLists.importJson': '带翻译导入 (JSON)',
  'wordLists.exportJson': '带翻译导出 (JSON)',
  'import.json.title': '导入带翻译的单词',
  'import.json.subtitle': '从 .json 文件将带有你自己翻译的单词添加到“学习中”。文件中的翻译会替换已有的翻译。',
  'import.json.invalid': '这不是有效的 LingoTab 单词文件。请检查是否为正确格式的 JSON。',
  'import.json.newWords': '新单词：',
  'import.json.translations': '翻译：',
  'import.json.replaced': '将替换你的翻译：',
  'import.json.skipped': '已跳过（不是单个单词）：',
  'aiPrompt.title': '用 AI 翻译单词',
  'aiPrompt.description': '复制一段现成的提示词，其中已包含“学习中”里还没有你自己翻译的单词。将它粘贴到 ChatGPT、Claude 或其他 AI 聊天中，把回复保存为 .json 文件，然后用上方的“带翻译导入 (JSON)”导入。',
  'aiPrompt.wordsCount': '没有你翻译的单词：',
  'aiPrompt.copy': '复制提示词',
  'aiPrompt.copied': '已复制！',
  'file.select': '选择文件',

  // 智能句子 — 常规
  'smart.enable.title': '智能句子',
  'smart.enable.description': '在新标签页练习造句，而不是背单个单词。',
  'smart.hints.title': '提示',
  'smart.hints.description': '为每个句子附上一道多选语法题。',
  'smart.mix.title': '单词与句子交替',
  'smart.mix.description': '交替显示单个单词和句子练习。',
  'smart.wordsPer.title': '每句之间的单词数',
  'smart.wordsPer.description': '在下一个句子出现之前显示多少个单词。',

  // 智能句子 — 例句集
  'group.sentencePack': '例句集',
  'smart.builtIn.title': '内置例句集',
  'smart.builtIn.description': 'LingoTab 自带的例句集，已经翻译成你的语言。',
  'smart.create.title': '自己创建',
  'smart.create.description': '复制现成的提示词，粘贴到任意 AI 聊天中。它会问你几个问题，然后给出一个可以在下方导入的文件。',
  'smart.create.copy': '复制提示词',
  'smart.create.copied': '已复制',
  'smart.import.title': '导入例句集',
  'smart.import.description': '从文件中载入例句集。',
  'smart.import.choose': '选择文件',
  'smart.import.change': '更换文件',
  'smart.preview.title': '预览',
  'smart.preview.description': '请查看下面的句子。接受后即可使用这个例句集，或者丢弃它。',
  'smart.preview.accept': '接受',
  'smart.preview.discard': '丢弃',

  // 新标签页 — 显示按钮
  'word.showWord': '显示单词',
  'word.showTranslation': '显示翻译',

  // 新标签页 — 空状态与错误
  'common.settings': '设置',
  'empty.noLists.title': '还没有选择词汇表',
  'empty.noLists.description': '至少选择一个词汇表就可以开始了。',
  'empty.wordError.message': '没有找到这个单词的释义。',
  'empty.wordError.ignore': '隐藏单词',
  'empty.wordError.newWord': '换一个单词',
  'empty.offline.title': '当前处于离线状态',
  'empty.offline.description': '连接到互联网后即可载入单词释义。',
  'empty.learnedAll.title': '太棒了！',
  'empty.learnedAll.description': '你已经学完了词汇表中的所有单词。做得好！',
  'empty.noPack': '还没有例句集。请在设置中打开内置例句集，或者导入你自己的。',
  'empty.learning': '点击单词旁的这个图标，就会把它添加到这里。',
  'empty.learned': '在“学习中”的单词上点击这个图标，就会把它移到这里。',

  // 新标签页 — 顶部栏
  'nav.search': '搜索单词',
  'nav.options': '设置',
  'nav.inventory': '所有单词',
  'nav.inventorySubtitle': '浏览词汇表中的全部单词',
  'nav.history': '历史记录',
  'nav.historySubtitle': '最近显示过的单词',
  'nav.markedWords': '已标记的单词',
  'nav.close': '关闭',

  // 新标签页 — 对单词的操作
  'action.ignore': '隐藏单词',
  'action.markLearning': '加入“学习中”',
  'action.markLearned': '移到“已学会”',
  'action.listen': '朗读',
  'action.next': '下一个',
  'repetitionBlock.title': '复习已学会的单词',

  // 新标签页 — 网站快捷方式
  'shortcut.add': '添加快捷方式',
  'shortcut.edit': '编辑快捷方式',
  'shortcut.remove': '删除',
  'shortcut.name': '名称',
  'shortcut.url': '网址',
  'shortcut.nameDuplicated': '这个名称已经存在。',
  'shortcut.cancel': '取消',
  'shortcut.done': '完成',
  'action.editTranslation': '编辑翻译',
  'editWord.title': '编辑单词',
  'editWord.word': '单词',
  'editWord.translation': '翻译',
  'editWord.translationPlaceholder': '留空则使用自动翻译',
  'editWord.invalidWord': '只能输入一个单词，不含空格或逗号。',
  'editWord.duplicateWord': '该单词已在列表中。',
  'editWord.addTitle': '添加单词',
  'editWord.translate': '自动翻译',
  'editWord.translateFailed': '自动翻译不可用，请手动输入。',
  'editWord.movedFromLearned': '该单词将从“已学会”移到“学习中”。',
  'editWord.movedFromIgnored': '该单词将从已忽略列表移到“学习中”。',
  'list.sort.ownFirst': '排序：我的翻译优先',
  'word.ownTranslation': '你的翻译',

  // 新标签页 — 翻译故障
  'translateFailure.quota.label': '已达每日上限',
  'translateFailure.quota.message': '免费翻译服务已用完今天的额度。已经打开过的单词仍会显示保存的翻译，新的翻译明天恢复。',
  'translateFailure.unavailable.label': '翻译不可用',
  'translateFailure.unavailable.message': '目前无法连接到任何翻译服务。已经打开过的单词仍会显示保存的翻译。',
  'translateFailure.dismiss': '关闭',
  'translateFailure.translating': '翻译中…',
  'translateFailure.tooltipQuota': '已达每日翻译上限',
  'translateFailure.tooltipUnavailable': '翻译不可用',

  // 新标签页 — 句子练习
  'practice.translatePrompt': '翻译成英语：',
  'practice.inputPlaceholder': '在这里输入英文句子',
  'practice.inputLabel': '输入英文句子',
  'practice.check': '检查',
  'practice.grammarReference': '语法参考',
}
