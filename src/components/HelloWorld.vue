<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ msg :string }>()
const count = ref(0)
</script>

<template>
  <h1 class="text-red-500">{{ msg }}</h1>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

