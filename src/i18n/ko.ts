import type { MessageKey } from './en'

// 한국어 인터페이스 번역. 키와 규칙은 en.ts 참고: 키 하나에 완결된 문장 하나,
// 값 안에 마크업 없음, 숫자 옆에 셀 수 있는 명사 두지 않기.
//
// `Partial`은 의도된 것입니다. 빠진 키는 조용히 영어로 되돌아가므로 번역이
// 완성되지 않아도 안전합니다.
//
// 문체: 설명문은 존댓말(-습니다), 버튼과 라벨은 명사형. 따옴표는 “ ”.
export const ko: Partial<Record<MessageKey, string>> = {
  // 설정 — 페이지 구조
  'settings.menu': '설정 메뉴',
  'settings.brand': '설정',
  'settings.tab.main': '기본 설정',
  'settings.tab.smart': '스마트 문장',
  'settings.tab.patchNotes': '새로운 소식',

  // 기본 설정 — 일반
  'group.general': '일반',

  'lang.title': '번역 언어',
  'lang.description': '단어와 문장이 번역되는 언어입니다.',
  'lang.select': '번역 언어 선택',

  'shortcuts.title': '사이트 바로가기',
  'shortcuts.description': '새 탭 왼쪽에 북마크를 세로 막대로 표시합니다.',

  'background.title': '배경',
  'background.description': '새 탭의 배경 이미지입니다.',
  'background.none': '없음',
  'background.custom': '직접 고른 이미지',
  'background.urlPlaceholder': '이미지 주소 입력',
  'background.or': '또는',
  'background.chooseFile': '컴퓨터에서 파일 선택',

  'interface.title': '표시 언어',
  'interface.description': 'LingoTab 자체의 버튼과 라벨 언어입니다. “자동”으로 두면 번역 언어를 따라갑니다.',
  'interface.select': '표시 언어 선택',
  'interface.auto': '자동',

  'theme.title': '테마',
  'theme.description': '밝은 모드 또는 어두운 모드.',
  'theme.switch': '테마 전환',
  'theme.dark': '어둡게',
  'theme.light': '밝게',

  'dictionary.title': '사전 출처',
  'dictionary.description': '단어 뜻과 발음을 어디서 가져올지 정합니다. “자동”은 기본 출처를 먼저 시도하고, 연결되지 않으면 조용히 다른 쪽으로 전환합니다.',
  'dictionary.select': '사전 출처 선택',
  'dictionary.auto': '자동',

  // 기본 설정 — 어휘
  'group.vocabulary': '어휘',
  'vocab.title': '어휘 목록',
  'vocab.description': '새 단어를 어느 목록에서 가져올지 정합니다.',
  'vocab.learningOnly': '학습 중인 단어만',
  'vocab.learningOnlyHint': '(저장한 단어만 표시)',

  // 기본 설정 — 번역과 복습
  'group.translationReview': '번역과 복습',

  'translation.title': '번역 숨기기',
  'translation.description': '번역이 “표시” 버튼 뒤에 숨겨져, 먼저 스스로 확인해 볼 수 있습니다.',

  'repetition.title': '학습한 단어 복습',
  'repetition.description': '이미 학습한 단어를 가끔 보여 주어 잊지 않도록 합니다.',
  'repetition.select': '복습 빈도 선택',
  'repetition.off': '사용 안 함',
  // 한국어에는 복수형이 없어 형태가 모두 같습니다. 그래도 키를 나눠 둔 것은
  // 슬라브어권 언어에 필요하기 때문입니다.
  'repetition.every1': '단어마다',
  'repetition.every2': '단어 2개마다',
  'repetition.every3': '단어 3개마다',
  'repetition.every4': '단어 4개마다',
  'repetition.every5': '단어 5개마다',
  'repetition.every10': '단어 10개마다',
  'repetition.every20': '단어 20개마다',

  // 기본 설정 — 내 목록
  'group.yourWordLists': '내 목록',
  'wordLists.title': '가져오기와 내보내기',
  'wordLists.description': '단어 목록을 파일로 저장하거나 파일에서 다시 불러옵니다.',
  'wordLists.learning': '학습 중',
  'wordLists.learned': '학습 완료',
  'wordLists.export': '내보내기',
  'wordLists.import': '가져오기',

  // 기본 설정 — 숨긴 단어
  'group.ignoredWords': '숨긴 단어',
  'group.supportMe': '개발자 후원하기',
  'supportMe.description': '이 확장 프로그램이 도움이 되셨다면, 저를 후원해 주시면 좋겠습니다. 앞으로도 계속 개선해 나갈 예정이며, 여러분의 후원이 큰 도움이 됩니다. 감사합니다.',
  'supportMe.button': 'Ko-fi에서 후원하기',
  'ignored.description': '숨긴 단어는 새 탭에 더 이상 나타나지 않습니다. 목록에서 지우면 다시 나타납니다.',
  'ignored.empty': '단어 옆의 이 아이콘을 누르면 새 탭에 나타나지 않습니다.',

  // 공용 단어 목록
  'list.search': '검색',
  'list.empty': '아직 아무것도 없습니다',
  'list.noMatch': '검색 결과가 없습니다',
  'list.remove': '목록에서 삭제',
  'list.sort.oldest': '정렬: 오래된 순',
  'list.sort.newest': '정렬: 최신 순',
  // 정렬되는 것은 영어 단어이므로 글자는 로마자 그대로 둡니다.
  'list.sort.aToZ': '정렬: A → Z',
  'list.sort.zToA': '정렬: Z → A',

  // 가져오기 창
  'import.ignored.title': '숨긴 단어 가져오기',
  'import.ignored.subtitle': '텍스트 파일에서 숨긴 단어 목록에 단어를 추가합니다.',
  'import.learning.title': '학습 중인 단어 가져오기',
  'import.learning.subtitle': '텍스트 파일에서 “학습 중” 목록에 단어를 추가합니다.',
  'import.learned.title': '학습한 단어 가져오기',
  'import.learned.subtitle': '텍스트 파일에서 “학습 완료” 목록에 단어를 추가합니다.',
  'import.requirements': '파일 조건',
  'import.req.matching': '일치: LingoTab 어휘 목록에 있는 단어만',
  'import.req.separators': '구분자: 공백, 탭, 쉼표, 줄바꿈',
  'import.req.length': '단어 길이: 최대 30자',
  'import.req.lowercase': '모든 단어는 소문자로 변환됩니다',
  'import.req.format': '파일 형식: 일반 텍스트 (.txt)',
  'import.found': '찾은 단어:',
  'import.none': '이 파일에서 단어를 찾지 못했습니다. 다른 파일을 시도해 보세요.',
  'import.readError': '파일을 읽을 수 없습니다. 일반 텍스트 파일인지 확인한 뒤 다시 시도해 주세요.',
  'import.cancel': '취소',
  'import.confirm': '가져오기',
  'wordLists.importJson': '번역 포함 가져오기 (JSON)',
  'wordLists.exportJson': '번역 포함 내보내기 (JSON)',
  'import.json.title': '번역 포함 단어 가져오기',
  'import.json.subtitle': '.json 파일에서 직접 입력한 번역이 있는 단어를 "학습 중"에 추가합니다. 파일의 번역이 기존 번역을 대체합니다.',
  'import.json.invalid': '올바른 LingoTab 단어 파일이 아닙니다. 형식에 맞는 JSON인지 확인하세요.',
  'import.json.newWords': '새 단어:',
  'import.json.translations': '번역:',
  'import.json.replaced': '대체될 내 번역:',
  'import.json.skipped': '건너뜀 (한 단어가 아님):',
  'aiPrompt.title': 'AI로 단어 번역하기',
  'aiPrompt.description': '"학습 중"에서 아직 내 번역이 없는 단어가 이미 들어 있는 프롬프트를 복사하세요. ChatGPT, Claude 등 AI 채팅에 붙여 넣고, 답변을 .json 파일로 저장한 뒤 위의 "번역 포함 가져오기 (JSON)"로 가져오세요.',
  'aiPrompt.wordsCount': '내 번역이 없는 단어:',
  'aiPrompt.copy': '프롬프트 복사',
  'aiPrompt.copied': '복사했습니다!',
  'file.select': '파일 선택',

  // 스마트 문장 — 일반
  'smart.enable.title': '스마트 문장',
  'smart.enable.description': '새 탭에서 단어를 외우는 대신 문장 만들기를 연습합니다.',
  'smart.hints.title': '힌트',
  'smart.hints.description': '문장마다 객관식 문법 문제를 함께 보여 줍니다.',
  'smart.mix.title': '단어와 문장 번갈아 보기',
  'smart.mix.description': '단어와 문장 연습을 번갈아 표시합니다.',
  'smart.wordsPer.title': '문장당 단어 수',
  'smart.wordsPer.description': '다음 문장이 나오기 전까지 보여 줄 단어 수입니다.',

  // 스마트 문장 — 문장 세트
  'group.sentencePack': '문장 세트',
  'smart.builtIn.title': '기본 제공 세트',
  'smart.builtIn.description': 'LingoTab에 포함된 문장 세트로, 이미 사용 언어로 번역되어 있습니다.',
  'smart.create.title': '직접 만들기',
  'smart.create.description': '준비된 프롬프트를 복사해 아무 AI 채팅에 붙여넣으세요. 몇 가지 질문을 한 뒤, 아래에서 가져올 수 있는 파일을 돌려줍니다.',
  'smart.create.copy': '프롬프트 복사',
  'smart.create.copied': '복사했습니다',
  'smart.import.title': '세트 가져오기',
  'smart.import.description': '파일에서 문장 세트를 불러옵니다.',
  'smart.import.choose': '파일 선택',
  'smart.import.change': '파일 변경',
  'smart.preview.title': '미리보기',
  'smart.preview.description': '아래 문장을 확인하세요. 이 세트를 사용하려면 적용을, 아니면 버리기를 선택합니다.',
  'smart.preview.accept': '적용',
  'smart.preview.discard': '버리기',

  // 새 탭 — 표시 버튼
  'word.showWord': '단어 표시',
  'word.showTranslation': '번역 표시',

  // 새 탭 — 빈 화면과 오류
  'common.settings': '설정',
  'empty.noLists.title': '선택한 목록이 없습니다',
  'empty.noLists.description': '어휘 목록을 하나 이상 선택하면 시작할 수 있습니다.',
  'empty.wordError.message': '이 단어의 뜻을 찾지 못했습니다.',
  'empty.wordError.ignore': '단어 숨기기',
  'empty.wordError.newWord': '다른 단어',
  'empty.offline.title': '오프라인 상태입니다',
  'empty.offline.description': '인터넷에 연결하면 단어 뜻을 불러올 수 있습니다.',
  'empty.learnedAll.title': '축하합니다!',
  'empty.learnedAll.description': '목록에 있는 단어를 모두 학습했습니다. 훌륭해요!',
  'empty.noPack': '아직 문장 세트가 없습니다. 설정에서 기본 제공 세트를 켜거나 직접 만든 세트를 가져오세요.',
  'empty.learningTitle': '여기에 내 단어가 표시됩니다',
  'empty.learning': '단어 카드의 북마크 아이콘이나 아래의 "단어 추가" 버튼으로 추가하세요.',
  'learningOnlyTip.text': '이 단어들만 학습하려면 설정 → 어휘 목록에서 "학습 중인 단어만"을 켜세요.',
  'learningOnlyTip.openSettings': '설정 열기',
  'empty.learned': '“학습 중” 목록의 단어에서 이 아이콘을 누르면 여기로 옮겨집니다.',

  // 새 탭 — 상단 바
  'nav.search': '단어 검색',
  'nav.options': '설정',
  'nav.inventory': '모든 단어',
  'nav.inventorySubtitle': '목록에 있는 모든 단어 보기',
  'nav.history': '기록',
  'nav.historySubtitle': '최근에 표시된 단어',
  'nav.markedWords': '표시해 둔 단어',
  'nav.close': '닫기',

  // 새 탭 — 단어에 대한 동작
  'action.ignore': '단어 숨기기',
  'action.markLearning': '“학습 중”에 추가',
  'action.markLearned': '“학습 완료”로 이동',
  'action.listen': '발음 듣기',
  'action.next': '다음',
  'repetitionBlock.title': '학습한 단어 복습',

  // 새 탭 — 사이트 바로가기
  'shortcut.add': '바로가기 추가',
  'shortcut.edit': '바로가기 편집',
  'shortcut.remove': '삭제',
  'shortcut.name': '이름',
  'shortcut.url': '주소',
  'shortcut.nameDuplicated': '이미 있는 이름입니다.',
  'shortcut.cancel': '취소',
  'shortcut.done': '완료',
  'action.editTranslation': '번역 편집',
  'editWord.title': '단어 편집',
  'editWord.word': '단어',
  'editWord.translation': '번역',
  'editWord.translationPlaceholder': '비워 두면 자동 번역을 사용합니다',
  'editWord.invalidWord': '공백이나 쉼표 없이 한 단어만 입력하세요.',
  'editWord.duplicateWord': '이 단어는 이미 목록에 있습니다.',
  'editWord.addTitle': '단어 추가',
  'editWord.translate': '자동 번역',
  'editWord.translateFailed': '자동 번역을 사용할 수 없습니다. 직접 입력하세요.',
  'editWord.movedFromLearned': '이 단어는 "학습 완료"에서 "학습 중"으로 이동됩니다.',
  'editWord.movedFromIgnored': '이 단어는 무시 목록에서 "학습 중"으로 이동됩니다.',
  'list.sort.ownFirst': '정렬: 내 번역 먼저',
  'word.ownTranslation': '내 번역',

  // 새 탭 — 번역 문제
  'translateFailure.quota.label': '오늘 한도에 도달했습니다',
  'translateFailure.quota.message': '무료 번역 서비스가 오늘 한도를 모두 사용했습니다. 이미 열어 본 단어는 저장된 번역을 계속 보여 주며, 새 번역은 내일 다시 시작됩니다.',
  'translateFailure.unavailable.label': '번역을 사용할 수 없습니다',
  'translateFailure.unavailable.message': '지금은 어떤 번역 서비스에도 연결할 수 없습니다. 이미 열어 본 단어는 저장된 번역을 계속 보여 줍니다.',
  'translateFailure.dismiss': '닫기',
  'translateFailure.translating': '번역 중…',
  'translateFailure.tooltipQuota': '오늘 번역 한도에 도달했습니다',
  'translateFailure.tooltipUnavailable': '번역을 사용할 수 없습니다',

  // 새 탭 — 문장 연습
  'practice.translatePrompt': '영어로 번역하세요:',
  'practice.inputPlaceholder': '여기에 영어 문장을 입력하세요',
  'practice.inputLabel': '영어 문장 입력',
  'practice.check': '확인',
  'practice.grammarReference': '문법 참고',
}
