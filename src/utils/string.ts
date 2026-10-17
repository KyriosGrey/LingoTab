export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// One word as getWordsOfText(text, 30) would accept it: no spaces or commas, under 30 chars.
export function isSingleWord(word: string) {
  return !!word && !/[\s,]/.test(word) && word.length < 30
}

// Source language to translate a user-added word from. Plain Latin letters are taken as
// English, as before; anything else (ą, ß, 猫, …) is left for the service to detect.
// Not 'auto' for everything: detection misreads short English words ("die" → Afrikaans).
export function guessSourceLanguage(word: string): 'en' | 'auto' {
  return /^[a-z'-]+$/i.test(word) ? 'en' : 'auto'
}

export function getWordsOfText(text: string, maxLength = Infinity) {
  return text.split(/\s|,/g).filter((word) => {
    const trimmed = word.trim()
    return trimmed && trimmed.length < maxLength
  })
}
