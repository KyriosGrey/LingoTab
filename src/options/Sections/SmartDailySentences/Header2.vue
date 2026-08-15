<script setup lang="ts">
import { version } from '@/../package.json'
</script>

<template>
  <header class="header">
    <h1 class="title text-heading-32">
      Smart Sentences Settings
    </h1>

    <div class="info">
      <a
        class="version text-body-sm"
        href="https://github.com/sajadhsm/new-word-tab/releases"
      >
        LingoTab v{{ version }} | MIT Licensed
      </a>
      <small class="copyright text-body-sm">
        Copyright © 2025-PRESENT Serhii Syvorotkin
      </small>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.title {
  margin: 0;
  color: var(--color);
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  text-align: right;
}

.version {
  text-decoration: none;
  color: var(--text-secondary);
}
.version:hover {
  color: var(--color);
}

.copyright {
  color: var(--text-tertiary);
}

@media screen and (max-width: 450px) {
  .header {
    flex-direction: column;
  }

  .info {
    align-items: center;
    text-align: center;
  }
}
</style>
