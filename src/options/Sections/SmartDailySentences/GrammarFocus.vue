<template>
  <Section
    title="Grammar focus"
    description="Select grammar points to emphasize in generated sentences."
  >
    <!-- 1) Single 'All' line -->
    <div class="all-row">
      <label class="checkbox">
        <input type="checkbox" :value="'All'" v-model="localValue" />
        <b class="vocab-list__item__name">All</b>
        <span class="checkmark" />
      </label>
    </div>

    <!-- 2) Time groups: Present / Past / Future in three columns -->
    <div class="time-groups">
      <div class="time-col">
        <div class="time-title">Present</div>
        <ul class="time-list">
          <li v-for="g in presentItems" :key="g">
            <label class="checkbox">
              <input type="checkbox" :value="g" v-model="localValue" />
              <span class="vocab-list__item__name">{{ g }}</span>
              <span class="checkmark" />
            </label>
          </li>
        </ul>
      </div>

      <div class="time-col">
        <div class="time-title">Past</div>
        <ul class="time-list">
          <li v-for="g in pastItems" :key="g">
            <label class="checkbox">
              <input type="checkbox" :value="g" v-model="localValue" />
              <span class="vocab-list__item__name">{{ g }}</span>
              <span class="checkmark" />
            </label>
          </li>
        </ul>
      </div>

      <div class="time-col">
        <div class="time-title">Future</div>
        <ul class="time-list">
          <li v-for="g in futureItems" :key="g">
            <label class="checkbox">
              <input type="checkbox" :value="g" v-model="localValue" />
              <span class="vocab-list__item__name">{{ g }}</span>
              <span class="checkmark" />
            </label>
          </li>
        </ul>
      </div>
    </div>

    <!-- 3) Spacer and remaining grammar points (three columns) -->
    <div class="other-section">
      <div class="other-title">Other</div>
      <ul class="other-grid">
        <li v-for="g in otherItems" :key="g" class="vocab-list__item">
          <label class="checkbox">
            <input type="checkbox" :value="g" v-model="localValue" />
            <span class="vocab-list__item__name">{{ g }}</span>
            <span class="checkmark" />
          </label>
        </li>
      </ul>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/options/components/Section.vue'

const props = defineProps<{ modelValue?: string[], items: string[] }>()
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get() { return props.modelValue ?? [] },
  set(v: any) { emit('update:modelValue', v) }
})

const items = props.items || []

// Define canonical groups (keeps order)
const presentLabels = [
  'Present Simple',
  'Present Continuous',
  'Present Perfect',
  'Present Perfect Continuous'
]

const pastLabels = [
  'Past Simple',
  'Past Continuous',
  'Past Perfect',
  'Past Perfect Continuous'
]

const futureLabels = [
  'Future Simple',
  'Future Continuous',
  'Future Perfect',
  'Future Perfect Continuous'
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
    ...futureLabels
  ])
  return items.filter(i => !used.has(i))
})
</script>

<style scoped>
/* All single row */
.all-row {
  margin-bottom: 8px;
}

/* Time groups layout: three columns */
.time-groups {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 16px;
  margin-bottom: 12px;
}

.time-col {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* time-title styled to match section description text */
.time-title {
  color: hsla(var(--color-raw), 0.7);
  font-size: 0.75rem;
  margin: 0 0 5px;
  font-weight: 400;
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

/* Remaining grammar points — three-column grid */
.other-section {
  margin-top: 8px;
}

.other-title {
  /* match style used for time-title (section description look) */
  color: hsla(var(--color-raw), 0.7);
  font-size: 0.75rem;
  margin: 0 0 6px;
  font-weight: 400;
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

/* item name bold like elsewhere */
.vocab-list__item__name {
  margin-right: 6px;
  font-weight: 600;
  color: var(--color);
}

/* checkbox visuals (consistent with other option sections) */
.checkbox {
  display: flex;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 0.8rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: -3px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: hsla(var(--color-raw), 0.2);
  border-radius: 5px;
}

.checkbox:hover input ~ .checkmark {
  background-color: hsla(var(--color-raw), 0.3);
}

.checkbox input:checked ~ .checkmark {
  background-color: var(--color);
}

/* tick mark */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid var(--bg-color);
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}

.checkbox input:focus ~ .checkmark {
  box-shadow: 0 0 3px var(--color);
}
</style>