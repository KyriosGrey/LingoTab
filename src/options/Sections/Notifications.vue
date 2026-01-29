<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import browser from 'webextension-polyfill'
import {
  getNotificationSettings,
  setNotificationSettings,
  initializeMirrors,
  ensureRunnerPageOpen,
  mirrorLearnedWords,
  mirrorTargetLanguage,
} from '@/composables/useNotificationMirror'

import Section from '../components/Section.vue'
import Select from '../components/Select.vue'

// Frequency options
const frequencyOptions = [
  { text: '30 minutes', value: 30 * 60 * 1000 },
  { text: '1 hour', value: 60 * 60 * 1000 },
  { text: '2 hours', value: 2 * 60 * 60 * 1000 },
  { text: '3 hours', value: 3 * 60 * 60 * 1000 },
  { text: '6 hours', value: 6 * 60 * 60 * 1000 },
]

const enabled = ref(false)
const frequency = ref(3600000) // 1 hour default
const isLoading = ref(true)

onMounted(async () => {
  const settings = await getNotificationSettings()
  enabled.value = settings.enabled
  frequency.value = settings.frequency
  isLoading.value = false
})

watch(enabled, async (newValue) => {
  if (newValue) {
    // Initialize mirrors and ensure runner is open
    await initializeMirrors()
    await setNotificationSettings({ enabled: newValue, frequency: frequency.value })
    await ensureRunnerPageOpen()
  }
  else {
    await setNotificationSettings({ enabled: newValue, frequency: frequency.value })
  }
})

watch(frequency, async (newValue) => {
  await setNotificationSettings({ enabled: enabled.value, frequency: newValue })
})

async function handleTestNotification() {
  // Ensure mirrors are up to date
  await mirrorLearnedWords()
  await mirrorTargetLanguage()

  // Send test message to runner
  try {
    await browser.runtime.sendMessage({ action: 'test-notification' })
    console.log('[Notifications] Test notification sent')
  }
  catch (error) {
    console.error('[Notifications] Failed to send test notification:', error)
    // If runner is not open, open it and retry
    await ensureRunnerPageOpen()
    setTimeout(async () => {
      try {
        await browser.runtime.sendMessage({ action: 'test-notification' })
      }
      catch (retryError) {
        console.error('[Notifications] Retry failed:', retryError)
      }
    }, 500)
  }
}
</script>

<template>
  <Section
    title="Learned Words Notifications"
    description="Get periodic notifications with random words from your learned list to help reinforce your memory."
  >
    <template #bar>
      <div class="controls">
        <label class="checkbox-label">
          <input v-model="enabled" type="checkbox" :disabled="isLoading">
          Enable notifications
        </label>
      </div>
    </template>

    <div v-if="enabled" class="notification-settings">
      <div class="setting-row">
        <label for="frequency-select">Notification frequency:</label>
        <Select
          id="frequency-select"
          v-model="frequency"
          title="Select notification frequency"
          :options="frequencyOptions"
        />
      </div>

      <div class="setting-row">
        <button class="test-btn" @click="handleTestNotification">
          Test notification
        </button>
      </div>

      <p class="info-text">
        <strong>Note:</strong> The runner page must remain open in a background tab for notifications to work.
        It will open automatically when you enable notifications.
      </p>
    </div>
  </Section>
</template>

<style scoped>
.controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.notification-settings {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0;
}

.setting-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.setting-row label {
  font-size: 0.9rem;
  color: var(--color);
}

.test-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color);
  background: hsla(var(--color-raw), 0.15);
  cursor: pointer;
  transition: background-color ease-in-out 0.13s;
}

.test-btn:hover {
  background: hsla(var(--color-raw), 0.25);
}

.info-text {
  font-size: 0.8rem;
  color: hsla(var(--color-raw), 0.7);
  margin: 0;
  padding: 10px;
  background: hsla(var(--color-raw), 0.05);
  border-radius: 4px;
}

.info-text strong {
  color: var(--color);
}
</style>
