// Maps a Google Translate language code (see src/data/googleTranslateLanguages.ts)
// to the matching built-in sentence pack. Falls back to Russian for any
// language without a translated pack.
//
// Each pack is a separate dynamic import rather than a static one: 10 translated
// variants add up to ~800KB, and without this every user's newTab bundle carried all
// ten regardless of which single language they actually use, tripping Vite's 500KB
// chunk-size warning. Loaded on demand instead, split into its own small chunk.
import type { Pack } from '@/utils/packValidator'

const DEFAULT_LANGUAGE_CODE = 'ru'

const packLoaders: Record<string, () => Promise<{ builtInPack: Pack }>> = {
  'ru': () => import('./builtInPack'),
  'ar': () => import('./builtInPack.ar'),
  'de': () => import('./builtInPack.de'),
  'es': () => import('./builtInPack.es'),
  'fr': () => import('./builtInPack.fr'),
  'hi': () => import('./builtInPack.hi'),
  'ja': () => import('./builtInPack.ja'),
  'pl': () => import('./builtInPack.pl'),
  'uk': () => import('./builtInPack.uk'),
  'zh-CN': () => import('./builtInPack.zh-CN'),
}

export async function getBuiltInPackForLanguage(languageCode?: string): Promise<Pack> {
  const loader = packLoaders[languageCode ?? ''] ?? packLoaders[DEFAULT_LANGUAGE_CODE]
  const { builtInPack } = await loader()
  return builtInPack
}
