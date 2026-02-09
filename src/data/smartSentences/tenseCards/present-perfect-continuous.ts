import type { TenseCardSet } from './types'

export const presentPerfectContinuous: TenseCardSet = {
  explain: {
    type: 'explain',
    title: {
      text: 'Present Perfect Continuous — действие, которое началось в прошлом и продолжается прямо сейчас (или только что закончилось)',
      trRu: true,
    },
    description: {
      text: 'Используется, когда нам важно подчеркнуть длительность процесса, который связан с настоящим моментом.',
      trRu: true,
    },
    focusNote: {
      text: 'Фокус на том, как долго что-то происходит или на видимом результате долгого процесса.',
      trRu: true,
    },
    formula: 'Subject + have / has + been + V-ing',
    examples: [
      {
        en: 'I have been waiting for you for two hours!',
        ru: { text: 'Я жду тебя уже два часа! (И всё еще продолжаю ждать).', trRu: true },
      },
      {
        en: 'She has not been feeling well lately.',
        ru: { text: 'Она неважно себя чувствует в последнее время', trRu: true },
      },
      {
        en: 'How long have you been learning English?',
        ru: { text: 'Как долго ты уже учишь английский?', trRu: true },
      },
    ],
  },

  mistakes: {
    type: 'mistakes',
    mistakes: [
      {
        title: {
          text: 'Ошибка 1 — Present Continuous вместо "как долго"',
          trRu: true,
        },
        wrong: '❌ I am living here for five years.',
        right: '✅ I have been living here for five years.',
        note: {
          text: 'Если мы указываем период (как долго?), обычный Present Continuous (am living) использовать нельзя.',
          trRu: true,
        },
      },
      {
        title: {
          text: 'Ошибка 2 — Использование со Stative Verbs (глаголы состояния)',
          trRu: true,
        },
        wrong: '❌ I have been having this car since 2020',
        right: '✅ I have had this car since 2020.',
        note: {
          text: 'Глаголы типа have (в значении владения), know, like, want не дружат с Continuous. Используем просто Present Perfect.',
          trRu: true,
        },
      },
      {
        title: {
          text: 'Ошибка 3 — Путаница have/has',
          trRu: true,
        },
        wrong: '❌ He have been working since morning.',
        right: '✅ He has been working since morning.',
        note: {
          text: 'Не забывай, что для he/she/it мы всегда используем has.',
          trRu: true,
        },
      },
    ],
  },

  whenToUse: {
    type: 'whenToUse',
    title: { text: 'Когда нужен Present Perfect Continuous', trRu: true },
    // ✅ triggers не переводим (как договорились)
    triggers: [
      { text: 'for , since, all day, lately/recently' },
      { text: 'How long?' },
      { text: 'visible result in the present' },
    ],
    comparison: {
      left: {
        title: 'Present Perfect',
        examples: [
          {
            en: 'I have read this book.',
            ru: { text: 'Я прочитал эту книгу. (Результат: я знаю сюжет, я её закончил).', trRu: true },
          },
        ],
      },
      right: {
        title: 'Present Perfect Continuous',
        examples: [
          {
            en: 'I have been reading this book all day.',
            ru: {
              text: 'Я читаю эту книгу весь день. (Акцент на процессе: я всё ещё в процессе чтения или только что отложил её, потратив много времени).',
              trRu: true,
            },
          },
        ],
      },
    },
  },
}