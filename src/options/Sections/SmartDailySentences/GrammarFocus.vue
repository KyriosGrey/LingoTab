<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue'
import { computed } from 'vue'

const props = defineProps<{ modelValue?: string[], items: string[] }>()
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get() { return props.modelValue ?? [] },
  set(v: any) { emit('update:modelValue', v) },
})

function toggle(value: string, checked: boolean) {
  localValue.value = checked
    ? [...localValue.value, value]
    : localValue.value.filter((v: string) => v !== value)
}

const items = props.items || []

// Define canonical groups (keeps order)
const presentLabels = [
  'Present Simple',
  'Present Continuous',
  'Present Perfect',
  'Present Perfect Continuous',
]

const pastLabels = [
  'Past Simple',
  'Past Continuous',
  'Past Perfect',
  'Past Perfect Continuous',
]

const futureLabels = [
  'Future Simple',
  'Future Continuous',
  'Future Perfect',
  'Future Perfect Continuous',
]

// helper to preserve canonical order and only include items that exist
function pickOrdered(list: string[]) {
  return list.filter(l => items.includes(l))
}

const presentItems = computed(() => pickOrdered(presentLabels))
const pastItems = computed(() => pickOrdered(pastLabels))
const futureItems = computed(() => pickOrdered(futureLabels))

const otherItems = computed(() => {
  const used = new Set([
    'All',
    ...presentLabels,
    ...pastLabels,
    ...futureLabels,
  ])
  return items.filter(i => !used.has(i))
})
</script>

<template>
  <!-- 1) Single 'All' line -->
  <div class="all-row">
    <Checkbox
      :model-value="localValue.includes('All')"
      @update:model-value="toggle('All', $event)"
    >
      <span class="vocab-list__item__name text-body-sm">All</span>
      <span class="text-body-sm-italic hint">(select all grammar points)</span>
    </Checkbox>
  </div>

  <div class="tenses-section">
    <!-- 2) Time groups: Present / Past / Future in three columns -->
    <div class="time-groups">
      <div class="time-col">
        <div class="time-title">
          Present
        </div>
        <ul class="time-list">
          <li v-for="g in presentItems" :key="g">
            <Checkbox :model-value="localValue.includes(g)" @update:model-value="toggle(g, $event)">
              <span class="vocab-list__item__name">{{ g }}</span>
            </Checkbox>
          </li>
        </ul>
      </div>

      <div class="time-col">
        <div class="time-title">
          Past
        </div>
        <ul class="time-list">
          <li v-for="g in pastItems" :key="g">
            <Checkbox :model-value="localValue.includes(g)" @update:model-value="toggle(g, $event)">
              <span class="vocab-list__item__name">{{ g }}</span>
            </Checkbox>
          </li>
        </ul>
      </div>

      <div class="time-col">
        <div class="time-title">
          Future
        </div>
        <ul class="time-list">
          <li v-for="g in futureItems" :key="g">
            <Checkbox :model-value="localValue.includes(g)" @update:model-value="toggle(g, $event)">
              <span class="vocab-list__item__name">{{ g }}</span>
            </Checkbox>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- 3) Remaining grammar points (three columns) -->
  <div class="other-section">
    <div class="other-title">
      Other
    </div>
    <ul class="other-grid">
      <li v-for="g in otherItems" :key="g" class="vocab-list__item">
        <Checkbox :model-value="localValue.includes(g)" @update:model-value="toggle(g, $event)">
          <span class="vocab-list__item__name">{{ g }}</span>
        </Checkbox>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.all-row {
  display: flex;
}

.hint {
  color: var(--text-secondary);
  margin-left: 4px;
}

/* second and third top-level blocks get the same divider rhythm as Section.vue rows */
.tenses-section,
.other-section {
  border-top: 1px solid var(--overlay-weak);
  margin-top: 24px;
  padding-top: 24px;
}

/* Time groups layout: three columns */
.time-groups {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 16px;
}

.time-col {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* Figma "Headings/13-16" — uppercase, wide-tracking column label */
.time-title {
  color: var(--text-secondary);
  text-transform: uppercase;
  font-family: var(--font-family-base);
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12em;
  margin: 0 0 16px;
}

/* lists inside columns */
.time-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.other-title {
  color: var(--text-secondary);
  text-transform: uppercase;
  font-family: var(--font-family-base);
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.12em;
  margin: 0 0 16px;
}

/* grid for other items */
.other-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px 12px;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* fallback single-column on small screens */
@media (max-width: 900px) {
  .time-groups {
    grid-template-columns: repeat(2, 1fr);
  }
  .other-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .time-groups {
    grid-template-columns: 1fr;
  }
  .other-grid {
    grid-template-columns: 1fr;
  }
}

/* common item visuals */
.vocab-list__item,
.time-list li {
  display: flex;
  align-items: center;
  padding: 4px 0;
  box-sizing: border-box;
  min-width: 0;
}

.vocab-list__item__name {
  margin-right: 6px;
  font-family: var(--font-family-base);
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.05em;
  color: var(--color);
}
</style>
