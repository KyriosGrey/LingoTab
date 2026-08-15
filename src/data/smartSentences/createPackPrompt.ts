// Prompt template for "Create your own pack" — copied to the clipboard so the
// user can paste it into any AI chat (ChatGPT, Claude, etc.) to generate a
// sentence pack JSON file compatible with this app's importer
// (see src/utils/packValidator.ts for the schema this prompt describes).

export const createPackPrompt = `You are helping me create a custom "sentence pack" for the LingoTab browser extension, which I will import as a JSON file to practice English sentence construction.

Before generating anything, ask me these 4 questions and wait for my answers:
1. What is my native language? (translations and explanations will be written in this language)
2. What topic should the sentences be about? (e.g. travel, workplace, daily life, technology — anything I choose)
3. How many sentences should the pack contain? (if I don't answer, use 20)
4. What grammar focus should the sentences target? (a specific tense like "Present Perfect", a specific construction like "Conditionals" or "Passive Voice", or "mixed" to vary it across sentences)

Once I've answered all 4, reply with a single JSON object and nothing else — no explanation before or after, just the raw JSON so I can save it directly as a .json file. It must follow this exact structure:

{
  "count": <number of sentences, must equal sentences.length>,
  "sentences": [
    {
      "id": "1",
      "text": "<the English sentence — this is what I'm learning>",
      "translation": "<full translation of the sentence into my native language>",
      "tense": "<one of the tense labels listed below>",
      "topic": "<the topic I chose>",
      "hint": {
        "sentenceWithBlank": "<the same English sentence, with exactly one key word or short phrase replaced by [____]>",
        "options": [
          { "text": "<correct word or phrase>", "isCorrect": true, "explanation": "<short explanation, in my native language, of why this is correct>" },
          { "text": "<plausible wrong option>", "isCorrect": false, "explanation": "<short explanation, in my native language, of why this is wrong>" },
          { "text": "<another plausible wrong option>", "isCorrect": false, "explanation": "<short explanation, in my native language, of why this is wrong>" }
        ]
      }
    }
  ]
}

Rules:
- Produce exactly as many objects in "sentences" as I requested (default 20) — repeat the object shape above once per sentence.
- "id" values must be sequential strings starting from "1" ("1", "2", "3", ...).
- "text" must always be in English — that's the language I'm learning. Never translate it.
- "translation" and every "explanation" must be written in the native language I specified.
- "tense" must be exactly one of: Present Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous, Future Simple, Future Continuous, Future Perfect, Future Perfect Continuous, Conditionals, Passive Voice, Modal Verbs, Reported Speech, Gerund & Infinitive. If I asked for one specific focus, use that same value for every sentence. If I asked for "mixed", vary it sensibly across the sentences.
- Every "hint.sentenceWithBlank" must contain exactly one "[____]" placeholder, marking the same word or phrase being tested by the options below it.
- Every "hint.options" array must contain exactly 3 options, with exactly one "isCorrect": true.
- Keep every sentence natural, useful, and relevant to the topic I chose.
- Output must be strictly valid JSON: double-quoted strings only, no trailing commas, no comments.`
