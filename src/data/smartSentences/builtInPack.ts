// Built-in sentences pack — available out-of-the-box
// Structure matches the Pack type from packValidator.ts
import type { Pack } from '@/utils/packValidator'

export const builtInPack: Pack = {
  count: 25,
  settings: {
    level: 'B1',
    grammarFocus: ['All'],
    topics: ['Daily Life'],
    lengthWords: [5, 15],
    targetLang: 'ru'
  },
  sentences: [
    {
      id: '1',
      text: 'I have been learning English for two years.',
      translation: 'Я учу английский язык два года.',
      hint: 'I [____] [____] learning English for two years.',
      tense: 'Present Perfect Continuous',
      topic: 'Daily Life',
      lengthWords: 7
    },
    {
      id: '2',
      text: 'She was working yesterday when I called her.',
      translation: 'Она работала вчера, когда я её позвонил.',
      hint: 'She [____] [____] yesterday when I called her.',
      tense: 'Past Continuous',
      topic: 'Daily Life',
      lengthWords: 9
    },
    {
      id: '3',
      text: 'They will have finished the project by Friday.',
      translation: 'Они закончат проект к пятнице.',
      hint: 'They [____] [____] [____] the project by Friday.',
      tense: 'Future Perfect',
      topic: 'Workplace Communication',
      lengthWords: 7
    },
    {
      id: '4',
      text: 'If I had known about the party, I would have gone.',
      translation: 'Если бы я знал о вечеринке, я бы пошёл.',
      hint: 'If I [____] [____] about the party, I [____] [____] [____].',
      tense: 'Conditionals',
      topic: 'Daily Life',
      lengthWords: 9
    },
    {
      id: '5',
      text: 'The report is being prepared right now.',
      translation: 'Отчёт готовится прямо сейчас.',
      hint: 'The report [____] [____] prepared right now.',
      tense: 'Present Continuous Passive',
      topic: 'Workplace Communication',
      lengthWords: 6
    },
    {
      id: '6',
      text: 'We have already discussed this matter twice.',
      translation: 'Мы уже обсудили этот вопрос дважды.',
      hint: 'We [____] [____] discussed this matter twice.',
      tense: 'Present Perfect',
      topic: 'Workplace Communication',
      lengthWords: 7
    },
    {
      id: '7',
      text: 'He does not work on weekends at all.',
      translation: 'Он совсем не работает по выходным.',
      hint: 'He [____] [____] work on weekends at all.',
      tense: 'Present Simple',
      topic: 'Daily Life',
      lengthWords: 7
    },
    {
      id: '8',
      text: 'By next month, they will have completed the renovation.',
      translation: 'К следующему месяцу они завершат ремонт.',
      hint: 'By next month, they [____] [____] [____] the renovation.',
      tense: 'Future Perfect',
      topic: 'Daily Life',
      lengthWords: 8
    },
    {
      id: '9',
      text: 'She had been studying medicine for three years before she quit.',
      translation: 'Она занималась медициной три года, прежде чем бросить.',
      hint: 'She [____] [____] [____] studying medicine for three years before she quit.',
      tense: 'Past Perfect Continuous',
      topic: 'Education',
      lengthWords: 11
    },
    {
      id: '10',
      text: 'Can you help me with this task right now?',
      translation: 'Ты можешь помочь мне с этой задачей прямо сейчас?',
      hint: '[____] you help me with this task right now?',
      tense: 'Modal Verbs',
      topic: 'Workplace Communication',
      lengthWords: 9
    },
    {
      id: '11',
      text: 'The meeting is taking place in the conference room today.',
      translation: 'Встреча проходит в конференц-зале сегодня.',
      hint: 'The meeting [____] [____] place in the conference room today.',
      tense: 'Present Continuous',
      topic: 'Workplace Communication',
      lengthWords: 9
    },
    {
      id: '12',
      text: 'They have never visited this country before in their lives.',
      translation: 'Они никогда не были в этой стране раньше.',
      hint: 'They [____] [____] visited this country before in their lives.',
      tense: 'Present Perfect',
      topic: 'Travel and Directions',
      lengthWords: 9
    },
    {
      id: '13',
      text: 'If she studies hard, she will pass the exam easily.',
      translation: 'Если она хорошо учится, она легко сдаст экзамен.',
      hint: 'If she studies hard, she [____] pass the exam easily.',
      tense: 'Conditionals',
      topic: 'Education',
      lengthWords: 9
    },
    {
      id: '14',
      text: 'The books were being organized alphabetically last week.',
      translation: 'Книги организовывались по алфавиту на прошлой неделе.',
      hint: 'The books [____] [____] organized alphabetically last week.',
      tense: 'Past Continuous Passive',
      topic: 'Daily Life',
      lengthWords: 8
    },
    {
      id: '15',
      text: 'She might come to the party this evening if she can.',
      translation: 'Она может прийти на вечеринку этим вечером, если сможет.',
      hint: 'She [____] come to the party this evening if she can.',
      tense: 'Modal Verbs',
      topic: 'Daily Life',
      lengthWords: 10
    },
    {
      id: '16',
      text: 'After I finish my work, I will call you immediately.',
      translation: 'После того как я закончу работу, я сразу тебе позвоню.',
      hint: 'After I finish my work, I [____] call you immediately.',
      tense: 'Future Simple',
      topic: 'Daily Life',
      lengthWords: 8
    },
    {
      id: '17',
      text: 'The letter has been sent to all employees this morning.',
      translation: 'Письмо было отправлено всем сотрудникам этим утром.',
      hint: 'The letter [____] [____] sent to all employees this morning.',
      tense: 'Present Perfect Passive',
      topic: 'Workplace Communication',
      lengthWords: 9
    },
    {
      id: '18',
      text: 'Does he usually take public transport to work every day?',
      translation: 'Он обычно ездит на общественном транспорте на работу каждый день?',
      hint: '[____] he usually take public transport to work every day?',
      tense: 'Present Simple',
      topic: 'Travel and Directions',
      lengthWords: 10
    },
    {
      id: '19',
      text: 'By the time you arrive, I will have prepared dinner.',
      translation: 'К тому времени, когда ты приедешь, я приготовлю ужин.',
      hint: 'By the time you arrive, I [____] [____] prepared dinner.',
      tense: 'Future Perfect',
      topic: 'Daily Life',
      lengthWords: 9
    },
    {
      id: '20',
      text: 'The contract had been signed before the deadline was announced.',
      translation: 'Контракт был подписан до объявления крайнего срока.',
      hint: 'The contract [____] [____] signed before the deadline was announced.',
      tense: 'Past Perfect Passive',
      topic: 'Workplace Communication',
      lengthWords: 9
    },
    {
      id: '21',
      text: 'They are currently discussing the new project proposal in detail.',
      translation: 'Они в настоящее время обсуждают новое предложение проекта подробно.',
      hint: 'They [____] currently discussing the new project proposal in detail.',
      tense: 'Present Continuous',
      topic: 'Workplace Communication',
      lengthWords: 9
    },
    {
      id: '22',
      text: 'He should not have made that decision without consulting the team.',
      translation: 'Он не должен был принимать это решение без консультации с командой.',
      hint: 'He [____] not [____] [____] that decision without consulting the team.',
      tense: 'Modal Verbs',
      topic: 'Workplace Communication',
      lengthWords: 10
    },
    {
      id: '23',
      text: 'We had been waiting for three hours when the bus finally arrived.',
      translation: 'Мы ждали три часа, когда автобус наконец прибыл.',
      hint: 'We [____] [____] waiting for three hours when the bus finally arrived.',
      tense: 'Past Perfect Continuous',
      topic: 'Travel and Directions',
      lengthWords: 10
    },
    {
      id: '24',
      text: 'The website will be updated with new features next week.',
      translation: 'Веб-сайт будет обновлён новыми функциями на следующей неделе.',
      hint: 'The website [____] [____] updated with new features next week.',
      tense: 'Future Simple Passive',
      topic: 'IT-Dev',
      lengthWords: 9
    },
    {
      id: '25',
      text: 'Unless you practice daily, you will not improve your skills quickly.',
      translation: 'Если ты не будешь тренироваться ежедневно, ты не улучшишь свои навыки быстро.',
      hint: 'Unless you practice daily, you [____] not improve your skills quickly.',
      tense: 'Conditionals',
      topic: 'Education',
      lengthWords: 10
    }
  ]
}
