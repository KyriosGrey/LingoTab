<script setup lang="ts">
import { computed } from 'vue'
import Section from '@/options/components/Section.vue'

const props = defineProps<{ modelValue?: string[], items: string[], counts?: (number | undefined)[] }>()
const emit = defineEmits(['update:modelValue'])

const localValue = computed({
  get() { return props.modelValue ?? [] },
  set(v: any) { emit('update:modelValue', v) },
})

const items = props.items || []
const counts = props.counts || []
</script>

<template>
  <Section
    title="Topics"
    description="Select the topics you'd like generated sentences to be focused on."
  >
    <ul class="vocab-list">
      <li v-for="(t, idx) in items" :key="t" class="vocab-list__item">
        <label class="checkbox">
          <b class="vocab-list__item__name">{{ t }}</b>
          <small v-if="counts && counts[idx]" class="vocab-list__item__count">({{ counts[idx] }})</small>

          <input v-model="localValue" type="checkbox" :value="t">
          <span class="checkmark" />
        </label>
      </li>
    </ul>
  </Section>
</template>

<style scoped>
.vocab-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
.vocab-list__item {
  display: flex;
  align-items: center;
  flex-basis: 50%;
  padding: 5px 0;
}

/* collapse to single column on very narrow screens */
@media all and (max-width: 320px) {
  .vocab-list__item {
    flex-basis: 100%;
  }
}

.vocab-list__item__name {
  margin-right: 5px;
}

.vocab-list__item__count {
  color: hsla(var(--color-raw), 0.75);
}

/* checkbox visuals (copied / aligned with other option sections) */
.checkbox {
  display: flex;
  flex-wrap: wrap;
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
