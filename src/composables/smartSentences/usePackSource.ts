import { ref } from 'vue'
import * as storage from '@/utils/storage'

const STORAGE_KEY = 'smartPackSource'

type PackSourceType = 'builtin' | 'uploaded' | 'ai' | null

const packSource = ref<PackSourceType>('builtin')

export function usePackSource() {
  // Load saved source preference
  async function loadSource() {
    try {
      const data = await storage.get([STORAGE_KEY])
      const saved = data?.[STORAGE_KEY]
      if (saved === 'builtin' || saved === 'uploaded' || saved === 'ai') {
        packSource.value = saved
      } else if (saved === undefined) {
        // Nothing saved yet = new user -> the built-in pack is on by default.
        // Turning it off stores an explicit null, which must stay off.
        packSource.value = 'builtin'
      } else {
        packSource.value = null
      }
    } catch (e) {
      console.warn('[usePackSource] failed to load source preference', e)
      packSource.value = 'builtin'
    }
  }

  // Set pack source
  async function setSource(source: PackSourceType) {
    packSource.value = source
    try {
      await storage.set({ [STORAGE_KEY]: source })
    } catch (e) {
      console.warn('[usePackSource] failed to save source preference', e)
    }
  }

  // Get current source
  function getSource(): PackSourceType {
    return packSource.value
  }

  // Check if built-in is active
  function isBuiltInActive(): boolean {
    return packSource.value === 'builtin'
  }

  // Check if uploaded is active
  function isUploadedActive(): boolean {
    return packSource.value === 'uploaded'
  }

  // Check if AI is active
  function isAiActive(): boolean {
    return packSource.value === 'ai'
  }

  return {
    packSource,
    loadSource,
    setSource,
    getSource,
    isBuiltInActive,
    isUploadedActive,
    isAiActive
  }
}
