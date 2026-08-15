<script lang="ts" setup>
import SearchInput from '@/components/shared/SearchInput.vue'
import useSort from '@/composables/useSort'

import { computed, ref } from 'vue'

const props = defineProps<{
  list: string[]
  dense?: boolean
  border?: boolean
  stretch?: boolean
  pointer?: boolean
  maxHeight?: string
  noFilters?: boolean
}>()

defineEmits<{
  (e: 'rowClick', word: string): void
}>()

const { sortStateMeta, setNextSortState } = useSort()

const searchQuery = ref('')

const filteredWords = computed(() =>
  sortStateMeta.value.sortMethod(
    props.list.filter(word =>
      word.toLowerCase().includes(searchQuery.value.toLowerCase()),
    ),
  ),
)
</script>

<template>
  <div>
    <div v-if="!noFilters" class="top">
      <div class="filters" :style="{ flex: stretch ? '1' : '0' }">
        <button
          class="sort-btn"
          :title="`Sort (${sortStateMeta.text})`"
          :disabled="!list.length"
          @click="setNextSortState"
        >
          <component :is="sortStateMeta.icon" />
        </button>

        <SearchInput
          v-model="searchQuery"
          placeholder="Filter"
          class="grow"
          :disabled="!list.length"
        />
      </div>

      <slot name="top-action" />
    </div>

    <slot v-if="!list.length" name="empty">
      <p class="state-message">
        <i-ic-round-inbox />
        <br>
        There is nothing to show
      </p>
    </slot>

    <p v-else-if="!filteredWords.length" class="state-message">
      <i-ic-round-search-off />
      <br>
      No word matched
    </p>

    <ul
      v-else
      class="list tiny-scrollbar"
      :class="{ 'list--border': border }"
      :style="{ maxHeight }"
    >
      <li
        v-for="word of filteredWords"
        :key="word"
        :style="{
          padding: dense ? '5px 10px' : '8px',
          borderRadius: border ? '0' : '4px',
          cursor: pointer ? 'pointer' : 'default',
        }"
        class="row"
        @click="$emit('rowClick', word)"
      >
        <span class="row__text text-body">{{ word }}</span>
        <div class="actions" @click.stop>
          <slot name="actions" :word="word" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.top,
.filters {
  display: flex;
  align-items: center;
  gap: 10px;
}
.top {
  justify-content: space-between;
  margin-bottom: 16px;
}

.sort-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 6px;
  border: none;
  border-radius: 4px;
  color: var(--color);
  background-color: var(--overlay-weak);
  transition: background-color ease-in-out 0.13s;
}
/* explicit px, not font-size: unplugin-icons renders these SVGs at a 1.2em
   scale, so a font-size rule would come out 20% bigger than the number named */
.sort-btn :deep(svg) {
  width: 24px;
  height: 24px;
}
.sort-btn:hover:not(:disabled) {
  background-color: var(--overlay-strong);
}
.sort-btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.grow {
  flex-grow: 1;
}

.list {
  padding: 0;
  list-style: none;
  overflow-y: auto;
}

.list--border {
  padding: 5px 0;
  border-radius: 6px;
  border: 1px solid var(--overlay-strong);
}

.row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.row:hover {
  background-color: var(--overlay-weak);
}

.row__text {
  flex: 1;
  min-width: 0;
  color: var(--color);
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}
/* explicit px, not font-size: unplugin-icons renders these SVGs at a 1.2em
   scale, so a font-size rule would come out 20% bigger than the number named */
.actions :deep(svg) {
  width: 18px;
  height: 18px;
}

.state-message {
  margin-top: 50px;
  font-size: 1rem;
  text-align: center;
}
.state-message svg {
  font-size: 1.5rem;
}
</style>
