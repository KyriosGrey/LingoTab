<script setup lang="ts">
import IconButton from '@/components/shared/IconButton.vue'
import SearchInput from '@/components/shared/SearchInput.vue'
import useWord from '@/composables/words/useWord'
import { computed, ref, watch } from 'vue'

const query = ref('')
const lastQuery = ref('')
const inputRef = ref<InstanceType<typeof SearchInput> | null>(null)
const isVisible = ref(false)
const { searchWord } = useWord()

const canSearch = computed(
  () => query.value && query.value !== lastQuery.value,
)

function handleSearch() {
  if (canSearch.value) {
    lastQuery.value = query.value
    searchWord(query.value)
  }

  if (!query.value) {
    isVisible.value = false
  }
}

// Auto focus on search input when it is visible
watch(inputRef, el => el?.focus())
</script>

<template>
  <div class="search">
    <IconButton v-if="!isVisible" title="Search word" @click="isVisible = true">
      <i-ic-round-search />
    </IconButton>

    <form v-else class="search__form" @submit.prevent="handleSearch">
      <SearchInput
        ref="inputRef"
        v-model="query"
        placeholder="Search word"
      />
    </form>
  </div>
</template>

<style scoped>
.search__form {
  width: 200px;
}
</style>
