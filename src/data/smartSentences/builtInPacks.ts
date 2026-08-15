// Maps a Google Translate language code (see src/data/googleTranslateLanguages.ts)
// to the matching built-in sentence pack. Falls back to Russian for any
// language without a translated pack.
import type { Pack } from '@/utils/packValidator'
import { builtInPack as ar } from './builtInPack.ar'
import { builtInPack as de } from './builtInPack.de'
import { builtInPack as es } from './builtInPack.es'
import { builtInPack as fr } from './builtInPack.fr'
import { builtInPack as hi } from './builtInPack.hi'
import { builtInPack as ja } from './builtInPack.ja'
import { builtInPack as pl } from './builtInPack.pl'
import { builtInPack as ru } from './builtInPack'
import { builtInPack as uk } from './builtInPack.uk'
import { builtInPack as zhCN } from './builtInPack.zh-CN'

const DEFAULT_LANGUAGE_CODE = 'ru'

const packsByLanguageCode: Record<string, Pack> = {
  ru,
  ar,
  de,
  es,
  fr,
  hi,
  ja,
  pl,
  uk,
  'zh-CN': zhCN,
}

export function getBuiltInPackForLanguage(languageCode?: string): Pack {
  return packsByLanguageCode[languageCode ?? ''] ?? packsByLanguageCode[DEFAULT_LANGUAGE_CODE]
}
