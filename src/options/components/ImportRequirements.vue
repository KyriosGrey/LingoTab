<script setup lang="ts">
// Shared by all three import modals (ignored / learning / learned words): they
// accept the same kind of file and used to repeat this list word for word.
// Only the ignored-words modal adds the matching rule.
import { t } from '@/i18n'

defineProps<{
  matchingRule?: boolean
}>()
</script>

<template>
  <div class="requirements text-body-sm">
    <b>{{ t('import.requirements') }}</b>
    <ul>
      <li v-if="matchingRule">
        {{ t('import.req.matching') }}
      </li>
      <li>{{ t('import.req.separators') }}</li>
      <li>{{ t('import.req.length') }}</li>
      <li>{{ t('import.req.lowercase') }}</li>
      <li>{{ t('import.req.format') }}</li>
    </ul>
  </div>
</template>

<style scoped>
.requirements {
  color: var(--color);
}

.requirements b {
  font-weight: 600;
}

ul {
  padding-left: 25px;
}

ul li {
  margin: 0 0 5px;
}
</style>
