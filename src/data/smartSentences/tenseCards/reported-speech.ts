import type { TenseCardSet } from './types'

export const reportedSpeech: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Reported Speech — передача чужих слов без цитирования (своими словами)',
      trRu: true,
    },
    description: {
      text: 'Когда мы пересказываем чьи-то слова, мы обычно делаем это уже после того, как они были сказаны. Поэтому мы делаем «шаг назад» во времени (Backshift): настоящее становится прошлым, а прошлое — «предпрошлым» (Past Perfect). Также меняется точка зрения: «я» превращается в «он/она», а «здесь» становится «там».',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус: пересказываем смысл, поэтому часто сдвигаем время назад и меняем указатели времени/места.',
      trRu: true,
    },
    formula: 'Subject + said / told (+ object) + (that) + clause (сдвиг времени назад)',
    examples: [
      {
        en: '"I am busy now." → He said (that) he was busy then.',
        ru: {
          text: '«Я занят сейчас». → Он сказал, что он занят тогда. (Present Simple → Past Simple. Now превратилось в then).',
          trRu: true,
        },
      },
      {
        en: '"I will call you tomorrow." → She told me she would call me the next day.',
        ru: {
          text: '«Я позвоню тебе завтра». → Она сказала мне, что позвонит на следующий день. (Will → Would. Tomorrow стало the next day).',
          trRu: true,
        },
      },
      {
        en: '"I bought a car." → He said he had bought a car.',
        ru: {
          text: '«Я купил машину». → Он сказал, что купил машину. (Past Simple → Past Perfect, так как покупка была раньше разговора).',
          trRu: true,
        },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: { text: 'Ошибка 1 — Say vs Tell', trRu: true },
        wrong: '❌ He said me that he was tired.',
        right: '✅ He told me that he was tired. / He said that he was tired.',
        note: {
          text: 'Tell требует адресата (кому сказали? — me, him, us). Say используется, когда мы не называем, кому именно это говорилось (либо добавляем to: said to me).',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 2 — Порядок слов в косвенном вопросе', trRu: true },
        wrong: '❌ She asked where was I going.',
        right: '✅ She asked where I was going.',
        note: {
          text: 'В косвенной речи вопрос превращается в обычное утверждение. Порядок слов становится прямым (Подлежащее + Сказуемое). Вспомогательные глаголы (do, does, did) исчезают.',
          trRu: true,
        },
      },
      {
        title: { text: 'Ошибка 3 — Отсутствие смены указателей (Time markers)', trRu: true },
        wrong: '❌ He said he arrived yesterday.',
        right: '✅ He said he had arrived the day before.',
        note: {
          text: 'Если мы пересказываем слова спустя время, "yesterday" (вчера) уже не актуально — меняем на the day before и часто делаем backshift.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Таблица сдвигов и сравнение', trRu: true },

    // ✅ triggers не переводим (как договорились) — тут это именно “шпаргалка сдвигов”
    triggers: [
      { text: 'Present Simple (do) → Past Simple (did)' },
      { text: 'Present Continuous (am doing) → Past Continuous (was doing)' },
      { text: 'Present Perfect (have done) → Past Perfect (had done)' },
      { text: 'Past Simple (did) → Past Perfect (had done)' },
      { text: 'Will → Would' },
      { text: 'Can → Could' },
    ],

    comparison: {
      left: {
        title: 'Direct Speech',
        examples: [
          {
            en: 'Have you finished the report?',
            ru: {
              text: '«Ты закончил отчёт?» (Это вопрос. Интонация вопросительная. Глагол стоит перед подлежащим. Мы находимся в моменте разговора).',
              trRu: true,
            },
          },
        ],
      },
      right: {
        title: 'Reported Speech',
        examples: [
          {
            en: 'My boss asked if I had finished the report.',
            ru: {
              text: 'Мой босс спросил, закончил ли я отчёт. (Это уже не вопрос, а пересказ факта вопроса. Появляется "if". Время сдвинулось назад: Have → Had).',
              trRu: true,
            },
          },
        ],
      },
    },
  },
}