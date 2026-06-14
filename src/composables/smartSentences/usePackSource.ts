import { ref } from 'vue'
import * as storage from '@/utils/storage'

const STORAGE_KEY = 'smartPackSource'

type PackSourceType = 'builtin' | 'uploaded' | 'ai' | null

const packSource = ref<PackSourceType>(null)

export function usePackSource() {
  // Load saved source preference
  async function loadSource() {
    try {
      const data = await storage.get([STORAGE_KEY])
      if (data && (data[STORAGE_KEY] === 'builtin' || data[STORAGE_KEY] === 'uploaded' || data[STORAGE_KEY] === 'ai')) {
        packSource.value = data[STORAGE_KEY]
      } else {
        packSource.value = null
      }
    } catch (e) {
      console.warn('[usePackSource] failed to load source preference', e)
      packSource.value = null
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
