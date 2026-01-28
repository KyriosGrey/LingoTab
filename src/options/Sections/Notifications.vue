<script setup lang="ts">
import { onMounted, ref } from 'vue'
import browser from 'webextension-polyfill'
import Section from '../components/Section.vue'
import Select from '../components/Select.vue'
import storage from '@/modules/localStorage'
import { syncLearnedWordsMirror, syncGttlMirror } from '@/utils/storageMirror'

const SETTINGS_KEY = 'notificationSettings'

interface NotificationSettings {
  enabled: boolean
  frequency: number
}

const enabled = ref(false)
const frequency = ref(60)
const isSaving = ref(false)
const isTestingNotification = ref(false)

const frequencyOptions = [
  { text: 'Every 30 minutes', value: 30 },
  { text: 'Every hour', value: 60 },
  { text: 'Every 2 hours', value: 120 },
  { text: 'Every 3 hours', value: 180 },
  { text: 'Every 6 hours', value: 360 },
]

async function loadSettings() {
  try {
    const result = await browser.storage.local.get(SETTINGS_KEY)
    const settings: NotificationSettings = result[SETTINGS_KEY] || { enabled: false, frequency: 60 }
    enabled.value = settings.enabled
    frequency.value = settings.frequency
  } catch (error) {
    console.error('Failed to load notification settings:', error)
  }
}

async function saveSettings() {
  isSaving.value = true
  try {
    const settings: NotificationSettings = {
      enabled: enabled.value,
      frequency: frequency.value,
    }
    
    await browser.storage.local.set({ [SETTINGS_KEY]: settings })
    
    // If enabling notifications, sync mirrors now
    if (enabled.value) {
      await initializeMirrors()
    }
    
    // Notify background worker to reschedule alarms
    await browser.runtime.sendMessage({ type: 'updateNotificationSettings' })
    
    console.log('Notification settings saved')
  } catch (error) {
    console.error('Failed to save notification settings:', error)
  } finally {
    isSaving.value = false
  }
}

async function initializeMirrors() {
  try {
    // Mirror learned words
    const lwData = storage.get('lw')
    const learnedWords = lwData ? lwData.split(',').filter(Boolean) : []
    await syncLearnedWordsMirror(learnedWords)
    
    // Mirror target language
    const gttl = storage.get('gttl') || 'ru'
    await syncGttlMirror(gttl)
    
    console.log('Mirrors initialized')
  } catch (error) {
    console.error('Failed to initialize mirrors:', error)
  }
}

async function testNotification() {
  isTestingNotification.value = true
  try {
    // Ensure mirrors are synced before testing
    await initializeMirrors()
    
    await browser.runtime.sendMessage({ type: 'testNotification' })
    console.log('Test notification triggered')
  } catch (error) {
    console.error('Failed to trigger test notification:', error)
  } finally {
    isTestingNotification.value = false
  }
}

function handleEnabledChange() {
  saveSettings()
}

function handleFrequencyChange() {
  saveSettings()
}

onMounted(() => {
  loadSettings()
})
</script>

<template>
  <Section
    title="Notifications"
    description="Get periodic reminders to practice learned words."
  >
    <div class="notification-settings">
      <div class="setting-row">
        <label class="setting-label">
          <input
            v-model="enabled"
            type="checkbox"
            @change="handleEnabledChange"
          >
          <span>Enable notifications</span>
        </label>
      </div>

      <div v-if="enabled" class="setting-row">
        <label class="setting-label">Frequency:</label>
        <Select
          v-model="frequency"
          title="Select frequency"
          :options="frequencyOptions"
          @change="handleFrequencyChange"
        />
      </div>

      <div v-if="enabled" class="setting-row">
        <button
          class="test-button"
          :disabled="isTestingNotification"
          @click="testNotification"
        >
          {{ isTestingNotification ? 'Testing...' : 'Test notification' }}
        </button>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.notification-settings {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
}

.setting-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.setting-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  cursor: pointer;
}

.setting-label input[type="checkbox"] {
  cursor: pointer;
  width: 18px;
  height: 18px;
}

.test-button {
  padding: 8px 16px;
  border-radius: 6px;
  background: var(--color);
  color: var(--bg-color);
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  transition: opacity 0.2s;
}

.test-button:hover:not(:disabled) {
  opacity: 0.9;
}

.test-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
