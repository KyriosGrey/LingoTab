<script setup lang="ts">
defineProps<{
  // Optional: a group holding a single section doesn't need to repeat the group's
  // own title on the row inside it (see the "Ignored words" group).
  title?: string
  description: string
}>()
</script>

<template>
  <section class="section">
    <div class="section__bar">
      <div class="section__details">
        <h2 v-if="title" class="section__title text-heading-18">
          {{ title }}
        </h2>
        <p class="section__description text-body-sm">
          {{ description }}
        </p>
      </div>

      <div v-if="$slots.bar" class="section__control">
        <slot name="bar" />
      </div>
    </div>

    <slot />
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.section:not(:first-child) {
  border-top: 1px solid var(--overlay-weak);
  margin-top: 24px;
  padding-top: 24px;
}

.section__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

/* The control (dropdown/toggle/button) always keeps its own size and stays on the
   row; if space runs short, the text wraps instead of the whole row breaking. */
.section__details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1 1 auto;
  min-width: 0;
  max-width: 440px;
}

.section__control {
  flex-shrink: 0;
}

.section__title {
  margin: 0;
  color: var(--color);
}
.section__description {
  color: var(--text-secondary);
  margin: 0;
}
</style>
