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

Once I've answered all 4, reply with exactly two parts, in this order, and nothing else.

PART 1 — the sentence pack: a single JSON object inside a fenced code block, opened with \`\`\`json and closed with \`\`\`. Put nothing but the JSON inside that block — no comments, no notes, no explanation — so that the code block's copy button gives me a file-ready pack. It must follow this exact structure:

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
        "sentenceWithBlank": "<the same English sentence, with the tested unit replaced by [____] — see the blank sizing rules below for how much to remove>",
        "options": [
          { "text": "<the exact word, phrase, or complete grammatical construction removed from sentenceWithBlank>", "isCorrect": true, "explanation": "<short explanation, in my native language, of why this is correct>" },
          { "text": "<plausible wrong option>", "isCorrect": false, "explanation": "<short explanation, in my native language, of why this is wrong>" },
          { "text": "<another plausible wrong option>", "isCorrect": false, "explanation": "<short explanation, in my native language, of why this is wrong>" }
        ]
      }
    }
  ]
}

PART 2 — what to do next: a short set of instructions in plain text BELOW the code block (outside it, never inside), written in the native language I gave in question 1. Keep LingoTab's own button and section names in English, in quotes, because its interface is in English. Keep it to these 4 short steps, in my language:
1. Use the copy button on the code block above — copy only the code, not this text.
2. Open a plain text editor (Notepad on Windows, or TextEdit on Mac switched to plain text via Format > Make Plain Text) and paste it in.
3. Save it as my-pack.json — and in the save dialog set the file type to "All Files", otherwise the computer adds a hidden .txt ending and LingoTab will not see the file.
4. In LingoTab, open the extension settings, go to the "Smart Daily Sentences" section, find "Import sentence pack", press "Choose file" and pick the file you just saved.

Rules:
- Produce exactly as many objects in "sentences" as I requested (default 20) — repeat the object shape above once per sentence.
- "id" values must be sequential strings starting from "1" ("1", "2", "3", ...).
- "text" must always be in English — that's the language I'm learning. Never translate it.
- "translation" and every "explanation" must be written in the native language I specified.
- "tense" must be exactly one of: Present Simple, Present Continuous, Present Perfect, Present Perfect Continuous, Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous, Future Simple, Future Continuous, Future Perfect, Future Perfect Continuous, Conditionals, Passive Voice, Modal Verbs, Reported Speech, Gerund & Infinitive. If I asked for one specific focus, use that same value for every sentence. If I asked for "mixed", vary it sensibly across the sentences.
- Every "hint.sentenceWithBlank" must contain exactly one "[____]" placeholder, sized according to the blank sizing rules at the end of this message.
- Every "hint.options" array must contain exactly 3 options, with exactly one "isCorrect": true.
- Keep every sentence natural, useful, and relevant to the topic I chose.
- The code block in PART 1 must hold strictly valid JSON and nothing else: double-quoted strings only, no trailing commas, no comments, and no text before or after the object inside the block. Everything you want to tell me goes into PART 2, below the block.

Choosing the blank (this is the part most often done wrong — read it carefully):
- Never create a blank by removing an arbitrary word. First identify the grammatical construction the sentence is practising, then decide how much of it to remove.
- The blank must cover the minimal continuous stretch of the sentence that changes when the answer changes. All 3 options must be interchangeable alternatives that fit that exact same stretch, so if the options differ across several words, the blank must cover all of those words. Never leave part of the tested construction outside the blank.
- Verify every blank by substitution: putting the correct option back in place of "[____]" must reproduce the sentence's "text" field exactly, character for character. If it does not, either the blank or the option is wrong — fix it before moving on.
- Words that are not part of what the options are testing (adverbs, objects, time expressions) stay outside the blank.

Worked examples, showing that the right size of a blank varies:
- She has been working with the client since Monday. -> She [____] with the client since Monday. -> correct option: has been working (the options differ across the whole verb phrase: has been working / has worked / is working).
- The report was reviewed by the manager. -> The report [____] by the manager. -> correct option: was reviewed (a passive form is a single unit: was reviewed / reviewed / is reviewing).
- You should clarify the requirements. -> You [____] clarify the requirements. -> correct option: should (only the modal changes here: should / must / might — so the blank stays one word and "clarify" is left in the sentence).`
