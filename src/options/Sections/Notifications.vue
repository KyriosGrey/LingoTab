<script setup lang="ts">
import Section from '../components/Section.vue'
import Select from '../components/Select.vue'
import { ref, watch, onMounted } from 'vue'
import { getNotificationSettings, setNotificationSettings, initializeMirrors } from '@/utils/storage-sync'
import browser from 'webextension-polyfill'

// Notification settings
const notificationsEnabled = ref(false)
const selectedInterval = ref(60)

// Frequency options (in minutes)
const frequencyOptions = [
  { text: '30 minutes', value: 30 },
  { text: '1 hour', value: 60 },
  { text: '2 hours', value: 120 },
  { text: '3 hours', value: 180 },
  { text: '6 hours', value: 360 },
]

// Load settings on mount
onMounted(async () => {
  const settings = await getNotificationSettings()
  notificationsEnabled.value = settings.enabled
  selectedInterval.value = settings.intervalMinutes
})

// Save settings when they change
watch([notificationsEnabled, selectedInterval], async ([enabled, interval]) => {
  await setNotificationSettings({
    enabled,
    intervalMinutes: interval,
  })
  
  // Initialize mirrors when enabling for the first time
  if (enabled) {
    await initializeMirrors()
  }
})

// Test notification function
async function testNotification() {
  try {
    // Send message to background script to show notification immediately
    await browser.runtime.sendMessage({ action: 'test-notification' })
  }
  catch (error) {
    console.error('Failed to send test notification:', error)
    // Fallback: create notification directly
    await browser.notifications.create('nwt-test', {
      type: 'basic',
      iconUrl: browser.runtime.getURL('assets/128.png'),
      title: 'Test Notification',
      message: 'This is a test notification from New Word Tab',
    })
  }
}
</script>

<template>
  <Section
    title="Learned Words Repetition Notifications"
    description="Get periodic reminders to review your learned words."
  >
    <!-- Enable/Disable Checkbox -->
    <div class="setting-item">
      <label class="checkbox">
        <b class="setting-label">Enable notifications</b>
        <small class="setting-description">Show periodic notifications with random learned words</small>

        <input type="checkbox" v-model="notificationsEnabled">
        <span class="checkmark" />
      </label>
    </div>

    <!-- Frequency Selector -->
    <div v-if="notificationsEnabled" class="setting-item">
      <div class="setting-row">
        <div>
          <b class="setting-label">Notification frequency</b>
          <small class="setting-description">How often to show notifications</small>
        </div>
        <Select
          v-model="selectedInterval"
          title="Select notification frequency"
          :options="frequencyOptions"
        />
      </div>
    </div>

    <!-- Test Button -->
    <div v-if="notificationsEnabled" class="setting-item">
      <button class="test-button" @click="testNotification">
        Test notification
      </button>
      <small class="setting-description">Click to see what a notification looks like</small>
    </div>
  </Section>
</template>

<style scoped>
.setting-item {
  margin: 15px 0;
}

.setting-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.setting-label {
  display: block;
  margin-bottom: 3px;
  font-size: 0.9rem;
}

.setting-description {
  display: block;
  color: hsla(var(--color-raw), 0.75);
  font-size: 0.75rem;
}

.checkbox {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 0.8rem;
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

.test-button {
  padding: 8px 16px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid hsla(var(--color-raw), 0.4);
  background: hsla(var(--color-raw), 0.1);
  color: var(--color);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.test-button:hover {
  background: hsla(var(--color-raw), 0.2);
  border-color: hsla(var(--color-raw), 0.6);
}

.test-button:active {
  transform: scale(0.98);
}
</style>
