<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import useTranslateText from '@/composables/useTranslateText'

const props = defineProps<{
  text: string | undefined
  small?: boolean
}>()

const { translate } = useTranslateText()
const loading = ref(false)
const result = ref<string>('')

async function doTranslate() {
  if (!props.text) {
    result.value = ''
    return
  }
  loading.value = true
  try {
    result.value = await translate(props.text, 'en') // в проекте слова и примеры приходят на EN
  }
  catch {
    result.value = ''
  }
  finally {
    loading.value = false
  }
}

onMounted(doTranslate)
watch(() => props.text, doTranslate)
</script>

<template>
  <p v-if="result" class="tr" :class="[small ? 'tr--small' : '']">
    {{ result }}
  </p>
  <p v-else-if="loading" class="tr tr--muted">
    перевод…
  </p>
</template>

<style scoped>
.tr {
  margin: 4px 0 6px;
  font-size: 0.95rem;
  line-height: 1.35;
  font-style: italic;
  transition: color .3s ease;
}

@media (prefers-color-scheme: dark) {
  .tr {
    color: hsl(0, 0%, 75%);
  }
}

@media (prefers-color-scheme: light) {
  .tr {
    color: hsl(0, 0%, 35%);
  }
}

.tr--small {
  font-size: 0.9rem;
}
.tr--muted {
  opacity: .7;
  font-style: italic;
}
</style>
