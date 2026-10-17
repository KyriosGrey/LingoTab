import type { MessageKey } from '@/i18n/en'
import { computed, ref } from 'vue'

import MdiSortAlphabeticalAscending from '~icons/mdi/sort-alphabetical-ascending'
import MdiSortAlphabeticalDescending from '~icons/mdi/sort-alphabetical-descending'
import MdiSortClockAscending from '~icons/mdi/sort-clock-ascending'
import MdiSortClockDescending from '~icons/mdi/sort-clock-descending'

// Holds the translation key, not the text: this list is built once when the module
// loads, so a resolved string would freeze the language it was resolved in. The
// component translates it while rendering instead.
export interface SortState { titleKey: MessageKey, icon: unknown, sortMethod: (list: string[]) => string[] }

const SORT_STATES: SortState[] = [
  {
    titleKey: 'list.sort.oldest',
    icon: MdiSortClockAscending,
    sortMethod: (list: string[]) => list,
  },
  {
    titleKey: 'list.sort.newest',
    icon: MdiSortClockDescending,
    sortMethod: (list: string[]) => list.reverse(),
  },
  {
    titleKey: 'list.sort.aToZ',
    icon: MdiSortAlphabeticalAscending,
    sortMethod: (list: string[]) => list.sort((a, b) => a.localeCompare(b)),
  },
  {
    titleKey: 'list.sort.zToA',
    icon: MdiSortAlphabeticalDescending,
    sortMethod: (list: string[]) => list.sort((a, b) => b.localeCompare(a)),
  },
]

// extraStates: list-specific modes appended to the common cycle (e.g. Learning's
// "own translations first").
export default function useSort(extraStates: SortState[] = []) {
  const states = [...SORT_STATES, ...extraStates]
  const sortState = ref(0)

  const sortStateMeta = computed(() => states[sortState.value])

  function setNextSortState() {
    sortState.value = (sortState.value + 1) % states.length
  }

  return {
    sortStateMeta,
    setNextSortState,
  }
}
